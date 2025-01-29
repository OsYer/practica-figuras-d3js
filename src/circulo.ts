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
            `;

            document.getElementById("calcularCirculo")!.addEventListener("click", () => {
                const radio = parseFloat((document.getElementById("radioCirculo") as HTMLInputElement).value);
                const circulo = new Circulo(radio);
                document.getElementById("resultadoCirculo")!.innerText = `Área: ${circulo.calcularArea().toFixed(2)} | Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`;
            });
        }
    }
}
