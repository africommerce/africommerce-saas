import ProductDetails from '../components/products/ProductDetails';
import classes from '../styles/ProductDetails.module.css';
import ProductDescription from '../components/products/ProductDescription';
const ProductDetail = () => {
  return (
    <div className={classes.Container}>
      <ProductDetails />
      <ProductDescription />
    </div>
  );
};

export default ProductDetail;
