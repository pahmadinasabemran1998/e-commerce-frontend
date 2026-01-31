import { useEffect, useState } from "react";
import { type Product } from "../types/Product";
import { fetchProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data  = await fetchProducts();
                setProducts(data);
            } catch (error) {
                setError("Failed to load products. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="products-page">
            <h2>Products</h2>

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;