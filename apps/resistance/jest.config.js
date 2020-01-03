module.exports = {
  name: 'resistance',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/resistance',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
