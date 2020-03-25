'use strict'

const User = use('App/Models/User')

class UserController {

    async create ({ request }) {
        return await User.create(request.post())
    }

    async show ({ params }) {
        return await User.findOrFail(params.user)
    }
}

module.exports = UserController
