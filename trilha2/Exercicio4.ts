class Temperatura {
    celsius: number;

    constructor(celsius: number) {
        this.celsius = celsius;
    }

    converterParaFahrenheit(): number {
        return (this.celsius * 9 / 5) + 32;
    }

    converterParaKelvin(): number {
        return this.celsius + 273.15;
    }
}

const temp = new Temperatura(25);

const fahrenheit = temp.converterParaFahrenheit();
const kelvin = temp.converterParaKelvin();

console.log(`Temperatura Original: ${temp.celsius}°C`);
console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
console.log(`Temperatura em Kelvin: ${kelvin.toFixed(2)}K`);

const tempCongelamento = new Temperatura(0);
console.log(`\nÁgua congelando a ${tempCongelamento.celsius}°C é igual a ${tempCongelamento.converterParaFahrenheit()}°F.`);