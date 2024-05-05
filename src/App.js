import { useState, Fragment } from "react";
import Home from "./pages/Home";


function App() {
  const [paginaAtual, setPaginaAtual] = useState(<Home trocarPagina={trocarPagina} />)

  function trocarPagina(pagina) {
    setPaginaAtual(pagina)
  }

  return (
    <Fragment>
      {paginaAtual}
    </Fragment>
  );
}

export default App;