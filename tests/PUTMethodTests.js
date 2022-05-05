const  { testdata } = require("./data.js");
const { Suite, Test } = require("mocha");

const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;


describe("API PUT Test", () => {

  // Test - 1 : Make a PUT request to the posts route and update the newly added user
  it("PUT API Response is Ok /posts", (done) => {
    var commonHeaders = {    
      "X-Testing-Value":1,
      "X-Common-Header":"value",
      "Content-type": "application/json; charset=UTF-8"
    };
    
      request
      .put("/posts/1")
      .set(commonHeaders)
      .send(testdata.requestbody)
      .expect(400)
      .then((res) => {
      
        //assertion response is not empty       
        assert.isNotEmpty(res.body);          
      });    
      done();
  });


  it("PUT API Schema Validation  /posts", (done) => {
    var commonHeaders = {      
      "X-Testing-Value":1,
      "X-Common-Header":"value"
    };
    var requestbody = {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
      request
      .put("/posts/1")
      .set(commonHeaders)
      .send(requestbody)
      .expect(200)
      .then((res) => {
       
        //assertion response is correct
        assert.equal(res.body, requestbody);    
      });
      done();
  });

})