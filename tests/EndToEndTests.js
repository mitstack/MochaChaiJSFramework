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

  it("Delete the recently updated post", () => {
    var requestbody = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    return request
      .post("/posts")
      .send(requestbody)
      .expect(201)
      .then((response1) => {
        // verify post response
        assert.isNotEmpty(response1.body);
       // console.log("response of the post call", response1.body);
       
      return request
      .get("/posts/1")
      .expect(200)
      .then(response2 => {
        assert.isNotEmpty(response2.body);
        console.log("response of the post call earlier", response1.body)
        console.log("response of the get call", response2.body)
        

      })
      });

   

    
      
  });
});
