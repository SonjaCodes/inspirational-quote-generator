function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Your inspiration is in the works...",
    autoStart: true,
    delay: 20,
    cursor: null,
    loop: true,
  });
}

let inspirationFormElement = document.querySelector("#inspirational-form");
inspirationFormElement.addEventListener("submit", generateQuote);
