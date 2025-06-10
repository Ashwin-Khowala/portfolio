// atoms/loadingAtom.js
import { atom } from 'jotai'

export const isLoadingAtom = atom(false)
export const shouldShowLoadingAtom = atom(false)
export const isFirstLoading = atom(true);