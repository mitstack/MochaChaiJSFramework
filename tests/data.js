exports.testdata = {
  apiendpoint: "https://jsonplaceholder.typicode.com",
  getrooturl: "/posts",
  getvalidtest: "/posts/1",
  getvaliddynamictest : ["/posts/1"],
  getinvalidtest: "/%$",

  requestbody: {
    title: "foo",
    body: "bar",
    userId: 1,
  },

  headers : {
    authorization: "Olo-token"
  }
  
};

exports.responsedata = {
  POSTCallresponsebody: {
    title: "foo",
    body: "bar",
    userId: 1,
    id: 101,
  },

  GETCallSingleresponsebody: {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  PUTCallResponsebody: {
    title: "foo",
    body: "bar",
    userId: 1,
    id: 1,
  },

  PUTBlankCallResponsebody: {
    id: 1,
  },
};



