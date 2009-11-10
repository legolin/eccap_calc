// ==========================================================================
// Project:   EccapCalc - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

// This page describes the main user interface for your application.  
EccapCalc.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'description value'.w(),
 
    description: SC.ScrollView.design({
			contentView: SC.ListView.design({
	      layout: { centerX: 0, centerY: 0, width: 250, height: 300 },
	      textAlign: SC.ALIGN_CENTER,
				contentBinding: 'EccapCalc.assetsController.arrangedObjects',
				selectionBinding: 'EccapCalc.assetsController.selection',
				contentValueKey: 'description',
				isEditable: YES,
			}),
    }),
 
    value: SC.ScrollView.design({
			contentView: SC.ListView.design({
	      layout: { centerX: 250, centerY: 0, width: 250, height: 300 },
	      textAlign: SC.ALIGN_CENTER,
				contentBinding: 'EccapCalc.assetsController.arrangedObjects',
				selectionBinding: 'EccapCalc.assetsController.selection',
				contentValueKey: 'value',
				isEditable: YES,
			}),
    }),

/*
    zipcodeView: SC.TextFieldView.design({
      layout: { centerX: 0, centerY: 350, width: 100, height: 18 },
      //tagName: "input", 
      valueBinding: "EccapCalc.calcDataController.zipcode",
    }),
*/
  }),

});
