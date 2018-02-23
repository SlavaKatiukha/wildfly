import com.hivext.api.core.utils.Transport;
import com.hivext.api.development.Scripting;
import com.hivext.api.utils.Random;

var domainEnvInfo = jelastic.env.control.GetEnvInfo('${env.envName}', session);

if (domainEnvInfo.result != 0) return resp;

domainEnvInfo.env.sslState = true;

return jelastic.env.control.ChangeTopology('${env.envName}', session, '' , domainEnvInfo.env, domainEnvInfo.nodes);
