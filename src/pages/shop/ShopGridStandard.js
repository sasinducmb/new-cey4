import { Fragment, useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSortedProducts } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
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
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // console.log(products);
  const pageLimit = 16;
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
    // Filter products based on the search term
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply category filtering
    const categoryFilteredProducts =
      filterSortType === "category" && filterSortValue
        ? filteredProducts.filter(
            (product) => product.category === filterSortValue
          )
        : filteredProducts;

    // Apply sorting logic
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
    offset,
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
  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop", path: process.env.PUBLIC_URL + pathname },
          ]}
        /> */}

        <div className="shop-area pb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 order-2 order-lg-1 shop-sidebar">
                {/* shop sidebar */}
                <div className="sidebar-widget">
                  <h4 className="pro-sidebar-title mx-2">Search </h4>
                  <div className="pro-sidebar-search mb-50 mt-25">
                    <form className="pro-sidebar-search-form" action="#">
                      <input
                        type="text"
                        placeholder="Search here..."
                        value={searchTerm}
                        onChange={handleSearchChange} // Handle input change
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

                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={products.length}
                  sortedProductCount={currentData.length}
                />

                {/* shop page content default */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShopGridStandard;
