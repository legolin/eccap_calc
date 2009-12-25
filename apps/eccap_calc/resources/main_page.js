// ==========================================================================
// Project:   EccapCalc - mainPage
// Copyright: ©2009 Westside Consulting LLC, Ann Arbor, MI, USA
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
        target: 'EccapCalc.currentViewController',
        action: 'showPersonal',
      }),
      SC.ButtonView.design({
        layout: { left: 20, top: 150, width: 100, height: 25},
        title: 'New Option',
        target: 'EccapCalc.optionController',
        action: "add_option"
      }),
      'option',

      SC.ScrollView.design({
        layout: { left: EccapCalc.LEFT_MARGIN_SCROLL, top: 0, bottom: 0, right: 0},
        contentView: SC.ContainerView.design({
          nowShowingBinding: 'EccapCalc.currentViewController.nowShowing',
        }),
      }),
    ],
    option: SC.ListView.design({
      layout: { left: 20, width: 140, top: 175, height: 0 },
      contentBinding: 'EccapCalc.optionController.arrangedObjects',
      selectionBinding: 'EccapCalc.optionController.selection',
      contentValueKey: 'title',
      target: 'EccapCalc.currentViewController', 
      action: 'showOption',
      actOnSelect: YES,
      canEditContent: YES,
      canDeleteContent: YES,
    }),
  }),
  personalPage: SC.View.design({
    childViews: 'labelView assetsView incomeView expensesView resultsView'.w(),

    labelView: SC.LabelView.design({
      layout: { left: EccapCalc.LEFT_MARGIN_LEDGERS, top: 0, height: 50},
      displayValue: 'Personal',
      controlSize: SC.HUGE_CONTROL_SIZE,
    }),
    assetsView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 100,
                  'EccapCalc.assetsLedgerController', 'Liquid Assets'),
    incomeView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 350, 
                  'EccapCalc.incomeLedgerController', 'Monthly Income'),
    expensesView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 600, 
                  'EccapCalc.expensesLedgerController', 'Monthly Expenses'),
    resultsView: EccapCalc.ResultView(EccapCalc.LEFT_MARGIN_LEDGERS, 850),
  }),
  optionPage: SC.View.design({
    childViews: 'labelView deleteButton ledger1 ledger2 resultsView'.w(),
    labelView: SC.LabelView.design({
      layout: { left: EccapCalc.LEFT_MARGIN_LEDGERS, top: 0, height: 50},
      valueBinding: 'EccapCalc.currentViewController.title',
      controlSize: SC.HUGE_CONTROL_SIZE,
    }),
    deleteButton: SC.ButtonView.design({
      layout: { right: 0, width: 100, top: 0, height: 24 },
      title: 'Delete Page',
      target: 'EccapCalc.optionController',
      action: 'delete_option',
    }),
    ledger1: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 100, 
              'EccapCalc.initialOptionCostsController', 'Initial Costs'),
    ledger2: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN_LEDGERS, 350, 
              'EccapCalc.recurringOptionCostsController', 'Monthly Costs'),
    resultsView: EccapCalc.ResultView(EccapCalc.LEFT_MARGIN_LEDGERS, 600),
  }),
});
