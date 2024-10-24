export var myArray = [];
export var MyTitulos = ['Nombre','Apellido','Edad','No.Tarjeta','cvv'];
export class MyData{
    constructor(nombre,apellido,edad,noTarjeta,ccv){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.noTarjeta = noTarjeta
        this.ccv = ccv
    }
    

    get_Data(){
        console.log(`Nombre:${this.nombre},Apellido:${this.apellido},Edad:${this.edad},Tarjeta:${this.noTarjeta},Ccv:${this.ccv}`)
    }
}
