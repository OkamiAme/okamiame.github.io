let game = {
	milk: 1.5,
}

function buyCow(){
		game.milk += 1
}
//saves data
function save() {
    localStorage.setItem("milk_data",JSON.stringify(game))
}
//resets data
function datareset(){
	game.milk = 1.5
	save()
}
//loads data (maybe)
function load(save_file) {
	let savegame = save_file
	if (savegame !== null) {
		game = savegame
	}
}
//tick
function tick(){
	game.milk += game.accumulation
	game.milk = Math.round(game.milk*100)/100
	document.getElementById("milk").innerHTML = "Milk "+game.milk
	document.getElementById("accumulation").innerHTML = game.accumulation+" milk/s"
}

setInterval(function() {
    tick()
}, 100)

setInterval(function() {
    save()
}, 5000)


load(JSON.parse(localStorage.getItem("milk_data")))