var figuras;
(function (figuras) {
    class Triangulo {
        constructor(lado) {
            this.lado = lado;
        }
        calcularArea() {
            const altura = (Math.sqrt(3) / 2) * this.lado; // Altura de un triángulo equilátero
            return (this.lado * altura) / 2;
        }
        calcularPerimetro() {
            return 3 * this.lado;
        }
    }
    figuras.Triangulo = Triangulo;
    class TrianguloUI {
        static render(container) {
            container.innerHTML = `
                <h3>Triángulo Equilátero</h3>
                <label>Lado: </label><input type="number" id="ladoTriangulo">
                <button id="calcularTriangulo">Calcular</button>
                <p id="resultadoTriangulo"></p>
            `;
            document.getElementById("calcularTriangulo").addEventListener("click", () => {
                const lado = parseFloat(document.getElementById("ladoTriangulo").value);
                if (lado <= 0 || isNaN(lado)) {
                    document.getElementById("resultadoTriangulo").innerText = "Por favor, ingresa un valor válido para el lado.";
                    return;
                }
                const triangulo = new Triangulo(lado);
                document.getElementById("resultadoTriangulo").innerText = `
                    Área: ${triangulo.calcularArea().toFixed(2)} | 
                    Perímetro: ${triangulo.calcularPerimetro().toFixed(2)}
                `;
            });
        }
    }
    figuras.TrianguloUI = TrianguloUI;
})(figuras || (figuras = {}));
//# sourceMappingURL=triangulo.js.map