/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
   suite("Function convertHandler.getNum(input)", function () {
      test("Whole number input", function (done) {
         let input = "32L";
         assert.equal(convertHandler.getNum(input), 32);
         done();
      });

      test("Decimal Input", function (done) {
         let input = "32.5L";
         assert.equal(convertHandler.getNum(input), 32.5);
         done();
      });

      test("Fractional Input", function (done) {
         let input = "4/2";
         assert.equal(convertHandler.getNum(input), 2);
         done();
      });

      test("Fractional Input w/ Decimal", function (done) {
         let input = "7/3.5";
         assert.equal(convertHandler.getNum(input), 2);
         done();
      });

      test("Invalid Input (double fraction)", function (done) {
         let input = "2/2/2";
         assert.equal(convertHandler.getNum(input), undefined);
         done();
      });

      test("No Numerical Input", function (done) {
         let input = "twol";
         assert.equal(convertHandler.getNum(input), undefined);
         done();
      });
   });

   suite("Function convertHandler.getUnit(input)", function () {
      test("For Each Valid Unit Inputs", function (done) {
         let input = [
            "gal",
            "l",
            "mi",
            "km",
            "lbs",
            "kg",
            "GAL",
            "L",
            "MI",
            "KM",
            "LBS",
            "KG",
         ];
         let output = [
            "gal",
            "L",
            "mi",
            "km",
            "lbs",
            "kg",
            "gal",
            "L",
            "mi",
            "km",
            "lbs",
            "kg",
         ];
         input.forEach((ele, index) => {
            console.log(ele, output[index]);
            // console.log(convertHandler.getUnit(ele));
            // assert.equal(convertHandler.getUnit(ele), output[index]);
         });
         done();
      });

      test("Unknown Unit Input", function (done) {
         //done();
      });
   });

   suite("Function convertHandler.getReturnUnit(initUnit)", function () {
      test("For Each Valid Unit Inputs", function (done) {
         let input = ["gal", "l", "mi", "km", "lbs", "kg"];
         let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
         input.forEach(function (ele, i) {
            assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
         });
         done();
      });
   });

   suite("Function convertHandler.spellOutUnit(unit)", function () {
      test("For Each Valid Unit Inputs", function (done) {
         //see above example for hint
         done();
      });
   });

   suite("Function convertHandler.convert(num, unit)", function () {
      test("Gal to L", function (done) {
         let input = [5, "gal"];
         let expected = 18.9271;
         assert.approximately(
            convertHandler.convert(input[0], input[1]),
            expected,
            0.1
         ); //0.1 tolerance
         done();
      });

      test("L to Gal", function (done) {
         //done();
      });

      test("Mi to Km", function (done) {
         //done();
      });

      test("Km to Mi", function (done) {
         //done();
      });

      test("Lbs to Kg", function (done) {
         //done();
      });

      test("Kg to Lbs", function (done) {
         //done();
      });
   });
});
