// define types with 'type' or 'interface'
export type Movie = {
    id?: number,     // ? - optional (means that the property isn't required to create the object)
    title: string,
    rating: number, 
    director?: {
        firstName: string,
        lastName: string
    }
}

export interface MovieInterface {
    id?: number,     // ? - optional (means that the property isn't required to create the object)
    title: string,
    rating: number, 
    director?: {
        firstName: string,
        lastName: string
    }
}