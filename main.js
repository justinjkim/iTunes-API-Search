console.log("Talking...");

let url = "https://itunes.apple.com/search?term="
let limit = "&limit=15";
let media = "&media=music"

let main = document.querySelector("main");
let searchBar = document.getElementById("searchBar");
let btnSearch = document.getElementById("btnSearch");

let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", callback, false);

function callback(e) {
	e.preventDefault();
	let user_input = searchBar.value;
	user_input = user_input.replace(/ /g, '%20');

	let search_term = `${url}${user_input}${limit}${media}`;
	console.log(search_term);

	fetch(search_term)
	.then(
		function(response) {
			if (response.status !== 200) {
				console.log("Error type: " + response.status);
			}
			else {
				response.json()
					.then(function(data) {
						main.innerHTML = "";
						let data_copy = data.results;
						let aud = document.getElementById("aud");
						let aud_wrapper = document.getElementById("aud_wrapper");

						// map function
						data_copy.map((content) => {
							//create the div wrapper for each search result
							let profile = document.createElement("div");
							let profile_img = document.createElement("img");
							profile.appendChild(profile_img);
							profile_img.setAttribute("src", `${content.artworkUrl100}`);

							// changes the audio src dynamically when you click on the image
							profile_img.addEventListener("click", function() {
								aud.setAttribute("src", `${content.previewUrl}`);
								aud_wrapper.load();
								aud_wrapper.play();
							})

						

							let profile_song = document.createElement("a");
							profile_song.setAttribute("href", `${content.trackViewUrl}`);
							profile_song.innerHTML = `${content.trackName}`;
							profile.appendChild(profile_song);


							let profile_artist = document.createElement("h4");
							profile_artist.innerHTML = `${content.artistName}`;
							profile.appendChild(profile_artist);

							main.appendChild(profile);
						}) // end of map function

						

					} // end of .then(function(data))
					)
			} // end of else statement
		} // end of .then(function(response) {})
	) // end of .then overall
	.catch(function(err) {
		console.log("Fetch Error :-S", err);
	})
} // end of callback