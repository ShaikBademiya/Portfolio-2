// document.addEventListener(
//     'DOMContentLoaded', function() {
//         const navLinks = document.querySelectorAll('.nav-links');

//         navLinks.forEach((link, index) => {
//             setTimeout(() => {
//                 link.classList.add('loaded'), index * 500;
//             });
//         });
//     }
// );

document.getElementById('copyright-year').appendChild(document.createTextNode(new Date().getFullYear()))


// Skill updation section
var skillDict = [
    {
        "name": "Python",
        "src": "assets/images/skills/python.svg"
    },
    {
        "name": "Java",
        "src": "assets/images/skills/java.svg"
    },
    {
        "name": "Javascript",
        "src": "assets/images/skills/js.svg"
    },
    {
        "name": "HTML",
        "src": "assets/images/skills/html.svg"
    },
    {
        "name": "CSS",
        "src": "assets/images/skills/css.svg"
    },
    {
        "name": "MongoDB",
        "src": "assets/images/skills/mongodb.svg"
    },
    {
        "name": "MySQL",
        "src": "assets/images/skills/mysql.svg"
    },
    {
        "name": "Git",
        "src": "assets/images/skills/git.svg"
    },
    {
        "name": "GitHub",
        "src": "assets/images/skills/github.svg"
    },
    {
        "name": "Jira",
        "src": "assets/images/skills/jira.svg"
    },
    {
        "name": "VS Code",
        "src": "assets/images/skills/vscode.svg"
    },
    {
        "name": "C",
        "src": "assets/images/skills/c.svg"
    },
    {
        "name": "Slack",
        "src": "assets/images/skills/slack.svg"
    },
]

function createNewSkillDiv(skillDetails) {
    var newImg = document.createElement("img")
    var attributeNames = ["src", "alt"]
    attributeNames.forEach(function (name) {
        newImg.setAttribute(name, skillDetails[name])
    })
    newImg.setAttribute("src", skillDetails["src"])
    newImg.setAttribute("alt", skillDetails["name"])
    // Output format for newImg
    // <img class="skill-img" src="assets/images/skills/python.svg" alt="Python">

    var newSkillImage = document.createElement("div")
    newSkillImage.setAttribute("class", "skill-image")
    newSkillImage.innerHTML = newImg.outerHTML
    // Output format for newSkillImage
    // <div class="skill-image">
    //     <img class="skill-img" src="assets/images/skills/python.svg" alt="Python">
    // </div>
    
    var newSkillName = document.createElement("div")
    newSkillName.setAttribute("class", "skill-name")
    newSkillName.innerHTML = skillDetails["name"]
    // Output format for newImg
    // <div class="skill-name">
    //     Python
    // </div>

    var newSkill = document.createElement("div")
    newSkill.setAttribute("class", "skill")
    newSkill.innerHTML = newSkillImage.outerHTML + newSkillName.outerHTML
    // Output format for newImg
    // <div class="skill">
    //     <div class="skill-image">
    //         <img class="skill-img" src="assets/images/skills/python.svg" alt="Python">
    //     </div>
    //     <div class="skill-name">
    //         Python
    //     </div>
    // </div>

    return newSkill
}

var skills = document.querySelector(".skills-container")

skillDict.forEach(function (skillDetails){
    var newSkill = createNewSkillDiv(skillDetails);

    skills.append(newSkill)
})


// Temp code start
// var skills = document.querySelector(".skills-container")
// var skill = document.querySelector(".skill")
// for(let i=0; i<5; i++){
//     var newSkill = document.createElement("div")
//     newSkill.setAttribute("class", skill.getAttribute("class"))
//     newSkill.innerHTML = skill.innerHTML
//     skills.append(newSkill)
// }
