let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

    let jVarLocalFetchUrl = `/bin/Vouchers/FilterData/pk/${jVarLocalRowPK}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    console.log("jVarLocalResponse",jVarLocalResponse);

    return jVarLocalResponse;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };