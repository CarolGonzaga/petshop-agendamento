import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";

const selectedDate = document.getElementById("schedule-date");
const filterDate = document.getElementById("date");

export async function schedulesDay() {
    // Obtém a data do input
    const homeDate = selectedDate.value;
    const formDate = filterDate.value;

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ formDate });

    schedulesShow({ dailySchedules });

    // Renderiza as horas disponíveis e data atual
    hoursLoad({ homeDate });
}
