import { useState } from "react";
import "./Catalog.css";
import logoBenuri from "../../image/LogoBenuri.png";

export function Catalog({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (products.length === 0) {
    return <p className="empty-message">Nenhum produto disponível.</p>;
  }

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const product = products[currentIndex];

  return (
    <div className="catalog-container">
       
      <div className="product-item">
        <img src={logoBenuri} alt="Logo Benuri" className="logo" />
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <h3> <span className="codigo-texto">Codigo: </span>{product.codigo}</h3>
        <h3> <span className="codigo-texto">Observação: </span>{product.observacao}</h3>
        <h3><span className="codigo-texto">Tipo:</span> {product.category}</h3>
        <p>Preço: R$ {product.price}</p>
      </div>
      <div className="nav-buttons">
        <button onClick={prevProduct}>← Anterior</button>
        <button onClick={nextProduct}>Próximo →</button>
      </div>
    </div>
  );
}
