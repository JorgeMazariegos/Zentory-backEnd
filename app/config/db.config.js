module.exports = {
    HOST: "ep-patient-truth-amadbysw-pooler.c-5.us-east-1.aws.neon.tech",
    USER : "neondb_owner",
    PASSWORD: "npg_xJCkWIM0aB7T",
    DB: "neondb",
    dialect: "postgres",
    pool: {
        max : 5,
        min : 0,
        acquire: 30000,
        idle: 10000
    }
};