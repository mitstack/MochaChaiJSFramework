const { testdata } = require("./data.js");
const { responsedata } = require("./data.js");
const { Suite, Test } = require("mocha");
const { expect } = require("chai");
const request = require("supertest")(testdata.apiendpoint);
const { assert } = require("chai");

var GetMultiplePostTestResponse = (() => {
  return request.get(testdata.getrooturl);
})();

describe("API GET Tests", () => {
  // Multiple Tests for : Make a GET request to the single posts route and do schema validation

  testdata.getvaliddynamictest.forEach((validtests) => {
    it(`GET - Response Validation for Single Posts ${validtests}`, () => {
      return request
        .get(validtests)
        .expect(200)
        .timeout({
          response: 5000,
        })
        .then((res) => {
          expect(res.body).to.deep.equal(
            responsedata.GETCallSingleresponsebody
          );
          console.log(
            `Actual Response of the ${validtests} GET API call is `,
            res.body
          );
          console.log(
            "Expected Response of the GET API call is ",
            responsedata.GETCallSingleresponsebody
          );
        });
    });
  });

  // Test 2 : Make a invalid GET request and verify the response payload is empty
  it("GET - Invalid Request Error Handling", () => {
    const initialTime = performance.now();

    return request
      .get(testdata.getinvalidtest)
      .expect(400)
      .timeout({
        response: 5000,
      })
      .then((res) => {
        ResponseTime = performance.now() - initialTime;
        //assertion response is empty when invalid id is provided

        console.log("response time of the api", ResponseTime);

        assert.isEmpty(res.body);
      });
  });

  /*TODO : Schema Validation - contract testing */
  //Test 3 : Make a GET request to the multiple posts route and
  it("GET - Response Validation for Multiple posts", () => {
    return GetMultiplePostTestResponse.expect(200)
      .timeout({
        response: 5000,
      })

      .then((res) => {
        //assertion response is not empty and 100 posts exist

        assert.isNotEmpty(res.body);
        assert.equal(res.body.length, 100);
        console.log("Total records exist in response ", res.body.length);
      });
  });
});
