import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AppButton from '@/components/AppButton';

describe('AppButton元件測試', () => {
  test('AppButton渲染', () => {
    render(<AppButton />);
  });
});
