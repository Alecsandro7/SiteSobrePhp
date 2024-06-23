const button = document.querySelector(".testing")
const codeUser = document.getElementById("codeUser")

button.addEventListener("click", () => {
  alert(codeUser.innerText)
})

const imgs = document.querySelectorAll(".images")
console.log(imgs)

ScrollReveal().reveal(".images", {
  duration: 2300,
  distance: "20%",
})
