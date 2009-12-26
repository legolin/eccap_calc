// ==========================================================================
// Project:   EccapCalc.currentViewController
// Copyright: ©2009 Westside Consulting LLC, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Switch pages.

  @extends SC.Object
*/
EccapCalc.currentViewController = SC.ObjectController.create(
/** @scope EccapCalc.currentViewController.prototype */ {
  account: null,
  nowShowing: null,

  showPersonal: function() {
    this.set('nowShowing', 'personalPage');
    EccapCalc.optionController.set('selection', null);
    this.set('content', null);
  },

  showOption: function(p) {
    var page = EccapCalc.optionController.selection().firstObject();
    this.set('content', page);
    EccapCalc.initialOptionCostsController.set( 'ledger', page.get('initialCostsLedger'));
    EccapCalc.recurringOptionCostsController.set( 'ledger', page.get('recurringCostsLedger'));
    this.set('nowShowing', 'optionPage');
  }
});
