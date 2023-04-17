function soma (Numero1, Numero2)
{
    return (Numero1 + Numero2)

}

function subtracao (Numero1, Numero2)
{
    return (Numero1 - Numero2)

}

function multiplicacao (Numero1, Numero2)
{
    return (Numero1 * Numero2)

}

function divisao (Numero1, Numero2)
{
    if(Numero2 == 0){

        return (-101)
    }

    return (Numero1 / Numero2)

}


module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}
