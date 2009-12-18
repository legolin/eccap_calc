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
  account: null,
  nowShowing: null,

  content: function() {
    switch (this.nowShowing) {
      case 'personalPage':
        return this.account.get('personal_page');
      case 'optionPage':
        return EccapCalc.pageSelectorController.selection().firstObject();
    };
  }.property('account', 'nowShowing').cacheable(),

  showPersonalPage: function() {
    this.set('nowShowing', 'personalPage');
    EccapCalc.pageSelectorController.set('selection', null);
  },

  showOptionPage: function() {
    this.set('nowShowing', 'optionPage');
    this.notifyPropertyChange('content'); // Option selection may have changed.

    EccapCalc.initialOptionCostsController.set(
      'ledger', this.getPath('content.initialCostsLedger'));
    EccapCalc.recurringOptionCostsController.set(
      'ledger', this.getPath('content.recurringCostsLedger'));
  }
});
