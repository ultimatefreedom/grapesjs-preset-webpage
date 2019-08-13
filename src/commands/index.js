import openImport from './openImport';
import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
  cmdSave,
  cmdExit
} from './../consts';

export default (editor, config) => {
  const cm = editor.Commands;
  const txtConfirm = config.textCleanCanvas;

  cm.add(cmdImport, openImport(editor, config));
  cm.add(cmdDeviceDesktop, e => e.setDevice('Desktop'));
  cm.add(cmdDeviceTablet, e => e.setDevice('Tablet'));
  cm.add(cmdDeviceMobile, e => e.setDevice('Mobile portrait'));
  cm.add(cmdClear, e => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
  cm.add(cmdSave, e => console.log("save-code")); //, e => code") );
  cm.add(cmdExit, e => console.log("exit")); //, e => code") );

}
