import { useState } from "react"
import Checkbox from "./components/Checkbox"
import Input from "./components/Input"
import "./styles/index.scss"

function App() {
  const [list, setList] = useState([ 'apple' ])

  return (
    <div className="bg-gray-900">
      <div className="min-h-screen py-20 max-w-screen-xl mx-auto">
        <h1 className="font-black text-7xl text-center text-white mb-12">
          Grocery List
        </h1>
        <div className="flex justify-center gap-2 mb-8">
          <Input className="w-full max-w-2xl" placeholder="What to buy?" />
          <button className="bg-blue-500 border-2 border-blue-500 text-white px-4 py-2 rounded-md font-bold">
            Add
          </button>
        </div>

        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {list.map(item => (
            <Checkbox label={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
