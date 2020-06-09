var titles = ["Заголовок 1", "Заголовок 2", "Заголовок 3"];
var houses = [palace, flat, house, bungalo];
var checks = ["12:00", "13:00", "14:00"];
var feature = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
var feature_list = function(feature){
    for (var i = 0; i < randomInteger(0, feature.length- 1); i++){
      feature.remove(feature[0])
    }
  };
feature_list (feature);
var pisalka = {
  "author": {
      "avatar": "img/avatars/user{{01}}.png"
  },
  "offer": {
      "title": "titles[randomInteger(0, titles.length - 1)]",
      "address": "{{location.x}}, {{location.y}}",
      "price": "90",
      "type": "houses[randomInteger(0, houses.length - 1)]",
      "rooms": "5",
      "guests": "10",
      "checkin": "checks[randomInteger(0, houses.length - 1)]",
      "checkout": "houses[randomInteger(0, houses.length - 1)]",
      "features": "feature",
      "description": "строка с описанием",
      "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
      "x": "randomInteger(5, document.width() - 5)",
      "y": "randomInteger(130, 630)"
  }
};
DocumentFragment.querySelector('.map__pins').style.fill = pisalka;
document.querySelector('.map').classList.remove('map--faded');
