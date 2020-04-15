import React from 'react'
import styles from './styles.css'
import StatusBar from './StatusBar'
import Starfield from './Starfield';

function HUD (props){
    
   return (
       <div className={`hud ${styles.hud}`}>
         <StatusBar resource = {props.fuel} name={"Fuel"} icon="Φ" color="blue"/>
         <StatusBar resource={props.food} name="Food" icon="∰" color="green"/>
         <StatusBar resource={props.fitness} name="Fitness" icon="⨸" color="purple"/>
         <StatusBar resource={props.crewCount} name="Farnians" icon="Ö" color="orange"/>
         <StatusBar resource={props.distanceLeft} name="Farsecs To Go" icon="⤞" color="grey"/>
       </div>

    )
}

export default HUD