'use strict';

app.factory('Post', function(poundbypound, $firebaseArray, $firebaseObject) {
  var ref = new Firebase(poundbypound);
  var exercises = $firebaseArray(ref.child('exercises'));
 
  var Post = {
    all: exercises,
    create: function(newEx) {
      console.log("exercises ", exercises);
      return exercises.$add(newEx);
    },
    instances: function(exerciseId) {
      return $firebaseArray(ref.child('instances').child(exerciseId));
    },
    getInstances: function() {
      return $firebaseArray(ref.child('instances'));
    },
    get: function(exerciseId) {
      return $firebaseObject(ref.child('exercises').child(exerciseId));
    },
    delete: function(newEx) {
      return exercises.$remove(newEx);
    }
  };

  return Post;
});

// app.factory('exercisePost', function(poundbypound, $firebaseArray, $firebaseObject){

// });




