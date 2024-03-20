import {configureStore} from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice';
import analyticsReducer from '../features/analytics/analyticsSlice';
import usersReducers from '../features/users/usersSlice';


export const store = configureStore({
    reducer:{
        users: usersReducers,
        analytics: analyticsReducer,
        products: productsReducer

    },
})

// export default store;