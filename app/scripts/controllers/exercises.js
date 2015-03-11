'use strict';

app.controller('ExerciseCtrl', function($scope) {
  $scope.exercises = [];
  $scope.exercise = {title: '', weight: ''};

  $scope.addEx = function(){
    $scope.posts.push($scope.post);
    $scope.posts = {title: '', weight: ''};
  };
});