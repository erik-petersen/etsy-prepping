    myApp.factory( "dataFactory", [ "$http", function( $http ) {

    var url = "http://localhost:3007/products";
    var cartUrl = "http://localhost:3007/cart";
    var dataFactory = {};
    var dataReceived = false;

    dataFactory.getProducts = function() {
      return $http.get( url );
    };

    dataFactory.getProduct = function( id ) {
      return $http.get( url + "/" + id );
    }

    dataFactory.getCart = function() {
      return $http.get( cartUrl );
    }

    dataFactory.addToCart = function( item ) {
      return $http.post(cartUrl, item);
    };

    return dataFactory;
  }]); // end .factory()





  // dataFactory.deleteCustomer = function (id) {
  //     return $http.delete(urlBase + '/' + id);
  // };
