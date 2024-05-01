const chargingE1 = document.querySelector(".charging");
const chargingPercentE1 = document.querySelector(".charging-percent");
const chargingTimeRemainingE1 = document.querySelector(".charging-time-remaining");

window.onload = () => {
    if (!navigator.getBattery()) {
        alert("Your browser dosen't support battery status API");
        return false;
    }

};

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargingInfo();
        updateLevelInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener("chargingchange", () => {
        updateAllBatteryInfo();
    });

    battery.addEventListener("leverchange", () => {
        updateAllBatteryInfo();
    });

    function updateChargingInfo() {
        if (battery.charging) {
            chargingE1.classList.add("active");
            chargingTimeRemainingE1.innerText = "Charging....";

        } else {
            chargingE1.classList.remove("active");

            if (parseInt(battery.dischargingTime)) {
                let hr = parseInt(battery.dischargingTime / 3600);
                let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                chargingTimeRemainingE1.innerHTML = `Esitated charging time remaining : <p>${hr}hr ${min}mins</p>`;

            }
        }
    }

    function updateLevelInfo() {
        let chargingPercent = `${parseInt(battery.level * 100)}%`
        chargingE1.style.width = chargingPercent;
        chargingPercentE1.textContent = chargingPercent;
    }


})


