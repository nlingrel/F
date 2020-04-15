import React from 'react'

function JumpButton(props){
    return(
    <form>
      <button id="hyper" type="button" onClick={props.onClick} >Jump</button>
      <div className="range">
        <label htmlFor="range">Jump</label>
        <input id="hyper-range" 
               type="range" 
               min="0" 
               max="2" 
               step=".2" 
               defaultValue="0" 
               
        />
      </div>
    </form>
  )
}

export default JumpButton