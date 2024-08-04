const jwt= require("jsonwebtoken")
const {GraphQLError} = require("graphql")
const secret=  "buffalowings"
const maxAge= "24h"
module.exports = {
    AuthError: new GraphQLError("Failed to authenticate",
        {extensions: {
        code: "Unauthenticated"
        }}
    ),
   authMiddleware: function({req}){
        let token = req.body.token || req.query.token ||req.headers.authorization
        if (req.headers.authorization) {
            token=token.split(" ").pop.trim()
            //ABOVE DONE IN HEADERS TO AVOID EXTRA SPACING IN TOKEN
        }
        if(!token){
            return req
        }
            //IF NO TOKEN, THEN CODE CONTINUES
            try{
                const {data}=jwt.verify(token,secret, {maxAge:expiration})
                req.user=data
                // WHAT THE TOKEN NEEDS. TAKES THE SECRET AND DEFINES HOW LONG IT LASTS
                }
                catch{
                    console.log("Invalidtoken")
                }
                return req
   },
   createToken: function({username, email,_id}){
    const payload={username, email,_id}
    return jwt.sign({data:payload}, secret,{expiresIn:maxAge})
    //THESE ARE THE THINGS NEEDED TO CREATE A WEB TOKEN

   }
}   