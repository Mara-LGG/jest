function calculadoraDescuento(precio, porcentaje) {
    if (porcentaje <= 100) {
        let descuento = precio * porcentaje / 100;
        let precioFinal = precio - descuento;
        return precioFinal;
    } else {
        return "Porcentaje inválido";
    };

};


function validarPassword(password) {
    return password.length >= 8 && /\d/.test(password);
};

function conversorTemperatura(celsius){
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
};

function mayoriaDeEdad(edad){
    if(edad >= 18){
        return true
    } else{
        return false
    };

};

function generadorNombreCompleto(nombre,apellido){
    return nombre + " " + apellido;

};

module.exports = {
    calculadoraDescuento,
    validarPassword,
    conversorTemperatura,
    mayoriaDeEdad,
    generadorNombreCompleto
};