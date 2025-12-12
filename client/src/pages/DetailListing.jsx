import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './DetailListing.css';

const DetailListing = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await axios.get(`/listings/${id}`);
                setListing(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching listing:", error);
                setLoading(false);
            }
        };

        fetchListing();
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this listing?")) return;
        try {
            await axios.delete(`/listings/${id}`);
            navigate('/listings');
        } catch (error) {
            console.error("Error deleting listing:", error);
        }
    };

    if (loading) return <div className="container mt-3">Loading...</div>;
    if (!listing) return <div className="container mt-3">Listing not found</div>;

    return (
        <div className="container listing-detail-container">
            <div className="listing-title-section">
                <h1 className="listing-heading">{listing.title}</h1>
                <div className="listing-location">
                    {listing.location}, {listing.country}
                </div>
            </div>

            <img src={listing.image} className="listing-hero-image" alt={listing.title} />

            <div className="listing-content-grid">
                <div className="listing-info-section">
                    <div className="listing-price-tag">
                        &#8377; {listing.price.toLocaleString("en-IN")} <span style={{ fontSize: '1rem', fontWeight: 400 }}> / night</span>
                    </div>

                    <p className="listing-description">
                        {listing.description}
                    </p>
                </div>

                <div className="listing-actions">
                    <Link to={`/listings/${listing._id}/edit`} className="btn btn-dark">Edit Listing</Link>
                    <button onClick={handleDelete} className="btn btn-primary">Delete Listing</button>
                </div>
            </div>
        </div>
    );
};

export default DetailListing;
