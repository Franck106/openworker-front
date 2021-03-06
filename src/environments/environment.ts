// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* Without ending slash */
  apiUrl: 'http://localhost:5000',
  orchestraUrl: 'http://localhost:8585',
  awsElasticUrl: 'https://search-workers-6gqwlw2225jc73bqcdf4bgpe6y.eu-west-3.es.amazonaws.com/proposals/_search?q=',
  elasticUrl: 'http://localhost:9200/proposals/_search?q=',
  orchestrateur: 'https://earrj8sjp2.execute-api.eu-west-3.amazonaws.com/dev/',
  elasticScrapperUrl: 'http://localhost:9200/scrapp/_search',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
