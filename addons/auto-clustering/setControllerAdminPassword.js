var SOURCE_NODE = "${nodes.cp.first.id}";
var TARGET_NODE = "${nodes.ctrl.first.id}";
var PASS_PATH = "/opt/wildfly/standalone/configuration/.pswd";

var pswd = jelastic.env.file.Read('${env.envName}', session, PASS_PATH, null, null, SOURCE_NODE);

if (pswd.result != 0) {
    return pswd;
}

var adminUserCredentials = "admin " + pswd.body;

//return TARGET_NODE

return jelastic.env.control.ExecCmdById('${env.envName}', session, TARGET_NODE, toJSON([{ "command": "/bin/bash /opt/wildfly/bin/add-user.sh" }]), true, "root");
