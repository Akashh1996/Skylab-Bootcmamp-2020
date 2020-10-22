const { test } = require('@jest/globals')
const comparePowers = require('./compare-powers')

test(''



Test.assertEquals(comparePowers([2, 10], [2, 15]), 1);
Test.assertEquals(comparePowers([2, 10], [3, 10]), 1);
Test.assertEquals(comparePowers([2, 10], [2, 10]), 0);
Test.assertEquals(comparePowers([3, 9], [5, 6]), -1);
Test.assertEquals(comparePowers([7, 7], [5, 8]), -1);