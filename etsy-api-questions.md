#Etsy's API
  ##How do I make API requests?
    To make an API request, you must use https.
    GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY} is the standard way to make
    an unauthenticated request.  You also need to specify what you want returned.
    Interestingly, since Javascript does not have a PUT or DELETE request, you can append "method=DELETE" or "method=PUT"
    ###What is the base URL for all requests?
       https://openapi.etsy.com/v2 is the base URL.  Remember to add the key.
    ###Are there any headers or query parameters required?
       Your API key is required.  Other than that, all parameters are optional, however, you will not receive any data back
       unless you include what you want returned as a parameter.  Also, because Javascript
       does not have a PUT or DELETE request, if you going to do one of those, they need to be sent as a parameter in the
       form of method=DELETE or method=PUT.  Also, with certain methods, certain parameters are required.  For instance, with
       getUser, the user_id is required.
    ###What kind of response should I expect?
       An immediate one.  Ha!  Data is returned in JSON format.  The data will include 4 pieces of information:
       ####Count: which is the number of results returned
       ####Results: this will always be an array and is the data you requested
       ####Params: this is the params that you sent in your request
       ####Type: this is the type of objects that are in the returned data
  ##How does the API handle authentication?
    ###Do I need to authenticate? with user credentials?
       With using public endpoints, it is not required to authenticate.  The only thing required is an API key.  However, if
       you need the ability to write anything or access private user data, you are required to have an OAuth access token.
    ###What can I do with an unauthenticated request?
       You can use Etsy's "public profiles, shops, listings, tags, favorites, and sales data", however, you cannot write or DELETE
       anything without authentication, which makes sense.
    ###How can I authenticate my request? (what methods)
       You have to have an OAuth access token, which will only give you access to your own private account.  This authentication
       involves three steps.
       1.Your app must request a "request token"
       2.Your app must direct the user to a page where the "request token" is approved.  This token is then linked to the user's account.
       3.The temporary "request token" is exchanged for a permanent "access token" that can be used to give the app access through the API
         to the user's account
  ##What Resource in the API represents...
    ###an individual product?
       A "listing" represents an individual product.  Data returned includes the description and the current quantity available.
    ###a group or collection of products?
       Shop or ShopSections represents a collection of products.
    ###images associated with a product?
       MainImage or Images represent the images that the seller uploaded.  There can be up to five of them.  There is also a method,
       findAllListingImages, than can be called.
    ###sizes and colors for a product?
       Color is a parameter that can be used with the findAllListingActive method.  Description may also be helpful with finding color.
       As for an items size, item_width, item_height, item_length, and item_dimensions_unit are all useful resources in Etsy's API.
      ####What actions and endpoints exist for each of these Resources?
          * color_wiggle
          * color_triplet
          * image
      ####What parameters do each endpoint require or accept?
      ####What fields are returned for each Resource, specifically:
    ###an individual product?
    ###a group or collection of products?
      ####What additional fields can be requested for each?
