import React from "react";
import { getDiscountedPrice } from "../utils/discountCalculator";

interface ProductProps {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    description: string;
    category: string;
    thumbnail: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, discountPercentage, description, thumbnail, category }) => {
    const discountedPrice = getDiscountedPrice(price, discountPercentage);

    return (
        <div className="product-card">
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{category}</p>
            <p>
                Price: <span style={{ textDecoration: discountPercentage ? "line-through" : "none" }}>${price}</span>
                {discountPercentage > 0 && (
                    <>
                        {" "}→ <span style={{ color: "red" }}>${discountedPrice}</span>
                    </>
                )}
            </p>
        </div>
    );
};

export default ProductCard;