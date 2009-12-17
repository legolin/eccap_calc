// ==========================================================================
// Project:   EccapCalc.Ledger Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

sc_require('models/ledger');

EccapCalc.Ledger.FIXTURES = [{
    guid: 'assets',
    recurring: NO,
    credit: YES,
    page: 'personal'
  }, {
    guid: 'income',
    recurring: YES,
    credit: YES,
    page: 'personal'
  }, {
    guid: 'expenses',
    recurring: YES,
    credit: NO,
    page: 'personal'
  }, {
    guid: 'option-1-initial',
    recurring: NO,
    credit: NO,
    page: 'option-1'
  }, {
    guid: 'option-1-recurring',
    recurring: YES,
    credit: NO,
    page: 'option-1'
  }, {
    guid: 'option-2-initial',
    recurring: NO,
    credit: NO,
    page: 'option-2'
  }, {
    guid: 'option-2-recurring',
    recurring: YES,
    credit: NO,
    page: 'option-2'
  }, 
];
