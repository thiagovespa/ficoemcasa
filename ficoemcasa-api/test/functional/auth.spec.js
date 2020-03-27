'use strict'

const { test, trait } = use('Test/Suite')('Auth')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('login without email field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.email
  const response = await client.post('/login')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo e-mail é obrigatório'
  })
})

test('login with invalid email address should return bad request and prompt error message', async ({ client }) => {
  const requestBody = getRequestBody()
  requestBody.email = 'invalidemail'
  const response = await client.post('/login')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Formato de e-mail inválido'
  })
})

test('login without email password should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.password
  const response = await client.post('/login')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo senha é obrigatório'
  })
})

test('login with valid credentials should return an ok response and prompt the access token', async ({ client, assert }) => {
  await Factory.model('App/Models/User').create({
    email: 'email@email.com',
    password: '123456'
  })
  const requestBody = getRequestBody()
  const response = await client.post('/login')
                    .send(requestBody).end()

  response.assertStatus(200)
  assert.containsAllKeys(response.body, ['type', 'token', 'refreshToken'])
})

function getRequestBody () {
  return {
    email: 'email@email.com',
    password: '123456'
  }
}
