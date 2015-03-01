/**
 * Created by Adrian on 01.03.2015.
 */
// our controller for the form
// =============================================================================
angular.module('formApp')
.controller('formController', taskController);

function taskController ($scope, $state, formSteps) {

    // we will store all of our form data in this object
    $scope.formData = {};
    $scope.formStepSubmitted = false;

    var nextState = function (currentState) {
        //mapping zwischen step und folge-step
        switch (currentState) {
            case 'form.profile':
                return 'form.interests'
                break;
            case 'form.interests':
                return 'form.payment'
                break;
            default:
                alert('Did not match any switch');
        }
    };

    var updateValidityOfCurrentStep = function (updatedValidity) {
        var currentStateIndex = _.findIndex(formSteps, function (formStep) {
            return formStep.uiSref === $state.current.name;
        });

        formSteps[currentStateIndex].valid = updatedValidity;
    };

    $scope.goToNextSection = function (isFormValid) {
        console.log('isFormValid ', isFormValid)
        // set to true to show all error messages (if there are any)
        $scope.formStepSubmitted = true;
        if (isFormValid) {
            // reset this for next form
            $scope.formStepSubmitted = false;

            // mark the step as valid so we can navigate to it via the links
            updateValidityOfCurrentStep(true /*valid */);

            $state.go(nextState($state.current.name));
        } else {
            // mark the step as valid so we can navigate to it via the links
            updateValidityOfCurrentStep(false /*not valid */);
        }
    };

    // function to process the form
    $scope.processForm = function () {
        alert('awesome!');
    };
};