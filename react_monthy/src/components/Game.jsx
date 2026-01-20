import { useState,useEffect,useRef } from "react";
import GameImage from "./GameImage";

function Game() {

    function randNum(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    const autoPoz=useRef(randNum(0,2));
    const ajtok=useRef([1,1,1]);
    const ajtokMogott=useRef([2,2,2]);
    const[doors,setDoors]=useState(ajtok.current); //A ref típusú változó értéke!!
    const elsoNyitas=useRef(false);
    const utolsoNyitas=useRef(false);
    const gameStatus=useRef("");
    const elsoValasztottAjto=useRef(0);
    const utolsoValasztottAjto=useRef(0);

    const cserevelNyertes=useRef(0);
    const csereNelkulNyertes=useRef(0);
    const cserevelVesztes=useRef(0);
    const csereNelkulVesztes=useRef(0);

    ajtokMogott.current[autoPoz.current]=3;

    const changeDoor=(doorIndex,doorValue)=>{
        setDoors(prevDoors=>{
            const updatedDoors=[...prevDoors];
            updatedDoors[doorIndex]=doorValue;
            return updatedDoors;
        })
    }

    const gameInit=()=>{
        elsoNyitas.current=false;
        utolsoNyitas.current=false;
        gameStatus.current="";
        ajtok.current=[1,1,1];
        ajtokMogott.current=[2,2,2];
        setDoors(ajtok.current);
        autoPoz.current=randNum(0,2);
        ajtokMogott.current[autoPoz.current]=3;
    }

    const buttonSelect=(e)=>{
        const valasztottAjto=e.target.value;

        if(!utolsoNyitas.current && elsoNyitas.current){
            utolsoNyitas.current=true;
            utolsoValasztottAjto.current=valasztottAjto;
            if(valasztottAjto==autoPoz.current){
                gameStatus.current="Nyertél!";
                if(elsoValasztottAjto.current==utolsoValasztottAjto.current){
                    csereNelkulNyertes.current++;
                }else {
                    cserevelNyertes.current++;
                }
            } else {
                gameStatus.current="Vesztettél!"
                if(elsoValasztottAjto.current==utolsoValasztottAjto.current){
                    csereNelkulVesztes.current++;
                }else {
                    cserevelVesztes.current++;
                }
            }
            ajtok.current=ajtokMogott.current;

        }

        if(!elsoNyitas.current){
            elsoNyitas.current=true;
            //Mutatunk egy ajtót, ami mögöt kecske van
            //Kigyűjtjük, mely elemek jelölnek kecskéket
            const kecskek=ajtokMogott.current.map((ajto,i)=>(ajto!==3 ? i:-1).filter(x=>x!==-1));
            let kecskeAjto=kecskek[randNum(0,kecskek.length)];
            elsoValasztottAjto.current=valasztottAjto;

            while(kecskeAjto==valasztottAjto || kecskeAjto==undefined){
                kecskeAjto=kecskek[randNum(0,kecskek.length)];
            }

            changeDoor(kecskeAjto,2);
        }

    }

    

  return (
    <div>
        <div className="grid grid-cols-3 justify-items-center">
            {
                doors.map((door,i)=>(<GameImage key={i} selected={door} />))
            }
            <button id="0" onClick={buttonSelect} className="btn btn-outline" value="0">1</button>
            <button id="1" onClick={buttonSelect} className="btn btn-outline" value="1">2</button>
            <button id="2" onClick={buttonSelect} className="btn btn-outline" value="2">3</button>
        </div>
        <div className="grid grid-cols-1 justify-items-center m-5">
            <button onClick={gameInit} className="btn btn-outline">Új játék</button>
        </div>
    </div>
  )
}

export default Game