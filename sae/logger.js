import { SAEC_Config_Debug_Level_Error, SAEC_Config_Debug_Level_Info, SAEC_Config_Debug_Level_Log, SAEC_Config_Debug_Level_Warn } from "./constants";

export class Logger {
    constructor() {
        this.config = { level: SAEC_Config_Debug_Level_Warn };
    }

    setLogConfig(config) {
        this.config = config;
    }
    
	logInfo(...args) {
		if (this.config.level >= SAEC_Config_Debug_Level_Info && args.length) {
			var str = sprintf.apply(this, args);
			if (console.info) console.info(str);
		}
	}

	logWarn(...args) {
		if (this.config.level >= SAEC_Config_Debug_Level_Warn && args.length) {
			var str = sprintf.apply(this, args);
			if (console.warn) console.warn(str);
		}
	}

    logDebug(...args) {
        if (this.SAEV_config.debug.level >= SAEC_Config_Debug_Level_Log && args.length) {
            var str = sprintf.apply(this, args);
            if (console.log) console.log(str);
        }
    }
    logError(...args) {
        if (this.SAEV_config.debug.level >= SAEC_Config_Debug_Level_Error && args.length) {
            var str = sprintf.apply(this, args);
            if (console.error) console.error(str);
        }
    }
    // function SAEF_fatal() {
    //     var argumentsArray = Array.prototype.slice.call(arguments);
    //     var err = argumentsArray[0];
    //     var str = sprintf.apply(this, argumentsArray.slice(1));
    //     if (console.error) console.error(str);
    //     throw new SAEO_Error(err, str);
    // }
    
    // function SAEF_assert(cond) {
    //     if (!cond) {
    //         var err = SAEE_Assert;
    //         var str = "Assertion failed. This is a bug in SAE.";
    //         if (console.error) console.error(str);
    //         throw new SAEO_Error(err, str);
    //     }
    // }
}