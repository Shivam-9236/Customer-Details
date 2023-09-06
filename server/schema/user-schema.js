import mongoose from "mongoose";
import autoincrement from "mongoose-auto-increment";

const userschema = mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  street: String,
  address: String,
  phone: String,
  city: String,
  email: String,
  state: String,
});
// autoincrement.initialize(mongoose.connection);
// userschema.plugin(autoincrement.plugin, "user");

const user = mongoose.model("user", userschema);

export default user;
