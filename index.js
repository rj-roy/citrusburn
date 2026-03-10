window.addEventListener("load", () => {
    const bar = document.getElementById("progressBar");
    const percent = document.getElementById("percent");

    let value = 0;

    const interval = setInterval(() => {
        value++;
        percent.innerText = value + "%";

        if (value >= 100) {
            clearInterval(interval);
        }
    }, 20);
    
    setTimeout(() => {
        bar.style.width = "100%";
    }, 100);
});