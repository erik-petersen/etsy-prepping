// myApp.controller( "ProductsController", [$scope, dataFactory], function($scope, dataFactory) {
//
//   $scope.products;
//   $scope.cart;
//
//   getProducts();
//   getCart();
//
//   function getProducts() {
//     dataFactory.getProducts()
//         .then( function( response ) {
//           $scope.products = response.data;
//         }),
//         .then( function( error ) {
//           console.log( "You are a miserable failure: " + error.message );
//         });
//   } // end getProducts()
// }); // end controller( "ProductsController" )

// myApp.controller( "Menu", function( $scope ) {
//   $scope.showMenu = false;
//   function menu() {
//       console.log( "Hello" );
//       $scope.showMenu = !$scope.showMenu;
//   }
// }); // end Menu controller
