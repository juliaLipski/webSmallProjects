angular.module('angularModule').component("data", {
  templateUrl: "./component/data.html",
  controller: function ($scope, $interval, FilterFactory) {
    var self = this;
    self.text = 'Branchs close to you';
    self.data = FilterFactory.getData()

    $scope.$watch(function () {
      return FilterFactory.getData();
    }, function (newValue, oldValue) {
      // console.log(newValue + ' ' + oldValue);
      self.data = FilterFactory.getData();
      if (self.data.length === 0) {
        self.text = 'No next Branchs in 20 cilorometers'
      } else {
        self.text = 'Branchs close to you';
      }
    });
  }
})