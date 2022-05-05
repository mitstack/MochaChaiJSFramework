const  { testdata } = require("./data.js");
const {responsedata} = require("./data.js");
const { Suite, Test } = require("mocha");
const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;


describe("API GET Tests", () => {

  // Test 1 : Make a GET request to the single posts route and assert the id is the number we passed in query param
  it("GET - Response Validation for Single Posts", () => {
       return request
      .get(testdata.getvalidtest)
      .set(testdata.commonHeaders)
      .expect(200)
      .then((res) => {     
        //schema Validation     
        assert.equal(res.body.id, testdata.responsebody.id)        
        console.log(res.body)
        console.log(testdata.responsebody)
      });
     
     
  });


// Test 2 : Make a invalid GET request and verify the response payload is empty
  it("GET - Invalid Error Handling", () => {
    
      request
      .get(testdata.getinvalidtest)
      .set(testdata.commonHeaders)
      .expect(200)
      .then((res) => {       
        //assertion response is empty when invalid id is provided
        assert.isEmpty(res.body) 
        console.log(res.body) 
      });
     
  });


  // Test 3 : Make a GET request to the multiple posts route and 
  it("GET - Response Validation for Multiple posts", () => {
    return request
   .get(testdata.getrooturl)
   .set(testdata.commonHeaders)
   .expect(200)
   .then((res) => {     
     //assertion response is not empty and userid is the value we passed in query parameter schema Validation     
     assert.isNotEmpty(res.body);     
     console.log(res.body)
   });
  
  
});





});


