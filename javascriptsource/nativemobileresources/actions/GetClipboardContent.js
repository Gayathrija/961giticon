import { Clipboard } from 'react-native';

// This file was generated by Mendix Modeler.
/**
 * @returns {Promise.<string>}
 */
async function GetClipboardContent() {
    // BEGIN USER CODE
    // Documentation https://facebook.github.io/react-native/docs/clipboard#getstring
    return Clipboard.getString();
    // END USER CODE
}

export { GetClipboardContent };