import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.GRAPHQL_DB,
  process.env.GRAPHQL_USER,
  process.env.GRAPHQL_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

const db = {
  User: sequelize.import('./user'),
  Board: sequelize.import('./board'),
  Suggestion: sequelize.import('./suggestion'),
  FbAuth: sequelize.import('./FbAuth'),
  LocalAuth: sequelize.import('./localAuth'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
