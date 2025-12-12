import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const ListingForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
        country: '',
        location: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/listings', { listing: formData });
            navigate('/listings');
        } catch (error) {
            console.error("Error creating listing:", error);
        }
    };

    return (
        <div className="form-container">
            <h3 className="form-title">Create a New Listing</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Add a catchy title"
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
                        placeholder="Enter image URL"
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
                    <button className="btn btn-primary" style={{ width: '100%' }}>Create Listing</button>
                </div>
            </form>
        </div>
    );
};

export default ListingForm;
