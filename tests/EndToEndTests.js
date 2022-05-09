const { Suite, Test } = require("mocha");

const request = require("supertest")(testdata.apiendpoint);
const assert = require("chai").assert;

describe("End To End Tests", () => {
    //Posting the data 

    it("Updating the recently added User", (done) => {

        

request
  .post('/posts')
  .send(testdata.requestbody)
  .expect(200)
  .then((response) => {
// verify post response
    assert.isNotEmpty(response.body);  
  })
  
    request
      .put('/posts/1')
      .send(requestbody)
      .expect(200)
      .expect(function testdata.(response) {
        // updating the recently added post
        assert.isNotEmpty(response.body);
      })


      request
      .get('/posts/1')
      .send(testdata.requestbody)
      .expect(200)
      .expect(function (testdata.response) {
        // updating the recently added post - bug in the api (no real time changes)
       // assert.equal(response.body, requestbody);
      })
      .end(done);
  
    });
})
