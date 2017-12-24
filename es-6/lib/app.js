"use strict";

$(document).ready(function () {
    var garden = new Garden('garden', 800, 800);
    garden.add(new Pl1());
    garden.add(new Pl2());
    garden.water(10);
    garden.render("#nav");
    garden.add(new Pl3());
    garden.add(new Pl2());
    garden.render("#nav");
    garden.add(new Pl3());
    garden.water(10);
    garden.render("#nav");
    addClick(garden);
    console.log(garden);
});

function addClick(garden) {
    $("#addPl1").click(function () {
        garden.add(new Pl1());
        garden.render("#nav");
    });
    $("#addPl2").click(function () {
        garden.add(new Pl2());
        garden.render("#nav");
    });
    $("#addPl3").click(function () {
        garden.add(new Pl3());
        garden.render("#nav");
    });
    $("#addW").click(function () {
        garden.water(2);
        garden.render("#nav");
    });
}