/**
 * Copy to clipboard function
 * @param {string} value Value to be copied to the Clipboard
 * @return {Promise<void>} Return a void promise
 */
async function copyToClipBoard(value) {
    try {
        return await window.navigator.clipboard.writeText(value);
    } catch(e) {
        console.error(e);
    }
}

export default copyToClipBoard;