module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('WILD_DATABASE_HOST'),
        port: env.int('WILD_DATABASE_PORT'),
        database: env('WILD_DATABASE_NAME'),
        username: env('WILD_DATABASE_USERNAME'),
        password: env('WILD_DATABASE_PASSWORD'),
        ssl: env.bool('WILD_DATABASE_SSL'),
      },
      options: {}
    },
  },
});
