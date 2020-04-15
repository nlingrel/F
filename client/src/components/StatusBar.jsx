import React from 'react'
import styles from './styles.css'

function StatusBar(props){

    return (
      <tr className={`${styles.statusBar}`}>
        <td className={`tdAlignRight ${styles.tdAlignRight}`}>
            <span className={`hudIcon ${styles.hudIcon}`} style={ {background : `${props.color}`}} > {props.icon} </span> 
        </td> 
        <td>
            <span className={`${styles.hudStausBarName}`}>{props.name}</span>
            <span className={`${styles.hudStausBarNumber}`}>{props.resource} </span>
        </td>
      </tr>
    )
}

export default StatusBar