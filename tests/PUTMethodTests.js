const  { testdata } = require("./data.js");
const { Suite, Test } = require("mocha");

const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;


describe("API PUT Test", () => {

  // Test - 1 : Make a PUT request to the posts route and update the newly added user
  it("PUT API Response is Ok /posts", (done) => {
    
    
      request
      .put(testdata.getinvalidtest)
      .set(testdata.commonHeaders)
      .send(testdata.requestbody)
      .expect(400)
      .then((res) => {
      
        //assertion response is not empty       
        assert.isNotEmpty(res.body);          
      });    
      done();
  });


  it("PUT API Schema Validation  /posts", (done) => {
    
    
      request
      .put(testdata.getinvalidtest)
      .set(testdata.commonHeaders)
      .send(testdata.requestbody)
      .expect(200)
      .then((res) => {
       
        //assertion response is correct
        assert.equal(res.body, testdata.requestbody);    
      });
      done();
  });

})
