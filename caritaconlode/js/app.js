// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'AppCtrl'
      }
    }
  }) 

  .state('app.sullastrada_ser', {
    url: "/sullastrada_ser",
    views: {
      'menuContent': {
        templateUrl: "templates/sullastrada_ser.html",
        controller: 'SulserCtrl'
      }
    }
  }) 
  .state('app.sullastrada_eve', {
    url: "/sullastrada_eve",
    views: {
      'menuContent': {
        templateUrl: "templates/sullastrada_eve.html",
        controller: 'SuleveCtrl'
      }
    }
  }) 
  .state('app.disabilita_ser', {
    url: "/disabilita_ser",
    views: {
      'menuContent': {
        templateUrl: "templates/disabilita_ser.html",
        controller: 'DisserCtrl'
      }
    }
  }) 
  .state('app.disabilita_eve', {
    url: "/disabilita_eve",
    views: {
      'menuContent': {
        templateUrl: "templates/disabilita_eve.html",
        controller: 'DiseveCtrl'
      }
    }
  }) 
  .state('app.animazione_ser', {
    url: "/animazione_ser",
    views: {
      'menuContent': {
        templateUrl: "templates/animazione_ser.html",
        controller: 'AniserCtrl'
      }
    }
  }) 
  .state('app.animazione_eve', {
    url: "/animazione_eve",
    views: {
      'menuContent': {
        templateUrl: "templates/animazione_eve.html",
        controller: 'AnieveCtrl'
      }
    }
  }) 
  .state('app.sensibilizzazione_opp', {
    url: "/sensibilizzazione_opp",
    views: {
      'menuContent': {
        templateUrl: "templates/sensibilizzazione_opp.html",
        controller: 'SenoppCtrl'
      }
    }
  }) 
  .state('app.sensibilizzazione_eve', {
    url: "/sensibilizzazione_eve",
    views: {
      'menuContent': {
        templateUrl: "templates/sensibilizzazione_eve.html",
        controller: 'SeneveCtrl'
      }
    }
  }) 
  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
      }
    }
  }) 



//Others

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/post/:postId",
      views: {
        'menuContent' :{
          templateUrl: "templates/single.html",
          controller: 'SingleCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
