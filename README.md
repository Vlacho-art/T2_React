# React + Vite
# Carrito de Compras – Tienda Gamer (React)

##  Descripción

Este proyecto es una **aplicación web desarrollada con React** que simula una tienda gamer con un carrito de compras.
Permite visualizar productos destacados, agregarlos al catálogo, editar o eliminar artículos, y demuestra el uso de **props en React** mediante un componente reutilizable que muestra información de diferentes personas.

El objetivo del proyecto es reforzar conceptos de:

- Componentes en React
- Uso de props
- Manejo de estado
- Renderizado dinámico de listas
- Diseño de interfaces para e-commerce

---

## Características principales

- Listado de productos gamer destacados
- Formulario para agregar productos al catálogo
- Edición de productos
- Eliminación de productos
- Búsqueda de productos
- Componente de demostración de Props en React
- Interfaz moderna con temática gamer
- Diseño responsivo

---

## Interfaz gráfica

La aplicación cuenta con:

- **Pantalla principal (Inicio):**
  - Muestra los productos destacados en tarjetas (cards)
  - Cada producto tiene opciones de **Editar** y **Eliminar**
  - Barra de navegación superior
  - Buscador

- **Formulario lateral:**
  - Permite agregar nuevos productos
  - Campos:
    - Nombre del producto
    - Precio
    - Stock
    - Categoría
    - URL de imagen
    - Descripción

- **Vista Props React:**
  - Muestra tarjetas con avatares de personas
  - Demuestra cómo un mismo componente se reutiliza recibiendo diferentes datos mediante props

- **Arquitectura del Proyecto**
```bash
myReactApp/
│
├── public/
│   └── img/
│
├── src/
│   ├── features/
│   │   └── layout/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── pages/
│   │       └── products/
│   │
│   ├── shared/
│   │   └── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── Routes.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md