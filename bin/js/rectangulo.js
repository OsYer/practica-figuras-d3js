var figuras;
(function (figuras) {
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        calcularArea() {
            return this.base * this.altura;
        }
        calcularPerimetro() {
            return 2 * (this.base + this.altura);
        }
    }
    figuras.Rectangulo = Rectangulo;
    class RectanguloUI {
        static render(container) {
            container.innerHTML = `
                <h3>Rectángulo</h3>
                <label>Base: </label><input type="number" id="baseRectangulo">
                <label>Altura: </label><input type="number" id="alturaRectangulo">
                <button id="calcularRectangulo">Calcular</button>
                <p id="resultadoRectangulo"></p>
            `;
            document.getElementById("calcularRectangulo").addEventListener("click", () => {
                const base = parseFloat(document.getElementById("baseRectangulo").value);
                const altura = parseFloat(document.getElementById("alturaRectangulo").value);
                const rectangulo = new Rectangulo(base, altura);
                document.getElementById("resultadoRectangulo").innerText = `Área: ${rectangulo.calcularArea()} | Perímetro: ${rectangulo.calcularPerimetro()}`;
            });
        }
    }
    figuras.RectanguloUI = RectanguloUI;
})(figuras || (figuras = {}));
//# sourceMappingURL=rectangulo.js.map