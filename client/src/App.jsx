import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListingList from './pages/ListingList';
import ListingForm from './pages/ListingForm';
import DetailListing from './pages/DetailListing';
import EditListing from './pages/EditListing';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="body">
            <Navbar />
            <Routes>
              <Route path="/" element={<ListingList />} />
              <Route path="/listings" element={<ListingList />} />
              <Route path="/listings/new" element={<ListingForm />} />
              <Route path="/listings/:id" element={<DetailListing />} />
              <Route path="/listings/:id/edit" element={<EditListing />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App;
