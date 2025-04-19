import { scheduleCancel } from "../../services/schedule-cancel";
import { loadHomeSchedules } from "./load-home";

const periods = document.querySelectorAll(".period");
const date = document.querySelector("#date");

// Gera evento de clique para cada lista
periods.forEach((period) => {
    // Captura o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-btn")) {
            // Obtém a li pai do elemento clicado
            const item = event.target.closest("li");
            const { id } = item.dataset;

            if (id) {
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                );

                if (isConfirm) {
                    await scheduleCancel({ id });
                    loadHomeSchedules(date.value);
                }
            }
        }
    });
});
