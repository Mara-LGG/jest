# Jest - Ejercicio de pruebas unitarias

Este proyecto contiene una serie de funciones de ejemplo para practicar pruebas unitarias con Jest. Cada función está diseñada para resolver un caso concreto y tiene pruebas que validan su comportamiento correcto, los valores límite y los casos inválidos.

## Instalación

1. Clona o descarga este repositorio.
2. Abre la terminal dentro de la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta las pruebas:

```bash
npm test
```

## Funciones

### 1) calculadoraDescuento(precio, porcentaje)

Calcula el precio final tras aplicar un descuento.

```js
function calculadoraDescuento(precio, porcentaje) {
    if (porcentaje <= 100) {
        let descuento = precio * porcentaje / 100;
        let precioFinal = precio - descuento;
        return precioFinal;
    } else {
        return "Porcentaje inválido";
    }
}
```

#### ¿Qué hace?
- Multiplica el precio por el porcentaje y lo divide entre 100 para obtener el valor del descuento.
- Resta ese descuento del precio original.
- Si el porcentaje es mayor a 100, devuelve un mensaje: `"Porcentaje inválido"`.

#### Casos de prueba
- `calculadoraDescuento(100, 20) === 80`
- `calculadoraDescuento(100, 0) === 100`
- `calculadoraDescuento(100, 100) === 0`
- `calculadoraDescuento(100, 101) === "Porcentaje inválido"`
- `calculadoraDescuento(49.99, 10)` usa `toBeCloseTo` porque el resultado decimal puede tener pequeños errores de precisión.

---

### 2) validarPassword(password)

Valida si una contraseña cumple con una regla básica de seguridad.

```js
function validarPassword(password) {
    return password.length >= 8 && /\d/.test(password);
}
```

#### ¿Qué hace?
- Comprueba que la contraseña tenga al menos 8 caracteres.
- Comprueba que contenga al menos un número.
- Devuelve `true` si ambas condiciones se cumplen, y `false` si no.

#### Casos de prueba
- `validarPassword("segura123") === true`
- `validarPassword("abcd123") === false` porque tiene 7 caracteres.
- `validarPassword("abcd1234") === true` porque tiene 8 caracteres y un número.
- `validarPassword("solotexto") === false` porque no tiene números.
- `validarPassword("") === false` porque está vacía.
- `validarPassword("1solotexto") === true`
- `validarPassword("pass!@#$1") === true`

---

### 3) conversorTemperatura(celsius)

Convierte una temperatura en grados Celsius a Fahrenheit.

```js
function conversorTemperatura(celsius){
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
```

#### ¿Qué hace?
- Aplica la fórmula de conversión:

$$
F = C \times 1.8 + 32
$$

- Devuelve la temperatura equivalente en Fahrenheit.

#### Casos de prueba
- `conversorTemperatura(0) === 32`
- `conversorTemperatura(100) === 212`
- `conversorTemperatura(-40) === -40` porque en esa temperatura ambos sistemas coinciden.
- `conversorTemperatura(36.6)` usa `toBeCloseTo` para comparar con `97.88` de forma precisa.
- `conversorTemperatura(-15) === 5`

---

### 4) mayoriaDeEdad(edad)

Determina si una persona es mayor de edad.

```js
function mayoriaDeEdad(edad){
    if(edad >= 18){
        return true
    } else{
        return false
    }
}
```

#### ¿Qué hace?
- Si la edad es 18 o más, devuelve `true`.
- Si es menor a 18, devuelve `false`.

#### Casos de prueba
- `mayoriaDeEdad(21) === true`
- `mayoriaDeEdad(10) === false`
- `mayoriaDeEdad(17) === false`
- `mayoriaDeEdad(18) === true`
- `mayoriaDeEdad(19) === true`
- `mayoriaDeEdad(0) === false`
- `mayoriaDeEdad(99) === true`

---

### 5) generadorNombreCompleto(nombre, apellido)

Genera un nombre completo combinando nombre y apellido con un espacio.

```js
function generadorNombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}
```

#### ¿Qué hace?
- Concatena dos cadenas de texto.
- Añade un espacio entre ambas para formar un nombre completo correcto.

#### Casos de prueba
- `generadorNombreCompleto("Carlos", "Santana") === "Carlos Santana"`
- `generadorNombreCompleto("J", "K") === "J K"`
- `generadorNombreCompleto("María José", "De la Cruz") === "María José De la Cruz"`

---

## Estructura del proyecto

- `funciones.js`: contiene todas las funciones a probar.
- `funciones.test.js`: incluye las pruebas unitarias con Jest.
- `package.json`: define el script `npm test` y las dependencias.

## Resumen

Este ejercicio permite practicar conceptos básicos de testing con Jest:
- validación de resultados esperados,
- comprobación de casos límite,
- manejo de valores inválidos,
- uso de comparaciones decimales con `toBeCloseTo`.

Es un ejemplo sencillo para entender cómo se prueban funciones JavaScript de forma automatizada.
