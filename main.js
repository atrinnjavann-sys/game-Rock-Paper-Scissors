function calculate(){
    let number1 = document.querySelector("#bazikonshomare1").value;
    let number2 = document.querySelector("#bazikonshomare2").value;
    let finalcalculate= number1+"-"+number2
    document.getElementById("result").style.color="#eb44ab"
    switch (finalcalculate) {
        case "سنگ-قیچی":
        document.getElementById("result").innerText="بازیکن شماره 1 برنده است" 
        break;
        case "کاغذ-قیچی":
        document.getElementById("result").innerText="بازیکن شماره 1 برنده است"
        break;
        case "قیچی-قیچی":
        document.getElementById("result").innerText="مقادیر وارد شده برابر است"
        break;


        case "قیچی-سنگ":
        document.getElementById("result").innerText="بازیکن شماره 2 برنده است"
        break;
        case "کاغذ-سنگ":
        document.getElementById("result").innerText="بازیکن شماره 2 برنده است"
        break;
        case "سنگ-سنگ":
        document.getElementById("result").innerText="مقادیر وارد شده برابر است"
        break;


        case "ُسنگ-کاغذ":
        document.getElementById("result").innerText="بازیکن شماره 2 برنده است"
        break;
        case "قیچی-کاغذ":
        document.getElementById("result").innerText="بازیکن شماره 2 برنده است"
        break;
        case "کاغذ-کاغذ":
        document.getElementById("result").innerText="مقادیر وارد شده برابر است"
        break;



        default:
            document.getElementById("result").innerText="مقدار وارد شده اشتباه است"
                document.getElementById("result").style.color="red"

            break;
    }
}