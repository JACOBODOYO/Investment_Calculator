import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";


function App() {
  
    const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 10,
      duration: 6,
    });

    const inputIsValid = userInput.duration >= 1
  
    function handleChange(inputIdentifier, newValue) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
        };
      });
    }
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter duration greater than zero</p>}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
