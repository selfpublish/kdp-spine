// Get amount to convert from index.html - see form on line 80

let input_fn = document.getElementById("inputAmt");
let submit = document.getElementById("submit-button");

console.log(input_fn);

// If the the user does not enter a value

function checkData() {
    if (this.value === "") {
        this.classList.add("alert");
        this.placeholder = "Required";
    }
}

// function getInputData() {
//     let data = [];
//     data.push(input_fn.value);
//     console.log("From inside getInputData ", data);
//     amtForConversion = data[0];
//     console.log(amtForConversion);
//     return amtForConversion;
// }

//not sure what this is. ask @devon

submit.addEventListener("click", performConversion);
input_fn.addEventListener("blur", checkData);

// Convert from the default source USD to the default destinations GBP, EUR, CAD, AUS.

// set API endpoint and your access key
endpoint = "live";
access_key = "8d2dc812fe8f6c5b9bef8066bb582ba9";

// Function call API and fetch exchange rate

function performConversion() {
    let data = [];
    data.push(input_fn.value);
    console.log("From inside performConversion ", data);
    let amtForConversion = data[0];
    console.log(amtForConversion);

    fetch(
        "http://apilayer.net/api/live?access_key=8d2dc812fe8f6c5b9bef8066bb582ba9"
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let apiLiveResultString = JSON.stringify(myJson);
            console.log("This is from apiLiveResult", apiLiveResultString);
            // let exchangeRates = apiLiveResult.quotes;
            // console.log("These are the exchange rates", apiLiveResult.quotes);
            let exchangeRates = myJson.quotes;
            console.log("From myJson", exchangeRates.USDAED);
            let gbpRate = exchangeRates.USDGBP;
            let eurRate = exchangeRates.USDEUR;
            let cadRate = exchangeRates.USDCAD;
            let audRate = exchangeRates.USDAUD;
            console.log(
                "GBP=",
                gbpRate,
                "EUR=",
                eurRate,
                "CAD=",
                cadRate,
                "AUS=",
                audRate
            );
            let gbpAmt = Number(
                Math.round(gbpRate * amtForConversion + "e2") + "e-2"
            );
            let eurAmt = Number(
                Math.round(eurRate * amtForConversion + "e2") + "e-2"
            );
            let cadAmt = Number(
                Math.round(cadRate * amtForConversion + "e2") + "e-2"
            );
            let audAmt = Number(
                Math.round(audRate * amtForConversion + "e2") + "e-2"
            );

            // let gbpAmt = gbpRate * amtForConversion;
            // let eurAmt = eurRate * amtForConversion;
            // let cadAmt = cadRate * amtForConversion;
            // let audAmt = audRate * amtForConversion;

            let array = [
                [
                    `<p><img src = "GBP.png" style="width:35px;height:20px;"> GBP (UK)</p>`,
                    gbpAmt
                ],
                [
                    `<p><img src = "EUR.jpg" style="width:35px;height:20px;"> Euros</p>`,
                    eurAmt
                ],
                [
                    `<p><img src = "CAD.png" style="width:35px;height:20px;"> CAD (Canada)</p>`,
                    cadAmt
                ],
                [
                    `<p> <img src = "AUS.png" style="width:35px;height:20px;"> AUS (Australia)</p>`,
                    audAmt
                ]
            ],
                table = document.getElementById("currency");

            /* Method 1 */
            // rows
            for (var i = 1; i < table.rows.length; i++) {
                // cells
                for (var j = 0; j < table.rows[i].cells.length; j++) {
                    table.rows[i].cells[j].innerHTML = array[i - 1][j];
                }
            }
        });
}

// copy "quotes" object from apiLiveResult and put into exchangeRates

// let exchangeRates = apiLiveResult.quotes;
// console.log("These are the exchange rates", exchangeRates);
