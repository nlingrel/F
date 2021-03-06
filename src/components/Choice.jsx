import React from 'react'
import styles from './styles.css'
import HudIcon from './HudIcon'

function Choice (props){
    // console.log(props.choice)
    
    return(
        <td  tabIndex={props.value}  >
            <button style={{"listStyleType" : "none"}} 
                    className={`${styles.tdText} ${styles.choiceCard} `} 
                    onFocus={props.onSelect} type="button" 
                    value={props.value}>
                {props.choice.name}
                {props.scene === 1 ? 
                <li value={props.value} style={props.choice.distance <= 0 ? {"background": props.colors.farsecs, "color" : "white"} : {"background": props.colors.farsecs, "color" : "red"} }>
                    {props.choice.distance}<HudIcon symbol={props.symbols.farsecs} />
                </li> : '' }
                {props.scene === 1 ? 
                <li value={props.value} style={{ background: props.colors[props.choice.encounters[0].mainResource] }}>
                  <HudIcon symbol={props.symbols[props.choice.encounters[0].mainResource]} /></li> : ''}
                {props.scene === 2 ? 
                <li value={props.value} style={{ background: props.colors[props.choice.rewards[0].name]}} >
                  {props.choice.rewards[0].amount}<HudIcon symbol={props.symbols[props.choice.rewards[0].name]} />
                </li>: ''}
                {props.scene === 2 && props.choice.rewards.length === 2 ? 
                <li value={props.value} style={{ background: props.colors[props.choice.rewards[1].name]}} >
                  {props.choice.rewards[1].amount}<HudIcon symbol={props.symbols[props.choice.rewards[1].name]} />
                </li>: ''}
            </button>
        </td>
    )
}

export default Choice