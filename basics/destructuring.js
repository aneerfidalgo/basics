const student = {
    firstName: 'Wade',
    shirt: 'magenta',
    hair: 'red',
    glasses: true,
    height: 74,


    const { height, firstName, hair} = student,

    console.log(firstName, hair),

    const alumni: ['ashley', 'peter', 'aurelie', 'sebas'],

    const [first, second, third] = alumni,
    console.log(third, first)
}