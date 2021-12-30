module.exports = ({env}) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int("PORT", 1337),
  url: "https://api.wild-dev.com",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '48d39e0d4acbac1b112afc2f07543ecc'),
    },
  },
});
