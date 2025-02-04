const person = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log("self", self);
    }, 1000);
  },
};

person.talk();

//Arrow
const person1 = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("self", this);
    }, 1000);
  },
};

person1.talk();
