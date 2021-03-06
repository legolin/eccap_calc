// ==========================================================================
// Project:   EccapCalc.ledgerController
// Copyright: ©2009 Westside Consulting LLC, Inc.
// ==========================================================================
/*globals EccapCalc */

/**
    @param view String, path to view
    @param ledger String, guid of ledger
*/
EccapCalc.ledgerController = function(path_to_view) {

  /** @class
      @extends SC.ArrayController
  */
  return SC.ArrayController.create(
    SC.CollectionViewDelegate,

    /** @scope EccapCalc.ledgerController.prototype */ {
    verticalOffset: 0,
    _ledger: null,

    ledger: function(key, value) {
      if (value) {
        this._ledger = value;
        this.set('content', value.get('entries'));
      }
      return this._ledger;
    }.property(),

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
        ledger: that.getPath('ledger.id'), // value must be guid, not object itself!
      });

      // select new LedgerEntry in UI
      this.selectObject(ledger_entry); 

      // activate inline editor once UI can repaint
      this.invokeLater(function() {
        var contentIndex = this.indexOf(ledger_entry);
        var view = EccapCalc.mainPage.getPath(path_to_view + '.description.contentView');
        var listItem = view.itemViewForContentIndex(contentIndex);
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

      if (EccapCalc.isUsingFixtures()) {
        this.get('ledger').notifyPropertyChange('total');
      }

      // set the new selection
      var selIndex = indexes.get('min')-1;
      if (selIndex<0) selIndex = 0 ;
      this.selectObject(this.objectAt(selIndex));
      return YES;
    },
  });
};

// Controllers for personal ledgers.
EccapCalc.assetsLedgerController = EccapCalc.ledgerController('personalPage.scrollView.contentView.assetsView');
EccapCalc.incomeLedgerController = EccapCalc.ledgerController('personalPage.scrollView.contentView.incomeView');
EccapCalc.expensesLedgerController = EccapCalc.ledgerController('personalPage.scrollView.contentView.expensesView');

// Controllers for care option ledgers.
EccapCalc.initialOptionCostsController = EccapCalc.ledgerController('optionPage.scrollView.contentView.ledger1');
EccapCalc.recurringOptionCostsController = EccapCalc.ledgerController('optionPage.scrollView.contentView.ledger2');
