import dayjs from "dayjs";
import { schedulesDay } from "./schedules/load.js";

const selectedDate = document.getElementById("date");
selectedDate.value = dayjs().format("YYYY-MM-DD");

document.addEventListener("DOMContentLoaded", function () {
    schedulesDay();
});
