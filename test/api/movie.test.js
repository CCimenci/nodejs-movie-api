const chai = require ('chai');
const chaiHttp = require ('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token;


describe('/api/movie tests',() =>{
    before((done) =>{
      chai.request(server)
          .post('/authenticate')
          .send({username:'deneme', password:'123456'})
          .end((err,res) =>{
              token = res.body.token;
              console.log(token);
              done();
          });

    });

    /// mongodb kaydi yapilirken kayit ettigimiz kullanicilara dikkat etmek gerekiyor. kriptolu yapi oldugundan
    /// o kayda gore test edilmesi gerekmektedir.


    describe('/GET movies',() =>{
        it('it should GET all the movies', (done) =>{
            chai.request(server)
                .get('/api/movies')
                .set('x-access-token',token)
                .end((err,res) =>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();

                });



        })
    });
});