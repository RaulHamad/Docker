// mongo-init.js
db = db.getSiblingDB('analisis_datos');

// Crear colecciones
db.createCollection('productos');
db.createCollection('clientes');
db.createCollection('ventas');

// Insertar datos iniciales
db.productos.insertMany([
  {
    nombre: "Laptop ProX",
    categoria: "Electrónicos",
    precio: 1299.99,
    stock: 10
  },
  {
    nombre: "Mouse Ergonómico",
    categoria: "Accesorios",
    precio: 49.99,
    stock: 25
  }
  // Más productos...
]);

// Más inserciones...
