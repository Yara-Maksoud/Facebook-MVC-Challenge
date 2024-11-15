const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://yaramaksoud:yara112233@clusterfb.c5mdj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFB")
.then(() => {
    console.log("DB is connected");
    
})
.catch(err => {
    console.log(err);
    
})