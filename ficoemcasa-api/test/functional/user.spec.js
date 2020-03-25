'use strict'

const { test, trait } = use('Test/Suite')('User')
const Factory = use('Factory')
const User = use('App/Models/User')
const Hash = use('Hash')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('creating an user with a empty body should return a bad request', async ({ client }) => {
  const response = await client.post('/users').end()

  response.assertStatus(400)
})

test('creating an user without email field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.email
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo e-mail é obrigatório'
  })
})

test('creating an user with an invalid email field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  requestBody.email = "invalidemail"
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Formato de e-mail inválido'
  })
})

test('creating an user with an email that already exists should return a bad request and prompt and error message', async ({ client }) => {
  const user = await Factory.model('App/Models/User').create()
  const requestBody = getRequestBody()
  requestBody.email = user.email
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Endereço de e-mail já existe'
  })
})

test('creating an user without password field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.password
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo senha é obrigatório'
  })
})

test('creating an user without username field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.username
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo nome de usuário é obrigatório'
  })
})

test('creating an user without type field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.type
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo tipo é obrigatório'
  })
})

test('creating an user with invalid type field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  requestBody.type = 'invalidtype'
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo tipo inválido'
  })
})

test('creating an user without phone field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.phone
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo telefone é obrigatório'
  })
})

test('creating an user without cpf field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.cpf
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo CPF é obrigatório'
  })
})

test('creating an user with an cpf that already exists should return a bad request and prompt and error message', async ({ client }) => {
  const user = await Factory.model('App/Models/User').create()
  const requestBody = getRequestBody()
  requestBody.cpf = user.cpf
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'CPF já existe'
  })
})

test('creating an user without address field should return a bad request and prompt and error message', async ({ client }) => {
  const requestBody = getRequestBody()
  delete requestBody.address
  const response = await client.post('/users')
                    .send(requestBody).end()

  response.assertStatus(400)
  response.assertJSON({
    error: 'Campo endereço é obrigatório'
  })
})

test('creating a valid user should return an ok request and prompt the user created', async ({ client }) => {
  const response = await client.post('/users')
                    .send(getRequestBody()).end()

  const expectedResponse = getRequestBody()
  delete expectedResponse.password
  response.assertStatus(200)
  response.assertJSONSubset(expectedResponse)
})

function getRequestBody() {
  return {
    email: 'email@email.com',
    password: '123456',
    address: 'Rua Teste, 1',
    username: 'usuario',
    type: 'consumidor',
    phone: '17996588587',
    cpf: '40587585225'
  }
}
