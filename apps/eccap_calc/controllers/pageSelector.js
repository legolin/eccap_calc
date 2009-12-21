// ==========================================================================
// Project:   EccapCalc.pageSelectorController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Controller for option pages.
  Content type is Eccap.OptionPage.

  @extends SC.ArrayController
*/
EccapCalc.pageSelectorController = SC.ArrayController.create(
  SC.CollectionViewDelegate,
  SC.SelectionSupport,

  /** @scope EccapCalc.pageSelectorController.prototype */ {

  allowsMultipleSelection: NO,

  // create new Option and add it to the list
  add_page: function() {
    var account = EccapCalc.pageController.get('account');
    var ledger1 = EccapCalc.store.createRecord(EccapCalc.Ledger, {
      recurring: NO,
      credit: NO,
      page: SC.Record.toOne('EccapCalc.OptionPage', {
        inverse: 'initialCostsLedger',
        isMaster: NO,
      }),
    });
    var ledger2 = EccapCalc.store.createRecord(EccapCalc.Ledger, {
      recurring: YES,
      credit: NO,
      page: SC.Record.toOne('EccapCalc.OptionPage', {
        inverse: 'RecurringCostsLedger',
        isMaster: NO,
      }),
    });
    var page = EccapCalc.store.createRecord(EccapCalc.OptionPage, {
      account: account.get('id'), // value is id for inverse relation 
      initialCostsLedger: ledger1,
      recurringCostsLedger: ledger2,
    });
    this.selectObject(page); 
    this.invokeLater(function() {
      EccapCalc.pageController.showOptionPage(page);
    });
    return YES ;
  },

  delete_page: function() {
    var page = EccapCalc.pageController.content();

    if (!SC.instanceOf(page, EccapCalc.OptionPage)) {
      return NO;
    }
    // set the new selection
    var index = EccapCalc.max(this.indexOf(page) - 1, 0);
    EccapCalc.store.destroyRecord(null, null, page.storeKey);
    //this.updateSelectionAfterContentChange();

    this.invokeLater(function() {
      if (this.length() > 0) {
        this.selectObject(this.objectAt(index));
        EccapCalc.pageController.showOptionPage();
      } else {
        EccapCalc.pageController.showPersonalPage();
      }
    });
    return YES;
  },
});
