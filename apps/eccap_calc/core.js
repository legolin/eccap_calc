// ==========================================================================
// Project:   EccapCalc
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
EccapCalc = SC.Application.create(
  /** @scope EccapCalc.prototype */ {

  NAMESPACE: 'EccapCalc',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),
  
  // TODO: Add global constants or singleton objects needed by your app here.

  load_account: function(account_id) {
    var account = EccapCalc.store.find(EccapCalc.Account, account_id);

    EccapCalc.pageController.set('account', account);
    EccapCalc.pageSelectorController.set('content', account.get('option_pages'));
    EccapCalc.assetsLedgerController.set('ledger',
      account.getPath('personal_page.assetsLedger'));
    EccapCalc.incomeLedgerController.set('ledger',
      account.getPath('personal_page.incomeLedger'));
    EccapCalc.expensesLedgerController.set('ledger',
      account.getPath('personal_page.expensesLedger'));
    EccapCalc.pageController.showPersonalPage();
  },
});
