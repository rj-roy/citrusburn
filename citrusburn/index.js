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


  const now = new Date();  
  const formattedDate = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  document.getElementById('timeD').innerText = formattedDate;