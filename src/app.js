
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ngMessages', 'ui.router'])

// configuring our routes 
// =============================================================================
.value('formSteps', [
  {uiSref: 'form.profile', valid: false},
  {uiSref: 'form.interests', valid: false},
  {uiSref: 'form.payment', valid: false}
  //weitere steps...
  ])
.run([
            '$rootScope',
            '$state',
            'formSteps',
            function($rootScope, $state, formSteps) {
              
              // Register listener to watch route changes
                $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                    
                    var canGoToStep = false;
                    // only go to next if previous is valid
                    var toStateIndex = _.findIndex(formSteps, function(formStep) {
                      return formStep.uiSref === toState.name;
                      
                    });
                    
                    console.log('toStateIndex',toStateIndex)
                    if(toStateIndex === 0) {
                      //start schritt
                      canGoToStep = true;
                    } else {
                      canGoToStep = formSteps[toStateIndex - 1].valid;
                    }
                    console.log('canGoToStep', toState.name, canGoToStep , toStateIndex);
                    
                    // Stop state changing if the previous state is invalid
                    if(!canGoToStep) {
                        // Abort going to step
                        event.preventDefault();
                    }
                });
            }
        ])