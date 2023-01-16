const set = (cname: string, cvalue: any, hours: number) => {
  const d = new Date();
  d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

const get = (name: string, partial: boolean = false) => {
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookies = decodedCookies.split(';');
  for (let cookie of cookies) {
    /* 
      - The following split expects a string with this format: "cookieName=cookieValue"
      - It will take into account just the first "=" to split
    */
    let [cookieName, cookieValue] = cookie.split(/=(.*)/s);
    cookieName = cookieName.trim();

    /*
      - The following conditional allows to compare partially the cookie name 
    */
    if (partial) {
      if (cookieName.includes(name)) {
        return cookieValue;
      }
    }

    /*
      - The following conditional compares the full cookie name 
    */
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return "";
}

const cookie = {
  set,
  get
};

export default cookie;
