document.getElementById("btnSubmit").addEventListener("click", Answer);

function sumOfAllFears(userArray, numk) {


    let found = false;

    for (let i = 0; i <= userArray.length - 2; i++) {

        for (let y = (i + 1); y <= userArray.length - 1; y++) {
            if (numk == userArray[i] + userArray[y]) {
                found = true;
                return found;

            }
        }
    }


    return found;

}

function Answer() {
    let numk = parseInt(document.getElementById("inputk").value);



    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let num3 = parseInt(document.getElementById("input3").value);
    let num4 = parseInt(document.getElementById("input4").value);

    let userArray = [];

    let output1 = document.getElementById("results");
    let output2 = document.getElementById("results2");

    userArray.push(num1, num2, num3, num4);

    output1.innerHTML = userArray;
    let found = sumOfAllFears(userArray, numk);
    output2.innerHTML = found;

}
document.getElementById("btnClear").addEventListener("click", function () {
    document.getElementById("results").innerText = " ";
    document.getElementById("results2").innerText = " ";

});
