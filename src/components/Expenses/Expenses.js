import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../FilterComponents/ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState("2020");

  const saveYearHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === currentYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveYear={saveYearHandler}
          initialYear={currentYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
          
      </Card>
    </div>
  );
};

export default Expenses;
