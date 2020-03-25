'use strict'

const User = use('App/Models/User')

class UserController {

    async create ({ request }) {
        return await User.create(request.post())
    }

    async update({ params, request, response }) {
        console.log('teste', params )
        const user = await User.findBy('id', params.id)
        const data = request.all()

        user.merge(data)
        await user.save()
        return user
      }

    async show ({ params }) {
        return await User.findOrFail(params.user)
    }
}

module.exports = UserController
