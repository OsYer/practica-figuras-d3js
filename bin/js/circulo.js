var figuras;
(function (figuras) {
    class Circulo {
        constructor(radio) {
            this.radio = radio;
        }
        calcularArea() {
            return Math.PI * this.radio * this.radio;
        }
        calcularPerimetro() {
            return 2 * Math.PI * this.radio;
        }
    }
    figuras.Circulo = Circulo;
    class CirculoUI {
        static render(container) {
            container.innerHTML = `
                <h3>Círculo</h3>
                <label>Radio: </label><input type="number" id="radioCirculo">
                <button id="calcularCirculo">Calcular</button>
                <p id="resultadoCirculo"></p>
            `;
            document.getElementById("calcularCirculo").addEventListener("click", () => {
                const radio = parseFloat(document.getElementById("radioCirculo").value);
                const circulo = new Circulo(radio);
                document.getElementById("resultadoCirculo").innerText = `Área: ${circulo.calcularArea().toFixed(2)} | Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`;
            });
        }
    }
    figuras.CirculoUI = CirculoUI;
})(figuras || (figuras = {}));
//# sourceMappingURL=circulo.js.map