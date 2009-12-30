// ==========================================================================
// Project:   EccapCalc.LedgerEntry
// Copyright: ©2009 Westside Consulting LLC, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Defines a single entry in a ledger.

  @extends SC.Record
  @version 0.1
*/
EccapCalc.LedgerEntry = SC.Record.extend(
  /** @scope EccapCalc.LedgerEntry.prototype */ {

  description: SC.Record.attr(SC.T_STRING, {
    defaultValue: 'Type description here.',
    isRequired: YES,
  }),
  amount: SC.Record.attr(SC.T_NUMBER, {
    defaultValue: 0,
    isRequired: YES,
  }),
  ledger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'entries',
    isMaster: NO,
  }),

  recordDidChange: function(key) {
    sc_super();

    if (EccapCalc.isUsingFixtures() && key == 'amount') {
      this.get('ledger').notifyPropertyChange('total');
    }
  },
});
