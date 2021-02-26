const app = require('../server/server.js');
const chai = require('chai')
const chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp)


describe('GET /', function() {
    it('it should return only and start message', () => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
                res.should.have.status(200);
        });


    })
});
describe('GET /first', () => {
    it('validate object requirements', function() {
        chai.request(app)
        .get('/first')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.all.property("id").with.be.a('number')
            res.body.should.have.all.property("name").with.be.a('string')
        })
    })

})