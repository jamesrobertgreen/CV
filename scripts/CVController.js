app.controller('CVController', ['$scope', function ($scope) {
    $scope.data = pageData;
    $scope.workExperienceState = 'invisible';
    $scope.workSkillsState = 'invisible';
    $scope.educationState = 'invisible';
    $scope.personalInterestsState = 'invisible';
    $scope.changeVisibility = function (section) {
        var tmpClass = getState(section);
        if (tmpClass === 'invisible') {
            tmpClass = 'visible';
        }
        else {
            tmpClass = 'invisible';
        }
        setState(section, tmpClass);
    };
    var getState = function (section) {
        var tmpState = '';
        switch (section) {
        case 'workExperience':
            tmpState = $scope.workExperienceState;
            break;
        case 'workSkills':
            tmpState = $scope.workSkillsState;
            break;
        case 'education':
            tmpState = $scope.educationState;
            break;
        case 'personalInterests':
            tmpState = $scope.personalInterestsState;
            break;
        }
        return tmpState;
    };
    var setState = function (section, newState) {
        switch (section) {
        case 'workExperience':
            $scope.workExperienceState = newState;
            break;
        case 'workSkills':
            $scope.workSkillsState = newState;
            break;
        case 'education':
            $scope.educationState = newState;
            break;
        case 'personalInterests':
            $scope.personalInterestsState = newState;
            break;
        }
    };
}]);