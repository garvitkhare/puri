air= document.querySelector("#i1");
liq= document.querySelector("#i2");
async function check(a, b){
const den= (a/(a-b))*0.825;
x= ((((1/den)*9.515*19.3)-19.3)/(9.515-19.3))*100;
document.querySelector(".result").innerHTML= "Purity is "+ x.toFixed(2)+ "%";
}
const searchbtn = document.querySelector("button");
searchbtn.addEventListener("click", () => {
    check(air.value, liq.value);
})
