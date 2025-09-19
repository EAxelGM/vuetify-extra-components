import axios from "axios"
const envs = useRuntimeConfig().public

export const externalApiAxios = axios.create({
  baseURL: envs.baseUrl
})

export const refreshUserDataLogged = async () => {
  const $store = useStore()
  const {data} = await externalApiAxios.get("/sys/auth/profile")
  const userData = data.data
  $store.setUser(userData)
}

externalApiAxios.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem('access_token');
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});