import "./styles.css";
import Navbar from "components/Navbar";
import MainCarImg from "assets/images/main-car-img.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="marketing-card bg-primary d-flex flex-column flex-xl-row-reverse align-items-center justify-content-evenly justify-content-md-center justify-content-xl-evenly">
          <div className="image-container d-flex justify-content-center">
            <img src={MainCarImg} alt="Imagem de carro" />
          </div>
          <div className="text-container d-flex flex-column">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="catalog-link-card bg-secondary d-flex align-items-center">
          <div className="content-container d-flex flex-column flex-sm-row align-items-center">
            <Link to="catalog">
            <button type="button" className="btn btn-primary "><h6>Ver catálogo</h6></button>
            </Link>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
