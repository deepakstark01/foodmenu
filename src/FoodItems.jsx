
const FoodItems = [
    { id: 1, name: 'Cheeseburger', price: 9.99, preparationTime: '15 minutes'},
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
    { id:   18, name: 'Chicken Wings', price: 8.49, preparationTime: '12 minutes' },
    { id: 19, name: 'Pasta Primavera', price: 11.99, preparationTime: '18 minutes' },
    { id: 20, name: 'Egg Salad Sandwich', price: 6.49, preparationTime: '12 minutes' },
  ];
  const image_urls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2YaOGp9NwAcZbf6QU9vnHwPxrHP3jdKZiZkxefa51yNVcu-HRLMwvOCqow&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjDEHh-smXMqoRdEdtAy4O2xo6Xuu-Oscl9fdM6nP1J0fmsvi_jGFeYVf8cE&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QQcLPVgFhUQyDIj0BM5yrW0Baav6naSQ_y10Dag0iehcm8cJyUDdDD9WYw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYP98W5gIku6T1dHnEdTTJCPutdYvjHHXaV6gDDhunZgmfNycIjRHnSippw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN72jfYpX85U_Gd5wc3rVRk_yo4crSLhIaMYqMavnIpA_ZSURg52nHfYAEvg&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7ABpH966tTvpWXTSfIr7O-kYXFbQS1MSRg&usqp=CAU' ,   
'https://www.wellplated.com/wp-content/uploads/2014/07/French-Onion-Chicken-Sandwiches.jpg',    
'https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg',
'https://www.simplyscratch.com/wp-content/uploads/2012/08/dinner3.jpg',
'https://www.rockrecipes.com/wp-content/uploads/2008/02/Super-Crispy-fish-and-chips-close-up-photo-of-one-piece-of-cooked-fish-broken-open-to-reveal-interior.jpg',
'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/06/club-sandwich.jpg',
'https://www.sidechef.com/recipe/5742dc5d-656e-4bbf-984b-299c02c2a471.jpg',
    'https://www.howtocook.recipes/wp-content/uploads/2021/11/Vegetable-soup-recipe-500x500.jpg',
    'https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66CMBrAKGfM5jCm9uMXHICtOJxveRKsbq5-178U2t7zL005O3CW7HympQcP0&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84E-hGk7ceFV-5uE3oCE1_3AAmvjTl_FSuELr8c9qG8C6BJl2oK3EImiuOVs&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavxzkih5kEreEET-x96wZExDf3C-U7caY6v97bxJkw_VlRea6J2JpqXpMdg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwNKqW8O66iNR2H-Y6Jjjl99vEu7s_Uxhu74c_YQckjnQSYtAgwtdi5ZthSg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTWZDBi5dJzTQ5is-gkr9uQcX9ikOKBNxMQ91a_V4StBo_JCrfxwvfETh-w&s'
];

for(let i = 0; i < FoodItems.length; i++) {
    FoodItems[i].image_url = image_urls[i];
}

export default FoodItems;
