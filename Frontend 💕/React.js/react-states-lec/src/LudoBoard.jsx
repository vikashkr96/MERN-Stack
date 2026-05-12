import { useState } from "react";
import "./LudoBoard.css";

export default function LudoBoard() {

    let [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    });

    let updateBlue = () => {
        setMoves((prevMove) => {
            return { ...prevMove, blue: prevMove.blue + 1 };
        });
    };

    let updateYellow = () => {
        setMoves((prevMove) => {
            return { ...prevMove, yellow: prevMove.yellow + 1 };
        });
    };

    let updateGreen = () => {
        setMoves((prevMove) => {
            return { ...prevMove, green: prevMove.green + 1 };
        });
    };

    let updateRed = () => {
        setMoves((prevMove) => {
            return { ...prevMove, red: prevMove.red + 1 };
        });
    };

    return (
        <>
            <p>Blue moves = {moves.blue}</p>
            <div className="blue">
                <button onClick={updateBlue} className="t1">
                    +1
                </button>
            </div>

            <p>Yellow moves = {moves.yellow}</p>
            <div className="yellow">
                <button onClick={updateYellow} className="t2">
                    +1
                </button>
            </div>

            <p>Green moves = {moves.green}</p>
            <div className="green">
                <button onClick={updateGreen} className="t3">
                    +1
                </button>
            </div>

            <p>Red moves = {moves.red}</p>
            <div className="red">
                <button onClick={updateRed} className="t4">
                    +1
                </button>
            </div>
        </>
    );
}