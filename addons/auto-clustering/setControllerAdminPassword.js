var SOURCE_NODE = "${nodes.cp.first.id}";
var TARGET_NODE = "${nodes.extra.first.id}";
var PASS_PATH = "/opt/wildfly/standalone/configuration/.pswd";

var pswd = jelastic.env.file.Read(${env.envName}, session, PASS_PATH, null, null, SOURCE_NODE);

var adminUserCredentials = "admin " + pswd;

jelastic.env.control.ExecCmdById(${env.envName}, session, TARGET_NODE, toJSON([{ "command": "/opt/wildfly/bin/add-user.sh", "params": adminUserCredentials }]), null); 
