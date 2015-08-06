# ng-change-background
AngularJS directive for change background color dynamically with hover effect.
## How to use it
You need to inclue [AngularJS](https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.min.js) and [Angular animate](https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular-animate.min.js) to your file.
You can simply copy and paste the directive code in your directive js file.
```javascript
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
}]);
```
And create a css class called `change-color`.
```css
.change-color {
    transition: 0.4s all;
}
.change-color:hover, .change-color:focus, .change-color:active {
    color: #fff;
    background-color: #e38d13;
    cursor: pointer;
}
```
In your html file, you can either hardcode the color code like `colorcode="#e6e6e6e6"` or pass dynamically like `colorcode="{{array.color}}"`.
Method 1:
```html
<div change-background colorcode="#3B5998">Facebook</div>
```
Method 2:
```html
 <div change-background colorcode="{{social.color}}" ng-repeat="social in socialArray">{{social.name}}</div>
```
Here is a JSFIDDLE link for [Demo](http://jsfiddle.net/HB7LU/16148/)
## License
The MIT License

Copyright (c) 2015-2016 https://github.com/shaohaolin/ng-change-background

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
