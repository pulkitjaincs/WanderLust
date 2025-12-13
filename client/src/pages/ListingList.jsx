import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListingList.css';

import { SkeletonCard } from '../components/Loader';

const ListingList = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('recommended');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                // If page 1, show loading skeletal. If > 1, allow background fetch (or show small loader)
                if (page === 1) setLoading(true);

                const response = await axios.get(`/listings?page=${page}&limit=8`);
                let newListings = [];
                let total = 1;

                if (Array.isArray(response.data)) {
                    // Legacy API support (if server wasn't restarted)
                    newListings = response.data;
                } else {
                    newListings = response.data.listings || [];
                    total = response.data.totalPages || 1;
                }

                setListings(prev => page === 1 ? newListings : [...prev, ...newListings]);
                setTotalPages(total);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching listings:", error);
                setLoading(false);
            }
        };

        fetchListings();
    }, [page]);

    const handleLoadMore = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1);
        }
    };

    const sortListings = (items) => {
        const sortedItems = [...items];
        switch (sortBy) {
            case 'price_low':
                return sortedItems.sort((a, b) => a.price - b.price);
            case 'price_high':
                return sortedItems.sort((a, b) => b.price - a.price);
            case 'rating':
                return sortedItems.sort((a, b) => b.rating - a.rating);
            case 'famous':
                return sortedItems.sort((a, b) => b.reviewCount - a.reviewCount);
            default:
                return sortedItems;
        }
    };

    const sortedListings = sortListings(listings);

    if (loading && page === 1) return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div className="listing-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <SkeletonCard key={n} />
                ))}
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="listing-header">
                <h3>Explore Places</h3>
                <select
                    className="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="recommended">Recommended</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="famous">Most Popular</option>
                </select>
            </div>

            <div className="listing-grid">
                {sortedListings.map((listing) => (
                    <Link key={listing._id} to={`/listings/${listing._id}`} className="listing-link">
                        <div className="listing-card">
                            <div className="listing-image-container">
                                <img src={listing.image} className="listing-image" alt={listing.title} />
                            </div>
                            <div className="listing-info">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div className="listing-title">{listing.title}</div>
                                    <div className="listing-rating">
                                        <i className="fa-solid fa-star"></i> {listing.rating || 'New'}
                                    </div>
                                </div>
                                <div className="listing-price">
                                    &#8377; {listing.price.toLocaleString("en-IN")}<span>/night</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {page < totalPages && (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
                    <button className="btn btn-primary" onClick={handleLoadMore}>
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default ListingList;
