'use strict'

const { test, trait } = use('Test/Suite')('Update User')
const Factory = use('Factory')
const User = use('App/Models/User')
const Hash = use('Hash')

trait('Test/ApiClient')
trait('DatabaseTransactions')


test('updating an user with an invalid email field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  requestBody.email = "invalidemail"
  const response = await client.put('/users/2')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Formato de e-mail inválido'
  })
})

test('updating an user with an email that already exists should return a bad request and prompt and error message', async ({ client }) => {
  const user = await Factory.model('App/Models/User').create()
  const requestBody = getRequestBody()
  requestBody.email = user.email
  const response = await client.put('/users/2')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Endereço de e-mail já existe'
  })
})

test('updating an user with invalid type field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  requestBody.type = 'invalidtype'
  const response = await client.put('/users/1')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo tipo inválido'
  })
})

test('updating an user with an cpf that already exists should return a bad request and prompt and error message', async ({ client }) => {
  const user = await Factory.model('App/Models/User').create()
  const requestBody = getRequestBody()
  requestBody.cpf = user.cpf
  const response = await client.put('/users/2')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'CPF já existe'
  })
})

test('updating an user that does not exist should return not found', async ({ client }) => {
  const response = await client.get('/users/10').end()

  response.assertStatus(404)
})

test('updating a valid user should return an ok request and prompt the user updated', async ({ client }) => {
  const user = await Factory.model('App/Models/User').create()
  const requestBody = getRequestBody()
  requestBody.bio = 'Test bio'
  const response = await client.put('/users/1')
                    .send(requestBody).end()

  const expectedResponse = requestBody
  delete expectedResponse.password
  response.assertStatus(200)
  response.assertJSONSubset(expectedResponse)
})

function getRequestBody() {
  return {
    id: 1,
    email: 'email@email.com',
    password: '123456',
    address: 'Rua Teste, 1',
    username: 'usuario',
    type: 'consumidor',
    phone: '17996588587',
    cpf: '40587585225'
  }
}
