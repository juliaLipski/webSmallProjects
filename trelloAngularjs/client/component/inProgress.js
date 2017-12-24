angular.module('app')
    .component("inProgress", {
        templateUrl: '/template/inProgress.html',
        controller: function ($scope, ListDone, ListInprogress) {
            var self = this;
            var index;

            this.storysInprogress = ListInprogress.getStorys();
            this.moveInD = function (st, ind) {
                ListInprogress.removeStory(ind);
                ListDone.addStory(st)
            }
            this.addshowMess = function () {
                this.dilogAdd = true;
            }

            this.edit = function () {

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
                ListInprogress.removeStory(index)
            }

            this.add = function () {
                var st = { Description: self.Description, Title: self.Title, Date: self.Date };
                ListInprogress.addStory(st)
                this.dilogAdd = false;
            }

        }
    })