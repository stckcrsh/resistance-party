module.exports = {
  name: 'players',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/players',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
