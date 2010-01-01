// ==========================================================================
// Project:   EccapCalc
// Copyright: ©2009 Westside Consulting LLC, Inc.
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

  isUsingFixtures: function() {
    return this.store.dataSource.instanceOf(SC.FixturesDataSource);
  },
  
  // TODO: Add global constants or singleton objects needed by your app here.

  load_account: function(account_id) {
    var account = EccapCalc.store.find(EccapCalc.Account, account_id);

    EccapCalc.currentViewController.set('account', account);
    EccapCalc.optionController.set('content', account.get('options'));
    EccapCalc.assetsLedgerController.set('ledger', account.get('assetsLedger'));
    EccapCalc.incomeLedgerController.set('ledger', account.get('incomeLedger'));
    EccapCalc.expensesLedgerController.set('ledger', account.get('expensesLedger'));
    EccapCalc.currentViewController.showPersonal();
  },

  max: function(x, y) {
    return x > y ? x : y;
  }
});
