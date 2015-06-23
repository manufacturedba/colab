var mod = angular.module('ngPaper', []);

mod.directive('ngPaperMaterial', [
    '$compile',
    '$timeout',
    function(compile, timeout){
        return {
            scope: {
                model: "=stuff"
            },
            transclude: true,
            template: ' ' +
            '    <paper-material>' +
            '        <div ng-transclude></div>' +
            '    </paper-material>',
            link: function(scope, element, attrs){
                timeout(function(){
                    compile(element.html())(scope);
                }, 1000)
            }
        }
    }
])
