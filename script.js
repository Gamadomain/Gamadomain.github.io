const form = document.getElementById("submitForm");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    if (!fileInput.files.length) {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Файл оруулна уу!";
        return;
    }

    setTimeout(() => {
        successMsg.style.display = "block";
        form.reset();
        fileName.textContent = "";
    }, 1000);
});
