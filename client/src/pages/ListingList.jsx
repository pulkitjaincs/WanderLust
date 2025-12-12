import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListingList.css';

const ListingList = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('recommended');

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('/listings');
                setListings(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching listings:", error);
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

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
                return sortedItems; // 'recommended' uses default fetch order
        }
    };

    const sortedListings = sortListings(listings);

    if (loading) return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div className="listing-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <div key={n} style={{ height: '300px', backgroundColor: '#f0f0f0', borderRadius: '12px' }}></div>
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
        </div>
    );
};

export default ListingList;
