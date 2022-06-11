const ProductList = ({
  selectedLanguage,
  toggleProductBoughtStatus,
  filteredProducts,
}) => {
  return (
    <section className="products">
      {filteredProducts.map((product) => (
        <div className="card" key={product.id}>
          <div className="card-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="card-body">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>Category: {product.category}</p>
            <p className="price">{product.price}</p>
            <div className="btnContainer">
              <button
                className="btn"
                onClick={() => toggleProductBoughtStatus(product)}
              >
                {product.isBought
                  ? selectedLanguage.removeCartButton
                  : selectedLanguage.addCartButton}
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedLanguage.addCartButton}
    </section>
  );
};

export default ProductList;
