namespace figuras {
    export class Circulo {
        constructor(private radio: number) {}

        calcularArea(): number {
            return Math.PI * this.radio * this.radio;
        }

        calcularPerimetro(): number {
            return 2 * Math.PI * this.radio;
        }
    }

    export class CirculoUI {
        static render(container: HTMLElement): void {
            container.innerHTML = `
                <h3>Círculo</h3>
                <label>Radio: </label><input type="number" id="radioCirculo">
                <button id="calcularCirculo">Calcular</button>
                <p id="resultadoCirculo"></p>
                <svg id="svgCirculo" width="300" height="300"></svg>
            `;

            document.getElementById("calcularCirculo")!.addEventListener("click", () => {
                // Leer el radio del círculo
                const radio = parseFloat((document.getElementById("radioCirculo") as HTMLInputElement).value);

                // Validación
                if (isNaN(radio) || radio <= 0) {
                    alert("Por favor, ingresa un valor válido para el radio.");
                    return;
                }

                // Crear instancia del círculo y mostrar resultados
                const circulo = new Circulo(radio);
                document.getElementById("resultadoCirculo")!.innerText = 
                    `Área: ${circulo.calcularArea().toFixed(2)} | Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`;

                // Dibujar el círculo centrado en el SVG
                const svg = d3.select("#svgCirculo");
                svg.selectAll("*").remove(); // Limpiar dibujo anterior

                const svgWidth = parseFloat(svg.attr("width"));
                const svgHeight = parseFloat(svg.attr("height"));
                const cx = svgWidth / 2; // Coordenada x del centro del círculo
                const cy = svgHeight / 2; // Coordenada y del centro del círculo

                svg.append("circle")
                    .attr("cx", cx)
                    .attr("cy", cy)
                    .attr("r", radio)
                    .attr("fill", "red")
                    .attr("stroke", "black");
            });
        }
    }
}
