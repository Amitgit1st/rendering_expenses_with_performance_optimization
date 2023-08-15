import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';


const Expenses = (props) => {

  const [filteredYear, setFilterdYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  return (
    <Card className='expenses'>

      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {props.items.map((ex) =>
      (<ExpenseItem
        key={ex.id}
        title={ex.title}
        amount={ex.amount}
        date={ex.date} 
        />
      ))}

    </Card>
  )
}
export default Expenses;