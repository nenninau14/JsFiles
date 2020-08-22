// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
	var countApples = 0, countOranges = 0, pos;

	if(s >= 1 && s <= Math.pow(10, 5) &&		//check data integrity
	   t >= 1 && t <= Math.pow(10, 5) &&
	   a >= 1 && a <= Math.pow(10, 5) &&
	   b >= 1 && b <= Math.pow(10, 5) &&
	   apples.length >= 1 && apples.length <= Math.pow(10, 5) &&
	   oranges.length >= 1 && oranges.length <= Math.pow(10, 5)) {

			if(a < s && s < t && t < b) { //end check data integrity

				countApples = countFruits(apples, a, s, t, Math.pow(-10, 5), Math.pow(10, 5));
				countOranges = countFruits(oranges, b, s, t, Math.pow(-10, 5), Math.pow(10, 5));

			}
	   } 

	console.log(countApples + "\n" + countOranges);

}

//this function calculate the fruits position and return how many fruits are between (s, t)
function countFruits(fruits, treePos, s, t, min, max) { 
	var pos, countFruit = 0;

	for(var i = 0; i < fruits.length; i++) {
		if(fruits[i] >= min && fruits[i] <= max) {

			pos = treePos + fruits[i];

			if(pos >= s && pos <= t)
				countFruit++;

		}
	}

	return countFruit;
}

function main() {
	apples = [2, 3, -4];
	oranges = [3, -2, -4];
	
    countApplesAndOranges(7, 10, 4, 12, apples, oranges);
}

main();