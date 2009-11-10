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
/** @scope EccapCalc.assetsController.prototype */ {

    total: function() {
        return this.reduce(this.reduce_total, 0);
    }.property(),

    reduce_total: function(prev, item, index, enm) {
        return prev + item.get('value');
    },
}) ;
