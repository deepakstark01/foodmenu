// src/components/MenuItem.js
import React from 'react';

const MenuItem = ({ name, price, imageUrl, preparationTime }) => {
  const placeholderImage = 'https://via.placeholder.com/300';
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100">
      <div className="text-center">
        <img
          src={imageUrl || placeholderImage}
          alt={name}
          className="mx-auto h-40 w-40 object-cover rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <p className="text-gray-500">Preparation Time: {preparationTime}</p>

      </div>
    </div>
  );
};

export default MenuItem;
