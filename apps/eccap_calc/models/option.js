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
EccapCalc.Option = SC.Record.extend({
  title: SC.Record.attr(SC.T_STRING, {
    defaultValue: 'New Option',
    isEditable: YES,
    isRequired: YES,
  }),
  account: SC.Record.toOne('EccapCalc.Account', {
    inverse: 'options',
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

  max: function(a, b) {
    return a > b ? a : b;
  },

  // Returns the length of affordable stay.
  duration: function() {
    var ror = this.getPath('account.ror');
    var inflation = this.getPath('account.inflation');
    var current_assets = this.getPath('account.assetsLedger.total');
    var personal_expenses = this.getPath('account.expensesLedger.total');
    var personal_income = this.getPath('account.incomeLedger.total');
    var initial_costs = this.getPath('initialCostsLedger.total');
    var recurring_costs = this.getPath('recurringCostsLedger.total');

    // The following formula is based on http://lsiden-seniorliving.blogspot.com/?zx=27751254234db036.
    var PV = current_assets - initial_costs;
    var A = personal_expenses - personal_income + recurring_costs;
    var gt = (ror - inflation) / 12;  // r-tag: monthly rate-of-return over inflation
    return this.max(0, this.round1(Math.log(PV / A * (Math.exp(gt) - 1) - 1) / (gt)));
  }.property(
    'account.ror',
    'account.inflation',
    'account.assetsLedger.total',
    'account.incomeLedger.total',
    'account.expensesLedger.total',
    'initialCostsLedger.total',
    'recurringCostsLedger.total'
  ).cacheable(),

  // Return x rounded to 1 decimal place.
  round1: function(x) {
    return Math.round((10 * x) + .5) / 10;
  },
});
