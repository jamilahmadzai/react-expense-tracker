import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
