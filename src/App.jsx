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

  const inputIsValid = investmentData.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInvestmentData(prevData => {
        return {
            ...prevData,
            // In the next line the + symbol converts the newValue to a number
            // instead of a string so that it does not get concatenated
            [inputIdentifier]: +newValue
        }
    })
  }

  return ( <>
    <Header />
    <UserInputs investmentData={investmentData} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter valid duration!</p>}
    {inputIsValid && <ResultTable investmentData={investmentData}/>}
  </>
  )
}

export default App
