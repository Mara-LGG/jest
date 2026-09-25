const {
    calculadoraDescuento,
    validarPassword,
    conversorTemperatura,
    mayoriaDeEdad,
    generadorNombreCompleto
} = require('./funciones');

test('Casos correctos: aplica descuento correctamente', () => {
    expect(calculadoraDescuento(100, 20)).toBe(80);
});

test('Valores límite: 0% y 100%', () => {
    expect(calculadoraDescuento(100, 0)).toBe(100);
    expect(calculadoraDescuento(100, 100)).toBe(0);
});

test('Casos inválidos: porcentaje mayor a 100', () => {
    expect(calculadoraDescuento(100, 101)).toBe("Porcentaje inválido");
});

test('Diferentes combinaciones: precios y porcentajes decimales', () => {
    expect(calculadoraDescuento(49.99, 10)).toBeCloseTo(44.991);
});



test('Casos correctos: cumple longitud y contiene número', () => {
    expect(validarPassword("segura123")).toBe(true);
});

test('Valores límite: longitud de 7 vs 8 caracteres', () => {
    expect(validarPassword("abcd123")).toBe(false); // 7 caracteres
    expect(validarPassword("abcd1234")).toBe(true);  // 8 caracteres
});

test('Casos inválidos: sin números o cadena vacía', () => {
    expect(validarPassword("solotexto")).toBe(false);
    expect(validarPassword("")).toBe(false);
});

test('Diferentes combinaciones: posición del número y caracteres especiales', () => {
    expect(validarPassword("1solotexto")).toBe(true);
    expect(validarPassword("pass!@#$1")).toBe(true);
});



test('Casos correctos: punto de congelación y ebullición', () => {
    expect(conversorTemperatura(0)).toBe(32);
    expect(conversorTemperatura(100)).toBe(212);
});

test('Valores límite: escala cruzada a -40 grados', () => {
    expect(conversorTemperatura(-40)).toBe(-40);
});

test('Diferentes combinaciones: decimales y temperaturas bajo cero', () => {
    expect(conversorTemperatura(36.6)).toBeCloseTo(97.88);
    expect(conversorTemperatura(-15)).toBe(5);
});



test('Casos correctos: evalúa mayores y menores', () => {
    expect(mayoriaDeEdad(21)).toBe(true);
    expect(mayoriaDeEdad(10)).toBe(false);
});

test('Valores límite: 17, 18 y 19 años', () => {
    expect(mayoriaDeEdad(17)).toBe(false);
    expect(mayoriaDeEdad(18)).toBe(true);
    expect(mayoriaDeEdad(19)).toBe(true);
});

test('Diferentes combinaciones: valores extremos', () => {
    expect(mayoriaDeEdad(0)).toBe(false);
    expect(mayoriaDeEdad(99)).toBe(true);
});



test('Casos correctos: concatena nombre y apellido con espacio', () => {
    expect(generadorNombreCompleto("Carlos", "Santana")).toBe("Carlos Santana");
});

test('Valores límite: iniciales o caracteres individuales', () => {
    expect(generadorNombreCompleto("J", "K")).toBe("J K");
});

test('Diferentes combinaciones: nombres compuestos, acentos y espacios', () => {
    expect(generadorNombreCompleto("María José", "De la Cruz")).toBe("María José De la Cruz");
});