
const safelyParse = (json: string) => {
  let parsed;

  try {
    parsed = JSON.parse(json)
  } catch { }

  return parsed;
};

const json = {
  safelyParse
};

export default json;
