var socket = io();
var CHTAP = angular.module('CHTAP', []);

CHTAP.controller('chatPage', ['$scope', '$http', function($scope, $http){
$scope.hello = "it's me";

$scope.chatMessages = [];

$scope.sendChat = function(){
  socket.emit('chat message', $scope.hello);
  $scope.chatMessages.push($scope.hello);
  $scope.hello = '';
  return false;
}; socket.on('chat message', function(msg){

});

}]);
