'use strict'

const { test, trait } = use('Test/Suite')('Show User')
const Factory = use('Factory')
const User = use('App/Models/User')
const Hash = use('Hash')

trait('Test/ApiClient')
trait('DatabaseTransactions')
trait('Auth/Client')

test('showing an user that does not exist should return not found', async ({ client }) => {
  const user = await Factory.model('App/Models/User').create()
  const response = await client
                  .get('/users/10')
                  .loginVia(user)
                  .end()

  response.assertStatus(404)
})

test('showing an user that exist should return an ok request and prompt the user found', async ({ client }) => {
    const user = await Factory.model('App/Models/User').create()
    const response = await client
                      .get(`/users/${user.id}`)
                      .loginVia(user)
                      .end()

    response.assertStatus(200)
    response.assertJSONSubset({
        username: user.username,
        password: user.password,
        email: user.email,
        cpf: user.cpf,
        phone: user.phone,
        address: user.address,
        type: user.type,
        active: user.active ? 1 : 0,
        bio: user.bio
    })
  })

test('showing an user without loggin in should return unauthorized', async ({ client }) => {
  await Factory.model('App/Models/User').create()
  const response = await client.get('/users/1').end()

  response.assertStatus(401)
})