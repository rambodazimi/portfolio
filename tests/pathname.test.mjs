import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizePathname } from '../lib/pathname.ts';

test('Pages URLs match editor route keys, including nested skill pages', () => {
  assert.equal(normalizePathname('/articles/'), '/articles');
  assert.equal(normalizePathname('/extensions/python/'), '/extensions/python');
  assert.equal(normalizePathname('/about'), '/about');
});

test('the home route stays a slash', () => {
  assert.equal(normalizePathname('/'), '/');
});
