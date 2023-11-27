
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Menu from './components/Menu';
import LoadingComponent from './components/LoadingComponent';
import FoodAnim from './Food.json'
function App() {
  const [menuItemsWithImages, setMenuItemsWithImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  const menuItems = [
    { id: 1, name: 'Cheeseburger', price: 9.99, preparationTime: '15 minutes' },
    { id: 2, name: 'Margherita Pizza', price: 11.99, preparationTime: '20 minutes' },
    { id: 3, name: 'Caesar Salad', price: 7.49, preparationTime: '10 minutes' },
    { id: 4, name: 'French Fries', price: 3.99, preparationTime: '8 minutes' },
    { id: 5, name: 'Soda (Can)', price: 1.99, preparationTime: '5 minutes' },
    { id: 6, name: 'Espresso', price: 2.49, preparationTime: '3 minutes' },
    { id: 7, name: 'Grilled Chicken Sandwich', price: 8.99, preparationTime: '12 minutes' },
    { id: 8, name: 'Vegetable Fried Rice', price: 10.99, preparationTime: '18 minutes' },
    { id: 9, name: 'Spaghetti Carbonara', price: 12.49, preparationTime: '20 minutes' },
    { id: 10, name: 'Fish and Chips', price: 13.99, preparationTime: '22 minutes' },
    { id: 11, name: 'Club Sandwich', price: 9.49, preparationTime: '12 minutes' },
    { id: 12, name: 'Chocolate Milkshake', price: 5.99, preparationTime: '5 minutes' },
    { id: 13, name: 'Vegetable Soup', price: 6.99, preparationTime: '10 minutes' },
    { id: 14, name: 'Cheese Pizza', price: 10.99, preparationTime: '18 minutes' },
    { id: 15, name: 'Garlic Bread', price: 4.49, preparationTime: '8 minutes' },
    { id: 16, name: 'Iced Tea', price: 2.99, preparationTime: '3 minutes' },
    { id: 17, name: 'Beef Burrito', price: 9.99, preparationTime: '15 minutes' },
    { id: 18, name: 'Chicken Wings', price: 8.49, preparationTime: '12 minutes' },
    { id: 19, name: 'Pasta Primavera', price: 11.99, preparationTime: '18 minutes' },
    { id: 20, name: 'Egg Salad Sandwich', price: 6.49, preparationTime: '12 minutes' },
  ];
  
  

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const itemsWithImages = await Promise.all(
          menuItems.map(async (item) => {
            const response = await axios.get(`https://getimg-uuqx.onrender.com/search?query=${item.name}`);
            const { data } = response;
            return { ...item, image_url: data.image_url };
          })
        );
        setMenuItemsWithImages(itemsWithImages);
        setIsLoading(false); // Set loading state to false when data is fetched
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchImages();
  }, [menuItems]);
  return (
    <>
     <div className="App">
    {isLoading ? (
      <div className='flex justify-center items-center h-screen'>
        <div className="w-5/6 md:w-3/5 lg:w-2/5 xl:w-1/3 p-4">
          {/* Control width with responsive classes */}
          <LoadingComponent animationData={FoodAnim} size={300} />
        </div>
      </div>
    ) : (
      <Menu menuItems={menuItemsWithImages} />
    )}
  </div>
    
    </>
  );
}

export default App;
