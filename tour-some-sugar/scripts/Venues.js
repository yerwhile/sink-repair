import { getBookings, getVenues, getBands } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if(itemClicked.id.startsWith("venue")) {
            const [,venueId] = itemClicked.id.split("--");
            for(const venue of venues) {
                if(venue.id === parseInt(venueId)) {
                    const bookedVenues = filterVenuesByBooking(venue);
                    const bookedBands = scheduledBands(bookedVenues);

                    window.alert(`${venue.name} has booked ${bookedBands}`);
                }
            }
        }
    }
)

const bands = getBands();
const venues = getVenues();
const bookings = getBookings();

const filterVenuesByBooking = (venueObj) => {
    const bookingVenues = [];
    for(const booking of bookings) {
        if(booking.venueId === venueObj.id) {
            bookingVenues.push(booking);
        }
    }
    return bookingVenues;
}

const scheduledBands = (bookingVenuesArr) => {
    let bandsStr = "";
    for(const bookingVenue of bookingVenuesArr) {
        for(const band of bands) {
            if(band.id === bookingVenue.bandId) {
                bandsStr += ` "${band.name}"`
            }
        }
    }
    return bandsStr;
}

export const Venues = () => {
    let html = "<ui>";

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>";

    return html;
}