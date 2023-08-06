import React from "react";
import { Button , Container } from 'react-bootstrap';
import '../css/products.css';
import { Route } from "react-router";
export const Products = () => {
    return (
        <>
            {/* Primer div con foto del producto y detalles */}
            <Container className="product-details">
                <div className="product-image">
                {/* Aquí la imagen del producto */}
                <img src="https://img.freepik.com/foto-gratis/pizza-carne-pimiento-albahaca-rucula-tomate-queso-cebolla-vista-superior_141793-2772.jpg?w=2000" alt="Pizza" />
                </div>
                <div className="product-info">
                <h1>Nombre del Producto</h1>
                <h3>Precio</h3>
                <p>Esta pizza tiene cualidades que la hacen una opción exquisita para el paladar. Cuenta con la cocción justa y los ingredientes perfectos para hacerla una excelente compañera en cualquier lugar, en cualquier momento.</p>
                <div className="product-actions">
                    <input type="number" min="1" max="55" defaultValue="1"/>
                    <Button variant="danger">Agregar al pedido</Button>
                </div>
                </div>
            </Container>

            {/* Segundo div con los pasos para realizar el pedido */}
                <h2>¿Cómo realizar tu pedido?</h2>
            <div className="how-to-order">
                <div className="step-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25D2Fb5RZd7SPLYv9sGzq4WvLoaNtMPK62SB8SFOp6qsAQgKQ1hRqSMZseWRAxEu2PvI&usqp=CAU" alt="Ingredientes" />
                <h3>Empezas eligiendo</h3>
                <p>Explorá nuestra deliciosa variedad de pizzas! Desde las clásicas de toda la vida hasta esas que no todos se animan a probar, tenemos para todos los gustos!</p>
                </div>
                <div className="step-card">
                <img src="https://static.thenounproject.com/png/2206218-200.png" alt="Agregar al carrito" />
                <h3>Agregá a tu pedido</h3>
                <p>Tenemos varias opciones para dejar contento a cada uno de tus invitados, amigos, familiares o esa persona especial a la que queres sorprender.</p>
                </div>
                <div className="step-card">
                <img src="https://cdn-icons-png.flaticon.com/512/4645/4645316.png" alt="Revisando el pedido" />
                <h3>Revisá todo</h3>
                <p>En el carrito tendrás los detalles de tu pedido así revisas si está todo en orden antes de confirmar el pedido. Queremos que todo te llegue perfecto!</p>
                </div>
                <div className="step-card">
                <img src="https://cdn2.iconfinder.com/data/icons/food-drink-3/512/Pizza-512.png" alt="Pizza cortada y porción" />
                <h3>Disfrutá</h3>
                <p>Confirmada la dirección de entrega y método de pago, ahora solo te queda esperar. ¡Estás a punto de recibir las mejores pizzas! ¡Disfrutalas!</p>
                </div>
            </div>

            {/* Tercer div con productos relacionados */}
                <h2>Productos Relacionados</h2>
            <div className="related-products">
                <div className="related-product-card">
                <img src="https://img.freepik.com/foto-gratis/pizza-carne-pimiento-albahaca-rucula-tomate-queso-cebolla-vista-superior_141793-2772.jpg?w=2000" alt="Producto Relacionado 1" />
                <h3>Producto Relac 1</h3>
                <p>Descripción del producto relacionado 1</p>
                <h6>Precio</h6>
                </div>
                <div className="related-product-card">
                <img src="https://img.freepik.com/foto-gratis/pizza-carne-pimiento-albahaca-rucula-tomate-queso-cebolla-vista-superior_141793-2772.jpg?w=2000" />
                <h3>Producto Relac 2</h3>
                <p>Descripción del producto relacionado 2</p>
                <h6>Precio</h6>
                </div>
                <div className="related-product-card">
                <img src="https://img.freepik.com/foto-gratis/pizza-carne-pimiento-albahaca-rucula-tomate-queso-cebolla-vista-superior_141793-2772.jpg?w=2000" />
                <h3>Producto Relac 3</h3>
                <p>Descripción del producto relacionado 3</p>
                <h6>Precio</h6>
                </div>
                <div className="related-product-card">
                <img src="https://img.freepik.com/foto-gratis/pizza-carne-pimiento-albahaca-rucula-tomate-queso-cebolla-vista-superior_141793-2772.jpg?w=2000" />
                <h3>Producto Relac 4</h3>
                <p>Descripción del producto relacionado 4</p>
                <h6>Precio</h6>
                </div>
            </div>
        </>
    )
}
