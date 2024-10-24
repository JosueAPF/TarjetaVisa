import { Validador } from "./UI.js";

 function Promesa_f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const My_UI = new Validador();
            resolve(My_UI.boton_enviar_Evento(), My_UI.boton_refresh_Evento())
        }, 100);
    })
}

async function MisEstilos() {
    try {
        const await_funcion = await Promesa_f();
        console.log("%cEstilos Cargados", "color:green; font-size:20px; background-color:yellow;")
    } catch (error) {
        console.log("%cError", "color:red; font-size:20px; background-color:yellow;")

    }
}
MisEstilos()

