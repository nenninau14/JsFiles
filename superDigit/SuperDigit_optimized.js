function superDigit(n, k) {
    var p = 0, str;
	var cond = n;
	
	//check data requirements
    if(parseInt(cond) >= 1 && parseInt(cond) <= Math.pow(10, 100000) && k >=1 && k <= Math.pow(10, 5)) {
		
		p = digitSum(n);

		p *= k;
		str = p.toString();
		
		p = digitSum(str);

        return p;
    }
    

}

//takes the whole string and sums every single digit after parsed it and return int digit
function digitSum(n) {
	var num, sum = 0, str, sum2, i = 0;

	do {
		num = parseInt(n.charAt(n.length - 1 - i));

		sum += num;

		if(sum >= 10) { //if the sum has 2 digits, they are summed together
			str = sum.toString();
			sum2 = parseInt(str.charAt(0)) + parseInt(str.charAt(1));
			sum = sum2;
		}

		i++;
	}while(n.length - 1 - i >= 0);

	return sum;
}

function main() {
    const result = superDigit("123", 3);

    console.log(result + '\n');
}

main();