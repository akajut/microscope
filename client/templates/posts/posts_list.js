var postsData = [
  {
    title: 'Tintroducting Telescope',
    url: 'http://sachagrief.com/introducting-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});
