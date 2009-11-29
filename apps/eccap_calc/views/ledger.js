// ==========================================================================
// Project:   EccapCalc.LedgerView
// Copyright: ©2009 Westside Consulting LLC
// ==========================================================================
/*globals EccapCalc */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
EccapCalc.LedgerView = function(x, y, w, h, title, arrayController) {
  var h_title = 25;
  var h_total = 18;
  var h_add = 25;
  var h_list = h - h_title - h_add - h_total;
  var w_value = 100;
  var w_list = w - w_value;
  var y_title = y;
  var y_list = y_title + h_title;
  var y_add = y_list + h_list + 3;
  var y_total = y_add + h_add;

  return SC.View.extend(
    SC.CollectionViewDelegate,

    /** @scope EccapCalc.LedgerView.prototype */ {
    childViews: 'title description value label_total button_add total'.w(),

    title: SC.LabelView.design({
      displayValue: title,
      fontWeight: SC.BOLD_WEIGHT,
      layout: { left: x, top: y, width: w, height: h_title},
    }),

    description: SC.ScrollView.design({
			classNames: 'description'.w(),
      layout: { left: x, top: y_list, width: w - w_value - 15, height: h_list},
      contentView: SC.ListView.design({
        contentBinding: arrayController + '.arrangedObjects',
        selectionBinding: arrayController + '.selection',
        contentValueKey: 'description',
        canEditContent: YES,
        canDeleteContent: YES
      }),
		  verticalScrollOffsetBinding: arrayController + '.verticalOffset',
			verticalScrollerView: SC.ScrollerView.extend({scrollerThickness: 0})
    }),

    value: SC.ScrollView.design({
      layout: { left: w + x - w_value - 15, top: y_list, width: w_value, height: h_list},
      contentView: SC.ListView.design({
        contentBinding: arrayController + '.arrangedObjects',
        selectionBinding: arrayController + '.selection',
        contentValueKey: 'value',
        canEditContent: YES,
        canDeleteContent: YES,
        classNames: ['numeric']
      }),
		  verticalScrollOffsetBinding: arrayController + '.verticalOffset'
    }),

    button_add: SC.ButtonView.design({
      layout: { left: x, top: y_add, width: 140, height: h_add},
      title: 'Add New Asset',
      target: arrayController,
      action: "add_item"
    }),

    label_total: SC.LabelView.design({
      layout: { left: x, top: y_total, width: w - w_value, height: h_add},
      displayValue: 'Total',
      fontWeight: SC.BOLD_WEIGHT,
    }),

    total: SC.LabelView.design({
      layout: { left: x + w - w_value, top: y_total, width: w_value, height: h_title},
      valueBinding: arrayController + '.total',
      textAlign: SC.ALIGN_RIGHT,
    }),
  });
}
