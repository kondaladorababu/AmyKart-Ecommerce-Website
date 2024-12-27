import React from 'react';
import '../../styles/CategoryCard.css';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const navigate = useNavigate();

    const routeToProductsPage = () => {
        navigate(`/products/${category.id}`);
    }

    return (
        <div className="category-card" onClick={routeToProductsPage}>
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
            <div className="category-card__overlay"></div>
        </div>
    );
};

export default CategoryCard;