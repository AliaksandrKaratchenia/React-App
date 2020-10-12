module.exports = {
    preset: 'ts-jest',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['<rootDir>/src/setupEnzyme.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['app/react/**/*.{ts,tsx}', '!app/react/__tests__/api/api-test-helpers.ts']
};