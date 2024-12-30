// window.stop_main_script = true;
if(typeof mouscripts !== "undefined"){
    dev_id = mouscripts.getUniqueDeviceID();
    // if(dev_id == "8dde-dbc8-458c-3cb4"){
       now_app_version = mouscripts.apk_version();
       if(now_app_version == "2.9"){
           window.stop_main_script = true;
           download_apk_confirm = confirm("يرجي تحميل احدث اصدار من التطبيق . \n اضغط Ok للذهاب الي رابط التحميل");
            if (download_apk_confirm) {
                mouscripts.open_external_link("https://www.elbatal-app.com");
                mouscripts.exitApp();
            } else {
                mouscripts.exitApp();
            }
       }
    // }
}
