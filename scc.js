const air = document.querySelector("#i1");
const liq = document.querySelector("#i2");
const kk = document.querySelector("#i3");

async function check(a, b, k) {
    const den = (a / (a - b)) * k;
    const x = ((((1 / den) * 9.515 * 19.3) - 19.3) / (9.515 - 19.3)) * 100;
    document.querySelector(".result").innerHTML = "Purity is " + x.toFixed(2) + "%";
}

const searchbtn = document.querySelector("button");
searchbtn.addEventListener("click", () => {
    check(parseFloat(air.value), parseFloat(liq.value), parseFloat(kk.value));
});
