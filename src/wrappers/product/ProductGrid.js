import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import {fetchProducts} from "../../store/slices/product-slice"
import { Carousel } from "react-bootstrap";
const ProductGrid = ({
  spaceBottomClass,
 
  start, 
  end
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  // const prods = getProducts(products, category, type, limit)
  // console.log(products)
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  // Chunk products into groups of 4
  const productChunks = chunkArray(products, 4);
  return (
   
    <Carousel>
      {productChunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="row">
            {chunk.map((product) => (
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={product._id}>
                <ProductGridSingle
                  spaceBottomClass={spaceBottomClass}
                  product={product}
                  currency={currency}
                  cartItem={cartItems.find((cartItem) => cartItem._id === product._id)}
                  wishlistItem={wishlistItems.find((wishlistItem) => wishlistItem._id === product._id)}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  
  );
};

ProductGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default ProductGrid;
