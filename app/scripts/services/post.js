'use strict';

app.factory('Post', function(poundbypound, $firebaseArray, $firebaseObject) {
  var ref = new Firebase(poundbypound);
  var exercises = $firebaseArray(ref.child('exercises'));
 
  var Post = {
    all: exercises,
    create: function(newEx) {
      return exercises.$add(newEx);
    },
    instances: function(exerciseId) {
      return $firebaseArray(ref.child('instances').child(exerciseId));
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




