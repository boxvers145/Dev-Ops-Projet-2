const greet = require('../greet')

//Test number 1

test('greet function returns greeting', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
})

//Test number 2

test('greet function check null, undefined, and empty string', () => {
    expect(greet(null)).toBe('Hello, my friend.')
    expect(greet(undefined)).toBe('Hello, my friend.')
    expect(greet('')).toBe('Hello, my friend.')
})

//Test number 3

test('greet function check only uppercase name', () => {
    expect(greet('KENOBI')).toBe('HELLO, KENOBI!')
})

//Test number 4

test('greet function check two names', () => {
    expect(greet(['Kratos', 'Thanathos'])).toBe('Hello, Kratos and Thanathos.')
})

//Test number 5

test('greet function check more than two names', () => {
    expect(greet(['Kratos', 'Thanathos', 'Hypnos'])).toBe(
        'Hello, Kratos, Thanathos and Hypnos.'
    )
})

//Test number 6

test('greet function check more names with normal and uppercase', () => {
    expect(greet(['KRATOS', 'Thanathos', 'Hypnos'])).toBe(
        'Hello, Thanathos and Hypnos. AND HELLO KRATOS!'
    )
})

//Test number 7

test('greet multiple languages', () => {
    expect(greet(['Kratos', 'Thanatos', 'fr'])).toBe(
        'Bonjour, Kratos et Thanatos.'
    )
})
