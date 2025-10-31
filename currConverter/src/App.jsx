import { useState, useEffect } from 'react'
import Input from './Components/Input'
import useCurrInfo from './Hooks/useCurrInfo'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [converted, setConverted] = useState(0)

  const currencyInfo = useCurrInfo(from)
  const options = Object.keys(currencyInfo || {})

  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConverted((amount * currencyInfo[to]).toFixed(2))
    }
  }, [amount, from, to, currencyInfo])

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const convert = (e) => {
    e.preventDefault()
    if (currencyInfo && currencyInfo[to]) {
      setConverted((amount * currencyInfo[to]).toFixed(2))
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#e0f2fe]">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg border border-gray-100 shadow-2xl rounded-3xl p-8 transition-all hover:shadow-blue-100/70">
        
        <h1 className="text-center text-3xl font-semibold text-gray-800 tracking-tight mb-8">
          Currency Converter
        </h1>

        <form onSubmit={convert} className="space-y-6">
          {/* From Section */}
          <Input
            label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={(value) => setAmount(Number(value))}
          />

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 7l4-4m-4 4l4 4M20 17H4m16 0l-4 4m4-4l-4-4" />
              </svg>
              Swap
            </button>
          </div>

          {/* To Section */}
          <Input
            label="To"
            amount={converted}
            currencyOption={options}
            onCurrencyChange={setTo}
            selectCurrency={to}
            amountDisable
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all"
          >
            Convert
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {amount} {from.toUpperCase()} =
          </p>
          <p className="text-3xl font-bold text-gray-800 mt-1">
            {converted} {to.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
