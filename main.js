var Calc = {
  number: "",
  storedNumber: "",
  operator: "",
  display: $("#display"),
  answer: "",
  dpBoolean: false,
  isWholeNumber: function(num) {
    if (num % 2 === 0) {
      Calc.answer = Calc.answer.toString();
    } else {
      Calc.answer.toFixed(1).toString();
    }
  },
  operation: {
    "+": function(a, b) {
      return a + b;
    },
    "-": function(a, b) {
      return a - b;
    },
    "*": function(a, b) {
      return a * b;
    },
    "/": function(a, b) {
      return a / b;
    }
  },
  clear: function() {
    Calc.number = "";
    Calc.storedNumber = "";
    Calc.display.text("0");
    Calc.dpBoolean = false;
  },
  percent: function() {
    Calc.storedNumber = parseFloat(Calc.number);
    Calc.answer = (Calc.storedNumber / 100);
    this.isWholeNumber(Calc.answer)
    Calc.display.text(Calc.answer);
    Calc.number = Calc.answer;
  },
  absolute: function() {
    Calc.storedNumber = parseFloat(Calc.number);
    if (Calc.storedNumber < 0) {
      Calc.answer = Math.abs(Calc.storedNumber);
      this.isWholeNumber(Calc.answer);
      Calc.display.text(Calc.answer);
    } else {
      Calc.answer = ((Calc.storedNumber) - (Calc.storedNumber * 2));
      this.isWholeNumber(Calc.answer);
      Calc.display.text(Calc.answer);
    }
    Calc.number = Calc.answer;
  },
  equals: function() {
    Calc.storedNumber = parseFloat(Calc.storedNumber);
    Calc.number = parseFloat(Calc.number);
    Calc.answer = Calc.operation[Calc.operator](Calc.storedNumber, Calc.number);
    Calc.display.text(Calc.answer);
    this.isWholeNumber(Calc.answer);
    Calc.number = Calc.answer;
  }
};

$(document).ready(function() {
  $("#decimal").on("click", function() {
    if (Calc.dpBoolean === false && $(this).text() === ".") {
      Calc.dpBoolean = true;
      console.log(Calc.dpBoolean);
      Calc.number += $(this).text();
      Calc.display.text(Calc.number);
    }
  });
  $(".btn").not(".operator, #clear, #decimal").on("click", function() {
    Calc.number += $(this).text();
    Calc.display.text(Calc.number);
  });
  $(".operator").not("#equals").on("click", function() {
    Calc.operator = "";
    Calc.operator += $(this).text();
    Calc.storedNumber = Calc.number;
    Calc.number = "";
  });
  $("#clear").on("click", function() {
    Calc.clear();
  });
  $("#abs").on("click", function() {
    Calc.absolute();
  });
  $("#percent").on("click", function() {
    Calc.percent();
  });
  $("#equals").on("click", function(e) {
    Calc.equals();
  });
});
