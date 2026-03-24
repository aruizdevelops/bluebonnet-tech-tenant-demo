'use client';

import { createContext, useReducer, useEffect, useCallback } from 'react';
import { getMenuItems } from '../services/menuService';
import { getSpecials } from '../services/specialsService';
import { getCategories } from '../services/categoriesService';
import { getMedia } from '../services/mediaService';
import { getBusinessInfo } from '../services/businessService';

const AdminDataContext = createContext(null);

const initialState = {
  menuItems: [],
  specials: [],
  categories: [],
  media: [],
  businessInfo: null,
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

    // Menu items
    case 'SET_MENU_ITEMS':
      return { ...state, menuItems: action.payload };
    case 'ADD_MENU_ITEM':
      return { ...state, menuItems: [...state.menuItems, action.payload] };
    case 'UPDATE_MENU_ITEM':
      return {
        ...state,
        menuItems: state.menuItems.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_MENU_ITEM':
      return {
        ...state,
        menuItems: state.menuItems.filter((item) => item.id !== action.payload),
      };

    // Specials
    case 'SET_SPECIALS':
      return { ...state, specials: action.payload };
    case 'ADD_SPECIAL':
      return { ...state, specials: [...state.specials, action.payload] };
    case 'UPDATE_SPECIAL':
      return {
        ...state,
        specials: state.specials.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_SPECIAL':
      return {
        ...state,
        specials: state.specials.filter((item) => item.id !== action.payload),
      };

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
      return {
        ...state,
        categories: state.categories.filter((item) => item.id !== action.payload),
      };

    // Media
    case 'SET_MEDIA':
      return { ...state, media: action.payload };
    case 'ADD_MEDIA':
      return { ...state, media: [...state.media, action.payload] };
    case 'DELETE_MEDIA':
      return {
        ...state,
        media: state.media.filter((item) => item.id !== action.payload),
      };

    // Business info
    case 'SET_BUSINESS_INFO':
      return { ...state, businessInfo: action.payload };

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
        const [menuResult, specialsResult, categoriesResult, mediaResult, businessResult] =
          await Promise.all([
            getMenuItems(),
            getSpecials(),
            getCategories(),
            getMedia(),
            getBusinessInfo(),
          ]);

        if (cancelled) return;

        dispatch({
          type: 'INIT_DATA',
          payload: {
            menuItems: menuResult.data,
            specials: specialsResult.data,
            categories: categoriesResult.data,
            media: mediaResult.data,
            businessInfo: businessResult.data,
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

  const value = { state, dispatch };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
}

export default AdminDataContext;
