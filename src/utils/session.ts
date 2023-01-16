import cookie from "./cookie";
import json from "./json";

interface iData {
  role?: string
}

const data: iData | undefined = json.safelyParse(decodeURIComponent(decodeURIComponent(cookie.get('session-v', true))));

const loggedIn = (data?.role === 'user');

const session = {
  data,
  loggedIn
}

export default session;
