import "./product-card.styles.scss"
import Button from "../button/button.cmponent";

const ProductCard = ({product}) => {
return (
    <div className="product-card-container">
        <img/>
        <div className="footer">
            <span className="name"></span>
            <span className="price"></span>
        </div>
        <Button buttonType="inverted">Add to cart</Button>
    </div>
)
}

export default ProductCard;
