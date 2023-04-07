/* Lab 8*/
const courseTitle = document.querySelectorAll('li a')
const courseDate = document.querySelectorAll('li p')
const courseArray = []


function createCourseArray(){
    for (let i=0; i<courseListSearch.length; i++){
        let courseObject = {code: courseTitle[i].textContent, date:courseDate[i*2].textContent }
        courseArray.push(courseObject)        
    }
}
createCourseArray()

function findCourse(courseList){
    let user = prompt("Please enter your 4-digit course code: ");
    let isEqual = false;
    do {    
        for (let i = 0; i < courseList.length; i++) {
            if (courseList[i].ID.includes(user)) {
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
    
    }
    