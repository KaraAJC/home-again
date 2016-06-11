angular.module('starter.controllers', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.controller('DashCtrl', function($scope) {})

.controller('WelcomeCtrl', function($scope) {})

.controller('SmsCtrl', function($scope, $cordovaSms) {
  $scope.sms={};

      var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the default SMS app
      //intent: ''        // send SMS without open any other app
      }}

  $scope.sendSMS=function(){
    console.log($scope.sms.number);
    console.log($scope.sms.message);

    $cordovaSms
        .send($scope.sms.number, $scope.sms.message, options)
          .then(function() {
              // Success! SMS was sent
              console.log('Success');
          }, function(error) {
          // An error occurred
              console.log(error);
        });//then
  }//sendSms
})


.controller('ContactsCtrl', function($scope, $cordovaContacts, $ionicPlatform) {
  $scope.getAllContacts = function() {
    console.log("getting contacts");
    $cordovaContacts.find().then(function(allContacts) {
        $scope.contacts = allContacts;
        console.log(JSON.stringify(allContacts));
    });
  };

})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

