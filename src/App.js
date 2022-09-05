import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>
      <h1>Lets get started</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
