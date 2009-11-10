// ==========================================================================
// Project:   EccapCalc.assetsController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayObjectController
*/

EccapCalc.assetsController = SC.ArrayController.create(
  SC.CollectionViewDelegate,
    
/** @scope EccapCalc.assetsController.prototype */ {

  total: function() {
    return this.reduce(this.reduce_total, 0);
  }.property('.value'),

  reduce_total: function(prev, asset, index, enm) {
    return prev + asset.get('value');
  },

  add_item: function() {
    // create new asset and add it to the list
    var asset = EccapCalc.store.createRecord(EccapCalc.Asset, { 
      description: "New Asset", 
      value: Number(0),
    });

    // select new asset in UI
    this.selectObject(asset); 

    // activate inline editor once UI can repaint
    this.invokeLater(function() {
      var contentIndex = this.indexOf(asset);
      var list = EccapCalc.mainPage.getPath('mainPane.assetsView');
      var listItem = list.assetViewForContentIndex(contentIndex);
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

}) ;
