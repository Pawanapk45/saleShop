import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgbmiNMmKgE_oGfkd-pUU44_MBKgaFeXNcw&s' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVTY-BNU7Z6RHJa7iLWwE04jMDP6iktePnA&s' },
    { id: 3, url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/MayART22/Teaser1/StorePage_Mobile_Header.jpg' },
    { id: 4, url: 'https://img.etimg.com/thumb/width-420,height-315,imgsize-99086,resizemode-75,msid-114174493/top-trending-products/news/amazon-great-indian-festival-2024-best-deal-price-on-tv-mobiles-and-playstation/cepc.jpg' },
    { id: 5, url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/supermarket-landscape-design-template-dd8ed359dbd2609045b0f3f6bf081169_screen.jpg?ts=1588716310' },
];

const slideShowSlice = createSlice({
    name: 'slideShow',
    initialState,
    reducers: {}
});

export const selectSlideShowData = (state) => state.slideShow;

export default slideShowSlice.reducer;
