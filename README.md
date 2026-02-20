# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

