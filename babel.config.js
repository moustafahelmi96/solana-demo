module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@shared': './src/shared',
          '@services': './src/services'
        },
      },
    ],
  ],
};
