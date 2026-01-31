const API_URL = "http://localhost:5000";

export const fetchProducts = async () => {
    const res = await fetch(`${API_URL}/api/products`);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
};