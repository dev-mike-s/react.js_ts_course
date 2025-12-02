// https://www.typescripttutorial.net/


// Type Inference

let n = 10 // number
let s = "Hello" // string
let b = true // boolean


// Type Annotation

let n2: number = 10
let s2: string = "Hello"
let b2: boolean = true


// Array (flexible Größe)

let n3: number[] = [1, 2, 3]
let s3: string[] = ["a", "b", "c"]
let b3: boolean[] = [true, false, true]

// Nested Array

let nn: number[][] = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10]
]


// Tuple (feste Größe)

let u: [number, string] = [1, "Max"] // Array mit genau 2 Elementen

// Nested Tuple

let u2: [number, [number, string]] = [1, [2, "Max"]]


// Objekt

let o: object // Objektreferenz. Auch Arrays sind Objekte!

// Objekt Inference

let o2 = { name: "Max", alter: 30 }

// Objekt Annotation

let o3: { name: string, alter: number } = { name: "Max", alter: 30 }

// Optionale Eigenschaft

let o4: { name: string, alter?: number } = { name: "Max" }


// Funktion

// Annotation

const greeting = (name: string): void => {
    console.log(`Hallo, ${name}`)
}

const greeting2 = (name: string): string => {
    return `Hallo, ${name}`
}


let greeting3 : (name: string) => void

greeting3 = function (name: string) {
    console.log(`Hallo, ${name}`)
}


let greeting4 : (name: string) => string

greeting4 = function (name: string) {
    return `Hallo, ${name}`
}

// Optionale Parameter

const addAll = (a: number, b: number, c?: number): number => {
    return a + b + (c || 0)
}

// Default Parameter

const addAll2 = (a: number, b: number, c: number = 0): number => {
    return a + b + c
}