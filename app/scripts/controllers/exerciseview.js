'use strict';

app.controller('ExerciseViewCtrl', function($scope, $routeParams, Post) {
  $scope.exercise = Post.get($routeParams.exerciseName);
  $scope.instances = Post.instances($routeParams.exerciseName);

  
  $scope.addInstance = function() {
    console.log("routeParams ", $scope.instances[2]);

    var instance = {
      date: $scope.instanceDate,
      weight: $scope.instanceWeight,
      reps: $scope.instanceReps
    };
    console.log('Instance', instance);
    $scope.instances.$add(instance);
    $scope.instanceDate = '';
    $scope.instanceWeight = '';
    $scope.instanceReps = '';
  };

  $scope.removeInstance = function(instance) {
    $scope.instances.$remove(instance);
  };
});