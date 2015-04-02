'use strict';

app.controller('ExerciseViewCtrl', function($scope, $routeParams, $location, Post) {
  $scope.exercise = Post.get($routeParams.exerciseName);
  $scope.instances = Post.instances($routeParams.exerciseName);
  $scope.allInstances = Post.getInstances();

  
  $scope.addInstance = function() {
    console.log("instances ", $scope.instances);
    console.log("all Instances ", $scope.allInstances);

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

  // $scope.deleteExercise = function(exercise) {
  //   console.log("exercise ", exercise);
  //   Post.delete(exercise).then(function() {
  //     $location.path('/');
  //   });
  // };
});
