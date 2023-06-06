/**
 * 检测是否有emoji表情
 * @param {*} substring 字符串
 * @returns 返回boolean，是否有emoji表情，有返回true,没有返回false
 */
export function isEmojiCharacter (substring) {
    for (var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i)
        if (0xd800 <= hs && hs <= 0xdbff) {
            if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1)
                var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000
                if (0x1d000 <= uc && uc <= 0x1f77f) {
                    return true
                }
            }
        } else if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1)
            if (ls == 0x20e3) {
                return true
            }
        } else {
            if (0x2100 <= hs && hs <= 0x27ff) {
                return true
            } else if (0x2b05 <= hs && hs <= 0x2b07) {
                return true
            } else if (0x2934 <= hs && hs <= 0x2935) {
                return true
            } else if (0x3297 <= hs && hs <= 0x3299) {
                return true
            } else if (
                hs == 0xa9 ||
                hs == 0xae ||
                hs == 0x303d ||
                hs == 0x3030 ||
                hs == 0x2b55 ||
                hs == 0x2b1c ||
                hs == 0x2b1b ||
                hs == 0x2b50
            ) {
                return true
            }
        }
    }
    return false
}
