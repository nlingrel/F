import React from 'react'
import styles from './styles.css'

function StatusBar(props){

    return (
      <div className={`${styles.statusBar}`}>
        {props.name} {props.resource} <span className={`hudIcon ${styles.hudIcon}`} style={ {color : `${props.color}`}} > {props.icon} </span>
      </div>
    )
}

export default StatusBar