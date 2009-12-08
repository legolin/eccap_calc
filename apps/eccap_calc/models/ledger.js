// ==========================================================================
// Project:   EccapCalc.Ledger
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  A ledger contains either costs (credit == YES) or expenses (credit == NO),
  and it's entries are either recurring (== YES) or one-time (recurring == NO).

  @extends SC.Record
  @version 0.1
*/
EccapCalc.Ledger_ = SC.Record.extend(
  /** @scope EccapCalc.Ledger.prototype */ {

  recurring: SC.Record.attr(SC.T_BOOLEAN, {
    defaultValue: YES,
    isRequired: YES,
  }),
  credit: SC.Record.attr(SC.T_BOOLEAN, {
    defaultValue: NO,
    isRequired: YES,
  }),
  entries: SC.Record.toMany('EccapCalc.LedgerEntry', {
    inverse: 'ledger',
    isMaster: YES,
  }),
  page: SC.Record.toOne('EccapCalc.Page', {
    inverse: 'ledgers',
    isMaster: NO,
  }),
}) ;

EccapCalc.Ledger = EccapCalc.store.dataSource.instanceOf(SC.FixturesDataSource)
  ? EccapCalc.Ledger_.extend({
    entries: function() {
      var q = SC.Query.local(EccapCalc.LedgerEntry, {
        conditions: 'ledger = {ledger}', 
        ledger: this,
      });
      return this.get('store').find(q);
     }.property().cacheable() 
  })
  : EccapCalc.Ledger_.extend();
