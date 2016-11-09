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
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

  .state('app.lesson01', {
      url: '/lesson01',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson01.html'
        }
      }
    })
  .state('app.lesson02', {
      url: '/lesson02',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson02.html'
        }
      }
    })
  .state('app.lesson03', {
      url: '/lesson03',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson03.html'
        }
      }
    })
  .state('app.lesson04', {
      url: '/lesson04',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson04.html'
        }
      }
    })
  .state('app.lesson05', {
      url: '/lesson05',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson05.html'
        }
      }
    })
  .state('app.lesson06', {
      url: '/lesson06',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson06.html'
        }
      }
    })
  .state('app.lesson07', {
      url: '/lesson07',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson07.html'
        }
      }
    })
  .state('app.lesson08', {
      url: '/lesson08',
      views: {
        'menuContent': {
          templateUrl: 'templates/lesson08.html'
        }
      }
    })


  .state('app.video01', {
      url: '/video01',
      views: {
        'menuContent': {
          templateUrl: 'templates/video01.html'
        }
      }
    })
  .state('app.video02', {
      url: '/video2',
      views: {
        'menuContent': {
          templateUrl: 'templates/video02.html'
        }
      }
    })
  .state('app.video03', {
      url: '/video03',
      views: {
        'menuContent': {
          templateUrl: 'templates/video03.html'
        }
      }
    })
  .state('app.video04', {
      url: '/video04',
      views: {
        'menuContent': {
          templateUrl: 'templates/video04.html'
        }
      }
    })
  .state('app.video05', {
      url: '/video05',
      views: {
        'menuContent': {
          templateUrl: 'templates/video05.html'
        }
      }
    })
  .state('app.video06', {
      url: '/video06',
      views: {
        'menuContent': {
          templateUrl: 'templates/video06.html'
        }
      }
    })  

  .state('app.assignment01', {
      url: '/assignment01',
      views: {
        'menuContent': {
          templateUrl: 'templates/assignment01.html'
        }
      }
    })




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
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
