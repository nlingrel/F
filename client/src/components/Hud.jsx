import React from 'react'
import styles from './styles.css'
import StatusBar from './StatusBar'


function HUD (props){
    
   return (
       
       <div className={`hud ${styles.hud}`}>
           <table className={`tblHd ${styles.tblHd}`}>
               <thead>
                   <tr>
                       <th colSpan="2">FitRep</th>
                   </tr>
               </thead>
               <tbody>
                   <StatusBar resource={props.fuel} name={"Fuel"} symbol={props.symbols.fuel} color={props.colors.fuel}/>
                   <StatusBar resource={props.food} name="Food" symbol={props.symbols.food} color={props.colors.food}/>
                   <StatusBar resource={props.fitness} name="Fitness" symbol={props.symbols.fitness} color={props.colors.fitness}/>
                   <StatusBar resource={props.crewCount} name="Farnians" symbol={props.symbols.farnians} color={props.colors.farnians}/>
                   <StatusBar resource={props.distanceLeft} name="Farsecs" symbol={props.symbols.farsecs} color={props.colors.farsecs}/>
               </tbody>
           </table>
         
       </div>

    )
}

export default HUD