/**
* ALL BMC SOFTWARE PRODUCTS LISTED WITHIN THE MATERIALS ARE TRADEMARKS OF BMC SOFTWARE, INC. ALL OTHER COMPANY PRODUCT NAMES
* ARE TRADEMARKS OF THEIR RESPECTIVE OWNERS.
*
* (c) Copyright 2021 BMC Software, Inc.
* This code is licensed under MIT license (see LICENSE.txt for details)
*/

/**
 * All of the arguments the ISPW CLI accepts.
 */
export interface CliArgs {
    codePage?: string;
    help?: string;
    host?: string;
    password: string;
    port?: number;
    timeout?: number;
    username: string;
    protocol?: string;
    targetFolder?: string;
    serverConfig?: string;
    operation: string;
    gitRepoUrl?: string;
    gitUsername?: string;
    gitPassword?: string;
    gitBranch?: string;
    gitCommit?: string;
    gitFromHash?: string;
    stream?: string;
    application?: string;
    checkoutLevel?: string;
    containerCreation?: string;
    customDescription?: string;
    gitLocalPath?: string;
    ispwConfigPath: string;
    gitCommitFile?: string;
    vscSetting?: string;
    componentFiles: string;
    ispwGitAssignDesc?: string;
    ispwMappingLevel: string;
    typeOverride?: string;
}