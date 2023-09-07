import { useContext, useState, createContext, React } from "react";
export const Navcontext = createContext(null);
export const useNavContext = () => {
  const context = useContext(Navcontext);
  if (!context) {
    throw new Error("this contexts must be used whitin a NavContextProvider");
  }
  return context;
};
export const Navcontextprovider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  return (
    <Navcontext.Provider value={{ logged, setLogged }}>
      {children}
    </Navcontext.Provider>
  );
};

export default Navcontext;
