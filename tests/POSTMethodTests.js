const { testdata } = require("./data.js");
const { responsedata } = require("./data.js");
const { Suite, Test } = require("mocha");
const { expect } = require("chai");
const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;
var should = require("chai").should();

var PostValidResponse = (() =>{
  return request
  .post(testdata.getrooturl)
  .send(testdata.requestbody)

})();


var PostInValidResponse = (() =>{
  return request
  .post(testdata.getinvalidtest)
  .send(testdata.requestbody)

})();

describe("API POST Test", () => {
  // Schema Validation : Make a POST request to the multiple posts route and assert the response is not empty and Schema Validation
  it("POST Route To /posts", () => {
      PostValidResponse
      .expect(201)
      .then((res) => {
        assert.isNotEmpty(res.body);
        expect(res.body).to.deep.equal(responsedata.POSTCallresponsebody);

        console.log("Actual Response of the POST API call is ", res.body);
        console.log(
          "Expected Response of the POST API call is ",
          responsedata.POSTCallresponsebody
        );
      });
  });

  //Negative Test : Make a POST request to invalid path
  it("POST Route to invalid path /posts/#$", () => {
      PostInValidResponse
      .expect(400) // send payload data
      .then((res) => {
        assert.isEmpty(res.body);
      });
  });
});
