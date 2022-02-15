/* Modelo representa el concepto de jugador */
/*============ Jugador ============*/
export interface Jugador {
    idJugador? :string,
    nombre :string,
    urlfoto :string,
    edad :number,
    nacionalidad :string,
    posicion: string,
    numgoles :number,
    idEquipo :string
}

export function Jugador(data :any, id?:string){
    const { nombre, urlfoto, edad, nacionalidad, posicion, numgoles, idEquipo } = data;
    let object = {
        idJugador: id,
        nombre: nombre,
        urlfoto: urlfoto,
        edad: edad,
        nacionalidad: nacionalidad,
        posicion: posicion,
        numgoles: numgoles,
        idEquipo: idEquipo,
    };
    return object;
}