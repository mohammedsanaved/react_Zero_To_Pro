// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromData, setFromData] = useState("EUR");
  const [toData, setToData] = useState("INR");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromData}&to=${toData}`
      );
      const data = await res.json();
      setConverted(data.rates[toData]);
      setIsLoading(false);
      console.log(data);
      console.log(data.rates);
    }
    if (fromData === toData) return setConverted(amount);
    convert();
  }, [fromData, toData, amount]);
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromData}
        onChange={(e) => setFromData(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toData}
        onChange={(e) => setToData(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {toData}
      </p>
    </div>
  );
}
