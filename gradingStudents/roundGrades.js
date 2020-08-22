/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
	var roundGrade = 30, found = false;
	var newGrades = [];

    if(grades.length >= 1 && grades.length <= 60) {//check if the total grade num is admitted
		for(var i = 0; i < grades.length; i++) {
			if(grades[i] >= 0 && grades[i] <= 100) {//check if the grade[i]'s value is admitted
				do {
					roundGrade += 5;
				
					if(roundGrade >= grades[i]) {
						if(roundGrade - grades[i] < 3) 
							newGrades[i] = roundGrade; //if the round grade is found, pass its value to newGrades 
						
						else 
							newGrades[i] = grades[i];
						
						found = true;
					}
					
					if(grades[i] < 35) {
						newGrades[i] = grades[i];// if not, pass the input value
						found = true;
					}

				}while(found == false);
				
				roundGrade = 30;
				found = false;
			}
		}
	}

	return newGrades;

}

function main() {

	let grades = [4, 73, 67, 38, 33];
	
    const result = gradingStudents(grades);

    console.log(result + '\n');
}

main();