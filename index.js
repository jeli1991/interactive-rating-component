const main=document.querySelector(".main");
const thanks=document.querySelector(".thanks");
const submitBtn=document.getElementById("submit");
const rateAgain=document.getElementById("rate-again");
const butonRating=document.getElementById("butonRating");
const allBtn=document.querySelectorAll(".btn")



submitBtn.addEventListener("click", ()=>{
    thanks.classList.remove("hidden");
    main.style.display="none"
}
);


rateAgain.addEventListener("click", ()=>{
    thanks.classList.add("hidden");
    main.style.display="block"
}
) ;


allBtn.forEach((rate) => {
    rate.addEventListener("click", () => {
        butonRating.innerHTML=rate.innerHTML;   
    });
});