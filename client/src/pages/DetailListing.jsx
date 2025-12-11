import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

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
        <div className="row mt-3">
            <div className="col-8 offset-2">
                <h3>{listing.title}</h3>
            </div>
            <div className="card col-6 offset-2 show-card listing-card">
                <img src={listing.image} className="card-img-top show-img" alt={listing.title} />
                <div className="card-body">
                    <p className="card-text">
                        {listing.description} <br />
                        &#8377; {listing.price.toLocaleString("en-IN")} <br />
                        {listing.location} <br />
                        {listing.country}
                    </p>
                </div>
            </div>
            <div className="btns">
                <Link to={`/listings/${listing._id}/edit`} className="btn btn-dark col-1 offset-2 edit-btn">Edit</Link>
                <button onClick={handleDelete} className="btn btn-dark col-1 offset-1">Delete</button>
            </div>
        </div>
    );
};

export default DetailListing;
