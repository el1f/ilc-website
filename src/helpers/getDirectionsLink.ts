export function getDirectionsLink(
	coordinates: [lat: number, lon: number],
	address?: string,
) {
	const coordsDirectionsLink = `https://www.google.com/maps/search/?api=1&query=${
		!address ? encodeURIComponent(coordinates.join(",") ?? "") : ""
	}${encodeURIComponent(address ?? "")}`;

	return coordsDirectionsLink;
}
