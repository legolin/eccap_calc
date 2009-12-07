// ==========================================================================
// Project:   EccapCalc.Page Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

sc_require('models/page');

EccapCalc.PersonalPage.FIXTURES = [{
    guid: 'personal',
    account: 'account-1',
    assetsLedger: 'assets',
    incomeLedger: 'income',
    expensesLedger: 'expenses',
  },
];

EccapCalc.FacilityPage.FIXTURES = [{
    guid: 'facility-1',
    title: 'Facility 1',
    account: 'account-1',
    initialCostsLedger: 'facility-1-initial',
    recurringCostsLedger: 'facility-1-recurring',
  }, {
    guid: 'facility-2',
    title: 'Facility 2',
    account: 'account-1',
    initialCostsLedger: 'facility-2-initial',
    recurringCostsLedger: 'facility-2-recurring',
  },
];
