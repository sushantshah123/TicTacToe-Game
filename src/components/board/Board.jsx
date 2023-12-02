import React, { useState } from 'react'
import "./board.scss"
import Players from '../players/Players'

const Board = () => {
    const [data, setData]= useState(Array(9).fill(''))
    const [current, setCurrent] = useState("X")
    const [winner, setWinner] = useState("")
  
        const checkWin = (board) => {
            const conditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ]

            let flag = false;
            conditions.forEach(element=>{
                if(board[element[0]] !== "" && board[element[1]] !== "" && board[element[2]] !== ""){
                    if(board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]){
                         flag = true;
                    }
                }
            })
            return flag;
        }

        const checkDraw = (board) => {
            let count = 0;
            board.forEach(element => {
                if(element !== "")
                count++;
            })
            if(count>=9){
                return true
            }else{
                return false
            }
        }

        const boxClicked = (index) => {
            if(data[index] === ""){
                const board = data;
                board[index] = current;
                setData(board)
                if (current === "X") {
                    setCurrent("O")
                } else {
                    setCurrent("X")
                }

                if(checkWin(board)){
                  if(current === "X"){
                    <div className='winner'>
                       {setWinner("X is the Winner")}
                    </div>
                  }else{
                    alert("O is the Winner")
                  }
                }

                if(checkDraw(board)){
                   alert("Game Draw")
                }
            }      
    
    }
  return (
    <>
    <main>
        <h1>Tic - Tac - Toe Game</h1>
    <div className='board'>
      <div className='box box1' onClick={()=>boxClicked(0)}>{data[0]}</div>
      <div className='box box2' onClick={()=>boxClicked(1)}>{data[1]}</div>
      <div className='box box3' onClick={()=>boxClicked(2)}>{data[2]}</div>
      <div className='box box4' onClick={()=>boxClicked(3)}>{data[3]}</div>
      <div className='box box5' onClick={()=>boxClicked(4)}>{data[4]}</div>
      <div className='box box6' onClick={()=>boxClicked(5)}>{data[5]}</div>
      <div className='box box7' onClick={()=>boxClicked(6)}>{data[6]}</div>
      <div className='box box8' onClick={()=>boxClicked(7)}>{data[7]}</div>
      <div className='box box9' onClick={()=>boxClicked(8)}>{data[8]}</div>
    </div>
    <Players/>
    <div className='reset'>
        <button>Reset</button>
    </div>
    </main>
    </>
  )
}

export default Board