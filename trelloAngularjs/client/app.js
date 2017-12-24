var an = angular.module('app', [])

an.factory('ListTodo', [ function () {
    var StorysTodo = [];
    StorysTodo.getStorys = function () {
        return StorysTodo;
    };
    StorysTodo.addStory = function (story) {
        return StorysTodo.push(story)
    };
    StorysTodo.removeStory = function (index) {
        return StorysTodo.splice(index, 1)
    };
    return StorysTodo;

}]);
an.factory('ListInprogress', [ function () {
    var StorysInprogress = [];
    StorysInprogress.getStorys = function () {
        return StorysInprogress;
    };

    StorysInprogress.addStory = function (story) {
        return StorysInprogress.push(story)
    };
    StorysInprogress.removeStory = function (index) {
        return StorysInprogress.splice(index, 1)
    };
    return StorysInprogress;

}]);
an.factory('ListDone', [ function () {
    // an.factory('ListDone', ['$http', function ($http) {
    var StorysDone = [];
    StorysDone.getStorys = function () {
    //    return $http.get("/done");
        return StorysDone;
    };
    StorysDone.addStory = function (story) {
        // return $http.post("/done/", story)
        return StorysDone.push(story)
    };
    StorysDone.removeStory = function (index) {
        return StorysDone.splice(index, 1)
    };
    return StorysDone;

}]);
