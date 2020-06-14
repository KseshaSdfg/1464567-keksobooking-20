var adsCount = 8;
var x = 0;
var y = 0;
var ads = [];
var titles = ["Заголовок 1", "Заголовок 2", "Заголовок 3"];
var houses = [palace, flat, house, bungalo];
var checks = ["12:00", "13:00", "14:00"];
var feature = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
var get_feature_list = function(list){
    for (var i = 0; i < randomInteger(0, list.length- 1); i++){
      list.remove(list[0]);
    };
  };
for (var j = 0; j < adsCount; i++){
  var roomAmount = randomInteger(1, 10);
  location.x = randomInteger(5, document.width() - 5);
  location.y = randomInteger(130, 630);
  get_feature_list (feature);
  ads.push({
    "author": {
      "avatar": "img/avatars/user0"+ i +".png"
    },
    "offer": {
      "title": "Заголовок " + i,
      "address": location.x + ", " + location.y,
      "price": randomInteger(1, 100000),
      "type": houses[randomInteger(0, houses.length - 1)],
      "rooms": roomAmount,
      "guests": roomAmount * 2,
      "checkin": checks[randomInteger(0, houses.length - 1)],
      "checkout": houses[randomInteger(0, houses.length - 1)],
      "features": feature,
      "description": "строка с описанием",
      "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
    },
  "location": {
      "x": location.x,
      "y": location.y
  }
});}
return ads;

document.querySelector('.map').classList.remove('map--faded');
