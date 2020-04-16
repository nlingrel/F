import React from 'react'
import Choice from './Choice'
import styles from './styles.css'

function Choices(props){
    let scn = props.scene
    let choices = []
    console.log('shape of choices coming in to Choices',props.choices)
    // if(scn === 0){
    //     choices = props.choices.map((choice, key) => {
    //         return<Choice name={choice.name} key={key} value={key} onClick={props.onClick} scene={scn} />
    //     })
    // }else if(scn === 1){
    //      choices = props.choices.map((choice, key) =>{
    //         return<Choice name={choice.name} key={key} value={key} onClick={props.onClick} scene={scn} distance={choice.distance}/>
    //      })
        
    // }
    // let distances = props.choices.map((choice, key) =>{
    //    let distText = scn === 1? choice.distance < 0? `${Math.abs(choice.distance)} fewer Farsecs` : `${Math.abs(choice.distance)} Farsecs farther` : ''
    //     return <td> {distText}</td>
    // })
    choices = props.choices.map((choice, key) => {
        console.log(choice)
        return<Choice key={key} value={key} onClick={props.onClick} symbols={props.symbols} colors={props.colors} choice={choice}/>
    })
    
    return props.jumping ? (<div></div>) : (
        <div>
            <table className={`${styles.choicesContainer}`}>
                <thead>
                    <tr>
                        <th colSpan={`${props.choices.length}`} className={`${styles.tblHd}`} >
                          {props.prompt}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       {choices}
                    </tr>
                </tbody>
            </table>
        </div>
    ) 
}

export default Choices