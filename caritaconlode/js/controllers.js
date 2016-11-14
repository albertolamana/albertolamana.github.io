angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

  $rootScope.url = 'http://s311770442.mialojamiento.es/alberto/wp/wp-json/wp/v2/';

  $scope.show1 = false;
  $scope.show2 = false;
  $scope.show3 = false;
  $scope.show4 = false;   
  $scope.show5 = false; 
  $scope.click1 = function($event) { 
    $event.stopPropagation();
    $scope.show1 = !$scope.show1;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show2 = false;
    $scope.show5 = false;
  }
  $scope.click2 = function($event) {
    $event.stopPropagation();
    $scope.show2 = !$scope.show2;
    $scope.show1 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
  }
  $scope.click3 = function($event) {
    $event.stopPropagation();
    $scope.show3 = !$scope.show3;
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show4 = false;  
    $scope.show5 = false;
  }
  $scope.click4 = function($event) {
    $event.stopPropagation();
    $scope.show4 = !$scope.show4;
    $scope.show1 = false;
    $scope.show2 = false;  
    $scope.show3 = false; 
    $scope.show5 = false;
  } 
  $scope.click5 = function($event) {
    $event.stopPropagation();
    $scope.show5 = !$scope.show5;
    $scope.show1 = false;
    $scope.show2 = false;  
    $scope.show3 = false; 
    $scope.show4 = false;
  }    
  $scope.hideAll = function() { 
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
  }

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

//*******************************************************************//
//******************  Sullastrada Servizio CONTROLLER  *****************************//
//*******************************************************************//

.controller('SulserCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=sullastrada_servizio', {timeout:10000} ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      //$log.log(postsApiComic, response.data);
      console.log('Data: ', $scope.posts);
      $scope.hide();
      $scope.error="";
    }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh = function() {
    $http.get($rootScope.url + 'posts/').success(function(data){

      $scope.posts = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})

//*******************************************************************//
//******************  Sullastrada Eventi CONTROLLER  *****************************//
//*******************************************************************//

.controller('SuleveCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=sullastrada_eventi', {timeout:10000} ).then(function(response) {
      console.log('see: ' + response)
        $scope.posts = response.data;
        var x = response.data
          if (Object.keys(x).length == 0) {
             console.log('empty');
             $scope.msg = "Non ci sono trovati eventi"
          }else{
             $scope.msg = ""
             console.log('There are items')
             console.log('Typeof: ' + Object.keys(x).length)
          }
        $scope.moreItems = true;
        console.log('Data: ', $scope.posts);
        $scope.hide();
        $scope.error="";
      }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})
//*******************************************************************//
//******************  Disabilita Servizio CONTROLLER  *****************************//
//*******************************************************************//

.controller('DisserCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=disabilita_ser', {timeout:10000} ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      //$log.log(postsApiComic, response.data);
      console.log('Data: ', $scope.posts);
      $scope.hide();
      $scope.error="";
    }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})

//*******************************************************************//
//******************  Disabilita Eventi CONTROLLER  *****************************//
//*******************************************************************//

.controller('DiseveCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=disabilita_eve', {timeout:10000} ).then(function(response) {
      console.log('see: ' + response)
        $scope.posts = response.data;
        var x = response.data
          if (Object.keys(x).length == 0) {
             console.log('empty');
             $scope.msg = "Non ci sono trovati eventi"
          }else{
             $scope.msg = ""
             console.log('There are items')
             console.log('Typeof: ' + Object.keys(x).length)
          }
        $scope.moreItems = true;
        console.log('Data: ', $scope.posts);
        $scope.hide();
        $scope.error="";
      }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh = function() {
    $http.get($rootScope.url + 'posts/').success(function(data){

      $scope.posts = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})
//*******************************************************************//
//******************  Animazione Servizio CONTROLLER  *****************************//
//*******************************************************************//

.controller('AniserCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=animazione_ser', {timeout:10000} ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      //$log.log(postsApiComic, response.data);
      console.log('Data: ', $scope.posts);
      $scope.hide();
      $scope.error="";
    }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})

//*******************************************************************//
//******************  Animazione Eventi CONTROLLER  *****************************//
//*******************************************************************//

.controller('AnieveCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=animazione_eve', {timeout:10000} ).then(function(response) {
      console.log('see: ' + response)
        $scope.posts = response.data;
        var x = response.data
          if (Object.keys(x).length == 0) {
             console.log('empty');
             $scope.msg = "Non ci sono trovati eventi"
          }else{
             $scope.msg = ""
             console.log('There are items')
             console.log('Typeof: ' + Object.keys(x).length)
          }
        $scope.moreItems = true;
        console.log('Data: ', $scope.posts);
        $scope.hide();
        $scope.error="";
      }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh = function() {
    $http.get($rootScope.url + 'posts/').success(function(data){

      $scope.posts = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})
//*******************************************************************//
//******************  Sensibilizzazione Opportunità CONTROLLER  *****************************//
//*******************************************************************//

.controller('SenoppCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=sensibilizzazione_opo', {timeout:10000} ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      //$log.log(postsApiComic, response.data);
      console.log('Data: ', $scope.posts);
      $scope.hide();
      $scope.error="";
    }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})

//*******************************************************************//
//******************  Sensibilizzazione Eventi CONTROLLER  *****************************//
//*******************************************************************//

.controller('SeneveCtrl', function($scope, $ionicLoading, $http, $rootScope, $timeout) {
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

   $scope.loadPosts = function() {
    $scope.moreItems = false;
    // Get all of our posts
    $http.get($rootScope.url + 'posts/?filter[category_name]=sensibilizzazione_eve&filter[orderby]=title&order=asc', {timeout:10000} ).then(function(response) {
      console.log('see: ' + response)
        $scope.posts = response.data;
        var x = response.data
          if (Object.keys(x).length == 0) {
             console.log('empty');
             $scope.msg = "Non ci sono trovati eventi"
          }else{
             $scope.msg = ""
             console.log('There are items')
             console.log('Typeof: ' + Object.keys(x).length)
          }
        $scope.moreItems = true;
        console.log('Data: ', $scope.posts);
        $scope.hide();
        $scope.error="";
      }, function(response) {
      console.log('response'+response);
      $scope.error="time out - no events found";
      $scope.hide();
    });
  }
  $scope.loadPosts();

  $scope.doRefresh = function() {
    $http.get($rootScope.url + 'posts/').success(function(data){

      $scope.posts = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.doRefresh2 = function() {
    $timeout(function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
})






//*******************************************************************//
//******************  Single post  *****************************//
//*******************************************************************//


.controller('SingleCtrl', function($scope, $stateParams, $http, $rootScope, $ionicLoading, $timeout) {
  
  $scope.setDelay = function(){
      $scope.delay = true;
      $timeout(function(){
          $scope.delay = false;
      }, 2000);
  };

  $scope.post = [];
  console.log($stateParams.postId)

  $http.get($rootScope.url + 'posts/'+$stateParams.postId,{timeout:3000}).success(function(data){
    console.log('ok')
    $scope.post = data;
    $scope.error="";
    console.log(data);
  })
    console.log('time out')
    $scope.error="time out"
});




