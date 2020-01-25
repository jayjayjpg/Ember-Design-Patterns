
export default function() {
  this.namespace = '/api/v1/';
  this.logging = true;

  this.get('/users', (schema, request) => {
    return schema.users.all();
  });

  this.get('/users/:id', (schema, request) => {
    const { id } = request.params
    return schema.users.find(id);
  });

  this.patch('/users/:id', function(schema, request) {
    const { id } = request.params

    let attrs = this.normalizedRequestAttrs();

    let user = schema.users.find(id);

    user.update(attrs);

    return user
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
