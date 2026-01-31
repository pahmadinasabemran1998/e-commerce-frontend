import { type Product } from "../types/Product";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>

            <div className="product-meta">
                <span>${product.price.toFixed(2)}</span>
                <span>{product.category}</span>
            </div>
        </div>
    );
};

export default ProductCard;