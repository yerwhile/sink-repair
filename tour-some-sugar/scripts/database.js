const database = {
    bands: [{
        id: 1,
        name: "The Burning Monks",
        numMembers: 3,
        genre: "punk",
        yearFormed: 2006
    }, {
        id: 2,
        name: "The F*ck You George Washington's",
        numMembers: 4,
        genre: "punk",
        yearFormed: 2011
    }, {
        id: 3,
        name: "Belize Felice",
        numMembers: 1,
        genre: "songwriter",
        yearFormed: 2009
    }, {
        id: 4,
        name: "Aunt Agony",
        numMembers: 3,
        genre: "metal",
        yearFormed: 2015
    }, {
        id: 5,
        name: "Reprovision",
        numMembers: 4,
        genre: "post-punk",
        yearFormed: 2017
    }, {
        id: 6,
        name: "The Living Inn",
        numMembers: 2,
        genre: "metal",
        yearFormed: 2004
    }, {
        id: 7,
        name: "Typeof Generator",
        numMembers: 1,
        genre: "electronic",
        yearFormed: 2012
    }, {
        id: 8,
        name: "Cal Crucis",
        numMembers: 1,
        genre: "songwriter",
        yearFormed: 2017
    }, {
        id: 9,
        name: "The Pillow Books",
        numMembers: 2,
        genre: "ambient",
        yearFormed: 1996
    }, {
        id: 10,
        name: "Skids in the Hall",
        numMembers: 4,
        genre: "post-punk",
        yearFormed: 2014
    }],
    venues: [{
        id: 1,
        name: "The Long Cool Drink",
        address: "58 Splash Ave",
        squareFootage: 2000,
        maxOccupancy: 60
    }, {
        id: 2,
        name: "Tammy & Nee's Hall",
        address: "104 Splash Ave",
        squareFootage: 2200,
        maxOccupancy: 66
    }, {
        id: 3,
        name: "Involutions",
        address: "5760 Backward Blvd",
        squareFootage: 3000,
        maxOccupancy: 60
    }, {
        id: 4,
        name: "Sal's Sell Out",
        address: "100 Downtrodden Ln",
        squareFootage: 1500,
        maxOccupancy: 50
    }, {
        id: 5,
        name: "Around the Bend",
        address: "99 Barnyard Rd",
        squareFootage: 2000,
        maxOccupancy: 64
    }],
    bookings: [{
        id: 1,
        bandId: 8,
        venueId: 5,
        date: "11/30/2022"
    }, {
        id: 2,
        bandId: 5,
        venueId: 5,
        date: "11/30/2022"
    }, {
        id: 3,
        bandId: 10,
        venueId: 1,
        date: "12/25/2022"
    }, {
        id: 4,
        bandId: 9,
        venueId: 3,
        date: "1/30/2023"
    }, {
        id: 5,
        bandId: 6,
        venueId: 3,
        date: "3/15/2023"
    }, {
        id: 6,
        bandId: 2,
        venueId: 2,
        date: "2/12/2023"
    }, {
        id: 7,
        bandId: 5,
        venueId: 2,
        date: "2/12/2023"
    }, {
        id: 8,
        bandId: 7,
        venueId: 1,
        date: "12/25/2022"
    }, {
        id: 9,
        bandId: 9,
        venueId: 5,
        date: "1/30/2023"
    }, {
        id: 10,
        bandId: 4,
        venueId: 2,
        date: "4/26/2023"
    }, {
        id: 11,
        bandId: 6,
        venueId: 4,
        date: "2/24/2023"
    }, {
        id: 12,
        bandId: 1,
        venueId: 1,
        date: "12/10/2022"
    }, {
        id: 13,
        bandId: 4,
        venueId: 1,
        date: "4/26/2023"
    }, {
        id: 14,
        bandId: 8,
        venueId: 1,
        date: "4/26/2023"
    }, {
        id: 15,
        bandId: 7,
        venueId: 2,
        date: "3/30/2023"
    }, {
        id: 16,
        bandId: 7,
        venueId: 3,
        date: "3/30/2023"
    }, {
        id: 17,
        bandId: 10,
        venueId: 5,
        date: "1/01/2023"
    }, {
        id: 18,
        bandId: 3,
        venueId: 2,
        date: "4/01/2023"
    }, {
        id: 19,
        bandId: 3,
        venueId: 2,
        date: "4/03/2023"
    }, {
        id: 20,
        bandId: 2,
        venueId: 4,
        date: "12/17/2023"
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}));
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}));
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}));
}