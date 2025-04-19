import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`);
        const data = await response.json();

        const dailySchedules = data.filter((schedule) =>
            dayjs(schedule.when).isSame(dayjs(date), "day")
        );

        return dailySchedules;
        
    } catch (error) {
        console.log(error);
        alert("Não foi possível carregar os agendamentos");
    }
}
