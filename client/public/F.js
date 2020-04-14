
class Farnian{
    constructor(name, age){
        // super();
        this.name = name;
        this.age = age;
    }

    
}

class Game {
    constructor(name = 'Forty Forty Four', difficulty = 0){
        const startingFuel = 10;
        const startingFood = 100;
        const startingFarnians = 10;
        const startingFitness = 5;
        const difficultyMultiplier = [0, 0.25, 0.33, 0.5]

        this.name = name
        this.fuelCount = startingFuel - Math.floor(startingFuel * difficultyMultiplier[difficulty])
        this.foodCount = startingFood - Math.floor(startingFood * difficultyMultiplier[difficulty])
        this.farniansCount = startingFarnians - Math.floor(startingFarnians * difficultyMultiplier[difficulty])
        this.fitnessCount = startingFitness - Math.floor(startingFitness * difficultyMultiplier[difficulty])
        this.farniansCrew = []
        for(let i = 0; i < this.farniansCount; i++){
            this.farniansCrew.push(new Farnian(('F' + i), 20))
        }
        this.foodConsumptionRate = 1
        this.fuelConsumptionRate = 1
        this.foodConsumptionModifiers = [{mod: 1, time: 1}, {mod: 2, time: 2}]
    }
    consumeFood(){
        this.foodCount-= this.getTotalFoodConsumptionRate() 
    }

    tickAllModifiers(){
        this.decayFoodConsumptionModifiers()
    }
    
    decayFoodConsumptionModifiers(){
        for(let mod of this.foodConsumptionModifiers){
            console.log(mod)
            mod.time-= 1
        }
        console.log(this.foodConsumptionModifiers)
        let newMods = this.foodConsumptionModifiers.filter(item =>{
           console.log(item)
            return item.time > 0
        })
        console.log(newMods)
        this.foodConsumptionModifiers = newMods;
    }

    getTotalFoodConsumptionRate(){
        let baseRate = this.getBaseFoodConsumptionRate() * this.farniansCount
        let modRate = this.getModifiedFoodConsumptionRate() * this.farniansCount
        return baseRate + modRate

    }
    getBaseFoodConsumptionRate(){
        let fitnessScale =  {min: -5, max: 5}
        let consumptionScale = {max: 2, min: .66}
        let fitnessArray = [5,4,3,2,1,0,-1,-2,-3,-4,-5]
        let fitnessRange = fitnessScale.max - fitnessScale.min
        let consumptionRange = consumptionScale.max - consumptionScale.min
        let baseConsumptionRate = (consumptionRange/fitnessRange * fitnessArray.indexOf(this.fitnessCount) + consumptionScale.min)
        
        console.log(baseConsumptionRate)
       
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
          console.log(totalMod)
        }
        return totalMod;
    }
    
    addCrew(name , age){
        if(name === null || name === '' || name === undefined){
            name = `F${this.farniansCrew.length}`
        }
        if(age === null || age === undefined){
          age = Math.floor(Math.random() * 85) + 1
        }
        this.farniansCrew.push(new Farnian(name, age))
        this.farniansCount = this.farniansCrew.length
        return `${name} added to crew`
    }

    loseRandomCrew(){
        let index = Math.floor(Math.random() * this.farniansCount)
        let lostCrew = this.farniansCrew[index]
        this.farniansCrew.splice(index, 1)
        return lostCrew;
    }

    loseSpecificCrew(name){
        let newCrew = this.farniansCrew.filter(function (crew){
            console.log(crew.name !== name) 
          return crew.name !== name 
        })
      console.log(newCrew)
      this.farniansCrew = newCrew
      this.fitnessCount = this.farniansCrew.length;
      return `Crew member ${name} is no longer with us`
    }

    

}


var game1 = new Game()
console.log(game1)

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



