app.controller('Blog', ['$scope', function($scope){
  $scope.title = 'Angular blog';

  $scope.newPostTitle = '';
  $scope.newPostBody = '';
  $scope.postId = 0;
  $scope.editable = false;
  $scope.posts = [
    {title: "It's raining", body: "Very heavy", editable: false}
  ];

  $scope.addPost = function(){
    $scope.posts.push({title: $scope.newPostTitle, body: $scope.newPostBody, editable: false });
    $scope.newPostTitle = '';
    $scope.newPostBody = '';
  }

  $scope.editPost = function(index){
    $scope.newPostTitle = $scope.posts[index].title;
    $scope.newPostBody = $scope.posts[index].body;
    $scope.id = index;
    $scope.editable = true;
  }

  $scope.updatePost = function(title, body){
    $scope.posts[$scope.id].title = title;
    $scope.posts[$scope.id].body = body;
  }

  $scope.deletePost = function(index){
    $scope.posts.splice(index,1);

  }


}]);