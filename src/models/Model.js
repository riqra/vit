class Model {
  data = {};

  constructor(data) {
    this.data = data;
  }

  get(key, defaultValue = undefined) {
    if (!(key in this.data)) {
      if (typeof defaultValue === 'undefined') {
        return null;
      }
      return defaultValue;
    }

    return (this.data)[key];
  }

  set(key, value) {
    if (!(key in this.data)) {
      throw Error();
    }

    (this.data)[key] = value;
  }
}

export default Model;
