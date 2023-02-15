const Intern = require("../lib/Intern")

const {describe,expect,test} = require('@jest/globals')

describe("create Intern", () => {
    const intern = new Intern("Joe",3,"Joe@joe.com","Joe University")
    test("constructs correctly", () => {
        expect(intern.name).toBe("Joe")
        expect(intern.id).toBe(3)
        expect(intern.email).toBe("Joe@joe.com")
        expect(intern.school).toBe("Joe University")
        expect(intern.getName()).toBe("Joe")
        expect(intern.getId()).toBe(3)
        expect(intern.getEmail()).toBe("Joe@joe.com")
        expect(intern.getSchool()).toBe("Joe University")
        expect(intern.getRole()).toBe("Intern")
    })
})