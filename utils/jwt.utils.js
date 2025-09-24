const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = "*zer*zer*ze*r*zerze*rvcgv4sd54g5sd4g5sd4g5s4d5g4sd5g45"

module.exports = {
    generateTokenForUSer : function( user ) {
        return jwt.sign ( {
            profId : user.id
        },
        JWT_SIGN_SECRET,
        {
            expiresIn : '1h'
        })
    },
    parseAuthorization : function(authorization ) {
        if(authorization.indexOf('Bearer') !== 0 ) return null;
        return (authorization != null ) ? authorization.replace('Bearer ', '') : null;
    },
    getUSerId : function(authorization){
        let userId = -1;
        let token = module.exports.parseAuthorization(authorization);
        if ( token != null ){
            try {
                let jwtToken = jwt.verify( token, JWT_SIGN_SECRET );
                if (jwtToken != null ){
                    userId = jwtToken.userID;
                }
            } catch(err){}
        }
        return userId;
    }
}