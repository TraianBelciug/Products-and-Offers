import productList from "../productList";
import { useState } from "react";
import Logo from "../images/cart logo.png";
import language from "../language";

const Filters = ({
  categories,
  filteredProductHandeler,
  toggleLanguage,
  selectedLanguage,
  totalBoughtProducts,
}) => {
  const [categoryFilter, setCategoryFilter] = useState("");

  const [nameFilter, setNameFilter] = useState("");

  const [priceFilter, setPriceFilter] = useState(0);

  console.log(categories);
  const reset = (e) => {
    e.preventDefault();
    filteredProductHandeler(productList);
    setCategoryFilter("");
    setNameFilter("");
    setPriceFilter(0);
  };

  const handelNameFilter = (e) => {
    console.log(e);
    let filtered = [];

    for (let i = 0; i < productList.length; i++) {
      if (
        productList[i].name.toLowerCase().includes(e) &&
        productList[i].category.toLowerCase().includes(categoryFilter) &&
        parseInt(productList[i].price.substring(1)) > priceFilter
      ) {
        filtered.push(productList[i]);
      }
    }
    console.log(filtered);
    filteredProductHandeler(filtered);
    setNameFilter(e);
  };

  const handleCategoryFilter = (e) => {
    console.log(e);
    let filtered = [];

    for (let i = 0; i < productList.length; i++) {
      if (
        productList[i].name.toLowerCase().includes(nameFilter) &&
        productList[i].category.toLowerCase().includes(e.toLowerCase()) &&
        parseInt(productList[i].price.substring(1)) > priceFilter
      ) {
        filtered.push(productList[i]);
      }
    }
    console.log(filtered);
    filteredProductHandeler(filtered);
    setCategoryFilter(e);
  };

  const handlePriceFilter = (e) => {
    let filtered = [];
    setPriceFilter(e);
    for (let i = 0; i < productList.length; i++) {
      if (
        productList[i].name.toLowerCase().includes(nameFilter) ||
        productList[i].category.toLowerCase().includes(categoryFilter) ||
        parseInt(productList[i].price.substring(1)) > e
      ) {
        filtered.push(productList[i]);
      }
    }
    filteredProductHandeler(filtered);
  };

  return (
    <>
      <section className="filter">
        <div className="container">
          <input
            className="nameFilter"
            type="text"
            placeholder={selectedLanguage.filterPlaceHolder}
            value={nameFilter}
            onChange={(e) => {
              handelNameFilter(e.target.value.toLowerCase());
            }}
          />

          <select
            className="categoryFilter"
            value={categoryFilter}
            onChange={(e) => handleCategoryFilter(e.target.value)}
          >
            {categories.length
              ? categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))
              : null}
          </select>

          <input
            className="priceFilter"
            type="number"
            min="0"
            // step="10"
            placeholder="Price under..."
            onChange={(e) => {
              handlePriceFilter(e.target.value);
            }}
            value={priceFilter}
          />

          <button className="btn" onClick={reset}>
            {selectedLanguage.resetFiltersButton}
          </button>
          <div className="languageContainer">
            <button onClick={() => toggleLanguage(language.english)}>
              <i className="flag flag-us"></i>
            </button>

            <button onClick={() => toggleLanguage(language.romanian)}>
              <i className="flag flag-ro"></i>
            </button>
          </div>
        </div>

        <div className="counter">
          {" "}
          <img className="logo" src={Logo} alt="Logo"></img>{" "}
          <span className="cartText">{selectedLanguage.totalBoughtItems}:</span>
          <p>{totalBoughtProducts}</p>
        </div>
      </section>
    </>
  );
};

export default Filters;
