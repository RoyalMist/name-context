import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils';

export const NAME_ATOM = atomWithStorage("name", "");

export const NAME_LENGTH_ATOM = atom(
    (get) => get(NAME_ATOM).length
)
