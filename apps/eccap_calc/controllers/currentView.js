// ==========================================================================
// Project:   EccapCalc.currentViewController
// Copyright: ©2009 Westside Consulting LLC, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Controls display of ledgers.

  @extends SC.Object
*/
EccapCalc.currentViewController = SC.ObjectController.create(
/** @scope EccapCalc.currentViewController.prototype */ {
  account: null,
  nowShowing: null,

  // Show personal ledgers.
  showPersonal: function() {
    this.set('nowShowing', 'personalPage');
    EccapCalc.optionController.set('selection', null);
    this.set('content', null);
  },

  // Show care option ledgers.
  showOption: function(p) {
    var option = EccapCalc.optionController.selection().firstObject();
    this.set('content', option);
    EccapCalc.initialOptionCostsController.set( 'ledger', option.get('initialCostsLedger'));
    EccapCalc.recurringOptionCostsController.set( 'ledger', option.get('recurringCostsLedger'));
    this.set('nowShowing', 'optionPage');
  }
});
