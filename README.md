# HotelApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.


#Mockoon Fake Data

[Uploading hote{"openapi":"3.0.0","info":{"title":"Hotel app","version":"1.0.0"},"servers":[{"url":"http://localhost:3000/"}],"paths":{"/reservations":{"get":{"description":"","responses":{"200":{"description":"","content":{"application/json":{"example":"[\n  {\n      \"id\":1,\n      \"guestName\":\"Jan\",\n      \"guestEmail\":\"shentia@yhaoo.com\",\n      \"roomNumber\":100,\n      \"checkInDate\":\"2023-02-23\",\n      \"checkOutDate\":\"2023-12-32\"\n    },\n      {\n      \"id\":2,\n      \"guestName\":\"maan\",\n      \"guestEmail\":\"sh23232entia@yhaoo.com\",\n      \"roomNumber\":120,\n      \"checkInDate\":\"2023-03-23\",\n      \"checkOutDate\":\"2023-12-32\"\n    }\n  ]"}},"headers":{"Access-Control-Allow-Origin":{"schema":{"type":"string"},"example":"*"},"Access-Control-Allow-Methods":{"schema":{"type":"string"},"example":"GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"},"Access-Control-Allow-Headers":{"schema":{"type":"string"},"example":"Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"}}}}}},"/reservation/{id}":{"get":{"description":"","responses":{"200":{"description":"","content":{"application/json":{"example":"{\n  \"id\": 1,\n  \"guestName\": \"Jan\",\n  \"guestEmail\": \"shentia@yhaoo.com\",\n  \"roomNumber\": 100,\n  \"checkInDate\": \"2023-02-23\",\n  \"checkOutDate\": \"2023-12-32\"\n}"}},"headers":{"Access-Control-Allow-Origin":{"schema":{"type":"string"},"example":"*"},"Access-Control-Allow-Methods":{"schema":{"type":"string"},"example":"GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"},"Access-Control-Allow-Headers":{"schema":{"type":"string"},"example":"Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"}}}},"parameters":[{"name":"id","in":"path","schema":{"type":"string"},"required":true}]},"delete":{"description":"","responses":{"204":{"description":"","content":{"application/json":{"example":{}}},"headers":{"Access-Control-Allow-Origin":{"schema":{"type":"string"},"example":"*"},"Access-Control-Allow-Methods":{"schema":{"type":"string"},"example":"GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"},"Access-Control-Allow-Headers":{"schema":{"type":"string"},"example":"Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"}}}},"parameters":[{"name":"id","in":"path","schema":{"type":"string"},"required":true}]},"put":{"description":"","responses":{"200":{"description":"","content":{"application/json":{"example":"{\n  \"id\": 1,\n  \"guestName\": \"Jan\",\n  \"guestEmail\": \"shentia@yhaoo.com\",\n  \"roomNumber\": 100,\n  \"checkInDate\": \"2023-02-23\",\n  \"checkOutDate\": \"2023-12-32\"\n}"}},"headers":{"Access-Control-Allow-Origin":{"schema":{"type":"string"},"example":"*"},"Access-Control-Allow-Methods":{"schema":{"type":"string"},"example":"GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"},"Access-Control-Allow-Headers":{"schema":{"type":"string"},"example":"Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"}}}},"parameters":[{"name":"id","in":"path","schema":{"type":"string"},"required":true}]}},"/reservation":{"post":{"description":"","responses":{"201":{"description":"","content":{"application/json":{"example":{}}},"headers":{"Access-Control-Allow-Origin":{"schema":{"type":"string"},"example":"*"},"Access-Control-Allow-Methods":{"schema":{"type":"string"},"example":"GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"},"Access-Control-Allow-Headers":{"schema":{"type":"string"},"example":"Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"}}}}}}}}l app.json…]()

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


