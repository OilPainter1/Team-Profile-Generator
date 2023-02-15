import Employee from "./Employee.js"

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github
    }
    getName(){
        return super.getName()
    }
    getEmail(){
        return super.getEmail()
    }
    getId() {
        return super.getId()
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

export default Engineer