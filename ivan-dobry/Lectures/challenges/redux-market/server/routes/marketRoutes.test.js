const app = require('../index');
const request = require("supertest");

describe('testing on default route', () => {

    test('Testing to see if Jest works', () => {
        expect(1).toBe(1)
    })
    test("It should response the GET method", done => {
        request(app)
          .get("/")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
     
})

describe('testing on detail route', () => {
    test("It should response the GET method on detail", done => {
        request(app)
          .get("/detail")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done()
        });
    });
    test("It should response the GET method", async () => {
        const response = await request(app).get("/detail");
        expect(response.statusCode).toBe(200);
    });

    test("It should response the GET method", async () => {
        const res = {
            json: jest.fn(),
        };

        const req = {
            product: {
                id: 1
            },
        }

        expect(res.json).toHaveBeenCalled();
    });
})

describe('testing on shoppingCart route', () => {
    test("It should response the GET method on shoppingCart", done => {
       request(app)
         .get("/shoppingCart")
         .then(response => {
           expect(response.statusCode).toBe(200);
           done()
        });
     });
     test("It should response the PUT method on shoppingCart", done => {
        request(app)
          .put("/shoppingCart")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done()
        });
    });
    test("It should response the DELETE method on shoppingCart", done => {
        request(app)
          .delete("/shoppingCart")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done()
        });
    });
})