import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./pages/addProduct/AddProduct";
import { Catalog } from "./pages/catalog/Catalog";
import { ProductList } from "./pages/productList/ProductList";
import { Category } from "./pages/category/Category";
import { HomePage } from "./pages/homePage/HomePage";
import logo from './image/sala_aurora_lotus - Copia.png';
import logo1 from './image/mesa_italia - Copia.png';
import logo2 from './image/mesa_palace - Copia.png';
import logo3 from './image/mesa_miss - Copia.png';
import logo4 from './image/sala_fenix_safira - Copia.png';
import logo5 from './image/sala_carisma_veneza - Copia.png';
import logo6 from './image/sala_frorata_veneza - Copia.png';
import logo7 from './image/Cadeira_safira - Copia.png';
import logo8 from './image/Cadeira_milao - Copia.png';
import logo9 from './image/Cadeira_veneza - Copia.png';
import logo10 from './image/canto_malta - Copia.png';
import logo11 from './image/mesa_liz.png';
import logo12 from './image/isis_6cadeiras.png';
import logo13 from './image/isis4cadeiras.png';
import logo14 from './image/buffet_Iaris_off.png';

import { useState } from "react";

export const AppRoutes = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Sala com 6 cadeiras corano durango", price: "3000,00", codigo: "1792", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor. Trabalhamos com encomendas", image: logo },
        { id: 2, name: "Sala com 6 cadeiras veludo marfim", price: "3000,00", codigo: "1789", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo },
        { id: 3, name: "Sala com 4 cadeiras veludo marfim", price: "1400,00", codigo: "129", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo1 },
        { id: 4, name: "Sala com 4 cadeiras linho inox", price: "1287,41", codigo: "131", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo2 },
        { id: 5, name: "Sala Com 4 Cadeiras Veludo Marfim off White ", price: "2061,50", codigo: "126", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo3 },
        { id: 6, name: "Sala com vidro off-white Com 8 Cadeiras Linho Bronze ", price: "4200,00", codigo: "1773", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo4 },
        { id: 7, name: "Sala Carisma com vidro Com 6 Cadeira Linho Bronze/Durango ", price: "2700,00", codigo: "1794", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo5 },
        { id: 8, name: "Sala com vidro Com 4 Cadeiras Linho Bronze/Durango ", price: "2100,00", codigo: "98", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo6 },
        { id: 12, name: "Conjunto De Canto Com 2 Cadeira Mel/blonde veludo Marfim", price: "2500,00", codigo: "1771", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo10 },
        { id: 13, name: "Sala com 6 cadeiras ", price: "1500,00", codigo: "1230", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo11 },
        { id: 14, name: "Sala com 6 cadeiras", price: "1400,00", codigo: "1228", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo12 },
        { id: 15, name: "Sala com 4 cadeiras", price: "1200,00", codigo: "1227", category: "Sala de Jantar", observacao: "Verificar modelo e cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo13 },
        { id: 9, name: "Cadeira Individual ", price: "350,00", codigo: "1795", category: "Sala de Jantar", observacao: "Verificar  cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo7 },
        { id: 10, name: "Cadeira Individual ", price: "300,00", codigo: "1796", category: "Sala de Jantar", observacao: "Verificar cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo8 },
        { id: 11, name: "Cadeira Individual ", price: "350,00", codigo: "1797", category: "Sala de Jantar", observacao: "Verificar cor das cadeiras com vendedor.Trabalhamos com encomendas", image: logo9 },
        { id: 16, name: "Buffet Com Adega - Off White/Freijo ", price: "655,00", codigo: "316", category: "Sala de Jantar", observacao: "Verificar modelo e cor com vendedor.Trabalhamos com encomendas", image: logo14 },

      
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
