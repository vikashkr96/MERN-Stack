import "./Product.css";
import Price from "./Price";

export default function({title,idx}){
    let oldPrice = ["12,000", "3,999", "4,500", "28,999"];
    let newPrice = ["9,000", "3,499", "4,999", "25,999"];
    let description = ["Best in the Market", "Customer's First Choice", "Better Performance", "Loud, Clear and Best"];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>

        </div>
    )
}