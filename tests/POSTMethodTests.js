const  { testdata } = require("./data.js");
const { Suite, Test } = require("mocha");

const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;


describe("API POST Test", () => {

  // Test - 1 : Make a POST request to the posts route and assert the response is not empty
  it("POST API Response is Ok /posts", (done) => {
    
      request
      .post(testdata.getvalidtest)
      .set(testdata.commonHeaders)
      .send(testdata.requestbody)
      .expect(200)
      .then((res) => {
      
        //assertion response is not empty       
        assert.isNotEmpty(res.body);       
      });   
      
  });


  // Test - 2 : Make a POST request to the posts route and do schema validation
  it("POST API Schema Validation  /posts", () => {
    
    
    request
    .post(testdata.getvalidtest)
    .set(testdata.commonHeaders)
    .send(testdata.requestbody)
    .expect(200)
    .then((res) => {
       
        //assertion Schema Validation
        assert.equal(res.body.title, testdata.requestbody.title); 
        assert.equal(res.body.userId, testdata.requestbody.userId); 
        assert.equal(res.body.body, testdata.requestbody.body);       
      });
     
  });

})