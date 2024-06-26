import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
// import { StartFunc as AddListenersStartFunc } from "../CreateNew/AddListeners.js";
import { StartFunc as FormLoadFuncsStartFunc } from "./FormLoadFuncs.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as AddListenersStartFunc } from "./PushData/EntryFile.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let StartFunc = async () => {
    // CheckUserFuncsjFStartFunc({
    //     inUserKey: jVarLocalStorageKeyName,
    //     inKTokenKey: jVarCommonKToken
    // });

    AddListenersStartFunc();
    await FormLoadFuncsStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

StartFunc().then();