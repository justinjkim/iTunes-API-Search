console.log("Talking...");

let url = "https://itunes.apple.com/search?term="
let limit = "&limit=20";
let entity = "&entity=music"

let searchBar = document.getElementById("searchBar");
let btnSearch = document.getElementById("btnSearch");

let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", callback, false);

function callback(e) {
	e.preventDefault();
	let user_input = searchBar.value;
	let search_term = `${url}${user_input}${limit}${entity}`;
	console.log(search_term);
}