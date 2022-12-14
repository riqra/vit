const set = (cname: string, cvalue: any, hours: number) => {
  const d = new Date();
  d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

const get = (cname: string) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const cookie = {
  set,
  get
};

export default cookie;
