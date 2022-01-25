module.exports = {
  env: {
    DB_LOCAL_URI: `mongodb+srv://bookit:4WM4AE1XJHOVLIoy@cluster0.c7cg1.mongodb.net/bookit?retryWrites=true&w=majority`,

    CLOUDINARY_CLOUD_NAME: "chagy",
    CLOUDINARY_API_KEY: "599531334361122",
    CLOUDINARY_API_SECRET: "jTLURqLVM5Yavbegp9zECRVmxDE",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: 2525,
    SMTP_USER: "663b10caf30bab",
    SMTP_PASSWORD: "ed182a791e09f2",
    SMTP_FROM_NAME: "BookIT",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
