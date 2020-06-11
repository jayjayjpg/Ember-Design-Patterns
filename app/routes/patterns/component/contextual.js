import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        name: "Honey with Lemon",
        origin: "Ireland",
        price: 20
      },
      {
        id: 2,
        name: "Honey with Lavender",
        origin: "USA",
        price: 14
      },
      {
        id: 3,
        name: "Honey with Cinnamon",
        origin: "Jamaica",
        price: 22
      },
      {
        id: 4,
        name: "Honey with Weed",
        origin: "Holland",
        price: 120
      },
      {
        id: 5,
        name: "Honey from Cats",
        origin: "China",
        price: 2
      },      
      {
        id: 6,
        name: "Honey with Gold",
        origin: "Egypt",
        price: 300
      },      
      {
        id: 7,
        name: "Honey with Sausage",
        origin: "Germany",
        price: 32
      },      
    ]
  }
});
