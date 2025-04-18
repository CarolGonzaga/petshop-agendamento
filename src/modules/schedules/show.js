import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

function capitalizeText(text) {
    return text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function schedulesShow({ dailySchedules }) {
    try {
        // Limpando as listas
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li");
            item.setAttribute("data-id", schedule.id);

            item.innerHTML = `
                <div class="schedule-info">
                    <div class="info-top">
                        <strong>${dayjs(schedule.when).format("HH:mm")}</strong>
                        <p><strong>${capitalizeText(
                            schedule.petName
                        )} </strong>/ ${capitalizeText(schedule.clientName)}</p>
                    </div>
                    <p>${schedule.description}</p>
                </div>
                <button>Remover agendamento</button>
            `;
            periodMorning.append(item);
        });
    } catch (error) {
        console.log(error);
        alert("Não foi possível carregar os agendamentos.");
    }
}
