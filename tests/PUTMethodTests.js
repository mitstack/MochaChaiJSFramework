const { testdata } = require("./data.js");
const { responsedata } = require("./data.js");
const { Suite, Test } = require("mocha");
const { expect } = require("chai");
const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;
var should = require("chai").should();

describe("API PUT Test", () => {
  // Test - 1 : Make a PUT request to the posts route and update the newly added user
  it("PUT API Response is Ok /posts", () => {
    return request
      .put(testdata.getvalidtest)
      
      .send(testdata.requestbody)
      .expect(200)
      .then((res) => {
        //assertion response is not empty
        assert.isNotEmpty(res.body);
        expect(res.body).to.deep.equal(responsedata.PUTCallResponsebody);
        console.log("Actual Response of the PUT API call is ", res.body);
        console.log(
          "Expected Response of the PUT API call is ",
          responsedata.PUTCallResponsebody
        );
      });
  });

  // Test - 2 : Make a PUT request to the posts route with blank request body
  it("PUT API /posts Response is Ok when request body is empty ", () => {
    return request
      .put(testdata.getvalidtest)
      
      .expect(200)
      .then((res) => {
        //assertion response is not empty
        assert.isNotEmpty(res.body);
        expect(res.body).to.deep.equal(responsedata.PUTBlankCallResponsebody);
        console.log("Actual Response of the PUT API call is ", res.body);
        console.log(
          "Expected Response of the PUT API call is ",
          responsedata.PUTBlankCallResponsebody
        );
      });
  });

  // Test - 3 : Make a invlalid PUT request to the posts route with blank request body
  it("PUT API /posts Response is 404 when invalid route is called ", () => {
    return request
      .put(testdata.getrooturl)
      
      .expect(404)
      .then((res) => {
        //assertion response is not empty
        assert.isEmpty(res.body);
      });
  });
});
