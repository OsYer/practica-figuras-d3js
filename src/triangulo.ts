namespace figuras {
    export class Triangulo {
        constructor(private lado: number) {}

        calcularArea(): number {
            const altura = (Math.sqrt(3) / 2) * this.lado; // Altura de un triángulo equilátero
            return (this.lado * altura) / 2;
        }

        calcularPerimetro(): number {
            return 3 * this.lado;
        }
    }

    export class TrianguloUI {
        static render(container: HTMLElement): void {
            container.innerHTML = `
                <h3>Triángulo Equilátero</h3>
                <label>Lado: </label><input type="number" id="ladoTriangulo">
                <button id="calcularTriangulo">Calcular</button>
                <p id="resultadoTriangulo"></p>
                <svg id="svgTriangulo" width="300" height="300"></svg>
            `;

            document.getElementById("calcularTriangulo")!.addEventListener("click", () => {
                // Leer el lado del triángulo
                const lado = parseFloat((document.getElementById("ladoTriangulo") as HTMLInputElement).value);

                // Validación
                if (isNaN(lado) || lado <= 0) {
                    alert("Por favor, ingresa un valor válido para el lado.");
                    return;
                }

                // Crear instancia del triángulo y mostrar resultados
                const triangulo = new Triangulo(lado);
                document.getElementById("resultadoTriangulo")!.innerText = 
                    `Área: ${triangulo.calcularArea().toFixed(2)} | Perímetro: ${triangulo.calcularPerimetro().toFixed(2)}`;

                // Dibujar el triángulo centrado en el SVG
                const svg = d3.select("#svgTriangulo");
                svg.selectAll("*").remove(); // Limpiar dibujo anterior

                const svgWidth = parseFloat(svg.attr("width"));
                const svgHeight = parseFloat(svg.attr("height"));

                // Coordenadas de los vértices del triángulo equilátero
                const x1 = svgWidth / 2; // Vértice superior centrado horizontalmente
                const y1 = (svgHeight - lado * Math.sqrt(3) / 2) / 2; // Vértice superior
                const x2 = (svgWidth - lado) / 2; // Vértice inferior izquierdo
                const y2 = svgHeight - (svgHeight - lado * Math.sqrt(3) / 2) / 2; // Base del triángulo
                const x3 = x2 + lado; // Vértice inferior derecho
                const y3 = y2; // Misma altura que el vértice inferior izquierdo

                // Dibujar el triángulo con D3.js
                svg.append("polygon")
                    .attr("points", `${x1},${y1} ${x2},${y2} ${x3},${y3}`)
                    .attr("fill", "green")
                    .attr("stroke", "black");
            });
        }
    }
}
