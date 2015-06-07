function AppComponent(){}

AppComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: 'colab'
    }),
    new angular.ViewAnnotation({
        templateUrl: 'partials/home.html'
    })
]

document.addEventListener('DOMContentLoaded', function(){
    angular.bootstrap(AppComponent);
})
