// google oAuth 

// import { getGoogleOAuthURL } from '../utils/getGoogleOAuthURL'
const { getGoogleOAuthURL } = require('../utils/getGoogleOAuthURL')
module.exports.getGoogleOAuthUrlRoute=(req,res)=>{
    const url = getGoogleOAuthURL();
    res.status(200).json({url})
}

