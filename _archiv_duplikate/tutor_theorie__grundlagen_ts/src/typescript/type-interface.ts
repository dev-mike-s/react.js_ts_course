// Type vs. Interface

// Type

type ObjType = {
    a: Number,
    b: string
}
let ot: ObjType = {
    a: 1,
    b: "b"
}

// Interface

interface ObjInter {
    a: Number,
    b: string
}
let oi: ObjInter = {
    a: 1,
    b: "b"
}

// Primitives

type TextType = string

//interface TextInter string

// Type Intersection

type ObjType1 = {
    a: string
}
type ObjType2 = ObjType1 & {
    b: string
}
let ott: ObjType2 = {
    a: "a",
    b: "b"
}

// Interface Merging

interface ObjInter1 {
    a: string
} // -> LIB

interface ObjInter1 {
    b: string
} // -> CUSTOM
let oim: ObjInter1 = {
    a: "a",
    b: "b"
}
