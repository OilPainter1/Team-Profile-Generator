const Employee = require('../lib/Employee')

const {describe,expect,test} = require('@jest/globals')

describe('Create Employee', ()=>{
    const employee = new Employee("John",1,"John@john.com")
    test("Constructs correctly", ()=>{
        expect(employee.name).toBe("John")
        expect(employee.id).toBe(1)
        expect(employee.email).toBe("John@john.com")
        expect(employee.getName()).toBe("John")
        expect(employee.getId()).toBe(1)
        expect(employee.getEmail()).toBe("John@john.com")
    }
    )
})