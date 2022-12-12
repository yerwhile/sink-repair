import {addPlant} from './field.js'
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn} from './seeds/corn.js'
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

export const plantSeeds = (plan) => {
    for(const row of plan) {
        for(const plant of row) {
            if(plant === "Asparagus") {
                const createdAsparagus = createAsparagus();
                addPlant(createdAsparagus);
            }
            else if(plant === "Corn") {
                const createdCorn = createCorn();
                addPlant(createdCorn);
            }
            else if(plant === "Potato") {
                const createdPotato = createPotato();
                addPlant(createdPotato);
            }
            else if(plant === "Soybean") {
                const createdSoybean = createSoybean();
                addPlant(createdSoybean);
            }
            else if(plant === "Sunflower") {
                const createdSunflower = createSunflower();
                addPlant(createdSunflower);
            }
            else if(plant === "Wheat") {
                const createdWheat = createWheat();
                addPlant(createdWheat);
            }
            else {
                console.log("Invalid seed planted.");
            }
        }
    }
}