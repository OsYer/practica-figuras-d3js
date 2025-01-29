namespace figuras {
    export class Cuadrado {
        constructor(private lado: number) { }

        calcularArea(): number {
            return this.lado * this.lado;
        }

        calcularPerimetro(): number {
            return 4 * this.lado;
        }
    }

    export class CuadradoUI {
        static render(container: HTMLElement): void {
            container.innerHTML = `
                <h3>Cuadrado</h3>
                <label>Lado: </label>
                <input type="number" id="ladoCuadrado">
                <button id="calcularCuadrado">Calcular</button>
                <p id="resultadoCuadrado"></p>
                <svg id="svgCuadrado" width="200" height="200"></svg>
            `;

            document.getElementById("calcularCuadrado")!.addEventListener("click", () => {
                const lado = parseFloat((document.getElementById("ladoCuadrado") as HTMLInputElement).value);

                if (isNaN(lado) || lado <= 0) {
                    alert("Por favor, ingresa un valor válido para el lado.");
                    return;
                }

                const cuadrado = new Cuadrado(lado);
                document.getElementById("resultadoCuadrado")!.innerText =
                    `Área: ${cuadrado.calcularArea()} | Perímetro: ${cuadrado.calcularPerimetro()}`;

                // Dibujar el cuadrado centrado en el SVG
                const svg = d3.select("#svgCuadrado");
                svg.selectAll("*").remove(); // Limpiar dibujo anterior

                const svgWidth = parseFloat(svg.attr("width"));
                const svgHeight = parseFloat(svg.attr("height"));
                const xPos = (svgWidth - lado) / 2; // Calcular posición x centrada
                const yPos = (svgHeight - lado) / 2; // Calcular posición y centrada

                svg.append("rect")
                    .attr("x", xPos)
                    .attr("y", yPos)
                    .attr("width", lado)
                    .attr("height", lado)
                    .attr("fill", "blue")
                    .attr("stroke", "black");
            });
        }
    }
}
