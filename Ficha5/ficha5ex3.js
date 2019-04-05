class Dice {
    constructor(){
        this.nFaces = 6
    }

    //propriedade faceValue
    get faceValue(){
        return this._faceValue
    }

    set faceValue(newValue){
        return this._faceValue = newValue
    }

    get quantityFaces(){
        return this.nFaces
    }

    roll(){
        const temp = Math.floor((Math.random() * 6) + 1)
        this.faceValue = temp
    }
}

const frequencyTable = [0,0,0,0,0,0]

for (let index = 0; index < 100; index++) {
    const myDice = new Dice()
    myDice.roll()
    myDice.faceValue
    frequencyTable[myDice.faceValue-1] += 1
}

const table = document.querySelector("table")

table.innerHTML += `
    <tr>
        <td>Frequência</td>
        <td>${frequencyTable[0]}</td>
        <td>${frequencyTable[1]}</td>
        <td>${frequencyTable[2]}</td>
        <td>${frequencyTable[3]}</td>
        <td>${frequencyTable[4]}</td>
        <td>${frequencyTable[5]}</td>
    </tr>
`