const {soma, multiplicacao, divisao, subtracao} = require("./calculadoraExercicio1")


it("Deve receber retornar 12", ()=> {
let soma1 = soma(10, 2)
expect(soma1).toBe(12)

})

it("Deve receber retornar 20 (Multiplicação", ()=> {
    let multiplicacao1 = multiplicacao(10, 2)
    expect(multiplicacao1).toBe(20)
    
    })

    
it("Deve receber retornar 598 (Subtração)", ()=> {
    let subtracao1 = subtracao(600, 2)
    expect(subtracao1).toBe(598)
    
    })

it("Deve receber retornar -101 se o segundo valor for 0 (Divisão)", ()=> {
    let divisao1 = divisao(600, 0)
    expect(divisao1).toBe(-101)
    
})

it("Deve receber retornar 120 (Divisão)", ()=> {
    let divisao1 = divisao(600, 5)
    expect(divisao1).toBe(120)
    
})



    