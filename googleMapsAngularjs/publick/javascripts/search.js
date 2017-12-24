angular.module('angularModule').component("search", {
    templateUrl: "./component/search.html",
    controller: function ($scope, MapFactory, FilterFactory) {
        var self = this;
        self.data = FilterFactory.getData()
        
        google.maps.event.addDomListener(window, 'load', function () {
            var options = {
                componentRestrictions: { country: "in" }
            };
            var input = window.document.getElementById('inp');
            var autocomplete = new google.maps.places.Autocomplete(input);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                self.dt = place.formatted_address;
                self.lt = place.geometry.location.lat();
                self.lg = place.geometry.location.lng();
                $scope.$apply();
            });
        })

        this.createAutoComplete = function () {
            var uluru = { lat: self.lt, lng: self.lg };
            var R = 6371000;
            var lat1 = self.lt;
            var lon1 = self.lg;
            var s = [];
            var toRadians = function (degree) {
                return degree * (Math.PI / 180);
            };
            var φ1 = toRadians(lat1);
            this.data.map(item => {
                var lat2 = item.lat;
                var lon2 = item.long;
                var φ2 = toRadians(lat2);
                var Δφ = toRadians(lat2 - lat1);
                var Δλ = toRadians(lon2 - lon1);
                var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                if (d <= 20000) {
                    s.push(item)
                }
            })
            MapFactory.createMap(uluru, s);
            FilterFactory.setData(s);
        }
    }
})