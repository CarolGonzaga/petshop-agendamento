import { loadAvailableHours } from "../schedules/load-form.js"
;
const scheduleDateInput = document.getElementById("schedule-date");

scheduleDateInput.addEventListener("change", () => {
    loadAvailableHours(scheduleDateInput.value);
});
