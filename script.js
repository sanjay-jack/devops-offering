document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    const data = await res.json();
    if (data.success) {
      status.textContent = "Thanks! I'll reply within 24 hours.";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please email me directly.";
    }
  } catch {
    status.textContent = "Network error. Please email me directly.";
  }
});
