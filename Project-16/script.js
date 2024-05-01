const chargingE1 = document.querySelector(".charging");
const chargingPercentE1 = document.querySelector(".charging-percent");
const chargingTimeRemainingE1 = document.querySelector(".charging-time-remaining");

// If your browser don't support your battery status API
window.onload = () => {
    if (!navigator.getBattery()) {
        alert("Your browser dosen't support battery status API");
        return false;
    }
};

// If the browsers support battery status API
navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargingInfo();
        updateLevelInfo();
    }
    updateAllBatteryInfo();

    // If the charging status changes i.e when plugged in or plugged out
    battery.addEventListener("chargingchange", () => {
        updateAllBatteryInfo();
    });

    // If the charging level changes i.e when charging percentage changes
    battery.addEventListener("leverchange", () => {
        updateAllBatteryInfo();
    });

    function updateChargingInfo() {

        // Checks whether the battery is plugged in or plugged out
        if (battery.charging) {
            chargingE1.classList.add("active");
            chargingTimeRemainingE1.innerText = "Charging....";

        } else {
            chargingE1.classList.remove("active");

            // Estimated charging time remaining
            if (parseInt(battery.dischargingTime)) {
                let hr = parseInt(battery.dischargingTime / 3600);
                let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                chargingTimeRemainingE1.innerHTML = `Esitated charging time remaining : <p>${hr}hr ${min}mins</p>`;
            }
        }
    };

    // Updating battery level
    function updateLevelInfo() {
        let chargingPercent = `${parseInt(battery.level * 100)}%`
        chargingE1.style.width = chargingPercent;
        chargingPercentE1.textContent = chargingPercent;
    }
});


