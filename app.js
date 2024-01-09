const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){

    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar
}

const fromEuroToYen = function(valueInEuro){

    let valueInYen = valueInEuro * 156.5;

    return valueInYen
}

const fromEuroToPound = function(valueInEuro){

    let valueInPound = valueInEuro * 0.87;

    return valueInPound
}

const fromDollarToYen = function(valueInDollar){

    let valueInYen = valueInDollar * 156.5;
    return valueInYen
}

const fromYenToPound = function(valueInYen){

    let valueInPound = valueInYen * 0.87;
    return valueInPound
}



module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound };