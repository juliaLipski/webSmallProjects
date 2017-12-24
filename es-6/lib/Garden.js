"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Garden = function () {
	function Garden(name, width, height) {
		_classCallCheck(this, Garden);

		this.name = name;
		this.width = width;
		this.height = height;
		this.sq = this.width * this.height;
		this.plants = [];
	}

	_createClass(Garden, [{
		key: "dwowGarden",
		value: function dwowGarden($contaner) {
			this.plants.forEach(function (item) {
				item.drow($contaner);
			});
		}
	}, {
		key: "render",
		value: function render($contaner) {
			$($contaner).html("");
			this.dwowGarden($contaner);
		}
	}, {
		key: "add",
		value: function add(plant) {
			this.plants.push(plant);
		}
	}, {
		key: "chengeSq",
		value: function chengeSq(sq) {
			this.sq = this.sq - sq;
		}
	}, {
		key: "water",
		value: function water(value) {
			this.plants.forEach(function (item) {
				item.grow(value);
			});
		}
	}, {
		key: "Squ",
		get: function get() {
			return this.sq;
		}
	}, {
		key: "Width",
		set: function set(width) {
			this.width = width;
		}
	}, {
		key: "Height",
		set: function set(height) {
			this.width = height;
		}
	}]);

	return Garden;
}();

var Plant = function () {
	function Plant(imgS, height, growSpeed) {
		_classCallCheck(this, Plant);

		this.imgS = imgS;
		this.height = height;
		this.width = '100';
		this.growSpeed = growSpeed;
	}

	_createClass(Plant, [{
		key: "grow",
		value: function grow(liter) {
			this.height = this.height + this.growSpeed * liter;
		}
	}, {
		key: "drow",
		value: function drow($contaner) {
			$($contaner).append($("<img>", { src: this.imgS, height: this.height, width: this.width }));
		}
	}]);

	return Plant;
}();

var Pl1 = function (_Plant) {
	_inherits(Pl1, _Plant);

	function Pl1() {
		_classCallCheck(this, Pl1);

		return _possibleConstructorReturn(this, (Pl1.__proto__ || Object.getPrototypeOf(Pl1)).call(this, 'img/img1.png', 2, 5));
	}

	return Pl1;
}(Plant);

var Pl2 = function (_Plant2) {
	_inherits(Pl2, _Plant2);

	function Pl2() {
		_classCallCheck(this, Pl2);

		return _possibleConstructorReturn(this, (Pl2.__proto__ || Object.getPrototypeOf(Pl2)).call(this, 'img/img2.png', 120, 3));
	}

	return Pl2;
}(Plant);

var Pl3 = function (_Plant3) {
	_inherits(Pl3, _Plant3);

	function Pl3() {
		_classCallCheck(this, Pl3);

		return _possibleConstructorReturn(this, (Pl3.__proto__ || Object.getPrototypeOf(Pl3)).call(this, 'img/img6.png', 300, 2));
	}

	return Pl3;
}(Plant);