// ==========================================================================
// Project:   EccapCalc.Page
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  A page contains one or more ledgers to be displayed together.

  @extends SC.Record
  @version 0.1
*/
EccapCalc.Personal = SC.Record.extend({
  account: SC.Record.toOne('EccapCalc.Account', {
    inverse: 'personal_page',
    isMaster: NO,
  }),
  assetsLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'page',
    isMaster: YES,
  }),
  incomeLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'page',
    isMaster: YES,
  }),
  expensesLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'page',
    isMaster: YES,
  }),
});
