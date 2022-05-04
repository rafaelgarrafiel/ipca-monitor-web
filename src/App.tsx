import {useState} from "react";
import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./pages/Dashboard";
import {IpcaContext} from "./context/IpcaContext";

function App() {
    const [context, setContext] = useState([]);

    return (
      <IpcaContext.Provider value={[context, setContext]}>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </IpcaContext.Provider>
    )
}

export default App
