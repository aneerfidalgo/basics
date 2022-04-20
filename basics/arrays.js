// let cars = ['ferrari', 'lamborguini', 'audi', 'aston martin', 'ford']

//     console.log(cars[1]) // lamborghini

//     console.log(cars.length) // 5

    let ourCars = [{
        brand: `audi`,
        year: 2018,
        model: 'A3',
        miles: 25580,
        color: `grey`
    },
     {
        brand: `jeep`,
        year: 2015,
        model: `Grand Cherokee`,
        color: `black`,
        miles:55_000,
     }]

     
    console.log(ourCars[1].miles)

    const {miles , year} = ourCars[0]

    const age = 2022 - year

    const mileage = miles / age

    console.log(mileage + ('miles per year'))
         
    if (mileage < 10000) {
        console.log("This is a LOW mileage car") 
    } else {
        console.log("This is NOT a low mileage car")
    }

(mileage < 10000)
  ? console.log('this is a LOW mileage car.')
  : console.log('this is NOT a low mileage car.')

  const isItt = (mileage<10000) ? 'is a' : 'is NOT a'
  console.log(`This ${isItt} LOW mileage car.`)

  const message = (mileage < 10000) 
    ? "This is a LOW mileage car."
    : "This is NOT a low mileage car."
console.log(message)

