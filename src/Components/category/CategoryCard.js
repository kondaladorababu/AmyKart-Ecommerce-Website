import React from 'react';
import '../../styles/CategoryCard.css';

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
            <div className="category-card__overlay"></div>
        </div>
    );
};

export default CategoryCard;