import ModalDataJson from './{{ksSample}}Data.json' assert { type: 'json' };

let GetFunc = async (req, res, next) => {
    let LocalRequestBody = req.body;

    if (Object.keys(LocalRequestBody).length === 0) {
        res.status(404).json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: ModalDataJson
        });
        return;
    };

    next();
};

export { GetFunc };