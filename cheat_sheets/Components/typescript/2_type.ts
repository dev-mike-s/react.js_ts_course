// Type Alias

type Name = string

let vorname: Name = "Max"
let nachname: Name = "Mustermann"


// Union

let gewicht: number | string = 75
gewicht = "75"


// Intersection

type Person = {
    name: string,
    alter: string
}

type Kontakt = {
  email: string;
  fon: string;
}

type Mitarbeiter = Person & Kontakt

let mitarbeiter: Mitarbeiter = {
    name: "Max",
    alter: "25",
    email: "12345@example.com",
    fon: "0123456789"
}