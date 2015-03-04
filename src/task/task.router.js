/**
 * Created by Adrian on 01.03.2015.
 */
// configuring our routes
// =============================================================================

angular.module('formApp')
    .config(function($stateProvider,$urlRouterProvider) {

        $stateProvider
            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'task/form.html',
                controller: 'taskController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('form.stammdaten', {
                url: '/stammdaten',
                templateUrl: 'task/form-stammdaten.html'
            })

            // url will be /form/interests
            .state('form.produktwahl', {
                url: '/produktwahl',
                templateUrl: 'task/form-produktwahl.html'
            })

            // url will be /form/payment
            .state('form.abschluss', {
                url: '/abschluss',
                templateUrl: 'task/form-abschluss.html'
            });
        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/stammdaten');
    });