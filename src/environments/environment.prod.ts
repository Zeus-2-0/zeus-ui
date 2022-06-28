export const environment = {
  production: true,
  testEnvVariable: 'This is a test',
  apiUrl: window[<any>"env"][<any>"apiUrl"] || "default",
  debug: window[<any>"env"][<any>"debug"] || false
};
