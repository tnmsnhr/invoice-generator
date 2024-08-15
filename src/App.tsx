
import Layout from 'UIComponents/Layout';
import './App.css';
import "./theme/theme.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import InvoiceListDetails from 'pages/InvoiceListDetails';
import Customers from 'pages/Customers';
import { Provider } from 'react-redux';
import { store, persistor } from 'store/store';
import CreateInvoice from 'pages/CreateInvoice';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/customers" element={<Customers />} />
              <Route path="/create-invoice" element={<CreateInvoice />} />
              <Route path="/" element={<InvoiceListDetails />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
