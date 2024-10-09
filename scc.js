const air = document.querySelector("#i1");
const liq = document.querySelector("#i2");
// const kk = document.querySelector("#i3");
const n = document.querySelector("#i4");
const dia = document.querySelector("#i5");
async function check(a, b, n1, diav) {
    const dia1= diav/10;
    const k1= (22.67971256*b)-(20.707308*a) + ((((9.8291324*dia1)*dia1)*dia1)*n1) + (((0.937689263*dia1)*dia1)*n1) + ((0.0298176*dia1)*n1) + (0.000315959*n1);
    const x = (k1/a) * 100;
    document.querySelector(".result").innerHTML = "Purity is " + x.toFixed(2) + "%";
}

const searchbtn = document.querySelector("button");
searchbtn.addEventListener("click", () => {
    check(parseFloat(air.value), parseFloat(liq.value), parseFloat(n.value), parseFloat(dia.value));
});
