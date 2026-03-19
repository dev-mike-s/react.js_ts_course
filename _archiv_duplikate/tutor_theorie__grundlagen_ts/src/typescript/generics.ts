// Generics (Generika) = Typ-Parameter

// Functions

function getNumber(num: number) {
    return num
}
function getString(str: string) {
    return str
}
function getBoolean(bool: boolean) {
    return bool
}

/*
function getValue(value) {
    return value
}
*/

function getValue<T>(value: T) {
    return value
}

getValue(42)
getValue<number>(42)
getValue<boolean>(true)

// Types

type Beispiel1 = {
    a: string,
    b: string
}
let obj1: Beispiel1 = {
    a: "a",
    b: "b"
}

type Beispiel2<T> = {
    a: string,
    b: T
}
let obj2: Beispiel2<number> = {
    a: "a",
    b: 42
}

// Generic Constraints

function merge1<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}
let person1 = merge1(
    { firstName: "John"},
    { lastName: "Doe"}
)


function merge2<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}
let person2 = merge2(
    { firstName: "John"},
    25
)

// keyof

function prop<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let str = prop({name: "John"}, "name")