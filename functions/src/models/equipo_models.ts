/* Modelo representa el concepto de equipo */
/*============ Equipo ============*/
export interface Equipo {
    idEquipo? :string,
    nombre: string,
    urlfoto: string,
    historia :string,
    partidosGanados :number,
    partidosEmpatados :number,
    partidosPerdidos :number,
    golesFavor :number,
    golesEncontra :number
}

export function Equipo(data :any, id?:string){
    const { nombre, urlfoto, historia, partidosGanados, partidosEmpatados, partidosPerdidos, golesFavor, golesEncontra } = data;
    let object = {
        idEquipo: id,
        nombre: nombre,
        urlfoto: urlfoto,
        historia: historia,
        partidosGanados: partidosGanados,
        partidosEmpatados: partidosEmpatados,
        partidosPerdidos: partidosPerdidos,
        golesFavor: golesFavor,
        golesEncontra: golesEncontra,
    };
    return object;
}