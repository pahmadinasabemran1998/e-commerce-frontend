import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import { type Product } from "../types/Product";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(() => setError("Could not load products"));
    }, []);

    if (error) return <p>{error}</p>

    return (
        <section>
            <h2>Products</h2>
            {products.map((p) => (
                <div key={p.id}>
                    <h3>{p.title}</h3>
                    <p>${p.price}</p>
                </div>
            ))}
        </section>
    );
};

export default Products;