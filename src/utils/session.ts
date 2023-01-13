import cookie from "./cookie";

interface SessionData {
  token?: string | undefined,
  role?: string | undefined
}

const data = (): SessionData => {
  const session = cookie.get('session-v', true);

  if (session === '') {
    return {};
  }

  return JSON.parse(decodeURIComponent(decodeURIComponent(cookie.get('session-v', true))))
};

const isLoggedIn = () => data().role === 'user';

const session = {
  data,
  isLoggedIn
}

export default session;
