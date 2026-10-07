type PhotoStatus = "ok" | "no_es_vehiculo" | "ilegible" | "vehiculo_parcial" | "error"
type BodyType = "sedan" | "hatchback" | "suv" | "pickup" | "van" | "minivan" | "coupe" | "convertible" | "wagon"
type CabType = "sencilla" | "extendida" | "doble"
type Tint = "claro" | "verde" | "gris" | "bronce" | "azul"
type GlassPosition = "parabrisas" | "medallon" | "puerta_delantera_izq" | "puerta_delantera_der" | "puerta_trasera_izq" | "puerta_trasera_der" | "aleta_izq" | "aleta_der" | "ventila_izq" | "ventila_der" | "quemacocos"



export interface VehicleIdentification{
    status: PhotoStatus,
    brand: string,
    model: string,
    year: number,
    bodyType: BodyType,
    cabType?: CabType,
    tint?: Tint,
    glassPosition?: GlassPosition
};
