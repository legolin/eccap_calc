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
    childViews: 'zipcodeView'.w(),
    
    zipcodeView: SC.TextFieldView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      //tagName: "input", 
      valueBinding: "EccapCalc.calcDataController.zipcode",
    }),
  }),

});
