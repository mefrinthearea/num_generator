/* =====================================================
   Random Number Generator Logic
===================================================== */

// Select the generate button and add click event listener
document.getElementById("generate-btn").addEventListener("click", function () {

    /* -----------------------------------------------
       Get Input Values
    ----------------------------------------------- */
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    /* -----------------------------------------------
       Generate Random Number
       Formula: random between min and max (inclusive)
    ----------------------------------------------- */
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    /* -----------------------------------------------
       Display Result
    ----------------------------------------------- */
    document.getElementById("number-display").innerText = number;

});