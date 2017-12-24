angular.module('angularModule').component("map", {
    templateUrl: "./component/map.html",
    controller: function ($scope, MapFactory) {
        var self = this;
        $scope.initialize = function () {
            var uluru = { lat: 32.109333, lng: 34.855499 };
            MapFactory.createMap(uluru);
        }
        google.maps.event.addDomListener(window, 'load', $scope.initialize);
    }
})
