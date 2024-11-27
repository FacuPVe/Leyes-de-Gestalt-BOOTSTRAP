# Página sobre las leyes de Gestalt
En este proyecto se ha hecho una página web educativa que explica las leyes de Gestalt con Bootstrap, React y Vite:
## Crear proyecto: 
Estando dentro de la carpeta donde quieres crear tu proyecto ejecuta el siguiente comando desde terminal: 
```
npm create vite@latest
```
Configuración del proyecto después de ejecutar el comando anterior:
- Project_name: leyes-gestalt
- Framework: React
- Variant: Javascript
   
Una vez creado el proyecto será necesario instalar todas las dependencias (React, ReactDOM...):
```
cd leyes-gestalt (para acceder al proyecto que se acaba de crear)
npm install
```

Para finalizar iniciaremos nuestro proyecto para ver si se inicia correctamente: 
```
npm run dev
```
## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Bootstrap
Instalación de la última versión a través del administrador de paquetes:
```
npm install bootstrap@5.3.3
```
Una vez acabada la instalación, vamos a nuestro archivo .css principal para incluir Bootstrap:
```css
@import "bootstrap/dist/css/bootstrap.min.css";
```

# React Router
Instalación de biblioteca React Router para el manejo de rutas:
```
npm install react-router-dom
```
Estructura inicial puesta en App.jsx:
```js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// Agregar páginas


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rutas */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

```