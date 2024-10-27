import { useCallback, useState } from "react";

export default function Lottery(){
    let [win,setwin]=useState(false);
    let [num,setnum]=useState(234);
    let styles={color:"black"}
   
    let printsome=()=>{
       setnum(Math.floor(Math.random()*1000));
        let text = num.toString();
        let count=0;
        count+=text.charAt(0)-'0';
        count+=text.charAt(1)-'0';
        count+=text.charAt(2)-'0';
        if(count==15){

            setwin(true);

        }
        else{
setwin(false);
        }
    }
    return (
        <div>
            <h1 style={styles}>Lottery</h1>
            {
                win==true?
<h2 style={{color:"green"}}>
    Congratulations,you Won!
    
</h2>

:
""
            }
           
            <p style={styles}>Lottery ticket={num}</p>
            <button onClick={printsome}>Get New Ticket</button>
           
        </div>
    )
}