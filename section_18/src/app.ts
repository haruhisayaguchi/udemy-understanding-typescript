import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "";

type responseType = {
	results: {
		geometry: {
			location: {
				lat: number,
				lng: number
			}
		}
	}[];
	status: "OK" | "ZERO_RESULTS";
}

function searchAddressHandler(event: Event) {
	event.preventDefault();
	const address = addressInput.value;

	// send this to Google's API
	axios.get<responseType>(`https://maps.googleapis.com/map/sapi/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_API_KEY}`)
		.then(response => {
			if (response.data.status !== "OK") {
				throw new Error("Could not fetch location")
			}
			const coordinates = response.data.results[0].geometry.location;
			const map = new google.maps.Map(document.getElementById("map")!, {
				center: coordinates,
				zoom: 8,
			})
			new google.maps.Marker({ position: coordinates, map })
		})
		.catch(error => {
			alert(error.message);
			console.log(error)
		})
		;
}

form.addEventListener("submit", searchAddressHandler)