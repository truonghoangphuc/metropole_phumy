import { createHmac } from "crypto";

const secrectKey = 'metropole_phumy_strapi';

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.Email) {
      data.SubscriberToken = createHmac("sha256", secrectKey)
        .update(`${data.Email}_${new Date()}`)
        .digest("hex");
    }
  },
};
