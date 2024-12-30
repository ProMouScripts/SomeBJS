// window.stop_main_script = true;
if(typeof mouscripts !== "undefined"){
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
}
