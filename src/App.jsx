import { useState } from "react"

import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import ResultTable from "./components/ResultTable"

// The data used to calculate the results table, state is lifted to app.jsx
// so that the data can be passed to the results component and the input component via props.
function App() {
  const [ investmentData, setInvestmentData ] = useState(
      {
          initialInvestment: 10000,
          annualInvestment: 1200,
          expectedReturn: 6,
          duration: 10
      }
  );

  // Check for valid duration to conditionally render the results table.
  const inputIsValid = investmentData.duration >= 1;

  // This function updates the investmentData when the input fields are changed.
  // This is done via the onChange prop given to the UserInputs component
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
    {/* UserInputs component has investmentData prop and onChange prop to handle changes */}
    <UserInputs investmentData={investmentData} onChange={handleChange}/>
    {/* Showing a message if the duration is set to less than 1 */}
    {!inputIsValid && <p className="center">Please enter valid duration!</p>}
    {/* Showing the ResultTable component when the duration is valid */}
    {inputIsValid && <ResultTable investmentData={investmentData}/>}
  </>
  )
}

export default App
