import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    console.log('hi');

    const amountHandler = () => {
        setAmount('100$');
    }
    //let title = props.title;
    const clickHandler = () => {
        //title = 'Updated';
        setTitle('Updated');
        console.log(title);  
    };

    return (
       <>
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                <div>{props.location}</div>
                <button onClick={clickHandler}>Update Title</button>
                <button onClick={amountHandler}>Update Amount</button>
            </div>
        </div>
       </> 
    )
}

export default ExpenseItem;