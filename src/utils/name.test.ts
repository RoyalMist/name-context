import { describe, expect, it } from 'vitest';
import { fullName } from './name';

describe('Name functions', () => {
    it('returns the full name with the given arguments', () => {
        expect(fullName("John", "Doe")).toBe("John Doe");
    })
})