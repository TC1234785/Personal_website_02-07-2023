/* Lab 8*/
const courseListSearch = document.querySelectorAll('.coursesUL li')
const courseTitle = document.querySelectorAll('li a')
const courseDate = document.querySelectorAll('li p')

function createCourseArray(){
    const courseArray = []
    for (let i=0; i<courseListSearch.length; i++){
        let courseObject = {code: courseTitle[i].textContent, date:courseDate[i*2].textContent }
        courseArray.push(courseObject)
             
    }
    return courseArray
}


function findCourse(courseList){
    let validInput = false;
    let userInput = ""
    do {
        userInput = prompt("Please enter your 4-digit course code: ");
        if(isNaN(userInput)== true || userInput.length!= 4){
        console.log('Your input was invalid. Please enter a 4-digit numerical course code.')
        }
        else {
            validInput = true;
        }
    } while (validInput === false)
    
    for(let i=0; i<courseList.length; i++){
        if (courseList[i]['code'].includes(userInput)){
            courseListSearch[i].classList.add('changeBGGreen')
        }
    }

    if (courseList.filter(courseCode => courseCode.code !== userInput)){
        let newCourse = document.createElement('li')
        let newTitle = document.createElement('a')
        newTitle.innerText = userInput
        let newDate = document.createElement('p')
        newDate.innerText = 'Fall 2020'
        let newDesc = document.createElement('p')
        newDesc.innerText = 'N/A'
        newCourse.appendChild(newTitle)
        newCourse.appendChild(newDate)
        newCourse.appendChild(newDesc)
        document.querySelector('ul').appendChild(newCourse)
    }
    
}

findCourse(createCourseArray())