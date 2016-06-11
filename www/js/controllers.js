angular.module('starter.controllers', ['ngCordova'])

.controller('WelcomeCtrl', function($scope) {})

.controller('ContactsCtrl', function($scope) {})

.controller('SmsCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
