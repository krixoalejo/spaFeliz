'use strict';

angular.module('spafelizApp')
  .directive('footerSection', footerSection);

function footerSection() {
  //template: '<div> <ng-transclude>  </ng-transclude> </div>',
  var directive = {
    templateUrl: './views/partial.footer.html',
    restrict: 'EAC',
    link: link,
    transclude: true
  }

  return directive;

  function link(scope, element, attrs) {
    //element.text('this is the footerSection.directive directive');
    scope.team = attrs.author;
  }
}
