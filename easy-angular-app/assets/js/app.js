var myApp = angular.module( "myApp", ["ngRoute"] );
  myApp.config( function($routeProvider) {
    $routeProvider
    .when( "/home", {
      templateUrl: "products.html"
    })
    .when( "/cart", {
      templateUrl: "cart.html"
    })
    .otherwise({
      redirectTo: "/home"
    });
  }); // end myApp.config


  myApp.controller( "ProductsController", ["$scope", "dataFactory", function($scope, dataFactory) {

    $scope.products;

    getProducts();

    function getProducts() {
      dataFactory.getProducts()
          .then( function( response ) {
            $scope.products = response.data;
          },
          function( error ) {
            console.log( "You are a miserable failure: " + error.message );
          });
    } // end getProducts()

  }]); // end controller( "ProductsController" )

  myApp.controller( "Menu", ["$scope", "dataFactory", function( $scope, dataFactory ) {
  $scope.goToCart = function( item ) {
    console.log( $scope.products.indexOf(item));



      addToCart();


      $scope.addToCart = function () {
// $scope.item = { Name: $scope.products.indexOf(item).Name, Photo: $scope.products.indexOf(item).Photo };
        var item = {
            Name: $scope.products.indexOf(item).Name,
            Photo: $scope.products.indexOf(item).Photo,
            Photo: $scope.products.indexOf(item).Price
        };
      };

      function addToCart() {
          dataFactory.addToCart( item )
              .then(function (response) {
                  console.log( response );
              }, function(error) {
                  console.log( "You are a miserable failure: " + error.message );
              });
      }; // end addToCart()
  } // end click event goToCart()
}]); // end Menu controller

myApp.controller( "CartController", ["$scope", "dataFactory", function($scope, dataFactory) {

  $scope.cart;

  getCart();

  function getCart() {
    dataFactory.getCart()
        .then( function( response ) {
          $scope.cart = response.data;
        },
        function( error ) {
          console.log( "You are a miserable failure: " + error.message );
        });
  } // end getCart()

}]); // end controller( "ProductsController" )
