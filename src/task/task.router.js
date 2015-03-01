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
                controller: 'formController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('form.profile', {
                url: '/profile',
                templateUrl: 'task/form-profile.html'
            })

            // url will be /form/interests
            .state('form.interests', {
                url: '/interests',
                templateUrl: 'task/form-interests.html'
            })

            // url will be /form/payment
            .state('form.payment', {
                url: '/payment',
                templateUrl: 'task/form-payment.html'
            });
        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/profile');
    });