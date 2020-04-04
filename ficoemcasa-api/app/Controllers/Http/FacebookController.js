'use strict'

const User = use('App/Models/User')
const Request = use('request')
const jsonWebToken = use('jsonwebtoken');
const Env = use('Env')

class FacebookController { 
    async callback({ request, response }) {
       
        const facebookToken  = request.header('facebookToken')
        if (facebookToken) {
            var path = 'https://graph.facebook.com/me?access_token=' + facebookToken;

            const accessToken = await  new Promise(function (resolve, reject){
                Request.get(path, (error, res, body) => {                
                    var facebookUserData = JSON.parse(body);
                   
                    if (!error && res && res.statusCode && res.statusCode == 200) {
                        if (facebookUserData && facebookUserData.id) {
                            
                            var accessToken = jsonWebToken.sign(facebookUserData, Env.get('FB_CLIENT_SECRET'), {
                                expiresIn: 86400
                            });                        
                            resolve(accessToken)                        
                        } else {
                            reject('Access Forbidden');
                        }
                    }
                    else {                    
                        reject('Access Forbidden');
                    }                
                })
            })             
            response.send({accessToken})
            
        } else {
            response.status(403);
            response.send('Access Forbidden');
        }      
    }   
}

module.exports = FacebookController
