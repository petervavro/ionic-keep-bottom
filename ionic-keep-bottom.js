/* Ionic Scroll Glue
 * version 0.0.1
 * https://github.com/petervavro/ionic-scroll-glue
 * An Ionic directive to scroll automatically to the bottom of ion-content.
*/

(function(angular, undefined){
    'use strict';

    angular
    .module('ionic-keep-bottom', [])
    .directive('keepBottom', ['$timeout', '$window', '$ionicScrollDelegate', function($timeout, $window, $ionicScrollDelegate) {
      return {
        restrict: 'A',
        link: function(scope, element, attr) {

            var scrollToBottom = function () {
                $timeout(function() {
                    $ionicScrollDelegate.scrollBottom();
                });
            };

            $window.addEventListener('resize', scrollToBottom, false);
            scope.$watchCollection(attr.keepBottom, scrollToBottom);
        }
      }
    }]);

}(angular));