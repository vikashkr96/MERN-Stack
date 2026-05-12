import { useState } from 'react';
import './Counter.css';

export default function Counter(){
    let [count, setCount] = useState(0);
    let incCount = () =>{
        setCount(count+1);
    }
 
    return(
    <div>
        <button className="button" onClick={incCount}>Count ={count}  </button>
    </div>
    )
}