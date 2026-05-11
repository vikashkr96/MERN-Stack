import Product from "./Product";
import Price from "./Price";
import './ProductTab.css'

export default function ProductTab(){
    return(
        <div className="ProductTab">
            <Product title="HP lapetop" idx={0}/>
            <Product title='Apple Pen(2nd Gen)'idx={1}/>
            <Product title='Sony Camera'idx={2}/> 
            <Product title='Zebronics Speaker' idx={3}/>
        </div>
    )
}