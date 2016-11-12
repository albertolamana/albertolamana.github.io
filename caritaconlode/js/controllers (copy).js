angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

  $rootScope.url = 'http://s311770442.mialojamiento.es/aguiwp/wp-json/wp/v2/';

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ComicCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.posts = [];
  $scope.categories = [];

  $scope.show();

  //https://public-api.wordpress.com/rest/v1.1/sites/africhangeblog.wordpress.com/posts/

  $http.get('http://s311770442.mialojamiento.es/alberto/wp/wp-json/wp/v2/posts/?filter[category_name]=sullastrada_servizio',{timeout:1500}).success(function(data){
    console.table(data);
    console.log("Eres un fiera")
    $scope.posts = data;
    $scope.rana = 'green';
    
    $http.get('http://www.silanet.org/wp-json/wp/v2/categories/').success(function(data){
      $scope.categories = data.categories;
      $scope.hide();
    });
  })
    console.log('Too long');

  $scope.doRefresh = function() {
    $http.get('http://s311770442.mialojamiento.es/alberto/wp/wp-json/wp/v2/posts/').success(function(data){

      $scope.posts = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
})
.controller('SingleCtrl', function($scope, $stateParams, $http) {
  $scope.post = [];
    $scope.sapo = 'verde';
  //$scope.show();
  console.log($stateParams.postId)

  $http.get('http://s311770442.mialojamiento.es/alberto/wp/wp-json/wp/v2/posts/'+$stateParams.postId,{timeout:3000}).success(function(data){
    console.log('ok')
    $scope.post = data;
    $scope.error="";
    console.log(data);
    //$scope.hide();
  })
    console.log('time out')
    $scope.error="time out";
});




