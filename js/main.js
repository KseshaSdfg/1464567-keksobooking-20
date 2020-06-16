var adsCount = 8;
var x = 0;
var y = 0;
var ads = [];
var houses = ["palace", "flat", "house", "bungalo"];
var checks = ["12:00", "13:00", "14:00"];
var feature = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
var get_random_integer = function(min, max){
  return Math.floor(Math.random(min) * Math.floor(max));
}
var get_features_list = function(features_list){
    for (var i = 0; i < get_random_integer(0, features_list.length- 1); i++){
      features_list.splice(0, 0);
    };
  };

var main_function = function(adsCount){for (var j = 0; j < adsCount; j++){
  var roomAmount = get_random_integer(1, 10);
  location.x = get_random_integer(5, document.width - 5);
  location.y = get_random_integer(130, 630);
  get_features_list (feature);
  ads.push({
    "author": {
      "avatar": "img/avatars/user0"+ j +".png"
    },
    "offer": {
      "title": "Заголовок " + j,
      "address": location.x + ", " + location.y,
      "price": get_random_integer(1, 100000),
      "type": houses[get_random_integer(0, houses.length - 1)],
      "rooms": roomAmount,
      "guests": roomAmount * 2,
      "checkin": checks[get_random_integer(0, checks.length - 1)],
      "checkout": checks[get_random_integer(0, checks.length - 1)],
      "features": feature,
      "description": "строка с описанием",
      "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
    },
  "location": {
      "x": location.x,
      "y": location.y
  }
});}
return ads};
main_function(adsCount);
document.querySelector('.map').classList.remove('map--faded');
var printPins = function(){
  for (var j = 0; j < adsCount; j++){
  document.querySelector('.map__pins').innerHTML += main_function;
  };
}
printPins();
var get_information = function(){
  document.querySelector('.popup__title').value = offer.title.textContent;
  if (offer.type === 'flat') {
    var home_type = 'Квартира';
  }
  else if (offer.type === 'bungalo') {
    var home_type = 'Бунгало';
  }
  else if (offer.type === 'house') {
    var home_type = 'Дом';
  }
  else {
    var home_type = 'Дворец';
  }
  ;
  var popup__photos = document.querySelector('.popup__photos');
  var photos = [];
  document.querySelector('.popup__text--address').appendChild(ads[0].offer.address);
  document.querySelector('.popup__text--price').appendChild(ads[i].offer.price + '₽/ночь');
  document.querySelector('.popup__type').appendChild(home_type);
  document.querySelector('.popup__text--time').appendChild('Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout);
  document.querySelector('.popup__features');
  document.querySelector('.popup__description').appendChild(offer.description);
  for (var i = 0; i < offer.photos.lenght; i++) {
    photos.push("src = &quot;" + offer.photos[i] + "&quot;");
  }
  ;
}
document.querySelector('.map').push(main_function);
DocumentFragment.querySelector('.map__pins').innerHTML += main_function;
