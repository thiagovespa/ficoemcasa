'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker, i, data) => {
  const defaultValues = {
    email: faker.email(),
    password: faker.word(),
    bio: faker.paragraph(),
    cpf: faker.cpf(),
    address: faker.address(),
    phone: faker.phone(),
    type: faker.pickone(['consumidor', 'comerciante']),
    active: faker.bool(),
    username: faker.username()
  }

  return { ...defaultValues, ...data }
})
