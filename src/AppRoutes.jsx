import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./pages/addProduct/AddProduct";
import { Catalog } from "./pages/catalog/Catalog";
import { ProductList } from "./pages/productList/ProductList";
import { Category } from "./pages/category/Category";
import { HomePage } from "./pages/homePage/HomePage";
import axios from "axios";
import { useState, useEffect } from "react"; // Importação correta do useEffect

export const AppRoutes = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const isLocal = window.location.hostname === "localhost";
                const API_URL = isLocal
                ? "/api"
                : "https://backend-benuri.onrender.com/api";
                const response = await axios.get(`${API_URL}/produtos`);
                setProducts(response.data); // Atualiza o estado com os produtos da API
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="catalog" element={<Catalog products={products} />} />
            <Route path="products" element={<ProductList products={products} />} />
        </Routes>
    );
};
