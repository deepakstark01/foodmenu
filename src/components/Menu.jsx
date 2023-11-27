// // src/components/Menu.js
// import React from 'react';
// import MenuItem from './MenuItem';

// const Menu = ({ menuItems }) => {
//   console.log(menuItems);
//   return (
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold mb-4">Food Menu</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
//         {menuItems.map((item, index) => (
//           <MenuItem key={index} {...item} imageUrl={item.image_url} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (indexOfLastItem < menuItems.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Food Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <MenuItem key={item.id} {...item} imageUrl={item.image_url} />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200">
          Previous Page
        </button>
        <button onClick={nextPage} disabled={indexOfLastItem >= menuItems.length} className="px-4 py-2 bg-gray-200">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Menu;
