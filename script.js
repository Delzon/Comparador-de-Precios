function compararPrecios() {
    const precio1 = parseFloat(document.getElementById('precio1').value);
    const cantidad1 = parseFloat(document.getElementById('cantidad1').value);
    const precio2 = parseFloat(document.getElementById('precio2').value);
    const cantidad2 = parseFloat(document.getElementById('cantidad2').value);

    if (isNaN(precio1) || isNaN(cantidad1) || isNaN(precio2) || isNaN(cantidad2)) {
        document.getElementById('resultado').innerText = 'Por favor, ingresa valores válidos.';
        return;
    }

    const precioPorKg1 = precio1 / cantidad1;
    const precioPorKg2 = precio2 / cantidad2;

    let mensaje = '';
    let diferencia = 0;

    if (precioPorKg1 < precioPorKg2) {
        diferencia = ((precioPorKg2 - precioPorKg1) / precioPorKg2) * 100;
        mensaje = `El Producto 1 es más económico: ${precioPorKg1.toFixed(2)} S/ por kg. 
                La diferencia es de ${diferencia.toFixed(2)}% más barato que el Producto 2.`;
    } else if (precioPorKg1 > precioPorKg2) {
        diferencia = ((precioPorKg1 - precioPorKg2) / precioPorKg1) * 100;
        mensaje = `El Producto 2 es más económico: ${precioPorKg2.toFixed(2)} S/ por kg. 
                La diferencia es de ${diferencia.toFixed(2)}% más barato que el Producto 1.`;
    } else {
        mensaje = 'Ambos productos tienen el mismo precio por kilogramo.';
    }

    document.getElementById('resultado').innerText = mensaje;
}