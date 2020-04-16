import React, {Component} from 'react'
import HUD from './Hud'
import JumpButton from './JumpButton'
import Game from '../gameLogic/F'
import StarField from './Starfield';
import Choices from './Choices';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          crewCount : 0,
          crew : [],
          fuel : 0,
          food : 0,
          fitness : 0,
          distanceLeft : 0,
          jumping : false,
          play: false,
          choices : [{name : "New Game?"}],
          selection : '',
          scene : 0,
          scenes : {
             
             0 : { prompt: '4044', name: 'New Game?', scene: 0},
             1 : { prompt: 'Choose a Destination', name: 'System', scene : 1},
             2 : { prompt: 'Choose an Expedition', name: 'Expedition', scene : 2}

          },
          resourceSymbols: {
              fuel : "Φ",
              food : "∰",
              fitness : "⨸",
              farnians : "Ö",
              farsecs : "⤞"
          },
          resourceColors : {
            fuel : "blue",
            food : "green",
            fitness : "purple",
            farnians : "orange",
            farsecs : "grey"
          }
        }
        this.game = new Game()
       
        this.selectChoice = this.selectChoice.bind(this)
        this.deSelect = this.deSelect.bind(this)
        this.jump = this.jump.bind(this)
        this.endJump = this.endJump.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    
    componentDidMount(){
    
      
      console.log(this.game)
      
      
    }
    
    deSelect(event){
        console.log(event)
        event.preventDefault()
        this.setState({
            selection : ''
        })
    }

    selectChoice(event){
        event.preventDefault()
        console.log('selcetion button value', event.target.value)
        this.setState({
            selection : parseInt(event.target.value)
        })
    }

    updateState(jump = false, scene){
        this.setState({
            crew : this.game.farniansCrew,
            crewCount : this.game.farniansCount,
            fuel : this.game.fuelCount,
            food : this.game.foodCount,
            fitness : this.game.fitnessCount,
            distanceLeft : this.game.distanceLeft,
            choices : this.game.choices,
            jumping : jump,
            scene : scene
        }) 
    }
    
    handleClick(event){
        
        let scn = this.state.scene
        switch(scn){
            case 0: this.game.newSystems(); this.jump(scn);
            break;
            case 1: this.jump(scn); this.game.jump();
            break;
            case 2: this.expedition(scn);
            break;
            default: this.noGo();
        }
        
    }

    jump(scn){
    //   event.preventDefault()
      stars.forEach((star,i) => {
        let delay = `${Math.random() * 900}ms`;
        star.style.animationDelay = delay;
        star.style.animationName = 'hyper';
      });
      
      this.updateState(true, scn)
      this.endJump(scn + 1)
    }
    
    noGo(){
      console.log('You cannot jump')
    }

    endJump(scene){
        setTimeout( ()=>{
            stars.forEach((star,i) => {
              star.style.animationName = null;
            });
        
            this.updateState(false, scene)
          },1750)
        
      
    }
    
    expedition(scene){
        stars.forEach((star,i) => {
            let delay = `${Math.random() * 900}ms`;
            star.style.animationDelay = delay;
            star.style.animationName = 'hyper';
          });
          
          this.updateState(true, scene)
          this.endJump(scene)
    }

    render(){
        let scn = this.state.scenes[this.state.scene]
        return <div className="App">
                    <HUD fuel={this.state.fuel} food={this.state.food} 
                         fitness={this.state.fitness} crewCount={this.state.crewCount} 
                         distanceLeft={this.state.distanceLeft} symbols={this.state.resourceSymbols}
                         colors={this.state.resourceColors} />
                    <Choices choices={this.state.choices} prompt={scn.prompt} 
                             onSelect={this.selectChoice} deSelect={this.deSelect}
                             jumping={this.state.jumping}
                             scene={this.state.scene} symbols={this.state.resourceSymbols} 
                             colors={this.state.resourceColors} />
                  <div className = "scene">
                    <StarField jumping={this.state.jumping}/>
                    <JumpButton onClick={this.handleClick} scene={this.state.scene} visible={this.state.jumping} />

                  </div>
               </div>
        
    }
}

export default App