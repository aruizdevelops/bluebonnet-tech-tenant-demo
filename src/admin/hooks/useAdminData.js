'use client';

import { useContext, useCallback } from 'react';
import AdminDataContext from '../context/AdminDataContext';
import { sanitizeText } from '@bluebonnet-tech/core';
import * as smoothiesService from '../services/smoothiesService';
import * as ordersService from '../services/ordersService';
import * as promotionsService from '../services/promotionsService';
import * as mediaService from '../services/mediaService';

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

  const addSmoothie = useCallback(async (item) => {
    const result = await smoothiesService.createSmoothie(sanitizeItem(item));
    if (result.success) dispatch({ type: 'ADD_SMOOTHIE', payload: result.data });
    return result;
  }, [dispatch]);

  const updateSmoothie = useCallback(async (id, updates) => {
    const result = await smoothiesService.updateSmoothie(id, sanitizeItem(updates));
    if (result.success) dispatch({ type: 'UPDATE_SMOOTHIE', payload: result.data });
    return result;
  }, [dispatch]);

  const deleteSmoothie = useCallback(async (id) => {
    const result = await smoothiesService.deleteSmoothie(id);
    if (result.success) dispatch({ type: 'DELETE_SMOOTHIE', payload: id });
    return result;
  }, [dispatch]);

  const addCategory = useCallback(async (item) => {
    const result = await smoothiesService.createCategory(sanitizeItem(item));
    if (result.success) dispatch({ type: 'ADD_CATEGORY', payload: result.data });
    return result;
  }, [dispatch]);

  const updateCategory = useCallback(async (id, updates) => {
    const result = await smoothiesService.updateCategory(id, sanitizeItem(updates));
    if (result.success) dispatch({ type: 'UPDATE_CATEGORY', payload: result.data });
    return result;
  }, [dispatch]);

  const deleteCategory = useCallback(async (id) => {
    const result = await smoothiesService.deleteCategory(id);
    if (result.success) dispatch({ type: 'DELETE_CATEGORY', payload: id });
    return result;
  }, [dispatch]);

  const updateOrderStatus = useCallback(async (id, status) => {
    const result = await ordersService.updateOrderStatus(id, status);
    if (result.success) dispatch({ type: 'UPDATE_ORDER', payload: result.data });
    return result;
  }, [dispatch]);

  const addPromotion = useCallback(async (item) => {
    const result = await promotionsService.createPromotion(sanitizeItem(item));
    if (result.success) dispatch({ type: 'ADD_PROMOTION', payload: result.data });
    return result;
  }, [dispatch]);

  const updatePromotion = useCallback(async (id, updates) => {
    const result = await promotionsService.updatePromotion(id, sanitizeItem(updates));
    if (result.success) dispatch({ type: 'UPDATE_PROMOTION', payload: result.data });
    return result;
  }, [dispatch]);

  const deletePromotion = useCallback(async (id) => {
    const result = await promotionsService.deletePromotion(id);
    if (result.success) dispatch({ type: 'DELETE_PROMOTION', payload: id });
    return result;
  }, [dispatch]);

  const uploadMedia = useCallback(async (file) => {
    const result = await mediaService.uploadMedia(file);
    if (result.success) dispatch({ type: 'ADD_MEDIA', payload: result.data });
    return result;
  }, [dispatch]);

  const deleteMedia = useCallback(async (id) => {
    const result = await mediaService.deleteMedia(id);
    if (result.success) dispatch({ type: 'DELETE_MEDIA', payload: id });
    return result;
  }, [dispatch]);

  return {
    ...state,
    addSmoothie,
    updateSmoothie,
    deleteSmoothie,
    addCategory,
    updateCategory,
    deleteCategory,
    updateOrderStatus,
    addPromotion,
    updatePromotion,
    deletePromotion,
    uploadMedia,
    deleteMedia,
  };
}
