const field = [];

export const addPlant = (seedObj) => {
    if(Array.isArray(seedObj)) {
        for(const seed of seedObj) {
            field.push(seed)
        }
    }
    else {
        field.push(seedObj)
    }

}

export const usePlants = () => {
    return field.map(fieldObj => ({...fieldObj}));
}