import {systemNames, femaleNames, maleNames} from './lib'
import {System} from'./System'
import {Encounter} from './Encounter'
import {Farnian} from './Farnian'

const resources = ['food', 'fuel', 'fitness']







const generateSystemPreview = function (system){
    let firstPreview = {}
    let name = getRandomResource()
    firstPreview.resource = 
    firstPreview.amount = getRandom(10)
    
    let number = getRandom(10)
}

const generateSystems = function(number = 1){
    let systems = []
    for(let i = 0; i < number; i++ ){
       let name = systemNames[getRandom(systemNames.length)]
       let distance = getRandom(5)
        systems.push(new System(name,distance))
    }
    return systems;
}

const getRandomResource = function (){
    let chosen = resources[getRandom(resources.length - 1)]
    return chosen;   
}

const getRandom = function (max = 5){
   let random =  Math.floor(Math.random() * (max + 1))
//    console.log(random)
   return random;
}

class Game {
    constructor(name = 'Forty Forty Four', difficulty = 0){
        const startingFuel = 10;
        const startingFood = 100;
        const startingFarnians = 10;
        const startingFitness = 3;
        const difficultyMultiplier = [0, 0.25, 0.33, 0.5]

        this.name = name
        this.fuelCount = startingFuel - Math.floor(startingFuel * difficultyMultiplier[difficulty])
        this.foodCount = startingFood - Math.floor(startingFood * difficultyMultiplier[difficulty])
        this.farniansCount = startingFarnians - Math.floor(startingFarnians * difficultyMultiplier[difficulty])
        this.fitnessCount = startingFitness - Math.floor(startingFitness * difficultyMultiplier[difficulty])
        this.farniansCrew = []
        for(let i = 0; i < this.farniansCount; i++){
            let farn = this.generateFarnian()
            farn.key = i;
            this.farniansCrew.push(farn)
        }
        this.foodConsumptionRate = 1
        this.fuelConsumptionRate = 1
        this.foodConsumptionModifiers = [{mod: -.25, time: 1}] //people ate before they left
        this.crewKey = 10;
        this.distanceLeft = 20;
    }
    consumeFood(){
        let eaten = this.getTotalFoodConsumptionRate()
        this.foodCount-= Math.floor(eaten)
    }

    tickAllModifiers(){
        this.decayFoodConsumptionModifiers()
    }
    
    decayFoodConsumptionModifiers(){
        for(let mod of this.foodConsumptionModifiers){
            console.log(mod)
            mod.time-= 1
        }
        // console.log(this.foodConsumptionModifiers)
        let newMods = this.foodConsumptionModifiers.filter(item =>{
        //    console.log(item)
            return item.time > 0
        })
        // console.log(newMods)
        this.foodConsumptionModifiers = newMods;
    }

    getTotalFoodConsumptionRate(){
        let baseRate = this.getBaseFoodConsumptionRate()
        // console.log(baseRate)
        let modRate = this.getModifiedFoodConsumptionRate() 
        // console.log(modRate)
        return (baseRate + modRate) * this.farniansCount

    }
    getBaseFoodConsumptionRate(){
        let fitnessScale =  {min: -5, max: 5}
        let consumptionScale = {max: 2, min: .66}
        let fitnessArray = [5,4,3,2,1,0,-1,-2,-3,-4,-5]
        let fitnessRange = fitnessScale.max - fitnessScale.min
        let consumptionRange = consumptionScale.max - consumptionScale.min
        let baseConsumptionRate = (consumptionRange/fitnessRange * fitnessArray.indexOf(this.fitnessCount) + consumptionScale.min)
        
        // console.log(baseConsumptionRate)
       
        return baseConsumptionRate;
    }

    addFoodConsumptionModifier(newMod, time = 1){
        this.foodConsumptionModifiers.push({mod : newMod, time : time})
    }

    getModifiedFoodConsumptionRate(newMod, time = 1){
        let totalMod = 0;
        if(this.foodConsumptionModifiers.length > 0){
           for(let item of this.foodConsumptionModifiers){
             totalMod += item.mod
           }
        //   console.log(totalMod)
        }
        return totalMod;
    }
    
    updateCrewCount(){
        this.farniansCount = this.farniansCrew.length
    }
    generateFarnian(name, age){
        if(name === null || name === '' || name === undefined){
            if(getRandom(2) === 1){
                name = femaleNames[getRandom(femaleNames.length)]
            }else{
                name = maleNames[getRandom(maleNames.length)]
            }
        }
        if(age === null || age === undefined){
          age = getRandom(35) + 20 
        }
        
        return new Farnian(name, age)
    }

    addCrew(name , age){
        return new Promise((resolve, reject) => {
            // todo
        let crewMember = this.generateFarnian(name,age);
        //    console.log(this.crewKey);
         crewMember.key = this.crewKey;
         this.farniansCrew.push(crewMember)
         this.updateCrewCount()
         this.crewKey++;
         resolve ('added');
         reject ('not added');
        }); 
    }

    loseRandomCrew(){
        
        let index = getRandom(this.farniansCrew.length)
        let lostCrew = this.farniansCrew[index]
        this.farniansCrew.splice(index, 1)
        this.updateCrewCount()
        return lostCrew;

    }

    loseSpecificCrew(name, key){
        let newCrew = this.farniansCrew.filter(function (crew){
            console.log(crew.key !== key) 
          return crew.key !== key 
        })
    //   console.log(newCrew)
      this.farniansCrew = newCrew
      this.fitnessCount = this.farniansCrew.length;
      return `Crew member ${name} is no longer with us`
    }

    jump(cost = 1){
        this.fuelCount-= cost;
        this.consumeFood();
        this.tickAllModifiers();
    }

    

}


// var game1 = new Game()
// console.log(game1)

// let testAddSpecific = game1.addCrew('', 5)
// console.log(testAddSpecific, game1)

// let testAddRandom = game1.addCrew()
// console.log(testAddRandom, game1)

// let testLoseSpecific = game1.loseSpecificCrew('F1')
// console.log(testLoseSpecific, game1)

// let testLost = game1.loseRandomCrew()
// console.log(testLost, game1)
// game1.addFoodConsumptionModifier(5, 2)
// console.log(game1)
// console.log(game1.foodConsumptionRate)
// game1.consumeFood()
// console.log(game1)
// game1.decayFoodConsumptionModifiers()
// console.log(game1)

// chooseRandomResource()
// getRandom()


export default Game