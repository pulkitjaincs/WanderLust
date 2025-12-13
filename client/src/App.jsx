import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import { Loader } from './components/Loader';
import './index.css';

// Lazy Load Pages
const ListingList = lazy(() => import('./pages/ListingList'));
const ListingForm = lazy(() => import('./pages/ListingForm'));
const DetailListing = lazy(() => import('./pages/DetailListing'));
const EditListing = lazy(() => import('./pages/EditListing'));

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="body">
            <Navbar />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<ListingList />} />
                <Route path="/listings" element={<ListingList />} />
                <Route path="/listings/new" element={<ListingForm />} />
                <Route path="/listings/:id" element={<DetailListing />} />
                <Route path="/listings/:id/edit" element={<EditListing />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App;
