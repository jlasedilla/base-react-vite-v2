import { describe, expect, it } from 'vitest';
import { add } from './sample-func';

// All tests within this suite will be run in parallel
describe.concurrent('suite', () => {
    it('add success test', async () => {
        expect(add(1, 1)).toBe(2);
    });
    it('add failed test', async () => {
        expect(add(1, 1)).not.toBe(3);
    });
});
