const envs = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  host: process.env.HOST,
  isDevelopment: false,
}
envs.isDevelopment = envs.nodeEnv === "development"

/**
 * To use this envs, just import the env like that
 * const envs = useRuntimeConfig().public
 * and you can use the envs
 */

export default envs