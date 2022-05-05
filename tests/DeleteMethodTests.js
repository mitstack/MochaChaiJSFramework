const  { testdata } = require("./data.js");
const { Suite, Test } = require("mocha");

const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;


describe("API DELETE Test", () => {

  // Test - 1 : Make a PUT request to the posts route and assert the response is not empty
  it("DELETE API Response is Ok /posts/1", (done) => {   
      request
      .delete("/posts/1")
      .expect(200)
      .then((res) => {
      
        //assertion response is empty     
        assert.isEmpty(res.body);            
      });     
      done();
  });


   // Test - 2 : Invalid DELETE Request
  it("DELETE API Negative Test  /posts/", (done) => {  
      request
      .delete("/posts")
      .expect(404);      
      done();
  });

})