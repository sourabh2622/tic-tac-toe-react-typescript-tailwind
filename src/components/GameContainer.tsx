import React, { useState } from 'react'
import Block from './Block'

const GameContainer: React.FC = () => {

    const [state, setState] = useState(Array(9).fill(null))
    const [currentTurn, setCurrentTurn] = useState("X");

    const CheckWin = (state: any[]) => {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < win.length; i++) {
            const [a, b, c] = win[i];
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) return true;
        }
        return false;
    }

    const HandleBlockClick = (index: number) => {
        const StateCopy = Array.from(state);
        if (StateCopy[index] !== null) return;

        StateCopy[index] = currentTurn;
        const win = CheckWin(StateCopy);

        if (win) {
            alert("Winner is " + currentTurn);
            setState(Array(9).fill(null));
            setCurrentTurn("X");
            return;
        }

        if (!StateCopy.includes(null)) {
            alert("Draw");
            setState(Array(9).fill(null));
            setCurrentTurn("X");
            return;
        }

        setCurrentTurn(currentTurn === "X" ? "O" : "X");
        setState(StateCopy);
    }

    return (
        <div className="border-1 border-white">
            <div className="flex">
                <Block onClick={() => HandleBlockClick(0)} value={state[0]} />
                <Block onClick={() => HandleBlockClick(1)} value={state[1]} />
                <Block onClick={() => HandleBlockClick(2)} value={state[2]} />
            </div>
            <div className="flex">
                <Block onClick={() => HandleBlockClick(3)} value={state[3]} />
                <Block onClick={() => HandleBlockClick(4)} value={state[4]} />
                <Block onClick={() => HandleBlockClick(5)} value={state[5]} />
            </div>
            <div className="flex">
                <Block onClick={() => HandleBlockClick(6)} value={state[6]} />
                <Block onClick={() => HandleBlockClick(7)} value={state[7]} />
                <Block onClick={() => HandleBlockClick(8)} value={state[8]} />
            </div>
        </div>
    )
}

export default GameContainer
