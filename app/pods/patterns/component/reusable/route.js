import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      useCases: [
         "Building an Addon for the Ember Community :-)",
         "Components that will be reused in various scenarios in different routes and with different models" 
      ],
      nonUseCases: [
        "A component will only be used with one model and should modify the data directly",
        "A component should not be 'context aware' (know what the route has for state)",
        "If the above is true, see the single purpose component pattern",
      ],
      overview: `
        passes initial data as individual, configurable properties \n
        exposes an action to be handled in the calling context
      `,
      references: [
        {
          title: "Dianne Eramo EmberConf 2019",
          link: "https://youtu.be/Kyd2mQpR_9c?t=377"  
        }
      ]
    }
  }
});
