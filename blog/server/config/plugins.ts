import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUD_NAME"),
        api_key: env("API_KEY"),
        api_secret: env("API_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});

export default config;
