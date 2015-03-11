
'use strict';

app.controller('ExerciseCtrl', function($scope, Post) {
  $scope.exercises = Post.all;
  $scope.exercise = {title: ''};

  $scope.addEx = function(){
    Post.create($scope.exercise).then(function() {
      $scope.exercise = {title: ''};
    });
  };
  $scope.deleteEx = function(exercise) {
    Post.delete(exercise);
  };
});

