'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route
  .post('/users/', 'UserController.create')
  .validator('User')


Route.get('/authenticated/facebook', 'FacebookController.callback')

Route
  .post('/login', 'AuthController.login')
  .validator('Auth')

Route.group(() => {
  //protected routes
  Route
    .get('/users/:user', 'UserController.show')

  Route
    .put('/users/:id', 'UserController.update')
    .validator('User')

  Route
    .get('/payment-types', 'PaymentTypeController.index')

  Route
    .post('/category-types', 'CategoryTypeController.index')
    .validator('CategoryType')

  Route
    .get('/category-types/:id', 'CategoryTypeController.show')

  Route
    .get('/category-types', 'CategoryTypeController.showAll')

  Route
    .delete('/category-types/:id', 'CategoryTypeController.delete')
}).middleware(['auth'])