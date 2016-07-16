/**
 * Created by yunhaoshen on 7/1/16.
 */
'use strict';

angular.module('projectApp')
  .factory('photoFactory',function(){
    var photos = [
      {
        _id: 0,
        location: "Haleakalā National Park, Maui, Hawaii",
        googleMap: "https://www.google.com/maps/place/Haleakal%C4%81+National+Park/@20.7203826,-156.1573464,17z/data=!3m1!4b1!4m5!3m4!1s0x7954b73425a04bd1:0x9c23fd88e8f5f4ca!8m2!3d20.7203826!4d-156.1551524",
        image: '/images/photos/IMG_9826.jpg',
        date: '2016.04',
      },
      {
        _id: 1,
        location: "Haleakalā National Park, Maui, Hawaii",
        googleMap: "https://www.google.com/maps/place/Haleakal%C4%81+National+Park/@20.7203826,-156.1573464,17z/data=!3m1!4b1!4m5!3m4!1s0x7954b73425a04bd1:0x9c23fd88e8f5f4ca!8m2!3d20.7203826!4d-156.1551524",
        image: '/images/photos/IMG_9776.jpg',
        date: '2016.04',
      },
      {
        _id: 2,
        location: "Makena Beach State Park, Maui, Hawaii",
        googleMap: "https://www.google.com/maps/place/Makena+Beach+State+Park/@20.6345903,-156.4486883,17z/data=!3m1!4b1!4m5!3m4!1s0x7954dca05e5b47bd:0x2dd055942892efff!8m2!3d20.6345903!4d-156.4464943",
        image: '/images/photos/IMG_9587.jpg',
        date: '2016.04',
      },
      {
        _id: 4,
        location: "Diamond Head, Oahu, Hawaii",
        googleMap: "https://www.google.com/maps/place/Diamond+Head/@21.2637537,-157.8061576,16.84z/data=!4m12!1m6!3m5!1s0x7c00728901172099:0x429e0b513230e252!2sDiamond+Head+State+Monument!8m2!3d21.2637984!4d-157.8040943!3m4!1s0x0:0x8ed32dc0972431bc!8m2!3d21.261521!4d-157.8058778",
        image: '/images/photos/IMG_9485.jpg',
        date: '2016.04',
      },
      {
        _id: 5,
        location: "Makapu'u Beach, Oahu, Hawaii",
        googleMap: "https://www.google.com/maps/place/Makapu'u+Beach/@21.3110583,-157.6621688,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0011633c4667bf:0x24ed059147c8afa!8m2!3d21.3110583!4d-157.6599748",
        image: '/images/photos/IMG_9355.jpg',
        date: '2016.04',
      },
      {
        _id: 6,
        location: "Lanikai Beach, Oahu, Hawaii",
        googleMap: "https://www.google.com/maps/place/Lanikai+Beach/@21.3930921,-157.7176295,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0014dd17442541:0x88415fbfd50f90b8!8m2!3d21.3930921!4d-157.7154355",
        image: '/images/photos/IMG_9271.jpg',
        date: '2016.04',
      },
      {
        _id: 7,
        location: "Sandy Beach Park, Oahu, Hawaii",
        googleMap: "https://www.google.com/maps/place/Sandy+Beach+Park/@21.2856686,-157.6747868,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0013d93e8ba33f:0x8741e1408e8bb576!8m2!3d21.2856686!4d-157.6725928",
        image: '/images/photos/IMG_9083.jpg',
        date: '2016.04',
      },
      {
        _id: 8,
        location: "Richardson Hwy, Alaska",
        googleMap: "https://www.google.com/maps/place/Richardson+Hwy,+North+Pole,+AK+99705/@64.7527276,-147.338071,17z/data=!3m1!4b1!4m5!3m4!1s0x56cb1fd48765bfd3:0x518b76500e4e01cc!8m2!3d64.7527276!4d-147.335877",
        image: '/images/photos/IMG_8171.jpg',
        date: '2015.09',
      },
      {
        _id: 9,
        location: "Cold Foot, Alaska",
        googleMap: "https://www.google.com/maps/place/Coldfoot,+AK/@67.2353182,-150.2266042,11z/data=!3m1!4b1!4m5!3m4!1s0x5128c0e716ad1835:0x50a68a6483ae4827!8m2!3d67.2524398!4d-150.1771514",
        image: '/images/photos/IMG_7946.jpg',
        date: '2015.09',
      },
      {
        _id: 10,
        location: "Dalton Hwy, Alaksa",
        googleMap: "https://www.google.com/maps/place/Dalton+Hwy,+Alaska/@67.8441173,-149.8191683,17z/data=!3m1!4b1!4m5!3m4!1s0x51263c94e8caa953:0xd2115c2b28ef1c69!8m2!3d67.8441173!4d-149.8169743",
        image: '/images/photos/IMG_7913.jpg',
        date: '2015.09',
      },
      {
        _id: 11,
        location: "Denali National Park and Preserve, Alaska",
        googleMap: "https://www.google.com/maps/place/Denali+National+Park+and+Preserve/@63.1148002,-151.1947998,17z/data=!3m1!4b1!4m5!3m4!1s0x56cdf3ff88d01605:0xc6b53b15131936a5!8m2!3d63.1148002!4d-151.1926058",
        image: '/images/photos/IMG_7350.jpg',
        date: '2015.09',
      },
      {
        _id: 12,
        location: "Denali National Park and Preserve, Alaska",
        googleMap: "https://www.google.com/maps/place/Denali+National+Park+and+Preserve/@63.1148002,-151.1947998,17z/data=!3m1!4b1!4m5!3m4!1s0x56cdf3ff88d01605:0xc6b53b15131936a5!8m2!3d63.1148002!4d-151.1926058",
        image: '/images/photos/IMG_7168.jpg',
        date: '2015.09',
      },
      {
        _id: 13,
        location: "Mount Denali, Alaska",
        googleMap: "https://www.google.com/maps/place/Denali/@63.0691235,-151.0771948,12z/data=!3m1!4b1!4m5!3m4!1s0x56cde603306d1c1b:0xb36f3b95ebe1ce02!8m2!3d63.0691689!4d-151.0069842",
        image: '/images/photos/IMG_6588.jpg',
        date: '2015.09',
      },
      {
        _id: 14,
        location: "Kenai Fjords National Park, Alaska",
        googleMap: "https://www.google.com/maps/place/Kenai+Fjords+National+Park/@60.0437764,-149.8185584,17z/data=!3m1!4b1!4m5!3m4!1s0x56c79c630608aa09:0x12143ced272edc64!8m2!3d60.0437764!4d-149.8163644",
        image: '/images/photos/IMG_6190.jpg',
        date: '2015.09',
      },
      {
        _id: 15,
        location: "Crater Lake National Park, Oregon",
        googleMap: "https://www.google.com/maps/place/Crater+Lake+National+Park/@42.8684411,-122.1706725,17z/data=!3m1!4b1!4m5!3m4!1s0x54c6170840e5e339:0x902bf2e1452fe3a3!8m2!3d42.8684411!4d-122.1684785",
        image: '/images/photos/IMG_5533.jpg',
        date: '2015.07',
      },
      {
        _id: 16,
        location: "Tulip Town, Washington",
        googleMap: "https://www.google.com/maps/place/Tulip+Town/@48.4279625,-122.4258766,17z/data=!3m1!4b1!4m5!3m4!1s0x54856fa8f81ecd09:0x4e1b4921812f9b1!8m2!3d48.4279625!4d-122.4236826",
        image: '/images/photos/IMG_2566.jpg',
        date: '2015.04',
      },
      {
        _id: 17,
        location: "Downtown Skyline, Seattle, Washington",
        googleMap: "https://www.google.com/maps/place/Dr.+Jose+Rizal+Park/@47.6084989,-122.3461802,13.48z/data=!4m5!3m4!1s0x0:0x7961f5440df0a1dc!8m2!3d47.5931698!4d-122.3187304",
        image: '/images/photos/IMG_2409.jpg',
        date: '2015.03',
      },
      {
        _id: 18,
        location: "Grand Teton National Park, Wyoming",
        googleMap: "https://www.google.com/maps/place/Grand+Teton+National+Park/@43.7904282,-110.6839567,17z/data=!3m1!4b1!4m5!3m4!1s0x5352519ec95d1ba9:0xa5a0b88ecc91a337!8m2!3d43.7904282!4d-110.6817627",
        image: '/images/photos/IMG_9892.jpg',
        date: '2014.07',
      },
      {
        _id: 19,
        location: "Yellow Stone National Park",
        googleMap: "https://www.google.com/maps/place/Yellowstone+National+Park/@44.42577,-110.592788,12.27z/data=!4m5!3m4!1s0x5351e55555555555:0xaca8f930348fe1bb!8m2!3d44.427963!4d-110.588455",
        image: '/images/photos/IMG_0184.jpg',
        date: '2014.07',
      },
      {
        _id: 20,
        location: "Yellow Stone National Park",
        googleMap: "https://www.google.com/maps/place/Yellowstone+National+Park/@44.42577,-110.592788,12.27z/data=!4m5!3m4!1s0x5351e55555555555:0xaca8f930348fe1bb!8m2!3d44.427963!4d-110.588455",
        image: '/images/photos/IMG_0041.jpg',
        date: '2014.07',
      },

    ];

    var photoFac = {};
    photoFac.getPhotos = function (){
      return photos;
    };
    photoFac.getPhoto = function (index){
      return photos[index];
    };

    return photoFac;
  })

;
