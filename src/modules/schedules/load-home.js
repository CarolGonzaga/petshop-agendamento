import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";

export async function loadHomeSchedules(date) {
    const dailySchedules = await scheduleFetchByDay({ date });
    schedulesShow({ dailySchedules });
}
