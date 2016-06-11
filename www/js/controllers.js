angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope) {})

.controller('contactsCtrl', function($scope, $cordovaContacts, $ionicPlatform) {
    $scope.findContactsBySearchTerm = function(searchTerm) {
      $var opts = {
        filter: searchTerm,
        multiple: true,
        fields: ['displayName', 'name'],
        desiredFields: [id];
      };

      if ($ionicPlatform.isAndroid()) {
        opts.hasPhoneNumber = true;
      };

      $cordovaContacts.find(opts).then(function(contactsFound) {
        $scope.contacts = contactsFound;
      };
    )}

  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
