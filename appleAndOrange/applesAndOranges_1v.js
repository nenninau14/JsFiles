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

				for(var i = 0; i < apples.length; i++) {
					if(apples[i] >= Math.pow(-10, 5) && apples[i] <= Math.pow(10, 5)) {

						pos = a + apples[i];

						if(pos >= s && pos <= t)
							countApples++;

					}
				}

				for(var i = 0; i < oranges.length; i++) {
					if(oranges[i] >= Math.pow(-10, 5) && oranges[i] <= Math.pow(10, 5)) {

						pos = b + oranges[i];

						if(pos >= s && pos <= t)
							countOranges++;

					}
				}

			}
	   } 

	console.log(countApples + "\n" + countOranges);

}

function main() {
	apples = [2, 3, -4];
	oranges = [3, -2, -4];
	
    countApplesAndOranges(7, 10, 4, 12, apples, oranges);
}

main();