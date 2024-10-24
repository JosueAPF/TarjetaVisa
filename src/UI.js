import { MyData,myArray,MyTitulos} from "./data.js";
/**contendores */
const ContenedorPadre = document.getElementById('contendor_tarjeta')

/**todos mis inputs */
const N_input = document.getElementById('input_nombre')
const A_input = document.getElementById('input_apellido')
const E_input = document.getElementById('input_edad')
const NoTarjeta = document.getElementById('input_ID')

/**botones */
const boton_enviar = document.getElementById('Btn_enviar')
const boton_refrescar = document.getElementById('Btn_Limpiar')

/**div que contendra la etiqueta table */
const Contenedor_Tabla = document.getElementById('contendor_tabla')

/*mi document fragment*/
const fragment = document.createDocumentFragment();

//***CONTENIDO DE LA TARJETA VISA */
const nombre_tarjet = document.getElementById('contendor_nombre')
const apellido_tarjet = document.getElementById('contedor_apellido')
const Id_tarjet = document.getElementById('contedor_ID')
const ccv_tarjet = document.getElementById('CCV_input')


/**
 * 
 * mejorar las expresiones regulares
 * investigar como eleiminar una casilla de las tablas o cambiar a un div
 * 
 * 
 */



/**clase Banner Validado y Error */
class Banner_UI{
    banner_Analizando_datos(){
        const div_datos_enviador = document.createElement('div')
        div_datos_enviador.style.textAlign = 'center'        
        div_datos_enviador.style.backgroundColor = 'blue'        
        div_datos_enviador.style.borderRadius = '15px'        
        div_datos_enviador.style.color = 'white'        
        div_datos_enviador.style.fontSize = 'x-large'
        div_datos_enviador.style.padding = '5px'
        div_datos_enviador.style.margin = '20px'
        
        div_datos_enviador.textContent = 'Analizando Los Datos'
        document.body.insertBefore(div_datos_enviador,ContenedorPadre)

        setTimeout(() => {
            div_datos_enviador.remove()
        },1500);
    }
    banner_input_vacios(){
        const div_datos_vacio = document.createElement('div')
        div_datos_vacio.style.textAlign = 'center'        
        div_datos_vacio.style.backgroundColor = 'red'        
        div_datos_vacio.style.borderRadius = '15px'        
        div_datos_vacio.style.color = 'white'        
        div_datos_vacio.style.fontSize = 'x-large'
        div_datos_vacio.style.padding = '5px'
        div_datos_vacio.style.margin = '20px'
        
        div_datos_vacio.textContent = 'Error Casillas Vacias'
        document.body.insertBefore(div_datos_vacio,ContenedorPadre)

        setTimeout(() => {
            div_datos_vacio.remove()
        },1500);
    }
    banner_NombreApellido_Error(){
        const div_datos_NA = document.createElement('div')
        div_datos_NA.style.textAlign = 'center'        
        div_datos_NA.style.backgroundColor = 'red'        
        div_datos_NA.style.borderRadius = '15px'        
        div_datos_NA.style.color = 'white'        
        div_datos_NA.style.fontSize = 'x-large'
        div_datos_NA.style.padding = '5px'
        div_datos_NA.style.margin = '20px'
        
        div_datos_NA.textContent = 'Error Casillas Nombre O Apellido'
        document.body.insertBefore(div_datos_NA,ContenedorPadre)

        setTimeout(() => {
            div_datos_NA.remove()
        },1500);
    }
    banner_Edad_Erro(){
        const div_datos_E = document.createElement('div')
        div_datos_E.style.textAlign = 'center'        
        div_datos_E.style.backgroundColor = 'red'        
        div_datos_E.style.borderRadius = '15px'        
        div_datos_E.style.color = 'white'        
        div_datos_E.style.fontSize = 'x-large'
        div_datos_E.style.padding = '5px'
        div_datos_E.style.margin = '20px'
        
        div_datos_E.textContent = 'Error Casillas Edad'
        document.body.insertBefore(div_datos_E,ContenedorPadre)

        setTimeout(() => {
            div_datos_E.remove()
        },1500);
    }
    banner_NoTarjeta_Error(){
        const div_tarjeta = document.createElement('div')
        div_tarjeta.textContent = 'Error Casilla NO. Tarjeta'
        div_tarjeta.style.textAlign = 'center'
        div_tarjeta.style.backgroundColor = 'red'
        div_tarjeta.style.color = 'white'
        div_tarjeta.style.borderRadius = '15px'
        div_tarjeta.style.fontSize = 'x-large'
        div_tarjeta.style.padding = '5px'
        div_tarjeta.style.margin = '20px'
        document.body.insertBefore(div_tarjeta,ContenedorPadre)
        setTimeout(() => {
            div_tarjeta.remove()
        },1500)
    }
    banner_refrescar_inputs(){
        const div_datos_fresh = document.createElement('div')
        div_datos_fresh.style.textAlign = 'center'        
        div_datos_fresh.style.backgroundColor = 'purple'        
        div_datos_fresh.style.borderRadius = '15px'        
        div_datos_fresh.style.color = 'white'        
        div_datos_fresh.style.fontSize = 'x-large'
        div_datos_fresh.style.padding = '5px'
        div_datos_fresh.style.margin = '20px'
        
        div_datos_fresh.textContent = 'Casillas Limpias'
        document.body.insertBefore(div_datos_fresh,ContenedorPadre)

        setTimeout(() => {
            div_datos_fresh.remove()
        },1500);

    }
    /**aqui empiezan los banner que su validacion es correcta **********************************************************banner true */
    banner_ok_Data_Correctos(){
        const div__data_enviada = document.createElement('div')
        div__data_enviada.textContent = 'Datos Correctos'
        div__data_enviada.style.textAlign = 'center'
        div__data_enviada.style.color = 'white'
        div__data_enviada.style.backgroundColor = 'green'
        div__data_enviada.style.fontSize = 'x-large'
        div__data_enviada.style.padding = '5px'
        div__data_enviada.style.margin = '20px'

        document.body.insertBefore(div__data_enviada,ContenedorPadre)
        setTimeout(() => {
            div__data_enviada.remove()
        }, 1500);
    }
}


/****clase que guarda los datos de los inuts en una clase para luego visualizarlos en un tabla */
class data_class{
    getData(){
        var validarDatos = /^([a-z]){3,12}$/;//validar_nombre y apellido
        var ValidarEdad = /^([0-9])[21-30]/;//validar edad
        var LongitudValor = /^([0-9]){16,16}$/;//validar no_tajeta
        if(N_input.value.length !== 0 || A_input.value.length !== 0 || E_input.value.length !== 0 || NoTarjeta.value.length !== 0){
            if(N_input.value.match(validarDatos) || A_input.value.match(validarDatos) && NoTarjeta.value.match(LongitudValor)){
                if(E_input.value.match(ValidarEdad)){
                    var ccv = Math.floor(Math.random() * (999 - 100 + 1) + 100)//obtener 3 digitos ramdom desde el 999
                    const Datos_1 = new MyData(N_input.value,A_input.value,E_input.value,NoTarjeta.value,ccv);
                    Datos_1.get_Data()
                    myArray.push(Datos_1)

                    /***console.log(myArray)*/
                    this.Refrescar_contenedor_table()//refresca el contenedor div de la table
                    this.Export_Datos()//comvierte los datos a tablas
                    
                    /**el contenido de la tarjeta visa */
                    ccv_tarjet.value = ccv
                    Id_tarjet.textContent = NoTarjeta.value
                    nombre_tarjet.textContent = N_input.value
                    apellido_tarjet.textContent = A_input.value

                    /**banner datos insetados */
                    const banner_confirmados = new Banner_UI();
                    setTimeout(() => {
                        banner_confirmados.banner_ok_Data_Correctos()
                    },800);
                }else{
                    console.log('error Edad')
                    const banner_confirmados = new Banner_UI();
                    setTimeout(() => {
                        banner_confirmados.banner_Edad_Erro()
                    },800);
                }
            }else{
                console.log('error Posibles Casillas Nombre,Apellido O No. Tarjeta')
            }
        }else{
            console.log('error')
        }
    }
    Refrescar_contenedor_table(){
        Contenedor_Tabla.textContent = ''
    }  
    Export_Datos(){
        const table_master = document.createElement('table')
        table_master.setAttribute('id','Tabla_maestra')
        const Tr_head = document.createElement('tr')
        MyTitulos.forEach((titulos)=>{
            const Th_head = document.createElement('th')
            const txt_head = document.createTextNode(titulos)
            Th_head.appendChild(txt_head)
            Tr_head.appendChild(Th_head)
            table_master.appendChild(Tr_head)
        })
        fragment.appendChild(table_master)
        myArray.forEach((Element)=>{
            const Tr_body = document.createElement('tr')
            Object.values(Element).forEach((DATA)=>{
                const Td_body = document.createElement('td')
                Td_body.setAttribute('id','td_body')
                const txt_body = document.createTextNode(DATA)
                Td_body.appendChild(txt_body)
                Tr_body.appendChild(Td_body)
                table_master.appendChild(Tr_body)
            })
            fragment.appendChild(table_master) 
        })
        Contenedor_Tabla.appendChild(fragment)
    }
   
}


/***clase Validadora */
export class Validador{
    data_input_Prosess(){
        const data_11 = new data_class()
        data_11.getData()   
    }
    //aqui llegan todas las validaciones finales
    Validar_inputs(){
        if(N_input.value.length == 0 || A_input.value.length == 0 || E_input.value.length == 0 || NoTarjeta.value.length == 0){
            console.log('Los inputs Estan Vacios')
            const Banner_error = new Banner_UI();//banner datos vacios
            Banner_error.banner_input_vacios()
           
        }else{
            console.log('Analizando los Datos Enviados....')
            this.data_input_Prosess()   
            /**banner analizando datos */
            const Banner_datos_enviados = new Banner_UI();
            Banner_datos_enviados.banner_Analizando_datos() 
        }
    }
    Refrescar_inputs(){
        N_input.value = ''
        A_input.value = ''
        E_input.value = ''
        NoTarjeta.value = ''

        ccv_tarjet.value = '000'
        Id_tarjet.textContent = '1452 2548 1689 0026'
        nombre_tarjet.textContent = 'Jorgito'
        apellido_tarjet.textContent = 'Perez'
    }
    boton_enviar_Evento(){
        boton_enviar.addEventListener('click',()=>{
            this.Validar_inputs()
        })
    }
    boton_refresh_Evento(){
        boton_refrescar.addEventListener('click',()=>{
            console.log('refrescando')
            this.Refrescar_inputs()
            const banner_ui_refresh = new Banner_UI();
            banner_ui_refresh.banner_refrescar_inputs()
        })
    }
}