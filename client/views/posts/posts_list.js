var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Grief',
		url: 'http://sachagreif.com'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'The meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});