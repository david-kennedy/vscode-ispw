/**
* THESE MATERIALS CONTAIN CONFIDENTIAL INFORMATION AND TRADE SECRETS OF BMC SOFTWARE, INC. YOU SHALL MAINTAIN THE MATERIALS AS
* CONFIDENTIAL AND SHALL NOT DISCLOSE ITS CONTENTS TO ANY THIRD PARTY EXCEPT AS MAY BE REQUIRED BY LAW OR REGULATION. USE,
* DISCLOSURE, OR REPRODUCTION IS PROHIBITED WITHOUT THE PRIOR EXPRESS WRITTEN PERMISSION OF BMC SOFTWARE, INC.
*
* ALL BMC SOFTWARE PRODUCTS LISTED WITHIN THE MATERIALS ARE TRADEMARKS OF BMC SOFTWARE, INC. ALL OTHER COMPANY PRODUCT NAMES
* ARE TRADEMARKS OF THEIR RESPECTIVE OWNERS.
*
* (c) Copyright 2021 BMC Software, Inc.
*/
import { CliUtils } from "../utils/CliUtils";
import { MessageUtils } from "../utils/MessageUtils";
import * as vscode from "vscode";

/**
 * This function will call the CLI for the specified operation.
 * @param operation The cli operation to call ('build', 'generate', 'load')
 * @param selectedFile The file URI to pass to the CLI. This will be undefined if the command is issued from the command palette or the editor.
 */
export function runCommand(operation: string, selectedFile: vscode.Uri | undefined) {

    if (selectedFile === undefined) { // command came from command palette or editor menu
        selectedFile = vscode.window.activeTextEditor?.document.uri;
        if (selectedFile === undefined || vscode.workspace.getWorkspaceFolder(selectedFile) === undefined) {
            // the active output channel will also be considered a text editor, but that's not useful to us
            MessageUtils.showErrorMessage("A workspace file must be open in the editor.");
            return;
        }
    }

    console.debug("Starting CLI command. File URI: " + selectedFile);
    CliUtils.runCliCommandForOperation(operation, selectedFile);
}