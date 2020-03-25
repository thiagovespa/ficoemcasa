'use strict'

const User = use('App/Models/User')

class UserController {

    async create({ request }) {
        return await User.create(request.post())
    }
}

module.exports = UserController
