import {
  Routes,     //Son todas las rutas
  Route       //el match, las anclas
} from 'react-router-dom'
import Home from './componentes/home';
import Navegacion from './componentes/navegacion';
import Footer from "./componentes/footer"
import Contacto from "./componentes/contacto"
import Error from "./componentes/error"
import Nosotros from "./componentes/nosotros"
import FAQ from "./componentes/FAQ"
import Planes from "./componentes/planes"

function App() {
  return (
    <>
      <Navegacion/>

      {/* Configuramos las rutas */}
      <Routes>
        <Route index element={<Home/>}></Route> 
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/FAQ" element={<FAQ/>}></Route>
        <Route path="/planes" element={<Planes/>}></Route>
        {/* Cuando le matcheen a algo que no exista */}
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;