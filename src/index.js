function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#instructions");
  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let context =
    "You are an inspiration to everyone around the globe and an expert on quotes from famous people.  You love to write short inspirational quotes.  Your mission is to generate a short cheerful inspirational quote in basic HTML.  Please do not mention the format, simply the quote itself. Make sure to follow the user instructions. Sign it with 'SheCodes AI' inside a <strong> element after a <br>.";
  let prompt = `Generate an inspirational quote about ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  quote.innerHTML = "Your inspiration is in the works...";

  axios.get(apiURL).then(displayQuote);
}

let inspirationFormElement = document.querySelector("#inspirational-form");
inspirationFormElement.addEventListener("submit", generateQuote);
