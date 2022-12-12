import { getBookings, getVenues, getBands } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if(itemClicked.id.startsWith("booking")) {
            const [,bookingId] = itemClicked.id.split("--");
            for(const booking of bookings) {
                if(booking.id === parseInt(bookingId)) {
                    for(const band of bands) {
                        if(band.id === booking.bandId) {  
                            window.alert(`${band.name}\n${band.genre}\nFormed in ${band.yearFormed}\n${band.numMembers} band members`);
                        }
                    }
                }
            }
        }
    }
)

// Get copy of state for use in this module
const bands = getBands();
const venues = getVenues();
const bookings = getBookings();

// Function whose responsibility is to find the band for a booking
const findBand = (booking, allBands) => {
    let bookingBand = {};

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band;
        }
    }

    return bookingBand;
}

// Function whose responsibility is to find the venue for a booking
const findVenue = (booking, allVenues) => {
    let bookingVenue = {};

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue;
        }
    }

    return bookingVenue;
}

export const Bookings = () => {
    let html = "";
    html = "<ul>";

    for (const booking of bookings) {
        const band = findBand(booking, bands);
        const venue = findVenue(booking, venues);

        html += `<li id="booking--${booking.id}>${band.name} are playing at ${venue.name} on ${booking.date}</li>`;
    }

    html += "</ul>";

    return html;
}

