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
            `;

            document.getElementById("calcularTriangulo")!.addEventListener("click", () => {
                const lado = parseFloat((document.getElementById("ladoTriangulo") as HTMLInputElement).value);
                if (lado <= 0 || isNaN(lado)) {
                    document.getElementById("resultadoTriangulo")!.innerText = "Por favor, ingresa un valor válido para el lado.";
                    return;
                }
                const triangulo = new Triangulo(lado);
                document.getElementById("resultadoTriangulo")!.innerText = `
                    Área: ${triangulo.calcularArea().toFixed(2)} | 
                    Perímetro: ${triangulo.calcularPerimetro().toFixed(2)}
                `;
            });
        }
    }
}
