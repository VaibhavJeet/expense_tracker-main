import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log('deleted');
    };

    return (
       <>
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <div>{props.location}</div>
                <button onClick={clickHandler}>Delete Title</button>
            </div>
        </div>
       </> 
    )
}

export default ExpenseItem;