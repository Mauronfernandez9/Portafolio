document.addEventListener("DOMContentLoaded", () => {
    let data = [
        { date: new Date(2023, 0, 1), name: "Desarrollador en python (Instituto Tecnologico Tucuman - Argentina)" },
        { date: new Date(2024, 0, 1), name: "Desarrollo Full stack python (Codo a codo)" },
        { date: new Date(2024, 0, 1), name: "Habilidades blandas (Codo a codo)" },
        { date: new Date(2024, 0, 1), name: "Html, css, js (Alura)" }
    ];

    let margin = { top: 20, right: 20, bottom: 20, left: 20 };
    let container = document.querySelector(".contenedor-linea-de-tiempo");
    let width = container.clientWidth - margin.left - margin.right;
    let height = container.clientHeight - margin.top - margin.bottom;

    let svg = d3.select("#linea-de-tiempo")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleTime().domain(d3.extent(data, d => d.date)).range([0, width]);

    // Simulación de los datos
    data.forEach(d => {
        d.x = x(d.date);
        d.y = height / 2;
    });

    let dotLayer = svg.append("g");
    let labelLayer = svg.append("g");

    dotLayer.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 5)
        .style("fill", "blue");

    labelLayer.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', d => d.x)
        .attr('y', d => d.y - 10)
        .attr('text-anchor', 'middle')
        .text(d => d.name);
});
