import React, { useState }from 'react';

import ExpensesList from './ExpensesList';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2019');

  const filterYearHandler = (enteredFilterYear) => {
    setFilterYear(enteredFilterYear);

  };
  
  const filteredExpenses = props.expenses.filter(item => 
    item.date.getFullYear().toString()=== filterYear);


    return (
      <div>
        <Card className = "expenses">
          <ExpensesFilter selectedYear={filterYear} 
          onFilterYear={filterYearHandler}/>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
  );

}

export default Expenses;