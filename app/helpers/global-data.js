// data provider components are a thing and they help with headaches


export default {
  app: {
    title: "Ember Design Patterns"
  },
  sections: {
    general: [
      {
        title: 'Use Pods for better Encapsulation of Concerns',
        // link: 'general.angle-brackets'
      },
      {
        title: 'Scale of Patterns Outlines are Meso'
        // Ember website outlines great micro patterns (like action down, data up), but is weak with larger scale patterns (like reusable component design)
      },
      {
        title: 'Use Angle brackets',
        // link: 'general.angle-brackets'
      },
      {
        title: 'You probably don\'t need a Service',
        // link: 'general.utils'
      },
      {
        title: 'Models make Ember Great',
        // has dirty attributes
        // rollback
        // link: 'general.models'
      },
      {
        title: 'Component Patterns overview'
        // Single responsibility
        // Dont repeat yourself
        // Dont abstract too early
      }
    ],
    patterns: [
      {
        title: 'Error States',
        link: 'patterns.substate-error'
      },
      {
        title: 'Loading States',
        link: 'patterns.substate-loading'
      },
      {
        title: 'Reusable Component',
        link: 'patterns.component.reusable'
      },
      {
        title: 'Single Purpose Component',
        link: 'patterns.component.single-purpose'
      },
      {
        title: 'Provider Component',
        link: 'patterns.component.provider'
      },
      {
        title: 'Presentaional Components',
        // link: 'patterns.component.stateless'
      },
      {
        title: 'HOC',
        // link: 'patterns.component.hoc'
      },
      {
        title: 'Mixins - Fully Encapsulated',
        // link: 'patterns.mixin.fully-encapulated'
      },
      {
        title: 'Model - Know Thyself',
        // link: 'patterns.model.know-thyself'
      },
      {
        title: 'Model - Is You Dirty?',
        // link: 'patterns.model.dirty'
      },
      {
        title: 'Model - Control Z!',
        // link: 'patterns.model.rollback'
      },
      {
        title: 'Ember Concurrency',
        // link: 'patterns.concurrency'
      },
    ],
    anti_patterns: [
      {
        title: 'Controller Substate Loading',
        link: 'anti-patterns.controller-substate-loading'
      },
      {
        title: 'WTF Mixins',
        // Use a component instead of a mixin to minimize those (where the fuck did that come from?) moments
        // link: 'anti-patterns.wtf-mixin'
      },
      {
        title: 'The God Component',
        // this component does fucking everything, but it should not
        // link: 'anti-patterns.god-component'
      },
      {
        title: 'Stupid Models Lead to Dumpster Fire Components',
        // So much repeat logic can be avoided by making Models smart 
        // Models can even know about other models...
        // link: 'anti-patterns.dumster-fire-component'
      },
    ]   
  }, 
}