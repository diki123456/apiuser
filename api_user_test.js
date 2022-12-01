const apiuser = require('./api_user');
const {expect, assert} = require('chai');

const { createInvalidExceptionError, createMochaInstanceAlreadyRunningError } = require('./node_modules copy/mocha/lib/errors');
const { expect } = require('chai');
const {scenario} = require('../scenarios/scenarios')

describe('Api user test',async () => {
    it('test apakah username salah itu tidak keluarkan data',async ( =>{
        const response = await apiuser.getuserbyname();
        
        console.log(response.body);


    })
});

describe('Api user test',async () => {
    it('test apakah username salah itu tidak keluarkan data',async () =>{
        cost response = await apiuser.getuserbyname();

        console.log(respons.body);
        expect(response.body.status).to.equal ('succesed');




    });
});   


describe(scenarios.createuser.description, async () => {

    it (scenarios.createuser.testcases.case2, async () =>{
        let body =()
        Object.assign(body, requesbody)
        body.age=-10;
        console.log(body)
        const response = await apiuser.postusercreate(body)
        console.log(response.body)
        expect(response.status).to.equal (400)
        assert.equal(response.status,400,"status code is wrong")
        expect(response.body.massage).to ('you must specify')
    }

}

it (scenarios.createuser.testcases.case3, async () =>{
    let body =()
    object.assign(body, requestbody)
    body.id= null;
    console.log(body)
    const response = await apiuser.postusercreate(body)
    console.log(response.body)
    expect(response.null).to.be (400)

}

it (scenarios.createuser.testcases.case4, async () =>{
    let body =()
    object.assign(body, requestbody)
    body.hoby= empty Array;
    console.log(body)
    const response = await apiuser.postusercreate(body)
    console.log(response.body)
    
}







    
