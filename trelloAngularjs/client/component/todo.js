angular.module('app')
.component("todo", {
    templateUrl: '/template/todo.html',
    controller: function ($scope,ListTodo,ListInprogress) {
        var self = this;
        var index;
        this.storysTodo = ListTodo.getStorys();
        this.moveInpr = function(st,ind){
            ListTodo.removeStory(ind);
            ListInprogress.addStory(st)
        }
        this.addshowMess = function () {
           this.dilogAdd = true;
        }
        this.edit = function(){

        }
        this.close = function () {
            this.dilogDelete = false;
            this.dilogAdd = false;
        }
        this.deleteMesShow = function (ind) {
            this.dilogDelete = true;
            index = ind;
            console.log(ind)
        }
        this.delete = function () {
            this.dilogDelete = false;
            ListTodo.removeStory(index)
        }

        this.add = function () {
            var st = {Description: self.Description, Title: self.Title, Date: self.Date};
           ListTodo.addStory(st)
           this.dilogAdd = false;
        }
       
    }
})