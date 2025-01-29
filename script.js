const loading = (show) => {
    const spinner = document.querySelector(".spinner-container");
    if (show) {
        console.log("Loading on")
        spinner.style.display = 'flex';
    } else {
        console.log("Loading Off")
        spinner.style.display = 'none';
    }
}
let formData;
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;  
    formData = new FormData(form);
    loading(true);
    fetch("https://script.google.com/macros/s/AKfycbz6l6m7VK8m8_fzna-TvZs5PYw-eXLFA3piXsH7XOlCprudS4e19uyD1DA973FYrFnC9w/exec", {
        method: "POST",
        body: formData
    })
        .then(response => {
            loading(false);
            return response.json();
        })
        .then(data => {
            if (data.status == 'Success') {
                alert("Successfully sent!")
            } else {
                alert("Something went wrong!")
            }
        })
        .catch(error => {
            alert("Error: " + error)
            loading(false)
        })
});