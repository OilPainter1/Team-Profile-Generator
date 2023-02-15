import Employee from "./Employee.js"

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber
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
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}

export default Manager