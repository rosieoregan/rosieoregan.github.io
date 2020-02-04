/* Filter homepage JS*/
const all = document.querySelector("#all")
const branding = document.querySelector("#branding")
const digital = document.querySelector("#digital")
const print = document.querySelector("#print")
const images = Array.from(document.querySelectorAll(".project"))

all.addEventListener("click", function () {
  images.forEach(function (image) {
    image.style.display = "block"
  })
})
branding.addEventListener("click", function () {
  images.forEach(function (image) {
    if (!image.classList.contains("branding")) {
      image.style.display = "none"
    } else {
      image.style.display = "block"
    }
  })
})
digital.addEventListener("click", function () {
  images.forEach(function (image) {
    if (!image.classList.contains("digital")) {
      image.style.display = "none"
    } else {
      image.style.display = "block"
    }
  })
})
print.addEventListener("click", function () {
  images.forEach(function (image) {
    if (!image.classList.contains("print")) {
      image.style.display = "none"
    } else {
      image.style.display = "block"
    }
  })
})





// /* contact note JS*/

// const note = document.querySelector("#note")
// const name = document.querySelector("#name")
// const email = document.querySelector("#email")
// const message = document.querySelector("#message")

// const myName = document.querySelector("#my-name")
// const myEmail = document.querySelector("#my-email")
// const myMessage = document.querySelector("#my-message")

// name.addEventListener("keyup", function () {
//     myName.innerText = name.value
// })

// email.addEventListener("keyup", function () {
//     myEmail.innerText = email.value
// })

// message.addEventListener("keyup", function () {
//     myMessage.innerText = message.value
// })
