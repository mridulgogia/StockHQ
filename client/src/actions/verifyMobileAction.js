import axios from "axios";

export const INIT_REQUEST_VERIFY = "INIT_REQUEST_VERIFY";
export const COMPLETED_REQUEST_VERIFY = "COMPLETED_REQUEST_VERIFY";
export const ERROR_REQUEST_VERFIFY = "ERROR_REQUEST_VERFIFY";

export const onClickVerifyNumber = (mobileNumber, countryCode) => dispatch => {
    dispatch({type: INIT_REQUEST_VERIFY});
console.log(typeof mobileNumber)

    // mobileNumber.prototype.replace(" ", "");
// mobileNumber.prototype.replace("-", "");

    mobileNumber = mobileNumber.split("")
    let Number = mobileNumber.map(item => {
       if( item === " " || item === "-"){
           console.log(item)
           return ""
       }else {
           return item
       }
    })
    console.log( Number.join())
    axios.post("/api/verify/mobile/number", {number: mobileNumber})
        .then(res => {
            if(res.status === 200) {
                console.log("res", res)
                dispatch({
                    type: COMPLETED_REQUEST_VERIFY,
                    payload: res
                });
            } else {
                dispatch({
                    type: ERROR_REQUEST_VERFIFY,
                    payload: res
                })
            }
        })
        .catch(err => {
            console.log("err", err);
            dispatch({
                type: ERROR_REQUEST_VERFIFY,
                payload: err
            });
        });

}