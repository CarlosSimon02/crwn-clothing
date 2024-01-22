import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((category) => {
        return (
          <Fragment key={category}>
            <h2>{category}</h2>
            <div className="products-container">
              {categoriesMap[category].map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
