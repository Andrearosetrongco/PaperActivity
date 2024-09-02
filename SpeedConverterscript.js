function convert() {
    const kph = document.getElementById('kph').value;
    if (kph !== '') {
        const mph = (kph * 0.621371).toFixed(2); // Conversion formula
        document.getElementById('mph').value = mph;
    } else {
        alert("Please enter a value in Kph.");
    }
}
