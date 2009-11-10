// ==========================================================================
// Project:   EccapCalc.Assets Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

sc_require('models/assets');

EccapCalc.Asset.FIXTURES = [{

	// TODO: Add your data fixtures here.
	// All fixture records must have a unique primary key (default 'guid').  See 
	// the example below.

    guid: 1,
    description: "401K",
    value: Number(100000),
  }, {
    guid: 2,
		description: "Other savings",
    value: Number(25000),
  },
	//
	// { guid: 3,
	//   description: "Jim",
	//   value: "Halpert" },
	//
	// { guid: 4,
	//   description: "Pam",
	//   value: "Beesly" },
	//
	// { guid: 5,
	//   description: "Ryan",
	//   value: "Howard" }
];
