Posts = new Mongo.Collection('posts');

Post.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});
