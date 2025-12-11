import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

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
            navigate(`/listings/${id}`); // Redirect to show page
        } catch (error) {
            console.error("Error updating listing:", error);
        }
    };

    if (loading) return <div className="container mt-3">Loading...</div>;

    return (
        <div className="row mt-3">
            <div className="col-8 offset-2">
                <h3>Edit your Listing</h3>
                <form onSubmit={handleSubmit} className="needs-validation">
                    <div className="mb-3">
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
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image Link</label>
                        <input
                            type="text"
                            name="image"
                            className="form-control"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-4">
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
                        <div className="mb-3 col-md-8">
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
                    <div className="mb-3">
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
                    <button className="btn btn-dark edit-btn mt-3 mb-3">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditListing;
