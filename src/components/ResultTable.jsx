import { calculateInvestmentResults, formatter } from "../util/investment"

export default function ResultTable({ investmentData }) {
    // using the imported function to get the data from the prop as an array of results.
    const tableData = calculateInvestmentResults(investmentData);
    // working out the initialInvestment for the results table
    const initialInvestment =
        tableData[0].valueEndOfYear -
        tableData[0].interest -
        tableData[0].annualInvestment;
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {/* mapping through the results array */}
                {tableData.map(yearData => {
                    // calculating total interest for each year in the mapped data
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment *
                        yearData.year -
                        initialInvestment;
                    // calculating total amount invested for each year in the mapped data
                    const totalAmountInvested =
                        yearData.valueEndOfYear - totalInterest;
                    // Returning a tr with 5 tds for each mapped year with formatted data
                    // for the currency values. This uses the imported formatter function.
                    return <tr key={yearData}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}