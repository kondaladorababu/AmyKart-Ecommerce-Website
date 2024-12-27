import React from 'react';
import '../../styles/Category.css';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: 'Electronics',
            imageUrl: 'https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg',
        },
        {
            id: 2,
            name: 'Fashion',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSe_EWrbVIbfPrrgt8OnoBcdNXtWoZXZcXVMmjrwqB3eI9iF-tCIC14D_O2rlLzSdTK8&usqp=CAU',
        },
        {
            id: 3,
            name: 'Home & Kitchen',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYOmzGSbOKpvahjVxj-TptGXBYKbM6-NnPA&s',
        },
        {
            id: 4,
            name: 'Books',
            imageUrl: 'https://publishingperspectives.com/wp-content/uploads/2024/01/710-Nero-Coffee-prize-four-category-winners-ftw.jpg',
        },
        {
            id: 5,
            name: 'Footwear',
            imageUrl: 'https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=',
        },
        {
            id: 6,
            name: 'Fitness',
            imageUrl: 'https://www.sports-fitness.co.uk/media/wysiwyg/gym.jpg',
        },
        {
            id: 7,
            name: 'Sports',
            imageUrl: 'https://img.freepik.com/premium-photo/composition-various-sport-equipment-fitness-games_93675-82046.jpg',
        },
    ];

    return (
        <div className='category'>
            <h1> Shop By Categories</h1>
            <div className='category_row'>
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default Category;
