import com.hivext.api.environment.Environment;
  
var SOURCE_NODE = "nodes.cp.first.id";
var TARGET_NODE = "nodes.extra.first.id";
var SESSION = hivext.local.getParam("session");
var PASS_PATH = "/opt.wildfly/standalone/configuration/.pswd";

var pswd = jelastic.env.file.Read(${env.envName}, SESSION, PASS_PATH, SOURCE_NODE);

jelastic.env.control.ExecCmdByGroup(${env.envName}, SESSION, ctrl, toJSON([{ "command": "/opt/wildfly/bin/add-user.sh admin", "params": pswd }]), true, false, "root"); 

return {
    result : 0,
};
