// ==========================================================================
// Project:   EccapCalc.optionController
// Copyright: ©2009 Westside Consulting LLC, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Controller for care options.
  Content type is Eccap.Option.

  @extends SC.ArrayController
*/
EccapCalc.optionController = SC.ArrayController.create(
  SC.CollectionViewDelegate,
  SC.SelectionSupport,

  /** @scope EccapCalc.optionController.prototype */ {

  allowsMultipleSelection: NO,

  // create new Option and add it to the list
  add_option: function() {
    var account = EccapCalc.currentViewController.get('account');
    var ledger1 = EccapCalc.store.createRecord(EccapCalc.Ledger, {
      option: SC.Record.toOne('EccapCalc.Option', {
        inverse: 'initialCostsLedger',
        isMaster: NO,
      }),
    });
    var ledger2 = EccapCalc.store.createRecord(EccapCalc.Ledger, {
      option: SC.Record.toOne('EccapCalc.Option', {
        inverse: 'recurringCostsLedger',
        isMaster: NO,
      }),
    });
    var option = EccapCalc.store.createRecord(EccapCalc.Option, {
      account: account.get('id'), // value is id for inverse relation 
      initialCostsLedger: ledger1,
      recurringCostsLedger: ledger2,
    });
    this.selectObject(option); 
    this.invokeLater(function() {
      EccapCalc.currentViewController.showOption(option);
    });
    return YES ;
  },

  delete_option: function() {
    var option = EccapCalc.optionController.selection().firstObject();

    if (!SC.instanceOf(option, EccapCalc.Option)) {
      return NO;
    }
    // set the new selection
    var index = EccapCalc.max(this.indexOf(option) - 1, 0);
    EccapCalc.store.destroyRecord(null, null, option.storeKey);
    this.updateSelectionAfterContentChange(); // keep this!!

    this.invokeLater(function() {
      if (this.length() > 0) {
        this.selectObject(this.objectAt(index));
        EccapCalc.currentViewController.showOption();
      } else {
        EccapCalc.currentViewController.showPersonal();
      }
    });
    return YES;
  },
});
