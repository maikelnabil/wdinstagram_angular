"use strict";

(function(){

  angular
    .module("wdinstagram", ["ui.router"])
    .config(["$stateProvider",RouterFunction])
    .controller("indexController", [IndexFunction])
    .controller("showController", ["$stateParams", ShowFunction])

  var wdidata = [
      {id: 1, author: 'Mike', body: 'This is a photo of a dog', photo_url: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg'},
      {id: 2, author: 'John', body: 'This is a photo of a cat', photo_url: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg'},
      {id: 3, author: 'Carl', body: 'This is a photo of a horse', photo_url: 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/h/horse_thumb.ngsversion.1481754630544.adapt.1900.1.jpg'},
      {id: 4, author: 'Eva', body: 'This is a photo of a fox', photo_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/fox-faces-roeselien-raimond-red-fox.jpg'},
      {id: 6, author: 'Jane', body: 'This is a photo of a rat', photo_url: 'http://orig07.deviantart.net/c399/f/2010/324/f/4/cute_rat_animation_by_crestielover-d339mcc.gif'}
    ]

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wdinstagramIndex", {
      url: "/wdinstagram",
      templateUrl: "js/ng-views/index.html",
      controller: "indexController",
      controllerAs: "vm"
    })
    .state("wdinstagramShow", {
      url: "/wdinstagram/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "showController",
      controllerAs: "vm"
    })
  }

  function IndexFunction(){
    this.wdidata = wdidata;
    this.newData = {};
    this.create = function(){
      wdidata.unshift(this.newData);
      this.newData = {}
    }
    this.delete = function(id){
      wdidata.splice(id, 1);
    }
  }

  function ShowFunction( $stateParams ) {
    this.data = wdidata[$stateParams.id]
    this.update = function(){
      this.data.save();
    }
  }

})();
