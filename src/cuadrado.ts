namespace figuras {
    export class Cuadrado {
        constructor(private lado: number) {}

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
                <label>Lado: </label><input type="number" id="ladoCuadrado">
                <button id="calcularCuadrado">Calcular</button>
                <p id="resultadoCuadrado"></p>
                
            `;

            document.getElementById("calcularCuadrado")!.addEventListener("click", () => {
                const lado = parseFloat((document.getElementById("ladoCuadrado") as HTMLInputElement).value);
                const cuadrado = new Cuadrado(lado);
                document.getElementById("resultadoCuadrado")!.innerText = `Área: ${cuadrado.calcularArea()} | Perímetro: ${cuadrado.calcularPerimetro()}`;
            
            // Dibujar con D3.js
            const svg = d3.select("#svgCuadrado");
            svg.selectAll("*").remove(); // Limpiar dibujo anterior
            
            svg.append("rect")
                .attr("x", 25)
                .attr("y", 25)
                .attr("width", lado)
                .attr("height", lado)
                .attr("fill", "blue")
                .attr("stroke", "black");
            });

        }
    }
}
