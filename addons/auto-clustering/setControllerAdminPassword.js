import com.hivext.api.environment.Environment;
  
var SOURCE_NODE = "nodes.cp.first.id";
var TARGET_NODE = "nodes.extra.first.id";
var SESSION = hivext.local.getParam("session");
var PASS_PATH = "/opt.wildfly/standalone/configuration/.pswd";

var pswd = jelastic.env.file.Read(${env.envName}, SESSION, PASS_PATH, SOURCE_NODE);

var adminUserCredentials = "admin" + pswd

jelastic.env.control.ExecCmdById(${env.envName}, SESSION, TARGET_NODE, toJSON([{ "command": "/opt/wildfly/bin/add-user.sh", "params": adminUserCredentials }]), true, false, "root"); 

return {
    result : 0,
};
