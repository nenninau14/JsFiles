def timeConversion(s) :
    #divido le ore dai minuti e dai secondi
    time = s[8]
    hours = int(s[0:2])
    mini = int(s[3:5])
    sec = int(s[6:8])
    format24 = ""

    if hours >= 1 and hours <= 12 and mini >= 0 and mini <= 59 and sec >= 0 and sec <= 59 :
        if time == "P" :
            if hours != 12 :
                hours += 12
            else :
                hours = 12

        if time == "A" and hours == 12 :
            hours = "00"

        #aggiunge '0' ai numeri più piccoli di 10
        if int(hours) != 0 and int(hours) < 10 :
            temp = "0"
            temp += str(hours)
            hours = temp

        format24 = str(hours) + s[2:8]

    return format24

def main() :
    s = "07:05:45PM"

    result = timeConversion(s)
    
    txt = "{}\n"
    print(txt.format(result))

main()