import { AuthModel } from './models';

const AUTH_KEY = 'hq-bounty';

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = 'application/json';
  axios.interceptors.request.use(
    (config: { headers: { Authorization: string } }) => {
      const auth = getAuth();
      if (auth && auth.authToken) {
        config.headers.Authorization = `Bearer ${auth.authToken}`;
      }

      return config;
    },
    (err: any) => Promise.reject(err)
  );
}

const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return;
  }

  const value: string | null = localStorage.getItem(AUTH_KEY);
  if (!value) {
    return;
  }

  try {
    const auth: AuthModel = JSON.parse(value) as AuthModel;
    if (auth) {
      return auth;
    }
  } catch (error) {
    console.error('Local storage parse error', error);
  }
};
