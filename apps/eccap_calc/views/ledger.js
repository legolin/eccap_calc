// ==========================================================================
// Project:   EccapCalc.LedgerView
// Copyright: ©2009 Westside Consulting LLC
// ==========================================================================
/*globals EccapCalc */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
EccapCalc.LedgerView = function(x, y, title, arrayController) {
  var w = 400;  // width
  var h = 100;  // height
  var h_label = 25;

  return SC.View.extend(
    /** @scope EccapCalc.LedgerView.prototype */ {

    childViews: 'title description value label_total total'.w(),

    title: SC.LabelView.design({
      displayValue: title,
      fontWeight: SC.BOLD_WEIGHT,
      layout: { left: x, top: y, width: w, height: h_label},
    }),

    description: SC.ScrollView.design({
      contentView: SC.ListView.design({
        layout: { left: x, top: h_label + y, width: w, height: h},
        contentBinding: arrayController + '.arrangedObjects',
        selectionBinding: arrayController + '.selection',
        contentValueKey: 'description',
        isEditable: YES,
      }),
    }),

    value: SC.ScrollView.design({
      contentView: SC.ListView.design({
        layout: { left: w + x, top: h_label + y, width: 100, height: h},
        contentBinding: arrayController + '.arrangedObjects',
        selectionBinding: arrayController + '.selection',
        contentValueKey: 'value',
        isEditable: YES,
      }).classNames('numeric'),
    }),

    label_total: SC.LabelView.design({
      layout: { left: x, top: h_label + y + h, width: w, height: 25},
      displayValue: 'Total',
      fontWeight: SC.BOLD_WEIGHT,
    }),

    total: SC.LabelView.design({
      layout: { left: w + x, top: h_label + y + h, width: 100, height: 25},
      valueBinding: arrayController + '.total',
    }).classNames('numeric'),
  });
}
