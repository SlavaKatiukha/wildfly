var SOURCE_NODE = "${nodes.cp.first.id}";
var TARGET_NODE = "${nodes.extra.first.id}";
var PASS_PATH = "/opt/wildfly/standalone/configuration/.pswd";

var pswd = jelastic.env.file.Read('${env.envName}', 'this.session', PASS_PATH, null, null, SOURCE_NODE);

if (pswd.result != 0) {
    return pswd;
}

var adminUserCredentials = "admin " + pswd.body;

jelastic.env.control.ExecCmdById('${env.envName}', 'this.session', TARGET_NODE, toJSON([{ "command": "/opt/wildfly/bin/add-user.sh", "params": adminUserCredentials }]), null); 

return {
    result : 0,
};
