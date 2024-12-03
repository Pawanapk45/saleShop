import {createSlice} from '@reduxjs/toolkit';
import { createSelector } from 'reselect';


const initialState = {
  categories: [
    {
      name: 'Fashion and Clothing',
      image:
        'https://static.vecteezy.com/system/resources/previews/048/346/342/non_2x/women-shopping-for-clothes-enjoying-a-day-out-together-png.png',
      subcategories: [
        {
          name: "Men's Clothing",
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiApGApcSx2d3YyhIqoovsI-_nVPdXhYKQFQ&s',
          subcategories: [
            {
                name: 'Kurta',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEM5BIwsxvdviMPGzRMODHIHErZAUW6pl71Q&s',
                price: '$25',
                rating: 4.3,
                id: 'prod-001',
              },
              {
                name: 'Shirt',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3a-Fgdp3tZJxZo1pWxwyzda6oT35W-7mEg&s',
                price: '$20',
                rating: 4.5,
                id: 'prod-002',
              },
              {
                name: 'T-Shirt',
                image: 'https://5.imimg.com/data5/LG/AM/OW/SELLER-31619481/plain-t-shirt-500x500.jpeg',
                price: '$15',
                rating: 4.1,
                id: 'prod-003',
              },
              {
                name: 'Jeans',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7ZusabNwnmBPz-SKryMmUB9hQn0UVCz1mA&s',
                price: '$30',
                rating: 4.6,
                id: 'prod-004',
              },
              {
                name: 'Jacket',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7FqYColoIRNfpiSY3UyRIkfbsYR5oxbzdw&s',
                price: '$50',
                rating: 4.7,
                id: 'prod-005',
              },
              {
                name: 'Sweater',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iNp-E-3SlMrjnrYm7vKviZ_C8qv5jCBdVA&s',
                price: '$40',
                rating: 4.4,
                id: 'prod-006',
              },
              {
                name: 'Blazer',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAol7LMqOx1azXc4Lrm7pTGDe0M6GiOo6eRQ&s',
                price: '$60',
                rating: 4.8,
                id: 'prod-007',
              },
              {
                name: 'Track Suit',
                image: 'https://5.imimg.com/data5/XH/UL/MY-43265664/men.png',
                price: '$22',
                rating: 4.3,
                id: 'prod-008',
              },
          ],
        },
        {
          name: "Women's Clothing",
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH20QiR6EATdIXtJG6KHRKT-uUexza1M0oNw&s',
        },
        {
          name: "Kids' Clothing",
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNrCPlVEE_hZvOPO3CvLg9xV_WvmwO69icQ&s',
        },
        {
          name: 'Footwear',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZEmHE3pgXOA6coSMs5gnRtaqO1ASJs6WZg&s',
          subcategories: [
            {
                name: 'Nike',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFKyLTkuY2dvN963dSVWFmFk-I__NanYFYA&s',
                price: '$40',
                id: 'shoe-001',
                description:'Nike shoes are known for their innovative design, comfort, and performance-focused features, making them popular for sports, fitness, and everyday wear. They are often crafted with lightweight, breathable materials, advanced cushioning technologies like Air Max or Zoom Air, and ergonomic support to enhance foot stability and movement'
              },
              {
                name: 'Adidas',
                image: 'https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes.png',
                price: '$55',
                id: 'shoe-002',
                description:'Nike shoes are known for their innovative design, comfort, and performance-focused features, making them popular for sports, fitness, and everyday wear. They are often crafted with lightweight, breathable materials, advanced cushioning technologies like Air Max or Zoom Air, and ergonomic support to enhance foot stability and movement'
              },
              {
                name: 'Puma',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASUKxGng2oCQlny4ElHZPBdkFCk2_5mkGQ&s',
                price: '$69',
                id: 'shoe-003',
                
              },
              {
                name: 'Nike',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFKyLTkuY2dvN963dSVWFmFk-I__NanYFYA&s',
                price: '$40',
                id: 'shoe-004',
              },
              {
                name: 'Adidas',
                image: 'https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes.png',
                price: '$55',
                id: 'shoe-005',
              },
              {
                name: 'Puma',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASUKxGng2oCQlny4ElHZPBdkFCk2_5mkGQ&s',
                price: '$69',
                id: 'shoe-006',
              },
              {
                name: 'Nike',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFKyLTkuY2dvN963dSVWFmFk-I__NanYFYA&s',
                price: '$40',
                id: 'shoe-007',
              },
              {
                name: 'Adidas',
                image: 'https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes.png',
                price: '$55',
                id: 'shoe-008',
              },
              {
                name: 'Puma',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASUKxGng2oCQlny4ElHZPBdkFCk2_5mkGQ&s',
                price: '$69',
                id: 'shoe-009',
              },
          ],
        },
        {
          name: 'Accessories',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KNTs66BZhaKR9KeRbgJ8xOzTxM99nWkMDg&s',
        },
        {
          name: 'Winter Clothes',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPK1iS1_JvicMgziZTcu--h_FWRqKIWmkwSg&s',
        },
      ],
    },
    {
      name: 'Electronics',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BkogHSLeRTZIPZIeA2C_GsDosLLvZ4QlTg&s',
      subcategories: [
        {
          name: 'Mobile Phones & Tablets',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbaoiNHiF1n-gsRnMi2bzGolWDyCjjTEkxg&s',
        },
        {
          name: 'Laptops & Computers',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXvNbm80ZxDVwpCrk8fmhd0VAgQswVDlTeA&s',
        },
        {
          name: 'Cameras',
          image:
            'https://img.freepik.com/free-vector/video-surveillance-security-cameras-realistic-composition-black-white-cameras-form-circle-illustration_1284-61014.jpg?semt=ais_hybrid',
        },
        {
          name: 'TV & Home Entertainment',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNKzyIfCJCxtMkx5ZVC5DaoFcyG2-C8tGAg&s',
        },
        {
          name: 'Audio Devices',
          image:
            'https://www.portronics.com/cdn/shop/files/Audio_Hero_Banner_Mobile.png?v=1708407591',
        },
        {
          name: 'Mobile Covers',
          image:
            'https://w7.pngwing.com/pngs/95/779/png-transparent-iphone-6-mobile-phone-accessories-printing-smartphone-telephone-case-text-mobile-phone-iphone-6.png',
        },
      ],
    },
    {
      name: 'Beauty and Personal Care',
      image:
        'https://png.pngtree.com/background/20230425/original/pngtree-products-of-personal-care-picture-image_2475177.jpg',
      subcategories: [
        {name: 'Skin Care', image: 'https://example.com/images/skin_care.jpg'},
        {name: 'Hair Care', image: 'https://example.com/images/hair_care.jpg'},
        {name: 'Makeup', image: 'https://example.com/images/makeup.jpg'},
        {
          name: 'Perfumes & Fragrances',
          image: 'https://example.com/images/perfume.jpg',
        },
      ],
    },
    {
      name: 'Home and Living',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVK6AJXqD89pE5Ynd3VxGndynQncLqFzvBXQ&s',
      subcategories: [
        {name: 'Furniture', image: 'https://example.com/images/furniture.jpg'},
        {
          name: 'Kitchen Appliances',
          image: 'https://example.com/images/kitchen_appliances.jpg',
        },
        {
          name: 'Home Decor',
          image: 'https://example.com/images/home_decor.jpg',
        },
        {
          name: 'Cleaning & Home Care',
          image: 'https://example.com/images/cleaning.jpg',
        },
      ],
    },
    {
      name: 'Health and Fitness',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyH-7VtL2xXrPwdcmgzwn49NkrZcD2XxUP7Q&s',
      subcategories: [
        {
          name: 'Fitness Equipment',
          image: 'https://example.com/images/fitness.jpg',
        },
        {
          name: 'Health Devices',
          image: 'https://example.com/images/health_devices.jpg',
        },
        {
          name: 'Supplements & Vitamins',
          image: 'https://example.com/images/supplements.jpg',
        },
      ],
    },
    {
      name: 'Books and Stationery',
      image:
        'https://5.imimg.com/data5/VZ/JB/FO/SELLER-13685268/stationery-500x500.png',
      subcategories: [
        {
          name: 'Educational Books',
          image: 'https://example.com/images/education_books.jpg',
        },
        {
          name: 'Fiction & Non-Fiction',
          image: 'https://example.com/images/fiction.jpg',
        },
        {
          name: 'Stationery',
          image: 'https://example.com/images/stationery.jpg',
        },
      ],
    },
    {
      name: 'Sports and Outdoors',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fGFgUSoWmc-Ijpr6TslzOogz2hHTtz-cHg&s',
      subcategories: [
        {
          name: 'Sports Equipment',
          image: 'https://example.com/images/sports.jpg',
        },
        {name: 'Outdoor Gear', image: 'https://example.com/images/outdoor.jpg'},
      ],
    },
    {
      name: "Kids' Products",
      image:
        'https://png.pngtree.com/png-vector/20240913/ourlarge/pngtree-kids-toys-png-image_12835704.png',
      subcategories: [
        {name: 'Toys', image: 'https://example.com/images/toys.jpg'},
        {
          name: "Kids' Furniture",
          image: 'https://example.com/images/kids_furniture.jpg',
        },
      ],
    },
    {
      name: 'Pet Care',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuIhr1sZMe6u2w0INluEO8cZVEd3nQVcWOw&s',
      subcategories: [
        {name: 'Pet Food', image: 'https://example.com/images/pet_food.jpg'},
        {
          name: 'Pet Accessories',
          image: 'https://example.com/images/pet_accessories.jpg',
        },
      ],
    },
    {
      name: 'Grocery',
      image:
        'https://i.pinimg.com/736x/6c/a8/f0/6ca8f02f56d48f0daf38063da995e763.jpg',
      subcategories: [
        {
          name: 'Daily Essentials',
          image: 'https://example.com/images/daily_grocery.jpg',
        },
        {
          name: 'Food Items',
          image: 'https://example.com/images/food_items.jpg',
        },
      ],
    },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// export const selectFilteredCategories = createSelector(
//   // Input selectors
//   [(state) => state.categories.categories, (state) => state.categories.searchQuery],
//   // Output selector
//   (categories, searchQuery) => {
//     if (!searchQuery) return categories; // अगर सर्च क्वेरी खाली है तो सभी कैटेगोरीज़ रिटर्न करें
//     return categories.filter((category) =>
//       category.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }
// );



// export const selectCategories = state => state.categories.categories;
// export default categoriesSlice.reducer;

export const { setSearchQuery } = categoriesSlice.actions;

export const selectFilteredCategories = createSelector(
  [(state) => state.categories.categories, (state) => state.categories.searchQuery],
  (categories, searchQuery) => {
    if (!searchQuery) return categories;
    return categories.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);

export const selectCategories = (state) => state.categories.categories;

export default categoriesSlice.reducer;
