
var pageFunctions = {
    intialize: function () {
      console.log('works');
      var self=this;
      this.intializeWatchers(); //listens for clicks
      // this.functionOne()
    },
    intializeWatchers: function () {
      var self=this;
      var clicker = document.querySelector('#clicker');
      var clickerToo = document.querySelector('#clickerToo');
      clicker.addEventListener("click", function(e) {
        var status = self.seeIfActive(e.target);
        self.rotateTheThing(status, e.target);
        self.makePurple(e.target);
      });
      clickerToo.addEventListener("click", function(e) {
        self.seeIfActive(e.target);
        self.makePurple(e.target);
      });
    },
    makePurple: function(el) {
      var self=this;
      console.log("makepurple", el);
      el.classList.add('active');
    },
    seeIfActive: function(el) {
      var self = this;
      return el.classList.contains("active");
    },
    rotateTheThing: function(status, el) {
      var self = this;

      if (status) {
          el.classList.add('rotate');
      } else {
         console.log('nah');
      }
    }
  };

//
// import sum from 'test'
// console.log(sum(3,3));

//  var foo = 'bar';
//
//  var bar = function(el) {
//    console.log(el);
//    return el + 'dog';
//  }
//
//
//
// console.log(bar("cats and "));
//
// var fooBar = {
//   dog: function(st) {
//     var self=this;
//     // console.log(self.bird);
//     return 'I\'m here ' + st;
//   },
//   bird: function() {
//     var self=this;
//     console.log(self.dog("at Barringtons."));
//     self.foo = "thing";
//   },
//   cat: "two",
//   goat: "three"
// }
//
// // console.log(fooBar.dog("at Barringtons."));
// console.log(fooBar.bird());
