const User = require("./../../app/models/User")

describe('Unit test for User', ()=>{
    test('Create an user Object', ()=>{
        //Aquí escribimos el código que vamos a usar en la app
        const user = new User( 1, "carlogilmar", "Carlo", "Bio")

        //Aqui van los resultados del código
        //valor obtenido del código vs el esperado
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        // expect(user.dateCreated).toBe("dateCreated")
        // expect(user.lastUpdated).toBe("lastUpdated")

    })
    test('Requeromiento 2: fechas en atributos de User',()=>{
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    })
})