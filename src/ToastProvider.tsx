import React from 'react';
import Toast, { register } from './Toast';
import type { Provider } from './typings';

const ToastProvider: Provider = (): JSX.Element => {
  return <Toast ref={register} />;
};
ToastProvider.ref = null;
export default ToastProvider;
