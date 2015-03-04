// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ngMessages', 'ui.router'])

// configuring our routes 
// =============================================================================
    /*
     .value('formSteps', [
     {uiSref: 'form.profile', valid: false},
     {uiSref: 'form.interests', valid: false},
     {uiSref: 'form.payment', valid: false}
     //weitere steps...
     ])
     */
    .factory('formSteps', ['$http', function ($http) {
        return [
            {uiSref: 'form.stammdaten', valid: false},
            {uiSref: 'form.produktwahl', valid: false},
            {uiSref: 'form.abschluss', valid: false}
        ]
        /*
        var promise = $http.get('task/task.json').success(
            function (data) {
                return data;
            })
        return promise;
        */
    }])

    .run([
        '$rootScope',
        '$state',
        'formSteps',
        function ($rootScope, $state, formSteps) {
/*
            //Lade modell aus json file
            formSteps.then(function (promise) {
                formSteps = promise;
            });
*/
            // Register listener to watch route changes
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

                var canGoToStep = false;
                // only go to next if previous is valid
                var toStateIndex = _.findIndex(formSteps, function (formStep) {
                    return formStep.uiSref === toState.name;
                });

                console.log('toStateIndex', toStateIndex)
                if (toStateIndex === 0) {
                    //erster schritt ist immer erlaubt
                    canGoToStep = true;
                } else {
                    canGoToStep = formSteps[toStateIndex - 1].valid;
                }
                console.log('canGoToStep', toState.name, canGoToStep, toStateIndex);
                console.log("schrittwechsel erlaubt!")

                // Stop state changing if the previous state is invalid
                if (!canGoToStep) {
                    // Abort going to step
                    console.log("schrittwechsel nicht erlaubt!")
                    event.preventDefault();
                }
            });
        }
    ])