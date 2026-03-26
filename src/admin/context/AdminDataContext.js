'use client';

import { createContext, useReducer, useEffect } from 'react';
import { getSmoothies, getCategories } from '../services/smoothiesService';
import { getOrders } from '../services/ordersService';
import { getPromotions } from '../services/promotionsService';
import { getMedia } from '../services/mediaService';

const AdminDataContext = createContext(null);

const initialState = {
  smoothies: [],
  categories: [],
  orders: [],
  promotions: [],
  media: [],
  isLoading: true,
  error: null,
};

function adminReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'INIT_DATA':
      return { ...state, ...action.payload, isLoading: false };

    // Smoothies
    case 'SET_SMOOTHIES':
      return { ...state, smoothies: action.payload };
    case 'ADD_SMOOTHIE':
      return { ...state, smoothies: [...state.smoothies, action.payload] };
    case 'UPDATE_SMOOTHIE':
      return {
        ...state,
        smoothies: state.smoothies.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_SMOOTHIE':
      return { ...state, smoothies: state.smoothies.filter((item) => item.id !== action.payload) };

    // Categories
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, action.payload] };
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        categories: state.categories.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_CATEGORY':
      return { ...state, categories: state.categories.filter((item) => item.id !== action.payload) };

    // Orders
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    case 'UPDATE_ORDER':
      return {
        ...state,
        orders: state.orders.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    // Promotions
    case 'SET_PROMOTIONS':
      return { ...state, promotions: action.payload };
    case 'ADD_PROMOTION':
      return { ...state, promotions: [...state.promotions, action.payload] };
    case 'UPDATE_PROMOTION':
      return {
        ...state,
        promotions: state.promotions.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_PROMOTION':
      return { ...state, promotions: state.promotions.filter((item) => item.id !== action.payload) };

    // Media
    case 'SET_MEDIA':
      return { ...state, media: action.payload };
    case 'ADD_MEDIA':
      return { ...state, media: [...state.media, action.payload] };
    case 'DELETE_MEDIA':
      return { ...state, media: state.media.filter((item) => item.id !== action.payload) };

    default:
      return state;
  }
}

export function AdminDataProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        const [smoothiesResult, categoriesResult, ordersResult, promotionsResult, mediaResult] =
          await Promise.all([
            getSmoothies(),
            getCategories(),
            getOrders(),
            getPromotions(),
            getMedia(),
          ]);

        if (cancelled) return;

        dispatch({
          type: 'INIT_DATA',
          payload: {
            smoothies: smoothiesResult.data,
            categories: categoriesResult.data,
            orders: ordersResult.data,
            promotions: promotionsResult.data,
            media: mediaResult.data,
          },
        });
      } catch (err) {
        if (!cancelled) {
          dispatch({ type: 'SET_ERROR', payload: err.message });
        }
      }
    }

    loadData();
    return () => { cancelled = true; };
  }, []);

  return (
    <AdminDataContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminDataContext.Provider>
  );
}

export default AdminDataContext;
