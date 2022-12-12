import {createPlan} from './plan.js'
import { plantSeeds } from './tractor.js';
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
const plantedField = usePlants();
console.log(plantedField);
const harvestedPlants = harvestPlants(plantedField);

const parentHTMLElement = document.querySelector(".container");
parentHTMLElement.innerHTML = catalog(harvestedPlants);