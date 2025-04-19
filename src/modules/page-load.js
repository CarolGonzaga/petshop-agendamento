import dayjs from "dayjs";
import { loadHomeSchedules } from "./schedules/load-home.js";

const selectedDate = document.getElementById("date");

selectedDate.value = dayjs().format("YYYY-MM-DD");

document.addEventListener("DOMContentLoaded", function () {
  loadHomeSchedules(selectedDate.value);
});

selectedDate.addEventListener("change", function () {
  loadHomeSchedules(selectedDate.value);
});
