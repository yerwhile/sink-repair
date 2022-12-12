{/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */}


const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const compy = {
	id: 1,
	manufacturer: "Windows",
	make: "Dell",
	model: "XP",
	specs: {
		memory: 32,
		hardDrive: "1 TB",
		processor: 2.8
	}
}

const htmlerComputer = (obj) => {
    const htmlComputer = `<section id="computer--${obj.id}">
    <h1>${obj.manufacturer} ${obj.make}</h1>
    <div>Model: ${obj.model}</div>
    <div>Memory: ${obj.specs.memory} GB</div>
    <div>Hard drive space: ${obj.specs.hardDrive}</div>
    <div>Processor speed: ${obj.specs.processor} Ghz</div>
    </section>`

    return htmlComputer;
}

const htmlizedComputer = htmlerComputer(computer);
const htmlizedCompy = htmlerComputer(compy);

console.log(htmlizedComputer);
console.log(htmlizedCompy);