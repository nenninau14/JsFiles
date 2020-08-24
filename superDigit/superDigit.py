def superDigit(n, k) :
    #check data requirements
    if int(n) >= 1 and int(n) <= pow(10, 100000) and k >=1 and k <= pow(10, 5) :
        p = digitSum(n)

        p *= k

        p = digitSum(str(p))

        return p


#takes the whole string and sums every single digit after parsed it and return int digit
def digitSum(n) :
    res = 0
    i = 0

    while len(n) - 1 - i >= 0 :
        num = int(n[len(n) - 1 - i])
        res += num

        #if the sum has 2 digits, they are summed together
        if res >= 10 :    
            string = str(res)
            res2 = int(string[0]) + int(string[1])
            res = res2
		
        i += 1

    return res
    


def main() :
    result = superDigit("148", 3)

    txt = "{}\n"
    print(txt.format(result))


main()