export interface Country {
    name: {
        common: string
    },
    flags: {
        svg: string
    },
    region: string
    capital: string
    population: number
    languages: string
    area: number;
    currencies: Record<string, { name: string }>;
}


export interface Regions {
    [index: number]: string;
}