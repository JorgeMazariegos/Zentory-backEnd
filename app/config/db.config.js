module.exports = {
    HOST: "ep-steep-hill-ae5yncti-pooler.c-2.us-east-2.aws.neon.tech",
    USER : "neondb_owner",
    PASSWORD: "npg_dXSh79PYBZOc",
    DB: "neondb",
    dialect: "postgres",
    pool: {
        max : 5,
        min : 0,
        acquire: 30000,
        idle: 10000
    }
};