import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { getSortedProducts } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProducts from "../../wrappers/product/ShopProducts";
import { fetchProducts } from "../../store/slices/product-slice";
import Carousel from "react-bootstrap/Carousel";

const ShopGridStandard = () => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { page } = useParams();
  const navigate = useNavigate();

  const pageLimit = 16;
  const currentPage = page ? parseInt(page, 10) : 1;
  let { pathname } = useLocation();

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const offset = (currentPage - 1) * pageLimit;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categoryFilteredProducts =
      filterSortType === "category" && filterSortValue
        ? filteredProducts.filter(
            (product) => product.category === filterSortValue
          )
        : filteredProducts;

    let sortedProducts = getSortedProducts(
      categoryFilteredProducts,
      sortType,
      sortValue
    );
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );

    sortedProducts = filterSortedProducts;

    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [
    currentPage,
    products,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
    searchTerm,
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Custom pagination component to replace react-hooks-paginator
  const Pagination = ({ totalPages }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    
    const handlePageClick = (newPage) => {
      if (newPage !== currentPage) {
        navigate(`${process.env.PUBLIC_URL}/shop-grid-standard/${newPage}`);
      }
    };
    
    return (
      <div className="pro-pagination-style text-center mt-30">
        <ul className="mb-0 mt-0">
          {currentPage > 1 && (
            <li>
              <button onClick={() => handlePageClick(currentPage - 1)}>
                «
              </button>
            </li>
          )}
          
          {pages.map(page => (
            <li key={page} className={page === currentPage ? "active" : ""}>
              <button onClick={() => handlePageClick(page)}>
                {page}
              </button>
            </li>
          ))}
          
          {currentPage < totalPages && (
            <li>
              <button onClick={() => handlePageClick(currentPage + 1)}>
                »
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  };

  const totalPages = Math.ceil(sortedProducts.length / pageLimit);

  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        <div className="shop-area pb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 order-2 order-lg-1 shop-sidebar">
                <div className="sidebar-widget">
                  <h4 className="pro-sidebar-title mx-2">Search </h4>
                  <div className="pro-sidebar-search mb-50 mt-25">
                    <form className="pro-sidebar-search-form" action="#">
                      <input
                        type="text"
                        placeholder="Search here..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <button>
                        <i className="pe-7s-search" />
                      </button>
                    </form>
                  </div>

                  <ShopSidebar
                    products={products}
                    getSortParams={getSortParams}
                    sideSpaceClass="mr-30"
                  />
                </div>
              </div>
              <div className="col-lg-10 order-1 order-lg-2">
                <Carousel fade indicators={false} className="custom-carousel">
                  <Carousel.Item>
                    <img
                      src="assets/img/banner/shopbanner1.png"
                      className="d-block w-100 rounded-0"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="assets/img/banner/shopbanner2.png"
                      className="d-block w-100 rounded-0"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>

                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={products.length}
                  sortedProductCount={currentData.length}
                />

                <ShopProducts layout={layout} products={currentData} />

                {/* Custom pagination instead of react-hooks-paginator */}
                <Pagination totalPages={totalPages} />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShopGridStandard;