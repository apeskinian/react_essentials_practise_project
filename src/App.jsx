import { useState } from "react"

import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import ResultTable from "./components/ResultTable"

function App() {
  const [ investmentData, setInvestmentData ] = useState(
      {
          initialInvestment: 10000,
          annualInvestment: 1200,
          expectedReturn: 6,
          duration: 10
      }
  );

  function handleChange(inputIdentifier, newValue) {
    setInvestmentData(prevData => {
        return {
            ...prevData,
            [inputIdentifier]: newValue
        }
    })
  }

  return ( <>
    <Header />
    <UserInputs investmentData={investmentData} onChange={handleChange}/>
    <ResultTable />
  </>
  )
}

export default App
