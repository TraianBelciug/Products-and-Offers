import getProductsForCategory from "../productList";
import { useParams } from "react-router-dom";
import Filters from "../components/filters";
import { useState, useEffect } from "react";
import ProductList from "../components/productList";
import Footer from "../components/footer";
import Coupon from "../components/coupon";
import language from "../language";

const Categories = () => {
  const { categoryId } = useParams();

  const [selectedLanguage, setSelectedLanguage] = useState(language.english);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [totalBoughtProducts, setTotalBoughtProducts] = useState(0);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const productList = getProductsForCategory(parseInt(categoryId));
    let total = 0;
    for (let i = 0; i < productList.length; i++)
      if (productList[i].isBought) {
        total++;
      }
    setTotalBoughtProducts(total);
    setFilteredProducts(productList);

    const categoriesFrom = [""];
    for (let i = 0; i < productList.length; i++) {
      if (!categoriesFrom.includes(productList[i].category)) {
        categoriesFrom.push(productList[i].category);
      }
    }
    console.log(productList, "lista categorii");
    setFilteredProducts(productList);
    setCategories(categoriesFrom);
  }, [categoryId]);

  const toggleProductBoughtStatus = (product) => {
    if (product.isBought === true) {
      setTotalBoughtProducts(totalBoughtProducts - 1);
      product.isBought = false;
    } else {
      setTotalBoughtProducts(totalBoughtProducts + 1);
      product.isBought = true;
    }
    setFilteredProducts([...filteredProducts]);
  };

  const updateFilteredProducts = (products) =>
    setFilteredProducts([...products]);

  /*const applyDiscount=(discount) =>{
        for (let i=0 ; i<filteredProducts.length;i++){
          filteredProducts[i].price= originalPrice[i]
          let priceNumber = filteredProducts.price.substring(1)
          let finalPrice = priceNumber - (priceNumber*(discount/100))
          filteredProducts[i].price='$'+finalPrice;
        }
        setFilteredProducts([...filteredProducts])
      }*/

  const toggleLanguage = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  return (
    <>
      <Filters
        selectedLanguage={selectedLanguage}
        categories={categories}
        filteredProductHandeler={updateFilteredProducts}
        totalBoughtProducts={totalBoughtProducts}
        toggleLanguage={toggleLanguage}
      ></Filters>

      <Coupon
        selectedLanguage={selectedLanguage}
        applyDiscount={() => {}}
      ></Coupon>

      <ProductList
        filteredProducts={filteredProducts}
        toggleProductBoughtStatus={toggleProductBoughtStatus}
        selectedLanguage={selectedLanguage}
      ></ProductList>

      <Footer selectedLanguage={selectedLanguage}></Footer>
    </>
  );
};

export default Categories;
