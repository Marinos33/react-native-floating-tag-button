import type React from 'react';

export type ShowToast = (text: string, duration?: number) => void;

export type Provider = React.FunctionComponent & {
  ref: ToastRef | null;
};

export type RegisterRef = (ref: ToastRef) => void;

export interface ToastRef {
  showToast: ShowToast;
}

export interface ToastProps {
  ref: (ref: ToastRef) => void;
}
