// ==========================================================================
// Project:   EccapCalc.pageController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Switch pages.

  @extends SC.Object
*/
EccapCalc.pageController = SC.ObjectController.create(
/** @scope EccapCalc.pageController.prototype */ {
  nowShowing: 'personalPage',

  showPersonalPage: function() {
    var page = EccapCalc.store.find(EccapCalc.PersonalPage, 'personal'); 
    EccapCalc.pageController.set('content', page);
    this.set('nowShowing', 'personalPage');
  },
}) ;
