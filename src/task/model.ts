/**
 * Created by Adrian on 04.03.2015.
 */

interface taskModel{
    uiSref: string;
    valid: boolean;
    currentState: string;
    nextState:string;
    template:string;
}

var taskStep:taskModel = {uiSref:"test", currentState:"asdasd", nextState:"asd", valid:true, template:"das"};
