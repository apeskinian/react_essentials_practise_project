export default function UserInputs({ onChange, investmentData }) {
    // The values are taken from the investmentData prop and the onChange sends the event data and the identifier as an anonymous function
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={investmentData.initialInvestment} required onChange={(event) => onChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={investmentData.annualInvestment} required onChange={(event) => onChange('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={investmentData.expectedReturn} required onChange={(event) => onChange('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={investmentData.duration} required onChange={(event) => onChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}