import Route from '@ember/routing/route';

export default Route.extend({  
  actions: {
    routeAction(newAmount) {
      alert('route action receives ' + newAmount)
    }
  }
});
