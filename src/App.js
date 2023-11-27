
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FoodItems from './FoodItems';
import Menu from './components/Menu';
import LoadingComponent from './components/LoadingComponent';
import FoodAnim from './Loader.json'
function App() {
  const [menuItemsWithImages, setMenuItemsWithImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(FoodItems);
        // Simulating a delay of 3 seconds before displaying the menu
        setTimeout(() => {
          setMenuItemsWithImages(FoodItems);
          setIsLoading(false); // Set loading state to false after 3 seconds
        }, 3000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchData();
  }, []);
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
