import { Input, } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import AppButton from "@/components/AppButton";

function App() {
  return (
    <>
    <main>
      <section className="p-9">
        <div className="container">
          <div className='flex justify-center items-center mb-9'>
            <Input className='w-96 rounded-e-none' placeholder='請輸入代辦事項'/>
            <Select>
              <SelectTrigger className="w-[180px] rounded-none">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="middle">Middle</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <AppButton/>
          </div>
          <div className='bg-cyan-100 p-5 mb-5 rounded-lg'>
            <h2 className='mb-9 text-4xl text-zinc-900'>High</h2>
            <ul className='flex'>
              <li>
                <Card className="overflow-hidden">
                  <CardContent className='p-6'>
                    早上起床刷牙
                  </CardContent>
                </Card>
              </li>
            </ul>
          </div>
          <div className='bg-teal-100 p-5 rounded-lg mb-5'>
            <h2 className='mb-9 text-4xl text-zinc-900'>Middle</h2>
            <ul className='flex'>
              <li>
                <Card className="overflow-hidden">
                  <CardContent className='p-6'>
                    早上起床刷牙
                  </CardContent>
                </Card>
              </li>
            </ul>
          </div>
          <div className='bg-emerald-100 p-5 rounded-lg mb-5'>
            <h2 className='mb-9 text-4xl text-zinc-900'>Middle</h2>
            <ul className='flex'>
              <li>
                <Card className="overflow-hidden">
                  <CardContent className='p-6'>
                    早上起床刷牙
                  </CardContent>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default App;
