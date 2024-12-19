import React from 'react';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoList from '../../src/pages/TodoList'

import { addTodoWithPriority } from "./test.helpers";

describe("TodoList Component", () => {
  // beforeEach 會在每個測試案例執行前執行
  beforeEach(() => {
    // 渲染元件
    render(<TodoList />);
  });

  // afterEach 會在每個測試案例執行後執行
  afterEach(() => {
    // 清空所有測試後的狀態
    cleanup();
  });

  test("Check the button", () => {
    // getByText 選取畫面的文字
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
    /**
     * * getByRole 選取畫面的元素
     * * 更精確選擇值
     * * - 來自內部的文字 (<button>Add Todo</button>)。
     * * - 來自 aria-label 或 aria-labelledby 等屬性。
     */
    expect(screen.getByRole("button", { name: "Add Todo" })).not.toBeDisabled();
  });

  test("Check the input", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("請輸入代辦事項")).toBeInTheDocument();
  });

  test("Input should update its value", async () => {
    const input = screen.getByRole("textbox");
    // 使用 userEvent.type 模擬使用者輸入值
    // userEvent 為非同步
    await userEvent.type(input, "New Todo Value");
    // 使用 toHaveValue 檢查 input 的值
    expect(input).toHaveValue("New Todo Value");
  });

  test("Check the select", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Priority")).toBeInTheDocument();
  });

  test("Open the select dropdown", () => {
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.getByText("High")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Low")).toBeInTheDocument();
  });

  test("Select the priority", () => {
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("High"));
    expect(screen.getByText("High")).toBeInTheDocument();
  });

  // test("Add a new todo for high", async () => {
  //   // 新增待辦事項的值
  //   const todoValue = "New High Todo Value";
  //   // addTodoWithPriority 共用函式提取至外部檔案
  //   await addTodoWithPriority(todoValue, "High");

  //   expect(await screen.findByText("High Group")).toBeInTheDocument();
  //   expect(await screen.findByText(todoValue)).toBeInTheDocument();
  // });

  // // 與上面的測試案例相同，只是待辦事項的優先級不同
  // test("Add a new todo for medium", async () => {
  //   const todoValue = "New Medium Todo Value";
  //   await addTodoWithPriority(todoValue, "Medium");

  //   expect(await screen.findByText("Medium Group")).toBeInTheDocument();
  //   expect(await screen.findByText(todoValue)).toBeInTheDocument();
  // });

  // // 與上面的測試案例相同，只是待辦事項的優先級不同
  // test("Add a new todo for low", async () => {
  //   const todoValue = "New Low Todo Value";
  //   await addTodoWithPriority(todoValue, "Low");

  //   expect(await screen.findByText("Low Group")).toBeInTheDocument();
  //   expect(await screen.findByText(todoValue)).toBeInTheDocument();
  // });


  
  /**
   * ! ChatGPT 推薦優化方向
   */
  const priorities = [
    { value: "New High Todo Value", label: "High", group: "High Group" },
    { value: "New Medium Todo Value", label: "Medium", group: "Medium Group" },
    { value: "New Low Todo Value", label: "Low", group: "Low Group" },
  ];

  /**
   *  * test.each 是 Jest 提供的參數化測試工具，類 forEach
   *  * https://vitest.dev/api/#test-each
   */ 
  test.each(priorities)(
    `Add a new todo with $label priority`,
    async ({ value, label, group }) => {
      await addTodoWithPriority(value, label);

      expect(await screen.findByText(group)).toBeInTheDocument();
      expect(await screen.findByText(value)).toBeInTheDocument();
    },
  );
});
