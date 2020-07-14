import React from 'react'
import styles from './styles.css'
import HudIcon from './HudIcon'


function StatusBar(props){

    return (
      <tr className={`${styles.statusBar}`}>
        <td className={`tdAlignRight ${styles.tdAlignRight} ${styles.hudIcon}`} style={{background: props.color}} >
            <HudIcon symbol={props.symbol} />
        </td> 
        <td>
            <span className={`${styles.hudStausBarName}`}>{props.name}</span>
            <span className={`${styles.hudStausBarNumber}`}>{props.resource} </span>
        </td>
      </tr>
    )
}

export default StatusBar