import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListingList = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <div className="container mt-3">Loading...</div>;

    return (
        <div className="container mt-3">
            <h3 style={{ marginLeft: '2rem', paddingTop: '1rem' }}>All Listings</h3>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                {listings.map((listing) => (
                    <Link key={listing._id} to={`/listings/${listing._id}`} className="listing-link">
                        <div className="card col">
                            <img src={listing.image} className="card-img-top" alt={listing.title} style={{ height: '20rem' }} />
                            <div className="card-img-overlay"></div>
                            <div className="card-body">
                                <p className="card-text">
                                    <b>{listing.title}</b><br />
                                    &#8377;{listing.price.toLocaleString("en-IN")}/night
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ListingList;
