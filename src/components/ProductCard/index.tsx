import "./styles.css";
import ProductImage from "assets/images/product-image.png";

const ProductCard = () => {
  return (
    <div className="product-card bg-secondary">
      <div className="image-container">
        <img src={ProductImage} alt="imagem do veículo" />
      </div>
      <div className="text-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="button-container">
        <button type="button" className="btn btn-primary">
          <h6>Comprar</h6>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
