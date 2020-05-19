import { fetchQuote } from "./company";
import { response } from "express";

async (req, res) => {
  try {
    const users = Follow.find();
    users.forEach(async (user) => {
      let messageString = defaultMessageString;
      await user.follows.forEach((stock) => {
        fetchQuote(stock)
          .then((res) => {
            const data = res.data[0];

            messageString = `${messageString}

                        ${data.name}  ${data.price} ${data.change}
                        `;
          })
          .catch((err) => {
            console.log({ err });
            throw new Error(err);
          });
      });
      console.log({ messageString });
    });

    res.json({ msg: "success" });
  } catch (err) {
    res.json({ err });
  }
};







try{
  const response = fetchQuote(stock)
  if(response.status === 200) {
    const data = response.data[0];

    messageString = `${messageString}
  
    ${data.name}  ${data.price} ${data.change}
    `;
      
  } else{
    throw new Error({err: response.response})
  }

} catch (err) {
  console.log("Err", err)
}

















