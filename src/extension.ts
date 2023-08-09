import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import testSchema from "./constants";

interface ComponentI {
	name: string,
	content: string | null
}

const componentFiles: Array<ComponentI> = [
	{
		name: "service",
		content: testSchema.service
	},
	{
		name: "module",
		content: testSchema.module
	},
	{
		name: "controller",
		content: testSchema.controller
	},
	{
		name: "widdleware",
		content: testSchema.middleware
	},
	{
		name: "route",
		content: null
	}
];

// if (!uri || !uri.fsPath) {
// 	vscode.window.showWarningMessage("No se pudo obtener la ubicación de la carpeta.");
// 	return;
// }

const createFolter = (path: string) => {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path);
	}
}

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('getstarted.newBechComponent', (uri: vscode.Uri) => {
		const currentWorkspaceFolder = vscode.workspace.workspaceFolders || [];
		const baseFolder = currentWorkspaceFolder[0].uri.path.slice(1);

		const newFolderName = "nuevoComponente";

		const currentFolderPath = uri.fsPath;
		const newFolderPath = path.join(currentFolderPath, newFolderName);
		const newTestPath = `${baseFolder}/src/test/components`;
		createFolter(newFolderPath);
		createFolter(newTestPath);

		const createFiles = (file: ComponentI) => {
			try {
				const newFilePath = path.join(newFolderPath, `${newFolderName}.${file.name}.js`);
				fs.writeFileSync(newFilePath, "Contenido del nuevo archivo", 'utf8');
				
				const pathTest = `${newTestPath}/${newFolderName}`;
				createFolter(pathTest);

				if (!file.content) return; 
				const newPathTest = path.join(pathTest, `${newFolderName}.${file.name}.spec.js`);

				const content = file.content.replace(/NAME_COMPONENT/g, newFolderName);
				fs.writeFileSync(newPathTest, content, 'utf8');
			} catch (error) {
				console.log("😢: ", error);
			}
		}

		componentFiles.map(createFiles);
		vscode.window.showInformationMessage(`Componente ${newFolderName} creado con exito`);
	});

	context.subscriptions.push(disposable);
	vscode.commands.executeCommand('setContext', 'extensionActive', true);
}

export function deactivate() {
	vscode.commands.executeCommand('setContext', 'extensionActive', false);
}
