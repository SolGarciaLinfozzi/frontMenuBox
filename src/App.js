import {
  Routes,     //Son todas las rutas
  Route       //el match, las anclas
} from 'react-router-dom'

import './css/app.css';
import Home from './componentes/home';
import Navegacion from './componentes/navegacion';
import Footer from "./componentes/footer"

function App() {
  return (
    <>
      <Navegacion/>

      {/* Configuramos las rutas */}
      <Routes>
        <Route index element={<Home/>}></Route> 
      </Routes>

      <Footer/>

    </>
  );
}

export default App;