// Functions

function getValue1(a: string) {
}

function getValue2(a: string): void {
}

function addTwoNumbers(a: number, b: number) {
    return a + b
}

function listTwoValues(a: number, b: string): (string | number)[] {
    return [a, b]
}

// Arrow Function

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b
}

// Function Type

const getValue3: (a: string) => void = (a) => {
}

const listTwoValues1: (a: number, b: string) => (string | number)[] = (a, b) => {
    return [a, b]
}

// Function Type Alias

type Fn4Type = (a: string) => void

const getValue4: Fn4Type = (a) => {
}
