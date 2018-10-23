const allComments = [
    {
      "id": 0,
      "dishId": 0,
      "rating": 5,
      "comment": "Imagine all the eatables, living in conFusion!",
      "author": "John Lemon",
      "date": "2012-10-16T17:57:28.556094Z"
    },
    {
      "id": 1,
      "dishId": 0,
      "rating": 4,
      "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      "author": "Paul McVites",
      "date": "2014-09-05T17:57:28.556094Z"
    },
    {
      "id": 2,
      "dishId": 0,
      "rating": 3,
      "comment": "Eat it, just eat it!",
      "author": "Michael Jaikishan",
      "date": "2015-02-13T17:57:28.556094Z"
    },
    {
      "id": 3,
      "dishId": 0,
      "rating": 4,
      "comment": "Ultimate, Reaching for the stars!",
      "author": "Ringo Starry",
      "date": "2013-12-02T17:57:28.556094Z"
    },
    {
      "id": 4,
      "dishId": 0,
      "rating": 2,
      "comment": "It's your birthday, we're gonna party!",
      "author": "25 Cent",
      "date": "2011-12-02T17:57:28.556094Z"
    },
    {
      "id": 5,
      "dishId": 1,
      "rating": 5,
      "comment": "Imagine all the eatables, living in conFusion!",
      "author": "John Lemon",
      "date": "2012-10-16T17:57:28.556094Z"
    },
    {
      "id": 6,
      "dishId": 1,
      "rating": 4,
      "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      "author": "Paul McVites",
      "date": "2014-09-05T17:57:28.556094Z"
    },
    {
      "id": 7,
      "dishId": 1,
      "rating": 3,
      "comment": "Eat it, just eat it!",
      "author": "Michael Jaikishan",
      "date": "2015-02-13T17:57:28.556094Z"
    },
    {
      "id": 8,
      "dishId": 1,
      "rating": 4,
      "comment": "Ultimate, Reaching for the stars!",
      "author": "Ringo Starry",
      "date": "2013-12-02T17:57:28.556094Z"
    },
    {
      "id": 9,
      "dishId": 1,
      "rating": 2,
      "comment": "It's your birthday, we're gonna party!",
      "author": "25 Cent",
      "date": "2011-12-02T17:57:28.556094Z"
    },
    {
      "id": 10,
      "dishId": 2,
      "rating": 5,
      "comment": "Imagine all the eatables, living in conFusion!",
      "author": "John Lemon",
      "date": "2012-10-16T17:57:28.556094Z"
    },
    {
      "id": 11,
      "dishId": 2,
      "rating": 4,
      "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      "author": "Paul McVites",
      "date": "2014-09-05T17:57:28.556094Z"
    },
    {
      "id": 12,
      "dishId": 2,
      "rating": 3,
      "comment": "Eat it, just eat it!",
      "author": "Michael Jaikishan",
      "date": "2015-02-13T17:57:28.556094Z"
    },
    {
      "id": 13,
      "dishId": 2,
      "rating": 4,
      "comment": "Ultimate, Reaching for the stars!",
      "author": "Ringo Starry",
      "date": "2013-12-02T17:57:28.556094Z"
    },
    {
      "id": 14,
      "dishId": 2,
      "rating": 2,
      "comment": "It's your birthday, we're gonna party!",
      "author": "25 Cent",
      "date": "2011-12-02T17:57:28.556094Z"
    },
    {
      "id": 15,
      "dishId": 3,
      "rating": 5,
      "comment": "Imagine all the eatables, living in conFusion!",
      "author": "John Lemon",
      "date": "2012-10-16T17:57:28.556094Z"
    },
    {
      "id": 16,
      "dishId": 3,
      "rating": 4,
      "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      "author": "Paul McVites",
      "date": "2014-09-05T17:57:28.556094Z"
    },
    {
      "id": 17,
      "dishId": 3,
      "rating": 3,
      "comment": "Eat it, just eat it!",
      "author": "Michael Jaikishan",
      "date": "2015-02-13T17:57:28.556094Z"
    },
    {
      "id": 18,
      "dishId": 3,
      "rating": 4,
      "comment": "Ultimate, Reaching for the stars!",
      "author": "Ringo Starry",
      "date": "2013-12-02T17:57:28.556094Z"
    },
    {
      "id": 19,
      "dishId": 3,
      "rating": 2,
      "comment": "It's your birthday, we're gonna party!",
      "author": "25 Cent",
      "date": "2011-12-02T17:57:28.556094Z"
    },
    {
      "dishId": 1,
      "author": "Dima",
      "comment": "great dish!!!!!",
      "date": "2018-10-01T20:56:50.175Z",
      "id": 20
    },
    {
      "dishId": 1,
      "rating": "2",
      "author": "4r4r",
      "comment": "4r4r",
      "date": "2018-10-05T22:48:23.756Z",
      "id": 21
    },
    {
      "dishId": 1,
      "rating": "3",
      "author": "wded",
      "comment": "eded",
      "date": "2018-10-05T22:50:12.780Z",
      "id": 22
    },
    {
      "dishId": 1,
      "rating": "2",
      "author": "john",
      "comment": "12345",
      "date": "2018-10-05T23:08:45.732Z",
      "id": 23
    },
    {
      "dishId": 1,
      "rating": "3",
      "author": "ererer",
      "comment": "erere",
      "date": "2018-10-06T17:29:46.090Z",
      "id": 24
    },
    {
      "dishId": 1,
      "author": "dima",
      "comment": ",l,,l,l",
      "date": "2018-10-06T17:56:31.119Z",
      "id": 25
    }
  ]

  module.exports = allComments;