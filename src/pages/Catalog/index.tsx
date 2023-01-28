import "./styles.css";
import ProductCard from "components/ProductCard";
import SearchBar from "components/SearchBar";

const Catalog = () => {
    return (
        <div className="catalog-container">
            <SearchBar/>
        <div className="product-cards-container row">
            <div className="col-sm-6 col-lg-4">
                <ProductCard/>
            </div>
            <div className="col-sm-6 col-lg-4">
                <ProductCard/>
            </div>
            <div className="col-sm-6 col-lg-4">
                <ProductCard/>
            </div>
            <div className="col-sm-6 col-lg-4">
                <ProductCard/>
            </div>
            <div className="col-sm-6 col-lg-4">
                <ProductCard/>
            </div>
            <div className="col-sm-6 col-lg-4">
                <ProductCard/>
            </div>
        </div>
        
        </div>
    );
}

export default Catalog;

