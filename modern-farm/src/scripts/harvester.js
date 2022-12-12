export const harvestPlants = (plantsArr) => {
    const seedObjArr = [];
    for(const plantObj of plantsArr) {
        if(plantObj.type === "Corn") {
            const cornOutput = plantObj.output / 2;
            for(let x = 0; x < cornOutput; x++) {
                seedObjArr.push(plantObj);
            }
        }
        else{ 
            for(let x = 0; x < plantObj.output; x++) {
                seedObjArr.push(plantObj);
            }
        }
    }
    console.log(seedObjArr);
    return seedObjArr;
}