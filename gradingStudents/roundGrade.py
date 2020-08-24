def gradingStudents(grades) :
    roundGrade = 30
    found = False
    newGrades = []

    if len(grades) >= 1 and len(grades) <= 60 : #check if the total grade num is admitted
        for x in grades :
            if x >= 0 and x <= 100 : #check if the grade[i]'s value is admitted
                while found == False :
                    roundGrade += 5

                    if roundGrade >= x and x >= 35:
                        if roundGrade - x < 3 :
                            newGrades.append(roundGrade) #if the round grade is found, pass its value to newGrades 
                        else :
                            newGrades.append(x)
                        found = True

                    if x < 35 :
                        newGrades.append(x) #if not, pass the input value
                        found = True
                
                roundGrade = 30
                found = False
				

    return newGrades



def main() :
    grades = [4, 73, 67, 38, 33]
	
    result = gradingStudents(grades)

    txt = "{}\n"
    print(txt.format(result))


main()