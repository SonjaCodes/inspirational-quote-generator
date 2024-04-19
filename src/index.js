function generateQuote(event) {
  event.preventDefault();

  let quoteElement = document.querySelector("#quote");

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
