import Employee from "./Employee.js"

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school
    }
    getName() {
        return super.getName()
    }
    getId() {
        return super.getId()
    }
    getEmail() {
        return super.getEmail()
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

export default Intern