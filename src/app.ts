namespace app {
    export function ini() {
        const body = d3.select("body");

        body.append("h1").text("Calculadora de Figuras Geométricas");

        body.append("label").text("Selecciona una figura: ");
        const selector = body.append("select").attr("id", "figuraSelector");

        selector.selectAll("option")
            .data(["Rectángulo", "Cuadrado", "Triángulo", "Círculo"])
            .enter()
            .append("option")
            .text(d => d)
            .attr("value", d => d.toLowerCase());

        body.append("div").attr("id", "figuraContainer");

        selector.on("change", actualizarUI);
        actualizarUI();
    }

    function actualizarUI(): void {
        const figuraSeleccionada = d3.select("#figuraSelector").property("value");
        const figuraContainer = document.getElementById("figuraContainer")!;
        figuraContainer.innerHTML = "";

        if (figuraSeleccionada === "rectángulo") {
            figuras.RectanguloUI.render(figuraContainer);
        } else if (figuraSeleccionada === "cuadrado") {
            figuras.CuadradoUI.render(figuraContainer);
        } else if (figuraSeleccionada === "triángulo") {
            figuras.TrianguloUI.render(figuraContainer);
        } else if (figuraSeleccionada === "círculo") {
            figuras.CirculoUI.render(figuraContainer);
        }
    }
}
