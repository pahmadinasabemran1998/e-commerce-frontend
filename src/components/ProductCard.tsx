import { type Product } from "../types/Product";
import { getDiscountedPrice } from "../utils/discountCalculator";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    // Calculate discounted price
    const discountedPrice = getDiscountedPrice(product.price, product.discountPercentage);

    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <br />
            <p>Description: {product.description}</p>
            <br />
            <p>Category: {product.category}</p>
            <br />
            <p>
                Price: <s>${product.price.toFixed(2)}</s>{" "}
                <strong>${discountedPrice.toFixed(2)}</strong>
            </p>
            <p>Discount: {product.discountPercentage}%</p>
        </div>
    );
};

export default ProductCard;