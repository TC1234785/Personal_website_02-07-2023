let Class1 = {
    ID: "ACIT 1630",
    Name: "Database Systems"
};

let Class2 = {
    ID: "ACIT 1620",
    Name: "Fundamental Web Technologies"
};

let Class3 = {
    ID: "ACIT 1515",
    Name: "Scripting for IT"
};

let courseList = [Class1, Class2, Class3];

let user = prompt("Please enter your 4-digit course code: ");
let isEqual = false;
do {    
    for (let i = 0; i < courseList.length; i++) {
        split_stack = courseList[i]['ID'].split(' ')[1]
        if (split_stack === user) {
            isEqual = true
            console.log(`Yes I am taking the course: ${courseList[i]["ID"]} - ${courseList[i]["Name"]}`)
        ;}

        else{
            
        }
    }
} while (isNaN(user)== true && user.length!= 4)

if (isEqual === false) {
    courseList.push({
        ID: user,
        Name: null
    });
    console.log("Success")
}