'use strict';
const path = require('path');
const ref = require('ref-napi');
const assert = require('assert');

assert(ref.instance);

const bindings = require('../build/Release/ffi-napi');
module.exports = bindings.initializeBindings(ref.instance);
