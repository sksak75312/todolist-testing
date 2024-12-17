import { useState, ChangeEventHandler } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent } from "@/components/ui/card";

import AppButton from "@/components/AppButton";

function App() {
  const [todoList, setTodoList] = useState<
    { id: string; content: string; priority: string }[]
  >([]);
  const hightList = todoList.filter((item) => item.priority === "hight");
  const middleList = todoList.filter((item) => item.priority === "middle");
  const lowList = todoList.filter((item) => item.priority === "low");

  const initialNewData = {
    id: crypto.randomUUID(),
    content: "",
    priority: "",
  };
  const [newData, setNewData] = useState(initialNewData);

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewData((pre) => ({
      ...pre,
      content: e.target.value,
    }));
  };

  const handleSelect = (e: string) => {
    setNewData((pre) => ({
      ...pre,
      priority: e,
    }));
  };

  const handleButton = () => {
    setTodoList((pre) => {
      return [...pre, newData];
    });

    setNewData(initialNewData);
  };

  return (
    <>
      <main>
        <section className="p-9">
          <div className="container">
            <div className="mb-9 flex items-center justify-center">
              <Input
                className="w-96 rounded-e-none"
                placeholder="請輸入代辦事項"
                onChange={handleInput}
                value={newData.content}
              />
              <Select onValueChange={handleSelect} value={newData.priority}>
                <SelectTrigger className="w-[180px] rounded-none">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="middle">Middle</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <AppButton onButton={handleButton} />
            </div>
            {!!hightList.length && (
              <div className="mb-5 rounded-lg bg-cyan-100 p-5">
                <h2 className="mb-9 text-4xl text-zinc-900">High</h2>
                <ul className="flex flex-wrap justify-start gap-4">
                  {hightList.map((item) => (
                    <li key={item.id}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-6">
                          {item.content}
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!!middleList.length && (
              <div className="mb-5 rounded-lg bg-teal-100 p-5">
                <h2 className="mb-9 text-4xl text-zinc-900">Middle</h2>
                <ul className="flex flex-wrap justify-start gap-4">
                  {middleList.map((item) => (
                    <li key={item.id}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-6">
                          {item.content}
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!!lowList.length && (
              <div className="mb-5 rounded-lg bg-emerald-100 p-5">
                <h2 className="mb-9 text-4xl text-zinc-900">Low</h2>
                <ul className="flex flex-wrap justify-start gap-4">
                  {lowList.map((item) => (
                    <li key={item.id}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-6">
                          {item.content}
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
