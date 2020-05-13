const SUser = require("../models/user");
const Follow = require("../models/followStock");
const fetchQuote = require("./company").fetchQuote;
const defaultMessageString = "Hello from default";
exports.alert = (req, res) => {
  Follow.find()
    .then((users) => {
      users.forEach(async (user) => {
        var messageString = defaultMessageString;
        const asyncCronJob = () =>{
          user.follows.forEach(async (stock) => {
            // console.log(stock);

            try {
              const response = await fetchQuote(stock);
              // console.log({"res":response.data[0]})
              if (response.status === 200) {
                const data = response.data[0];

                messageString = 
                `${messageString}
                 ${data.name}  ${data.price} ${data.change}
              `;
                // console.log({messageString})
              } else {
                throw new Error({ err: response.response.data });
              }
            } catch (err) {
              console.log("Err", err);
            }
            console.log("mess 0", messageString);
          });
        }
        await asyncCronJob();
        console.log("mess", messageString);
      });
      // console.log("mess", messageString);
      res.json({ msg: "success" });
    })
    .catch((err) => {
      console.log("err", err);
      res.json({ err: "Error" });
    });
};
