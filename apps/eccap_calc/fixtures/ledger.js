// ==========================================================================
// Project:   EccapCalc.Ledger Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

sc_require('models/ledger');

EccapCalc.Ledger.FIXTURES = [{
    guid: 'assets',
    title: 'Net Liquid Assets',
    recurring: NO,
    credit: YES,
    page: 'personal'
  }, {
    guid: 'income',
    title: 'Monthly Income',
    recurring: YES,
    credit: YES,
    page: 'personal'
  }, {
    guid: 'expenses',
    title: 'Monthly Expenses',
    recurring: YES,
    credit: NO,
    page: 'personal'
  }, {
    guid: 'facility-1-initial',
    title: 'Initial Fees and Costs',
    recurring: NO,
    credit: NO,
    page: 'facility-1'
  }, {
    guid: 'facility-1-recurring',
    title: 'Monthly Fees and Expenses',
    recurring: YES,
    credit: NO,
    page: 'facility-1'
  }, {
    guid: 'facility-2-initial',
    title: 'Initial Fees and Costs',
    recurring: NO,
    credit: NO,
    page: 'facility-2'
  }, {
    guid: 'facility-2-recurring',
    title: 'Monthly Fees and Expenses',
    recurring: YES,
    credit: NO,
    page: 'facility-2'
  }, 
];
