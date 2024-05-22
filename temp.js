// Skill updation section
var skillDict = [
    {
        "name": "Python",
        "alt": "Python",
        "src": "assets/images/skills/python.svg"
    },
    {
        "name": "Java",
        "alt": "Java",
        "src": "assets/images/skills/java.svg"
    },
    {
        "name": "Git",
        "alt": "Git",
        "src": "assets/images/skills/git.svg"
    },
]

function createNewSkillDiv(skillDetails) {
    var newImg = document.createElement("img")
    var attributeNames = ["src", "alt"]
    attributeNames.forEach(function (name) {
        newImg.setAttribute(name, skillDetails[name])
    })

    var newSkillImage = document.createElement("div")
    newSkillImage.setAttribute("class", "skill-image")
    newSkillImage.innerHTML = newImg.outerHTML
    
    var newSkillName = document.createElement("div")
    newSkillName.setAttribute("class", "skill-name")
    newSkillName.innerHTML = skillDetails["name"]

    var newSkill = document.createElement("div")
    newSkill.setAttribute("class", "skill")
    newSkill.innerHTML = newSkillImage.outerHTML + newSkillName.outerHTML

    return newSkill
}

var skills = document.querySelector(".skills-container")

skillDict.forEach(function (skillDetails){
    var newSkill = createNewSkillDiv(skillDetails);

    skills.append(newSkill)
})

function createNewImg(oldImg, skillDetails) {
    var newImg = document.createElement("img")
    var attributeNames = oldImg.getAttributeNames()
    attributeNames.forEach(function (name) {
        newImg.setAttribute(name, skillDetails[name])
    })
    newImg.setAttribute("class", oldImg.getAttribute("class"))
    return newImg
}

function createNewSkillNameDiv(oldDiv, skillName) {
    var newDiv = document.createElement("div")
    var attributeNames = oldDiv.getAttributeNames()
    attributeNames.forEach(function (name) {
        newDiv.setAttribute(name, oldDiv.getAttribute(name))
    })
    newDiv.append(skillName)
    return newDiv
}

function createNewDiv(oldDiv) {
    var newDiv = document.createElement("div")
    var attributeNames = oldDiv.getAttributeNames()
    attributeNames.forEach(function (name) {
        newDiv.setAttribute(name, oldDiv.getAttribute(name))
    })
    return newDiv
}


var skills = document.querySelector(".skills-container")
var skill = document.querySelector(".skill")
var skillImage = document.querySelector(".skill-image")

var skillImg = document.querySelector(".skill-img")
var skillName = document.querySelector(".skill-name")

skillDict.forEach(function (skillDetails){
    console.log("agsgas");
    
    var newSkillImg = createNewImg(skillImg, skillDetails);
    var newSkillName = createNewSkillNameDiv(skillName, skillDetails["name"]);
    console.log(newSkillImg);
    console.log(newSkillName);

})







var newSkillImage = document.createElement("div")
newSkillImage.innerHTML = skillImage.innerHTML
var attributeNames = skillImage.getAttributeNames()
attributeNames.forEach(function (name) {
    newSkillImage.setAttribute(name, skillImage.getAttribute(name))
})

var newSkillName = document.createElement("div")
newSkillName.innerHTML = skillName.innerHTML
attributeNames = skillName.getAttributeNames()
attributeNames.forEach(function (name) {
    newSkillName.setAttribute(name, skillName.getAttribute(name))
})

var newSkill = document.createElement("div")
newSkill.setAttribute("class", skill.getAttribute("class"))
newSkill.innerHTML = newSkillImage.outerHTML + newSkillName.outerHTML
attributeNames = skill.getAttributeNames()
attributeNames.forEach(function (name) {
    newSkill.setAttribute(name, skill.getAttribute(name))
})

skills.append(newSkill)

// for(let i=0; i<5; i++){
//     var newSkillImage = document.createElement("div")
//     newSkillImage.innerHTML = skillImage.innerHTML

//     var newSkillName = document.createElement("div")
//     skillName.innerHTML = skillName.innerHTML
    
//     var newSkill = document.createElement("div")
//     newSkill.setAttribute("class", skill.getAttribute("class"))
//     newSkill.innerHTML = skill.innerHTML
//     skills.append(newSkill)
// }

