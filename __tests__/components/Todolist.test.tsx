// import { describe, test, expect } from 'vitest';
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/App";

describe("TodoList Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test("Check the button", () => {
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
  });

  test("Check the input", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Check the input placeholder", () => {
    expect(screen.getByPlaceholderText("請輸入代辦事項")).toBeInTheDocument();
  });

  test('Check the select', () => {
    // expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Priority')).toBeInTheDocument();
  })

  test('open the dropdown', () => {
    
  })
});

