
function printHello(){
    console.log("Hello!");
}
function doubleClick(){
    console.log("double Hello!");
}
function printPara(){
    console.log("para was touched, hahaha!");
}

function formSubmit(event){
    event.preventDefault();
    console.log("form submission request!");
}

export default function Button(){
    return (
        <>

{/* eventlisteners */}

        <div>
            <button onClick={printHello}> <b>Click me</b></button>
            <hr />
            <p onMouseOver={printPara}>Event listener demo para</p>
            <hr />
            <button onDoubleClick={doubleClick}>Double click me</button>
        </div>
        <hr />

       { /* event object */}
        <div>
            <form action="#" onSubmit={formSubmit}>
                <input type="text" placeholder="write something"/>
                <button>Submit</button>
            </form>
        </div>
        </>
        
    )
} 