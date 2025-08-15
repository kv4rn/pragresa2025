// Countdown logic
function updateCountdown() {
    const targetDate = new Date("2025-11-06T06:00:00+01:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown-section").innerHTML = "<h2>Nu åker vi! 🎉</h2>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Navigation logic
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        // Change active button style
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Show relevant section
        const targetId = btn.dataset.target;
        document.querySelectorAll(".page-section").forEach(section => {
            section.classList.add("hidden");
        });
        document.getElementById(targetId).classList.remove("hidden");
    });
});

// Currency converter logic
function convertCurrency() {
    const czk = parseFloat(document.getElementById('czk-amount').value);
    if (isNaN(czk)) {
        document.getElementById('currency-result').innerText = 'Ange ett giltigt belopp.';
        return;
    }
    // Example fixed rate: 1 SEK = 2.25 CZK
    const sek = czk / 2.25;
    document.getElementById('currency-result').innerText = `${czk} CZK = ${sek.toFixed(2)} SEK`;
}