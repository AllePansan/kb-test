import React, { useState, useEffect } from 'react';

export default function Timer(props) {
    //component to display a countdown timer in the "sales" page
    const [time, setTime] = useState(null);
    //console.log('timer')
    if(props.endDate){
        let endDate = new Date(props.endDate.endDate)
        setInterval( () => {
            //create a loop each second
            let date = new Date()
            
            if(endDate > date){
                //first conparison, check for total of days in the difference; the rest is passed tru the next statement
                let diff = Math.abs(endDate - date)
                let days = Math.floor(diff / (1000 * 60 * 60 * 24)); 
                let daysMilis = days * (1000 * 60 * 60 * 24)
                
                if(diff > daysMilis){
                    //check for the ammount of hours in the remaining number
                    
                    let rest = diff - daysMilis;
                    let hours = Math.floor(rest / (1000 * 60 * 60));
                    if(rest > (hours*1000 * 60 * 60)){
                        //check for the ammount of minutes in the remaining number
                        let minrest = rest - (hours*1000 * 60 * 60);
                        let minutes = Math.floor(minrest / (1000 * 60 ));
                        if(minrest > (minutes * 1000 * 60)){
                           //check for the ammount of seconds in the remaining number
                            let secrest = minrest - (minutes * 1000 * 60);
                            let seconds = Math.floor(secrest / 1000);
                            
                            //time = ''+days.toString()+'D '+hours.toString()+':'+minutes.toString()+':'+seconds.toString()+'';
                            //create string and sends it into the parent component, wich will send it into the main component
                            setTime(''+days.toString()+'D '+hours.toString()+':'+minutes.toString()+':'+seconds.toString()+'')
                            props.cbTimer(true)
                        }
                    }
                }
            }else{
                //returns a callback of false in case the timer is a positive( curent date is grater than sale finish date)
                props.cbTimer(false)
            }
            
        },1000)
    }
    
    
    
    return (
        <>{time}</>
    )
}