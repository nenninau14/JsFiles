/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
	var num = 0, count = 0, check = 0, err = 0;
	
	if(a.length >= 1 && a.length <= 10 &&
	   b.length >= 1 && b.length <= 10) {

		do {

			num++;

			for(var i = 0; i < a.length; i++) {
				if(a[i] >= 1 && a[i] <= 100) {
					if(num >= a[i] && num%a[i] == 0)
						check++;
				}
				else
					err++;
			}

			for(var j = 0; j < b.length; j++) {
				if(b[j] >= 1 && b[j] <= 100) {
					if(num <= b[j] && b[j]%num == 0)
						check++;
				}
				else
					err++;
			}

			if(check == (a.length + b.length) - err)
				count++;

			check = 0;
			err = 0;

		}while(num <= 100);

		return count;

	}

}

function main() {
    
	const arr = [2, 6];
	const brr = [24, 36];
    const total = getTotalX(arr, brr);

    console.log(total + '\n');

}

main();