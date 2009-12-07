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
  page: null,

  title: function() {
    return this.page.get('title');
  }.property('page').cacheable(),

  showPersonalPage: function() {
    this.page = EccapCalc.account.get('personal_page');
    EccapCalc.pageController.set('content', this.page);
    this.set('nowShowing', 'personalPage');
  },
}) ;
