import com.hivext.api.core.utils.Transport;
import com.hivext.api.development.Scripting;
import com.hivext.api.utils.Random;

var domainEnvInfo = jelastic.env.control.GetEnvInfo('${env.envName}', session);

if (domainEnvInfo.result != 0) return resp;

domainEnvInfo.env.sslState = true;

return jelastic.env.control.ChangeTopology('${env.envName}', session, '1519393031834;changetopology;28919757aa80fcb9c06905fe6eddbe4c;env-ww' , domainEnvInfo.env, domainEnvInfo.nodes);
