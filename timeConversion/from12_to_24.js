/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    //divido le ore dai minuti e dai secondi
    var time = s.charAt(8);    
    var hours = parseInt(s.slice(0, 2));
    var min = parseInt(s.slice(3, 5));
    var sec = parseInt(s.slice(6, 8));
    var format24 = undefined;

    if(hours >= 1 && hours <= 12 && min >= 0 && min <= 59 && sec >= 0 && sec <= 59) { 
        if(time == "P") {
            if(hours != 12)
                hours += 12;
            else
                hours = 12;
        }
        
        if(time == "A" && hours == "12") {
            hours = "00";
        }

        //aggiunge '0' ai numeri più piccoli di 10 
        if(hours != "00")
            hours = (hours < 10 ? '0' : '') + hours;

        format24 = (hours + s.slice(2, 8));
    }

    return format24;
}

function main() {

    const s = "12:40:22AM";

    let result = timeConversion(s);

    console.log(result + "\n");
}

main();
