var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Public root API', () => {
    it('should return API version JSON on / GET', (done) => {
        chai.request(app).get('/').end( (err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a("object");
            res.body.should.have.property("api");
            res.body.api.should.have.property("version");
            res.body.api.should.have.property("nuid");
            res.body.api.version.should.equal("0.1.1");
            res.body.api.nuid.should.equal(0);
            done();
        });
    });
    // it("should fail to redirect to url from TESTSLUG on /TESTSLUG GET", (done) => {
    //     chai.request(app).get('/TESTSLUG').end( (err, res) => {
    //         res.should.have.status(404);
    //         done();
    //     });
    // });
    // TODO: Create test database
    // it("should create slug on / POST", (done) => {
    //     chai.request(app).post("/6itIE6eWb").send("{url': 'https://wwww.google.com'}").end( (err, res) => {
    //         res.should.have.status(404);
    //         res.should.be.json;
    //         done();
    //     });
    // });
    // it("should fail to redirect to url from TESTSLUG on /TESTSLUG GET", (done) => {
    //     chai.request(app).get('/TESTSLUG').end( (err, res) => {
    //         res.should.have.status(200);
    //         done();
    //     });
    // });
});