import Engineer from "../lib/Engineer"
import {describe,test,expect} from "@jest/globals"
describe("Create Engineer", () => {
    const engineer = new Engineer("Jerry",2,"Jerry@jerry.com","JerrysGithub")
    test("Constructs correctly", ()=>{
        expect(engineer.name).toBe("Jerry")
        expect(engineer.id).toBe(2)
        expect(engineer.email).toBe("Jerry@jerry.com")
        console.log(engineer.github)
        expect(engineer.github).toBe("JerrysGithub")
        expect(engineer.getName()).toBe("Jerry")
        expect(engineer.getId()).toBe(2)
        expect(engineer.getEmail()).toBe("Jerry@jerry.com")
        expect(engineer.getGithub()).toBe("JerrysGithub")
        expect(engineer.getRole()).toBe("Engineer")
    })
})