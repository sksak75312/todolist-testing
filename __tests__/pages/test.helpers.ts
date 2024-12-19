import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// 測試檔案頂部
async function addTodoWithPriority(todoValue, priority) {
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: "Add Todo" });
  const select = screen.getByRole("combobox");

  // 輸入 todo 值
  await userEvent.type(input, todoValue);

  // 選擇優先級
  fireEvent.click(select);
  fireEvent.click(screen.getByText(priority));

  // 點擊新增按鈕
  fireEvent.click(button);
}

export { addTodoWithPriority }; 