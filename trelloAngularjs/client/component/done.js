angular.module('app')
.component("done", {
    templateUrl: '/template/done.html',
    controller: function ($scope,ListDone) {
        var self = this;
        var index;
        this.$onInit = function() {
        this.storysTodo = ListDone.getStorys()
        // .then(function (res) {
        //             this.storysTodo = res.data;
        //              console.log(res.data);
        //         },
        //         function (response) {
        //             console.log("no!!!");
        //         });
      };
        
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
            ListDone.removeStory(index)
        }

        this.add = function () {
            var st = {Description: self.Description, Title: self.Title, Date: self.Date};
           ListDone.addStory(st)
           this.dilogAdd = false;
        }
       
    }

    
})