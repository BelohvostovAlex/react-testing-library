import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../store/store';

export const renderWithReduxProvider = (component) => {
  return render(<Provider store={store}>{component}</Provider>);
};
