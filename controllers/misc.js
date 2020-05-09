const SUser = require("../models/user");

exports.isVerified = (req, res) => {
    SUser.findById(req.user.id).then(user => {
      if(user) {
        const mobile = user.mobile;
        return res.json({
          isVerified : Boolean(user.mobile),
          mobile : mobile,
        });
      } else {
        return res.json({
          isVerified: false
        });
      }
    })
  }

  exports.mobile = (req, res) => {
      SUser.findById(req.user.id)
        .then(user => {
            if(user) {
                if(user.mobile.length > 0) {
                    return res.json({mobile: user.mobile});
                }else {
                    return res.status(400).json({mobile: "User not verified"});
                }
            }
        })
  }