var expect = chai.expect;

describe('Click out directive', function () {
  var $compile, $rootScope;

  beforeEach(module('clickOut'));

  beforeEach(inject(function ($injector) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
  }));

  it('should call the function when we click outside the element', function () {
    var scope = $rootScope.$new(true);
    scope.clickOut = sinon.spy();

    var element = $compile('<div><button click-out="clickOut()"></button><button></button></div>')(scope);
    angular.element(document.body).append(element);
    scope.$digest();

    element.children()[0].click();
    scope.$digest();

    expect(scope.clickOut).to.not.be.called;

    element.children()[1].click();
    scope.$digest();

    expect(scope.clickOut).to.be.called;
  });
});