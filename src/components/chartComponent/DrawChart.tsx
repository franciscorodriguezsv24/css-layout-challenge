import * as d3 from "d3";

interface DataItem {
  value: number;
  name: string;
  color: string; // Agregar propiedad color
}

type PieArcDatum = d3.PieArcDatum<DataItem>;

const drawChart = (element: HTMLElement, data: DataItem[]): void => {
  const boxSize: number = 500;

  d3.select(element).select("svg").remove(); // Remove the old svg
  // Create new svg

  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "60%")
    .attr("width", "60%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3
    .arc<PieArcDatum>()
    .cornerRadius(20)
    .padAngle(0.1)
    .innerRadius(225)
    .outerRadius(250);

  const pieGenerator = d3
    .pie<DataItem>()
    .startAngle(-0.0 * Math.PI)
    .value((d: DataItem) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d: PieArcDatum) => d.data.color);
};

export default drawChart;
