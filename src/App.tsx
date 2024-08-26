import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import "./theme/theme.css"
import Layout from 'UIComponents/Layout';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'store/store';
import ProtectedRoute from 'routes';
import { RootState } from 'store/reducers/rootReducer';
import { Customer } from 'types/types';
import Spinner from 'UIComponents/Spinner';
import ErrorBoundary from 'HOC/ErrorBoundary';

const CreateInvoiceLazy = lazy(() => import('pages/CreateInvoice'))
const InvoiceListDetailsLazy = lazy(() => import('pages/InvoiceListDetails'))
const CustomersLazy = lazy(() => import('pages/Customers'))

interface AppProps {
  selectedCustomer?: Customer
}
const App: React.FC<AppProps> = ({ selectedCustomer }) => {

  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/create-invoice" element={
                <ProtectedRoute isAllowed={!!selectedCustomer}>
                  <ErrorBoundary>
                    <CreateInvoiceLazy />
                  </ErrorBoundary>
                </ProtectedRoute>
              } />
            </Routes>

            <Routes>
              <Route path="/customers" element={
                <Layout>
                  <ErrorBoundary>
                    <CustomersLazy />
                  </ErrorBoundary>
                </Layout>
              } />
              <Route path="/" element={<Layout>
                <ErrorBoundary>
                  <InvoiceListDetailsLazy />
                </ErrorBoundary>
              </Layout>} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </PersistGate>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    selectedCustomer: state.customers.selectedCustomer
  }
}
// @ts-ignore
export default connect(mapStateToProps)(App);
