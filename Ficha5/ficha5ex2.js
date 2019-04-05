class Car {
    constructor(brand, plate, color, deposit, fuelType){
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposit = deposit
        this.fuelType = fuelType
    }

    //metodo para atualizar a cor de um carro

    updateCarColor(newColor){
        this.color = newColor
    }

    //Método para abastecer o depósito.

    updateCarDeposit(liters){
        this.deposit += liters
    }

    /* Método que recebe o nº de quilómetros percorridos e que 
    altere o nº de litros tendo em conta a seguinte consumo 
    base: 5l/100km */

    drive(nkms){
        const liters = nkms * 5 / 100
        this.deposit = this.deposit - liters
    }
}

const car1 = new Car('Ford', '91-GH-15', 'verde', 40, 'Gasóleo')
const car2 = new Car('Opel', '23-AB-23', 'branco', 50, 'Gasolina')
const car3 = new Car('Ford', '12-CX-45', 'preto', 22, 'Gasóleo')

//Adicione os objetos a um array cars

const cars = []
cars.push(car1, car2, car3)

/* uma função que devolva o nº de carros de uma determinada 
marca passada como parâmetro */

function getCarNUmberByBrand(brand){
    let cont = 0
    for (const car of cars) {
        if (car.brand === brand) {
            cont++
        }
    }
    return cont
}

console.log(getCarNUmberByBrand('Ford'))

/* uma função que dado um tipo de combustível devolva a 
soma dos litros dos carros que têm esse tipo de combustível */

function getCarByFuelType(fuelType){
    let sum = 0
    for (const car of cars) {
        if (car.fuelType === fuelType) {
            sum += car.deposit
        }
    }
    return sum
}

console.log(getCarByFuelType('Gasóleo'))
