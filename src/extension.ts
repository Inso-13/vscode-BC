// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "borland-c" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('borland-c.dosbox', () => {
		// The code you place here will be executed every time your command is executed
		// eslint-disable-next-line @typescript-eslint/naming-convention
		if(vscode.workspace.workspaceFolders === undefined)
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		if(vscode.workspace.workspaceFolders[0].name !== "DISK_C")
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		
		const root = vscode.workspace.workspaceFolders[0].uri.fsPath + "\\..";
		const cmd = root + "\\dosbox\\dosbox.exe -conf "+ root + "\\dosbox\\dosbox.conf -noconsole";
		vscode.tasks.executeTask(new vscode.Task({"type":"shell"},vscode.TaskScope.Workspace,"dosbox",'npm',new vscode.ShellExecution(cmd)));
		// Display a message box to the user
	});

	let disposable2 = vscode.commands.registerCommand('borland-c.bc31', () => {
		// The code you place here will be executed every time your command is executed
		// eslint-disable-next-line @typescript-eslint/naming-convention
		if(vscode.workspace.workspaceFolders === undefined)
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		if(vscode.workspace.workspaceFolders[0].name !== "DISK_C")
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		
		const root = vscode.workspace.workspaceFolders[0].uri.fsPath + "\\..";
		const cmd = root + "\\dosbox\\dosbox.exe -conf "+ root + "\\dosbox\\bc31.conf -noconsole";
		vscode.tasks.executeTask(new vscode.Task({"type":"shell"},vscode.TaskScope.Workspace,"bc31",'npm',new vscode.ShellExecution(cmd)));
		// Display a message box to the user
	});
	let disposable3 = vscode.commands.registerCommand('borland-c.bc-compile', () => {
		// The code you place here will be executed every time your command is executed
		// eslint-disable-next-line @typescript-eslint/naming-convention
		if(vscode.workspace.workspaceFolders === undefined)
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		if(vscode.workspace.workspaceFolders[0].name !== "DISK_C")
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		
		const root = vscode.workspace.workspaceFolders[0].uri.fsPath + "\\..";
		const cmd = root + "\\dosbox\\dosbox.exe -conf "+ root + "\\dosbox\\dosbox.conf -noconsole -c C: -c \"bcc -w1 -nC:\\${relativeFileDirname}\\ -l C:\\BORLANDC\\LIB\\GRAPHICS.LIB C:\\${relativeFileDirname}\\${fileBasenameNoExtension}.c\" -c C:\\${relativeFileDirname}\\${fileBasenameNoExtension}.exe";
		vscode.tasks.executeTask(new vscode.Task({"type":"shell"},vscode.TaskScope.Workspace,"bc-compile",'npm',new vscode.ShellExecution(cmd)));
		// Display a message box to the user
	});
	let disposable4 = vscode.commands.registerCommand('borland-c.bc-build', () => {
		// The code you place here will be executed every time your command is executed
		// eslint-disable-next-line @typescript-eslint/naming-convention
		if(vscode.workspace.workspaceFolders === undefined)
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		if(vscode.workspace.workspaceFolders[0].name !== "DISK_C")
		{
			vscode.window.showErrorMessage("请打开DISK_C文件夹!（文件->打开文件夹）");
			return;
		}
		
		const root = vscode.workspace.workspaceFolders[0].uri.fsPath + "\\..";
		const cmd = root + "\\dosbox\\dosbox.exe -conf "+ root + "\\dosbox\\dosbox.conf -noconsole -c C: -c \"cd ${relativeFileDirname}\" -c \"prj2mak ${fileBasenameNoExtension}.prj ${fileBasenameNoExtension}.mak\" -c \"make -f ${fileBasenameNoExtension}.mak\" -c ${fileBasenameNoExtension}.exe";
		vscode.tasks.executeTask(new vscode.Task({"type":"shell"},vscode.TaskScope.Workspace,"bc-build",'npm',new vscode.ShellExecution(cmd)));
		// Display a message box to the user
	});

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
}

// this method is called when your extension is deactivated
export function deactivate() {}
