const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const userObj = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    passsword: faker.internet.password(),
    });

const companyObj = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const newUser = userObj()
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = companyObj()
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = userObj()
    const newCompany = companyObj()
    const userCompany = {
        user: newUser,
        company: newCompany
    }

    res.json(userCompany);
});


app.listen ( PORT, () => console.log(`Listening on port: ${PORT}`) );
