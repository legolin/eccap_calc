// ==========================================================================
// Project:   EccapCalc.ledgerController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/**
    @param view String, path to view
    @param ledger String, guid of ledger
*/
EccapCalc.ledgerController = function(view, ledger) {
  /** @class
      @extends SC.ArrayController
  */
  return SC.ArrayController.create(
    SC.CollectionViewDelegate,

    /** @scope EccapCalc.ledgerController.prototype */ {
    verticalOffset: 0,

    total: function() {
      return this.reduce(this.reduce_total, 0);
    }.property('[]').cacheable(),

    reduce_total: function(_total, ledger_entry, index, enm) {
      return Number(_total) + Number(ledger_entry.get('amount'));
    },

    add_item: function() {
      // create new LedgerEntry and add it to the list
      var ledger_entry = EccapCalc.store.createRecord(EccapCalc.LedgerEntry, {
        ledger: ledger,
      });

      // select new LedgerEntry in UI
      this.selectObject(ledger_entry); 

      // activate inline editor once UI can repaint
      this.invokeLater(function() {
        var contentIndex = this.indexOf(ledger_entry);
        var list = EccapCalc.mainPage.getPath(view);
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