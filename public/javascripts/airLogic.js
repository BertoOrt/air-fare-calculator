module.exports = {

  travel: function(departure, arrival, wifi, bags, airclass) {
    var price = 0;
    var wife = 0;
    if (departure === "chicago" && arrival === "newyork") {
      price = 350;
    }
    else if (departure === "chicago" &&  arrival === "losangeles") {
      price = 545;
    }
    else if (departure === "newyork" && arrival === "chicago") {
      price = 350;
    }
    else if (departure === "newyork" && arrival === "losangeles") {
      price = 250;
    }
    else if (departure === "losangeles" && arrival === "newyork") {
      price = 250;
    }
    else if (departure === "losangeles" && arrival === "chicago") {
      price = 545;
    }
    if (wifi === "on") {
      wife = 12
    }
    if (price === 0) {
      return 0
    }
    else {
      return (Number(price) + Number(airclass) + Number(bags * 25) + Number(wife))
    }
  },

  discount: function(value) {
    var discount = 1;
    if (value === "10OFF") {
      discount = .90;
    }
    else if (value === "20OFF") {
      discount = .80;
    }
    return discount;
  },

}
