// ==========================================================================
// Project:   EccapCalc.Ledger
// Copyright: ©2009 Westside Consulting LLC, Inc.
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

  guid: SC.Record.attr(String),

  entries: SC.Record.toMany('EccapCalc.LedgerEntry', {
    inverse: 'ledger',
    isMaster: YES,
  }),

  total: function() {
    return this.get('entries').reduce(this.total_callback, 0);
  }.property('*entries.[].amount').cacheable(),

  total_callback: function(prev, item, index, enumerable) {
    return Number(prev) + Number(item.get('amount'));
  },
}) ;

EccapCalc.Ledger = EccapCalc.store.dataSource.instanceOf(SC.FixturesDataSource)
  ? EccapCalc.Ledger_.extend({
    entries: function() {
      var q = SC.Query.local(EccapCalc.LedgerEntry, {
        conditions: 'ledger = {ledger}', 
        ledger: this,
      });
      return this.get('store').find(q);
     }.property()
  })
  : EccapCalc.Ledger_.extend();
