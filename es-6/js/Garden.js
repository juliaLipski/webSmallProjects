class Garden {
	constructor(name, width, height){
		this.name = name;
		this.width = width;
		this.height = height;
		this.sq = this.width * this.height;
		this.plants = [];

	}
	get Squ() {
		return this.sq;
	}
	set Width(width){
		this.width = width;
	}
	set Height(height){
		this.width = height;
	}
	dwowGarden($contaner){
		this.plants.forEach(item => {item.drow($contaner) })
	}
	render($contaner) {
		$($contaner).html("")
		this.dwowGarden($contaner);
	}
	add(plant) {
		this.plants.push(plant)
	}
	chengeSq(sq) {
		this.sq = this.sq - sq;
	}
	water(value) {
		this.plants.forEach(item => {item.grow(value)})
	}
}
class Plant {
	constructor(imgS, height, growSpeed) {
		this.imgS = imgS;
		this.height = height;
		this.width = '100'
		this.growSpeed = growSpeed;
	}
	grow(liter) {
		this.height = this.height + this.growSpeed * liter;
	}
	drow($contaner) {
		$($contaner).append($("<img>", { src: this.imgS, height: this.height, width: this.width }));
	}
}
class Pl1 extends Plant {
	constructor(){
		super('img/img1.png', 2, 5)
	}
}
class Pl2 extends Plant {
	constructor(){
		super('img/img2.png', 120, 3)
	}
}
class Pl3 extends Plant {
	constructor(){
		super('img/img6.png', 300, 2)
	}
}

