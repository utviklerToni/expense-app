import ExpenseItem from './ExpenseItem';

const Expense = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 'NOK 954',
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 'NOK 942',
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 'NOK 562',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 'NOK 479',
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
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
};

export default Expense;
