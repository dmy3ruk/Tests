const checkLoginAndPassword=require('../src/test2.js')
describe('Check login and pasword',()=>{
    test('it should return invalid login if login is not Rowan', ()=>{
        const login='Feyre'
        expect(checkLoginAndPassword(login)).toBe("invalid login or password")
    });
    test('should return "invalid password" if user enter false password', ()=>{
        const password='acotar';
        expect(checkLoginAndPassword(password)).toBe('invalid login or password')
    });
    test('when password and login is correct it should return secret phrase', ()=>{
        const login = 'Rowan';
        const password = 'tog'
        expect(checkLoginAndPassword(login, password)).toBe('welcome to throne of glass')
    });
    test('when login and password is false should return "invalid login or password"', ()=>{
        const login = 'Casteel';
        const passord='fbaa';
        expect(checkLoginAndPassword(login, passord)).toBe("invalid login or password")
    })
});