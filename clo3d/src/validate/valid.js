
import { removeSpecialCharacter, replaceMultipleSpaces } from '../utils/string'

export function validUserName(val) {
    return replaceMultipleSpaces(removeSpecialCharacter(val)).trim()
}
