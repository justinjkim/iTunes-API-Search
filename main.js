let url = "https://itunes.apple.com/search?term="
let limit = "&limit=20";
let entity = "&entity=music"

let searchBar = document.getElementById("searchBar");
let btnSearch = document.getElementById("btnSearch");

function search() {
	let user_input = searchBar.value;
	let search_term = `${url}${user_input}${limit}${entity}`;
}