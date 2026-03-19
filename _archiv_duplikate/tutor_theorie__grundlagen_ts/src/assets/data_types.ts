// Type Inference

let n = 10 // number
let s = "Hallo" // string
let b = false // boolean

// Type Annotation

let n2: number = 10
let s2: string = "Hallo"
let b2: boolean = false

// Type Annotation für Deklaration ohne Initialisierung

let x: number


// Array
let n3: number[] = [1, 2, 3]
let s3: string[] = ["1", "2", "3"]
let ns: (number | string)[] = [1, "2", "3"]

// Nested Array
let nn: number[][] = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10]
]

// Union
let uoz: undefined | number

// Objekt Inference
let o = { name: "Max", alter: 30 }

// Objekt Annotation
let o2: {name: string, alter: number} = { name: "Max", alter: 30 }

// Optionale Eigenschaft
let o3: {name: string, alter?: number} = { name: "Max" }


// Type Alias
type Name = string

let vorname: Name = "Max"
let nachname: Name = "Mustermann"


// Intersection

type Person = {
    name: string,
    alter: string
}

type Kontakt = {
  email: string,
  fon: string
}

type Mitarbeiter = Person & Kontakt

let mitarbeiter: Mitarbeiter = {
    name: "Max",
    alter: "25",
    email: "12345@example.com",
    fon: "0123456789"
}