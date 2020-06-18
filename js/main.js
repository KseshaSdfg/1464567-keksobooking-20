var adsCount = 8;
var x = 0;
var y = 0;
var ads = [];
var houses = ["palace", "flat", "house", "bungalo"];
var checks = ["12:00", "13:00", "14:00"];
var feature = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
var get_random_integer = function(min, max){
  return Math.floor(Math.random(min) * Math.floor(max));
};
var get_features_list = function(features_list) {
    for (var i = 0; i < get_random_integer(0, features_list.length- 1); i++){
      features_list.splice(0, 0);
    }
  };

var main_function = function(adsCount) {
  for (var j = 0; j < adsCount; j++) {
  var roomAmount = get_random_integer(1, 10);
  var locationX = get_random_integer(0, 1200);
  var locationY = get_random_integer(130, 630);
  get_features_list (feature);
  ads.push({
    "author": {
      "avatar": "img/avatars/user0"+ (j+1) +".png"
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
      "x": locationX,
      "y": locationY
    }
  });
  }
  return ads
};

document.querySelector('.map').classList.remove('map--faded');
main_function(adsCount);
document.querySelector('.map').classList.remove('map--faded');
var MAP_PIN_WIDTH = 50;
var MAP_PIN_HEIGHT = 70;
var mapPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var renderMapPin = function (ad) {
  var mapPinElement = mapPinTemplate.cloneNode(true);
  mapPinElement.style.left = ad.location.x - MAP_PIN_WIDTH / 2 + 'px';
  mapPinElement.style.top = ad.location.y - MAP_PIN_HEIGHT + 'px';
  var mapPinImg = mapPinElement.querySelector('img');
  mapPinImg.src = ad.author.avatar;
  mapPinImg.alt = ad.offer.title;
  return mapPinElement;
};

var drawAd = function () {
  var ads = main_function(adsCount);;
  var fragment = document.createDocumentFragment();
  var mapPinsElement = document.querySelector('.map__pins');
  for (var i = 0; i < ads.length; i++) {
    fragment.appendChild(renderMapPin(ads[i]));
  }
  mapPinsElement.appendChild(fragment);
};

drawAd();
