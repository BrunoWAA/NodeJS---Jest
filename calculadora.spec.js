const { soma } = require("./calculadora")


it("Deve receber 10 e 20 e retornar 30", ()=> {

//GIVEN

let teste = soma(1, 2)

//WHEN

//THEN

expect(teste).toBe(3)


})