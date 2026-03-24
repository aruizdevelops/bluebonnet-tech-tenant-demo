'use client';

import { useContext, useCallback } from 'react';
import AdminDataContext from '../context/AdminDataContext';
import { sanitizeText } from '@bluebonnet-tech/core';
import * as menuService from '../services/menuService';
import * as specialsService from '../services/specialsService';
import * as categoriesService from '../services/categoriesService';
import * as mediaService from '../services/mediaService';
import * as businessService from '../services/businessService';

function sanitizeItem(item) {
  const sanitized = {};
  for (const [key, value] of Object.entries(item)) {
    sanitized[key] = typeof value === 'string' ? sanitizeText(value) : value;
  }
  return sanitized;
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within an AdminDataProvider');
  }

  const { state, dispatch } = context;

  // Menu item actions
  const addMenuItem = useCallback(async (item) => {
    const result = await menuService.createMenuItem(sanitizeItem(item));
    if (result.success) {
      dispatch({ type: 'ADD_MENU_ITEM', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const updateMenuItem = useCallback(async (id, updates) => {
    const result = await menuService.updateMenuItem(id, sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'UPDATE_MENU_ITEM', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteMenuItem = useCallback(async (id) => {
    const result = await menuService.deleteMenuItem(id);
    if (result.success) {
      dispatch({ type: 'DELETE_MENU_ITEM', payload: id });
    }
    return result;
  }, [dispatch]);

  // Special actions
  const addSpecial = useCallback(async (item) => {
    const result = await specialsService.createSpecial(sanitizeItem(item));
    if (result.success) {
      dispatch({ type: 'ADD_SPECIAL', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const updateSpecial = useCallback(async (id, updates) => {
    const result = await specialsService.updateSpecial(id, sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'UPDATE_SPECIAL', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteSpecial = useCallback(async (id) => {
    const result = await specialsService.deleteSpecial(id);
    if (result.success) {
      dispatch({ type: 'DELETE_SPECIAL', payload: id });
    }
    return result;
  }, [dispatch]);

  // Category actions
  const addCategory = useCallback(async (item) => {
    const result = await categoriesService.createCategory(sanitizeItem(item));
    if (result.success) {
      dispatch({ type: 'ADD_CATEGORY', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const updateCategory = useCallback(async (id, updates) => {
    const result = await categoriesService.updateCategory(id, sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'UPDATE_CATEGORY', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteCategory = useCallback(async (id) => {
    const result = await categoriesService.deleteCategory(id);
    if (result.success) {
      dispatch({ type: 'DELETE_CATEGORY', payload: id });
    }
    return result;
  }, [dispatch]);

  // Media actions
  const uploadMedia = useCallback(async (file) => {
    const result = await mediaService.uploadMedia(file);
    if (result.success) {
      dispatch({ type: 'ADD_MEDIA', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteMedia = useCallback(async (id) => {
    const result = await mediaService.deleteMedia(id);
    if (result.success) {
      dispatch({ type: 'DELETE_MEDIA', payload: id });
    }
    return result;
  }, [dispatch]);

  // Business info actions
  const updateBusinessInfo = useCallback(async (updates) => {
    const result = await businessService.updateBusinessInfo(sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'SET_BUSINESS_INFO', payload: result.data });
    }
    return result;
  }, [dispatch]);

  return {
    ...state,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    addSpecial,
    updateSpecial,
    deleteSpecial,
    addCategory,
    updateCategory,
    deleteCategory,
    uploadMedia,
    deleteMedia,
    updateBusinessInfo,
  };
}
