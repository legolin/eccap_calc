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
EccapCalc.PersonalPage = SC.Record.extend({
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

EccapCalc.OptionPage = SC.Record.extend({
  title: SC.Record.attr(SC.T_STRING, {
    defaultValue: 'New Option',
    isEditable: YES,
    isRequired: YES,
  }),
  account: SC.Record.toOne('EccapCalc.Account', {
    inverse: 'option_pages',
    isMaster: NO,
  }),
  initialCostsLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'page',
    isMaster: YES,
  }),
  recurringCostsLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'page',
    isMaster: YES,
  }),
});
