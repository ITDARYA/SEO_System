// Точка входа фронтенда. Здесь инициализируем скрипты страницы
document.addEventListener("DOMContentLoaded", () => {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    let finishDate = 0;
    let day = 1;
    let hour = 5;
    let minute = 45;
    let second = 12;

    day = day * 24 * 60 * 60 * 1000;
    hour = hour * 60 * 60 * 1000;
    minute = minute * 60 * 1000;
    second = second * 1000;
    let sum = day + hour + minute + second;
    finishDate = Date.now() + sum;

    function countdownTimer() {
        const todayDate = Date.now();
        const gap = finishDate - todayDate;

        const d = Math.floor((gap / 1000 / 60 / 60 / 24) % 24);
        const h = Math.floor((gap / 1000 / 60 / 60) % 24);
        const m = Math.floor((gap / 1000 / 60) % 60);
        const s = Math.floor((gap / 1000) % 60);

        days.textContent = d < 10 ? "0" + d : d;
        hours.textContent = h < 10 ? "0" + h : h;
        minutes.textContent = m < 10 ? "0" + m : m;
        seconds.textContent = s < 10 ? "0" + s : s;
    }

    setInterval(countdownTimer, 1000);

    const navElements = document.querySelectorAll(".nav-element");

    navElements.forEach((navElement) => {
        navElement.addEventListener("click", () => {
            navElements.forEach((navElement) =>
                navElement.classList.remove("active")
            );

            navElement.classList.add("active");
            document
                .getElementById(`nav-${nav.dataset.nav}`)
                .classList.add("active");
        });
    });

    // табы Hero
    let tabs = document.querySelectorAll(".hero .hero__list .item");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tab) => tab.classList.add("collapsed"));
            tab.classList.remove("collapsed");
        });
    });
});
