import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '@/components/ui/input';

describe('Input 測試', () => {
  test('初始畫面渲染', () => {
    render(<Input placeholder="請輸入代辦事項" />);
    // 確認 Input 元素是否正確渲染
    const inputElement = screen.getByPlaceholderText('請輸入代辦事項');
    expect(inputElement).toBeInTheDocument();
    // 確認 Input 是否為空
    expect(inputElement).toHaveValue('');
  });
});


// describe('測試', () => {
//   test('初始畫冊是', () => {
//     const num = 4;
//     expect(num).toBe(4)
//   })
// })