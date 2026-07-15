function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * To produce a new code (for phone numbers), use
 * newCode.map(partOfNewCode => "&#" + (Number(partOfNewCode) + 48) + ";&#58182;").join("").split("").reverse().join("")
 */
function revealCode(oldCode, add, type, container) {
  let newcode = reverseString(oldCode);
  const rgx = `&#${add};`;
  newcode = newcode.split(rgx).join("");
  container.innerHTML = `<a href="${type}:${newcode}">${newcode}</a>`;
}

function initImprintReveal() {
  document.querySelectorAll(".js-reveal-code").forEach((button) => {
    button.addEventListener("click", () => {
      const { code, add, type } = button.dataset;
      revealCode(code, add, type, button.parentElement);
    });
  });
}

initImprintReveal();
