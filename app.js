angular.module('myApp', [])
    .directive('changeBackground', ['$animate', function ($animate) {
    return {
        restrict: 'A',
        scope: {
            colorcode: '@?'
        },
        link: function ($scope, element, attr) {
         var originalBG = element.css('background-color');
            element.on('mouseenter', function () {
                element.addClass('change-color');
                element.css('background-color', $scope.colorcode);
            });
            element.on('mouseleave', function () {
                element.removeClass('change-color');
                element.css('background-color', originalBG);
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