import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./pages/addProduct/AddProduct";
import { Catalog } from "./pages/catalog/Catalog";
import { ProductList } from "./pages/productList/ProductList";
import { Category } from "./pages/category/Category";
import { HomePage } from "./pages/homePage/HomePage";
import logo from './image/sala_aurora_lotus - Copia.png';
import { useState } from "react";

export const AppRoutes = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Sala com 6 cadeiras corano durango", price: "3000,00", codigo: "1792", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 2, name: "Sala com 6 cadeiras veludo marfim", price: "3000,00", codigo: "1789", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 3, name: "Sala com (italia) 4 cadeiras veludo marfim", price: "1400,00", codigo: "129", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 4, name: "Sala com (Palace) 4 cadeiras linho inox", price: "1287,41", codigo: "131", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 5, name: "Sala Miss Com 4 Cadeiras Milão Vd Cold Mel/Blonde Veludo Marfim off White ", price: "2061,50", codigo: "126", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 6, name: "Sala Fenix com vidro off-white Com 8 Cadeiras Safira Linho Bronze ", price: "4200,00", codigo: "1773", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 7, name: "Sala Carisma com vidro Com 6 Cadeira Veneza Linho Bronze/Durango ", price: "2700,00", codigo: "1794", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 8, name: "Sala Florata com vidro Com 4 Cadeiras Veneza Linho Bronze/Durango ", price: "2100,00", codigo: "98", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 9, name: "Cadeira Individual ", price: "350,00", codigo: "1795", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 10, name: "Cadeira Individual ", price: "300,00", codigo: "1796", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
        { id: 11, name: "Cadeira Individual ", price: "4200,00", codigo: "1797", category: "Sala de Jantar", observaçao: "Vericar modelo e cor das cadeiras com vendedor", image: logo },
      
    ]);

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: products.length + 1 }]);
    };

    const editProduct = (id, newName, newPrice) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, name: newName, price: newPrice } : product
        ));
    };

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <Routes>
             <Route path="/" element={<HomePage />} /> {/* Adicione essa linha */}
            <Route path="add" element={<AddProduct addProduct={addProduct} />} />
            <Route path="catalog" element={<Catalog products={products} />} />
            <Route path="products"element={<ProductList products={products} editProduct={editProduct} removeProduct={removeProduct} />} />
            <Route path="category" element={<Category />} />
        </Routes>
    );
};
