 /*
                    Random Image Script- By JavaScript Kit (http://www.javascriptkit.com) 
                    Over 400+ free JavaScripts here!
                    Keep this notice intact please
                    
                    */

    function random_imglink() {
        let mylinks = new Array;
        mylinks[0] = "7yh9i0PAjck";
        mylinks[1] = "qSV0eZ_Bp_I";
        mylinks[2] = "BAAWjpKbBis";
        mylinks[3] = "0DJ9gScVL3A";
        mylinks[4] = "Ll7KRDpOWyY";
        mylinks[5] = "QUnT3Hw7gEo";
        mylinks[6] = "Tk-Ffv5d-jI";
        mylinks[7] = "NyfLnZxilFc";
        mylinks[8] = "dx76YPgZviE";
        mylinks[9] = "EWH2zp54IEQ";
        mylinks[10] = "QHFif7LRylw";
        mylinks[11] = "eBmYQpT0Mk4";
        mylinks[12] = "suwL4rOqses";
        mylinks[13] = "ueZnq0ekVX4";
        mylinks[14] = "Ct_YOfxc7Hw";
        mylinks[15] = "UhptKfsNXqU";
        
        let ry = Math.floor(Math.random() * mylinks.length);
        document.write("<iframe src='https://www.youtube.com/embed/" + mylinks[ry] + "?autoplay=1&amp;controls=0' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen width='186' height='138' style='position:relative;right:50px;' ></iframe>");
        
    }
    random_imglink();