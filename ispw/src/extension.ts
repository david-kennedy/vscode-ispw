// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { Utils } from "./Utils";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ispw" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('ispw.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from ISPW!');
	});

	let generate = vscode.commands.registerCommand('ispw.generate', (e) => {
		let fspath = e.fsPath;
		let filepath = path.basename(fspath);

		vscode.window.showInformationMessage('The ISPW Generate process has started');
		//vscode.window.showInformationMessage(filepath);
		commandHandler(filepath);
	});
		
		

	context.subscriptions.push(disposable);
	context.subscriptions.push(generate);
}


// this method is called when your extension is deactivated
export function deactivate() {}

async function commandHandler(item: string): Promise<void> {
        await Utils.executeISPWCommand(item);   
}
