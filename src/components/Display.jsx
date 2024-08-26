import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';

function Display() {
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const [notf, setNotf] = useState(false);
    const [result, setResult] = useState("");

    const startClick = () => {
        if (playerOne !== "") {
            const choices = ["rock", "paper", "scissors"];
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            setPlayerTwo(randomChoice);
        } else {
            setNotf(true);
        }
    };

    const resetClick = () => {
        setPlayerOne("");
        setPlayerTwo("");
        setResult("");
    };

    const handleClick = (e) => {
        setPlayerOne(e);
        setNotf(false);
    };

    useEffect(() => {
        if (playerOne && playerTwo) {
            if (playerOne === playerTwo) {
                setResult("x");
            } else if (
                (playerOne === "rock" && playerTwo === "scissors") ||
                (playerOne === "paper" && playerTwo === "rock") ||
                (playerOne === "scissors" && playerTwo === "paper")
            ) {
                setResult("win");
            } else {
                setResult("los");
            }
        }
    }, [playerTwo]);

    return (
        <div className="parent">
            <div className="div1">
                {notf ? <p>Zəhmət olmasa seçim edin:<FaArrowUp /></p> : null}
                <div className={`rnd-rock ${playerOne === "rock" ? "active" : ""}`} ><i><FaRegHandRock /></i></div>
                <div className={`rnd-paper ${playerOne === "paper" ? "active" : ""}`} ><i><FaRegHandPaper /></i></div>
                <div className={`rnd-scis ${playerOne === "scissors" ? "active" : ""}`}><i><FaRegHandScissors /></i></div>
            </div>
            <div className="div2">
                <div className={`rnd-rock ${playerTwo === "rock" ? "active" : ""}`} ><i><FaRegHandRock /></i></div>
                <div className={`rnd-paper ${playerTwo === "paper" ? "active" : ""}`} ><i><FaRegHandPaper /></i></div>
                <div className={`rnd-scis ${playerTwo === "scissors" ? "active" : ""}`}><i><FaRegHandScissors /></i></div>
            </div>
            <div className="div3">
                <div className={`choosen-rock ${playerOne === "rock" ? "active" : ""}`} onClick={() => handleClick("rock")} ><i><FaRegHandRock /></i></div>
                <div className={`choosen-paper ${playerOne === "paper" ? "active" : ""}`} onClick={() => handleClick("paper")}><i><FaRegHandPaper /></i></div>
                <div className={`choosen-scis ${playerOne === "scissors" ? "active" : ""}`} onClick={() => handleClick("scissors")}><i><FaRegHandScissors /></i></div>
            </div>
            <div className="div4">
                <div className={result}>
                    {playerOne &&  playerOne==="rock"? <p>Daş seçdin</p>:null}
                    {playerOne &&  playerOne==="paper"? <p>Kağız seçdin</p>:null}
                    {playerOne &&  playerOne==="scissors"? <p>Qayçı seçdin</p>:null}

                    {result && result==="x"? "Heç-heçə":null}
                    {result && result==="win"? "Qazandın!!":null}
                    {result && result==="los"? "Uduzdun!!":null}

                </div>
            </div>
            <div className="div5">
                {
                    playerTwo === "" ? <Button onClick={startClick} variant='contained'>Başla</Button> :
                        <Button onClick={resetClick} variant='contained'>Yenidən</Button>
                }
            </div>
        </div>
    );
}

export default Display;
