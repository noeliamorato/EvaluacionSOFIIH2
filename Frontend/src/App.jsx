import { Route, Routes, BrowserRouter } from "react-router-dom";
import Medicamentos from "./pages/medicamentos";
import Categorias from "./pages/categorias";
import Navbar from "./pages/navbar";
import { ModalContextProvider } from "./context/modalContext";
import { Navcontextprovider } from "./context/navcontext";
import { Usercontextprovider } from "./context/userContext";
import Modal from "./modal";
function App() {
  return (
    <>
      <BrowserRouter>
        <ModalContextProvider>
          <Usercontextprovider>
            <Navcontextprovider>
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route path="/Medicamentos" element={<Medicamentos />} />
                  <Route path="/Categorias" element={<Categorias />} />
                </Route>
              </Routes>
              <Modal />
            </Navcontextprovider>
          </Usercontextprovider>
        </ModalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
