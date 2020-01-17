module.exports = {
  name: 'missions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/missions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
