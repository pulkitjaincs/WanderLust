import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './FormStyles.css';

const EditListing = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
        country: '',
        location: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await axios.get(`/listings/${id}`);
                setFormData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching listing:", error);
                setLoading(false);
            }
        };

        fetchListing();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/listings/${id}`, { listing: formData });
            navigate(`/listings/${id}`);
        } catch (error) {
            console.error("Error updating listing:", error);
        }
    };

    if (loading) return <div className="container" style={{ marginTop: '2rem' }}>Loading...</div>;

    return (
        <div className="form-container">
            <h3 className="form-title">Edit your Listing</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image" className="form-label">Image Link</label>
                    <input
                        type="text"
                        name="image"
                        className="form-control"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-grid-row">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label htmlFor="country" className="form-label">Country</label>
                        <input
                            type="text"
                            name="country"
                            className="form-control"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="form-control"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button className="btn btn-primary" style={{ width: '100%' }}>Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditListing;
