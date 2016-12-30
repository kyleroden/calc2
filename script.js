'use strict';

angular.module('ky_calculator', [])
      .controller('Calculator', ['$scope',
function Calculator($scope) {
    $scope.console = 0;
    var total = 0;
    var state = null;

    function resolve_state() {
        switch (state) {
            case 'addition':
                total += parseFloat($scope.console);
                $scope.console = 0;
                break;
            case 'subtraction':
                total -= parseFloat($scope.console);
                $scope.console = 0;
                break;
            case 'multiplication':
                total *= parseFloat($scope.console);
                $scope.console = 0;
                break;
            case 'division':
                total /= parseFloat($scope.console);
                $scope.console = 0;
                break;

            default:
                total = parseFloat($scope.console);
                $scope.console = 0;
                break;
        }
    }
    $scope.add = function() {
        resolve_state();
        state = 'addition';
    }
    $scope.subtract = function() {
        resolve_state();
        state = 'subtraction';
    }
    $scope.multiply = function() {
        resolve_state();
        state = 'multiplication';
    }
    $scope.divide = function() {
        resolve_state();
        state = 'division';
    }
    $scope.equal = function() {
        resolve_state();
        $scope.console = total;
        state = 'equals';
    }
    $scope.print = function(number) {
        if ($scope.console.toString() == "0" || state == 'equals') {
            $scope.console = "";
        }
        if (state == "equals") {
            state = null;
        }
        $scope.console = $scope.console + number;
    }

    $scope.change_positivity = function() {
        $scope.console = (parseFloat($scope.console) * -1).toString();
    }
    $scope.clear_total = function() {
        $scope.console = 0;
        total = 0;
        state = null;
    }
}]);
