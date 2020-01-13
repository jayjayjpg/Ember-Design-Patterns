// data provider components are a thing and they help with headaches


export default {
  app: {
    title: "Ember Patterns"
  },
  general: [
    {
      title: 'Ember CLI FTW',
      // link: 'general.cli'
    },
    {
      title: 'Handle data while high',
      // link: 'general.data'
    },
    {
      // Use angle brackets as much as possible when using components. This makes Angular and React developer's dicks super hard
      title: 'Angle brackets keep Ember sexy',
      // link: 'general.angle-brackets'
    },
    {
      title: 'You probably need a Util and not a Service',
      // link: 'general.utils'
    },
    {
      title: 'Models make Ember Great',
      // has dirty attributes
      // rollback
      // link: 'general.utils'
    },

  ],
  patterns: [
    {
      title: 'Irie Error Handling',
      link: 'patterns.substate-error'
    },
    {
      title: 'Piece of Cake Loading',
      link: 'patterns.substate-loading'
    },
    {
      title: 'Component - Renderless',
      // link: 'patterns.component.renderless'
    },
    {
      title: 'Component - Data Provider',
      // type of Renderless
      // link: 'patterns.component.data-provider'
    },
    {
      title: 'Component - Stateless',
      // link: 'patterns.component.stateless'
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
}