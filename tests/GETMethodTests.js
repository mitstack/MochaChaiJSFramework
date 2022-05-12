const { testdata } = require("./data.js");
const { responsedata } = require("./data.js");
const { Suite, Test } = require("mocha");
const { expect } = require("chai");
const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;
var should = require("chai").should();

/*TODO : Add Callback function ForEach loop to add test(s) data*/

GetValidTestResponse = () => {
  return request.get(testdata.getvalidtest).set(testdata.commonHeaders);
}

GetInvalidTestResponse = () => {
  return request.get(testdata.getinvalidtest).set(testdata.commonHeaders);
}

GetMultiplePostTestResponse = () => {
  return request.get(testdata.getrooturl).set(testdata.commonHeaders);
}

describe("API GET Tests", () => {
  // Test 1 : Make a GET request to the single posts route and do schema validation
  it("GET - Response Validation for Single Posts", () => {
    return ResponseResult = GetValidTestResponse()
      .expect(200)
      .then((res) => {
        //GET Response Schema Validation
        expect(res.body).to.deep.equal(responsedata.GETCallSingleresponsebody);
        console.log("Actual Response of the GET API call is ", res.body);
        console.log(
          "Expected Response of the GET API call is ",
          responsedata.GETCallSingleresponsebody
        );
      });
  });

  // Test 2 : Make a invalid GET request and verify the response payload is empty
  it("GET - Invalid Request Error Handling", () => {
    return ResponseResult = GetInvalidTestResponse()
      .expect(400)
      .then((res) => {
        //assertion response is empty when invalid id is provided
        assert.isEmpty(res.body);
      });
  });

  /*TODO : Schema Validation - contract testing */

  // Test 3 : Make a GET request to the multiple posts route and
  it("GET - Response Validation for Multiple posts", () => {
    return ResponseResult = GetMultiplePostTestResponse()
      .expect(200)
      .then((res) => {
        //assertion response is not empty and 100 posts exist

        assert.isNotEmpty(res.body);
        assert.equal(res.body.length, 100);
        console.log("Total records exist in response ", res.body.length);
      });
  });
});
