import inquirer from "inquirer";
import Manager from "./lib/Manager.js";
import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import fs from "fs"
import path from "path";



const managerQuestions = [
    {
        type: "input",
        name: "ManagerName",
        message: "Please enter the Manager's name:"
    },
    {
        type: "input",
        name: "ManagerId",
        message: "Please enter the Manager's employee ID:"
    },
    {
        type: "input",
        name: "ManagerEmail",
        message: "Please enter the Manager's email:"
    },
    {
        type: "input",
        name: "ManagerOfficeNumber",
        message: "Please enter the Manager's office number:"
    }
]


const engineerQuestions = [
    {
        type: "input",
        name: "EngineerName",
        message: "Please enter the Engineer's name:"
    },
    {
        type: "input",
        name: "EngineerId",
        message: "Please enter the Engineer's employee ID:"
    },
    {
        type: "input",
        name: "EngineerEmail",
        message: "Please enter the Engineer's email:"
    },
    {
        type: "input",
        name: "EngineerGithub",
        message: "Please enter the Engineer's github:"
    }
]

const internQuestions = [
    {
        type: "input",
        name: "InternName",
        message: "Please enter the Intern's name:"
    },
    {
        type: "input",
        name: "InternId",
        message: "Please enter the Intern's employee ID:"
    },
    {
        type: "input",
        name: "InternEmail",
        message: "Please enter the Intern's email:"
    },
    {
        type: "input",
        name: "InternSchool",
        message: "Please enter the Intern's school:"
    }
]

const menu = [
    {
        type: "list",
        name: "menuChoice",
        message: "Please choose what to do next:",
        choices: ["Add an engineer", "Add an Intern", "Finish building my team"]

    }
]


var teamMembers = []

async function addManager() {
    const answers = await inquirer.prompt(managerQuestions)
    const manager = new Manager(answers.ManagerName,answers.ManagerId,answers.ManagerEmail,answers.ManagerOfficeNumber)
    teamMembers.push(manager)
    return

}

await addManager()

var done = false

while(!done){
    const menuAnswer = await inquirer.prompt(menu)
    if (menuAnswer.menuChoice == "Finish building my team"){
        done = true
    }
    else if (menuAnswer.menuChoice == "Add an engineer"){
        let {EngineerName,EngineerId,EngineerEmail,EngineerGithub} = await inquirer.prompt(engineerQuestions)
        teamMembers.push(new Engineer(EngineerName,EngineerId,EngineerEmail,EngineerGithub))
    }
    else if (menuAnswer.menuChoice == "Add an Intern"){
        let {InternName,InternId,InternEmail,InternSchool} = await inquirer.prompt(internQuestions)
        teamMembers.push(new Intern(InternName,InternId,InternEmail,InternSchool))
    }
}

console.log(teamMembers)
function generateHTML(teamMembers){

    let teamHTML = ``

    teamMembers.forEach((member)=>{

        if (member.getRole() == "Manager"){
            teamHTML = teamHTML.concat(`<div>
                <h2>Manager: ${member.name}</h2>
                <h5>ID: ${member.id}</h5>
                <a href="mailto:${member.email}">${member.email}</a>
                <h5>Office Number: ${member.officeNumber}</h5>
                </div>
            `)
            return
        } else if (member.getRole() == "Engineer"){
            teamHTML = teamHTML.concat(`
                <h2>Engineer: ${member.name}</h2>
                <h5>ID: ${member.id}</h5>
                <a href="mailto:${member.email}">${member.email}</a>
                <h5>Github: ${member.github}</h5>
                </div>
            `)
            return
        }else if (member.getRole() == "Intern"){
            teamHTML = teamHTML.concat(`
                <h2>Intern: ${member.name}</h2>
                <h5>ID: ${member.id}</h5>
                <a href="mailto:${member.email}">${member.email}</a>
                <h5>School: ${member.school}</h5>
                </div>
            `)
            return
        }
    })
    
    return `  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${teamHTML}
    </body>
    </html>
    `
}

fs.writeFileSync("./dist/index.html",generateHTML(teamMembers))

