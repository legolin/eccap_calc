// ==========================================================================
// Project:   EccapCalc.LedgerView
// Copyright: ©2009 Westside Consulting LLC
// ==========================================================================
/*globals EccapCalc */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
EccapCalc.ResultView = function(x, y) {
  var w = 400;  // width
  var h = 200;  // height
  var h_title = 25;
  var h_add = 25;
  var h_total = 18;
  var h_list = h - h_title - h_add - h_total;
  var w_amount = 80;
  var w_list = w - w_amount;
  var y_title = 0;
  var y_list = y_title + h_title;

  return SC.View.extend(
    SC.CollectionViewDelegate,

    /** @scope EccapCalc.LedgerView.prototype */ {
    childViews: 'title year_legend description amount'.w(),
		layout: { left: x, top: y, width: w, height: h},

    title: SC.LabelView.design({
      displayValue: 'Affordable Length of Stay',
      layout: { left: 0, top: 0, width: w, height: h_title},
      controlSize: SC.LARGE_CONTROL_SIZE,
    }),

    year_legend: SC.LabelView.design({
      layout: { right: 0, top: 5, width: 50, height: h_title},
      displayValue: 'Years',
    }),

    description: SC.ScrollView.design({
			classNames: 'description'.w(),
      layout: { left: 0, top: y_list, width: w - w_amount - 15, height: h_list},
      contentView: SC.ListView.design({
        contentBinding: 'EccapCalc.optionController.arrangedObjects',
        contentValueKey: 'title',
      }),
		  verticalScrollOffsetBinding: 'EccapCalc.optionController.verticalOffset',
			verticalScrollerView: SC.ScrollerView.extend({scrollerThickness: 0})
    }),

    amount: SC.ScrollView.design({
      layout: { left: w - w_amount - 15, top: y_list, width: w_amount, height: h_list},
      contentView: SC.ListView.design({
        contentBinding: 'EccapCalc.optionController.arrangedObjects',
        contentValueKey: 'duration',
        classNames: ['numeric']
      }),
		  verticalScrollOffsetBinding: 'EccapCalc.optionController.verticalOffset',
      classNames: 'scroll-y'.w(),
    }),
  });
}
