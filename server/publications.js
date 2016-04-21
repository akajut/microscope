Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});

Meteor.publish('userPosts', function(userId) {
  check(userId, String);
  return Posts.find(userId);
});

Meteor.publish('singlePost', function(id) {
  check(id, String);
  return Posts.find(id);
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});
