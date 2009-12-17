// ==========================================================================
// Project:   EccapCalc - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

EccapCalc.LEFT_MARGIN_SCROLL = 200;
EccapCalc.LEFT_MARGIN_LEDGERS = 50;

// This page describes the main user interface for your application.  
EccapCalc.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: [
      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 100, height: 24 },
        title: 'Personal',
        target: 'EccapCalc.pageController',
        action: 'showPersonalPage',
      }),

      'pageSelector',

      SC.ContainerView.design({
        layout: { left: EccapCalc.LEFT_MARGIN_SCROLL, top: 0, bottom: 0, right: 0},
        nowShowingBinding: 'EccapCalc.pageController.nowShowing',
      }),
    ],

    pageSelector: SC.ListView.design({
      layout: { left: 20, width: 140, top: 150, height: 0 },
      contentBinding: 'EccapCalc.pageSelectorController.arrangedObjects',
      selectionBinding: 'EccapCalc.pageSelectorController.selection',
      contentValueKey: 'title',
      //exampleView: SC.ButtonView,
      target: 'EccapCalc.pageController', 
      action: 'showOptionPage',
      actOnSelect: YES,
      canEditContent: NO,
      canDeleteContent: NO,
    }),
  }),
  personalPage: SC.View.design({
    childViews: 'scrollView'.w(),
    scrollView: SC.ScrollView.design({
      contentView: SC.View.design({
        childViews: 'labelView assetsView incomeView expensesView'.w(),

        labelView: SC.LabelView.design({
          layout: { left: EccapCalc.LEFT_MARGIN_LEDGERS, top: 0, height: 50},
          displayValue: 'Personal',
          //fontWeight: SC.BOLD_WEIGHT,
          tagName: 'h1',
        }),
        assetsView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 100,
                      'EccapCalc.assetsLedgerController', 'Liquid Assets'),
        incomeView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 350, 
                      'EccapCalc.incomeLedgerController', 'Monthly Income'),
        expensesView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 600, 
                      'EccapCalc.expensesLedgerController', 'Monthly Expenses'),
      }),
    }),
  }),
  optionPage: SC.View.design({
    childViews: 'scrollView'.w(),
    scrollView: SC.ScrollView.design({
      contentView: SC.View.design({
        childViews: 'labelView ledger1 ledger2'.w(),
        labelView: SC.LabelView.design({
          layout: { left: EccapCalc.LEFT_MARGIN_LEDGERS, top: 0, height: 50},
          valueBinding: 'EccapCalc.pageController.title',
          //fontWeight: SC.BOLD_WEIGHT,
          tagName: 'h1',
        }),
        ledger1: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 100, 
                  'EccapCalc.initialOptionCostsController', 'Initial Costs'),
        ledger2: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 350, 
                  'EccapCalc.recurringOptionCostsController', 'Monthly Costs'),
      }),
    }),
  }),
});
