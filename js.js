const svg = d3.select('svg');

var rect = document.getElementById('svg').getBoundingClientRect(); // get the bounding rectangle
const width = Number(rect.width);
const height = Number(rect.height);

const projection = d3
	.geoMercator()
	.scale(250)
	.translate([width / 2, height / 2]);
const pathGenerator = d3.geoPath().projection(projection);

const data = JSON.parse(mapjson);

//TOPO
//const collection = topojson.feature(data, data.objects.collection);
//

console.log(data);

const paths = svg.selectAll('path').data(data.features);
paths
	.enter()
	.append('path')
	.attr('d', (d) => pathGenerator(d));

$('path').on('click', function () {
	console.log(data.features[$('path').index(this)].properties.name);
});

//GAME

const players = 4;
const startTropper = 12;
let turn = 0;

class Player {
	constructor(name) {
		this.name = name;
		this.countries = [];
		this.disposableTroops = startTropper;
	}
}

const names = [
	'Garry Chess',
	'Hans',
	'Ghandi',
	'Joe Biden',
	'Trump',
	'Magnus Carlsen',
	'FNs fredsbevarende styrker',
	'Han Solo',
	'Zevs',
	'Lege i alt',
	'Franklin',
];
