'use strict';
const path = require('path');
const ref = require('ref-napi');
const assert = require('assert');

assert(ref.instance);

const bindings = require('../build/Release/system-time');
module.exports = bindings.initializeBindings(ref.instance);
