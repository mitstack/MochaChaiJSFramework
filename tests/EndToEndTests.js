const { testdata } = require("./data.js");
const { responsedata } = require("./data.js");
const { Suite, Test } = require("mocha");
const { expect } = require("chai");
const request = require("supertest")(testdata.apiendpoint);
const { assert } = require("chai");

/* IN PROGRESS


Step -1  - create the posts by calling the POST route 
Step -2  - updating the posts by calling the PUT route 
Step -3  - listing the posts by calling the GET route 
Step -4  - create the posts by calling the DELETE route 
Step -5  - Listing the posts by calling the GET route and make sure deleted post is not returned
//https://visionmedia.github.io/superagent/
*/

describe("End To End Tests", () => {
  //Posting the data

  it("Make sure the recently added post got added", () => {
    initialTime = performance.now();
    return request
      .post(testdata.getrooturl)
      .send(testdata.requestbody)
      .expect(201)
      .then((postresponse) => {
        ResponseTime = performance.now() - initialTime;
        console.log(ResponseTime);
        assert.isNotEmpty(postresponse.body);
        const requestId = testdata.getrooturl + "/" + postresponse.body.userId;
        
        
        initialTime = performance.now();
        return request
          .get(requestId)
          .expect(200)
          .then((getresponse) => {
            ResponseTime = performance.now() - initialTime;
            console.log(ResponseTime);
            assert.isNotEmpty(getresponse.body);
            assert.equal(postresponse.body.userId, getresponse.body.id);
            
          });
      });
  });

  it("Make sure user is deleted succesfully", ()=> {

  })
});
