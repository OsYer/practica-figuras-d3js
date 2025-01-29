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
                <label>Base: </label><input type="number" id="baseRectangulo">
                <label>Altura: </label><input type="number" id="alturaRectangulo">
                <button id="calcularRectangulo">Calcular</button>
                <p id="resultadoRectangulo"></p>
            `;

            document.getElementById("calcularRectangulo")!.addEventListener("click", () => {
                const base = parseFloat((document.getElementById("baseRectangulo") as HTMLInputElement).value);
                const altura = parseFloat((document.getElementById("alturaRectangulo") as HTMLInputElement).value);
                const rectangulo = new Rectangulo(base, altura);
                document.getElementById("resultadoRectangulo")!.innerText = `Área: ${rectangulo.calcularArea()} | Perímetro: ${rectangulo.calcularPerimetro()}`;
            });
        }
    }
}
