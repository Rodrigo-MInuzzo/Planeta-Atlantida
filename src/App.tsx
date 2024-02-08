import { Provider } from "react-redux";
import { persistedStore, store } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "./components/Header";
import { Container } from "@mui/material";
import { CardAtracao } from "./components/CardAtracao";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <Header />
                    <Container>
                        <h1>Teste</h1>
                        <CardAtracao />
                    </Container>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
