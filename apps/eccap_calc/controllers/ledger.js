// ==========================================================================
// Project:   EccapCalc.ledgerController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/**
    @param view String, path to view
    @param ledger String, guid of ledger
*/
EccapCalc.ledgerController = function(view, ledger_id) {

  /** @class
      @extends SC.ArrayController
  */
  return SC.ArrayController.create(
    SC.CollectionViewDelegate,

    /** @scope EccapCalc.ledgerController.prototype */ {
    verticalOffset: 0,
    page: null,
    ledger_id: ledger_id,

    ledger: function() {
      return EccapCalc.store.find(EccapCalc.Ledger, this.ledger_id);
    }.property('ledger_id').cacheable(),

    title: function() {
      return this.ledger().get('title');
    }.property('ledger_id').cacheable(),

    total: function() {
      return this.reduce(this.reduce_total, 0);
    }.property('[]').cacheable(),

    reduce_total: function(_total, ledger_entry, index, enm) {
      return Number(_total) + Number(ledger_entry.get('amount'));
    },

    add_item: function() {
      // create new LedgerEntry and add it to the list
      var that = this;
      var ledger_entry = EccapCalc.store.createRecord(EccapCalc.LedgerEntry, {
        //ledger: ledger_id,
        ledger: that.ledger().get('id'),
      });

      // select new LedgerEntry in UI
      this.selectObject(ledger_entry); 

      // activate inline editor once UI can repaint
      this.invokeLater(function() {
        var contentIndex = this.indexOf(ledger_entry);
        var list = EccapCalc.mainPage.getPath(view + '.description.contentView');
        var listItem = list.itemViewForContentIndex(contentIndex);
        listItem.beginEditing();
      });
      return YES ;
    },
      
    collectionViewDeleteContent: function(view, content, indexes) {
      // destroy the records
      var records = indexes.map(function(idx) {
        return this.objectAt(idx);
      }, this);
      records.invoke('destroy');

      // set the new selection
      var selIndex = indexes.get('min')-1;
      if (selIndex<0) selIndex = 0 ;
      this.selectObject(this.objectAt(selIndex));
      return YES ;
    },
  });
};

EccapCalc.assetsLedgerController = EccapCalc.ledgerController('mainPane.assetsView', 'assets');
EccapCalc.incomeLedgerController = EccapCalc.ledgerController('mainPane.incomeView', 'income');
EccapCalc.expensesLedgerController = EccapCalc.ledgerController('mainPane.expensesView', 'expenses');

EccapCalc.initialFacilityCostsController = EccapCalc.ledgerController('mainPane.ledger1');
EccapCalc.initialFacilityCostsController.content = function() {
  return EccapCalc.pageController.getPath('page.initialCostsLedger.entries');
}.property('page').cacheable();
 
EccapCalc.monthlyFacilityCostsController = EccapCalc.ledgerController('mainPane.ledger2');
EccapCalc.monthlyFacilityCostsController.content = function() {
  return EccapCalc.pageController.getPath('page.monthlyCostsLedger.entries');
}.property('page').cacheable();
