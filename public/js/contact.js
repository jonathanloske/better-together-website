function initContactForm() {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("success-modal");
  const closeButton = document.getElementById("success-modal-close");
  if (!form || !modal || !closeButton) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formDataBody = new URLSearchParams(new FormData(form)).toString();

    try {
      await fetch("/contact-helper", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataBody,
      });
      modal.hidden = false;
    } catch (error) {
      alert(error);
    }
  });

  closeButton.addEventListener("click", () => {
    modal.hidden = true;
  });
}

initContactForm();
