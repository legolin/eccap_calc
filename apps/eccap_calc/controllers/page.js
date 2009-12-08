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
    var page = EccapCalc.account.get('personal_page');

    var assetsLedger = page.get('assetsLedger');
    var incomeLedger = page.get('incomeLedger');
    var expensesLedger = page.get('expensesLedger');

    EccapCalc.assetsLedgerController.set('ledger', assetsLedger);
    EccapCalc.incomeLedgerController.set('ledger', incomeLedger);
    EccapCalc.expensesLedgerController.set('ledger', expensesLedger);

    EccapCalc.assetsLedgerController.set('content', assetsLedger.get('entries'));
    EccapCalc.incomeLedgerController.set('content', incomeLedger.get('entries'));
    EccapCalc.expensesLedgerController.set('content', expensesLedger.get('entries'));

    this.page = page;
    this.set('nowShowing', 'personalPage');
  },
});
