import "./styles.css";

const SearchBar = () => {
  return (
    <div className="search-bar bg-secondary">
        <form className="row search-form">
          <div className="col-9">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Digite sua busca"
            ></input>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary h3">
                <h6>
                    Buscar
                </h6>
            </button>
          </div>
        </form>
    </div>
  );
};

export default SearchBar;
