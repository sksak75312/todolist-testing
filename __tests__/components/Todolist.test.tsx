import { render, screen, cleanup, fireEvent } from "@testing-library/react";
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
    /**
     * * 更精確選擇，name
     * * - 來自內部的文字 (<button>Add Todo</button>)。
     * * - 來自 aria-label 或 aria-labelledby 等屬性。
     */
    expect(screen.getByRole("button", { name: "Add Todo" })).not.toBeDisabled();
  });

  test("Check the input", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("請輸入代辦事項")).toBeInTheDocument();
  });

  test('Check the select', () => {
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Priority')).toBeInTheDocument();
  })

  test('Open the select dropdown', () => {
    fireEvent.click(screen.getByRole('combobox'));
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('Middle')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
  })
});

