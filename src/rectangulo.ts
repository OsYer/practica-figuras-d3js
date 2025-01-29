namespace figuras {
    export class Rectangulo {
        constructor(private base: number, private altura: number) {}

        calcularArea(): number {
            return this.base * this.altura;
        }

        calcularPerimetro(): number {
            return 2 * (this.base + this.altura);
        }
    }

    export class RectanguloUI {
        static render(container: HTMLElement): void {
            container.innerHTML = `
                <h3>Rectángulo</h3>
                <label>Base: </label>
                <input type="number" id="baseRectangulo">
                <label>Altura: </label>
                <input type="number" id="alturaRectangulo">
                <button id="calcularRectangulo">Calcular</button>
                <p id="resultadoRectangulo"></p>
                <svg id="svgRectangulo" width="300" height="200"></svg>
            `;

            document.getElementById("calcularRectangulo")!.addEventListener("click", () => {
                // Leer valores de base y altura
                const base = parseFloat((document.getElementById("baseRectangulo") as HTMLInputElement).value);
                const altura = parseFloat((document.getElementById("alturaRectangulo") as HTMLInputElement).value);

                // Validación
                if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                    alert("Por favor, ingresa valores válidos para la base y la altura.");
                    return;
                }

                // Crear instancia del rectángulo
                const rectangulo = new Rectangulo(base, altura);
                document.getElementById("resultadoRectangulo")!.innerText = 
                    `Área: ${rectangulo.calcularArea()} | Perímetro: ${rectangulo.calcularPerimetro()}`;

                // Dibujar el rectángulo centrado en el SVG
                const svg = d3.select("#svgRectangulo");
                svg.selectAll("*").remove(); // Limpiar dibujo anterior

                const svgWidth = parseFloat(svg.attr("width"));
                const svgHeight = parseFloat(svg.attr("height"));
                const xPos = (svgWidth - base) / 2; // Calcular posición x centrada
                const yPos = (svgHeight - altura) / 2; // Calcular posición y centrada

                svg.append("rect")
                    .attr("x", xPos)
                    .attr("y", yPos)
                    .attr("width", base)
                    .attr("height", altura)
                    .attr("fill", "orange")
                    .attr("stroke", "black");
            });
        }
    }
}
