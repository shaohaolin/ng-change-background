angular.module('myApp', [])
    .directive('changeBackground', ['$animate', function ($animate) {
    return {
        restrict: 'EA',
        scope: {
            colorcode: '@?'
        },
        link: function ($scope, element, attr) {
            element.on('mouseenter', function () {
                element.addClass('change-color');
                element.css('background-color', $scope.colorcode);
            });
            element.on('mouseleave', function () {
                element.removeClass('change-color');
                element.css('background-color', '#fff');
            });
        }
    };
}])
    .controller('MyCtrl', function ($scope) {
    $scope.name = "Suprehero";
    $scope.socialArray = [{
        name: "Facebook",
        color: "#3B5998"
    }, {
        name: "Flickr",
        color: "#FE0883"
    }, {
        name: "Google+",
        color: "#C63D2D"
    }, {
        name: "Instragram",
        color: "#4E433C"
    }, {
        name: "Linkedin",
        color: "#4875B4"
    }];
});