import React from "react";
import { Button } from 'react-bootstrap';
import '../css/products.css';
export const Products = () => {
    return (
        <>
            {/* Primer div con la foto grande del producto y detalles */}
            <div className="product-details">
                <div className="product-image">
                {/* Aquí colocas la imagen del producto */}
                <img src="https://img.freepik.com/foto-gratis/pizza-carne-pimiento-albahaca-rucula-tomate-queso-cebolla-vista-superior_141793-2772.jpg?w=2000" alt="Pizza" />
                </div>
                <div className="product-info">
                <h1>Nombre del Producto</h1>
                <h3>Categoría</h3>
                <p>Esta pizza tiene cualidades que la hacen una opción exquisita para el paladar, cuenta con la cocción justa y los ingredientes perfectos para hacerla una excelente compañera para esos momentos en los que deseas disfrutar de una buena comida.</p>
                <div className="product-actions">
                    <input type="number" min="1" max="55" defaultValue="1"/>
                    <Button>Agregar Pedido</Button>
                </div>
                </div>
            </div>

            {/* Segundo div con los pasos para realizar el pedido */}
                <h2>Cómo Realizar Tu Pedido</h2>
            <div className="how-to-order">
                <div className="step-card">
                <img src="imagen_paso_1" alt="Paso 1" />
                <h3>Paso 1</h3>
                <p>Descripción del paso 1</p>
                </div>
                <div className="step-card">
                <img src="imagen_paso_2" alt="Paso 2" />
                <h3>Paso 2</h3>
                <p>Descripción del paso 2</p>
                </div>
                <div className="step-card">
                <img src="imagen_paso_3" alt="Paso 3" />
                <h3>Paso 3</h3>
                <p>Descripción del paso 3</p>
                </div>
                <div className="step-card">
                <img src="imagen_paso_4" alt="Paso 4" />
                <h3>Paso 4</h3>
                <p>Descripción del paso 4</p>
                </div>
            </div>

            {/* Tercer div con productos relacionados */}
                <h2>Productos Relacionados</h2>
            <div className="related-products">
                <div className="related-product-card">
                <img src="imagen_producto_relacionado_1" alt="Producto Relacionado 1" />
                <h3>Nombre del Producto Relacionado 1</h3>
                <p>Precio y descripción del producto relacionado 1</p>
                </div>
                <div className="related-product-card">
                <img src="imagen_producto_relacionado_2" alt="Producto Relacionado 2" />
                <h3>Nombre del Producto Relacionado 2</h3>
                <p>Precio y descripción del producto relacionado 2</p>
                </div>
                <div className="related-product-card">
                <img src="imagen_producto_relacionado_3" alt="Producto Relacionado 3" />
                <h3>Nombre del Producto Relacionado 3</h3>
                <p>Precio y descripción del producto relacionado 3</p>
                </div>
                <div className="related-product-card">
                <img src="imagen_producto_relacionado_4" alt="Producto Relacionado 4" />
                <h3>Nombre del Producto Relacionado 4</h3>
                <p>Precio y descripción del producto relacionado 4</p>
                </div>
            </div>
        </>
    )
}
