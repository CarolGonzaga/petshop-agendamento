import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedules-new.js";

const form = document.querySelector("form");

const clientNameInput = document.getElementById("client");
const petNameInput = document.getElementById("pet");
const phoneInput = document.getElementById("phone");
const serviceDescription = document.getElementById("description");
const formDate = document.getElementById("schedule-date");
const timeSelect = document.getElementById("time");

const inputDate = dayjs().format("YYYY-MM-DD");
formDate.value = inputDate;
formDate.min = inputDate;

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        // Recuperando e validando os dados do cliente
        const clientName = clientNameInput.value.trim();
        if (!clientName) {
            return alert("Informe o nome do cliente!");
        }

        const petName = petNameInput.value.trim();
        if (!petName) {
            return alert("Informe o nome do pet!");
        }

        const phone = phoneInput.value.trim();
        if (!phone) {
            return alert("Informe o telefone!");
        }

        const description = serviceDescription.value.trim();
        if (!description) {
            return alert("Descreva o serviço!");
        }

        // Separa hora e minuto da string "HH:mm"
        const [hour, minute] = timeSelect.value.split(":");

        // Cria o objeto `dayjs` com data e adiciona hora e minuto
        const when = dayjs(formDate.value)
            .hour(Number(hour))
            .minute(Number(minute));

        // Gera um ID
        const id = when.format("YYMMDDHHmm");

        await scheduleNew({
            id,
            clientName,
            petName,
            phone,
            description,
            when,
        });
        
    } catch (error) {
        console.log(error);
        alert("Erro: Não foi possível realizar o agendamento.");
    }
};
