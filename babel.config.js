module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};

// module.exports = {
//   presets: [
//     ... // don't add it here :)
//   ],
//   plugins: [
//     ...
//     'react-native-reanimated/plugin',
//   ],
// };