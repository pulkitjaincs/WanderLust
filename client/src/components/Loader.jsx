import React from 'react';
import './Loader.css';

export const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text short"></div>
        </div>
    );
};

export const SkeletonDetail = () => {
    return (
        <div className="skeleton-detail">
            <div className="skeleton skeleton-title"></div>
            {/* Simulating location text */}
            <div className="skeleton skeleton-text short" style={{ width: '30%', marginBottom: '10px' }}></div>

            <div className="skeleton skeleton-hero-image"></div>

            <div className="skeleton skeleton-text-block" style={{ marginTop: '20px' }}></div>
            <div className="skeleton skeleton-text-block"></div>
            <div className="skeleton skeleton-text-block short"></div>
        </div>
    );
};

export const Loader = () => {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );
};
