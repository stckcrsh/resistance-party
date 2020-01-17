module.exports = {
  name: 'vote-tracker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/vote-tracker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
