def countApplesAndOranges(s, t, a, b, apples, oranges) :
	
    countApples = 0
    countOranges = 0

    if s >= 1 and s <= pow(10, 5) and t >= 1 and t <= pow(10, 5) and a >= 1 and a <= pow(10, 5) and b >= 1 and b <= pow(10, 5) and len(apples) >= 1 and len(apples) <= pow(10, 5) and len(oranges) >= 1 and len(oranges) <= pow(10, 5) :
        if a < s and s < t and t < b :
            countApples = countFruits(apples, a, s, t, pow(-10, 5), pow(10, 5))
            countOranges = countFruits(oranges, b, s, t, pow(-10, 5), pow(10, 5))
	   

    print(countApples)
    print(countOranges)


#this function calculate the fruits position and return how many fruits are between (s, t)
def countFruits(fruits, treePos, s, t, mini, maxi) : 
	countFruit = 0

	for x in fruits :
		if x >= mini and x <= maxi :
			pos = treePos + x

			if pos >= s and pos <= t :
				countFruit += 1

	return countFruit


def main() :
	
    apples = [2, 3, -4]
    oranges = [3, -2, -4]
	
    countApplesAndOranges(7, 10, 4, 12, apples, oranges)

main()