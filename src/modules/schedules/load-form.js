import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

export async function loadAvailableHours(date) {
    const dailySchedules = await scheduleFetchByDay({ date });
    hoursLoad({ date, dailySchedules });
}
