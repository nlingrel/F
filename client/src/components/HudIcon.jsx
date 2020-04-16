import React from 'react'
import styles from './styles.css'


function HudIcon (props){
     return <span style={ {background : `${props.color}`}} className={styles.hudIcon}>{props.symbol}</span>
}

export default HudIcon