import { schedulesDay } from "../schedules/load.js";

const formDate = document.getElementById("schedule-date");

// Atualiza horários sempre que a data mudar
formDate.onchange = () => schedulesDay();
