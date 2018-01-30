import com.hivext.api.environment.Environment;
  
var SOURCE_NODE = "node.cp.first.id";
var TARGET_NODE = "node.extra.first.id";
var SESSION = hivext.local.getParam("session");
var PASS_PATH = "/opt.wildfly/standalone/configuration/.pswd";

var pswd = jelastic.env.file.Read(envName, SESSION, PASS_PATH, SOURCE_NODE);

return {
    result : 0,
    pass : pass
};
