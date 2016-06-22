(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, function () { 'use strict';

	var a = 1;

	assert.equal( a, 1 );

	a = 2;

	assert.equal( a, 2 );

}));