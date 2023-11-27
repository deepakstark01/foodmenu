
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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIJbz_0p1b8wN4yfr39EZ8zBiDESNqVorzeNiUID3i_rQtO10fmcXMAJ92w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUMUzGySZ_JLyboWOcISigj6GGbCjiumzCHM12iVLS84KAvG0uVstjfGcuw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSsKV8mUZz-OTCHBDFHutBtoKFPbhLpT2sRD5B0CQrsL_Jl_87P8KJy2Ahg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFk40PDsfocwu3mt4E6EqdcMgjJd3fcMUUYFLwpz5-5NH47opRab8jp29wWI&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN72jfYpX85U_Gd5wc3rVRk_yo4crSLhIaMYqMavnIpA_ZSURg52nHfYAEvg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUTl9jxpN7QVOAjL3ILRiLgkzjhayax6r9of1-2ILAcvGJTzYJhb5T9e_zw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbtoyOJDRQWb5MiLvZczEB3AA8oGK7XSGmGU_bNP0O28vBb_EVaUO_f4KAA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JDarvo6pHnjgPZPkCdeyiP4szfYD6ymmw6yXhfAODKyVCMcZ2XxDS1V1aw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6xOetgCAvxt9gW0hJ5mnPwwk0VZ7PAEoQm09JUh03o5ghE_ZkI12QclFQYI&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcH0m2r6dCX1YVg_NiWqHuoZtWoXjtfNvBddfhTwvZWma1ixSM2QqB6OlbeQ&s',
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
