let OAuth = require('oauth')
var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token', // request token
    'https://api.twitter.com/oauth/access_token', // access token
    '50w9snkwLrsC5tfS4YnR4z6r2', // consumer key
    '9vf5wz7a6r5LQ8DbkE4JIwIumIcLDLfTUoesRV5N8PfWq0BKPW', // secret
    '1.0A',
    null, // callback ur;
    'HMAC-SHA1'
);

oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    '836419613055320064-CZTE1R8qtH7eai9MLxiDf5YImu36u6n', //test user token
    'JEmFKEAQTWI0hdcOPej6YLzwTmdan9HZ7v1izYPqm7sq8', //test user secret
    function (e, data, res) {
        if (e) console.error(e);
        console.log(require('util')
            .inspect(data));

    });
