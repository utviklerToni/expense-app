import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
