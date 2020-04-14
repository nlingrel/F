import React, {Component} from 'react'
import HUD from './Hud'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <div className="App">
                  <HUD />
               </div>
        
    }
}

export default App