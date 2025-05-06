const textSynopsis = document.getElementById ("textSynopsis");
const synospis = document.getElementById("synopsis");

synospis.addEventListener("click",() => {
    textSynopsis.classList.toggle("hidden")
})