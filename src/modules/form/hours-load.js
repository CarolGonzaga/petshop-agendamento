import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const timeSelect = document.getElementById("time");

export function hoursLoad({ date, dailySchedules }) {
    const now = dayjs();
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))   

    // Limpa o select
    timeSelect.innerHTML = "";

    const periods = {
        Manhã: [],
        Tarde: [],
        Noite: [],
    };

    openingHours.forEach((hour) => {
        const [h, m] = hour.split(":");
        const selectedDateTime = dayjs(date).hour(Number(h)).minute(Number(m));
        const isHourPast = selectedDateTime.isBefore(now);
        const isHourUnavailable = unavailableHours.includes(hour);
                
        if (isHourPast || isHourUnavailable) return;

        const option = document.createElement("option");
        option.value = hour;
        option.textContent = hour;

        // Agrupar por período
        const hourInt = Number(h);
        if (hourInt < 12) {
            periods["Manhã"].push(option);
        } else if (hourInt < 19) {
            periods["Tarde"].push(option);
        } else {
            periods["Noite"].push(option);
        }
    });

    // Para cada período (Manhã, Tarde, Noite)
    for (let period in periods) {
        const arrayOpt = periods[period];

        // Se não houver horários disponíveis para esse período, pula
        if (arrayOpt.length === 0) continue;

        // Cria o grupo de opções com o rótulo do período
        const group = document.createElement("optgroup");
        group.label = period;

        // Adiciona cada horário (option) dentro do grupo
        for (let item of arrayOpt) {
            group.appendChild(item);
        }

        // Adiciona o grupo completo ao select
        timeSelect.appendChild(group);
    }
}
