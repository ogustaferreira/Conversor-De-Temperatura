function enviar() {
    var temperaturaCelsius = parseFloat(document.getElementById("valorPassado").value);
    var temperaturaFahrenheit = (9 * temperaturaCelsius) / 5 + 32;
    var temperaturaKelvin = temperaturaCelsius + 273;

    alert(
        "A temperatura " +
        temperaturaCelsius +
        "°C equivale a " +
        temperaturaFahrenheit +
        "°F e " +
        temperaturaKelvin +
        "K"
    );
    document.getElementById("valorPassado").value = "";
}

