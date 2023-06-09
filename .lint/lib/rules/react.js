/**
 * @fileoverview require const when use useState
 * @author Vương
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: 'suggestion', // `problem`, `suggestion`, or `layout`
		docs: {
			description: 'require const when use useState',
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: 'code', // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
	},

	create(context) {
		// variables should be defined here

		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		// any helper functions should go here or else delete this section

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			// visitor functions for different types of nodes
		}
	},
}
