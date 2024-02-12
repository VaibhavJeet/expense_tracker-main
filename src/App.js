import ExpenseItem from './components/Expenses/ExpenseItem';
import './App.css';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'New Computer', amount: 647.34, date: new Date(2024, 2, 16), location: 'New Jersey'  },
    { id: 'e2', title: 'New Air Conditioner', amount: 647.34, date: new Date(2024, 1, 4), location: 'Boston'  },
    { id: 'e3', title: 'Car insurance', amount: 647.34, date: new Date(2024, 3, 23), location: 'Kathmandu'  },
    { id: 'e4', title: 'New desk', amount: 647.34, date: new Date(2024, 5, 7), location: 'Guiena'  },
  ];

  const expenseComponents = [];
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseComponents.push(
      <ExpenseItem  key={expense.id}  title={expense.title}  amount={expense.amount}  date={expense.date}  location={expense.location}/>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {expenseComponents}
      </header>
    </div>
  );
}

export default App;
