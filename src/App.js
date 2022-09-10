import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 500,
      date: new Date(2022, 9, 5),
    },
    {
      id: "e2",
      title: "Mortgage",
      amount: 400,
      date: new Date(2022, 8, 4),
    },
    {
      id: "e3",
      title: "Fishing stuff",
      amount: 299,
      date: new Date(2022, 7, 4),
    },
    {
      id: "e4",
      title: "Learning",
      amount: 299,
      date: new Date(2022, 6, 2),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app js");
    console.log(expense);
  };

  return (
    <div>
      <h1>Lets get started</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
