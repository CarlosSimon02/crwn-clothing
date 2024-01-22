import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  products: [],
});

export const CategoriesProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = getCategoriesAndDocuments();
      console.log(categoriesMap);
    }

    getCategoriesMap();
  },[])

  // JUST DO ONE TIME
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // },[])
  
  const value = { products };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
1