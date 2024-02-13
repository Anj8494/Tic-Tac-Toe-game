import './tictac.css'
import cros from './Component/Img/cros.png'
import round from './Component/Img/round.png'

import { useRef, useState } from 'react';

let data=["","","","","","","","",""];

const TicTac =()=>
{
    const [count,setCount] = useState(0)
    const[lock,setLock] = useState(false)
    let titleRef = useRef(null)
    let box1 =useRef(null)
    let box2 =useRef(null)
    let box3 =useRef(null)
    let box4 =useRef(null)
    let box5 =useRef(null)
    let box6 =useRef(null)
    let box7 =useRef(null)
    let box8 =useRef(null)
    let box9 =useRef(null)
    let array =[box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle =(e,num)=>
    {
        if(lock)
        {
            return 0;
        }
        if(count %2 ===0)
        {
             e.target.innerHTML =`<img src='${cros}'>`;
             data[num]="X";
             setCount(count +1)
        }
        else
        {
            e.target.innerHTML =`<img src='${round}'>`;
            data[num]="O";
            setCount(count+1)
        }
        checkWin()
    }
    const checkWin =()=>
    {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data[2])
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
            won(data[5])
        }
        else if(data[6]=== data[7] && data[7]===data[8] && data[8]!=="")
        {
            won(data[8])
        }
        else if(data[0]=== data[3] && data[3]===data[6] && data[6]!== "")
        {
            won(data[6])
        }
        else if(data[1]=== data[4] && data[4]===data[7] && data[7]!== "")
        {
            won(data[7])
        }
        else if(data[2]=== data[5] && data[5]===data[8] && data[8]!== "")
        {
            won(data[8])
        }
        else if(data[0]=== data[4] && data[4]===data[8] && data[8]!== "")
        {
            won(data[8])
        }
        else if(data[0]=== data[1] && data[1]===data[2] && data[2]!== "")
        {
            won(data[2])
        }
        else if(data[2]=== data[4] && data[4]===data[6] && data[6]!== "")
        {
            won(data[6])
        }
    }
    const won =(winner)=>
    {
        setLock(true)
        if(winner === "X")
        {
            titleRef.current.innerHTML=`Congratulations :<img src=${cros}>`;
        }
        else
        {
            titleRef.current.innerHTML=`Congratulation:<img src=${round}>`
        }
    }
    const reset =()=>
    {
        setLock(false)
        data=["","","","","","","","",""];
        titleRef.current.innerHTML =`Tic Tac Toe`;
        array.map((e)=>
        {
            e.current.innerHTML="";
            return null
        });
    }

    return (<div class="container">
        <h1 class="title" ref={titleRef}>Tic Tac Toe</h1>
        <div class="board">
            <div class="row1">
                <div class="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div class="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div class="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div class="row2">
                <div class="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div class="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div class="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div class="row3">
                <div class="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div class="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div class="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button class="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
    )
}
export default TicTac;