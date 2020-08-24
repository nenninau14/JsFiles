def getTotalX(a, b) :
	
    check = 0
    num = 0
    err = 0
    count = 0

    if len(a) >= 1 and len(a) <= 10 and len(b) >= 1 and len(b) <= 10 :
        while num <= 100 :

            num += 1

            for x in a :
                if x >= 1 and x <= 100 :
                    if num >= x and num%x == 0 :
                        check += 1
                else :
                    err += 1

            for y in b :
                if y >= 1 and y <= 100 :
                    if num <= y and y%num == 0 :
                        check += 1
                else :
                    err += 1

            if check == (len(a) + len(b)) - err :
                count += 1

            check = 0
            err = 0

        return count



def main() :
    
    arr = [2, 4]
    brr = [16, 32, 96]
    total = getTotalX(arr, brr)

    txt = "{}\n"
    print(txt.format(total))

main()
    