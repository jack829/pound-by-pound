'use strict';

app.controller('ExerciseViewCtrl', function($scope, $routeParams, Post) {
  $scope.exercise = Post.get($routeParams.exerciseName);
  $scope.instances = Post.instances($routeParams.exerciseName);
  
  $scope.addInstance = function() {
    console.log("in addInstance")
    if(!$scope.instanceWeight || $scope.instanceWeight === ''){
      return;
    }
    var instance = {
      date: $scope.instanceDate,
      weight: $scope.instanceWeight,
      reps: $scope.instanceReps
    };
    console.log("Instance", instance)
    $scope.instances.$add(instance);
    $scope.instance = {date:'', weight:''};
  };

  $scope.removeInstance = function(instance) {
    $scope.instances.$remove(instance);
  };
});