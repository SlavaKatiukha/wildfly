import com.hivext.api.core.utils.Transport;
import com.hivext.api.development.Scripting;
import com.hivext.api.utils.Random;

var SOURCE_NODE = "${settings.masterId}";

var TARGET_NODE = "${nodes.ctrl.first.id}";


var PASS_PATH = "/opt/wildfly/standalone/configuration/.pswd" ;

var pswd = jelastic.env.file.Read('${env.envName}', session, PASS_PATH, null, null, SOURCE_NODE);

var resetPasswordCmd = "/opt/wildfly/bin/add-user.sh" ;

if (pswd.result != 0) {
    return pswd;
}

var adminUserCredentials = "admin " + pswd.body.replace(/\n/g, '');

jelastic.env.control.ExecCmdById('${env.envName}', session, SOURCE_NODE, toJSON([{ "command": "/usr/bin/rm -f", "params": PASS_PATH }]), false, "root");
return jelastic.env.control.ExecCmdByGroup('${env.envName}', session, 'ctrl', toJSON([{ "command": resetPasswordCmd, "params": adminUserCredentials }]), false, true);
