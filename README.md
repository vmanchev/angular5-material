# Angular5Material

The purpose of this project is provide a quick start for Angular5 projects with Material already integrated. You'll find some 
useful modules and most of the Material form components as sample forms. 

## Structure

1. **app-material** This module makes the Material components available in the project. If anything you need is missing, add it to both the import and exposts sections. 
2. **app-navbar** This component provides the application base layout and responsiveness of the navigation menus. The router-outlet could be found here.
3. **app-routing** - Describe all your routes here and import the related components. 
4. **app-shared** - It's a very convenient unitility module, which helps you to reduce the number of imports in every new module. It imports and exports
all those modules, often required by base dunctionalities such as Material, Forms, Routing, Validators, etc.
5. **app-validators** - currently there is only one custom validator - checkbox min length. Using this validator, you can define the minimum number 
of checkboxes within a group, which must be selected.
6. **sample-forms** - a set of forms as examples of Material components, reactive form and a template-driven form build and validation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Development server

Run `ng serve --open` for a dev server. Chrome will be opened authomatically on `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
2. To have the code coverage report, append the `--code-coverage` option

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).