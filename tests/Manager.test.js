const Manager = require("../lib/Manager")

const {describe,expect,test} = require('@jest/globals')

describe("create Manager",() => {
    const manager = new Manager("Kevin",4,"Kevin@kevin.com",10)
    test("constructs correctly", () => {
        expect(manager.name).toBe("Kevin")
        expect(manager.id).toBe(4)
        expect(manager.email).toBe("Kevin@kevin.com")
        expect(manager.officeNumber).toBe(10)
        expect(manager.getName()).toBe("Kevin")
        expect(manager.getId()).toBe(4)
        expect(manager.getEmail()).toBe("Kevin@kevin.com")
        expect(manager.getOfficeNumber()).toBe(10)
        expect(manager.getRole()).toBe("Manager")
    })
})