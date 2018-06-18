
/**
 * 특수문자를 제거한다.
 * @param text
 * @returns string
 */
export function removeSpecialCharacter(text) {
    const pattern = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi
    if (pattern.test(text)) {
        text = text.replace(pattern, '')
    }
    return text
}

/**
 * 여러개의 스페이스바를 한개로 변환한다.
 * @param text
 * @returns string
 */
export function replaceMultipleSpaces(text) {
    /* eslint-disable */
    return text.replace( /  +/g, ' ')
    /* eslint-enable */
}

/**
 * 여러개의 줄바꿈을 한개로 변환한다.
 * @param text
 * @returns string
 */
export function replaceNewline(text) {
    return text.replace(/\n\s*\n/g, '\n')
}

/**
 * 줄바꿈을 스페이스로 변환한다.
 * @param text
 * @returns string
 */
export function removeNewline(text) {
    return text.replace(/(\r\n|\n|\r)/gm, ' ')
}

/**
 * 줄바꿈을 <br>로 변환한다.
 * @param text
 * @returns string
 */
export function replaceNewlineTobr(text) {
    return text.replace(/(\r\n|\n|\r)/gm, '<br>')
}

/**
 * 태그를 삭제한다.
 * @param text
 * @returns string
 */
export function removeTag(text) {
    return text.replace(/<\/?[^>]+(>|$)/g, '')
}

export function decodeHtml(html) {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
}

export function removeTagAndNewline(text) {
    return removeTag(removeNewline(text))
}

export function removeTagReplaceLine(text) {
    return removeTag(replaceNewline(text))
}

// if(getURLParameter('p') == 'event')
export function getURLParameter(name) {
    /* eslint-disable */
    return decodeURI(
        (new RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.search) || [, null])[1]
    )
    /* eslint-enable */
}

export function titleSubstring(str, len) {
    return str.length > len ? str.substring(0, len) + '..' : str
}

export function removeDomain(str) {
    return str.replace(/.*\/\/[^\/]*/, '')
}
