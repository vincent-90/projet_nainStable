var store = angular.module('store', [])
store.controller('CartController', function ($scope,$http) {
  //JSON PRODUITS
  $http.get('assets/json/product.json').then(function(result) {
    $scope.product = result.data;
    //DECLARATION DU TABLEAU
    //CONTENANT LES PRODUITS DU PANIER
    $scope.itemsCart = [];

    //TOGGLE AFFICHAGE PANIER
    $scope.isVisible = false;
    $scope.toggleCart = function() {
      $scope.isVisible = $scope.isVisible ? false : true; // if(isVible == true) isVisble = false; else isVisble = true;
    }


    //AJOUTER UN PRODUIT AU PANIER
    $scope.qty = 1;
    $scope.addProductToCart = function (product, qty) {
      //On set la qty
      product.qty = qty;

      //INDEX OF RETOURNE L INDEX DE L ELEMENT RECHERCHER DANS LE TABLEAU
      //SI IL EXISTE PAS IL RETOURNE -1
      //ON VERIFIE QUE LE PRODUIT N EXISTE PAS DEJA
      if ($scope.itemsCart.indexOf(product) === -1)
      $scope.itemsCart.push(product);
    }

    //SUPPRIMER UN PRODUIT AU PANIER
    $scope.removeProductToCart = function ($index){
      $scope.itemsCart.splice($index,1);
    }
    //FONCTION TOTAL
    $scope.total = 0;
    $scope.setTotals = function(itemsCart){
      if(itemsCart){
        $scope.total += itemsCart.item.prix;
      }
    }

  });
});
