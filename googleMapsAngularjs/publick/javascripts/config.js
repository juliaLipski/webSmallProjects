var app = angular.module('angularModule', [])
app.factory('DataFactory', ['$http', function ($http) {
    // an.factory('ListDone', ['$http', function ($http) {
    var Citys = [
        {
            "id": "1",
            "branch": "branch 1",
            "city": "Tel Aviv",
            "lat": "32.109333",
            "long": "34.855499"
        },
        {
            "id": "2",
            "branch": "branch 2",
            "city": "Nataniya",
            "lat": "32.699635",
            "long": "35.303547"
        },
        {
            "id": "3",
            "branch": "branch 3",
            "city": "Hercliya",
            "lat": "32.167555",
            "long": "34.84926589999998"
        },
        {
            "id": "4",
            "branch": "branch 4",
            "city": "Bney Brak",
            "lat": "32.0998145",
            "long": "34.82955259999994"
        },
        {
            "id": "5",
            "branch": "branch 5",
            "city": "Ashdod",
            "lat": "31.776238",
            "long": "34.66428300000007"
        },
        {
            "id": "6",
            "branch": "branch 6",
            "city": "Elat",
            "lat": "29.5654557",
            "long": "34.95537439999998"
        },
        {
            "id": "7",
            "branch": "branch 8",
            "city": "Holon",
            "lat": "32.018393",
            "long": "34.76387019999993"
        },
        {
            "id": "8",
            "branch": "branch 9",
            "city": "Hifa",
            "lat": "32.8318173",
            "long": "34.97963949999996"
        },
        {
            "id": "9",
            "branch": "branch 11",
            "city": "Afula",
            "lat": "32.6196864",
            "long": "35.31227630000001"
        },
        {
            "id": "10",
            "branch": "branch 12",
            "city": "Reashon LeTsion",
            "lat": "31.9666541",
            "long": "34.79960740000001"
        },
        {
            "id": "11",
            "branch": "branch 52",
            "city": "Nataniya",
            "lat": "32.2841486",
            "long": "34.85975869999993"
        },
        {
            "id": "12",
            "branch": "branch 2",
            "city": "Petach Tikva",
            "lat": "32.0997729",
            "long": "34.89513950000003"
        }];


    Citys.getCitys = function () {
        return Citys;
    }
    return Citys;
}]);

app.factory('FilterFactory', ['DataFactory', function (DataFactory) {
    var DataFilter = DataFactory.getCitys();
    DataFilter.getData = function () {
        return DataFilter;
    };
    DataFilter.setData = function (data) {
        return DataFilter = data;
    };
    return DataFilter;
}]);

app.factory('MapFactory', [function () {
    var map = {}
    map.createMap = function (center, arrPlase) {
        var m = new google.maps.Map(document.getElementById('map_div'), {
            center: center,
            zoom: 8
        });
        if (arrPlase) {
            arrPlase.forEach((el) => {
                var ct = { lat: parseInt(el.lat), lng: parseInt(el.long) };
                new google.maps.Marker({
                    position: new google.maps.LatLng(el.lat, el.long),
                    map: m
                });
            })
        } else {
            return new google.maps.Marker({
                position: center,
                map: m
            });
        }
    }
    return map;
}]);

