// ==========================================================================
// Project:   EccapCalc.LedgerView
// Copyright: ©2009 Westside Consulting LLC
// ==========================================================================
/*globals EccapCalc */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
EccapCalc.LedgerView = function(x, y, arrayController, title) {
  var w = 400;  // width
  var h = 200;  // height
  var h_title = 25;
  var h_total = 18;
  var h_add = 25;
  var h_list = h - h_title - h_add - h_total;
  var w_amount = 80;
  var w_list = w - w_amount;
  var y_title = 0;
  var y_list = y_title + h_title;
  var y_total = y_list + h_list + 3;
  var x_total = w - w_amount - 32; // 16 is width of scroll bar

  return SC.View.extend(
    SC.CollectionViewDelegate,

    /** @scope EccapCalc.LedgerView.prototype */ {
    childViews: 'title description amount label_total button_add total'.w(),
		layout: { left: x, top: y, width: w, height: h},

    title: SC.LabelView.design({
      displayValue: title,
      //fontWeight: SC.BOLD_WEIGHT,
      layout: { left: 0, top: 0, width: w, height: h_title},
      controlSize: SC.LARGE_CONTROL_SIZE,
    }),

    description: SC.ScrollView.design({
			classNames: 'description'.w(),
      layout: { left: 0, top: y_list, width: w - w_amount - 15, height: h_list},
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

    amount: SC.ScrollView.design({
      layout: { left: w - w_amount - 15, top: y_list, width: w_amount, height: h_list},
      contentView: SC.ListView.design({
        contentBinding: arrayController + '.arrangedObjects',
        selectionBinding: arrayController + '.selection',
        contentValueKey: 'amount',
        canEditContent: YES,
        canDeleteContent: YES,
        classNames: ['numeric']
      }),
		  verticalScrollOffsetBinding: arrayController + '.verticalOffset'
    }),

    button_add: SC.ButtonView.design({
      layout: { right: 32, top: 0, width: 100, height: h_add},
      title: 'New Item',
      target: arrayController,
      action: "add_item"
    }),

    label_total: SC.LabelView.design({
      layout: { left: 0, top: y_total, width: w - w_amount, height: h_add},
      displayValue: 'Total',
      fontWeight: SC.BOLD_WEIGHT,
    }),

    total: SC.LabelView.design({
      layout: { left: x_total, top: y_total, width: w_amount, height: h_title},
      //valueBinding: arrayController + '.total',
      valueBinding: arrayController + '*ledger.total',
      textAlign: SC.ALIGN_RIGHT,
    }),
  });
}
