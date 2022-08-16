import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';

export interface initialStateType {
  productData: productDataType;
}

export interface categoryType {
  createdAt: string;
  name: string;
  id: string;
}

export interface productType {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  price: string;
  category: string;
  description: string;
}

export interface productDataType {
  products: productType[];
  product: any | undefined | null | productType;
  isLoading: boolean;
  error: any | undefined | null;
}

export type AppThunk = ThunkAction<void, initialStateType, null, Action<string>>;
