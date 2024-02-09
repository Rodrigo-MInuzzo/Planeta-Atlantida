import { Provider } from "react-redux";
import { persistedStore, store } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";
import { Root } from "./Root";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                   <Root></Root>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
