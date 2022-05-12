const { testdata } = require("./data.js");
const { responsedata } = require("./data.js");
const { Suite, Test } = require("mocha");
const { expect } = require("chai");
const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;
var should = require('chai').should()


describe("API DELETE Test", () => {

  // Test - 1 : Call a Delete request to the posts route and assert the response is empty
  it("DELETE API Response is Ok /posts/1", () => {   
      return request
      .delete(testdata.getvalidtest)
      .expect(200)
      .then((res) => {
      
        //assertion response is empty     
        assert.isEmpty(res.body);            
      });     
      
  });


   // Test - 2 : Call to Invalid DELETE Request
  it("DELETE API Negative Test  /posts/", () => {  
      return request
      .delete(testdata.getrooturl)
      .expect(404);      
     
  });

})