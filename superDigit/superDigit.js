//Too slow solution
function superDigit(n, k) {
    var p = "", num, sum = "";
    var cond = parseInt(n);
    
    if(cond >= 1 && cond <= Math.pow(10, 100000) && k >=1 && k <= Math.pow(10, 5)) {
        for(var i = 0; i < k; i++)
            p += n;

        do {
            for(var i = 0; i < p.length; i++) {
                //num = parseInt(p.charAt(i));
                num = p.charAt(i);

                /*if(Number.isInteger(num)) {
                    sum += num;
                }*/

                sum = sums(sum, num);
            }

            p = sum + "";
            sum = "";
        }while(parseInt(p) > 10);

        return p;
    }
    

}

function sums(arg1, arg2) {
	var sum = "";
	var r = 0;
	var a1, a2, i;

	// Pick the shortest string as first parameter and the longest as second parameter in my algorithm
	if (arg1.length < arg2.length) {
		a1 = arg1;
		a2 = arg2;
	}
	else {
		a1 = arg2;
		a2 = arg1;
	}
	a1 = a1.split("").reverse();
	a2 = a2.split("").reverse();

	// Sum a1 and a2 digits
	for (i = 0; i < a2.length; i++) {
		var t = ((i < a1.length) ? parseInt(a1[i]) : 0) + parseInt(a2[i]) + r;
		
		sum += t % 10;

		r = t < 10 ? 0 : Math.floor(t / 10);
	}
	// Append the last remain
	if (r > 0)
		sum += r;

	sum = sum.split("").reverse();
	
	// Trim the leading "0"
	while (sum[0] == "0")
		sum.shift();

	return sum.length > 0 ? sum.join("") : "0";
}

function main() {
    const result = superDigit(148, 3);

    console.log(result + '\n');
}

main();