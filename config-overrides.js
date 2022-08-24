module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.output['library'] = {
    name: '__VIT__',
    type: 'umd'
  };

  return config;
}

// https://www.youtube.com/watch?v=WVEvhwv3cBs

// https://medium.com/a-beginners-guide-for-webpack-2/index-html-using-html-webpack-plugin-85eabdb73474

// https://www.jondjones.com/frontend/javascript/js-tips/setting-up-custom-web-pack-config-with-create-react-app-and-react-app-rewired/
