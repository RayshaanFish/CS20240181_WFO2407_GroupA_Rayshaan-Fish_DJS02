const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // convert inputs to numbers
  const isNumberDividend = Number(dividend);
  const isNumberDivider = Number(divider);

  // Empty inputs
  if (dividend === "" || divider === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Divide by 0 Error
  if (isNumberDivider === 0) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";

    // Log the error to the callstack
    console.error(new Error("divided by zero - they must be stupid!!"));
    return;
  }

  if (isNaN(isNumberDividend) || isNaN(isNumberDivider)) {
    document.body.innerHTML =
      "Something critical went wrong. Please reload the page";
    console.error(new Error("User entered 'non-numbers'"));
    return;
  }

  // Round down the result
  const resultOfDivision = Math.floor(dividend / divider);

  result.innerText = resultOfDivision;
});
