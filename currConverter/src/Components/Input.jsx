import React from 'react'

function Input({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  amountDisable = false,
  currencyDisable = false,
  selectCurrency = "usd"
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/40 backdrop-blur-md border border-white/30 shadow-md rounded-xl p-4 transition-all hover:shadow-lg ${className}`}
    >
      {/* Left Section - Amount */}
      <div className="w-full sm:w-1/2">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          {label}
        </label>
        <input
          className={`w-full px-3 py-2 rounded-lg border border-gray-300 bg-white/70 text-gray-800 font-semibold outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
            amountDisable ? "cursor-not-allowed opacity-70" : ""
          }`}
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          type="number"
        />
      </div>

      {/* Right Section - Currency */}
      <div className="w-full sm:w-1/2 text-right">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Currency
        </label>
        <select
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
          className={`w-full sm:w-2/3 px-3 py-2 rounded-lg border border-gray-300 bg-white/70 text-gray-800 font-semibold outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer transition-all ${
            currencyDisable ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Input
