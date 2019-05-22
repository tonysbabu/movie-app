
export default class Apis {

static fetchMovies(pageNum) {
    switch(pageNum) {
      case 1:
        return page1;

      case 2:
        return page2;

      case 3:
        return page3; 
        
      default:
        return null;  
    }
}
}

const page1 = {
    "title": "Romantic Comedy",
    "total-content-items" : "54",
    "page-num-requested" : "1",
    "page-size-requested" : "20",
    "page-size-returned" : "20",
    "content-items": {
      "content": [
        {
          "name": "The Birds",
          "poster-image": "poster1.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster3.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster2.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster3.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster3.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster1.jpg"
        },
                {
          "name": "The Birds",
          "poster-image": "poster1.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster3.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster2.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster3.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster3.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster1.jpg"
        }
      ]
    }
  }

const page2 = {
    "title": "Romantic Comedy",
    "total-content-items" : "54",
    "page-num-requested" : "2",
    "page-size-requested" : "20",
    "page-size-returned" : "20",
    "content-items": {
      "content": [
        {
          "name": "Rear Window",
          "poster-image": "poster5.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster6.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster5.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster4.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster6.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster6.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster5.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster4.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster4.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster5.jpg"
        },
                {
          "name": "Rear Window",
          "poster-image": "poster5.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster6.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster5.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster4.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster6.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster6.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster5.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster4.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster4.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster5.jpg"
        }
      ]
    }
  }

  const page3 = {
    "title": "Romantic Comedy",
    "total-content-items" : "54",
    "page-num-requested" : "3",
    "page-size-requested" : "20",
    "page-size-returned" : "14",
    "content-items": {
      "content": [
        {
          "name": "Family Pot",
          "poster-image": "poster9.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster8.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster7.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster9.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster9.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster8.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster7.jpg"
        },
               {
          "name": "Family Pot",
          "poster-image": "poster9.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster8.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster7.jpg"
        },
        {
          "name": "The Birds with an Extra Long Title",
          "poster-image": "poster9.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster9.jpg"
        },
        {
          "name": "The Birds",
          "poster-image": "poster8.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "posterthatismissing.jpg"
        }
      ]
    }
  }