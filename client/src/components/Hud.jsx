import React from 'react'
import styles from './styles.css'
import StatusBar from './StatusBar'


function HUD (props){
    
   return (
       
       <div className={`hud ${styles.hud}`}>
           <table className={`tblHd ${styles.tblHd}`}>
               <thead>
                   <tr>
                       <th colSpan="2">Status</th>
                   </tr>
               </thead>
               <tbody>
                   <StatusBar resource={props.fuel} name={"Fuel"} icon="Φ" color="blue"/>
                   <StatusBar resource={props.food} name="Food" icon="∰" color="green"/>
                   <StatusBar resource={props.fitness} name="Fitness" icon="⨸" color="purple"/>
                   <StatusBar resource={props.crewCount} name="Farnians" icon="Ö" color="orange"/>
                   <StatusBar resource={props.distanceLeft} name="Farsecs To Go" icon="⤞" color="grey"/>
               </tbody>
           </table>
         
       </div>

    )
}

export default HUD