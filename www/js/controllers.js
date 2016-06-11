angular.module('starter.controllers', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.controller('WelcomeCtrl', function($scope) {})

.controller('SmsCtrl', function($scope, $cordovaSms) {
  $scope.sms = {
      number: '0959052082',
      message: 'I\'m Home!'
    };

    document.addEventListener("deviceready", function() {

      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          intent: '' // send SMS with the native android SMS messaging
            //intent: '' // send SMS without open any other app
            //intent: 'INTENT' // send SMS inside a default SMS app
        }
      };

      $scope.sendSMS = function() {

        $cordovaSms
          .send('0959052082', 'This is some dummy text', options)
          .then(function() {
            alert('Success');
            // Success! SMS was sent
          }, function(error) {
            alert('Error');
            // An error occurred
          });
      }
    });
})

.controller('DashCtrl', function($scope) {
})


.controller('ContactsCtrl', function($scope) {})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

