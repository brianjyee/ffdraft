var Project = Backbone.Model.extend({
  defaults: {
    title: 'New Project',
    description: 'This is the project description',
    category: 'Category',
    demolink: 'brianyee.me',
    sourcelink: 'https://github.com/brianjyee',
    tech: ['html']
  }
})