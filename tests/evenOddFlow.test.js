
describe("EvenOddFlow (PocketFlow)", () =>{
    test("Número par", async ()=>{
        const flow = buildEvenOddFlow(); //Creación del flujo
        const shared = {number: 4};
        
        await flow.run(shared);

        expect(shared.result).toBe("even)");

    });
    
    test("Número impar", async ()=>{
        const flow =buildEvenOddFlow();
        const shared = {number: 9};

        await flow.run (shared);

        expect(shared.result).toBe("odd");
    })
})