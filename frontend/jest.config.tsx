module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // other configurations...
  roots: ['<rootDir>/src/tests/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest', // Added this line to transform JavaScript files
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom', // Asegúrate de usar la última versión de jest-environment-jsdom
};