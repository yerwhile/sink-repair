import { getBookings, getVenues, getBands } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if(itemClicked.id.startsWith("band")) {
            const [,bandId] = itemClicked.id.split("--");
            for(const band of bands) {
                if(band.id === parseInt(bandId)) {
                    const bookedBands = filterBandsByBooking(band);
                    const bookedVenues = scheduledVenues(bookedBands);

                    window.alert(`${band.name} is playing ${bookedVenues}`);
                }
            }
        }
    }
)

const bands = getBands();
const venues = getVenues();
const bookings = getBookings();

const filterBandsByBooking = (bandObj) => {
    const bookingBands = [];
    for(const booking of bookings) {
        if(booking.bandId === bandObj.id) {
            bookingBands.push(booking);
        }
    }
    return bookingBands;
}

const scheduledVenues = (bookingBandsArr) => {
    let venuesStr = "";
    for(const bookingBand of bookingBandsArr) {
        for(const venue of venues) {
            if(venue.id === bookingBand.venueId) {
                venuesStr += ` "${venue.name}"`
            }
        }
    }
    return venuesStr;
}

export const Bands = () => {
    let html = "<ui>";

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>";

    return html;
}