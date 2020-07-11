(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.tobuyitems = ShoppingListCheckOffService.gettobuyItems();

  showList.putitem = function (index) {
    ShoppingListCheckOffService.putitem(index);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.boughtitems = ShoppingListCheckOffService.getboughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyItems = [
    {
      name : "Cookies",quantity : "10"
    },
    {
      name : "Mangoes",quantity : "5"
    },
    {
      name : "Milk",quantity : "10"
    },
    {
      name : "Water",quantity : "5"
    },
    {
      name : "Chocolates", quantity : "10"
    }
  ];

  var boughtItems = [];

  this.putitem = function (index) {
    boughtItems.push(tobuyItems[index]);
    tobuyItems.splice(index, 1);
  }

  this.gettobuyItems = function () {
    return tobuyItems;
  }

  this.getboughtItems = function () {
    return boughtItems;
  }

}

})();
