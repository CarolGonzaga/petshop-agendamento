import { apiConfig } from "./api-config.js";

export async function scheduleNew({
    id,
    clientName,
    petName,
    phone,
    description,
    when,
}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                clientName,
                petName,
                phone,
                description,
                when,
            }),
        });

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error);
        alert("Não foi possível agendar. Tente novamente mais tarde!");
    }
}
