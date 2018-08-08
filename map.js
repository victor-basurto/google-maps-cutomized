$(function () {
    function initialize() {
        var centerlat = parseFloat($('input#centerlat').val());
        var centerlng = parseFloat($('input#centerlng').val());

        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(centerlat, centerlng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            //gestureHandling: 'cooperative',
            panControl: true,
            zoomControl: true,
            //streetViewControl: false,
            //disableDoubleClickZoom: true,
            clickableIcons: false
        };

        if (typeof map != 'undefined') {
            map = null;
            $('div#map-canvas').empty();
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        google.maps.event.addListener(map, 'center_changed', function () {
            var center = map.getCenter();
            $('input#centerlat').val(center.lat());
            $('input#centerlng').val(center.lng());
        });

        // Sample Content
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

            

            // function executeIdentifyTask(evt) {  
                
            //     map.graphics.clear();  
                  
            //     //Set the infoWindow to open at the top right of the point at all times  
            //     map.infoWindow.setFixedAnchor(esri.dijit.InfoWindow.ANCHOR_UPPERRIGHT);  
                  
            //     //Determine the upper right, and center, coordinates of the map  
            //     var maxPoint = new esri.geometry.Point(map.extent.xmax, map.extent.ymax)  
            //     var centerPoint = new esri.geometry.Point(map.extent.getCenter());  
                  
            //     //Convert these to screen coordinates  
            //     var maxPointScreen = map.toScreen(maxPoint);  
            //     var centerPointScreen = map.toScreen(centerPoint);  
                  
            //     //Subtract the size of the infoWindow, including a buffer.  
            //     //This will show whether the infoWindow would spill out of the current view.  
            //     var xDiff = Math.abs(maxPointScreen.x - evt.screenPoint.x) - 435;  
            //     var yDiff = Math.abs(maxPointScreen.y - evt.screenPoint.y) - 285;  
                  
            //     //If required, recalculate a new centerpoint which accounts for the infoWindow  
            //     if (xDiff < 0) {centerPointScreen.x -= xDiff;}  
            //     if (yDiff < 0) {centerPointScreen.y += yDiff;}  
                  
            //     //Pan the map to the new centerpoint (in Map coordinates)  
            //     centerPoint = map.toMap(centerPointScreen);  
            //     map.centerAt(centerPoint);  
                  
            //     //Display the infoWindow at the original point clicked  
            //     map.infoWindow.show(evt.screenPoint, esri.dijit.InfoWindow.ANCHOR_UPPERRIGHT);  
                
            // }
        function getInfowindowOffset(map, markers) {
            var center = getPixelFromLatLng(map.getCenter()),
                point = getPixelFromLatLng(markers.getPosition()),
                quadrant = "",
                offset;
            quadrant += (point.y > center.y) ? "b" : "t";
            quadrant += (point.x < center.x) ? "l" : "r";            
            if (quadrant == "tr") {
                offset = new google.maps.Size(-70, 185);
            } else if (quadrant == "tl") {
                offset = new google.maps.Size(70, 185);
            } else if (quadrant == "br") {
                offset = new google.maps.Size(-70, 20);
            } else if (quadrant == "bl") {
                offset = new google.maps.Size(70, 20);
            }

            return offset;
        }
        function getPixelFromLatLng (latLng) {
            var projection = map.getProjection();          
            var point = projection.fromLatLngToPoint(latLng);
            return point;
        }



        var markers = [];
        var Lot132020center = new google.maps.LatLng(45.4969911971779, -122.910992406179);
        var markerLot132020 = new google.maps.Marker({
            position: Lot132020center,
            map: map,
            title: 'Lot132020'
        });
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            disableAutoPan: true
        });

        markerLot132020.addListener('mouseover', function() {
            infowindow.setOptions({
                pixelOffset: getInfowindowOffset( map, markerLot132020 ),
            });
            infowindow.open(map, markerLot132020)
        });
        markers.push(markerLot132020);
        var Lot132020coords0 = [
            { lat: 45.4960026105087, lng: -122.90787883785123 },
            { lat: 45.496825088616696, lng: -122.90737525911675 },
            { lat: 45.496943773602062, lng: -122.9070126725403 },
            { lat: 45.497506415519375, lng: -122.90689497683775 },
            { lat: 45.498023618761053, lng: -122.91189512875651 },
            { lat: 45.497850161883058, lng: -122.91193152317732 },
            { lat: 45.497828282591819, lng: -122.91193942323625 },
            { lat: 45.497809084468692, lng: -122.9119504122805 },
            { lat: 45.497781774789, lng: -122.91197400052836 },
            { lat: 45.497758264545581, lng: -122.91200477092949 },
            { lat: 45.497741413558387, lng: -122.91203693088207 },
            { lat: 45.497720905167412, lng: -122.91209089364104 },
            { lat: 45.497703621241, lng: -122.9121185373771 },
            { lat: 45.497691428970448, lng: -122.91213174303795 },
            { lat: 45.4976780373289, lng: -122.91214234241626 },
            { lat: 45.49766371984915, lng: -122.91215011901487 },
            { lat: 45.497647250728754, lng: -122.91215522519182 },
            { lat: 45.496681227458545, lng: -122.91220525123703 },
            { lat: 45.496667695946542, lng: -122.91220305606009 },
            { lat: 45.496654879513372, lng: -122.91219650529005 },
            { lat: 45.496642593267644, lng: -122.91218490402547 },
            { lat: 45.496633375038449, lng: -122.91217064860903 },
            { lat: 45.496626273778766, lng: -122.91215226830752 },
            { lat: 45.496622756314132, lng: -122.91213355972916 },
            { lat: 45.496418879719144, lng: -122.91016063728567 },
            { lat: 45.496384704001358, lng: -122.90987599182199 },
            { lat: 45.49634567183697, lng: -122.90959261202897 },
            { lat: 45.496313974959158, lng: -122.90938570162194 },
            { lat: 45.49628291245444, lng: -122.90919832544738 },
            { lat: 45.49623584556867, lng: -122.90893725398023 },
            { lat: 45.49618080791786, lng: -122.9086592980177 },
            { lat: 45.4961848191921, lng: -122.90865795813858 },
            { lat: 45.496143731300705, lng: -122.90846571179046 },
            { lat: 45.496097948712915, lng: -122.90826415000885 },
            { lat: 45.496054141574071, lng: -122.90808194516427 },
            { lat: 45.4960026105087, lng: -122.90787883785123 }];
        var Lot132020shape = new google.maps.Polygon({
            paths: [Lot132020coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132020shape.setMap(map);
        
        var Lot132191center = new google.maps.LatLng(45.4921064773415, -122.907090876919);
        var markerLot132191 = new google.maps.Marker({
            position: Lot132191center,
            map: map,
            title: 'Lot132191'
        });
        markers.push(markerLot132191);
        var Lot132191coords0 = [
            { lat: 45.491974600687264, lng: -122.90704700243911 },
            { lat: 45.492025343670058, lng: -122.90697039700841 },
            { lat: 45.492076868490471, lng: -122.90690313521966 },
            { lat: 45.492239075199521, lng: -122.90717283044785 },
            { lat: 45.492198427969207, lng: -122.90722610430878 },
            { lat: 45.4921625510008, lng: -122.90728048293703 },
            { lat: 45.491974600687264, lng: -122.90704700243911 }];
        var Lot132191shape = new google.maps.Polygon({
            paths: [Lot132191coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132191shape.setMap(map);

        var Lot132193center = new google.maps.LatLng(45.4919542378104, -122.907378219082);
        var markerLot132193 = new google.maps.Marker({
            position: Lot132193center,
            map: map,
            title: 'Lot132193'
        });
        markers.push(markerLot132193);
        var Lot132193coords0 = [
            { lat: 45.491819046967478, lng: -122.90738988072781 },
            { lat: 45.491852234348592, lng: -122.90729582212451 },
            { lat: 45.491888052786891, lng: -122.90721039764387 },
            { lat: 45.492097789688863, lng: -122.90740274775169 },
            { lat: 45.492069575723662, lng: -122.90747034118426 },
            { lat: 45.492046154738759, lng: -122.90753705070264 },
            { lat: 45.491819046967478, lng: -122.90738988072781 }];
        var Lot132193shape = new google.maps.Polygon({
            paths: [Lot132193coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132193shape.setMap(map);

        var Lot132194center = new google.maps.LatLng(45.4919016170953, -122.907542317331);
        var markerLot132194 = new google.maps.Marker({
            position: Lot132194center,
            map: map,
            title: 'Lot132194'
        });
        markers.push(markerLot132194);
        var Lot132194coords0 = [
            { lat: 45.491769036082665, lng: -122.90758167290775 },
            { lat: 45.491792300448509, lng: -122.90748177582245 },
            { lat: 45.491819046967478, lng: -122.90738988072781 },
            { lat: 45.492046154738759, lng: -122.90753705070264 },
            { lat: 45.492025117721965, lng: -122.90760973784457 },
            { lat: 45.492008733261706, lng: -122.90768056417689 },
            { lat: 45.491769036082665, lng: -122.90758167290775 }];
        var Lot132194shape = new google.maps.Polygon({
            paths: [Lot132194coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132194shape.setMap(map);

        var Lot132195center = new google.maps.LatLng(45.4918662529129, -122.90771551528);
        var markerLot132195 = new google.maps.Marker({
            position: Lot132195center,
            map: map,
            title: 'Lot132195'
        });
        markers.push(markerLot132195);
        var Lot132195coords0 = [
            { lat: 45.491739073074861, lng: -122.90778173627191 },
            { lat: 45.49175192459743, lng: -122.90767810388927 },
            { lat: 45.491769036082665, lng: -122.90758167290775 },
            { lat: 45.492008733261706, lng: -122.90768056417689 },
            { lat: 45.491995316101388, lng: -122.90775681468297 },
            { lat: 45.491986313119718, lng: -122.90783026666583 },
            { lat: 45.491739073074861, lng: -122.90778173627191 }];
        var Lot132195shape = new google.maps.Polygon({
            paths: [Lot132195coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132195shape.setMap(map);

        var Lot132196center = new google.maps.LatLng(45.4918508588504, -122.9079465343);
        var markerLot132196 = new google.maps.Marker({
            position: Lot132196center,
            map: map,
            title: 'Lot132196'
        });
        markers.push(markerLot132196);
        var Lot132196coords0 = [
            { lat: 45.491729163906065, lng: -122.90807913876922 },
            { lat: 45.491730889916788, lng: -122.9079071553315 },
            { lat: 45.49173421394422, lng: -122.90784101455603 },
            { lat: 45.491739073074861, lng: -122.90778173627191 },
            { lat: 45.491986313119718, lng: -122.90783026666583 },
            { lat: 45.491980530620992, lng: -122.90791484985895 },
            { lat: 45.491979126108561, lng: -122.90801061422403 },
            { lat: 45.491855365156439, lng: -122.90804856323545 },
            { lat: 45.491729163906065, lng: -122.90807913876922 }];
        var Lot132196shape = new google.maps.Polygon({
            paths: [Lot132196coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132196shape.setMap(map);

        var Lot132192center = new google.maps.LatLng(45.4920230071814, -122.907226675416);
        var markerLot132192 = new google.maps.Marker({
            position: Lot132192center,
            map: map,
            title: 'Lot132192'
        });
        markers.push(markerLot132192);
        var Lot132192coords0 = [
            { lat: 45.491888052786891, lng: -122.90721039764387 },
            { lat: 45.491930464441239, lng: -122.90712415779252 },
            { lat: 45.491974600687264, lng: -122.90704700243911 },
            { lat: 45.4921625510008, lng: -122.90728048293703 },
            { lat: 45.492127754098348, lng: -122.90734155954563 },
            { lat: 45.492097789688863, lng: -122.90740274775169 },
            { lat: 45.491888052786891, lng: -122.90721039764387 }];
        var Lot132192shape = new google.maps.Polygon({
            paths: [Lot132192coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132192shape.setMap(map);

        var Lot132190center = new google.maps.LatLng(45.4922346206509, -122.906941980493);
        var markerLot132190 = new google.maps.Marker({
            position: Lot132190center,
            map: map,
            title: 'Lot132190'
        });
        markers.push(markerLot132190);
        var Lot132190coords0 = [
            { lat: 45.4921109229049, lng: -122.90686355565983 },
            { lat: 45.4921709105025, lng: -122.90680191955556 },
            { lat: 45.492230427526771, lng: -122.90674966910419 },
            { lat: 45.492353979397436, lng: -122.90705799536741 },
            { lat: 45.492306999130165, lng: -122.90709942307836 },
            { lat: 45.492264557209211, lng: -122.90714321398835 },
            { lat: 45.4921109229049, lng: -122.90686355565983 }];
        var Lot132190shape = new google.maps.Polygon({
            paths: [Lot132190coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132190shape.setMap(map);

        var Lot132189center = new google.maps.LatLng(45.4923448534493, -122.906852711761);
        var markerLot132189 = new google.maps.Marker({
            position: Lot132189center,
            map: map,
            title: 'Lot132189'
        });
        markers.push(markerLot132189);
        var Lot132189coords0 = [
            { lat: 45.492230427526771, lng: -122.90674966910419 },
            { lat: 45.492296082216818, lng: -122.90670100797917 },
            { lat: 45.492360291742642, lng: -122.90666155634914 },
            { lat: 45.492451134141021, lng: -122.90699207349132 },
            { lat: 45.492400431752579, lng: -122.90702339834824 },
            { lat: 45.492353979397436, lng: -122.90705799536741 },
            { lat: 45.492230427526771, lng: -122.90674966910419 }];
        var Lot132189shape = new google.maps.Polygon({
            paths: [Lot132189coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132189shape.setMap(map);

        var Tract132409center = new google.maps.LatLng(45.4918109853388, -122.90667900846);
        var Tract132409coords0 = [
            { lat: 45.491238239314953, lng: -122.90807304225937 },
            { lat: 45.491240448002571, lng: -122.90787558645408 },
            { lat: 45.491244220226427, lng: -122.90779468119977 },
            { lat: 45.491249484339633, lng: -122.9077220906147 },
            { lat: 45.4912574021965, lng: -122.90764179306696 },
            { lat: 45.491268613396876, lng: -122.90755403902318 },
            { lat: 45.491282425707858, lng: -122.90746703787654 },
            { lat: 45.49129721879396, lng: -122.90738873037914 },
            { lat: 45.49131592430318, lng: -122.90730359779411 },
            { lat: 45.49133511393061, lng: -122.90722724303676 },
            { lat: 45.491358590617104, lng: -122.907144534359 },
            { lat: 45.491382051606706, lng: -122.90707063042849 },
            { lat: 45.491407494461882, lng: -122.90699806410663 },
            { lat: 45.491437725634654, lng: -122.90691991419449 },
            { lat: 45.491467204421319, lng: -122.90685050384045 },
            { lat: 45.491501772836138, lng: -122.90677607751942 },
            { lat: 45.491535095254946, lng: -122.9067102759292 },
            { lat: 45.49157017306046, lng: -122.9066463452241 },
            { lat: 45.491606954343169, lng: -122.90658438001481 },
            { lat: 45.491645384672594, lng: -122.90652447200377 },
            { lat: 45.491685407177805, lng: -122.90646670984977 },
            { lat: 45.491731200140727, lng: -122.90640575187223 },
            { lat: 45.491774370725565, lng: -122.90635277032356 },
            { lat: 45.491818942606059, lng: -122.90630218874011 },
            { lat: 45.4918835714489, lng: -122.90623554830204 },
            { lat: 45.491955507555069, lng: -122.90616974923954 },
            { lat: 45.492024952968116, lng: -122.9061137536408 },
            { lat: 45.492106730337291, lng: -122.90605559358622 },
            { lat: 45.492114276480265, lng: -122.90604548470709 },
            { lat: 45.492119647196986, lng: -122.9060314711322 },
            { lat: 45.492121546703942, lng: -122.906015742276 },
            { lat: 45.492120036483577, lng: -122.90600115824016 },
            { lat: 45.492273869119387, lng: -122.90593398530677 },
            { lat: 45.492292758184632, lng: -122.905960847437 },
            { lat: 45.492307806387757, lng: -122.90599321090072 },
            { lat: 45.492317893399722, lng: -122.90602925925168 },
            { lat: 45.492322594770812, lng: -122.90606747561883 },
            { lat: 45.492321712672791, lng: -122.90610625190168 },
            { lat: 45.492315284223324, lng: -122.90614395643865 },
            { lat: 45.492303579924112, lng: -122.90617900266693 },
            { lat: 45.49228709227831, lng: -122.90620991588442 },
            { lat: 45.49227465917172, lng: -122.906226550905 },
            { lat: 45.492262269368318, lng: -122.90623947644954 },
            { lat: 45.492247377830822, lng: -122.90625134760565 },
            { lat: 45.492233158661186, lng: -122.90625963406137 },
            { lat: 45.49221669104459, lng: -122.90626603797202 },
            { lat: 45.492201485020843, lng: -122.90626919435873 },
            { lat: 45.492159372159747, lng: -122.90626834057231 },
            { lat: 45.492151943176921, lng: -122.90627166883294 },
            { lat: 45.4921304713584, lng: -122.90628650230194 },
            { lat: 45.492077958626169, lng: -122.90632576373756 },
            { lat: 45.4920267335855, lng: -122.90636832544894 },
            { lat: 45.491976898771789, lng: -122.90641410223299 },
            { lat: 45.49192757561832, lng: -122.90646404064042 },
            { lat: 45.491885030717548, lng: -122.90651117925376 },
            { lat: 45.491841662761658, lng: -122.90656351300797 },
            { lat: 45.491802033930632, lng: -122.90661553654242 },
            { lat: 45.491763925802516, lng: -122.90666980824732 },
            { lat: 45.491727401419375, lng: -122.90672623833694 },
            { lat: 45.491692521203134, lng: -122.90678473345557 },
            { lat: 45.491659342855691, lng: -122.90684519683184 },
            { lat: 45.491627921263479, lng: -122.90690752843882 },
            { lat: 45.491598308406644, lng: -122.9069716251596 },
            { lat: 45.491570553273142, lng: -122.90703738095768 },
            { lat: 45.49154470177762, lng: -122.90710468705259 },
            { lat: 45.491520796685549, lng: -122.90717343209961 },
            { lat: 45.491498877542462, lng: -122.90724350237411 },
            { lat: 45.491478980608534, lng: -122.90731478195957 },
            { lat: 45.491461138798655, lng: -122.90738715293932 },
            { lat: 45.491446862766111, lng: -122.90745312104733 },
            { lat: 45.49143300415669, lng: -122.90752723451044 },
            { lat: 45.491421276728587, lng: -122.90760208791305 },
            { lat: 45.491412560310984, lng: -122.90766998630225 },
            { lat: 45.491404932635227, lng: -122.90774590359867 },
            { lat: 45.4913994825784, lng: -122.90782219909812 },
            { lat: 45.491396446917754, lng: -122.90789108410605 },
            { lat: 45.491394601338541, lng: -122.90806866199573 },
            { lat: 45.491238239314953, lng: -122.90807304225937 }];
        var Tract132409shape = new google.maps.Polygon({
            paths: [Tract132409coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132409shape.setMap(map);

        var Lot132179center = new google.maps.LatLng(45.4915254192235, -122.907807291414);
        var markerLot132179 = new google.maps.Marker({
            position: Lot132179center,
            map: map,
            title: 'Lot132179'
        });
        markers.push(markerLot132179);
        var Lot132179coords0 = [
            { lat: 45.491396602529356, lng: -122.90788623114244 },
            { lat: 45.491401412030839, lng: -122.90779147731281 },
            { lat: 45.491410061606395, lng: -122.90769254911518 },
            { lat: 45.491670399510248, lng: -122.90774853548868 },
            { lat: 45.491663424957707, lng: -122.90782844005574 },
            { lat: 45.491659612713981, lng: -122.90790376222667 },
            { lat: 45.491396602529356, lng: -122.90788623114244 }];
        var Lot132179shape = new google.maps.Polygon({
            paths: [Lot132179coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132179shape.setMap(map);

        var Lot132178center = new google.maps.LatLng(45.4914640681124, -122.908072004475);
        var markerLot132178 = new google.maps.Marker({
            position: Lot132178center,
            map: map,
            title: 'Lot132178'
        });
        markers.push(markerLot132178);
        var Lot132178coords0 = [
            { lat: 45.491394601338541, lng: -122.90806866199573 },
            { lat: 45.491396602529356, lng: -122.90788623114244 },
            { lat: 45.491659612713981, lng: -122.90790376222667 },
            { lat: 45.491657777624333, lng: -122.90809287303796 },
            { lat: 45.491543632714411, lng: -122.90810956559692 },
            { lat: 45.491427931363177, lng: -122.90811963679474 },
            { lat: 45.49141435802558, lng: -122.90811442679251 },
            { lat: 45.49140384241899, lng: -122.90810310352903 },
            { lat: 45.491396942031542, lng: -122.908087119329 },
            { lat: 45.491394601338541, lng: -122.90806866199573 }];
        var Lot132178shape = new google.maps.Polygon({
            paths: [Lot132178coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132178shape.setMap(map);

        var Lot132181center = new google.maps.LatLng(45.4915749565765, -122.907462168861);
        var markerLot132181 = new google.maps.Marker({
            position: Lot132181center,
            map: map,
            title: 'Lot132181'
        });
        markers.push(markerLot132181);
        var Lot132181coords0 = [
            { lat: 45.491437491740186, lng: -122.90750187151883 },
            { lat: 45.491455865926163, lng: -122.90741053376659 },
            { lat: 45.49147860066676, lng: -122.90731622999849 },
            { lat: 45.491725330229059, lng: -122.90744693411386 },
            { lat: 45.491706978805979, lng: -122.90752310688762 },
            { lat: 45.4916923834281, lng: -122.90759571668922 },
            { lat: 45.491437491740186, lng: -122.90750187151883 }];
        var Lot132181shape = new google.maps.Polygon({
            paths: [Lot132181coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132181shape.setMap(map);

        var Lot132180center = new google.maps.LatLng(45.4915439154843, -122.907632910188);
        var markerLot132180 = new google.maps.Marker({
            position: Lot132180center,
            map: map,
            title: 'Lot132180'
        });
        markers.push(markerLot132180);
        var Lot132180coords0 = [
            { lat: 45.491410061606395, lng: -122.90769254911518 },
            { lat: 45.491421715535544, lng: -122.90759900497444 },
            { lat: 45.491437491740186, lng: -122.90750187151883 },
            { lat: 45.4916923834281, lng: -122.90759571668922 },
            { lat: 45.491679652616916, lng: -122.90767417333812 },
            { lat: 45.491670399510248, lng: -122.90774853548868 },
            { lat: 45.491410061606395, lng: -122.90769254911518 }];
        var Lot132180shape = new google.maps.Polygon({
            paths: [Lot132180coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132180shape.setMap(map);

        var Lot132183center = new google.maps.LatLng(45.4916732201513, -122.907138824716);
        var markerLot132183 = new google.maps.Marker({
            position: Lot132183center,
            map: map,
            title: 'Lot132183'
        });
        markers.push(markerLot132183);
        var Lot132183coords0 = [
            { lat: 45.491532950375813, lng: -122.90713760255139 },
            { lat: 45.491564108234051, lng: -122.90705356329161 },
            { lat: 45.491599961776863, lng: -122.90696789245536 },
            { lat: 45.491822595216384, lng: -122.90716775889432 },
            { lat: 45.491793646978223, lng: -122.9072369620166 },
            { lat: 45.491768888864684, lng: -122.90730377304929 },
            { lat: 45.491532950375813, lng: -122.90713760255139 }];
        var Lot132183shape = new google.maps.Polygon({
            paths: [Lot132183coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132183shape.setMap(map);

        var Lot132184center = new google.maps.LatLng(45.4917393956393, -122.906989667152);
        var markerLot132184 = new google.maps.Marker({
            position: Lot132184center,
            map: map,
            title: 'Lot132184'
        });
        markers.push(markerLot132184);
        var Lot132184coords0 = [
            { lat: 45.491599961776863, lng: -122.90696789245536 },
            { lat: 45.491637046840466, lng: -122.90688886755005 },
            { lat: 45.491678920868111, lng: -122.90680890799247 },
            { lat: 45.491885877039984, lng: -122.90704034090854 },
            { lat: 45.491852065509313, lng: -122.90710493250508 },
            { lat: 45.491822595216384, lng: -122.90716775889432 },
            { lat: 45.491599961776863, lng: -122.90696789245536 }];
        var Lot132184shape = new google.maps.Polygon({
            paths: [Lot132184coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132184shape.setMap(map);

        var Lot132185center = new google.maps.LatLng(45.4918160331232, -122.90685100329);
        var markerLot132185 = new google.maps.Marker({
            position: Lot132185center,
            map: map,
            title: 'Lot132185'
        });
        markers.push(markerLot132185);
        var Lot132185coords0 = [
            { lat: 45.491678920868111, lng: -122.90680890799247 },
            { lat: 45.491721537997265, lng: -122.90673573946971 },
            { lat: 45.4917689863428, lng: -122.90666234318401 },
            { lat: 45.491958060062053, lng: -122.90692287677182 },
            { lat: 45.491919745504021, lng: -122.9069821685963 },
            { lat: 45.491885877039984, lng: -122.90704034090854 },
            { lat: 45.491678920868111, lng: -122.90680890799247 }];
        var Lot132185shape = new google.maps.Polygon({
            paths: [Lot132185coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132185shape.setMap(map);

        var Lot132186center = new google.maps.LatLng(45.4919696661144, -122.906756382052);
        var markerLot132186 = new google.maps.Marker({
            position: Lot132186center,
            map: map,
            title: 'Lot132186'
        });
        markers.push(markerLot132186);
        var Lot132186coords0 = [
            { lat: 45.4917689863428, lng: -122.90666234318401 },
            { lat: 45.491823828615786, lng: -122.90658640073929 },
            { lat: 45.491885030717548, lng: -122.90651117925376 },
            { lat: 45.492023093268251, lng: -122.90675351475063 },
            { lat: 45.492028545453572, lng: -122.90676971101163 },
            { lat: 45.492031015565566, lng: -122.90678732002759 },
            { lat: 45.492030350584457, lng: -122.90680525094615 },
            { lat: 45.492027018658867, lng: -122.9068210210992 },
            { lat: 45.492017195565055, lng: -122.90684220175973 },
            { lat: 45.491958060062053, lng: -122.90692287677182 },
            { lat: 45.4917689863428, lng: -122.90666234318401 }];
        var Lot132186shape = new google.maps.Polygon({
            paths: [Lot132186coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132186shape.setMap(map);

        var Lot132188center = new google.maps.LatLng(45.4921682994105, -122.906691031718);
        var markerLot132188 = new google.maps.Marker({
            position: Lot132188center,
            map: map,
            title: 'Lot132188'
        });
        markers.push(markerLot132188);
        var Lot132188coords0 = [
            { lat: 45.492031655286944, lng: -122.90660699714626 },
            { lat: 45.492267742802746, lng: -122.90640914035616 },
            { lat: 45.492339327570051, lng: -122.90658528183235 },
            { lat: 45.492288900423794, lng: -122.90661547888467 },
            { lat: 45.492241380685407, lng: -122.90664810413328 },
            { lat: 45.492199231253345, lng: -122.90668067813496 },
            { lat: 45.49214937349813, lng: -122.90672347850082 },
            { lat: 45.492139513126141, lng: -122.90672874205194 },
            { lat: 45.49212910088638, lng: -122.90673099778459 },
            { lat: 45.492118585421828, lng: -122.9067301485054 },
            { lat: 45.492109407949783, lng: -122.90672675685909 },
            { lat: 45.492100834588229, lng: -122.90672099654709 },
            { lat: 45.492093164763361, lng: -122.90671306875038 },
            { lat: 45.492031655286944, lng: -122.90660699714626 }];
        var Lot132188shape = new google.maps.Polygon({
            paths: [Lot132188coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132188shape.setMap(map);

        var Lot132182center = new google.maps.LatLng(45.4916182117593, -122.907296886675);
        var markerLot132182 = new google.maps.Marker({
            position: Lot132182center,
            map: map,
            title: 'Lot132182'
        });
        markers.push(markerLot132182);
        var Lot132182coords0 = [
            { lat: 45.49147860066676, lng: -122.90731622999849 },
            { lat: 45.491503499335131, lng: -122.90722807183033 },
            { lat: 45.491532950375813, lng: -122.90713760255139 },
            { lat: 45.491768888864684, lng: -122.90730377304929 },
            { lat: 45.491745112364342, lng: -122.90737685032167 },
            { lat: 45.491725330229059, lng: -122.90744693411386 },
            { lat: 45.49147860066676, lng: -122.90731622999849 }];
        var Lot132182shape = new google.maps.Polygon({
            paths: [Lot132182coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132182shape.setMap(map);

        var Lot132187center = new google.maps.LatLng(45.492110872545, -122.90631689831);
        var markerLot132187 = new google.maps.Marker({
            position: Lot132187center,
            map: map,
            title: 'Lot132187'
        });
        markers.push(markerLot132187);
        var Lot132187coords0 = [
            { lat: 45.491941585544012, lng: -122.90644936174422 },
            { lat: 45.492000571206759, lng: -122.90639179673968 },
            { lat: 45.492060415327664, lng: -122.90633984985679 },
            { lat: 45.492131750941674, lng: -122.90628559819748 },
            { lat: 45.492152946921976, lng: -122.90627106009723 },
            { lat: 45.492163028767877, lng: -122.90626762093393 },
            { lat: 45.492189820631275, lng: -122.90626990982932 },
            { lat: 45.492210254623977, lng: -122.90626768603019 },
            { lat: 45.492267742802746, lng: -122.90640914035616 },
            { lat: 45.492031655286944, lng: -122.90660699714626 },
            { lat: 45.491941585544012, lng: -122.90644936174422 }];
        var Lot132187shape = new google.maps.Polygon({
            paths: [Lot132187coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132187shape.setMap(map);

        var Tract132413center = new google.maps.LatLng(45.4921956930656, -122.907416732266);
        var Tract132413coords0 = [
            { lat: 45.491979126108561, lng: -122.90801061422403 },
            { lat: 45.49197976771142, lng: -122.90793881352521 },
            { lat: 45.491981884560794, lng: -122.90788727796946 },
            { lat: 45.491986313119718, lng: -122.90783026666583 },
            { lat: 45.491993461598064, lng: -122.90776971310817 },
            { lat: 45.49200236751652, lng: -122.90771377029654 },
            { lat: 45.492014256062632, lng: -122.90765474217682 },
            { lat: 45.492027526548931, lng: -122.90760057636284 },
            { lat: 45.492042848162079, lng: -122.90754751619147 },
            { lat: 45.492061471582495, lng: -122.90749211844924 },
            { lat: 45.492080889331412, lng: -122.90744184195307 },
            { lat: 45.49210377270898, lng: -122.90738977016602 },
            { lat: 45.4921270406708, lng: -122.90734291409558 },
            { lat: 45.492152065530021, lng: -122.90729792549494 },
            { lat: 45.492180717679474, lng: -122.9072519855449 },
            { lat: 45.492209139360348, lng: -122.90721127965702 },
            { lat: 45.492239075199521, lng: -122.90717283044785 },
            { lat: 45.492076868490471, lng: -122.90690313521966 },
            { lat: 45.4921109229049, lng: -122.90686355565983 },
            { lat: 45.492264557209211, lng: -122.90714321398835 },
            { lat: 45.49230936191978, lng: -122.90709717135893 },
            { lat: 45.492353979397436, lng: -122.90705799536741 },
            { lat: 45.492402998858395, lng: -122.90702165650389 },
            { lat: 45.492451134141021, lng: -122.90699207349132 },
            { lat: 45.492339327570051, lng: -122.90658528183235 },
            { lat: 45.492210254623977, lng: -122.90626768603019 },
            { lat: 45.492229795159268, lng: -122.9062612076434 },
            { lat: 45.492356700615062, lng: -122.90657349453325 },
            { lat: 45.492502716050154, lng: -122.90710475138845 },
            { lat: 45.492460569397551, lng: -122.90713625271758 },
            { lat: 45.492423243328005, lng: -122.90716942763422 },
            { lat: 45.492384808880544, lng: -122.90720955901588 },
            { lat: 45.492351374565828, lng: -122.9072502686455 },
            { lat: 45.492317572991276, lng: -122.90729809185449 },
            { lat: 45.492288776349511, lng: -122.90734542794142 },
            { lat: 45.492262440935377, lng: -122.90739557784462 },
            { lat: 45.492238702312108, lng: -122.90744828341063 },
            { lat: 45.49221605726612, lng: -122.90750795014321 },
            { lat: 45.492198104846494, lng: -122.90756509501664 },
            { lat: 45.492183080391094, lng: -122.90762392294758 },
            { lat: 45.492170197351058, lng: -122.90768920109447 },
            { lat: 45.492161503268626, lng: -122.90775055459423 },
            { lat: 45.4921559255585, lng: -122.90781263648928 },
            { lat: 45.492153432688028, lng: -122.90788034314967 },
            { lat: 45.492154420857005, lng: -122.90794291374219 },
            { lat: 45.4920644252585, lng: -122.90797975175235 },
            { lat: 45.491979126108561, lng: -122.90801061422403 }];
        var Tract132413shape = new google.maps.Polygon({
            paths: [Tract132413coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132413shape.setMap(map);

        var Tract132406center = new google.maps.LatLng(45.4916646439651, -122.908229599965);
        var Tract132406coords0 = [
            { lat: 45.49119539370303, lng: -122.90818929970909 },
            { lat: 45.491202144857724, lng: -122.90814671504693 },
            { lat: 45.491202788918585, lng: -122.90812138458304 },
            { lat: 45.491215674068371, lng: -122.9081184775023 },
            { lat: 45.4912274154684, lng: -122.90810821495656 },
            { lat: 45.491235365505617, lng: -122.90809220751495 },
            { lat: 45.491238239314441, lng: -122.90807304225952 },
            { lat: 45.491394601338015, lng: -122.90806866199587 },
            { lat: 45.491396197677233, lng: -122.90808405413827 },
            { lat: 45.491401297865842, lng: -122.90809862742924 },
            { lat: 45.491409383661932, lng: -122.90811015124977 },
            { lat: 45.491419621395927, lng: -122.90811743745827 },
            { lat: 45.491430955526596, lng: -122.90811973482225 },
            { lat: 45.491498476936208, lng: -122.90811439464575 },
            { lat: 45.491625987732682, lng: -122.908098170578 },
            { lat: 45.491759403961517, lng: -122.90807254894636 },
            { lat: 45.491885372832193, lng: -122.90804009400338 },
            { lat: 45.492014332357243, lng: -122.90799834783634 },
            { lat: 45.492122420760289, lng: -122.90795652256915 },
            { lat: 45.492236884354377, lng: -122.90790520044766 },
            { lat: 45.492837564017357, lng: -122.90760127958676 },
            { lat: 45.492903884493188, lng: -122.90786574609319 },
            { lat: 45.492322367901437, lng: -122.90816035903337 },
            { lat: 45.492236008732071, lng: -122.90820091161602 },
            { lat: 45.492138399788466, lng: -122.90824225194716 },
            { lat: 45.492128045483163, lng: -122.90825112357689 },
            { lat: 45.492120495174909, lng: -122.90826454729924 },
            { lat: 45.492116684624371, lng: -122.90828085942016 },
            { lat: 45.492117277893762, lng: -122.90829924189913 },
            { lat: 45.491965314144842, lng: -122.90835142967009 },
            { lat: 45.491960608087062, lng: -122.90833603615158 },
            { lat: 45.491952285145622, lng: -122.90832358948991 },
            { lat: 45.491941442694817, lng: -122.90831601948861 },
            { lat: 45.491929426672378, lng: -122.90831426585396 },
            { lat: 45.491803013068186, lng: -122.90834695495062 },
            { lat: 45.491688443828586, lng: -122.90837038661452 },
            { lat: 45.491573341505251, lng: -122.90838775154219 },
            { lat: 45.491445456726467, lng: -122.90840023876096 },
            { lat: 45.491433348769384, lng: -122.90840669691579 },
            { lat: 45.49142327380217, lng: -122.90842006901305 },
            { lat: 45.4914177168114, lng: -122.90843800167779 },
            { lat: 45.491417421044275, lng: -122.90845638337929 },
            { lat: 45.491414945846465, lng: -122.9084589675645 },
            { lat: 45.491398718225533, lng: -122.90846285365069 },
            { lat: 45.491371030146247, lng: -122.90846391070949 },
            { lat: 45.491303374236807, lng: -122.90843280160712 },
            { lat: 45.491260332605691, lng: -122.90844512309823 },
            { lat: 45.491257395978074, lng: -122.90844381217845 },
            { lat: 45.491253100793877, lng: -122.90842710236613 },
            { lat: 45.491245218097738, lng: -122.90841408938249 },
            { lat: 45.491235467692363, lng: -122.90840618367874 },
            { lat: 45.491224443949406, lng: -122.90840317918867 },
            { lat: 45.491225150536, lng: -122.90837784939386 },
            { lat: 45.491217275715762, lng: -122.90833464547491 },
            { lat: 45.491217427549962, lng: -122.90832684944382 },
            { lat: 45.49119539370303, lng: -122.90818929970909 }];
        var Tract132406shape = new google.maps.Polygon({
            paths: [Tract132406coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132406shape.setMap(map);

        var Lot132203center = new google.maps.LatLng(45.4927375083818, -122.909213470136);
        var markerLot132203 = new google.maps.Marker({
            position: Lot132203center,
            map: map,
            title: 'Lot132203'
        });
        markers.push(markerLot132203);
        var Lot132203coords0 = [
            { lat: 45.492603125931161, lng: -122.90919422802733 },
            { lat: 45.492837603825713, lng: -122.90908454018238 },
            { lat: 45.492871890827992, lng: -122.90923271233416 },
            { lat: 45.492637412794188, lng: -122.90934239963386 },
            { lat: 45.492603125931161, lng: -122.90919422802733 }];
        var Lot132203shape = new google.maps.Polygon({
            paths: [Lot132203coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132203shape.setMap(map);

        var Lot132202center = new google.maps.LatLng(45.4927032213535, -122.909065298346);
        var markerLot132202 = new google.maps.Marker({
            position: Lot132202center,
            map: map,
            title: 'Lot132202'
        });
        markers.push(markerLot132202);
        var Lot132202coords0 = [
            { lat: 45.492568838876707, lng: -122.90904605659964 },
            { lat: 45.492803316631978, lng: -122.90893636820944 },
            { lat: 45.492837603825713, lng: -122.90908454018238 },
            { lat: 45.492603125931161, lng: -122.90919422802733 },
            { lat: 45.492568838876707, lng: -122.90904605659964 }];
        var Lot132202shape = new google.maps.Polygon({
            paths: [Lot132202coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132202shape.setMap(map);

        var Tract132412center = new google.maps.LatLng(45.4923390327473, -122.908741357362);
        var Tract132412coords0 = [
            { lat: 45.492190192342683, lng: -122.90871909331362 },
            { lat: 45.492251804464253, lng: -122.90869504984094 },
            { lat: 45.492276125670109, lng: -122.90868909312496 },
            { lat: 45.492308377110618, lng: -122.9086892133334 },
            { lat: 45.492325272218878, lng: -122.90869291103319 },
            { lat: 45.49234180638922, lng: -122.90869908070857 },
            { lat: 45.4923578012124, lng: -122.90870765578885 },
            { lat: 45.492374731002116, lng: -122.90871989142191 },
            { lat: 45.492390556561709, lng: -122.90873481889875 },
            { lat: 45.49240368089351, lng: -122.90875039153632 },
            { lat: 45.492415598230032, lng: -122.90876781592337 },
            { lat: 45.49242726817819, lng: -122.9087891188608 },
            { lat: 45.492437134172619, lng: -122.90881219163298 },
            { lat: 45.492444362057917, lng: -122.90883421677709 },
            { lat: 45.49223628551178, lng: -122.90893155455397 },
            { lat: 45.492211719200924, lng: -122.90882340622265 },
            { lat: 45.492190192342683, lng: -122.90871909331362 }];
        var Tract132412shape = new google.maps.Polygon({
            paths: [Tract132412coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132412shape.setMap(map);

        var Lot132244center = new google.maps.LatLng(45.4912723175822, -122.911776229235);
        var markerLot132244 = new google.maps.Marker({
            position: Lot132244center,
            map: map,
            title: 'Lot132244'
        });
        markers.push(markerLot132244);
        var Lot132244coords0 = [
            { lat: 45.491208291058228, lng: -122.9116024354614 },
            { lat: 45.491331690562014, lng: -122.91159912709443 },
            { lat: 45.491336343842562, lng: -122.911950023401 },
            { lat: 45.491212944328836, lng: -122.91195333100623 },
            { lat: 45.491208291058228, lng: -122.9116024354614 }];
        var Lot132244shape = new google.maps.Polygon({
            paths: [Lot132244coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132244shape.setMap(map);

        var Lot132243center = new google.maps.LatLng(45.4913957170888, -122.911772921242);
        var markerLot132243 = new google.maps.Marker({
            position: Lot132243center,
            map: map,
            title: 'Lot132243'
        });
        markers.push(markerLot132243);
        var Lot132243coords0 = [
            { lat: 45.491331690562014, lng: -122.91159912709443 },
            { lat: 45.491455090061521, lng: -122.91159581871308 },
            { lat: 45.491459743352024, lng: -122.91194671578141 },
            { lat: 45.491336343842562, lng: -122.911950023401 },
            { lat: 45.491331690562014, lng: -122.91159912709443 }];
        var Lot132243shape = new google.maps.Polygon({
            paths: [Lot132243coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132243shape.setMap(map);

        var Lot132242center = new google.maps.LatLng(45.4915191165912, -122.911769613234);
        var markerLot132242 = new google.maps.Marker({
            position: Lot132242center,
            map: map,
            title: 'Lot132242'
        });
        markers.push(markerLot132242);
        var Lot132242coords0 = [
            { lat: 45.491455090061521, lng: -122.91159581871308 },
            { lat: 45.491578489556758, lng: -122.91159251031738 },
            { lat: 45.4915831428572, lng: -122.91194340814747 },
            { lat: 45.491459743352024, lng: -122.91194671578141 },
            { lat: 45.491455090061521, lng: -122.91159581871308 }];
        var Lot132242shape = new google.maps.Polygon({
            paths: [Lot132242coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132242shape.setMap(map);

        var Lot132241center = new google.maps.LatLng(45.4916425160893, -122.911766305212);
        var markerLot132241 = new google.maps.Marker({
            position: Lot132241center,
            map: map,
            title: 'Lot132241'
        });
        markers.push(markerLot132241);
        var Lot132241coords0 = [
            { lat: 45.491578489556758, lng: -122.91159251031738 },
            { lat: 45.491701889047754, lng: -122.91158920190729 },
            { lat: 45.491706542358138, lng: -122.91194010049914 },
            { lat: 45.4915831428572, lng: -122.91194340814747 },
            { lat: 45.491578489556758, lng: -122.91159251031738 }];
        var Lot132241shape = new google.maps.Polygon({
            paths: [Lot132241coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132241shape.setMap(map);

        var Lot132240center = new google.maps.LatLng(45.4917659155831, -122.911762997176);
        var markerLot132240 = new google.maps.Marker({
            position: Lot132240center,
            map: map,
            title: 'Lot132240'
        });
        markers.push(markerLot132240);
        var Lot132240coords0 = [
            { lat: 45.491701889047754, lng: -122.91158920190729 },
            { lat: 45.491825288534457, lng: -122.91158589348287 },
            { lat: 45.491829941854782, lng: -122.91193679283647 },
            { lat: 45.491706542358138, lng: -122.91194010049914 },
            { lat: 45.491701889047754, lng: -122.91158920190729 }];
        var Lot132240shape = new google.maps.Polygon({
            paths: [Lot132240coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132240shape.setMap(map);

        var Lot132239center = new google.maps.LatLng(45.4918893150726, -122.911759689125);
        var markerLot132239 = new google.maps.Marker({
            position: Lot132239center,
            map: map,
            title: 'Lot132239'
        });
        markers.push(markerLot132239);
        var Lot132239coords0 = [
            { lat: 45.491825288534457, lng: -122.91158589348287 },
            { lat: 45.491948688016876, lng: -122.91158258504403 },
            { lat: 45.491953341347177, lng: -122.91193348515939 },
            { lat: 45.491829941854782, lng: -122.91193679283647 },
            { lat: 45.491825288534457, lng: -122.91158589348287 }];
        var Lot132239shape = new google.maps.Polygon({
            paths: [Lot132239coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132239shape.setMap(map);

        var Lot132238center = new google.maps.LatLng(45.4920376582228, -122.91164383811);
        var markerLot132238 = new google.maps.Marker({
            position: Lot132238center,
            map: map,
            title: 'Lot132238'
        });
        markers.push(markerLot132238);
        var Lot132238coords0 = [
            { lat: 45.491948688016876, lng: -122.91158258504403 },
            { lat: 45.492072077883044, lng: -122.91157855184954 },
            { lat: 45.492076740835273, lng: -122.911930177468 },
            { lat: 45.491953341347177, lng: -122.91193348515939 },
            { lat: 45.491948688016876, lng: -122.91158258504403 }];
        var Lot132238shape = new google.maps.Polygon({
            paths: [Lot132238coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132238shape.setMap(map);

        var Lot132237center = new google.maps.LatLng(45.4921892859022, -122.911806113408);
        var markerLot132237 = new google.maps.Marker({
            position: Lot132237center,
            map: map,
            title: 'Lot132237'
        });
        markers.push(markerLot132237);
        var Lot132237coords0 = [
            { lat: 45.492072077883044, lng: -122.91157855184954 },
            { lat: 45.4921464749331, lng: -122.91157006405784 },
            { lat: 45.49222184180627, lng: -122.91155450011973 },
            { lat: 45.492225587962494, lng: -122.91186232175227 },
            { lat: 45.49222281892294, lng: -122.91187984070085 },
            { lat: 45.492217092723884, lng: -122.91189584471866 },
            { lat: 45.4922087640948, lng: -122.91190934238125 },
            { lat: 45.492199281564744, lng: -122.9119187958223 },
            { lat: 45.492188538365781, lng: -122.9119249457968 },
            { lat: 45.492178147989115, lng: -122.91192739686832 },
            { lat: 45.492076740835273, lng: -122.911930177468 },
            { lat: 45.492072077883044, lng: -122.91157855184954 }];
        var Lot132237shape = new google.maps.Polygon({
            paths: [Lot132237coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132237shape.setMap(map);

        var Lot132236center = new google.maps.LatLng(45.4923208686889, -122.911779205161);
        var markerLot132236 = new google.maps.Marker({
            position: Lot132236center,
            map: map,
            title: 'Lot132236'
        });
        markers.push(markerLot132236);
        var Lot132236coords0 = [
            { lat: 45.49227922757985, lng: -122.91153782782054 },
            { lat: 45.492361026267986, lng: -122.9115065738056 },
            { lat: 45.492437793040622, lng: -122.91146880465779 },
            { lat: 45.492443781090742, lng: -122.91192033896321 },
            { lat: 45.492327157505741, lng: -122.91192258066444 },
            { lat: 45.492315942749386, lng: -122.91191847088925 },
            { lat: 45.492305675563159, lng: -122.91191085246807 },
            { lat: 45.492297615494387, lng: -122.91190121270638 },
            { lat: 45.492290578106051, lng: -122.91188813503049 },
            { lat: 45.492285498316775, lng: -122.91187169574968 },
            { lat: 45.492283431258635, lng: -122.91185398199551 },
            { lat: 45.49227922757985, lng: -122.91153782782054 }];
        var Lot132236shape = new google.maps.Polygon({
            paths: [Lot132236coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132236shape.setMap(map);

        var Lot132216center = new google.maps.LatLng(45.4921377244376, -122.910700400462);
        var markerLot132216 = new google.maps.Marker({
            position: Lot132216center,
            map: map,
            title: 'Lot132216'
        });
        markers.push(markerLot132216);
        var Lot132216coords0 = [
            { lat: 45.491999364621826, lng: -122.91048278658428 },
            { lat: 45.492124907650783, lng: -122.91042336175119 },
            { lat: 45.492248767572882, lng: -122.91082847343499 },
            { lat: 45.492101678521124, lng: -122.91091975061532 },
            { lat: 45.491999364621826, lng: -122.91048278658428 }];
        var Lot132216shape = new google.maps.Polygon({
            paths: [Lot132216coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132216shape.setMap(map);

        var Lot132218center = new google.maps.LatLng(45.4918122524219, -122.910583804513);
        var markerLot132218 = new google.maps.Marker({
            position: Lot132218center,
            map: map,
            title: 'Lot132218'
        });
        markers.push(markerLot132218);
        var Lot132218coords0 = [
            { lat: 45.491744108743234, lng: -122.91058220505239 },
            { lat: 45.491777733761616, lng: -122.91057573389948 },
            { lat: 45.491814134971548, lng: -122.9105657159607 },
            { lat: 45.4918464889416, lng: -122.91055409677844 },
            { lat: 45.49188069411337, lng: -122.91053895810569 },
            { lat: 45.49188643934631, lng: -122.91097191124165 },
            { lat: 45.491749328827225, lng: -122.91097558875339 },
            { lat: 45.491744108743234, lng: -122.91058220505239 }];
        var Lot132218shape = new google.maps.Polygon({
            paths: [Lot132218coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132218shape.setMap(map);

        var Lot132219center = new google.maps.LatLng(45.4917068875675, -122.910626742205);
        var markerLot132219 = new google.maps.Marker({
            position: Lot132219center,
            map: map,
            title: 'Lot132219'
        });
        markers.push(markerLot132219);
        var Lot132219coords0 = [
            { lat: 45.491607044607555, lng: -122.91058937794878 },
            { lat: 45.491699734514029, lng: -122.91058675310585 },
            { lat: 45.491744108743234, lng: -122.91058220505239 },
            { lat: 45.491749328827225, lng: -122.91097558875339 },
            { lat: 45.491612218302855, lng: -122.91097926624738 },
            { lat: 45.491607044607555, lng: -122.91058937794878 }];
        var Lot132219shape = new google.maps.Polygon({
            paths: [Lot132219coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132219shape.setMap(map);

        var Lot132220center = new google.maps.LatLng(45.4915410763605, -122.910786161155);
        var markerLot132220 = new google.maps.Marker({
            position: Lot132220center,
            map: map,
            title: 'Lot132220'
        });
        markers.push(markerLot132220);
        var Lot132220coords0 = [
            { lat: 45.491469934094987, lng: -122.91059305672594 },
            { lat: 45.491607044607555, lng: -122.91058937794878 },
            { lat: 45.491612218302855, lng: -122.91097926624738 },
            { lat: 45.491475107773219, lng: -122.91098294372362 },
            { lat: 45.491469934094987, lng: -122.91059305672594 }];
        var Lot132220shape = new google.maps.Polygon({
            paths: [Lot132220coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132220shape.setMap(map);

        var Lot132221center = new google.maps.LatLng(45.4914039658367, -122.910789839273);
        var markerLot132221 = new google.maps.Marker({
            position: Lot132221center,
            map: map,
            title: 'Lot132221'
        });
        markers.push(markerLot132221);
        var Lot132221coords0 = [
            { lat: 45.491332823577153, lng: -122.91059673548538 },
            { lat: 45.491469934094987, lng: -122.91059305672594 },
            { lat: 45.491475107773219, lng: -122.91098294372362 },
            { lat: 45.4913379972383, lng: -122.91098662118212 },
            { lat: 45.491332823577153, lng: -122.91059673548538 }];
        var Lot132221shape = new google.maps.Polygon({
            paths: [Lot132221coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132221shape.setMap(map);

        var Lot132222center = new google.maps.LatLng(45.4912668553077, -122.910793517373);
        var markerLot132222 = new google.maps.Marker({
            position: Lot132222center,
            map: map,
            title: 'Lot132222'
        });
        markers.push(markerLot132222);
        var Lot132222coords0 = [
            { lat: 45.491195713054047, lng: -122.91060041422703 },
            { lat: 45.491332823577153, lng: -122.91059673548538 },
            { lat: 45.4913379972383, lng: -122.91098662118212 },
            { lat: 45.491200886698124, lng: -122.91099029862285 },
            { lat: 45.491195713054047, lng: -122.91060041422703 }];
        var Lot132222shape = new google.maps.Polygon({
            paths: [Lot132222coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132222shape.setMap(map);

        var Lot132217center = new google.maps.LatLng(45.4919783455004, -122.910776327962);
        var markerLot132217 = new google.maps.Marker({
            position: Lot132217center,
            map: map,
            title: 'Lot132217'
        });
        markers.push(markerLot132217);
        var Lot132217coords0 = [
            { lat: 45.49188069411337, lng: -122.91053895810569 },
            { lat: 45.491999364621826, lng: -122.91048278658428 },
            { lat: 45.492101678521124, lng: -122.91091975061532 },
            { lat: 45.492023549860143, lng: -122.91096823371217 },
            { lat: 45.49188643934631, lng: -122.91097191124165 },
            { lat: 45.49188069411337, lng: -122.91053895810569 }];
        var Lot132217shape = new google.maps.Polygon({
            paths: [Lot132217coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132217shape.setMap(map);

        var Lot132225center = new google.maps.LatLng(45.4912720282931, -122.911183402049);
        var markerLot132225 = new google.maps.Marker({
            position: Lot132225center,
            map: map,
            title: 'Lot132225'
        });
        markers.push(markerLot132225);
        var Lot132225coords0 = [
            { lat: 45.491200886698124, lng: -122.91099029862285 },
            { lat: 45.4913379972383, lng: -122.91098662118212 },
            { lat: 45.491343169562676, lng: -122.91137650595817 },
            { lat: 45.49120605901021, lng: -122.9113801824585 },
            { lat: 45.491200886698124, lng: -122.91099029862285 }];
        var Lot132225shape = new google.maps.Polygon({
            paths: [Lot132225coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132225shape.setMap(map);

        var Lot132224center = new google.maps.LatLng(45.4911280622165, -122.911187262858);
        var markerLot132224 = new google.maps.Marker({
            position: Lot132224center,
            map: map,
            title: 'Lot132224'
        });
        markers.push(markerLot132224);
        var Lot132224coords0 = [
            { lat: 45.491050065097717, lng: -122.91099434378707 },
            { lat: 45.491200886698124, lng: -122.91099029862285 },
            { lat: 45.49120605901021, lng: -122.9113801824585 },
            { lat: 45.491055237396559, lng: -122.91138422658845 },
            { lat: 45.491050065097717, lng: -122.91099434378707 }];
        var Lot132224shape = new google.maps.Polygon({
            paths: [Lot132224coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132224shape.setMap(map);

        var Lot132227center = new google.maps.LatLng(45.4915462493753, -122.911176048072);
        var markerLot132227 = new google.maps.Marker({
            position: Lot132227center,
            map: map,
            title: 'Lot132227'
        });
        markers.push(markerLot132227);
        var Lot132227coords0 = [
            { lat: 45.491475107773219, lng: -122.91098294372362 },
            { lat: 45.491612218302855, lng: -122.91097926624738 },
            { lat: 45.4916173906518, lng: -122.91136915290431 },
            { lat: 45.491480280109883, lng: -122.91137282944011 },
            { lat: 45.491475107773219, lng: -122.91098294372362 }];
        var Lot132227shape = new google.maps.Polygon({
            paths: [Lot132227coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132227shape.setMap(map);

        var Lot132228center = new google.maps.LatLng(45.4916833599084, -122.911172371057);
        var markerLot132228 = new google.maps.Marker({
            position: Lot132228center,
            map: map,
            title: 'Lot132228'
        });
        markers.push(markerLot132228);
        var Lot132228coords0 = [
            { lat: 45.491612218302855, lng: -122.91097926624738 },
            { lat: 45.491749328827225, lng: -122.91097558875339 },
            { lat: 45.491754501188439, lng: -122.91136547635075 },
            { lat: 45.4916173906518, lng: -122.91136915290431 },
            { lat: 45.491612218302855, lng: -122.91097926624738 }];
        var Lot132228shape = new google.maps.Polygon({
            paths: [Lot132228coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132228shape.setMap(map);

        var Lot132226center = new google.maps.LatLng(45.4914091388368, -122.911179725069);
        var markerLot132226 = new google.maps.Marker({
            position: Lot132226center,
            map: map,
            title: 'Lot132226'
        });
        markers.push(markerLot132226);
        var Lot132226coords0 = [
            { lat: 45.4913379972383, lng: -122.91098662118212 },
            { lat: 45.491475107773219, lng: -122.91098294372362 },
            { lat: 45.491480280109883, lng: -122.91137282944011 },
            { lat: 45.491343169562676, lng: -122.91137650595817 },
            { lat: 45.4913379972383, lng: -122.91098662118212 }];
        var Lot132226shape = new google.maps.Polygon({
            paths: [Lot132226coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132226shape.setMap(map);

        var Lot132230center = new google.maps.LatLng(45.4919575809589, -122.911165016974);
        var markerLot132230 = new google.maps.Marker({
            position: Lot132230center,
            map: map,
            title: 'Lot132230'
        });
        markers.push(markerLot132230);
        var Lot132230coords0 = [
            { lat: 45.49188643934631, lng: -122.91097191124165 },
            { lat: 45.492023549860143, lng: -122.91096823371217 },
            { lat: 45.492028722245948, lng: -122.91135812319042 },
            { lat: 45.491891611719829, lng: -122.91136179977948 },
            { lat: 45.49188643934631, lng: -122.91097191124165 }];
        var Lot132230shape = new google.maps.Polygon({
            paths: [Lot132230coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132230shape.setMap(map);

        var Lot132231center = new google.maps.LatLng(45.4921177020872, -122.911319597141);
        var markerLot132231 = new google.maps.Marker({
            position: Lot132231center,
            map: map,
            title: 'Lot132231'
        });
        markers.push(markerLot132231);
        var Lot132231coords0 = [
            { lat: 45.492023549860143, lng: -122.91096823371217 },
            { lat: 45.492154117678965, lng: -122.91088720917446 },
            { lat: 45.492212609595477, lng: -122.91133080835321 },
            { lat: 45.49216636822873, lng: -122.91134221783059 },
            { lat: 45.492119462119511, lng: -122.91135063799666 },
            { lat: 45.492072331785813, lng: -122.91135595536912 },
            { lat: 45.492028722245948, lng: -122.91135812319042 },
            { lat: 45.492023549860143, lng: -122.91096823371217 }];
        var Lot132231shape = new google.maps.Polygon({
            paths: [Lot132231coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132231shape.setMap(map);

        var Lot132232center = new google.maps.LatLng(45.4923142812981, -122.911259475659);
        var markerLot132232 = new google.maps.Marker({
            position: Lot132232center,
            map: map,
            title: 'Lot132232'
        });
        markers.push(markerLot132232);
        var Lot132232coords0 = [
            { lat: 45.492154117678965, lng: -122.91088720917446 },
            { lat: 45.492248767572882, lng: -122.91082847343499 },
            { lat: 45.492421347275247, lng: -122.91123823170514 },
            { lat: 45.492371657839051, lng: -122.91126674321589 },
            { lat: 45.492317976636038, lng: -122.91129283811787 },
            { lat: 45.492263357145518, lng: -122.91131464449376 },
            { lat: 45.492212609595477, lng: -122.91133080835321 },
            { lat: 45.492154117678965, lng: -122.91088720917446 }];
        var Lot132232shape = new google.maps.Polygon({
            paths: [Lot132232coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132232shape.setMap(map);

        var Lot132215center = new google.maps.LatLng(45.4924463755591, -122.910609869279);
        var markerLot132215 = new google.maps.Marker({
            position: Lot132215center,
            map: map,
            title: 'Lot132215'
        });
        markers.push(markerLot132215);
        var Lot132215coords0 = [
            { lat: 45.49219750959778, lng: -122.91066082193673 },
            { lat: 45.492448034139429, lng: -122.91050027497297 },
            { lat: 45.4924759870171, lng: -122.91058514548008 },
            { lat: 45.492507838176067, lng: -122.91067474202477 },
            { lat: 45.492261486139071, lng: -122.91085867109103 },
            { lat: 45.492248767572882, lng: -122.91082847343499 },
            { lat: 45.49219750959778, lng: -122.91066082193673 }];
        var Lot132215shape = new google.maps.Polygon({
            paths: [Lot132215coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132215shape.setMap(map);

        var Lot132233center = new google.maps.LatLng(45.4925190006637, -122.910774031411);
        var markerLot132233 = new google.maps.Marker({
            position: Lot132233center,
            map: map,
            title: 'Lot132233'
        });
        markers.push(markerLot132233);
        var Lot132233coords0 = [
            { lat: 45.492261486139071, lng: -122.91085867109103 },
            { lat: 45.492507838176067, lng: -122.91067474202477 },
            { lat: 45.49253932470355, lng: -122.91075707313371 },
            { lat: 45.492574902059538, lng: -122.91084378896085 },
            { lat: 45.492340169514506, lng: -122.9110454895294 },
            { lat: 45.492261486139071, lng: -122.91085867109103 }];
        var Lot132233shape = new google.maps.Polygon({
            paths: [Lot132233coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132233shape.setMap(map);

        var Lot132214center = new google.maps.LatLng(45.4923860042925, -122.910347130736);
        var markerLot132214 = new google.maps.Marker({
            position: Lot132214center,
            map: map,
            title: 'Lot132214'
        });
        markers.push(markerLot132214);
        var Lot132214coords0 = [
            { lat: 45.492124907650783, lng: -122.91042336175119 },
            { lat: 45.492358566447876, lng: -122.91031276083891 },
            { lat: 45.492367059654022, lng: -122.91031042887963 },
            { lat: 45.492374839142421, lng: -122.91031097764879 },
            { lat: 45.492382330732369, lng: -122.9103140089823 },
            { lat: 45.492389147729362, lng: -122.9103193664123 },
            { lat: 45.492394938259295, lng: -122.91032677340419 },
            { lat: 45.492399403431364, lng: -122.91033584763048 },
            { lat: 45.492448034139429, lng: -122.91050027497297 },
            { lat: 45.49219750959778, lng: -122.91066082193673 },
            { lat: 45.492124907650783, lng: -122.91042336175119 }];
        var Lot132214shape = new google.maps.Polygon({
            paths: [Lot132214coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132214shape.setMap(map);

        var Lot132234center = new google.maps.LatLng(45.4925889071569, -122.911070786137);
        var markerLot132234 = new google.maps.Marker({
            position: Lot132234center,
            map: map,
            title: 'Lot132234'
        });
        markers.push(markerLot132234);
        var Lot132234coords0 = [
            { lat: 45.492340169514506, lng: -122.9110454895294 },
            { lat: 45.492574902059538, lng: -122.91084378896085 },
            { lat: 45.492644592864174, lng: -122.91100102473553 },
            { lat: 45.492648066307069, lng: -122.91101228856773 },
            { lat: 45.492649406122126, lng: -122.91102319815798 },
            { lat: 45.492648823005268, lng: -122.91103546912055 },
            { lat: 45.492645713584267, lng: -122.91104824716987 },
            { lat: 45.492640838437133, lng: -122.9110584067393 },
            { lat: 45.492634330001927, lng: -122.91106650798963 },
            { lat: 45.49255514167249, lng: -122.9111381964977 },
            { lat: 45.492518590158873, lng: -122.91116917145438 },
            { lat: 45.492468500691842, lng: -122.911207045194 },
            { lat: 45.492421347275247, lng: -122.91123823170514 },
            { lat: 45.492340169514506, lng: -122.9110454895294 }];
        var Lot132234shape = new google.maps.Polygon({
            paths: [Lot132234coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132234shape.setMap(map);

        var Lot132211center = new google.maps.LatLng(45.4927438799697, -122.909802506829);
        var markerLot132211 = new google.maps.Marker({
            position: Lot132211center,
            map: map,
            title: 'Lot132211'
        });
        markers.push(markerLot132211);
        var Lot132211coords0 = [
            { lat: 45.492653201597115, lng: -122.90966018775259 },
            { lat: 45.492757414205947, lng: -122.90961143852277 },
            { lat: 45.49283455816434, lng: -122.90994482636057 },
            { lat: 45.492730345416206, lng: -122.90999357504516 },
            { lat: 45.492653201597115, lng: -122.90966018775259 }];
        var Lot132211shape = new google.maps.Polygon({
            paths: [Lot132211coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132211shape.setMap(map);

        var Lot132209center = new google.maps.LatLng(45.4924639310874, -122.909416219824);
        var markerLot132209 = new google.maps.Marker({
            position: Lot132209center,
            map: map,
            title: 'Lot132209'
        });
        markers.push(markerLot132209);
        var Lot132209coords0 = [
            { lat: 45.492346003894589, lng: -122.90940570075591 },
            { lat: 45.492554428889854, lng: -122.90930820171089 },
            { lat: 45.492581858278321, lng: -122.90942673893522 },
            { lat: 45.492373433184, lng: -122.90952423759251 },
            { lat: 45.492346003894589, lng: -122.90940570075591 }];
        var Lot132209shape = new google.maps.Polygon({
            paths: [Lot132209coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132209shape.setMap(map);

        var Lot132210center = new google.maps.LatLng(45.4925867662211, -122.909553554657);
        var markerLot132210 = new google.maps.Marker({
            position: Lot132210center,
            map: map,
            title: 'Lot132210'
        });
        markers.push(markerLot132210);
        var Lot132210coords0 = [
            { lat: 45.492373433184, lng: -122.90952423759251 },
            { lat: 45.492581858278321, lng: -122.90942673893522 },
            { lat: 45.492599908111067, lng: -122.90950486025105 },
            { lat: 45.492601966925051, lng: -122.90952558356067 },
            { lat: 45.492600053136371, lng: -122.90954483578885 },
            { lat: 45.492594592776342, lng: -122.90956266211883 },
            { lat: 45.49258598247409, lng: -122.90957776768371 },
            { lat: 45.492574847663768, lng: -122.90958905524859 },
            { lat: 45.492406858322319, lng: -122.90966868661422 },
            { lat: 45.492373433184, lng: -122.90952423759251 }];
        var Lot132210shape = new google.maps.Polygon({
            paths: [Lot132210coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132210shape.setMap(map);

        var Lot132207center = new google.maps.LatLng(45.4924090721645, -122.909179145992);
        var markerLot132207 = new google.maps.Marker({
            position: Lot132207center,
            map: map,
            title: 'Lot132207'
        });
        markers.push(markerLot132207);
        var Lot132207coords0 = [
            { lat: 45.492291144948176, lng: -122.909168627426 },
            { lat: 45.492499569745341, lng: -122.90907112760551 },
            { lat: 45.49252699937886, lng: -122.90918966460099 },
            { lat: 45.492318574482653, lng: -122.90928716403374 },
            { lat: 45.492291144948176, lng: -122.909168627426 }];
        var Lot132207shape = new google.maps.Polygon({
            paths: [Lot132207coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132207shape.setMap(map);

        var Lot132206center = new google.maps.LatLng(45.4923816425192, -122.909060609248);
        var markerLot132206 = new google.maps.Marker({
            position: Lot132206center,
            map: map,
            title: 'Lot132206'
        });
        markers.push(markerLot132206);
        var Lot132206coords0 = [
            { lat: 45.492263715291166, lng: -122.90905009093272 },
            { lat: 45.492472139989317, lng: -122.90895259072448 },
            { lat: 45.492499569745341, lng: -122.90907112760551 },
            { lat: 45.492291144948176, lng: -122.909168627426 },
            { lat: 45.492263715291166, lng: -122.90905009093272 }];
        var Lot132206shape = new google.maps.Polygon({
            paths: [Lot132206coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132206shape.setMap(map);

        var Lot132205center = new google.maps.LatLng(45.4924130906804, -122.908879303868);
        var markerLot132205 = new google.maps.Marker({
            position: Lot132205center,
            map: map,
            title: 'Lot132205'
        });
        markers.push(markerLot132205);
        var Lot132205coords0 = [
            { lat: 45.49223628551178, lng: -122.90893155455397 },
            { lat: 45.492444362057917, lng: -122.90883421677709 },
            { lat: 45.492472139989317, lng: -122.90895259072448 },
            { lat: 45.492263715291166, lng: -122.90905009093272 },
            { lat: 45.49223628551178, lng: -122.90893155455397 }];
        var Lot132205shape = new google.maps.Polygon({
            paths: [Lot132205coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132205shape.setMap(map);

        var Lot132198center = new google.maps.LatLng(45.4923842636513, -122.908360039288);
        var markerLot132198 = new google.maps.Marker({
            position: Lot132198center,
            map: map,
            title: 'Lot132198'
        });
        markers.push(markerLot132198);
        var Lot132198coords0 = [
            { lat: 45.492236008732071, lng: -122.90820091161602 },
            { lat: 45.492309526721591, lng: -122.90816664147654 },
            { lat: 45.4924114906353, lng: -122.90811536539992 },
            { lat: 45.492431171439733, lng: -122.90815980572978 },
            { lat: 45.492453419047557, lng: -122.90820303424239 },
            { lat: 45.4924754566775, lng: -122.90824031289509 },
            { lat: 45.492501580516922, lng: -122.90827890907616 },
            { lat: 45.492391057365225, lng: -122.90861776109746 },
            { lat: 45.492368421518229, lng: -122.90860481335977 },
            { lat: 45.492346582342769, lng: -122.90859579957636 },
            { lat: 45.492324234164705, lng: -122.90858981790397 },
            { lat: 45.492301584713871, lng: -122.90858692393962 },
            { lat: 45.492236008732071, lng: -122.90820091161602 }];
        var Lot132198shape = new google.maps.Polygon({
            paths: [Lot132198coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132198shape.setMap(map);

        var Lot132200center = new google.maps.LatLng(45.4925170717235, -122.908759383037);
        var markerLot132200 = new google.maps.Marker({
            position: Lot132200center,
            map: map,
            title: 'Lot132200'
        });
        markers.push(markerLot132200);
        var Lot132200coords0 = [
            { lat: 45.49247777559399, lng: -122.90871568345817 },
            { lat: 45.492696160662319, lng: -122.90847330059319 },
            { lat: 45.492759171588276, lng: -122.90874559705769 },
            { lat: 45.492524694012339, lng: -122.90885528614989 },
            { lat: 45.492513067487238, lng: -122.90880574392112 },
            { lat: 45.492504165042959, lng: -122.90877599128305 },
            { lat: 45.492492096393562, lng: -122.90874484124465 },
            { lat: 45.49247777559399, lng: -122.90871568345817 }];
        var Lot132200shape = new google.maps.Polygon({
            paths: [Lot132200coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132200shape.setMap(map);

        var Lot132201center = new google.maps.LatLng(45.4926689341337, -122.908917126735);
        var markerLot132201 = new google.maps.Marker({
            position: Lot132201center,
            map: map,
            title: 'Lot132201'
        });
        markers.push(markerLot132201);
        var Lot132201coords0 = [
            { lat: 45.49253455163096, lng: -122.90889788535085 },
            { lat: 45.492769029246944, lng: -122.90878819641539 },
            { lat: 45.492803316631978, lng: -122.90893636820944 },
            { lat: 45.492568838876707, lng: -122.90904605659964 },
            { lat: 45.49253455163096, lng: -122.90889788535085 }];
        var Lot132201shape = new google.maps.Polygon({
            paths: [Lot132201coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132201shape.setMap(map);

        var Lot132223center = new google.maps.LatLng(45.4911228892465, -122.910797379359);
        var markerLot132223 = new google.maps.Marker({
            position: Lot132223center,
            map: map,
            title: 'Lot132223'
        });
        markers.push(markerLot132223);
        var Lot132223coords0 = [
            { lat: 45.491044891472676, lng: -122.91060446082251 },
            { lat: 45.491195713054047, lng: -122.91060041422703 },
            { lat: 45.491200886698124, lng: -122.91099029862285 },
            { lat: 45.491050065097717, lng: -122.91099434378707 },
            { lat: 45.491044891472676, lng: -122.91060446082251 }];
        var Lot132223shape = new google.maps.Polygon({
            paths: [Lot132223coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132223shape.setMap(map);

        var Lot132229center = new google.maps.LatLng(45.4918204704363, -122.911168694025);
        var markerLot132229 = new google.maps.Marker({
            position: Lot132229center,
            map: map,
            title: 'Lot132229'
        });
        markers.push(markerLot132229);
        var Lot132229coords0 = [
            { lat: 45.491749328827225, lng: -122.91097558875339 },
            { lat: 45.49188643934631, lng: -122.91097191124165 },
            { lat: 45.491891611719829, lng: -122.91136179977948 },
            { lat: 45.491754501188439, lng: -122.91136547635075 },
            { lat: 45.491749328827225, lng: -122.91097558875339 }];
        var Lot132229shape = new google.maps.Polygon({
            paths: [Lot132229coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132229shape.setMap(map);

        var Lot132199center = new google.maps.LatLng(45.492526185966, -122.908497106099);
        var markerLot132199 = new google.maps.Marker({
            position: Lot132199center,
            map: map,
            title: 'Lot132199'
        });
        markers.push(markerLot132199);
        var Lot132199coords0 = [
            { lat: 45.492391057365225, lng: -122.90861776109746 },
            { lat: 45.492501580516922, lng: -122.90827890907616 },
            { lat: 45.492543931565919, lng: -122.90833138311311 },
            { lat: 45.492588741702619, lng: -122.90837620020805 },
            { lat: 45.492639616841323, lng: -122.90841640958848 },
            { lat: 45.492690042738566, lng: -122.90844686267612 },
            { lat: 45.492696160662319, lng: -122.90847330059319 },
            { lat: 45.49247777559399, lng: -122.90871568345817 },
            { lat: 45.49245955627179, lng: -122.90868621789834 },
            { lat: 45.492439283576374, lng: -122.9086602547814 },
            { lat: 45.492417037778509, lng: -122.9086377939914 },
            { lat: 45.492391057365225, lng: -122.90861776109746 }];
        var Lot132199shape = new google.maps.Polygon({
            paths: [Lot132199coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132199shape.setMap(map);

        var Lot132197center = new google.maps.LatLng(45.4921757671328, -122.908370396631);
        var markerLot132197 = new google.maps.Marker({
            position: Lot132197center,
            map: map,
            title: 'Lot132197'
        });
        markers.push(markerLot132197);
        var Lot132197coords0 = [
            { lat: 45.492116331470271, lng: -122.90828749361133 },
            { lat: 45.492117719715665, lng: -122.90827410618193 },
            { lat: 45.492121639150227, lng: -122.90826177474341 },
            { lat: 45.492127788688315, lng: -122.90825144658045 },
            { lat: 45.492134919644812, lng: -122.90824446723826 },
            { lat: 45.492236008732071, lng: -122.90820091161602 },
            { lat: 45.492301584713871, lng: -122.90858692393962 },
            { lat: 45.492276264941928, lng: -122.90858736684307 },
            { lat: 45.492249189795629, lng: -122.90859216001311 },
            { lat: 45.49217201897153, lng: -122.90862104536306 },
            { lat: 45.492117277893762, lng: -122.90829924189913 },
            { lat: 45.492116331470271, lng: -122.90828749361133 }];
        var Lot132197shape = new google.maps.Polygon({
            paths: [Lot132197coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132197shape.setMap(map);

        var Lot132208center = new google.maps.LatLng(45.4924365016872, -122.909297682851);
        var markerLot132208 = new google.maps.Marker({
            position: Lot132208center,
            map: map,
            title: 'Lot132208'
        });
        markers.push(markerLot132208);
        var Lot132208coords0 = [
            { lat: 45.492318574482653, lng: -122.90928716403374 },
            { lat: 45.49252699937886, lng: -122.90918966460099 },
            { lat: 45.492554428889854, lng: -122.90930820171089 },
            { lat: 45.492346003894589, lng: -122.90940570075591 },
            { lat: 45.492318574482653, lng: -122.90928716403374 }];
        var Lot132208shape = new google.maps.Polygon({
            paths: [Lot132208coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132208shape.setMap(map);

        var Lot132212center = new google.maps.LatLng(45.4926396672795, -122.909851255697);
        var markerLot132212 = new google.maps.Marker({
            position: Lot132212center,
            map: map,
            title: 'Lot132212'
        });
        markers.push(markerLot132212);
        var Lot132212coords0 = [
            { lat: 45.492548988964771, lng: -122.90970893680371 },
            { lat: 45.492653201597115, lng: -122.90966018775259 },
            { lat: 45.492730345416206, lng: -122.90999357504516 },
            { lat: 45.492626132644581, lng: -122.91004232355104 },
            { lat: 45.492548988964771, lng: -122.90970893680371 }];
        var Lot132212shape = new google.maps.Polygon({
            paths: [Lot132212coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132212shape.setMap(map);

        var Lot132213center = new google.maps.LatLng(45.4925276386111, -122.90990366053);
        var markerLot132213 = new google.maps.Marker({
            position: Lot132213center,
            map: map,
            title: 'Lot132213'
        });
        markers.push(markerLot132213);
        var Lot132213coords0 = [
            { lat: 45.492429144408426, lng: -122.90976499799157 },
            { lat: 45.492548988964771, lng: -122.90970893680371 },
            { lat: 45.492626132644581, lng: -122.91004232355104 },
            { lat: 45.492506287928123, lng: -122.91009838411179 },
            { lat: 45.492429144408426, lng: -122.90976499799157 }];
        var Lot132213shape = new google.maps.Polygon({
            paths: [Lot132213coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132213shape.setMap(map);

        var Lot132204center = new google.maps.LatLng(45.4927517273644, -122.909387211765);
        var markerLot132204 = new google.maps.Marker({
            position: Lot132204center,
            map: map,
            title: 'Lot132204'
        });
        markers.push(markerLot132204);
        var Lot132204coords0 = [
            { lat: 45.492637412794188, lng: -122.90934239963386 },
            { lat: 45.492871890827992, lng: -122.90923271233416 },
            { lat: 45.492906177638851, lng: -122.9093808846649 },
            { lat: 45.492671705430205, lng: -122.90949056862924 },
            { lat: 45.492637412794188, lng: -122.90934239963386 }];
        var Lot132204shape = new google.maps.Polygon({
            paths: [Lot132204coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132204shape.setMap(map);

        var Tract132411center = new google.maps.LatLng(45.4927242617171, -122.909276563162);
        var Tract132411coords0 = [
            { lat: 45.4924114906353, lng: -122.90811536539992 },
            { lat: 45.4924299000696, lng: -122.90810603281145 },
            { lat: 45.492459492861244, lng: -122.90816938387275 },
            { lat: 45.49249148213849, lng: -122.90822482086021 },
            { lat: 45.492527127449968, lng: -122.90827554935807 },
            { lat: 45.492566087789193, lng: -122.90832108405485 },
            { lat: 45.492596550883661, lng: -122.90835092092075 },
            { lat: 45.492631404201987, lng: -122.90837983622593 },
            { lat: 45.492667741110559, lng: -122.90840478782462 },
            { lat: 45.492705339065282, lng: -122.90842562289392 },
            { lat: 45.492930303024394, lng: -122.90939779991258 },
            { lat: 45.492925670848024, lng: -122.90951003237213 },
            { lat: 45.492868888440341, lng: -122.90982498579359 },
            { lat: 45.4928641736318, lng: -122.90985802749046 },
            { lat: 45.49286178203743, lng: -122.90988818180557 },
            { lat: 45.492861203056719, lng: -122.90992188662389 },
            { lat: 45.49286281614161, lng: -122.9099555233924 },
            { lat: 45.492866607500247, lng: -122.90998880451835 },
            { lat: 45.492873254663046, lng: -122.91002466352712 },
            { lat: 45.492922272119607, lng: -122.91023415758615 },
            { lat: 45.492945900735513, lng: -122.91032079704964 },
            { lat: 45.492972446119431, lng: -122.91040571200605 },
            { lat: 45.492999288843542, lng: -122.91048186628191 },
            { lat: 45.493031245665996, lng: -122.91056292528066 },
            { lat: 45.493134259306949, lng: -122.91079465885203 },
            { lat: 45.49285206413, lng: -122.9110503084965 },
            { lat: 45.4928417475874, lng: -122.91102728690562 },
            { lat: 45.493107751206225, lng: -122.91078630568803 },
            { lat: 45.493011085876908, lng: -122.91056805043563 },
            { lat: 45.492979194153783, lng: -122.91048618718885 },
            { lat: 45.492952417462405, lng: -122.91040931279763 },
            { lat: 45.492928044821838, lng: -122.91033083825251 },
            { lat: 45.492906123406826, lng: -122.91025091544763 },
            { lat: 45.492840558209366, lng: -122.90997075656368 },
            { lat: 45.492512303971729, lng: -122.91012430668162 },
            { lat: 45.492506287928123, lng: -122.91009838411179 },
            { lat: 45.49283455816434, lng: -122.90994482636057 },
            { lat: 45.492739413809524, lng: -122.90953364815755 },
            { lat: 45.492728575024124, lng: -122.90953796473551 },
            { lat: 45.492719125473606, lng: -122.90953908617496 },
            { lat: 45.49270866177104, lng: -122.90953737854279 },
            { lat: 45.492698671455294, lng: -122.90953263614541 },
            { lat: 45.49268958498989, lng: -122.90952506332516 },
            { lat: 45.492681793892991, lng: -122.90951498638145 },
            { lat: 45.492675633867741, lng: -122.90950283951098 },
            { lat: 45.492671705430205, lng: -122.90949056862924 },
            { lat: 45.492906177638851, lng: -122.9093808846649 },
            { lat: 45.492769029246944, lng: -122.90878819641539 },
            { lat: 45.49253455163096, lng: -122.90889788535085 },
            { lat: 45.492524694012339, lng: -122.90885528614989 },
            { lat: 45.492759171588276, lng: -122.90874559705769 },
            { lat: 45.492690042738566, lng: -122.90844686267612 },
            { lat: 45.492647638594534, lng: -122.90842184319683 },
            { lat: 45.492605138446478, lng: -122.9083902978053 },
            { lat: 45.492564795891205, lng: -122.90835346780943 },
            { lat: 45.492529550532723, lng: -122.90831479471007 },
            { lat: 45.492494788043594, lng: -122.90826938818068 },
            { lat: 45.492464703508375, lng: -122.90822272781944 },
            { lat: 45.492435479320008, lng: -122.90816869023303 },
            { lat: 45.4924114906353, lng: -122.90811536539992 }];
        var Tract132411shape = new google.maps.Polygon({
            paths: [Tract132411coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132411shape.setMap(map);

        var Tract132407center = new google.maps.LatLng(45.4910270305251, -122.910994961474);
        var Tract132407coords0 = [
            { lat: 45.490987305046488, lng: -122.91060600569305 },
            { lat: 45.491044891472676, lng: -122.91060446082251 },
            { lat: 45.491055237396559, lng: -122.91138422658845 },
            { lat: 45.490997650959407, lng: -122.91138577062216 },
            { lat: 45.490987305046488, lng: -122.91060600569305 }];
        var Tract132407shape = new google.maps.Polygon({
            paths: [Tract132407coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132407shape.setMap(map);

        var Tract132410center = new google.maps.LatLng(45.4927730826904, -122.91044561051);
        var Tract132410coords0 = [
            { lat: 45.492512303971729, lng: -122.91012430668162 },
            { lat: 45.492840558209366, lng: -122.90997075656368 },
            { lat: 45.492904934256273, lng: -122.91024626295355 },
            { lat: 45.492926712895546, lng: -122.91032626462753 },
            { lat: 45.492950945338379, lng: -122.91040482689441 },
            { lat: 45.492980124044429, lng: -122.91048871094482 },
            { lat: 45.493009330131962, lng: -122.91056377578879 },
            { lat: 45.493107751206225, lng: -122.91078630568803 },
            { lat: 45.4928417475874, lng: -122.91102728690562 },
            { lat: 45.492712678895664, lng: -122.91073814284961 },
            { lat: 45.492678167204339, lng: -122.91065461309321 },
            { lat: 45.49264241089201, lng: -122.91056095915356 },
            { lat: 45.49260609140542, lng: -122.91045680908169 },
            { lat: 45.4925699707923, lng: -122.91034182139882 },
            { lat: 45.492539659359281, lng: -122.91023385616363 },
            { lat: 45.492512303971729, lng: -122.91012430668162 }];
        var Tract132410shape = new google.maps.Polygon({
            paths: [Tract132410coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132410shape.setMap(map);

        var Tract132404center = new google.maps.LatLng(45.492466682433, -122.908986775921);
        var Tract132404coords0 = [
            { lat: 45.49217201897153, lng: -122.90862104536306 },
            { lat: 45.492236144316273, lng: -122.90859611385311 },
            { lat: 45.492262985607454, lng: -122.90858915228048 },
            { lat: 45.492299311290409, lng: -122.90858680565304 },
            { lat: 45.492337089546766, lng: -122.90859287047122 },
            { lat: 45.492356987883923, lng: -122.90859968950672 },
            { lat: 45.49237639551253, lng: -122.90860893562336 },
            { lat: 45.492411469809156, lng: -122.90863298580503 },
            { lat: 45.49242864207249, lng: -122.90864882224955 },
            { lat: 45.492444784056318, lng: -122.90866671580392 },
            { lat: 45.49247204035386, lng: -122.90870563939887 },
            { lat: 45.492485530742769, lng: -122.90873065101128 },
            { lat: 45.492496469042138, lng: -122.90875524885514 },
            { lat: 45.492505866309017, lng: -122.90878110239736 },
            { lat: 45.492513651779632, lng: -122.90880801695478 },
            { lat: 45.492673158136618, lng: -122.90949584869412 },
            { lat: 45.492677752175638, lng: -122.90950764305597 },
            { lat: 45.492683809446049, lng: -122.9095180160956 },
            { lat: 45.492691997048723, lng: -122.90952743611476 },
            { lat: 45.492700395761744, lng: -122.90953369500514 },
            { lat: 45.492709466873464, lng: -122.90953762270051 },
            { lat: 45.492719948683707, lng: -122.90953908873969 },
            { lat: 45.492729384194433, lng: -122.90953774947309 },
            { lat: 45.492739413809524, lng: -122.90953364815755 },
            { lat: 45.492757414205947, lng: -122.90961143852277 },
            { lat: 45.492429144408426, lng: -122.90976499799157 },
            { lat: 45.492406858322319, lng: -122.90966868661422 },
            { lat: 45.492567622280696, lng: -122.90959347898391 },
            { lat: 45.492577182718811, lng: -122.90958719559819 },
            { lat: 45.492589999439247, lng: -122.90957174261891 },
            { lat: 45.492598933142581, lng: -122.90954978007028 },
            { lat: 45.492601962011143, lng: -122.90952627837194 },
            { lat: 45.492599426023368, lng: -122.90950265900203 },
            { lat: 45.4924476706069, lng: -122.90884687793479 },
            { lat: 45.492438892759282, lng: -122.90881703116813 },
            { lat: 45.492427285729683, lng: -122.90878915503367 },
            { lat: 45.492407816008232, lng: -122.90875603378045 },
            { lat: 45.492382821116877, lng: -122.90872705459164 },
            { lat: 45.492354330956218, lng: -122.90870556337 },
            { lat: 45.492325302481191, lng: -122.90869291996998 },
            { lat: 45.4922989328588, lng: -122.90868824487914 },
            { lat: 45.492270492261454, lng: -122.90869000009954 },
            { lat: 45.49225183444532, lng: -122.9086950391584 },
            { lat: 45.492190192342683, lng: -122.90871909331362 },
            { lat: 45.49217201897153, lng: -122.90862104536306 }];
        var Tract132404shape = new google.maps.Polygon({
            paths: [Tract132404coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132404shape.setMap(map);

        var Tract132402center = new google.maps.LatLng(45.4917623320503, -122.910375773118);
        var Tract132402coords0 = [
            { lat: 45.490977189144949, lng: -122.91036056401907 },
            { lat: 45.491672801433545, lng: -122.91034147745616 },
            { lat: 45.491685736130016, lng: -122.91033471016247 },
            { lat: 45.491696239736086, lng: -122.91032022845637 },
            { lat: 45.491701540130933, lng: -122.91030083897519 },
            { lat: 45.49170089639756, lng: -122.91028126423284 },
            { lat: 45.491719502657126, lng: -122.91027453438589 },
            { lat: 45.491744112196422, lng: -122.91028553954453 },
            { lat: 45.491817359531844, lng: -122.91026785506848 },
            { lat: 45.491835756283663, lng: -122.91024413721357 },
            { lat: 45.491854362540352, lng: -122.91023740733851 },
            { lat: 45.491860348326171, lng: -122.91025498829192 },
            { lat: 45.491869997739443, lng: -122.91026722931272 },
            { lat: 45.491882149932636, lng: -122.91027351730796 },
            { lat: 45.4918950758666, lng: -122.9102729576047 },
            { lat: 45.492301668847347, lng: -122.91008076042577 },
            { lat: 45.492358432270343, lng: -122.91031282391506 },
            { lat: 45.491849515856337, lng: -122.91055287530801 },
            { lat: 45.49181358679774, lng: -122.91056589052346 },
            { lat: 45.491773517114645, lng: -122.9105766903825 },
            { lat: 45.491733137798853, lng: -122.91058374914961 },
            { lat: 45.491692421504752, lng: -122.91058707161308 },
            { lat: 45.490980449519668, lng: -122.9106061896282 },
            { lat: 45.490977189144949, lng: -122.91036056401907 }];
        var Tract132402shape = new google.maps.Polygon({
            paths: [Tract132402coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132402shape.setMap(map);

        var Tract132401center = new google.maps.LatLng(45.4922642999301, -122.911393448587);
        var Tract132401coords0 = [
            { lat: 45.490990795431358, lng: -122.91138595446328 },
            { lat: 45.492038915472016, lng: -122.91135783645065 },
            { lat: 45.49209557363978, lng: -122.91135372424495 },
            { lat: 45.492151983007837, lng: -122.91134513480698 },
            { lat: 45.492214157856253, lng: -122.91133037211867 },
            { lat: 45.492278615842594, lng: -122.91130902064546 },
            { lat: 45.49233748068977, lng: -122.9112839046868 },
            { lat: 45.492399556746165, lng: -122.91125126765884 },
            { lat: 45.492455422551792, lng: -122.91121611428386 },
            { lat: 45.492510026177484, lng: -122.91117601101547 },
            { lat: 45.49255081437488, lng: -122.91114201858859 },
            { lat: 45.49263360451048, lng: -122.9110671837237 },
            { lat: 45.492717610448942, lng: -122.91125464486551 },
            { lat: 45.492622465019842, lng: -122.911340248949 },
            { lat: 45.492560520410585, lng: -122.91138981998907 },
            { lat: 45.492484770203106, lng: -122.91144140294067 },
            { lat: 45.492410737162061, lng: -122.91148308381617 },
            { lat: 45.492328449696188, lng: -122.91152010018362 },
            { lat: 45.492246786916859, lng: -122.91154777303237 },
            { lat: 45.492163112868987, lng: -122.91156723665195 },
            { lat: 45.492077149480423, lng: -122.91157818759972 },
            { lat: 45.490993743051263, lng: -122.9116081874397 },
            { lat: 45.490990795431358, lng: -122.91138595446328 }];
        var Tract132401shape = new google.maps.Polygon({
            paths: [Tract132401coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132401shape.setMap(map);

        var Tract132405center = new google.maps.LatLng(45.4922926055812, -122.90976384372);
        var Tract132405coords0 = [
            { lat: 45.491965314144842, lng: -122.90835142967009 },
            { lat: 45.492117277893762, lng: -122.90829924189913 },
            { lat: 45.492176380271076, lng: -122.90864557221481 },
            { lat: 45.492210165185654, lng: -122.90881623202685 },
            { lat: 45.492512303971729, lng: -122.91012430668162 },
            { lat: 45.492448034139429, lng: -122.91050027497297 },
            { lat: 45.492397519246083, lng: -122.91033147122174 },
            { lat: 45.49238973461518, lng: -122.91031997401844 },
            { lat: 45.492380577723878, lng: -122.91031306015378 },
            { lat: 45.492369518782624, lng: -122.91031032961067 },
            { lat: 45.492358432270343, lng: -122.91031282391506 },
            { lat: 45.492301668847347, lng: -122.91008076042577 },
            { lat: 45.492312915562756, lng: -122.91007180541486 },
            { lat: 45.492321061562883, lng: -122.91005752503041 },
            { lat: 45.492324907493767, lng: -122.91003997016415 },
            { lat: 45.492323906147242, lng: -122.9100216385638 },
            { lat: 45.492058888794091, lng: -122.90887296950078 },
            { lat: 45.4920249221574, lng: -122.90870065151394 },
            { lat: 45.491965314144842, lng: -122.90835142967009 }];
        var Tract132405shape = new google.maps.Polygon({
            paths: [Tract132405coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132405shape.setMap(map);

        var Lot132245center = new google.maps.LatLng(45.4910841568467, -122.911922798428);
        var markerLot132245 = new google.maps.Marker({
            position: Lot132245center,
            map: map,
            title: 'Lot132245'
        });
        markers.push(markerLot132245);
        var Lot132245coords0 = [
            { lat: 45.491058185014552, lng: -122.91160645981684 },
            { lat: 45.491208291058228, lng: -122.9116024354614 },
            { lat: 45.491212944328836, lng: -122.91195333100623 },
            { lat: 45.491104595410668, lng: -122.91195510120164 },
            { lat: 45.491093443180759, lng: -122.91195066084381 },
            { lat: 45.491084157009517, lng: -122.91194359486929 },
            { lat: 45.491076096940809, lng: -122.91193395531018 },
            { lat: 45.491069610266443, lng: -122.91192215751629 },
            { lat: 45.491064291158956, lng: -122.91190587231871 },
            { lat: 45.491061965493842, lng: -122.9118882238842 },
            { lat: 45.491058185014552, lng: -122.91160645981684 }];
        var Lot132245shape = new google.maps.Polygon({
            paths: [Lot132245coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132245shape.setMap(map);

        var Lot132235center = new google.maps.LatLng(45.4925017695812, -122.911519957491);
        var markerLot132235 = new google.maps.Marker({
            position: Lot132235center,
            map: map,
            title: 'Lot132235'
        });
        markers.push(markerLot132235);
        var Lot132235coords0 = [
            { lat: 45.492437793040622, lng: -122.91146880465779 },
            { lat: 45.492487297940983, lng: -122.91143983195255 },
            { lat: 45.492533348693613, lng: -122.91140941685315 },
            { lat: 45.492625372107653, lng: -122.91164758088949 },
            { lat: 45.492678852610233, lng: -122.91186062518139 },
            { lat: 45.492687787702152, lng: -122.91195474956652 },
            { lat: 45.492444323984628, lng: -122.91196128299686 },
            { lat: 45.492437793040622, lng: -122.91146880465779 }];
        var Lot132235shape = new google.maps.Polygon({
            paths: [Lot132235coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132235shape.setMap(map);

        var Lot132369center = new google.maps.LatLng(45.4912748976222, -122.912209085558);
        var markerLot132369 = new google.maps.Marker({
            position: Lot132369center,
            map: map,
            title: 'Lot132369'
        });
        markers.push(markerLot132369);
        var Lot132369coords0 = [
            { lat: 45.4912108717532, lng: -122.9120352912887 },
            { lat: 45.49133427126938, lng: -122.9120319838616 },
            { lat: 45.491338923227623, lng: -122.91238288021954 },
            { lat: 45.491215523701506, lng: -122.91238618688492 },
            { lat: 45.4912108717532, lng: -122.9120352912887 }];
        var Lot132369shape = new google.maps.Polygon({
            paths: [Lot132369coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132369shape.setMap(map);

        var Lot132370center = new google.maps.LatLng(45.4910846307942, -122.912078894735);
        var markerLot132370 = new google.maps.Marker({
            position: Lot132370center,
            map: map,
            title: 'Lot132370'
        });
        markers.push(markerLot132370);
        var Lot132370coords0 = [
            { lat: 45.491038748920495, lng: -122.91231291952927 },
            { lat: 45.4910675421447, lng: -122.91231214794095 },
            { lat: 45.491064947077938, lng: -122.91210605434905 },
            { lat: 45.491068631723223, lng: -122.91208274339917 },
            { lat: 45.491077469354884, lng: -122.91206242195625 },
            { lat: 45.491091412729176, lng: -122.91204658988764 },
            { lat: 45.49110834891119, lng: -122.91203860006439 },
            { lat: 45.4912108717532, lng: -122.9120352912887 },
            { lat: 45.491215523701506, lng: -122.91238618688492 },
            { lat: 45.49103978259101, lng: -122.91239089609232 },
            { lat: 45.491038748920495, lng: -122.91231291952927 }];
        var Lot132370shape = new google.maps.Polygon({
            paths: [Lot132370coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132370shape.setMap(map);

        var Lot132367center = new google.maps.LatLng(45.491521696656, -122.912202471437);
        var markerLot132367 = new google.maps.Marker({
            position: Lot132367center,
            map: map,
            title: 'Lot132367'
        });
        markers.push(markerLot132367);
        var Lot132367coords0 = [
            { lat: 45.491457670781244, lng: -122.91202867642011 },
            { lat: 45.491581070288881, lng: -122.91202536896427 },
            { lat: 45.49158572226704, lng: -122.91237626684571 },
            { lat: 45.491462322749463, lng: -122.91237957353981 },
            { lat: 45.491457670781244, lng: -122.91202867642011 }];
        var Lot132367shape = new google.maps.Polygon({
            paths: [Lot132367coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132367shape.setMap(map);

        var Lot132366center = new google.maps.LatLng(45.4916450961664, -122.912199164355);
        var markerLot132366 = new google.maps.Marker({
            position: Lot132366center,
            map: map,
            title: 'Lot132366'
        });
        markers.push(markerLot132366);
        var Lot132366coords0 = [
            { lat: 45.491581070288881, lng: -122.91202536896427 },
            { lat: 45.491704469792225, lng: -122.91202206149406 },
            { lat: 45.491709121780325, lng: -122.91237296013728 },
            { lat: 45.49158572226704, lng: -122.91237626684571 },
            { lat: 45.491581070288881, lng: -122.91202536896427 }];
        var Lot132366shape = new google.maps.Polygon({
            paths: [Lot132366coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132366shape.setMap(map);

        var Lot132368center = new google.maps.LatLng(45.4913982971412, -122.912205778505);
        var markerLot132368 = new google.maps.Marker({
            position: Lot132368center,
            map: map,
            title: 'Lot132368'
        });
        markers.push(markerLot132368);
        var Lot132368coords0 = [
            { lat: 45.49133427126938, lng: -122.9120319838616 },
            { lat: 45.491457670781244, lng: -122.91202867642011 },
            { lat: 45.491462322749463, lng: -122.91237957353981 },
            { lat: 45.491338923227623, lng: -122.91238288021954 },
            { lat: 45.49133427126938, lng: -122.9120319838616 }];
        var Lot132368shape = new google.maps.Polygon({
            paths: [Lot132368coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132368shape.setMap(map);

        var Lot132364center = new google.maps.LatLng(45.4918918951745, -122.912192550147);
        var markerLot132364 = new google.maps.Marker({
            position: Lot132364center,
            map: map,
            title: 'Lot132364'
        });
        markers.push(markerLot132364);
        var Lot132364coords0 = [
            { lat: 45.49182786929132, lng: -122.91201875400947 },
            { lat: 45.491951268786124, lng: -122.91201544651054 },
            { lat: 45.491955920794112, lng: -122.91236634667726 },
            { lat: 45.491832521289354, lng: -122.91236965341444 },
            { lat: 45.49182786929132, lng: -122.91201875400947 }];
        var Lot132364shape = new google.maps.Polygon({
            paths: [Lot132364coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132364shape.setMap(map);

        var Lot132363center = new google.maps.LatLng(45.4920152946722, -122.912189243022);
        var markerLot132363 = new google.maps.Marker({
            position: Lot132363center,
            map: map,
            title: 'Lot132363'
        });
        markers.push(markerLot132363);
        var Lot132363coords0 = [
            { lat: 45.491951268786124, lng: -122.91201544651054 },
            { lat: 45.492074668276665, lng: -122.91201213899724 },
            { lat: 45.492079320294586, lng: -122.91236303992572 },
            { lat: 45.491955920794112, lng: -122.91236634667726 },
            { lat: 45.491951268786124, lng: -122.91201544651054 }];
        var Lot132363shape = new google.maps.Polygon({
            paths: [Lot132363coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132363shape.setMap(map);

        var Lot132362center = new google.maps.LatLng(45.4921386941656, -122.912185935883);
        var markerLot132362 = new google.maps.Marker({
            position: Lot132362center,
            map: map,
            title: 'Lot132362'
        });
        markers.push(markerLot132362);
        var Lot132362coords0 = [
            { lat: 45.492074668276665, lng: -122.91201213899724 },
            { lat: 45.492198067762942, lng: -122.91200883146955 },
            { lat: 45.492202719790811, lng: -122.91235973315982 },
            { lat: 45.492079320294586, lng: -122.91236303992572 },
            { lat: 45.492074668276665, lng: -122.91201213899724 }];
        var Lot132362shape = new google.maps.Polygon({
            paths: [Lot132362coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132362shape.setMap(map);

        var Lot132361center = new google.maps.LatLng(45.4922620936547, -122.912182628729);
        var markerLot132361 = new google.maps.Marker({
            position: Lot132361center,
            map: map,
            title: 'Lot132361'
        });
        markers.push(markerLot132361);
        var Lot132361coords0 = [
            { lat: 45.492198067762942, lng: -122.91200883146955 },
            { lat: 45.492321467244935, lng: -122.9120055239275 },
            { lat: 45.492326119282744, lng: -122.91235642637956 },
            { lat: 45.492202719790811, lng: -122.91235973315982 },
            { lat: 45.492198067762942, lng: -122.91200883146955 }];
        var Lot132361shape = new google.maps.Polygon({
            paths: [Lot132361coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132361shape.setMap(map);

        var Lot132360center = new google.maps.LatLng(45.4923854931395, -122.91217932156);
        var markerLot132360 = new google.maps.Marker({
            position: Lot132360center,
            map: map,
            title: 'Lot132360'
        });
        markers.push(markerLot132360);
        var Lot132360coords0 = [
            { lat: 45.492321467244935, lng: -122.9120055239275 },
            { lat: 45.492444866722813, lng: -122.91200221637149 },
            { lat: 45.492449518770414, lng: -122.91235311958492 },
            { lat: 45.492326119282744, lng: -122.91235642637956 },
            { lat: 45.492321467244935, lng: -122.9120055239275 }];
        var Lot132360shape = new google.maps.Polygon({
            paths: [Lot132360coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132360shape.setMap(map);

        var Lot132365center = new google.maps.LatLng(45.4917684956726, -122.912195857258);
        var markerLot132365 = new google.maps.Marker({
            position: Lot132365center,
            map: map,
            title: 'Lot132365'
        });
        markers.push(markerLot132365);
        var Lot132365coords0 = [
            { lat: 45.491704469792225, lng: -122.91202206149406 },
            { lat: 45.49182786929132, lng: -122.91201875400947 },
            { lat: 45.491832521289354, lng: -122.91236965341444 },
            { lat: 45.491709121780325, lng: -122.91237296013728 },
            { lat: 45.491704469792225, lng: -122.91202206149406 }];
        var Lot132365shape = new google.maps.Polygon({
            paths: [Lot132365coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132365shape.setMap(map);

        var Lot132358center = new google.maps.LatLng(45.4926416097314, -122.91210838014);
        var markerLot132358 = new google.maps.Marker({
            position: Lot132358center,
            map: map,
            title: 'Lot132358'
        });
        markers.push(markerLot132358);
        var Lot132358coords0 = [
            { lat: 45.492567723406516, lng: -122.91195797153884 },
            { lat: 45.49268778770228, lng: -122.91195474956662 },
            { lat: 45.492700133102211, lng: -122.9120848003338 },
            { lat: 45.492703599936618, lng: -122.91234631080576 },
            { lat: 45.492572918253806, lng: -122.91234981277596 },
            { lat: 45.492567723406516, lng: -122.91195797153884 }];
        var Lot132358shape = new google.maps.Polygon({
            paths: [Lot132358coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132358shape.setMap(map);

        var Lot132354center = new google.maps.LatLng(45.4927262188495, -122.911318080232);
        var markerLot132354 = new google.maps.Marker({
            position: Lot132354center,
            map: map,
            title: 'Lot132354'
        });
        markers.push(markerLot132354);
        var Lot132354coords0 = [
            { lat: 45.49253334869357, lng: -122.91140941685288 },
            { lat: 45.49261220421549, lng: -122.91134895058995 },
            { lat: 45.492719925219205, lng: -122.91125272446823 },
            { lat: 45.492730563298529, lng: -122.91124763369947 },
            { lat: 45.492741787650893, lng: -122.91124770103625 },
            { lat: 45.492754632348046, lng: -122.91125480653633 },
            { lat: 45.4927644710297, lng: -122.91126852999847 },
            { lat: 45.49281778546866, lng: -122.9113897661484 },
            { lat: 45.4928553640321, lng: -122.91149076142916 },
            { lat: 45.492625372107781, lng: -122.91164758088962 },
            { lat: 45.49253334869357, lng: -122.91140941685288 }];
        var Lot132354shape = new google.maps.Polygon({
            paths: [Lot132354coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132354shape.setMap(map);

        var Lot132356center = new google.maps.LatLng(45.4929288175346, -122.911926307348);
        var markerLot132356 = new google.maps.Marker({
            position: Lot132356center,
            map: map,
            title: 'Lot132356'
        });
        markers.push(markerLot132356);
        var Lot132356coords0 = [
            { lat: 45.492678852610346, lng: -122.91186062518149 },
            { lat: 45.492926703669248, lng: -122.91177494902281 },
            { lat: 45.492938536597379, lng: -122.91185360224796 },
            { lat: 45.49294669070602, lng: -122.91192663046135 },
            { lat: 45.492952213475306, lng: -122.91200015512185 },
            { lat: 45.492955090517214, lng: -122.9120739846811 },
            { lat: 45.492700133102211, lng: -122.9120848003338 },
            { lat: 45.492678852610346, lng: -122.91186062518149 }];
        var Lot132356shape = new google.maps.Polygon({
            paths: [Lot132356coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132356shape.setMap(map);

        var Lot132357center = new google.maps.LatLng(45.4928548599858, -122.912184211151);
        var markerLot132357 = new google.maps.Marker({
            position: Lot132357center,
            map: map,
            title: 'Lot132357'
        });
        markers.push(markerLot132357);
        var Lot132357coords0 = [
            { lat: 45.492700133102211, lng: -122.9120848003338 },
            { lat: 45.492955090517214, lng: -122.9120739846811 },
            { lat: 45.492960333676244, lng: -122.91233943088189 },
            { lat: 45.492703599936618, lng: -122.91234631080576 },
            { lat: 45.492700133102211, lng: -122.9120848003338 }];
        var Lot132357shape = new google.maps.Polygon({
            paths: [Lot132357coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132357shape.setMap(map);

        var Lot132355center = new google.maps.LatLng(45.4928843106723, -122.911636154977);
        var markerLot132355 = new google.maps.Marker({
            position: Lot132355center,
            map: map,
            title: 'Lot132355'
        });
        markers.push(markerLot132355);
        var Lot132355coords0 = [
            { lat: 45.492625372107781, lng: -122.91164758088962 },
            { lat: 45.4928553640321, lng: -122.91149076142916 },
            { lat: 45.492878399806528, lng: -122.91156422313171 },
            { lat: 45.4928970170171, lng: -122.91163326542038 },
            { lat: 45.492913132299286, lng: -122.9117035684354 },
            { lat: 45.492926703669248, lng: -122.91177494902281 },
            { lat: 45.492678852610346, lng: -122.91186062518149 },
            { lat: 45.492625372107781, lng: -122.91164758088962 }];
        var Lot132355shape = new google.maps.Polygon({
            paths: [Lot132355coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132355shape.setMap(map);

        var Lot132359center = new google.maps.LatLng(45.4924958703781, -122.91212488062);
        var markerLot132359 = new google.maps.Marker({
            position: Lot132359center,
            map: map,
            title: 'Lot132359'
        });
        markers.push(markerLot132359);
        var Lot132359coords0 = [
            { lat: 45.492444323984756, lng: -122.91196128299698 },
            { lat: 45.492567723406516, lng: -122.91195797153884 },
            { lat: 45.492572918253806, lng: -122.91234981277596 },
            { lat: 45.492449518770414, lng: -122.91235311958492 },
            { lat: 45.492444323984756, lng: -122.91196128299698 }];
        var Lot132359shape = new google.maps.Polygon({
            paths: [Lot132359coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132359shape.setMap(map);

        var Lot132351center = new google.maps.LatLng(45.4932149404159, -122.9114689997);
        var markerLot132351 = new google.maps.Marker({
            position: Lot132351center,
            map: map,
            title: 'Lot132351'
        });
        markers.push(markerLot132351);
        var Lot132351coords0 = [
            { lat: 45.493013537188389, lng: -122.91144806118231 },
            { lat: 45.493317963642184, lng: -122.91126607813707 },
            { lat: 45.493341233691595, lng: -122.91133090821383 },
            { lat: 45.493362047302945, lng: -122.91139455501332 },
            { lat: 45.493383266964855, lng: -122.91146647097662 },
            { lat: 45.4934006216529, lng: -122.91153218109383 },
            { lat: 45.493068043516004, lng: -122.9116650814061 },
            { lat: 45.49304347429878, lng: -122.91155543122203 },
            { lat: 45.493013537188389, lng: -122.91144806118231 }];
        var Lot132351shape = new google.maps.Polygon({
            paths: [Lot132351coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132351shape.setMap(map);

        var Lot132349center = new google.maps.LatLng(45.4932999145451, -122.911947900449);
        var markerLot132349 = new google.maps.Marker({
            position: Lot132349center,
            map: map,
            title: 'Lot132349'
        });
        markers.push(markerLot132349);
        var Lot132349coords0 = [
            { lat: 45.493098687243545, lng: -122.91186754060558 },
            { lat: 45.493451550186577, lng: -122.91179173193181 },
            { lat: 45.493460423568614, lng: -122.91185901500742 },
            { lat: 45.493467791254027, lng: -122.9119284194614 },
            { lat: 45.493476895442782, lng: -122.91206034978138 },
            { lat: 45.493111484483535, lng: -122.91207383444798 },
            { lat: 45.493107176721587, lng: -122.91196788418823 },
            { lat: 45.493098687243545, lng: -122.91186754060558 }];
        var Lot132349shape = new google.maps.Polygon({
            paths: [Lot132349coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132349shape.setMap(map);

        var Lot132348center = new google.maps.LatLng(45.4934329845645, -122.912128459583);
        var markerLot132348 = new google.maps.Marker({
            position: Lot132348center,
            map: map,
            title: 'Lot132348'
        });
        markers.push(markerLot132348);
        var Lot132348coords0 = [
            { lat: 45.493111484483535, lng: -122.91207383444798 },
            { lat: 45.493476895442782, lng: -122.91206034978138 },
            { lat: 45.493479191296011, lng: -122.91213231349302 },
            { lat: 45.493481796687874, lng: -122.91232545657661 },
            { lat: 45.493116646311634, lng: -122.91233524200132 },
            { lat: 45.493111484483535, lng: -122.91207383444798 }];
        var Lot132348shape = new google.maps.Polygon({
            paths: [Lot132348coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132348shape.setMap(map);

        var Lot132352center = new google.maps.LatLng(45.4932328484048, -122.911127432412);
        var markerLot132352 = new google.maps.Marker({
            position: Lot132352center,
            map: map,
            title: 'Lot132352'
        });
        markers.push(markerLot132352);
        var Lot132352coords0 = [
            { lat: 45.492990848717049, lng: -122.9109245794802 },
            { lat: 45.493118067796509, lng: -122.91080932734305 },
            { lat: 45.493289577524109, lng: -122.91119421034794 },
            { lat: 45.493149264040674, lng: -122.91127808875626 },
            { lat: 45.492990848717049, lng: -122.9109245794802 }];
        var Lot132352shape = new google.maps.Polygon({
            paths: [Lot132352coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132352shape.setMap(map);

        var Tract132415center = new google.maps.LatLng(45.4931468559656, -122.911322594006);
        var Tract132415coords0 = [
            { lat: 45.49298916767097, lng: -122.91137379267997 },
            { lat: 45.493289577524109, lng: -122.91119421034794 },
            { lat: 45.493317963642184, lng: -122.91126607813707 },
            { lat: 45.493013537188389, lng: -122.91144806118231 },
            { lat: 45.49298916767097, lng: -122.91137379267997 }];
        var Tract132415shape = new google.maps.Polygon({
            paths: [Tract132415coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132415shape.setMap(map);

        var Lot132353center = new google.maps.LatLng(45.4929615633078, -122.911270953773);
        var markerLot132353 = new google.maps.Marker({
            position: Lot132353center,
            map: map,
            title: 'Lot132353'
        });
        markers.push(markerLot132353);
        var Lot132353coords0 = [
            { lat: 45.492852064129984, lng: -122.91105030849621 },
            { lat: 45.492990848717049, lng: -122.9109245794802 },
            { lat: 45.493149264040674, lng: -122.91127808875626 },
            { lat: 45.49298916767097, lng: -122.91137379267997 },
            { lat: 45.492966610899025, lng: -122.91131245258676 },
            { lat: 45.492943827465943, lng: -122.91125612619231 },
            { lat: 45.492852064129984, lng: -122.91105030849621 }];
        var Lot132353shape = new google.maps.Polygon({
            paths: [Lot132353coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132353shape.setMap(map);

        var Lot132350center = new google.maps.LatLng(45.4932719532197, -122.911708386445);
        var markerLot132350 = new google.maps.Marker({
            position: Lot132350center,
            map: map,
            title: 'Lot132350'
        });
        markers.push(markerLot132350);
        var Lot132350coords0 = [
            { lat: 45.493068043516004, lng: -122.9116650814061 },
            { lat: 45.4934006216529, lng: -122.91153218109383 },
            { lat: 45.493429667459566, lng: -122.91166287120527 },
            { lat: 45.493451550186577, lng: -122.91179173193181 },
            { lat: 45.493098687243545, lng: -122.91186754060558 },
            { lat: 45.493085197599292, lng: -122.91176316117252 },
            { lat: 45.493068043516004, lng: -122.9116650814061 }];
        var Lot132350shape = new google.maps.Polygon({
            paths: [Lot132350coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132350shape.setMap(map);

        var Tract132414center = new google.maps.LatLng(45.4929754684233, -122.911667691452);
        var Tract132414coords0 = [
            { lat: 45.492766420072229, lng: -122.9112728503232 },
            { lat: 45.492898265667847, lng: -122.91115340846899 },
            { lat: 45.492955633320257, lng: -122.91128467990234 },
            { lat: 45.492979974222223, lng: -122.91134803992125 },
            { lat: 45.493000975834086, lng: -122.91140859454745 },
            { lat: 45.4930309120647, lng: -122.91150770541027 },
            { lat: 45.4930563782182, lng: -122.91160975564861 },
            { lat: 45.493077996225715, lng: -122.91171885152541 },
            { lat: 45.493093745183614, lng: -122.91182479449577 },
            { lat: 45.4931035926012, lng: -122.91191912712702 },
            { lat: 45.493109572730361, lng: -122.9120125910494 },
            { lat: 45.493116646311634, lng: -122.91233524200132 },
            { lat: 45.492960333676244, lng: -122.91233943088189 },
            { lat: 45.492954944121713, lng: -122.9120674959635 },
            { lat: 45.492951420393211, lng: -122.9119869885036 },
            { lat: 45.492941047605768, lng: -122.9118736863629 },
            { lat: 45.492933021090728, lng: -122.91181427166759 },
            { lat: 45.492923297332823, lng: -122.91175560872988 },
            { lat: 45.492911818853564, lng: -122.911697350785 },
            { lat: 45.492897071214728, lng: -122.91163348291401 },
            { lat: 45.492880255671849, lng: -122.91157065653657 },
            { lat: 45.4928614084314, lng: -122.91150900692661 },
            { lat: 45.492840817854415, lng: -122.91144934455254 },
            { lat: 45.492820417610687, lng: -122.91139625022952 },
            { lat: 45.492766420072229, lng: -122.9112728503232 }];
        var Tract132414shape = new google.maps.Polygon({
            paths: [Tract132414coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132414shape.setMap(map);

        var Tract132416center = new google.maps.LatLng(45.4934111523521, -122.911617765852);
        var Tract132416coords0 = [
            { lat: 45.493118067796509, lng: -122.91080932734305 },
            { lat: 45.493134259306913, lng: -122.91079465885177 },
            { lat: 45.493287154971405, lng: -122.91113597387643 },
            { lat: 45.49331824818298, lng: -122.91121018837481 },
            { lat: 45.493347031672812, lng: -122.9112862632461 },
            { lat: 45.493373450490694, lng: -122.91136405325923 },
            { lat: 45.493397454200675, lng: -122.91144340990814 },
            { lat: 45.493420831923267, lng: -122.91153158944773 },
            { lat: 45.493439643304654, lng: -122.91161372907227 },
            { lat: 45.493455913209729, lng: -122.91169695868162 },
            { lat: 45.493470727286478, lng: -122.91178881098517 },
            { lat: 45.493481588597689, lng: -122.91187380412528 },
            { lat: 45.493490446846025, lng: -122.91196719513248 },
            { lat: 45.493495808959061, lng: -122.91205324279743 },
            { lat: 45.4934986374841, lng: -122.91214739344683 },
            { lat: 45.493479442017978, lng: -122.91214790813208 },
            { lat: 45.493476895442782, lng: -122.91206034978138 },
            { lat: 45.493471855577106, lng: -122.91197660427277 },
            { lat: 45.4934640990355, lng: -122.91189152992561 },
            { lat: 45.49345264489785, lng: -122.9117993744072 },
            { lat: 45.493438659415872, lng: -122.91171130736828 },
            { lat: 45.493422727649879, lng: -122.91162856602244 },
            { lat: 45.493402446968247, lng: -122.91153953598354 },
            { lat: 45.493380556093712, lng: -122.91145681777785 },
            { lat: 45.493361306632245, lng: -122.91139218340022 },
            { lat: 45.49334043346493, lng: -122.91132857604313 },
            { lat: 45.493295112619165, lng: -122.91120767812741 },
            { lat: 45.493267819775689, lng: -122.91114353268893 },
            { lat: 45.493118067796509, lng: -122.91080932734305 }];
        var Tract132416shape = new google.maps.Polygon({
            paths: [Tract132416coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132416shape.setMap(map);

        var Tract132408center = new google.maps.LatLng(45.4916911903942, -122.911936344151);
        var Tract132408coords0 = [
            { lat: 45.491000598575539, lng: -122.91160800370808 },
            { lat: 45.491058185014531, lng: -122.91160645981658 },
            { lat: 45.491062652950269, lng: -122.91189646782395 },
            { lat: 45.491067783862185, lng: -122.91191765893952 },
            { lat: 45.491076492497406, lng: -122.91193453176241 },
            { lat: 45.491089171690639, lng: -122.91194784740104 },
            { lat: 45.491103074905553, lng: -122.9119547214507 },
            { lat: 45.491113569186872, lng: -122.9119559946505 },
            { lat: 45.492176605782205, lng: -122.91192749610684 },
            { lat: 45.492194069828365, lng: -122.91192228738353 },
            { lat: 45.492208397030709, lng: -122.91190980110669 },
            { lat: 45.492219070152288, lng: -122.91189134623718 },
            { lat: 45.492225106047805, lng: -122.91186747072409 },
            { lat: 45.492221841806234, lng: -122.91155450011945 },
            { lat: 45.492279227579829, lng: -122.91153782782025 },
            { lat: 45.492283414240262, lng: -122.91185328757419 },
            { lat: 45.492284821263013, lng: -122.91186812848272 },
            { lat: 45.492288817887676, lng: -122.9118835833338 },
            { lat: 45.492295859647278, lng: -122.91189848880678 },
            { lat: 45.49230441071937, lng: -122.91190959398628 },
            { lat: 45.492314510145427, lng: -122.91191765298147 },
            { lat: 45.492325631775948, lng: -122.91192224594148 },
            { lat: 45.492443781090607, lng: -122.91192033896283 },
            { lat: 45.492444866722813, lng: -122.91200221637149 },
            { lat: 45.491107788768609, lng: -122.91203871977834 },
            { lat: 45.491092780686088, lng: -122.91204557257285 },
            { lat: 45.49108073478714, lng: -122.91205760081577 },
            { lat: 45.491071624098396, lng: -122.9120740388737 },
            { lat: 45.491065984815776, lng: -122.91209496721324 },
            { lat: 45.491064880198167, lng: -122.91211135820245 },
            { lat: 45.4910675421447, lng: -122.91231214794095 },
            { lat: 45.491009955696221, lng: -122.91231369111718 },
            { lat: 45.491000598575539, lng: -122.91160800370808 }];
        var Tract132408shape = new google.maps.Polygon({
            paths: [Tract132408coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132408shape.setMap(map);

        var Lot132150center = new google.maps.LatLng(45.494919188293, -122.907655738706);
        var markerLot132150 = new google.maps.Marker({
            position: Lot132150center,
            map: map,
            title: 'Lot132150'
        });
        markers.push(markerLot132150);
        var Lot132150coords0 = [
            { lat: 45.494838380030828, lng: -122.90760590306745 },
            { lat: 45.49500965231509, lng: -122.90734921858427 },
            { lat: 45.495091085645129, lng: -122.90745907270421 },
            { lat: 45.494964324617719, lng: -122.90762990896388 },
            { lat: 45.494940457432243, lng: -122.90765967972695 },
            { lat: 45.494928588506838, lng: -122.90766933774628 },
            { lat: 45.494918468169118, lng: -122.90767348573711 },
            { lat: 45.494906909374642, lng: -122.90767451097967 },
            { lat: 45.494896504944634, lng: -122.90767218349762 },
            { lat: 45.494886662615443, lng: -122.90766685188753 },
            { lat: 45.494876188108179, lng: -122.90765682053502 },
            { lat: 45.494838380030828, lng: -122.90760590306745 }];
        var Lot132150shape = new google.maps.Polygon({
            paths: [Lot132150coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132150shape.setMap(map);

        var Tract132453center = new google.maps.LatLng(45.4946744277688, -122.907919284127);
        var Tract132453coords0 = [
            { lat: 45.49417228264322, lng: -122.90826071529233 },
            { lat: 45.494173163631714, lng: -122.90815932990442 },
            { lat: 45.494236638609891, lng: -122.90815935453824 },
            { lat: 45.494288955357383, lng: -122.90815425362236 },
            { lat: 45.494346014708917, lng: -122.90814259922691 },
            { lat: 45.494401130051344, lng: -122.90812510773246 },
            { lat: 45.494454496034443, lng: -122.90810202809278 },
            { lat: 45.494508838341282, lng: -122.90807186320373 },
            { lat: 45.494560976978242, lng: -122.90803600015529 },
            { lat: 45.494609767073513, lng: -122.9079955689203 },
            { lat: 45.494870521836916, lng: -122.90773787191991 },
            { lat: 45.494909079427565, lng: -122.90769650529181 },
            { lat: 45.494946356827256, lng: -122.90765259153854 },
            { lat: 45.494982073651535, lng: -122.90760645525329 },
            { lat: 45.4952394856322, lng: -122.9072577832 },
            { lat: 45.49529070587861, lng: -122.90718332061424 },
            { lat: 45.495385123570294, lng: -122.9070383463376 },
            { lat: 45.495428516522374, lng: -122.90712096881821 },
            { lat: 45.49534094417195, lng: -122.90725535775154 },
            { lat: 45.495288784050686, lng: -122.90733106118712 },
            { lat: 45.495029417409178, lng: -122.90768235540618 },
            { lat: 45.494992471248644, lng: -122.90772994020162 },
            { lat: 45.494954620619573, lng: -122.90777456763756 },
            { lat: 45.494911551054606, lng: -122.90782081095423 },
            { lat: 45.49465079683219, lng: -122.90807862119948 },
            { lat: 45.4945980442717, lng: -122.90812279018969 },
            { lat: 45.494541159564818, lng: -122.90816241930079 },
            { lat: 45.494481972976637, lng: -122.90819578516761 },
            { lat: 45.494422949519063, lng: -122.90822177425497 },
            { lat: 45.494361177356872, lng: -122.90824172449524 },
            { lat: 45.494299015709437, lng: -122.90825469909875 },
            { lat: 45.494240039120982, lng: -122.90826064227817 },
            { lat: 45.49417228264322, lng: -122.90826071529233 }];
        var Tract132453shape = new google.maps.Polygon({
            paths: [Tract132453coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132453shape.setMap(map);

        var Tract132378center = new google.maps.LatLng(45.4946393586211, -122.911134463273);
        var Tract132378coords0 = [
            { lat: 45.494502487252824, lng: -122.91111062355205 },
            { lat: 45.494505192095076, lng: -122.91101270262313 },
            { lat: 45.494513783422477, lng: -122.9109128998564 },
            { lat: 45.494527768257534, lng: -122.91081694201756 },
            { lat: 45.494547777042953, lng: -122.91072050328414 },
            { lat: 45.494570953654, lng: -122.91063474195944 },
            { lat: 45.494600670259175, lng: -122.9105463225463 },
            { lat: 45.494629113183805, lng: -122.91047574444583 },
            { lat: 45.494682442612579, lng: -122.91035919716401 },
            { lat: 45.494807971484882, lng: -122.91049239409347 },
            { lat: 45.494749658708663, lng: -122.9106223412153 },
            { lat: 45.494729597808423, lng: -122.91067607822767 },
            { lat: 45.494711918635481, lng: -122.91073148031266 },
            { lat: 45.494695428293589, lng: -122.91079356732681 },
            { lat: 45.494681928680428, lng: -122.91085709785337 },
            { lat: 45.494671946115744, lng: -122.91091841300398 },
            { lat: 45.49466443815998, lng: -122.91098391567564 },
            { lat: 45.494659840348007, lng: -122.91105551289611 },
            { lat: 45.494658880839573, lng: -122.91112186574721 },
            { lat: 45.494669228560177, lng: -122.9115372963128 },
            { lat: 45.494672783304452, lng: -122.91155497555312 },
            { lat: 45.494680691039818, lng: -122.91156952475696 },
            { lat: 45.494691826638217, lng: -122.91157887383348 },
            { lat: 45.494704605704108, lng: -122.91158169257388 },
            { lat: 45.49471020652615, lng: -122.91180383689631 },
            { lat: 45.494700767096866, lng: -122.91180622549429 },
            { lat: 45.494691514930821, lng: -122.91181287825687 },
            { lat: 45.494684084540751, lng: -122.91182315947115 },
            { lat: 45.494679457992774, lng: -122.91183497312049 },
            { lat: 45.494677154754804, lng: -122.91185183303644 },
            { lat: 45.494678862853711, lng: -122.91192132695079 },
            { lat: 45.494522629515608, lng: -122.9119292899679 },
            { lat: 45.494502487252824, lng: -122.91111062355205 }];
        var Tract132378shape = new google.maps.Polygon({
            paths: [Tract132378coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132378shape.setMap(map);

        var Tract132449center = new google.maps.LatLng(45.4950800576942, -122.910378910111);
        var Tract132449coords0 = [
            { lat: 45.494191768192827, lng: -122.90935641971687 },
            { lat: 45.494328278645035, lng: -122.90924808597767 },
            { lat: 45.494358230621941, lng: -122.90932029456053 },
            { lat: 45.494557996666828, lng: -122.90977527170607 },
            { lat: 45.494584119989931, lng: -122.9098288643612 },
            { lat: 45.494612485466554, lng: -122.90988243191788 },
            { lat: 45.494641487689186, lng: -122.90993294259845 },
            { lat: 45.494671844408835, lng: -122.90998181776237 },
            { lat: 45.494717991442243, lng: -122.91004937964755 },
            { lat: 45.49475938195846, lng: -122.91010327923084 },
            { lat: 45.4947722071575, lng: -122.9101104558076 },
            { lat: 45.49478513716177, lng: -122.91011013959061 },
            { lat: 45.494797781201576, lng: -122.91010234013156 },
            { lat: 45.494806777508572, lng: -122.91008913112879 },
            { lat: 45.4949312633458, lng: -122.910224593993 },
            { lat: 45.494926357751332, lng: -122.91024153569963 },
            { lat: 45.494926205398237, lng: -122.9102599220699 },
            { lat: 45.49493085396562, lng: -122.91027708066244 },
            { lat: 45.494939642046347, lng: -122.9102905701192 },
            { lat: 45.494994357425853, lng: -122.91033427326244 },
            { lat: 45.495053867145813, lng: -122.91037562821957 },
            { lat: 45.4951029077642, lng: -122.91040544509666 },
            { lat: 45.495150595413193, lng: -122.91043096839189 },
            { lat: 45.495199011524292, lng: -122.91045354935856 },
            { lat: 45.495248066349674, lng: -122.9104731461313 },
            { lat: 45.495295530745295, lng: -122.91048907362349 },
            { lat: 45.495345571529896, lng: -122.91050273007497 },
            { lat: 45.495395979352587, lng: -122.91051331114349 },
            { lat: 45.4954484645749, lng: -122.91052094003567 },
            { lat: 45.495462843980832, lng: -122.9105170977558 },
            { lat: 45.495474787274667, lng: -122.91050508067752 },
            { lat: 45.495482119233472, lng: -122.91048707745786 },
            { lat: 45.495483636243534, lng: -122.910476214329 },
            { lat: 45.495483389598, lng: -122.91046514466984 },
            { lat: 45.495642290238372, lng: -122.91047384923762 },
            { lat: 45.495646506460304, lng: -122.9104911187485 },
            { lat: 45.495654286535881, lng: -122.91050425698872 },
            { lat: 45.495665609626343, lng: -122.91051313925485 },
            { lat: 45.495677575082681, lng: -122.91051549016372 },
            { lat: 45.496153442308071, lng: -122.91041733927729 },
            { lat: 45.496176110690072, lng: -122.91063728273281 },
            { lat: 45.495701228631205, lng: -122.91073577252247 },
            { lat: 45.495689386304861, lng: -122.91074316007143 },
            { lat: 45.495680801338885, lng: -122.91075524238401 },
            { lat: 45.4956754845193, lng: -122.91077200427802 },
            { lat: 45.495674912752527, lng: -122.91079037418521 },
            { lat: 45.495516716840775, lng: -122.91078850629093 },
            { lat: 45.495513832408371, lng: -122.91077486759956 },
            { lat: 45.495508059725239, lng: -122.91076262191052 },
            { lat: 45.495499976482542, lng: -122.91075338993049 },
            { lat: 45.495491165603724, lng: -122.91074830190428 },
            { lat: 45.495391261691587, lng: -122.91073638833086 },
            { lat: 45.495300356938806, lng: -122.91071708586195 },
            { lat: 45.495210596816115, lng: -122.91068896690609 },
            { lat: 45.4951221738137, lng: -122.91065205554146 },
            { lat: 45.495051058873287, lng: -122.9106153517547 },
            { lat: 45.494986220415122, lng: -122.9105760758045 },
            { lat: 45.494925260922614, lng: -122.91053373898912 },
            { lat: 45.494853135047158, lng: -122.91047634661609 },
            { lat: 45.494845923739248, lng: -122.91047216079062 },
            { lat: 45.494834766271019, lng: -122.91047041988283 },
            { lat: 45.494824619513139, lng: -122.91047344873607 },
            { lat: 45.494815573536947, lng: -122.91048065201511 },
            { lat: 45.494807971484882, lng: -122.91049239409347 },
            { lat: 45.494682442612579, lng: -122.91035919716401 },
            { lat: 45.494686781435838, lng: -122.91034559545557 },
            { lat: 45.4946879866001, lng: -122.91032972795702 },
            { lat: 45.4946855228303, lng: -122.91031415741793 },
            { lat: 45.494680214255062, lng: -122.91030149447577 },
            { lat: 45.494620550750263, lng: -122.91022453594357 },
            { lat: 45.494574497071511, lng: -122.91015919994288 },
            { lat: 45.494527187214551, lng: -122.91008492425622 },
            { lat: 45.494483300048728, lng: -122.91000833849925 },
            { lat: 45.494444789005861, lng: -122.90993378446495 },
            { lat: 45.494411760900448, lng: -122.90986318111364 },
            { lat: 45.494222936387658, lng: -122.90943185456487 },
            { lat: 45.494191768192827, lng: -122.90935641971687 }];
        var Tract132449shape = new google.maps.Polygon({
            paths: [Tract132449coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132449shape.setMap(map);

        var Tract132392center = new google.maps.LatLng(45.4946081996749, -122.912253444439);
        var Tract132392coords0 = [
            { lat: 45.494497257497471, lng: -122.91228360136799 },
            { lat: 45.49450916911897, lng: -122.91227990932398 },
            { lat: 45.494519335486622, lng: -122.91227063432393 },
            { lat: 45.4945266085135, lng: -122.9122569216419 },
            { lat: 45.494530170522665, lng: -122.91223929936125 },
            { lat: 45.494522629515608, lng: -122.9119292899679 },
            { lat: 45.494678862853711, lng: -122.91192132695079 },
            { lat: 45.49468694552349, lng: -122.91223124507647 },
            { lat: 45.494691012277784, lng: -122.91224758678251 },
            { lat: 45.494698756261535, lng: -122.91226076784362 },
            { lat: 45.494709234671483, lng: -122.91226931197069 },
            { lat: 45.49472201382774, lng: -122.91227212988308 },
            { lat: 45.494497257497471, lng: -122.91228360136799 }];
        var Tract132392shape = new google.maps.Polygon({
            paths: [Tract132392coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132392shape.setMap(map);

        var Tract132394center = new google.maps.LatLng(45.4945090367226, -122.912268452967);
        var Tract132394coords0 = [
            { lat: 45.494283851083544, lng: -122.91225547092341 },
            { lat: 45.494529843016736, lng: -122.91224291550192 },
            { lat: 45.494526556808893, lng: -122.91225706611284 },
            { lat: 45.494519882260263, lng: -122.91226989754989 },
            { lat: 45.494511430438941, lng: -122.91227843600834 },
            { lat: 45.49450071234871, lng: -122.91228317549874 },
            { lat: 45.494284833486496, lng: -122.91229444333149 },
            { lat: 45.494283851083544, lng: -122.91225547092341 }];
        var Tract132394shape = new google.maps.Polygon({
            paths: [Tract132394coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132394shape.setMap(map);

        var Lot132347center = new google.maps.LatLng(45.4944249620181, -122.911974231161);
        var markerLot132347 = new google.maps.Marker({
            position: Lot132347center,
            map: map,
            title: 'Lot132347'
        });
        markers.push(markerLot132347);
        var Lot132347coords0 = [
            { lat: 45.494274992365341, lng: -122.9119040649679 },
            { lat: 45.494521676594125, lng: -122.91189149170822 },
            { lat: 45.494526097858696, lng: -122.91206686826071 },
            { lat: 45.494279413611039, lng: -122.91207944075998 },
            { lat: 45.494274992365341, lng: -122.9119040649679 }];
        var Lot132347shape = new google.maps.Polygon({
            paths: [Lot132347coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132347shape.setMap(map);

        var Lot132346center = new google.maps.LatLng(45.4944884060277, -122.912211993937);
        var markerLot132346 = new google.maps.Marker({
            position: Lot132346center,
            map: map,
            title: 'Lot132346'
        });
        markers.push(markerLot132346);
        var Lot132346coords0 = [
            { lat: 45.494279413611039, lng: -122.91207944075998 },
            { lat: 45.494526097858696, lng: -122.91206686826071 },
            { lat: 45.494529843016736, lng: -122.91224291550192 },
            { lat: 45.494283851083544, lng: -122.91225547092341 },
            { lat: 45.494279413611039, lng: -122.91207944075998 }];
        var Lot132346shape = new google.maps.Polygon({
            paths: [Lot132346coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132346shape.setMap(map);

        var Lot132081center = new google.maps.LatLng(45.4946018668424, -122.910289717048);
        var markerLot132081 = new google.maps.Marker({
            position: Lot132081center,
            map: map,
            title: 'Lot132081'
        });
        markers.push(markerLot132081);
        var Lot132081coords0 = [
            { lat: 45.494361201512177, lng: -122.91034782465142 },
            { lat: 45.494400838954718, lng: -122.91025197170863 },
            { lat: 45.49449946326331, lng: -122.91003749561175 },
            { lat: 45.494540525159636, lng: -122.91010666966258 },
            { lat: 45.49458482553564, lng: -122.91017441229761 },
            { lat: 45.49462742261575, lng: -122.91023375733609 },
            { lat: 45.494679170230214, lng: -122.91029977650085 },
            { lat: 45.494685574374344, lng: -122.91031433893961 },
            { lat: 45.494688029002532, lng: -122.91033115561616 },
            { lat: 45.494686969979647, lng: -122.91034459324614 },
            { lat: 45.494683355564376, lng: -122.91035710026253 },
            { lat: 45.494630750596393, lng: -122.91047199758744 },
            { lat: 45.494604738164234, lng: -122.91053552075674 },
            { lat: 45.494361201512177, lng: -122.91034782465142 }];
        var Lot132081shape = new google.maps.Polygon({
            paths: [Lot132081coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132081shape.setMap(map);

        var Lot132079center = new google.maps.LatLng(45.494384819883, -122.910771467642);
        var markerLot132079 = new google.maps.Marker({
            position: Lot132079center,
            map: map,
            title: 'Lot132079'
        });
        markers.push(markerLot132079);
        var Lot132079coords0 = [
            { lat: 45.494239178748778, lng: -122.91086012637825 },
            { lat: 45.49424749944891, lng: -122.91079412631733 },
            { lat: 45.494258354530444, lng: -122.91072525612577 },
            { lat: 45.494271339148177, lng: -122.91065713513986 },
            { lat: 45.494284825181651, lng: -122.91059657682578 },
            { lat: 45.4945471992113, lng: -122.91072292081124 },
            { lat: 45.4945273344163, lng: -122.91081941970582 },
            { lat: 45.494512810957531, lng: -122.91092146878968 },
            { lat: 45.494239178748778, lng: -122.91086012637825 }];
        var Lot132079shape = new google.maps.Polygon({
            paths: [Lot132079coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132079shape.setMap(map);

        var Lot132080center = new google.maps.LatLng(45.4944389221582, -122.910544267209);
        var markerLot132080 = new google.maps.Marker({
            position: Lot132080center,
            map: map,
            title: 'Lot132080'
        });
        markers.push(markerLot132080);
        var Lot132080coords0 = [
            { lat: 45.494284825181651, lng: -122.91059657682578 },
            { lat: 45.494300886418422, lng: -122.91053353349406 },
            { lat: 45.4943197872692, lng: -122.91046827172373 },
            { lat: 45.494338517331308, lng: -122.91041060227549 },
            { lat: 45.494361201512177, lng: -122.91034782465142 },
            { lat: 45.494604738164234, lng: -122.91053552075674 },
            { lat: 45.494573667111467, lng: -122.91062584270665 },
            { lat: 45.4945471992113, lng: -122.91072292081124 },
            { lat: 45.494284825181651, lng: -122.91059657682578 }];
        var Lot132080shape = new google.maps.Polygon({
            paths: [Lot132080coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132080shape.setMap(map);

        var Lot132077center = new google.maps.LatLng(45.4944205011195, -122.911173668344);
        var markerLot132077 = new google.maps.Marker({
            position: Lot132077center,
            map: map,
            title: 'Lot132077'
        });
        markers.push(markerLot132077);
        var Lot132077coords0 = [
            { lat: 45.494225580768571, lng: -122.91113086032686 },
            { lat: 45.494502566764844, lng: -122.91112542929217 },
            { lat: 45.49450678453001, lng: -122.91130085240849 },
            { lat: 45.4942299500768, lng: -122.91131496526639 },
            { lat: 45.494225580768571, lng: -122.91113086032686 }];
        var Lot132077shape = new google.maps.Polygon({
            paths: [Lot132077coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132077shape.setMap(map);

        var Lot132076center = new google.maps.LatLng(45.494370578415, -122.911395596868);
        var markerLot132076 = new google.maps.Marker({
            position: Lot132076center,
            map: map,
            title: 'Lot132076'
        });
        markers.push(markerLot132076);
        var Lot132076coords0 = [
            { lat: 45.4942299500768, lng: -122.91131496526639 },
            { lat: 45.49450678453001, lng: -122.91130085240849 },
            { lat: 45.4945112066963, lng: -122.91147622886905 },
            { lat: 45.494234372221875, lng: -122.91149034087358 },
            { lat: 45.4942299500768, lng: -122.91131496526639 }];
        var Lot132076shape = new google.maps.Polygon({
            paths: [Lot132076coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132076shape.setMap(map);

        var Lot132075center = new google.maps.LatLng(45.4943750004368, -122.911570972916);
        var markerLot132075 = new google.maps.Marker({
            position: Lot132075center,
            map: map,
            title: 'Lot132075'
        });
        markers.push(markerLot132075);
        var Lot132075coords0 = [
            { lat: 45.494234372221875, lng: -122.91149034087358 },
            { lat: 45.4945112066963, lng: -122.91147622886905 },
            { lat: 45.494515628594854, lng: -122.91165160535691 },
            { lat: 45.494238794099225, lng: -122.91166571650808 },
            { lat: 45.494234372221875, lng: -122.91149034087358 }];
        var Lot132075shape = new google.maps.Polygon({
            paths: [Lot132075coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132075shape.setMap(map);

        var Lot132074center = new google.maps.LatLng(45.4943851991829, -122.911749083904);
        var markerLot132074 = new google.maps.Marker({
            position: Lot132074center,
            map: map,
            title: 'Lot132074'
        });
        markers.push(markerLot132074);
        var Lot132074coords0 = [
            { lat: 45.494238794099225, lng: -122.91166571650808 },
            { lat: 45.494515628594854, lng: -122.91165160535691 },
            { lat: 45.494520202779782, lng: -122.91183303286346 },
            { lat: 45.4942661711144, lng: -122.91184598087462 },
            { lat: 45.494238794099225, lng: -122.91166571650808 }];
        var Lot132074shape = new google.maps.Polygon({
            paths: [Lot132074coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132074shape.setMap(map);

        var Tract132386center = new google.maps.LatLng(45.4943957607173, -122.911868642616);
        var Tract132386coords0 = [
            { lat: 45.4942661711144, lng: -122.91184598087462 },
            { lat: 45.494520202779782, lng: -122.91183303286346 },
            { lat: 45.494521676594132, lng: -122.91189149170822 },
            { lat: 45.494274992365362, lng: -122.9119040649679 },
            { lat: 45.4942661711144, lng: -122.91184598087462 }];
        var Tract132386shape = new google.maps.Polygon({
            paths: [Tract132386coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132386shape.setMap(map);

        var Lot132078center = new google.maps.LatLng(45.4943585589542, -122.911008413559);
        var markerLot132078 = new google.maps.Marker({
            position: Lot132078center,
            map: map,
            title: 'Lot132078'
        });
        markers.push(markerLot132078);
        var Lot132078coords0 = [
            { lat: 45.4942254755796, lng: -122.91110615459456 },
            { lat: 45.494226439189305, lng: -122.91104264776499 },
            { lat: 45.494229178270508, lng: -122.91097924565936 },
            { lat: 45.494239178748778, lng: -122.91086012637825 },
            { lat: 45.494512810957531, lng: -122.91092146878968 },
            { lat: 45.494504726248181, lng: -122.91102135708836 },
            { lat: 45.494502566764844, lng: -122.91112542929217 },
            { lat: 45.494225580768571, lng: -122.91113086032686 },
            { lat: 45.4942254755796, lng: -122.91110615459456 }];
        var Lot132078shape = new google.maps.Polygon({
            paths: [Lot132078coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132078shape.setMap(map);

        var Tract132374center = new google.maps.LatLng(45.4956629877227, -122.911621390175);
        var Tract132374coords0 = [
            { lat: 45.494704605704108, lng: -122.91158169257388 },
            { lat: 45.495555550103461, lng: -122.91153831511767 },
            { lat: 45.495563607944646, lng: -122.91153652412797 },
            { lat: 45.49557157259342, lng: -122.91153172560753 },
            { lat: 45.495579047702904, lng: -122.91152336673157 },
            { lat: 45.495585016452623, lng: -122.91151131256645 },
            { lat: 45.495588030646672, lng: -122.91149848780989 },
            { lat: 45.495588451192489, lng: -122.91148497908854 },
            { lat: 45.495516716840775, lng: -122.91078850629093 },
            { lat: 45.495674912752527, lng: -122.91079037418521 },
            { lat: 45.495743451305188, lng: -122.91145519047426 },
            { lat: 45.495747958868051, lng: -122.91147688536691 },
            { lat: 45.495760410379262, lng: -122.91150946204411 },
            { lat: 45.495766855508457, lng: -122.9115319410824 },
            { lat: 45.495771536675328, lng: -122.91155775326531 },
            { lat: 45.495773620513077, lng: -122.91158428736927 },
            { lat: 45.495773056000232, lng: -122.91161097432951 },
            { lat: 45.495770172156881, lng: -122.91163541084086 },
            { lat: 45.495764579401836, lng: -122.9116608980552 },
            { lat: 45.495757305964155, lng: -122.91168300157351 },
            { lat: 45.495747128631841, lng: -122.91170543866041 },
            { lat: 45.495734830820361, lng: -122.91172561457078 },
            { lat: 45.495720657572988, lng: -122.91174312728586 },
            { lat: 45.495706382368354, lng: -122.91175644214324 },
            { lat: 45.495692602671369, lng: -122.91176611430265 },
            { lat: 45.495676487941118, lng: -122.91177413056185 },
            { lat: 45.49566147300046, lng: -122.91177878227307 },
            { lat: 45.495644473571865, lng: -122.91178102496484 },
            { lat: 45.495617262525812, lng: -122.91177813927196 },
            { lat: 45.495581136416483, lng: -122.91176293516023 },
            { lat: 45.495564107667555, lng: -122.91176032766334 },
            { lat: 45.49471020652615, lng: -122.91180383689631 },
            { lat: 45.494704605704108, lng: -122.91158169257388 }];
        var Tract132374shape = new google.maps.Polygon({
            paths: [Tract132374coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132374shape.setMap(map);

        var Tract132379center = new google.maps.LatLng(45.4952992772066, -122.909510460075);
        var Tract132379coords0 = [
            { lat: 45.494806777508572, lng: -122.91008913112879 },
            { lat: 45.494963839954551, lng: -122.9097479743798 },
            { lat: 45.494992539531815, lng: -122.9096892482797 },
            { lat: 45.495026658984621, lng: -122.90962764403541 },
            { lat: 45.495072703986395, lng: -122.90955470954822 },
            { lat: 45.495122604785465, lng: -122.90948677618525 },
            { lat: 45.495174495557052, lng: -122.90942609969464 },
            { lat: 45.4952305843495, lng: -122.90936988589135 },
            { lat: 45.4952803890466, lng: -122.9093269898439 },
            { lat: 45.495333937146533, lng: -122.90928737142502 },
            { lat: 45.49538722481411, lng: -122.90925399294936 },
            { lat: 45.4954438605777, lng: -122.90922458360529 },
            { lat: 45.495495401200614, lng: -122.90920288996614 },
            { lat: 45.495953873868423, lng: -122.90903397288781 },
            { lat: 45.495993083524986, lng: -122.90924915973605 },
            { lat: 45.49552931161503, lng: -122.90942030396297 },
            { lat: 45.495518889692946, lng: -122.90942898676602 },
            { lat: 45.495510819061948, lng: -122.90944335420133 },
            { lat: 45.495507167184329, lng: -122.90945972574607 },
            { lat: 45.495507938647975, lng: -122.90947808083195 },
            { lat: 45.4953660568922, lng: -122.90958661712459 },
            { lat: 45.495363239240632, lng: -122.90957612786424 },
            { lat: 45.495358879095733, lng: -122.90956695049591 },
            { lat: 45.495352469970925, lng: -122.90955869034819 },
            { lat: 45.495345619583155, lng: -122.90955341946308 },
            { lat: 45.4953372506576, lng: -122.9095503089534 },
            { lat: 45.495329462523273, lng: -122.90955013908354 },
            { lat: 45.495321030437232, lng: -122.90955288313891 },
            { lat: 45.495314069571833, lng: -122.90955785277757 },
            { lat: 45.495266985969039, lng: -122.90960536998665 },
            { lat: 45.49522306038579, lng: -122.90965723185857 },
            { lat: 45.49517918672359, lng: -122.90971784102355 },
            { lat: 45.495141460915107, lng: -122.90977877626023 },
            { lat: 45.4950991458317, lng: -122.90986004923508 },
            { lat: 45.4949312633458, lng: -122.910224593993 },
            { lat: 45.494806777508572, lng: -122.91008913112879 }];
        var Tract132379shape = new google.maps.Polygon({
            paths: [Tract132379coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132379shape.setMap(map);

        var Tract132380center = new google.maps.LatLng(45.495504594878, -122.90992927472);
        var Tract132380coords0 = [
            { lat: 45.4953660568922, lng: -122.90958661712459 },
            { lat: 45.495507938647975, lng: -122.90947808083195 },
            { lat: 45.495552318886155, lng: -122.90973105964 },
            { lat: 45.4955830791132, lng: -122.90993735395283 },
            { lat: 45.495606309279559, lng: -122.91012666084046 },
            { lat: 45.495642290238372, lng: -122.91047384923762 },
            { lat: 45.495483389598, lng: -122.91046514466984 },
            { lat: 45.495451877561116, lng: -122.91016122967478 },
            { lat: 45.495431928033035, lng: -122.90999701293487 },
            { lat: 45.49540220434946, lng: -122.90979470904249 },
            { lat: 45.4953660568922, lng: -122.90958661712459 }];
        var Tract132380shape = new google.maps.Polygon({
            paths: [Tract132380coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132380shape.setMap(map);

        var Tract132375center = new google.maps.LatLng(45.4959440719599, -122.911533583398);
        var Tract132375coords0 = [
            { lat: 45.495768387801476, lng: -122.91153889490647 },
            { lat: 45.495930187043157, lng: -122.91152281176144 },
            { lat: 45.495942076784893, lng: -122.91151675868362 },
            { lat: 45.495953334224154, lng: -122.91150571911986 },
            { lat: 45.495962109407621, lng: -122.91149080572885 },
            { lat: 45.495967451509017, lng: -122.91147453435534 },
            { lat: 45.49596972530464, lng: -122.91145838738143 },
            { lat: 45.49596936485527, lng: -122.91144192787949 },
            { lat: 45.495892527997121, lng: -122.9106963747363 },
            { lat: 45.495963084462296, lng: -122.91068167247458 },
            { lat: 45.496046026895925, lng: -122.91148734209355 },
            { lat: 45.496053364365494, lng: -122.91158137691531 },
            { lat: 45.496057395576685, lng: -122.9116702428452 },
            { lat: 45.495986148592443, lng: -122.91167450707758 },
            { lat: 45.495982398169375, lng: -122.9116501628599 },
            { lat: 45.495972829204831, lng: -122.91162874683461 },
            { lat: 45.495958637702493, lng: -122.91161336561304 },
            { lat: 45.495941578841141, lng: -122.9116059215113 },
            { lat: 45.495772194663012, lng: -122.91162061257489 },
            { lat: 45.495773440080455, lng: -122.91157947848237 },
            { lat: 45.495768387801476, lng: -122.91153889490647 }];
        var Tract132375shape = new google.maps.Polygon({
            paths: [Tract132375coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132375shape.setMap(map);

        var Tract132376center = new google.maps.LatLng(45.4958331468565, -122.909880860077);
        var Tract132376coords0 = [
            { lat: 45.495716207188913, lng: -122.90935116004871 },
            { lat: 45.495785241478067, lng: -122.90932572814523 },
            { lat: 45.495832817109587, lng: -122.90961428808507 },
            { lat: 45.495873872095736, lng: -122.90989633743412 },
            { lat: 45.4959097986544, lng: -122.91017983653805 },
            { lat: 45.495940416163869, lng: -122.91046172982601 },
            { lat: 45.4958698597264, lng: -122.91047643235497 },
            { lat: 45.495837641314068, lng: -122.91018108859869 },
            { lat: 45.495801920818806, lng: -122.90990139904021 },
            { lat: 45.495762502019595, lng: -122.90963175406301 },
            { lat: 45.495716207188913, lng: -122.90935116004871 }];
        var Tract132376shape = new google.maps.Polygon({
            paths: [Tract132376coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132376shape.setMap(map);

        var Tract132377center = new google.maps.LatLng(45.4956585425189, -122.908858682282);
        var Tract132377coords0 = [
            { lat: 45.495569109086759, lng: -122.9086180973863 },
            { lat: 45.495636967419806, lng: -122.90858693301398 },
            { lat: 45.495694075440376, lng: -122.90884933962593 },
            { lat: 45.4957460319627, lng: -122.9091105420313 },
            { lat: 45.49567699772043, lng: -122.90913597417868 },
            { lat: 45.49562603869532, lng: -122.90887975570051 },
            { lat: 45.495569109086759, lng: -122.9086180973863 }];
        var Tract132377shape = new google.maps.Polygon({
            paths: [Tract132377coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132377shape.setMap(map);

        var Tract132391center = new google.maps.LatLng(45.4960333033111, -122.911893044017);
        var Tract132391coords0 = [
            { lat: 45.495986148592443, lng: -122.91167450707758 },
            { lat: 45.496057395576685, lng: -122.9116702428452 },
            { lat: 45.496069878231985, lng: -122.91216430965537 },
            { lat: 45.495998614061186, lng: -122.9121679471868 },
            { lat: 45.495986148592443, lng: -122.91167450707758 }];
        var Tract132391shape = new google.maps.Polygon({
            paths: [Tract132391coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132391shape.setMap(map);

        var Lot132336center = new google.maps.LatLng(45.4958823361141, -122.911986037238);
        var markerLot132336 = new google.maps.Marker({
            position: Lot132336center,
            map: map,
            title: 'Lot132336'
        });
        markers.push(markerLot132336);
        var Lot132336coords0 = [
            { lat: 45.495769218454811, lng: -122.91192936510448 },
            { lat: 45.495992313014881, lng: -122.91191799398821 },
            { lat: 45.495995450467738, lng: -122.91204270976402 },
            { lat: 45.495772362450452, lng: -122.91205408005712 },
            { lat: 45.495769218454811, lng: -122.91192936510448 }];
        var Lot132336shape = new google.maps.Polygon({
            paths: [Lot132336coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132336shape.setMap(map);

        var Tract132385center = new google.maps.LatLng(45.4959133192922, -122.911628136953);
        var Tract132385coords0 = [
            { lat: 45.495762619852634, lng: -122.91166763150207 },
            { lat: 45.495768530685396, lng: -122.91164432228369 },
            { lat: 45.495772194663012, lng: -122.91162061257489 },
            { lat: 45.495933555010993, lng: -122.91160544441667 },
            { lat: 45.49594920742318, lng: -122.91160809500256 },
            { lat: 45.4959644051503, lng: -122.91161829116214 },
            { lat: 45.495976427294693, lng: -122.91163498624594 },
            { lat: 45.4959839551909, lng: -122.91165634903405 },
            { lat: 45.495762619852634, lng: -122.91166763150207 }];
        var Tract132385shape = new google.maps.Polygon({
            paths: [Tract132385coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132385shape.setMap(map);

        var Lot132030center = new google.maps.LatLng(45.4961167470599, -122.910935413161);
        var markerLot132030 = new google.maps.Marker({
            position: Lot132030center,
            map: map,
            title: 'Lot132030'
        });
        markers.push(markerLot132030);
        var Lot132030coords0 = [
            { lat: 45.495986945373957, lng: -122.91091319124162 },
            { lat: 45.496236606789374, lng: -122.91086116855635 },
            { lat: 45.496246548741148, lng: -122.91095763518146 },
            { lat: 45.495996887282729, lng: -122.91100965745196 },
            { lat: 45.495986945373957, lng: -122.91091319124162 }];
        var Lot132030shape = new google.maps.Polygon({
            paths: [Lot132030coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132030shape.setMap(map);

        var Lot132029center = new google.maps.LatLng(45.4961276831342, -122.911041526241);
        var markerLot132029 = new google.maps.Marker({
            position: Lot132029center,
            map: map,
            title: 'Lot132029'
        });
        markers.push(markerLot132029);
        var Lot132029coords0 = [
            { lat: 45.495996887282729, lng: -122.91100965745196 },
            { lat: 45.496246548741148, lng: -122.91095763518146 },
            { lat: 45.496258478976316, lng: -122.91107339517612 },
            { lat: 45.49600881746629, lng: -122.91112541694892 },
            { lat: 45.495996887282729, lng: -122.91100965745196 }];
        var Lot132029shape = new google.maps.Polygon({
            paths: [Lot132029coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132029shape.setMap(map);

        var Lot132032center = new google.maps.LatLng(45.4961956431771, -122.910652898985);
        var markerLot132032 = new google.maps.Marker({
            position: Lot132032center,
            map: map,
            title: 'Lot132032'
        });
        markers.push(markerLot132032);
        var Lot132032coords0 = [
            { lat: 45.495963084462296, lng: -122.91068167247458 },
            { lat: 45.49618199568971, lng: -122.91063606129225 },
            { lat: 45.496192748717959, lng: -122.91063668202902 },
            { lat: 45.496199813560636, lng: -122.9106401308115 },
            { lat: 45.496206746209864, lng: -122.91064660714875 },
            { lat: 45.496212251683019, lng: -122.91065542947253 },
            { lat: 45.496215669170127, lng: -122.91066487376348 },
            { lat: 45.496226664756577, lng: -122.91076470196502 },
            { lat: 45.495977003384148, lng: -122.91081672506508 },
            { lat: 45.495963084462296, lng: -122.91068167247458 }];
        var Lot132032shape = new google.maps.Polygon({
            paths: [Lot132032coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132032shape.setMap(map);

        var Tract132382center = new google.maps.LatLng(45.4961352461471, -122.911114910979);
        var Tract132382coords0 = [
            { lat: 45.49600881746629, lng: -122.91112541694892 },
            { lat: 45.496258478976316, lng: -122.91107339517612 },
            { lat: 45.496261674826769, lng: -122.91110440496084 },
            { lat: 45.496012013302938, lng: -122.9111564266003 },
            { lat: 45.49600881746629, lng: -122.91112541694892 }];
        var Tract132382shape = new google.maps.Polygon({
            paths: [Tract132382coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132382shape.setMap(map);

        var Lot132027center = new google.maps.LatLng(45.4961537449537, -122.911294408913);
        var markerLot132027 = new google.maps.Marker({
            position: Lot132027center,
            map: map,
            title: 'Lot132027'
        });
        markers.push(markerLot132027);
        var Lot132027coords0 = [
            { lat: 45.496023943338528, lng: -122.91127218615888 },
            { lat: 45.496273604914, lng: -122.91122016501718 },
            { lat: 45.496283546564207, lng: -122.9113166317679 },
            { lat: 45.496033884945746, lng: -122.91136865249487 },
            { lat: 45.496023943338528, lng: -122.91127218615888 }];
        var Lot132027shape = new google.maps.Polygon({
            paths: [Lot132027coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132027shape.setMap(map);

        var Lot132028center = new google.maps.LatLng(45.4961428091131, -122.911188295736);
        var markerLot132028 = new google.maps.Marker({
            position: Lot132028center,
            map: map,
            title: 'Lot132028'
        });
        markers.push(markerLot132028);
        var Lot132028coords0 = [
            { lat: 45.496012013302938, lng: -122.9111564266003 },
            { lat: 45.496261674826769, lng: -122.91110440496084 },
            { lat: 45.496273604914, lng: -122.91122016501718 },
            { lat: 45.496023943338528, lng: -122.91127218615888 },
            { lat: 45.496012013302938, lng: -122.9111564266003 }];
        var Lot132028shape = new google.maps.Polygon({
            paths: [Lot132028coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132028shape.setMap(map);

        var Tract132381center = new google.maps.LatLng(45.4961014336064, -122.911605648106);
        var Tract132381coords0 = [
            { lat: 45.496053364365494, lng: -122.91158137691531 },
            { lat: 45.496305417909412, lng: -122.91152885873834 },
            { lat: 45.49631527042439, lng: -122.91162446318064 },
            { lat: 45.496056243359035, lng: -122.91163766718221 },
            { lat: 45.496053364365494, lng: -122.91158137691531 }];
        var Tract132381shape = new google.maps.Polygon({
            paths: [Tract132381coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132381shape.setMap(map);

        var Lot132025center = new google.maps.LatLng(45.4960768361359, -122.911517853962);
        var markerLot132025 = new google.maps.Marker({
            position: Lot132025center,
            map: map,
            title: 'Lot132025'
        });
        markers.push(markerLot132025);
        var Lot132025coords0 = [
            { lat: 45.496043826471926, lng: -122.91146511886458 },
            { lat: 45.496293488133389, lng: -122.91141309855239 },
            { lat: 45.496305417909412, lng: -122.91152885873834 },
            { lat: 45.496053364365494, lng: -122.91158137691531 },
            { lat: 45.496043826471926, lng: -122.91146511886458 }];
        var Lot132025shape = new google.maps.Polygon({
            paths: [Lot132025coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132025shape.setMap(map);

        var Lot132026center = new google.maps.LatLng(45.4961636865419, -122.911390875473);
        var markerLot132026 = new google.maps.Marker({
            position: Lot132026center,
            map: map,
            title: 'Lot132026'
        });
        markers.push(markerLot132026);
        var Lot132026coords0 = [
            { lat: 45.496033884945746, lng: -122.91136865249487 },
            { lat: 45.496283546564207, lng: -122.9113166317679 },
            { lat: 45.496293488133389, lng: -122.91141309855239 },
            { lat: 45.496043826471926, lng: -122.91146511886458 },
            { lat: 45.496033884945746, lng: -122.91136865249487 }];
        var Lot132026shape = new google.maps.Polygon({
            paths: [Lot132026coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132026shape.setMap(map);

        var Lot132031center = new google.maps.LatLng(45.4961068050891, -122.91083894676);
        var markerLot132031 = new google.maps.Marker({
            position: Lot132031center,
            map: map,
            title: 'Lot132031'
        });
        markers.push(markerLot132031);
        var Lot132031coords0 = [
            { lat: 45.495977003384148, lng: -122.91081672506508 },
            { lat: 45.496226664756577, lng: -122.91076470196502 },
            { lat: 45.496236606789374, lng: -122.91086116855635 },
            { lat: 45.495986945373957, lng: -122.91091319124162 },
            { lat: 45.495977003384148, lng: -122.91081672506508 }];
        var Lot132031shape = new google.maps.Polygon({
            paths: [Lot132031coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132031shape.setMap(map);

        var Lot132333center = new google.maps.LatLng(45.496110134955, -122.911673993164);
        var markerLot132333 = new google.maps.Marker({
            position: Lot132333center,
            map: map,
            title: 'Lot132333'
        });
        markers.push(markerLot132333);
        var Lot132333coords0 = [
            { lat: 45.496056243359035, lng: -122.91163766718221 },
            { lat: 45.49631527042439, lng: -122.91162446318064 },
            { lat: 45.496327272082993, lng: -122.91174092304931 },
            { lat: 45.496059548853353, lng: -122.91175456979244 },
            { lat: 45.496056243359035, lng: -122.91163766718221 }];
        var Lot132333shape = new google.maps.Polygon({
            paths: [Lot132333coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132333shape.setMap(map);

        var Lot132332center = new google.maps.LatLng(45.4961965249032, -122.911796367428);
        var markerLot132332 = new google.maps.Marker({
            position: Lot132332center,
            map: map,
            title: 'Lot132332'
        });
        markers.push(markerLot132332);
        var Lot132332coords0 = [
            { lat: 45.496059548853353, lng: -122.91175456979244 },
            { lat: 45.496327272082993, lng: -122.91174092304931 },
            { lat: 45.49633727337492, lng: -122.91183797297739 },
            { lat: 45.49606200525961, lng: -122.91185200383833 },
            { lat: 45.496059548853353, lng: -122.91175456979244 }];
        var Lot132332shape = new google.maps.Polygon({
            paths: [Lot132332coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132332shape.setMap(map);

        var Lot132331center = new google.maps.LatLng(45.4962027537112, -122.911893609427);
        var markerLot132331 = new google.maps.Marker({
            position: Lot132331center,
            map: map,
            title: 'Lot132331'
        });
        markers.push(markerLot132331);
        var Lot132331coords0 = [
            { lat: 45.49606200525961, lng: -122.91185200383833 },
            { lat: 45.49633727337492, lng: -122.91183797297739 },
            { lat: 45.496347274584863, lng: -122.91193502293969 },
            { lat: 45.496064461583209, lng: -122.91194943789262 },
            { lat: 45.49606200525961, lng: -122.91185200383833 }];
        var Lot132331shape = new google.maps.Polygon({
            paths: [Lot132331coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132331shape.setMap(map);

        var Lot132330center = new google.maps.LatLng(45.4962089824368, -122.911990851447);
        var markerLot132330 = new google.maps.Marker({
            position: Lot132330center,
            map: map,
            title: 'Lot132330'
        });
        markers.push(markerLot132330);
        var Lot132330coords0 = [
            { lat: 45.496064461583209, lng: -122.91194943789262 },
            { lat: 45.496347274584863, lng: -122.91193502293969 },
            { lat: 45.496357275712768, lng: -122.91203207293613 },
            { lat: 45.496066917824159, lng: -122.91204687195534 },
            { lat: 45.496064461583209, lng: -122.91194943789262 }];
        var Lot132330shape = new google.maps.Polygon({
            paths: [Lot132330coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132330shape.setMap(map);

        var Lot132329center = new google.maps.LatLng(45.4963247770612, -122.91212993934);
        var markerLot132329 = new google.maps.Marker({
            position: Lot132329center,
            map: map,
            title: 'Lot132329'
        });
        markers.push(markerLot132329);
        var Lot132329coords0 = [
            { lat: 45.496066917824159, lng: -122.91204687195534 },
            { lat: 45.496357275712768, lng: -122.91203207293613 },
            { lat: 45.496368415582268, lng: -122.91214907133698 },
            { lat: 45.496069878231985, lng: -122.91216430965537 },
            { lat: 45.496066917824159, lng: -122.91204687195534 }];
        var Lot132329shape = new google.maps.Polygon({
            paths: [Lot132329coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132329shape.setMap(map);

        var Tract132389center = new google.maps.LatLng(45.4956947217058, -122.911763863077);
        var Tract132389coords0 = [
            { lat: 45.495608908285611, lng: -122.91177561608711 },
            { lat: 45.495630905857681, lng: -122.9117805863378 },
            { lat: 45.495654788396223, lng: -122.911780038317 },
            { lat: 45.495676574839877, lng: -122.91177409601083 },
            { lat: 45.4956989048094, lng: -122.91176203944927 },
            { lat: 45.495717974118378, lng: -122.91174592261105 },
            { lat: 45.495736093181264, lng: -122.91172379279425 },
            { lat: 45.495751136777088, lng: -122.91169741222788 },
            { lat: 45.495762619852634, lng: -122.91166763150207 },
            { lat: 45.495775519909856, lng: -122.91217933450443 },
            { lat: 45.495619286904329, lng: -122.91218730899803 },
            { lat: 45.495608908285611, lng: -122.91177561608711 }];
        var Tract132389shape = new google.maps.Polygon({
            paths: [Tract132389coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132389shape.setMap(map);

        var Tract132390center = new google.maps.LatLng(45.4953754456106, -122.911986047591);
        var Tract132390coords0 = [
            { lat: 45.495331631018821, lng: -122.9117721619284 },
            { lat: 45.495389190653725, lng: -122.9117692279894 },
            { lat: 45.495400012498351, lng: -122.91219850119577 },
            { lat: 45.495342452964415, lng: -122.91220143913337 },
            { lat: 45.495331631018821, lng: -122.9117721619284 }];
        var Tract132390shape = new google.maps.Polygon({
            paths: [Tract132390coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132390shape.setMap(map);

        var Tract132393center = new google.maps.LatLng(45.4955210904943, -122.912215282755);
        var Tract132393coords0 = [
            { lat: 45.494687460524226, lng: -122.91223487065106 },
            { lat: 45.496368415582268, lng: -122.91214907133698 },
            { lat: 45.49636536908357, lng: -122.9121644702106 },
            { lat: 45.49635907265931, lng: -122.91217688031901 },
            { lat: 45.496350208475867, lng: -122.91218555802715 },
            { lat: 45.49633897898272, lng: -122.91218958223742 },
            { lat: 45.49472201382774, lng: -122.91227212988308 },
            { lat: 45.494710772917465, lng: -122.91227003668511 },
            { lat: 45.494700022262052, lng: -122.9122622061366 },
            { lat: 45.494691848876947, lng: -122.91224956011025 },
            { lat: 45.494687460524226, lng: -122.91223487065106 }];
        var Tract132393shape = new google.maps.Polygon({
            paths: [Tract132393coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132393shape.setMap(map);

        var Lot132343center = new google.maps.LatLng(45.4950122416615, -122.912003367479);
        var markerLot132343 = new google.maps.Marker({
            position: Lot132343center,
            map: map,
            title: 'Lot132343'
        });
        markers.push(markerLot132343);
        var Lot132343coords0 = [
            { lat: 45.494945159158974, lng: -122.91179186107922 },
            { lat: 45.495068501246735, lng: -122.91178557414531 },
            { lat: 45.495079323653812, lng: -122.91221486962944 },
            { lat: 45.494955981782368, lng: -122.91222116513164 },
            { lat: 45.494945159158974, lng: -122.91179186107922 }];
        var Lot132343shape = new google.maps.Polygon({
            paths: [Lot132343coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132343shape.setMap(map);

        var Lot132345center = new google.maps.LatLng(45.4946920461998, -122.91187766212);
        var markerLot132345 = new google.maps.Marker({
            position: Lot132345center,
            map: map,
            title: 'Lot132345'
        });
        markers.push(markerLot132345);
        var Lot132345coords0 = [
            { lat: 45.494677152180962, lng: -122.91185295429885 },
            { lat: 45.494678898343281, lng: -122.91183718884892 },
            { lat: 45.494684132079286, lng: -122.91182307025475 },
            { lat: 45.494692292385409, lng: -122.91181211188746 },
            { lat: 45.494702504559136, lng: -122.91180548837501 },
            { lat: 45.494821817066686, lng: -122.91179814798583 },
            { lat: 45.494832639906406, lng: -122.91222746060652 },
            { lat: 45.494687460524226, lng: -122.91223487065106 },
            { lat: 45.494677152180962, lng: -122.91185295429885 }];
        var Lot132345shape = new google.maps.Polygon({
            paths: [Lot132345coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132345shape.setMap(map);

        var Lot132344center = new google.maps.LatLng(45.4948888996797, -122.912009658684);
        var markerLot132344 = new google.maps.Marker({
            position: Lot132344center,
            map: map,
            title: 'Lot132344'
        });
        markers.push(markerLot132344);
        var Lot132344coords0 = [
            { lat: 45.494821817066686, lng: -122.91179814798583 },
            { lat: 45.494945159158974, lng: -122.91179186107922 },
            { lat: 45.494955981782368, lng: -122.91222116513164 },
            { lat: 45.494832639906406, lng: -122.91222746060652 },
            { lat: 45.494821817066686, lng: -122.91179814798583 }];
        var Lot132344shape = new google.maps.Polygon({
            paths: [Lot132344coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132344shape.setMap(map);

        var Lot132342center = new google.maps.LatLng(45.4951355836389, -122.911997076248);
        var markerLot132342 = new google.maps.Marker({
            position: Lot132342center,
            map: map,
            title: 'Lot132342'
        });
        markers.push(markerLot132342);
        var Lot132342coords0 = [
            { lat: 45.495068501246735, lng: -122.91178557414531 },
            { lat: 45.495191843329977, lng: -122.91177928718412 },
            { lat: 45.495202665520729, lng: -122.91220857409988 },
            { lat: 45.495079323653812, lng: -122.91221486962944 },
            { lat: 45.495068501246735, lng: -122.91178557414531 }];
        var Lot132342shape = new google.maps.Polygon({
            paths: [Lot132342coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132342shape.setMap(map);

        var Lot132341center = new google.maps.LatLng(45.4952671484095, -122.91199036557);
        var markerLot132341 = new google.maps.Marker({
            position: Lot132341center,
            map: map,
            title: 'Lot132341'
        });
        markers.push(markerLot132341);
        var Lot132341coords0 = [
            { lat: 45.495191843329977, lng: -122.91177928718412 },
            { lat: 45.495331631018821, lng: -122.9117721619284 },
            { lat: 45.495342452964415, lng: -122.91220143913337 },
            { lat: 45.495202665520729, lng: -122.91220857409988 },
            { lat: 45.495191843329977, lng: -122.91177928718412 }];
        var Lot132341shape = new google.maps.Polygon({
            paths: [Lot132341coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132341shape.setMap(map);

        var Lot132340center = new google.maps.LatLng(45.4955753138504, -122.911772910382);
        var markerLot132340 = new google.maps.Marker({
            position: Lot132340center,
            map: map,
            title: 'Lot132340'
        });
        markers.push(markerLot132340);
        var Lot132340coords0 = [
            { lat: 45.495389190653725, lng: -122.9117692279894 },
            { lat: 45.49556708116247, lng: -122.91176034347853 },
            { lat: 45.495582831268955, lng: -122.91176353829781 },
            { lat: 45.495608908285611, lng: -122.91177561608711 },
            { lat: 45.495612199145071, lng: -122.91190614960196 },
            { lat: 45.495392924340329, lng: -122.91191732599613 },
            { lat: 45.495389190653725, lng: -122.9117692279894 }];
        var Lot132340shape = new google.maps.Polygon({
            paths: [Lot132340coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132340shape.setMap(map);

        var Lot132339center = new google.maps.LatLng(45.495504330268, -122.911981889639);
        var markerLot132339 = new google.maps.Marker({
            position: Lot132339center,
            map: map,
            title: 'Lot132339'
        });
        markers.push(markerLot132339);
        var Lot132339coords0 = [
            { lat: 45.495392924340329, lng: -122.91191732599613 },
            { lat: 45.495612199145071, lng: -122.91190614960196 },
            { lat: 45.4956157361592, lng: -122.91204645353548 },
            { lat: 45.495396461341009, lng: -122.91205762938888 },
            { lat: 45.495392924340329, lng: -122.91191732599613 }];
        var Lot132339shape = new google.maps.Polygon({
            paths: [Lot132339coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132339shape.setMap(map);

        var Lot132338center = new google.maps.LatLng(45.4955078742475, -122.912122473288);
        var markerLot132338 = new google.maps.Marker({
            position: Lot132338center,
            map: map,
            title: 'Lot132338'
        });
        markers.push(markerLot132338);
        var Lot132338coords0 = [
            { lat: 45.495396461341009, lng: -122.91205762938888 },
            { lat: 45.4956157361592, lng: -122.91204645353548 },
            { lat: 45.495619286904329, lng: -122.91218730899803 },
            { lat: 45.495400012498351, lng: -122.91219850119577 },
            { lat: 45.495396461341009, lng: -122.91205762938888 }];
        var Lot132338shape = new google.maps.Polygon({
            paths: [Lot132338coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132338shape.setMap(map);

        var Lot132337center = new google.maps.LatLng(45.4958854867396, -122.912111017888);
        var markerLot132337 = new google.maps.Marker({
            position: Lot132337center,
            map: map,
            title: 'Lot132337'
        });
        markers.push(markerLot132337);
        var Lot132337coords0 = [
            { lat: 45.495772362450452, lng: -122.91205408005712 },
            { lat: 45.495995450467738, lng: -122.91204270976402 },
            { lat: 45.495998614061186, lng: -122.9121679471868 },
            { lat: 45.495775519909856, lng: -122.91217933450443 },
            { lat: 45.495772362450452, lng: -122.91205408005712 }];
        var Lot132337shape = new google.maps.Polygon({
            paths: [Lot132337coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132337shape.setMap(map);

        var Lot132335center = new google.maps.LatLng(45.4958791936834, -122.911861321964);
        var markerLot132335 = new google.maps.Marker({
            position: Lot132335center,
            map: map,
            title: 'Lot132335'
        });
        markers.push(markerLot132335);
        var Lot132335coords0 = [
            { lat: 45.495766074323726, lng: -122.91180465016565 },
            { lat: 45.49598916887166, lng: -122.91179327856034 },
            { lat: 45.495992313014881, lng: -122.91191799398821 },
            { lat: 45.495769218454811, lng: -122.91192936510448 },
            { lat: 45.495766074323726, lng: -122.91180465016565 }];
        var Lot132335shape = new google.maps.Polygon({
            paths: [Lot132335coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132335shape.setMap(map);

        var Lot132334center = new google.maps.LatLng(45.495959482794, -122.911680862449);
        var markerLot132334 = new google.maps.Marker({
            position: Lot132334center,
            map: map,
            title: 'Lot132334'
        });
        markers.push(markerLot132334);
        var Lot132334coords0 = [
            { lat: 45.495762619852634, lng: -122.91166763150207 },
            { lat: 45.4959839551909, lng: -122.91165634903405 },
            { lat: 45.495986093260889, lng: -122.91167300885607 },
            { lat: 45.49598916887166, lng: -122.91179327856034 },
            { lat: 45.495766074323726, lng: -122.91180465016565 },
            { lat: 45.495762619852634, lng: -122.91166763150207 }];
        var Lot132334shape = new google.maps.Polygon({
            paths: [Lot132334coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132334shape.setMap(map);

        var Lot132042center = new google.maps.LatLng(45.4959358578315, -122.909449242552);
        var markerLot132042 = new google.maps.Marker({
            position: Lot132042center,
            map: map,
            title: 'Lot132042'
        });
        markers.push(markerLot132042);
        var Lot132042coords0 = [
            { lat: 45.495805930013972, lng: -122.9094470065545 },
            { lat: 45.49605214567395, lng: -122.90936840909315 },
            { lat: 45.496065801500485, lng: -122.90945198244614 },
            { lat: 45.495819599880413, lng: -122.90953057506448 },
            { lat: 45.495805930013972, lng: -122.9094470065545 }];
        var Lot132042shape = new google.maps.Polygon({
            paths: [Lot132042coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132042shape.setMap(map);

        var Lot132041center = new google.maps.LatLng(45.4959492989946, -122.909532884596);
        var markerLot132041 = new google.maps.Marker({
            position: Lot132041center,
            map: map,
            title: 'Lot132041'
        });
        markers.push(markerLot132041);
        var Lot132041coords0 = [
            { lat: 45.495819599880413, lng: -122.90953057506448 },
            { lat: 45.496065801500485, lng: -122.90945198244614 },
            { lat: 45.49607901878607, lng: -122.90953569581117 },
            { lat: 45.495832817109587, lng: -122.90961428808507 },
            { lat: 45.495819599880413, lng: -122.90953057506448 }];
        var Lot132041shape = new google.maps.Polygon({
            paths: [Lot132041coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132041shape.setMap(map);

        var Lot132040center = new google.maps.LatLng(45.495962294565, -122.909616668859);
        var markerLot132040 = new google.maps.Marker({
            position: Lot132040center,
            map: map,
            title: 'Lot132040'
        });
        markers.push(markerLot132040);
        var Lot132040coords0 = [
            { lat: 45.495832817109587, lng: -122.90961428808507 },
            { lat: 45.49607901878607, lng: -122.90953569581117 },
            { lat: 45.496091797530326, lng: -122.90961954918639 },
            { lat: 45.495845581701239, lng: -122.90969814561431 },
            { lat: 45.495832817109587, lng: -122.90961428808507 }];
        var Lot132040shape = new google.maps.Polygon({
            paths: [Lot132040coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132040shape.setMap(map);

        var Lot132039center = new google.maps.LatLng(45.495976220613, -122.90971007617);
        var markerLot132039 = new google.maps.Marker({
            position: Lot132039center,
            map: map,
            title: 'Lot132039'
        });
        markers.push(markerLot132039);
        var Lot132039coords0 = [
            { lat: 45.495845581701239, lng: -122.90969814561431 },
            { lat: 45.496091797530326, lng: -122.90961954918639 },
            { lat: 45.496106881050835, lng: -122.90972265153727 },
            { lat: 45.49586062857545, lng: -122.9098012592151 },
            { lat: 45.495845581701239, lng: -122.90969814561431 }];
        var Lot132039shape = new google.maps.Polygon({
            paths: [Lot132039coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132039shape.setMap(map);

        var Tract132383center = new google.maps.LatLng(45.495999238313, -122.909811247001);
        var Tract132383coords0 = [
            { lat: 45.49586062857545, lng: -122.9098012592151 },
            { lat: 45.496106881050835, lng: -122.90972265153727 },
            { lat: 45.496122790007348, lng: -122.9098369014236 },
            { lat: 45.495873872095736, lng: -122.90989633743412 },
            { lat: 45.49586062857545, lng: -122.9098012592151 }];
        var Tract132383shape = new google.maps.Polygon({
            paths: [Tract132383coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132383shape.setMap(map);

        var Lot132038center = new google.maps.LatLng(45.4960051889878, -122.909918042506);
        var markerLot132038 = new google.maps.Marker({
            position: Lot132038center,
            map: map,
            title: 'Lot132038'
        });
        markers.push(markerLot132038);
        var Lot132038coords0 = [
            { lat: 45.495873872095736, lng: -122.90989633743412 },
            { lat: 45.496122790007348, lng: -122.9098369014236 },
            { lat: 45.496136475597844, lng: -122.90994040443341 },
            { lat: 45.495887603357936, lng: -122.909999829087 },
            { lat: 45.495873872095736, lng: -122.90989633743412 }];
        var Lot132038shape = new google.maps.Polygon({
            paths: [Lot132038coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132038shape.setMap(map);

        var Lot132037center = new google.maps.LatLng(45.4960173711526, -122.910012090929);
        var markerLot132037 = new google.maps.Marker({
            position: Lot132037center,
            map: map,
            title: 'Lot132037'
        });
        markers.push(markerLot132037);
        var Lot132037coords0 = [
            { lat: 45.495887603357936, lng: -122.909999829087 },
            { lat: 45.496136475597844, lng: -122.90994040443341 },
            { lat: 45.496147133031087, lng: -122.91002485814411 },
            { lat: 45.495898282121786, lng: -122.91008427733553 },
            { lat: 45.495887603357936, lng: -122.909999829087 }];
        var Lot132037shape = new google.maps.Polygon({
            paths: [Lot132037coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132037shape.setMap(map);

        var Lot132036center = new google.maps.LatLng(45.4960278151608, -122.910096595778);
        var markerLot132036 = new google.maps.Marker({
            position: Lot132036center,
            map: map,
            title: 'Lot132036'
        });
        markers.push(markerLot132036);
        var Lot132036coords0 = [
            { lat: 45.495898282121786, lng: -122.91008427733553 },
            { lat: 45.496147133031087, lng: -122.91002485814411 },
            { lat: 45.4961573471856, lng: -122.91010941771506 },
            { lat: 45.495908503356539, lng: -122.91016883484595 },
            { lat: 45.495898282121786, lng: -122.91008427733553 }];
        var Lot132036shape = new google.maps.Polygon({
            paths: [Lot132036coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132036shape.setMap(map);

        var Lot132035center = new google.maps.LatLng(45.4960378087819, -122.910181208141);
        var markerLot132035 = new google.maps.Marker({
            position: Lot132035center,
            map: map,
            title: 'Lot132035'
        });
        markers.push(markerLot132035);
        var Lot132035coords0 = [
            { lat: 45.495908503356539, lng: -122.91016883484595 },
            { lat: 45.4961573471856, lng: -122.91010941771506 },
            { lat: 45.496167118098022, lng: -122.91019408313547 },
            { lat: 45.495918267102553, lng: -122.91025350160662 },
            { lat: 45.495908503356539, lng: -122.91016883484595 }];
        var Lot132035shape = new google.maps.Polygon({
            paths: [Lot132035coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132035shape.setMap(map);

        var Lot132034center = new google.maps.LatLng(45.4960473520168, -122.910265928014);
        var markerLot132034 = new google.maps.Marker({
            position: Lot132034center,
            map: map,
            title: 'Lot132034'
        });
        markers.push(markerLot132034);
        var Lot132034coords0 = [
            { lat: 45.495918267102553, lng: -122.91025350160662 },
            { lat: 45.496167118098022, lng: -122.91019408313547 },
            { lat: 45.496176445731251, lng: -122.91027885441227 },
            { lat: 45.495927573319008, lng: -122.91033827762523 },
            { lat: 45.495918267102553, lng: -122.91025350160662 }];
        var Lot132034shape = new google.maps.Polygon({
            paths: [Lot132034coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132034shape.setMap(map);

        var Lot132033center = new google.maps.LatLng(45.4961568383702, -122.91038943558);
        var markerLot132033 = new google.maps.Marker({
            position: Lot132033center,
            map: map,
            title: 'Lot132033'
        });
        markers.push(markerLot132033);
        var Lot132033coords0 = [
            { lat: 45.495927573319008, lng: -122.91033827762523 },
            { lat: 45.496176445731251, lng: -122.91027885441227 },
            { lat: 45.496185567517387, lng: -122.91036598127046 },
            { lat: 45.496185658483391, lng: -122.91037660159459 },
            { lat: 45.496183388508889, lng: -122.91038915973181 },
            { lat: 45.496178150929822, lng: -122.91040117438935 },
            { lat: 45.496170543579218, lng: -122.91041027428997 },
            { lat: 45.496162130653069, lng: -122.91041527675861 },
            { lat: 45.495940416163869, lng: -122.91046172982601 },
            { lat: 45.495927573319008, lng: -122.91033827762523 }];
        var Lot132033shape = new google.maps.Polygon({
            paths: [Lot132033coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132033shape.setMap(map);

        var Lot132043center = new google.maps.LatLng(45.4959983381384, -122.909274765407);
        var markerLot132043 = new google.maps.Marker({
            position: Lot132043center,
            map: map,
            title: 'Lot132043'
        });
        markers.push(markerLot132043);
        var Lot132043coords0 = [
            { lat: 45.495785241478067, lng: -122.90932572814523 },
            { lat: 45.495998683395648, lng: -122.90924709683249 },
            { lat: 45.49601023803578, lng: -122.90924599407944 },
            { lat: 45.496017500058777, lng: -122.90924848052865 },
            { lat: 45.49602483119132, lng: -122.90925399875998 },
            { lat: 45.496030360172426, lng: -122.90926114025368 },
            { lat: 45.496034925418705, lng: -122.90927098794896 },
            { lat: 45.49605214567395, lng: -122.90936840909315 },
            { lat: 45.495805930013972, lng: -122.9094470065545 },
            { lat: 45.495785241478067, lng: -122.90932572814523 }];
        var Lot132043shape = new google.maps.Polygon({
            paths: [Lot132043coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132043shape.setMap(map);

        var Lot132065center = new google.maps.LatLng(45.4958409170868, -122.911298354468);
        var markerLot132065 = new google.maps.Marker({
            position: Lot132065center,
            map: map,
            title: 'Lot132065'
        });
        markers.push(markerLot132065);
        var Lot132065coords0 = [
            { lat: 45.495723292195471, lng: -122.91125979940639 },
            { lat: 45.495945816658541, lng: -122.91121343295558 },
            { lat: 45.495958541964683, lng: -122.91133690968871 },
            { lat: 45.49573601745255, lng: -122.91138327566634 },
            { lat: 45.495723292195471, lng: -122.91125979940639 }];
        var Lot132065shape = new google.maps.Polygon({
            paths: [Lot132065coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132065shape.setMap(map);

        var Lot132064center = new google.maps.LatLng(45.4958281917388, -122.911174877999);
        var markerLot132064 = new google.maps.Marker({
            position: Lot132064center,
            map: map,
            title: 'Lot132064'
        });
        markers.push(markerLot132064);
        var Lot132064coords0 = [
            { lat: 45.495710566805613, lng: -122.91113632320176 },
            { lat: 45.495933091219641, lng: -122.91108995627772 },
            { lat: 45.495945816658541, lng: -122.91121343295558 },
            { lat: 45.495723292195471, lng: -122.91125979940639 },
            { lat: 45.495710566805613, lng: -122.91113632320176 }];
        var Lot132064shape = new google.maps.Polygon({
            paths: [Lot132064coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132064shape.setMap(map);

        var Lot132063center = new google.maps.LatLng(45.495815466258, -122.911051401586);
        var markerLot132063 = new google.maps.Marker({
            position: Lot132063center,
            map: map,
            title: 'Lot132063'
        });
        markers.push(markerLot132063);
        var Lot132063coords0 = [
            { lat: 45.495697841283018, lng: -122.91101284705245 },
            { lat: 45.495920365647976, lng: -122.91096647965522 },
            { lat: 45.495933091219641, lng: -122.91108995627772 },
            { lat: 45.495710566805613, lng: -122.91113632320176 },
            { lat: 45.495697841283018, lng: -122.91101284705245 }];
        var Lot132063shape = new google.maps.Polygon({
            paths: [Lot132063coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132063shape.setMap(map);

        var Lot132062center = new google.maps.LatLng(45.4958027406445, -122.910927925227);
        var markerLot132062 = new google.maps.Marker({
            position: Lot132062center,
            map: map,
            title: 'Lot132062'
        });
        markers.push(markerLot132062);
        var Lot132062coords0 = [
            { lat: 45.495685115627651, lng: -122.91088937095844 },
            { lat: 45.49590763994356, lng: -122.91084300308803 },
            { lat: 45.495920365647976, lng: -122.91096647965522 },
            { lat: 45.495697841283018, lng: -122.91101284705245 },
            { lat: 45.495685115627651, lng: -122.91088937095844 }];
        var Lot132062shape = new google.maps.Polygon({
            paths: [Lot132062coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132062shape.setMap(map);

        var Lot132061center = new google.maps.LatLng(45.4956935939851, -122.910757027151);
        var markerLot132061 = new google.maps.Marker({
            position: Lot132061center,
            map: map,
            title: 'Lot132061'
        });
        markers.push(markerLot132061);
        var Lot132061coords0 = [
            { lat: 45.495674551607678, lng: -122.910782904641 },
            { lat: 45.49567648011984, lng: -122.91076718193845 },
            { lat: 45.4956818766588, lng: -122.9107531875588 },
            { lat: 45.495690162770188, lng: -122.91074242155862 },
            { lat: 45.495699612050139, lng: -122.91073635462246 },
            { lat: 45.495892527997121, lng: -122.9106963747363 },
            { lat: 45.49590763994356, lng: -122.91084300308803 },
            { lat: 45.495685115627651, lng: -122.91088937095844 },
            { lat: 45.495674551607678, lng: -122.910782904641 }];
        var Lot132061shape = new google.maps.Polygon({
            paths: [Lot132061coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132061shape.setMap(map);

        var Lot132066center = new google.maps.LatLng(45.4958803149414, -122.911490390542);
        var markerLot132066 = new google.maps.Marker({
            position: Lot132066center,
            map: map,
            title: 'Lot132066'
        });
        markers.push(markerLot132066);
        var Lot132066coords0 = [
            { lat: 45.49573601745255, lng: -122.91138327566634 },
            { lat: 45.495958541964683, lng: -122.91133690968871 },
            { lat: 45.495969664589595, lng: -122.91144543186726 },
            { lat: 45.495968235259184, lng: -122.91147072304479 },
            { lat: 45.495963009423953, lng: -122.91148869198045 },
            { lat: 45.495954598546859, lng: -122.91150402390269 },
            { lat: 45.495943613576245, lng: -122.9115156051344 },
            { lat: 45.495930852436842, lng: -122.91152259444203 },
            { lat: 45.495768387801476, lng: -122.91153889490647 },
            { lat: 45.49576199179765, lng: -122.91151427216808 },
            { lat: 45.495749808780772, lng: -122.91148253832191 },
            { lat: 45.495745287383038, lng: -122.9114663508104 },
            { lat: 45.49573601745255, lng: -122.91138327566634 }];
        var Lot132066shape = new google.maps.Polygon({
            paths: [Lot132066coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132066shape.setMap(map);

        var Lot132059center = new google.maps.LatLng(45.4958025485412, -122.910270840752);
        var markerLot132059 = new google.maps.Marker({
            position: Lot132059center,
            map: map,
            title: 'Lot132059'
        });
        markers.push(markerLot132059);
        var Lot132059coords0 = [
            { lat: 45.495619227262871, lng: -122.910250082507 },
            { lat: 45.495839613137584, lng: -122.91019782111398 },
            { lat: 45.4958539526567, lng: -122.91032461164909 },
            { lat: 45.495631947229484, lng: -122.9103734964507 },
            { lat: 45.495619227262871, lng: -122.910250082507 }];
        var Lot132059shape = new google.maps.Polygon({
            paths: [Lot132059coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132059shape.setMap(map);

        var Lot132058center = new google.maps.LatLng(45.4957288262962, -122.910151120125);
        var markerLot132058 = new google.maps.Marker({
            position: Lot132058center,
            map: map,
            title: 'Lot132058'
        });
        markers.push(markerLot132058);
        var Lot132058coords0 = [
            { lat: 45.495606309279559, lng: -122.91012666084046 },
            { lat: 45.495824239098589, lng: -122.91007127593475 },
            { lat: 45.495839613137584, lng: -122.91019782111398 },
            { lat: 45.495619227262871, lng: -122.910250082507 },
            { lat: 45.495606309279559, lng: -122.91012666084046 }];
        var Lot132058shape = new google.maps.Polygon({
            paths: [Lot132058coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132058shape.setMap(map);

        var Lot132057center = new google.maps.LatLng(45.4956906729838, -122.910042499224);
        var markerLot132057 = new google.maps.Marker({
            position: Lot132057center,
            map: map,
            title: 'Lot132057'
        });
        markers.push(markerLot132057);
        var Lot132057coords0 = [
            { lat: 45.495591747008504, lng: -122.91000359924629 },
            { lat: 45.49580783261321, lng: -122.9099449931788 },
            { lat: 45.495824239098589, lng: -122.91007127593475 },
            { lat: 45.495606309279559, lng: -122.91012666084046 },
            { lat: 45.495591747008504, lng: -122.91000359924629 }];
        var Lot132057shape = new google.maps.Polygon({
            paths: [Lot132057coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132057shape.setMap(map);

        var Tract132384center = new google.maps.LatLng(45.4956858390055, -122.909945821096);
        var Tract132384coords0 = [
            { lat: 45.495583898507626, lng: -122.90994343045998 },
            { lat: 45.495799410818051, lng: -122.90988316939951 },
            { lat: 45.49580783261321, lng: -122.9099449931788 },
            { lat: 45.495591747008504, lng: -122.91000359924629 },
            { lat: 45.495583898507626, lng: -122.90994343045998 }];
        var Tract132384shape = new google.maps.Polygon({
            paths: [Tract132384coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132384shape.setMap(map);

        var Lot132056center = new google.maps.LatLng(45.4956661217417, -122.909857507924);
        var markerLot132056 = new google.maps.Marker({
            position: Lot132056center,
            map: map,
            title: 'Lot132056'
        });
        markers.push(markerLot132056);
        var Lot132056coords0 = [
            { lat: 45.4955664550611, lng: -122.90982112752438 },
            { lat: 45.49578146975778, lng: -122.90975730934693 },
            { lat: 45.495799410818051, lng: -122.90988316939951 },
            { lat: 45.495583898507626, lng: -122.90994343045998 },
            { lat: 45.4955664550611, lng: -122.90982112752438 }];
        var Lot132056shape = new google.maps.Polygon({
            paths: [Lot132056coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132056shape.setMap(map);

        var Lot132055center = new google.maps.LatLng(45.4956477196915, -122.909733933418);
        var markerLot132055 = new google.maps.Marker({
            position: Lot132055center,
            map: map,
            title: 'Lot132055'
        });
        markers.push(markerLot132055);
        var Lot132055coords0 = [
            { lat: 45.495547089298533, lng: -122.90969941147013 },
            { lat: 45.495762502019595, lng: -122.90963175406301 },
            { lat: 45.49578146975778, lng: -122.90975730934693 },
            { lat: 45.4955664550611, lng: -122.90982112752438 },
            { lat: 45.495547089298533, lng: -122.90969941147013 }];
        var Lot132055shape = new google.maps.Polygon({
            paths: [Lot132055coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132055shape.setMap(map);

        var Lot132054center = new google.maps.LatLng(45.4956391959769, -122.909611443558);
        var markerLot132054 = new google.maps.Marker({
            position: Lot132054center,
            map: map,
            title: 'Lot132054'
        });
        markers.push(markerLot132054);
        var Lot132054coords0 = [
            { lat: 45.495525895103178, lng: -122.90957831203607 },
            { lat: 45.49574250942721, lng: -122.90950651600087 },
            { lat: 45.495762502019595, lng: -122.90963175406301 },
            { lat: 45.495547089298533, lng: -122.90969941147013 },
            { lat: 45.495525895103178, lng: -122.90957831203607 }];
        var Lot132054shape = new google.maps.Polygon({
            paths: [Lot132054coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132054shape.setMap(map);

        var Lot132053center = new google.maps.LatLng(45.4955435907666, -122.909443141318);
        var markerLot132053 = new google.maps.Marker({
            position: Lot132053center,
            map: map,
            title: 'Lot132053'
        });
        markers.push(markerLot132053);
        var Lot132053coords0 = [
            { lat: 45.495506878612659, lng: -122.90946640547138 },
            { lat: 45.495508371003304, lng: -122.90945181685635 },
            { lat: 45.495512862255772, lng: -122.90943852970062 },
            { lat: 45.495519941620543, lng: -122.90942775918739 },
            { lat: 45.495528961650919, lng: -122.90942049034017 },
            { lat: 45.495716207188913, lng: -122.90935116004871 },
            { lat: 45.49574250942721, lng: -122.90950651600087 },
            { lat: 45.495525895103178, lng: -122.90957831203607 },
            { lat: 45.495507820246523, lng: -122.90947739945983 },
            { lat: 45.495506878612659, lng: -122.90946640547138 }];
        var Lot132053shape = new google.maps.Polygon({
            paths: [Lot132053coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132053shape.setMap(map);

        var Lot132060center = new google.maps.LatLng(45.4956794364517, -122.910490134624);
        var markerLot132060 = new google.maps.Marker({
            position: Lot132060center,
            map: map,
            title: 'Lot132060'
        });
        markers.push(markerLot132060);
        var Lot132060coords0 = [
            { lat: 45.495631947229484, lng: -122.9103734964507 },
            { lat: 45.4958539526567, lng: -122.91032461164909 },
            { lat: 45.4958698597264, lng: -122.91047643235497 },
            { lat: 45.495695342010329, lng: -122.91051255469988 },
            { lat: 45.495676784985626, lng: -122.91051552191253 },
            { lat: 45.495666511465423, lng: -122.91051353680439 },
            { lat: 45.495658589854521, lng: -122.91050859633938 },
            { lat: 45.495652406517038, lng: -122.9105018613314 },
            { lat: 45.495647451929479, lng: -122.91049331556673 },
            { lat: 45.495643981833048, lng: -122.91048340015296 },
            { lat: 45.495631947229484, lng: -122.9103734964507 }];
        var Lot132060shape = new google.maps.Polygon({
            paths: [Lot132060coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132060shape.setMap(map);

        var Lot132090center = new google.maps.LatLng(45.4949962394176, -122.910217631107);
        var markerLot132090 = new google.maps.Marker({
            position: Lot132090center,
            map: map,
            title: 'Lot132090'
        });
        markers.push(markerLot132090);
        var Lot132090coords0 = [
            { lat: 45.494925664059735, lng: -122.91025140261191 },
            { lat: 45.494926961793304, lng: -122.91023800731355 },
            { lat: 45.494930797543475, lng: -122.91022563423896 },
            { lat: 45.4950501062493, lng: -122.90996645500303 },
            { lat: 45.495111319616065, lng: -122.9100163642875 },
            { lat: 45.495176614508921, lng: -122.91006051682056 },
            { lat: 45.495077174294217, lng: -122.91039026282016 },
            { lat: 45.495009589974664, lng: -122.91034542132559 },
            { lat: 45.494941104693538, lng: -122.91029201717272 },
            { lat: 45.494934535766831, lng: -122.91028401491548 },
            { lat: 45.494929584567615, lng: -122.91027392956835 },
            { lat: 45.494926774626819, lng: -122.91026360025498 },
            { lat: 45.494925664059735, lng: -122.91025140261191 }];
        var Lot132090shape = new google.maps.Polygon({
            paths: [Lot132090coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132090shape.setMap(map);

        var Lot132088center = new google.maps.LatLng(45.4954169880774, -122.910410906461);
        var markerLot132088 = new google.maps.Marker({
            position: Lot132088center,
            map: map,
            title: 'Lot132088'
        });
        markers.push(markerLot132088);
        var Lot132088coords0 = [
            { lat: 45.495248066349674, lng: -122.9104731461313 },
            { lat: 45.495311070903966, lng: -122.91012572789505 },
            { lat: 45.495380257123266, lng: -122.91014714168115 },
            { lat: 45.495451877561116, lng: -122.91016122967478 },
            { lat: 45.495483604368324, lng: -122.91046769524486 },
            { lat: 45.4954818205405, lng: -122.91048834394837 },
            { lat: 45.495474738564646, lng: -122.91050515638091 },
            { lat: 45.49546590116433, lng: -122.91051499610865 },
            { lat: 45.495456155031427, lng: -122.91052002471409 },
            { lat: 45.495448392446519, lng: -122.91052093692389 },
            { lat: 45.495428537175265, lng: -122.91051848023849 },
            { lat: 45.495382989869206, lng: -122.91051088568557 },
            { lat: 45.495337683687737, lng: -122.91050078774846 },
            { lat: 45.495292686659717, lng: -122.91048820159557 },
            { lat: 45.495248066349674, lng: -122.9104731461313 }];
        var Lot132088shape = new google.maps.Polygon({
            paths: [Lot132088coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132088shape.setMap(map);

        var Lot132089center = new google.maps.LatLng(45.4952004032038, -122.910274811312);
        var markerLot132089 = new google.maps.Marker({
            position: Lot132089center,
            map: map,
            title: 'Lot132089'
        });
        markers.push(markerLot132089);
        var Lot132089coords0 = [
            { lat: 45.495077174294217, lng: -122.91039026282016 },
            { lat: 45.495176614508921, lng: -122.91006051682056 },
            { lat: 45.495241812218914, lng: -122.91009621250251 },
            { lat: 45.495311070903966, lng: -122.91012572789505 },
            { lat: 45.495248066349674, lng: -122.9104731461313 },
            { lat: 45.495162791369758, lng: -122.91043696695698 },
            { lat: 45.495119664574553, lng: -122.91041479442192 },
            { lat: 45.495077174294217, lng: -122.91039026282016 }];
        var Lot132089shape = new google.maps.Polygon({
            paths: [Lot132089coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132089shape.setMap(map);

        var Tract132387center = new google.maps.LatLng(45.4953262713165, -122.909743023699);
        var Tract132387coords0 = [
            { lat: 45.495131285050185, lng: -122.9097969115132 },
            { lat: 45.495163051957618, lng: -122.90974277711894 },
            { lat: 45.495196780420095, lng: -122.90969235222749 },
            { lat: 45.495235817029133, lng: -122.90964134079694 },
            { lat: 45.495273995483991, lng: -122.90959780070136 },
            { lat: 45.495310661685053, lng: -122.90956104040848 },
            { lat: 45.495321951186135, lng: -122.90955242406061 },
            { lat: 45.495329570440155, lng: -122.90955012416434 },
            { lat: 45.49533821635621, lng: -122.90955050723595 },
            { lat: 45.495346519639988, lng: -122.90955395511774 },
            { lat: 45.495353951702207, lng: -122.90956024831792 },
            { lat: 45.495361059726328, lng: -122.90957098057108 },
            { lat: 45.495365586362226, lng: -122.90958424339429 },
            { lat: 45.495399961711129, lng: -122.9097808784168 },
            { lat: 45.495428342738862, lng: -122.90997038531789 },
            { lat: 45.495451877561116, lng: -122.91016122967478 },
            { lat: 45.495393154798613, lng: -122.91015027602252 },
            { lat: 45.495331100558978, lng: -122.9101327362152 },
            { lat: 45.495384670704325, lng: -122.90993741282369 },
            { lat: 45.495131285050185, lng: -122.9097969115132 }];
        var Tract132387shape = new google.maps.Polygon({
            paths: [Tract132387coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132387shape.setMap(map);

        var Lot132091center = new google.maps.LatLng(45.4951765282292, -122.910016036223);
        var markerLot132091 = new google.maps.Marker({
            position: Lot132091center,
            map: map,
            title: 'Lot132091'
        });
        markers.push(markerLot132091);
        var Lot132091coords0 = [
            { lat: 45.4950501062493, lng: -122.90996645500303 },
            { lat: 45.495102436163, lng: -122.90985312548092 },
            { lat: 45.495131285050185, lng: -122.9097969115132 },
            { lat: 45.495384670704325, lng: -122.90993741282369 },
            { lat: 45.495331100558978, lng: -122.9101327362152 },
            { lat: 45.495256992989653, lng: -122.91010340012082 },
            { lat: 45.495184940164812, lng: -122.91006552501183 },
            { lat: 45.495116874699278, lng: -122.91002047023854 },
            { lat: 45.4950501062493, lng: -122.90996645500303 }];
        var Lot132091shape = new google.maps.Polygon({
            paths: [Lot132091coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132091shape.setMap(map);

        var Lot132095center = new google.maps.LatLng(45.4947789074688, -122.909551639882);
        var markerLot132095 = new google.maps.Marker({
            position: Lot132095center,
            map: map,
            title: 'Lot132095'
        });
        markers.push(markerLot132095);
        var Lot132095coords0 = [
            { lat: 45.494675745266477, lng: -122.90965459317766 },
            { lat: 45.494738361958049, lng: -122.90951872381798 },
            { lat: 45.494767679567545, lng: -122.9094591599568 },
            { lat: 45.494991172552808, lng: -122.90969187393507 },
            { lat: 45.494963839954551, lng: -122.9097479743798 },
            { lat: 45.494907515523607, lng: -122.90987031765363 },
            { lat: 45.494675745266477, lng: -122.90965459317766 }];
        var Lot132095shape = new google.maps.Polygon({
            paths: [Lot132095coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132095shape.setMap(map);

        var Lot132094center = new google.maps.LatLng(45.4949250672344, -122.90947445769);
        var markerLot132094 = new google.maps.Marker({
            position: Lot132094center,
            map: map,
            title: 'Lot132094'
        });
        markers.push(markerLot132094);
        var Lot132094coords0 = [
            { lat: 45.494767679567545, lng: -122.9094591599568 },
            { lat: 45.494798422734455, lng: -122.90940205109112 },
            { lat: 45.49482785123682, lng: -122.90935174648702 },
            { lat: 45.494858623711487, lng: -122.90930309486806 },
            { lat: 45.494890694273138, lng: -122.90925616878211 },
            { lat: 45.495085592697812, lng: -122.90953606813312 },
            { lat: 45.495037072792172, lng: -122.90961020894939 },
            { lat: 45.494991172552808, lng: -122.90969187393507 },
            { lat: 45.494767679567545, lng: -122.9094591599568 }];
        var Lot132094shape = new google.maps.Polygon({
            paths: [Lot132094coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132094shape.setMap(map);

        var Lot132093center = new google.maps.LatLng(45.4950458544394, -122.909308584186);
        var markerLot132093 = new google.maps.Marker({
            position: Lot132093center,
            map: map,
            title: 'Lot132093'
        });
        markers.push(markerLot132093);
        var Lot132093coords0 = [
            { lat: 45.494890694273138, lng: -122.90925616878211 },
            { lat: 45.494927384514348, lng: -122.90920666470461 },
            { lat: 45.494962022163413, lng: -122.90916358515966 },
            { lat: 45.494997803719819, lng: -122.90912243918349 },
            { lat: 45.495034675828755, lng: -122.90908328813357 },
            { lat: 45.495196105924506, lng: -122.90940337394773 },
            { lat: 45.495138452211656, lng: -122.90946727043668 },
            { lat: 45.495085592697812, lng: -122.90953606813312 },
            { lat: 45.494890694273138, lng: -122.90925616878211 }];
        var Lot132093shape = new google.maps.Polygon({
            paths: [Lot132093coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132093shape.setMap(map);

        var Lot132092center = new google.maps.LatLng(45.4951820848751, -122.909169826651);
        var markerLot132092 = new google.maps.Marker({
            position: Lot132092center,
            map: map,
            title: 'Lot132092'
        });
        markers.push(markerLot132092);
        var Lot132092coords0 = [
            { lat: 45.495034675828755, lng: -122.90908328813357 },
            { lat: 45.495076395668939, lng: -122.90904262680027 },
            { lat: 45.495115376314814, lng: -122.90900784961974 },
            { lat: 45.495155272196882, lng: -122.90897523824655 },
            { lat: 45.495196023824896, lng: -122.90894484131331 },
            { lat: 45.495319948708683, lng: -122.90929710970808 },
            { lat: 45.495255931879264, lng: -122.90934728454921 },
            { lat: 45.495196105924506, lng: -122.90940337394773 },
            { lat: 45.495034675828755, lng: -122.90908328813357 }];
        var Lot132092shape = new google.maps.Polygon({
            paths: [Lot132092coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132092shape.setMap(map);

        var Tract132388center = new google.maps.LatLng(45.4953240042182, -122.909058648954);
        var Tract132388coords0 = [
            { lat: 45.495196023824896, lng: -122.90894484131331 },
            { lat: 45.49527409479402, lng: -122.90889422479012 },
            { lat: 45.495355575835838, lng: -122.90885123277172 },
            { lat: 45.495433405483745, lng: -122.90922956309254 },
            { lat: 45.495376959241426, lng: -122.90925997892035 },
            { lat: 45.495319948708683, lng: -122.90929710970808 },
            { lat: 45.495196023824896, lng: -122.90894484131331 }];
        var Tract132388shape = new google.maps.Polygon({
            paths: [Tract132388coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132388shape.setMap(map);

        var Lot132096center = new google.maps.LatLng(45.4947360991445, -122.910045310684);
        var markerLot132096 = new google.maps.Marker({
            position: Lot132096center,
            map: map,
            title: 'Lot132096'
        });
        markers.push(markerLot132096);
        var Lot132096coords0 = [
            { lat: 45.494590122238122, lng: -122.90984057574613 },
            { lat: 45.494675745266477, lng: -122.90965459317766 },
            { lat: 45.494907515523607, lng: -122.90987031765363 },
            { lat: 45.494805274045042, lng: -122.91009214149781 },
            { lat: 45.494799856217661, lng: -122.91010009848618 },
            { lat: 45.494792533109944, lng: -122.910106644772 },
            { lat: 45.494784290750786, lng: -122.91011037648535 },
            { lat: 45.494775653851065, lng: -122.91011105606559 },
            { lat: 45.494765542632294, lng: -122.91010779577606 },
            { lat: 45.494756579228451, lng: -122.91010038675446 },
            { lat: 45.494695455770824, lng: -122.91001733069442 },
            { lat: 45.494640647149588, lng: -122.90993153369966 },
            { lat: 45.494590122238122, lng: -122.90984057574613 }];
        var Lot132096shape = new google.maps.Polygon({
            paths: [Lot132096coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132096shape.setMap(map);

        var Lot132052center = new google.maps.LatLng(45.4955304506467, -122.90916017591);
        var markerLot132052 = new google.maps.Marker({
            position: Lot132052center,
            map: map,
            title: 'Lot132052'
        });
        markers.push(markerLot132052);
        var Lot132052coords0 = [
            { lat: 45.495406197726581, lng: -122.90909730523694 },
            { lat: 45.49564967405464, lng: -122.90899567331809 },
            { lat: 45.49567699772043, lng: -122.90913597417868 },
            { lat: 45.495489078431241, lng: -122.90920530074854 },
            { lat: 45.495433405483745, lng: -122.90922956309254 },
            { lat: 45.495406197726581, lng: -122.90909730523694 }];
        var Lot132052shape = new google.maps.Polygon({
            paths: [Lot132052coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132052shape.setMap(map);

        var Lot132051center = new google.maps.LatLng(45.4955853023892, -122.908967698091);
        var markerLot132051 = new google.maps.Marker({
            position: Lot132051center,
            map: map,
            title: 'Lot132051'
        });
        markers.push(markerLot132051);
        var Lot132051coords0 = [
            { lat: 45.495386947710173, lng: -122.90900373076067 },
            { lat: 45.49563064997411, lng: -122.9089020041303 },
            { lat: 45.49564967405464, lng: -122.90899567331809 },
            { lat: 45.495406197726581, lng: -122.90909730523694 },
            { lat: 45.495386947710173, lng: -122.90900373076067 }];
        var Lot132051shape = new google.maps.Polygon({
            paths: [Lot132051coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132051shape.setMap(map);

        var Lot132050center = new google.maps.LatLng(45.4955659793799, -122.908874153411);
        var markerLot132050 = new google.maps.Marker({
            position: Lot132050center,
            map: map,
            title: 'Lot132050'
        });
        markers.push(markerLot132050);
        var Lot132050coords0 = [
            { lat: 45.495367697617425, lng: -122.90891015634783 },
            { lat: 45.495611045843333, lng: -122.90880857710094 },
            { lat: 45.49563064997411, lng: -122.9089020041303 },
            { lat: 45.495386947710173, lng: -122.90900373076067 },
            { lat: 45.495367697617425, lng: -122.90891015634783 }];
        var Lot132050shape = new google.maps.Polygon({
            paths: [Lot132050coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132050shape.setMap(map);

        var Lot132049center = new google.maps.LatLng(45.4955319452033, -122.908776653336);
        var markerLot132049 = new google.maps.Marker({
            position: Lot132049center,
            map: map,
            title: 'Lot132049'
        });
        markers.push(markerLot132049);
        var Lot132049coords0 = [
            { lat: 45.495344597405413, lng: -122.90879786713609 },
            { lat: 45.495586755116157, lng: -122.90869678436226 },
            { lat: 45.495611045843333, lng: -122.90880857710094 },
            { lat: 45.495367697617425, lng: -122.90891015634783 },
            { lat: 45.495344597405413, lng: -122.90879786713609 }];
        var Lot132049shape = new google.maps.Polygon({
            paths: [Lot132049coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132049shape.setMap(map);

        var Lot132072center = new google.maps.LatLng(45.4948673807327, -122.911397792116);
        var markerLot132072 = new google.maps.Marker({
            position: Lot132072center,
            map: map,
            title: 'Lot132072'
        });
        markers.push(markerLot132072);
        var Lot132072coords0 = [
            { lat: 45.494801287415925, lng: -122.91122555863208 },
            { lat: 45.494924629477573, lng: -122.91121927048481 },
            { lat: 45.494933473790496, lng: -122.91157002599991 },
            { lat: 45.494810131709961, lng: -122.91157631338677 },
            { lat: 45.494801287415925, lng: -122.91122555863208 }];
        var Lot132072shape = new google.maps.Polygon({
            paths: [Lot132072coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132072shape.setMap(map);

        var Lot132071center = new google.maps.LatLng(45.4949846308137, -122.911356694222);
        var markerLot132071 = new google.maps.Marker({
            position: Lot132071center,
            map: map,
            title: 'Lot132071'
        });
        markers.push(markerLot132071);
        var Lot132071coords0 = [
            { lat: 45.494924629477573, lng: -122.91121927048481 },
            { lat: 45.49504797153471, lng: -122.91121298231019 },
            { lat: 45.495056815866526, lng: -122.91156373858574 },
            { lat: 45.494933473790496, lng: -122.91157002599991 },
            { lat: 45.494924629477573, lng: -122.91121927048481 }];
        var Lot132071shape = new google.maps.Polygon({
            paths: [Lot132071coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132071shape.setMap(map);

        var Lot132070center = new google.maps.LatLng(45.4951231535587, -122.911349632438);
        var markerLot132070 = new google.maps.Marker({
            position: Lot132070center,
            map: map,
            title: 'Lot132070'
        });
        markers.push(markerLot132070);
        var Lot132070coords0 = [
            { lat: 45.49504797153471, lng: -122.91121298231019 },
            { lat: 45.495171313587292, lng: -122.9112066941083 },
            { lat: 45.495180157938016, lng: -122.91155745114426 },
            { lat: 45.495056815866526, lng: -122.91156373858574 },
            { lat: 45.49504797153471, lng: -122.91121298231019 }];
        var Lot132070shape = new google.maps.Polygon({
            paths: [Lot132070coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132070shape.setMap(map);

        var Lot132069center = new google.maps.LatLng(45.4952374069256, -122.911378928691);
        var markerLot132069 = new google.maps.Marker({
            position: Lot132069center,
            map: map,
            title: 'Lot132069'
        });
        markers.push(markerLot132069);
        var Lot132069coords0 = [
            { lat: 45.495171313587292, lng: -122.9112066941083 },
            { lat: 45.495294655635355, lng: -122.91120040587909 },
            { lat: 45.495303500004994, lng: -122.91155116367551 },
            { lat: 45.495180157938016, lng: -122.91155745114426 },
            { lat: 45.495171313587292, lng: -122.9112066941083 }];
        var Lot132069shape = new google.maps.Polygon({
            paths: [Lot132069coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132069shape.setMap(map);

        var Lot132068center = new google.maps.LatLng(45.4953580680742, -122.911337656595);
        var markerLot132068 = new google.maps.Marker({
            position: Lot132068center,
            map: map,
            title: 'Lot132068'
        });
        markers.push(markerLot132068);
        var Lot132068coords0 = [
            { lat: 45.495294655635355, lng: -122.91120040587909 },
            { lat: 45.495417997678892, lng: -122.91119411762259 },
            { lat: 45.49542684206741, lng: -122.91154487617945 },
            { lat: 45.495303500004994, lng: -122.91155116367551 },
            { lat: 45.495294655635355, lng: -122.91120040587909 }];
        var Lot132068shape = new google.maps.Polygon({
            paths: [Lot132068coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132068shape.setMap(map);

        var Lot132067center = new google.maps.LatLng(45.4955730181001, -122.911508070667);
        var markerLot132067 = new google.maps.Marker({
            position: Lot132067center,
            map: map,
            title: 'Lot132067'
        });
        markers.push(markerLot132067);
        var Lot132067coords0 = [
            { lat: 45.495417997678892, lng: -122.91119411762259 },
            { lat: 45.495557785322731, lng: -122.91118699089888 },
            { lat: 45.495588546143026, lng: -122.91148673193561 },
            { lat: 45.495587961379059, lng: -122.91149900337443 },
            { lat: 45.495585235108827, lng: -122.91151067609786 },
            { lat: 45.49558054088763, lng: -122.91152100701645 },
            { lat: 45.495573464220229, lng: -122.91153003991447 },
            { lat: 45.495564914684259, lng: -122.9115359611461 },
            { lat: 45.495556416383351, lng: -122.91153825534909 },
            { lat: 45.49542684206741, lng: -122.91154487617945 },
            { lat: 45.495417997678892, lng: -122.91119411762259 }];
        var Lot132067shape = new google.maps.Polygon({
            paths: [Lot132067coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132067shape.setMap(map);

        var Lot132087center = new google.maps.LatLng(45.4954835142606, -122.910773718344);
        var markerLot132087 = new google.maps.Marker({
            position: Lot132087center,
            map: map,
            title: 'Lot132087'
        });
        markers.push(markerLot132087);
        var Lot132087coords0 = [
            { lat: 45.495347344340772, lng: -122.91119771969302 },
            { lat: 45.495385876161826, lng: -122.91073549638799 },
            { lat: 45.49543561235437, lng: -122.91074254375569 },
            { lat: 45.495486551222506, lng: -122.91074712014827 },
            { lat: 45.495497356316612, lng: -122.91075144188673 },
            { lat: 45.4955039865082, lng: -122.91075725426894 },
            { lat: 45.495510057457238, lng: -122.91076601573388 },
            { lat: 45.49551404627752, lng: -122.91077552848499 },
            { lat: 45.495516422019357, lng: -122.91078607595904 },
            { lat: 45.495557785322731, lng: -122.91118699089888 },
            { lat: 45.495347344340772, lng: -122.91119771969302 }];
        var Lot132087shape = new google.maps.Polygon({
            paths: [Lot132087coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132087shape.setMap(map);

        var Lot132085center = new google.maps.LatLng(45.4951553108612, -122.910734678059);
        var markerLot132085 = new google.maps.Marker({
            position: Lot132085center,
            map: map,
            title: 'Lot132085'
        });
        markers.push(markerLot132085);
        var Lot132085coords0 = [
            { lat: 45.494960262756727, lng: -122.91121745384626 },
            { lat: 45.495101642818355, lng: -122.91064211987539 },
            { lat: 45.495173739720393, lng: -122.9106747212991 },
            { lat: 45.495241966832218, lng: -122.9106998403914 },
            { lat: 45.495159508219366, lng: -122.91120729596858 },
            { lat: 45.494960262756727, lng: -122.91121745384626 }];
        var Lot132085shape = new google.maps.Polygon({
            paths: [Lot132085coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132085shape.setMap(map);

        var Lot132084center = new google.maps.LatLng(45.4950257643122, -122.910630823764);
        var markerLot132084 = new google.maps.Marker({
            position: Lot132084center,
            map: map,
            title: 'Lot132084'
        });
        markers.push(markerLot132084);
        var Lot132084coords0 = [
            { lat: 45.494829819331017, lng: -122.91097050876601 },
            { lat: 45.494966572165154, lng: -122.91056302112936 },
            { lat: 45.495035744446817, lng: -122.91060658892272 },
            { lat: 45.495101642818355, lng: -122.91064211987539 },
            { lat: 45.495004626223363, lng: -122.91103692211693 },
            { lat: 45.494829819331017, lng: -122.91097050876601 }];
        var Lot132084shape = new google.maps.Polygon({
            paths: [Lot132084coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132084shape.setMap(map);

        var Lot132082center = new google.maps.LatLng(45.4946869882227, -122.911043314792);
        var markerLot132082 = new google.maps.Marker({
            position: Lot132082center,
            map: map,
            title: 'Lot132082'
        });
        markers.push(markerLot132082);
        var Lot132082coords0 = [
            { lat: 45.494658820012631, lng: -122.91110870340073 },
            { lat: 45.494659713323472, lng: -122.91105894029519 },
            { lat: 45.49466238119836, lng: -122.91100930572638 },
            { lat: 45.494666816765125, lng: -122.91095992754779 },
            { lat: 45.494673008598213, lng: -122.91091093295259 },
            { lat: 45.495004626223363, lng: -122.91103692211693 },
            { lat: 45.494960262756727, lng: -122.91121745384626 },
            { lat: 45.49466149974058, lng: -122.91123268516603 },
            { lat: 45.494658820012631, lng: -122.91110870340073 }];
        var Lot132082shape = new google.maps.Polygon({
            paths: [Lot132082coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132082shape.setMap(map);

        var Lot132083center = new google.maps.LatLng(45.4947918204059, -122.910601270559);
        var markerLot132083 = new google.maps.Marker({
            position: Lot132083center,
            map: map,
            title: 'Lot132083'
        });
        markers.push(markerLot132083);
        var Lot132083coords0 = [
            { lat: 45.494673008598213, lng: -122.91091093295259 },
            { lat: 45.494682679428195, lng: -122.91085311206845 },
            { lat: 45.494693876395417, lng: -122.91080014400882 },
            { lat: 45.494707155434817, lng: -122.91074815759161 },
            { lat: 45.494724116579384, lng: -122.91069230352797 },
            { lat: 45.494739784335884, lng: -122.91064778730039 },
            { lat: 45.494759030438637, lng: -122.91059972260301 },
            { lat: 45.494808230631378, lng: -122.91049183951104 },
            { lat: 45.494814589517993, lng: -122.91048178524397 },
            { lat: 45.494822646236784, lng: -122.91047460153233 },
            { lat: 45.4948309240256, lng: -122.9104710318867 },
            { lat: 45.494839566697891, lng: -122.91047052182573 },
            { lat: 45.494848838585092, lng: -122.91047352742571 },
            { lat: 45.494913334369038, lng: -122.91052480863549 },
            { lat: 45.494966572165154, lng: -122.91056302112936 },
            { lat: 45.494829819331017, lng: -122.91097050876601 },
            { lat: 45.494673008598213, lng: -122.91091093295259 }];
        var Lot132083shape = new google.maps.Polygon({
            paths: [Lot132083coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132083shape.setMap(map);

        var Lot132073center = new google.maps.LatLng(45.4946860889097, -122.911555360822);
        var markerLot132073 = new google.maps.Marker({
            position: Lot132073center,
            map: map,
            title: 'Lot132073'
        });
        markers.push(markerLot132073);
        var Lot132073coords0 = [
            { lat: 45.49466149974058, lng: -122.91123268516603 },
            { lat: 45.494801287415925, lng: -122.91122555863208 },
            { lat: 45.494810131709961, lng: -122.91157631338677 },
            { lat: 45.4947001952214, lng: -122.91158151342763 },
            { lat: 45.494691752550644, lng: -122.91157883600113 },
            { lat: 45.494684772389128, lng: -122.91157392143765 },
            { lat: 45.494678752564596, lng: -122.91156689342765 },
            { lat: 45.494674003802729, lng: -122.911558114737 },
            { lat: 45.494670513699575, lng: -122.91154686092048 },
            { lat: 45.494669157740489, lng: -122.91153595497552 },
            { lat: 45.49466149974058, lng: -122.91123268516603 }];
        var Lot132073shape = new google.maps.Polygon({
            paths: [Lot132073coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132073shape.setMap(map);

        var Lot132086center = new google.maps.LatLng(45.4953047933859, -122.910779879767);
        var markerLot132086 = new google.maps.Marker({
            position: Lot132086center,
            map: map,
            title: 'Lot132086'
        });
        markers.push(markerLot132086);
        var Lot132086coords0 = [
            { lat: 45.495159508219366, lng: -122.91120729596858 },
            { lat: 45.495241966832218, lng: -122.9106998403914 },
            { lat: 45.495316131333368, lng: -122.91072108782818 },
            { lat: 45.495385876161826, lng: -122.91073549638799 },
            { lat: 45.495347344340772, lng: -122.91119771969302 },
            { lat: 45.495159508219366, lng: -122.91120729596858 }];
        var Lot132086shape = new google.maps.Polygon({
            paths: [Lot132086coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132086shape.setMap(map);

        var Lot132047center = new google.maps.LatLng(45.495792814766, -122.908693660658);
        var markerLot132047 = new google.maps.Marker({
            position: Lot132047center,
            map: map,
            title: 'Lot132047'
        });
        markers.push(markerLot132047);
        var Lot132047coords0 = [
            { lat: 45.495661850139861, lng: -122.90869847075375 },
            { lat: 45.495903746701678, lng: -122.90859627116977 },
            { lat: 45.495923832672887, lng: -122.9086894941824 },
            { lat: 45.495681953913028, lng: -122.90879168585002 },
            { lat: 45.495661850139861, lng: -122.90869847075375 }];
        var Lot132047shape = new google.maps.Polygon({
            paths: [Lot132047coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132047shape.setMap(map);

        var Lot132046center = new google.maps.LatLng(45.4958126284248, -122.908786999027);
        var markerLot132046 = new google.maps.Marker({
            position: Lot132046center,
            map: map,
            title: 'Lot132046'
        });
        markers.push(markerLot132046);
        var Lot132046coords0 = [
            { lat: 45.495681953913028, lng: -122.90879168585002 },
            { lat: 45.495923832672887, lng: -122.9086894941824 },
            { lat: 45.495943362286447, lng: -122.90878295228534 },
            { lat: 45.495701483444755, lng: -122.9088851435902 },
            { lat: 45.495681953913028, lng: -122.90879168585002 }];
        var Lot132046shape = new google.maps.Polygon({
            paths: [Lot132046coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132046shape.setMap(map);

        var Lot132045center = new google.maps.LatLng(45.4958318767774, -122.9088805762);
        var markerLot132045 = new google.maps.Marker({
            position: Lot132045center,
            map: map,
            title: 'Lot132045'
        });
        markers.push(markerLot132045);
        var Lot132045coords0 = [
            { lat: 45.495701483444755, lng: -122.9088851435902 },
            { lat: 45.495943362286447, lng: -122.90878295228534 },
            { lat: 45.495962335541812, lng: -122.90887664547601 },
            { lat: 45.495720438734452, lng: -122.90897884397175 },
            { lat: 45.495701483444755, lng: -122.9088851435902 }];
        var Lot132045shape = new google.maps.Polygon({
            paths: [Lot132045coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132045shape.setMap(map);

        var Lot132044center = new google.maps.LatLng(45.4959468568992, -122.909005868871);
        var markerLot132044 = new google.maps.Marker({
            position: Lot132044center,
            map: map,
            title: 'Lot132044'
        });
        markers.push(markerLot132044);
        var Lot132044coords0 = [
            { lat: 45.495720438734452, lng: -122.90897884397175 },
            { lat: 45.495962335541812, lng: -122.90887664547601 },
            { lat: 45.495981928214121, lng: -122.90897667726091 },
            { lat: 45.495983039874879, lng: -122.90898945020564 },
            { lat: 45.4959812687892, lng: -122.90900335963225 },
            { lat: 45.495977038235388, lng: -122.90901484605709 },
            { lat: 45.4959706735134, lng: -122.90902413154585 },
            { lat: 45.495961925138779, lng: -122.9090308453987 },
            { lat: 45.4957460319627, lng: -122.9091105420313 },
            { lat: 45.495720438734452, lng: -122.90897884397175 }];
        var Lot132044shape = new google.maps.Polygon({
            paths: [Lot132044coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132044shape.setMap(map);

        var Lot132048center = new google.maps.LatLng(45.4957703381975, -122.908591200972);
        var markerLot132048 = new google.maps.Marker({
            position: Lot132048center,
            map: map,
            title: 'Lot132048'
        });
        markers.push(markerLot132048);
        var Lot132048coords0 = [
            { lat: 45.495636967419806, lng: -122.90858693301398 },
            { lat: 45.495878908968187, lng: -122.90848471395203 },
            { lat: 45.495903746701678, lng: -122.90859627116977 },
            { lat: 45.495661850139861, lng: -122.90869847075375 },
            { lat: 45.495636967419806, lng: -122.90858693301398 }];
        var Lot132048shape = new google.maps.Polygon({
            paths: [Lot132048coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132048shape.setMap(map);

        var Block132327center = new google.maps.LatLng(45.4956072609148, -122.911857956201);
        var Block132327coords0 = [
            { lat: 45.494274992365341, lng: -122.9119040649679 },
            { lat: 45.494521676594125, lng: -122.91189149170822 },
            { lat: 45.494522629515608, lng: -122.9119292899679 },
            { lat: 45.494678862853711, lng: -122.91192132695079 },
            { lat: 45.494677152180962, lng: -122.91185295429885 },
            { lat: 45.494678898343281, lng: -122.91183718884892 },
            { lat: 45.494683118345932, lng: -122.91182507136155 },
            { lat: 45.494689517082044, lng: -122.91181506836047 },
            { lat: 45.494697602217094, lng: -122.91180794950202 },
            { lat: 45.494706751660658, lng: -122.91180426253021 },
            { lat: 45.495564628213415, lng: -122.9117603171908 },
            { lat: 45.495581642548387, lng: -122.91176310844949 },
            { lat: 45.495605232491222, lng: -122.91177418735666 },
            { lat: 45.4956190351038, lng: -122.91177857303536 },
            { lat: 45.495634316261281, lng: -122.91178088213452 },
            { lat: 45.495651386481128, lng: -122.91178049043276 },
            { lat: 45.495669949822606, lng: -122.9117764744372 },
            { lat: 45.495686329529796, lng: -122.91176962957474 },
            { lat: 45.495701957770187, lng: -122.91175985806686 },
            { lat: 45.495717974118378, lng: -122.91174592261105 },
            { lat: 45.49573245091301, lng: -122.91172891930954 },
            { lat: 45.49574403225273, lng: -122.91171108360338 },
            { lat: 45.49575391162886, lng: -122.91169128563153 },
            { lat: 45.495762619852634, lng: -122.91166763150207 },
            { lat: 45.4959839551909, lng: -122.91165634903405 },
            { lat: 45.495986148592443, lng: -122.91167450707758 },
            { lat: 45.496057395576685, lng: -122.91167024284518 },
            { lat: 45.496056243359035, lng: -122.91163766718221 },
            { lat: 45.49631527042439, lng: -122.91162446318064 },
            { lat: 45.496368445662782, lng: -122.91214859522685 },
            { lat: 45.496365723667054, lng: -122.91216340017725 },
            { lat: 45.496359072659295, lng: -122.91217688031901 },
            { lat: 45.496350208475839, lng: -122.91218555802715 },
            { lat: 45.496338978982706, lng: -122.91218958223742 },
            { lat: 45.494284833486496, lng: -122.91229444333152 },
            { lat: 45.494274992365341, lng: -122.9119040649679 }];
        var Block132327shape = new google.maps.Polygon({
            paths: [Block132327coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Block132327shape.setMap(map);

        var Block132021center = new google.maps.LatLng(45.4953330719472, -122.910257018895);
        var Block132021coords0 = [
            { lat: 45.494191768192827, lng: -122.90935641971687 },
            { lat: 45.494328278645035, lng: -122.90924808597767 },
            { lat: 45.494355485760074, lng: -122.90931399382207 },
            { lat: 45.49454140093038, lng: -122.90973876111927 },
            { lat: 45.494590122238122, lng: -122.90984057574613 },
            { lat: 45.494745407238966, lng: -122.90950390550067 },
            { lat: 45.494778238741524, lng: -122.90943897397271 },
            { lat: 45.494809925546591, lng: -122.9093819156314 },
            { lat: 45.494857116265827, lng: -122.9093053918003 },
            { lat: 45.49490745291898, lng: -122.90923303431 },
            { lat: 45.494960753916324, lng: -122.90916510420156 },
            { lat: 45.495020932980033, lng: -122.90909751307169 },
            { lat: 45.495062697618614, lng: -122.90905557124808 },
            { lat: 45.495101336998864, lng: -122.90902003245054 },
            { lat: 45.495140912549886, lng: -122.90898664129247 },
            { lat: 45.495181365259057, lng: -122.90895544756916 },
            { lat: 45.495222634805693, lng: -122.9089264977996 },
            { lat: 45.495269372989846, lng: -122.9088970155823 },
            { lat: 45.49531216351383, lng: -122.90887294067724 },
            { lat: 45.495355575835838, lng: -122.90885123277172 },
            { lat: 45.495344597405413, lng: -122.90879786713609 },
            { lat: 45.495586755116157, lng: -122.90869678436226 },
            { lat: 45.495569109086723, lng: -122.9086180973863 },
            { lat: 45.495636967419806, lng: -122.90858693301398 },
            { lat: 45.495878908968365, lng: -122.90848471395196 },
            { lat: 45.495934394007996, lng: -122.90873967481832 },
            { lat: 45.495982502255416, lng: -122.90898021701965 },
            { lat: 45.495982173510463, lng: -122.90899899738864 },
            { lat: 45.495976463770354, lng: -122.909015938671 },
            { lat: 45.495967103291356, lng: -122.90902749698294 },
            { lat: 45.495953873868423, lng: -122.90903397288781 },
            { lat: 45.495993083525, lng: -122.90924915973608 },
            { lat: 45.496006918945547, lng: -122.90924568755666 },
            { lat: 45.496019803430222, lng: -122.90924984426388 },
            { lat: 45.496030360172469, lng: -122.9092611402537 },
            { lat: 45.496036736861548, lng: -122.90927759350845 },
            { lat: 45.496077587691026, lng: -122.90952648909428 },
            { lat: 45.496115843313333, lng: -122.90978626581845 },
            { lat: 45.496154396165622, lng: -122.91008459585358 },
            { lat: 45.496185665187639, lng: -122.91036715595374 },
            { lat: 45.496184260629086, lng: -122.91038583574584 },
            { lat: 45.496177598449293, lng: -122.91040205871576 },
            { lat: 45.496166847610404, lng: -122.91041297834325 },
            { lat: 45.496153442308071, lng: -122.91041733927729 },
            { lat: 45.496176110690058, lng: -122.91063728273259 },
            { lat: 45.496190290658859, lng: -122.91063607323429 },
            { lat: 45.496202016264569, lng: -122.91064179722079 },
            { lat: 45.496211777116862, lng: -122.91065445796551 },
            { lat: 45.49621703462374, lng: -122.91067169273376 },
            { lat: 45.49631527042439, lng: -122.91162446318064 },
            { lat: 45.496056243359035, lng: -122.91163766718221 },
            { lat: 45.496057395576685, lng: -122.91167024284518 },
            { lat: 45.495986148592443, lng: -122.91167450707758 },
            { lat: 45.4959839551909, lng: -122.91165634903405 },
            { lat: 45.495762619852634, lng: -122.91166763150207 },
            { lat: 45.495754753014, lng: -122.91168932023311 },
            { lat: 45.495743975399265, lng: -122.91171118323297 },
            { lat: 45.49573114013598, lng: -122.91173067059164 },
            { lat: 45.495717900650618, lng: -122.91174599709895 },
            { lat: 45.495703389649705, lng: -122.91175878623744 },
            { lat: 45.495686244759696, lng: -122.91176967353533 },
            { lat: 45.495669861790866, lng: -122.91177650259768 },
            { lat: 45.495651296537787, lng: -122.9117805006876 },
            { lat: 45.495634226134996, lng: -122.91178087592476 },
            { lat: 45.495618946082622, lng: -122.91177855208721 },
            { lat: 45.495605423052787, lng: -122.91177426461398 },
            { lat: 45.495581136416483, lng: -122.91176293516023 },
            { lat: 45.495564107667555, lng: -122.91176032766336 },
            { lat: 45.494706673690409, lng: -122.91180427794697 },
            { lat: 45.494697530224954, lng: -122.91180799478047 },
            { lat: 45.494689456607283, lng: -122.91181514001678 },
            { lat: 45.494683074041617, lng: -122.91182516388231 },
            { lat: 45.4946788736183, lng: -122.91183729511532 },
            { lat: 45.49467715291977, lng: -122.91185306622465 },
            { lat: 45.494678862853711, lng: -122.91192132695079 },
            { lat: 45.494522629515608, lng: -122.9119292899679 },
            { lat: 45.494521676594125, lng: -122.91189149170822 },
            { lat: 45.494274992365341, lng: -122.9119040649679 },
            { lat: 45.494238794099225, lng: -122.91166571650808 },
            { lat: 45.494225488188128, lng: -122.91110081070103 },
            { lat: 45.494226601252166, lng: -122.9110373088117 },
            { lat: 45.494229489531307, lng: -122.9109739200932 },
            { lat: 45.494234775120155, lng: -122.91090374288297 },
            { lat: 45.494241392662424, lng: -122.9108409220065 },
            { lat: 45.494256308392615, lng: -122.91073721127914 },
            { lat: 45.494276023594438, lng: -122.91063513339346 },
            { lat: 45.494300451644214, lng: -122.91053513685564 },
            { lat: 45.494327408808353, lng: -122.9104440723428 },
            { lat: 45.49435363045216, lng: -122.91036802929496 },
            { lat: 45.494385192602479, lng: -122.91028800699807 },
            { lat: 45.49449946326331, lng: -122.91003749561175 },
            { lat: 45.494457403762354, lng: -122.9099590507426 },
            { lat: 45.494417657769539, lng: -122.90987629744087 },
            { lat: 45.494222573782096, lng: -122.90943102562333 },
            { lat: 45.494191768192827, lng: -122.90935641971687 }];
        var Block132021shape = new google.maps.Polygon({
            paths: [Block132021coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Block132021shape.setMap(map);

        var Block132328center = new google.maps.LatLng(45.4924923415994, -122.911689337025);
        var Block132328coords0 = [
            { lat: 45.491000598575575, lng: -122.91160800370835 },
            { lat: 45.491058185014552, lng: -122.91160645981684 },
            { lat: 45.491062652950284, lng: -122.91189646782423 },
            { lat: 45.4910672993362, lng: -122.91191632631177 },
            { lat: 45.491076492497427, lng: -122.91193453176267 },
            { lat: 45.491088241033879, lng: -122.9119471405552 },
            { lat: 45.491103074905581, lng: -122.91195472145097 },
            { lat: 45.491113569186894, lng: -122.91195599465078 },
            { lat: 45.492176605782227, lng: -122.91192749610711 },
            { lat: 45.492194069828393, lng: -122.91192228738379 },
            { lat: 45.492208397030744, lng: -122.91190980110697 },
            { lat: 45.492219586550242, lng: -122.91189003800241 },
            { lat: 45.49222510604784, lng: -122.91186747072437 },
            { lat: 45.49222184180627, lng: -122.91155450011973 },
            { lat: 45.49227922757985, lng: -122.91153782782054 },
            { lat: 45.492283607835759, lng: -122.91185777906351 },
            { lat: 45.492285662877052, lng: -122.91187246637942 },
            { lat: 45.492289806325083, lng: -122.91188623403389 },
            { lat: 45.492296560638948, lng: -122.91189961005396 },
            { lat: 45.4923044107194, lng: -122.91190959398655 },
            { lat: 45.492317465593359, lng: -122.91191926283412 },
            { lat: 45.492330869474934, lng: -122.91192311609208 },
            { lat: 45.492443781090628, lng: -122.91192033896311 },
            { lat: 45.492444323983975, lng: -122.91196128294767 },
            { lat: 45.492687787702152, lng: -122.91195474956652 },
            { lat: 45.492678852610233, lng: -122.91186062518139 },
            { lat: 45.492625372107653, lng: -122.91164758088949 },
            { lat: 45.492533348693613, lng: -122.91140941685315 },
            { lat: 45.492612204215504, lng: -122.91134895059024 },
            { lat: 45.492723064936, lng: -122.9112506310052 },
            { lat: 45.492734876661366, lng: -122.91124703710008 },
            { lat: 45.492747651529093, lng: -122.91124989401827 },
            { lat: 45.492758116985065, lng: -122.91125846990312 },
            { lat: 45.492766420072087, lng: -122.9112728503231 },
            { lat: 45.492898265667712, lng: -122.91115340846889 },
            { lat: 45.492852064129991, lng: -122.9110503084965 },
            { lat: 45.493134259306913, lng: -122.91079465885177 },
            { lat: 45.493287154971526, lng: -122.91113597387674 },
            { lat: 45.493331621323136, lng: -122.9112445458871 },
            { lat: 45.493361738405341, lng: -122.91132849095291 },
            { lat: 45.493386845851717, lng: -122.91140715410224 },
            { lat: 45.493409512617205, lng: -122.91148730160474 },
            { lat: 45.493431405689329, lng: -122.91157624828057 },
            { lat: 45.493453145546013, lng: -122.91168175208973 },
            { lat: 45.493470727286606, lng: -122.91178881098553 },
            { lat: 45.493483282254893, lng: -122.91188932596015 },
            { lat: 45.493492702629446, lng: -122.91199844578072 },
            { lat: 45.493496499536761, lng: -122.91206891960795 },
            { lat: 45.493498637484258, lng: -122.91214739344721 },
            { lat: 45.493479442017978, lng: -122.91214790813208 },
            { lat: 45.493481796645042, lng: -122.91232545657816 },
            { lat: 45.491039782591038, lng: -122.9123908960927 },
            { lat: 45.491038748920509, lng: -122.91231291952955 },
            { lat: 45.491009955696256, lng: -122.91231369111746 },
            { lat: 45.491000598575575, lng: -122.91160800370835 }];
        var Block132328shape = new google.maps.Polygon({
            paths: [Block132328coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Block132328shape.setMap(map);

        var Block132023center = new google.maps.LatLng(45.4920138123621, -122.90871831252);
        var Block132023coords0 = [
            { lat: 45.490977189144949, lng: -122.91036056401907 },
            { lat: 45.491672801433545, lng: -122.91034147745616 },
            { lat: 45.491685736130016, lng: -122.91033471016247 },
            { lat: 45.491696239736086, lng: -122.91032022845637 },
            { lat: 45.491701540130933, lng: -122.91030083897519 },
            { lat: 45.49170089639756, lng: -122.91028126423284 },
            { lat: 45.491719502657126, lng: -122.91027453438589 },
            { lat: 45.491744112196422, lng: -122.91028553954453 },
            { lat: 45.491812043458012, lng: -122.91026977788628 },
            { lat: 45.491817359531844, lng: -122.91026785506848 },
            { lat: 45.491835756283663, lng: -122.91024413721357 },
            { lat: 45.491854362540352, lng: -122.91023740733851 },
            { lat: 45.491860348326171, lng: -122.9102549882919 },
            { lat: 45.491869997739421, lng: -122.91026722931272 },
            { lat: 45.491882149932636, lng: -122.91027351730796 },
            { lat: 45.491895919763977, lng: -122.91027267307885 },
            { lat: 45.492302448240515, lng: -122.91008037663022 },
            { lat: 45.492314213904251, lng: -122.91007017022658 },
            { lat: 45.492322542114906, lng: -122.9100530664028 },
            { lat: 45.492325100545806, lng: -122.91003628173273 },
            { lat: 45.492323405944063, lng: -122.91001927725853 },
            { lat: 45.492056607797394, lng: -122.90886226455478 },
            { lat: 45.492022979235422, lng: -122.90868981229546 },
            { lat: 45.491965170888278, lng: -122.90835061706059 },
            { lat: 45.491962368562895, lng: -122.90834028410319 },
            { lat: 45.491957998118643, lng: -122.90833111718963 },
            { lat: 45.491951579724656, lng: -122.90832287209 },
            { lat: 45.491944723423074, lng: -122.90831761707157 },
            { lat: 45.491937209794955, lng: -122.9083146981036 },
            { lat: 45.4919285626867, lng: -122.90831437355517 },
            { lat: 45.491803013068221, lng: -122.90834695495062 },
            { lat: 45.491688443828622, lng: -122.90837038661452 },
            { lat: 45.491573341505259, lng: -122.90838775154219 },
            { lat: 45.491445456726467, lng: -122.90840023876096 },
            { lat: 45.491433348769384, lng: -122.90840669691579 },
            { lat: 45.49142327380217, lng: -122.90842006901305 },
            { lat: 45.4914177168114, lng: -122.90843800167779 },
            { lat: 45.491417421044275, lng: -122.90845638337929 },
            { lat: 45.491414945846465, lng: -122.9084589675645 },
            { lat: 45.491398718225533, lng: -122.90846285365069 },
            { lat: 45.491371030146247, lng: -122.90846391070949 },
            { lat: 45.491303374236807, lng: -122.90843280160712 },
            { lat: 45.491260332605691, lng: -122.90844512309823 },
            { lat: 45.491257395978074, lng: -122.90844381217845 },
            { lat: 45.491253100793877, lng: -122.90842710236613 },
            { lat: 45.491245218097738, lng: -122.90841408938249 },
            { lat: 45.491235467692363, lng: -122.90840618367874 },
            { lat: 45.491224443949406, lng: -122.90840317918867 },
            { lat: 45.491225150536, lng: -122.90837784939386 },
            { lat: 45.491217275715762, lng: -122.90833464547491 },
            { lat: 45.491217427549962, lng: -122.90832684944382 },
            { lat: 45.49119539370303, lng: -122.90818929970912 },
            { lat: 45.491195591188692, lng: -122.90818150570254 },
            { lat: 45.491202144857724, lng: -122.90814671504693 },
            { lat: 45.491202788918585, lng: -122.90812138458304 },
            { lat: 45.491214855312592, lng: -122.90811888426387 },
            { lat: 45.4912254522958, lng: -122.90811064157303 },
            { lat: 45.491233380890861, lng: -122.9080976850844 },
            { lat: 45.491237656873651, lng: -122.90808162316311 },
            { lat: 45.491240537950759, lng: -122.90787076215467 },
            { lat: 45.491244952600468, lng: -122.90778179333073 },
            { lat: 45.491251260025606, lng: -122.90770120794286 },
            { lat: 45.491260710212188, lng: -122.90761303582802 },
            { lat: 45.491272775525815, lng: -122.90752551106246 },
            { lat: 45.491287434363173, lng: -122.90743879036235 },
            { lat: 45.491302989159273, lng: -122.90736078179791 },
            { lat: 45.4913206427082, lng: -122.90728368153799 },
            { lat: 45.491340368885893, lng: -122.90720760367795 },
            { lat: 45.491362138501117, lng: -122.90713266080046 },
            { lat: 45.491383451729774, lng: -122.90706627431986 },
            { lat: 45.491407456792764, lng: -122.90699801142387 },
            { lat: 45.491434846589, lng: -122.90692689222062 },
            { lat: 45.491464140012205, lng: -122.90685732341041 },
            { lat: 45.491495293712973, lng: -122.90678940794567 },
            { lat: 45.491528261589067, lng: -122.90672324633267 },
            { lat: 45.491562994853446, lng: -122.90665893648278 },
            { lat: 45.491603179046159, lng: -122.90659044793638 },
            { lat: 45.491641449295159, lng: -122.90653033313043 },
            { lat: 45.491681317432544, lng: -122.90647235558022 },
            { lat: 45.491722724459585, lng: -122.90641660108815 },
            { lat: 45.491769976407952, lng: -122.90635793715747 },
            { lat: 45.491814413042007, lng: -122.90630711559308 },
            { lat: 45.491883563011534, lng: -122.90623553251585 },
            { lat: 45.491955501640149, lng: -122.90616973902843 },
            { lat: 45.492024949199759, lng: -122.90611374881176 },
            { lat: 45.492106730336758, lng: -122.90605559358637 },
            { lat: 45.492114276479732, lng: -122.90604548470725 },
            { lat: 45.492119647196461, lng: -122.90603147113235 },
            { lat: 45.492121546703416, lng: -122.90601574227615 },
            { lat: 45.492120036483065, lng: -122.9060011582403 },
            { lat: 45.492274678463218, lng: -122.90593363189562 },
            { lat: 45.4922895139018, lng: -122.90595543404001 },
            { lat: 45.49229998503197, lng: -122.9059746061664 },
            { lat: 45.49230864285996, lng: -122.90599552724254 },
            { lat: 45.4923153447717, lng: -122.90601785265159 },
            { lat: 45.492320327041909, lng: -122.90604359315344 },
            { lat: 45.492322602855083, lng: -122.90606765044461 },
            { lat: 45.492322692799128, lng: -122.90609192403586 },
            { lat: 45.492320595392449, lng: -122.90611601408574 },
            { lat: 45.492316345184157, lng: -122.90613952377615 },
            { lat: 45.492309268058769, lng: -122.90616425237016 },
            { lat: 45.492300765750187, lng: -122.90618530198851 },
            { lat: 45.492289310297011, lng: -122.90620645548752 },
            { lat: 45.492275874082942, lng: -122.90622510484958 },
            { lat: 45.4922621651075, lng: -122.90623957204534 },
            { lat: 45.492245719711612, lng: -122.90625245699688 },
            { lat: 45.492229795158863, lng: -122.90626120764367 },
            { lat: 45.492356700614664, lng: -122.9065734945335 },
            { lat: 45.492502716050154, lng: -122.90710475138845 },
            { lat: 45.492460580648512, lng: -122.90713624491291 },
            { lat: 45.492423253953731, lng: -122.9071694200958 },
            { lat: 45.4923848188158, lng: -122.90720955177865 },
            { lat: 45.492351383849517, lng: -122.90725026170237 },
            { lat: 45.492320087866553, lng: -122.90729427531203 },
            { lat: 45.492288784225465, lng: -122.90734542168099 },
            { lat: 45.4922624481095, lng: -122.90739557195602 },
            { lat: 45.492238708766955, lng: -122.90744827792979 },
            { lat: 45.49221606292226, lng: -122.90750794515132 },
            { lat: 45.492198109748188, lng: -122.90756509052576 },
            { lat: 45.492183084523155, lng: -122.90762391901146 },
            { lat: 45.492170200634156, lng: -122.90768919782661 },
            { lat: 45.492161505756556, lng: -122.90775055201152 },
            { lat: 45.492155604052236, lng: -122.90781783110182 },
            { lat: 45.492153433496874, lng: -122.90788034222896 },
            { lat: 45.492154420856615, lng: -122.90794291374243 },
            { lat: 45.492267154083592, lng: -122.90789038521015 },
            { lat: 45.492837564017357, lng: -122.90760127958676 },
            { lat: 45.492903884493188, lng: -122.90786574609319 },
            { lat: 45.49242990006973, lng: -122.90810603281155 },
            { lat: 45.492455520729933, lng: -122.90816166452875 },
            { lat: 45.492482580900905, lng: -122.90821047692039 },
            { lat: 45.492512451678834, lng: -122.90825585510282 },
            { lat: 45.492547516768887, lng: -122.90830050978786 },
            { lat: 45.492582517629117, lng: -122.90833774432133 },
            { lat: 45.4926225432822, lng: -122.90837297248636 },
            { lat: 45.492664661745721, lng: -122.90840286380983 },
            { lat: 45.492705339065417, lng: -122.90842562289401 },
            { lat: 45.492930303024529, lng: -122.90939779991271 },
            { lat: 45.492925670848145, lng: -122.90951003237222 },
            { lat: 45.492868887379508, lng: -122.90982499179138 },
            { lat: 45.492863820185228, lng: -122.90986136877177 },
            { lat: 45.49286137792182, lng: -122.90989828941434 },
            { lat: 45.492861585851792, lng: -122.90993537181593 },
            { lat: 45.492864441824331, lng: -122.90997223240021 },
            { lat: 45.492869311712568, lng: -122.91000522859487 },
            { lat: 45.492926005241429, lng: -122.91024870871219 },
            { lat: 45.492950124004253, lng: -122.91033507471028 },
            { lat: 45.492974787999117, lng: -122.91041270416142 },
            { lat: 45.4930018462586, lng: -122.91048870408281 },
            { lat: 45.493031245666167, lng: -122.91056292528089 },
            { lat: 45.493134259306913, lng: -122.91079465885177 },
            { lat: 45.492852064129991, lng: -122.9110503084965 },
            { lat: 45.492898265667712, lng: -122.91115340846889 },
            { lat: 45.492766420072087, lng: -122.9112728503231 },
            { lat: 45.492758056878856, lng: -122.91125839809868 },
            { lat: 45.49274757763861, lng: -122.91124985630994 },
            { lat: 45.492734798203259, lng: -122.91124704099188 },
            { lat: 45.492722992296947, lng: -122.91125067334438 },
            { lat: 45.4926137465721, lng: -122.91134765541349 },
            { lat: 45.492573969993863, lng: -122.911379647622 },
            { lat: 45.492533348693613, lng: -122.91140941685315 },
            { lat: 45.492625372107653, lng: -122.91164758088949 },
            { lat: 45.492678852610233, lng: -122.91186062518139 },
            { lat: 45.492687787702152, lng: -122.91195474956652 },
            { lat: 45.492444323983975, lng: -122.91196128294767 },
            { lat: 45.492443781090628, lng: -122.91192033896311 },
            { lat: 45.492331357311137, lng: -122.9119231574207 },
            { lat: 45.49231693163059, lng: -122.91191899406655 },
            { lat: 45.492304808183967, lng: -122.91190999826966 },
            { lat: 45.4922968908364, lng: -122.91190012229937 },
            { lat: 45.492290578106051, lng: -122.91188813503049 },
            { lat: 45.492285809708491, lng: -122.91187312911802 },
            { lat: 45.492283655270526, lng: -122.91185847062513 },
            { lat: 45.49227922757985, lng: -122.91153782782054 },
            { lat: 45.49222184180627, lng: -122.91155450011973 },
            { lat: 45.492225341466074, lng: -122.91186530142259 },
            { lat: 45.492220775997765, lng: -122.91188675288672 },
            { lat: 45.492212520861941, lng: -122.91190408076682 },
            { lat: 45.492201114940514, lng: -122.91191731046263 },
            { lat: 45.492187518163718, lng: -122.91192532855651 },
            { lat: 45.492176039515826, lng: -122.91192751578198 },
            { lat: 45.491105638955958, lng: -122.9119553228259 },
            { lat: 45.491090551546712, lng: -122.91194883169506 },
            { lat: 45.491077593307082, lng: -122.91193607063748 },
            { lat: 45.491068014858513, lng: -122.91191827124803 },
            { lat: 45.491062740632657, lng: -122.91189715137665 },
            { lat: 45.491058185014552, lng: -122.91160645981684 },
            { lat: 45.490993743023516, lng: -122.91160818750539 },
            { lat: 45.490990795431358, lng: -122.91138595446328 },
            { lat: 45.490997650959407, lng: -122.91138577062216 },
            { lat: 45.490987305046346, lng: -122.91060600569293 },
            { lat: 45.490980449519668, lng: -122.9106061896282 },
            { lat: 45.490977189144949, lng: -122.91036056401907 }];
        var Block132023shape = new google.maps.Polygon({
            paths: [Block132023coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Block132023shape.setMap(map);

        var Tract132446center = new google.maps.LatLng(45.493406498523, -122.909670301234);
        var Tract132446coords0 = [
            { lat: 45.49242990006973, lng: -122.90810603281155 },
            { lat: 45.493107250734653, lng: -122.90776164775097 },
            { lat: 45.493170017563628, lng: -122.90772617011943 },
            { lat: 45.493238961200682, lng: -122.90768401225031 },
            { lat: 45.493307008647996, lng: -122.90763900686281 },
            { lat: 45.493367437023061, lng: -122.90759609911947 },
            { lat: 45.493374289833547, lng: -122.90763589983915 },
            { lat: 45.493379462611955, lng: -122.90767652247246 },
            { lat: 45.49338442866852, lng: -122.90775414990719 },
            { lat: 45.493383064038767, lng: -122.90783207366009 },
            { lat: 45.493375386939988, lng: -122.90790925347785 },
            { lat: 45.493361499858594, lng: -122.9079846590392 },
            { lat: 45.493341588181714, lng: -122.90805728371025 },
            { lat: 45.493315917722342, lng: -122.90812615798357 },
            { lat: 45.493300110078131, lng: -122.90816078630277 },
            { lat: 45.493282842404263, lng: -122.90819397505834 },
            { lat: 45.493649638418809, lng: -122.90963532462969 },
            { lat: 45.494191768192827, lng: -122.90935641971687 },
            { lat: 45.494222587861827, lng: -122.90943105807844 },
            { lat: 45.494417060008324, lng: -122.90987497855126 },
            { lat: 45.494456758053232, lng: -122.90995777836918 },
            { lat: 45.49449946326331, lng: -122.91003749561175 },
            { lat: 45.4943871206395, lng: -122.91028344912631 },
            { lat: 45.494355371222554, lng: -122.9103633215169 },
            { lat: 45.49432690011372, lng: -122.91044565449718 },
            { lat: 45.494298244669139, lng: -122.91054335627027 },
            { lat: 45.494275661308464, lng: -122.91063679502314 },
            { lat: 45.494256024323583, lng: -122.91073890338436 },
            { lat: 45.494241188058446, lng: -122.91084263715251 },
            { lat: 45.494234618649273, lng: -122.91090546824137 },
            { lat: 45.494229811770708, lng: -122.9109686210882 },
            { lat: 45.494226547115396, lng: -122.91103904675103 },
            { lat: 45.494225482702923, lng: -122.91110255032663 },
            { lat: 45.494238794099225, lng: -122.91166571650808 },
            { lat: 45.494274992365341, lng: -122.9119040649679 },
            { lat: 45.493498637484258, lng: -122.91214739344721 },
            { lat: 45.49349614362152, lng: -122.91206059139994 },
            { lat: 45.493490408912422, lng: -122.91196670832217 },
            { lat: 45.493481534392565, lng: -122.9118733204381 },
            { lat: 45.493469540224147, lng: -122.91178063991774 },
            { lat: 45.49345445365698, lng: -122.91168887732358 },
            { lat: 45.49343630896653, lng: -122.91159824113235 },
            { lat: 45.493415147376041, lng: -122.91150893726102 },
            { lat: 45.493391016962853, lng: -122.91142116859905 },
            { lat: 45.493351858390248, lng: -122.91129984559448 },
            { lat: 45.493328820092628, lng: -122.91123721436483 },
            { lat: 45.493304222024889, lng: -122.91117579403436 },
            { lat: 45.493048458422848, lng: -122.91060308542666 },
            { lat: 45.49302319676702, lng: -122.91054335627635 },
            { lat: 45.49299693491745, lng: -122.91047551318836 },
            { lat: 45.49296344127179, lng: -122.91037812422418 },
            { lat: 45.492933861622504, lng: -122.91027820590656 },
            { lat: 45.492913427964986, lng: -122.9101981309352 },
            { lat: 45.492872204508984, lng: -122.910019865291 },
            { lat: 45.492865461248321, lng: -122.90998056645064 },
            { lat: 45.492862004629764, lng: -122.90994380998785 },
            { lat: 45.492861249420642, lng: -122.90990337274492 },
            { lat: 45.492863329202208, lng: -122.90986640725356 },
            { lat: 45.4928685960978, lng: -122.90982665496571 },
            { lat: 45.492925670848145, lng: -122.90951003237222 },
            { lat: 45.492930303024529, lng: -122.90939779991271 },
            { lat: 45.492705339065417, lng: -122.90842562289401 },
            { lat: 45.4926618692794, lng: -122.90840108946989 },
            { lat: 45.492622809673676, lng: -122.9083731835206 },
            { lat: 45.492582769374295, lng: -122.90833798901845 },
            { lat: 45.492547753032348, lng: -122.90830078392295 },
            { lat: 45.492512669374129, lng: -122.90825615873113 },
            { lat: 45.49248277972616, lng: -122.9082108056742 },
            { lat: 45.492453738220192, lng: -122.90815813055556 },
            { lat: 45.49242990006973, lng: -122.90810603281155 }];
        var Tract132446shape = new google.maps.Polygon({
            paths: [Tract132446coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132446shape.setMap(map);

        var Tract132456center = new google.maps.LatLng(45.4939515394427, -122.91221531141);
        var Tract132456coords0 = [
            { lat: 45.493479442017978, lng: -122.91214790813208 },
            { lat: 45.493498637484258, lng: -122.91214739344721 },
            { lat: 45.494274992365341, lng: -122.9119040649679 },
            { lat: 45.494284833486496, lng: -122.91229444333152 },
            { lat: 45.494188736421521, lng: -122.91229871052018 },
            { lat: 45.494188839791853, lng: -122.91230650860861 },
            { lat: 45.493481796645042, lng: -122.91232545657816 },
            { lat: 45.493479442017978, lng: -122.91214790813208 }];
        var Tract132456shape = new google.maps.Polygon({
            paths: [Tract132456coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132456shape.setMap(map);

        var Section132019center = new google.maps.LatLng(45.4922669141929, -122.908555679131);
        var Section132019coords0 = [
            { lat: 45.488566991163786, lng: -122.90664861360243 },
            { lat: 45.489273705313657, lng: -122.90432865740198 },
            { lat: 45.488855677641205, lng: -122.90189657971236 },
            { lat: 45.489277878916155, lng: -122.90135546046761 },
            { lat: 45.489385795053927, lng: -122.90122937894384 },
            { lat: 45.48949762409795, lng: -122.9011103891585 },
            { lat: 45.489565141193609, lng: -122.9010438073437 },
            { lat: 45.489640824429429, lng: -122.90097355650765 },
            { lat: 45.48971085999775, lng: -122.90091245893925 },
            { lat: 45.489782017924206, lng: -122.90085404151289 },
            { lat: 45.489854247479414, lng: -122.90079834588526 },
            { lat: 45.489934876241833, lng: -122.90074027171569 },
            { lat: 45.490016669800276, lng: -122.90068558904835 },
            { lat: 45.490091979000553, lng: -122.90063886033339 },
            { lat: 45.490168138852056, lng: -122.90059500686979 },
            { lat: 45.490245095058278, lng: -122.9005540599335 },
            { lat: 45.490322792754867, lng: -122.90051604872863 },
            { lat: 45.490393308883782, lng: -122.90048437114584 },
            { lat: 45.4904722623983, lng: -122.90045201077777 },
            { lat: 45.490551795447395, lng: -122.90042265893119 },
            { lat: 45.490631851328665, lng: -122.90039633654497 },
            { lat: 45.4907123729667, lng: -122.9003730623983 },
            { lat: 45.490825776370656, lng: -122.90034563083793 },
            { lat: 45.490939821634015, lng: -122.90032424439902 },
            { lat: 45.491653795555663, lng: -122.90022033008928 },
            { lat: 45.491984485332516, lng: -122.90167683434252 },
            { lat: 45.491849967814339, lng: -122.90173857239816 },
            { lat: 45.492098510332447, lng: -122.90283332875981 },
            { lat: 45.491926646623284, lng: -122.90291220343769 },
            { lat: 45.492146534195079, lng: -122.90388078985029 },
            { lat: 45.492030645589622, lng: -122.90393397320391 },
            { lat: 45.492215984709574, lng: -122.90475041052606 },
            { lat: 45.49198106836544, lng: -122.9048582137624 },
            { lat: 45.492053275024411, lng: -122.90509140748981 },
            { lat: 45.4921232992227, lng: -122.90533699056309 },
            { lat: 45.492160390352396, lng: -122.90547641503927 },
            { lat: 45.4921958137529, lng: -122.90561671359343 },
            { lat: 45.492229559242048, lng: -122.90575784589932 },
            { lat: 45.492262508544293, lng: -122.90590356083749 },
            { lat: 45.492267645137325, lng: -122.90591937225618 },
            { lat: 45.492274678463218, lng: -122.90593363189562 },
            { lat: 45.492120036483065, lng: -122.9060011582403 },
            { lat: 45.492121535230822, lng: -122.90601675913682 },
            { lat: 45.492119696787221, lng: -122.906031266797 },
            { lat: 45.492114369830091, lng: -122.90604531409633 },
            { lat: 45.492106855289812, lng: -122.90605547045425 },
            { lat: 45.492022873276156, lng: -122.90611532198729 },
            { lat: 45.491953488292523, lng: -122.90617146881611 },
            { lat: 45.4918816231841, lng: -122.9062374245229 },
            { lat: 45.4918125531928, lng: -122.90630916352005 },
            { lat: 45.491763811852579, lng: -122.90636531013074 },
            { lat: 45.49172098691843, lng: -122.90641885573612 },
            { lat: 45.491679642169018, lng: -122.90647470357614 },
            { lat: 45.491639838788387, lng: -122.90653277099945 },
            { lat: 45.491601635679459, lng: -122.90659297207064 },
            { lat: 45.491565089376877, lng: -122.90665521769738 },
            { lat: 45.49153025396339, lng: -122.90671941576225 },
            { lat: 45.491493972533874, lng: -122.90679217522695 },
            { lat: 45.491462894670242, lng: -122.90686016089107 },
            { lat: 45.491433678927095, lng: -122.90692979570153 },
            { lat: 45.491406368538826, lng: -122.90700097660827 },
            { lat: 45.491382949699407, lng: -122.90706777050603 },
            { lat: 45.491359409294979, lng: -122.90714162337116 },
            { lat: 45.491337884151619, lng: -122.90721670885912 },
            { lat: 45.491320260960059, lng: -122.90728524788973 },
            { lat: 45.491302650066025, lng: -122.90736236786587 },
            { lat: 45.491287138426628, lng: -122.90744039379946 },
            { lat: 45.491272527564966, lng: -122.90752713086412 },
            { lat: 45.491260510671, lng: -122.90761466909397 },
            { lat: 45.491251109261363, lng: -122.90770285174864 },
            { lat: 45.491244846415483, lng: -122.90778344416449 },
            { lat: 45.491240768363092, lng: -122.90786431942053 },
            { lat: 45.491237635268334, lng: -122.90808178600061 },
            { lat: 45.491233320905266, lng: -122.90809782716126 },
            { lat: 45.491225361376351, lng: -122.90811074525237 },
            { lat: 45.491214744745626, lng: -122.90811893667536 },
            { lat: 45.491202788918585, lng: -122.90812138458304 },
            { lat: 45.491202144857724, lng: -122.90814671504693 },
            { lat: 45.491195591188692, lng: -122.90818150570254 },
            { lat: 45.49119539370303, lng: -122.90818929970912 },
            { lat: 45.491217427549962, lng: -122.90832684944382 },
            { lat: 45.491217275715762, lng: -122.90833464547491 },
            { lat: 45.491225150536, lng: -122.90837784939386 },
            { lat: 45.491224443949406, lng: -122.90840317918867 },
            { lat: 45.491235880326087, lng: -122.90840640468407 },
            { lat: 45.491245558411315, lng: -122.90841448802961 },
            { lat: 45.491253322742175, lng: -122.90842764407978 },
            { lat: 45.491257395978074, lng: -122.90844381217845 },
            { lat: 45.491260332605691, lng: -122.90844512309823 },
            { lat: 45.491303374236807, lng: -122.90843280160712 },
            { lat: 45.491371030146247, lng: -122.90846391070949 },
            { lat: 45.491398718225533, lng: -122.90846285365069 },
            { lat: 45.491414945846465, lng: -122.9084589675645 },
            { lat: 45.491417421044275, lng: -122.90845638337929 },
            { lat: 45.491417873231264, lng: -122.90843702064957 },
            { lat: 45.491423181592261, lng: -122.90842025458856 },
            { lat: 45.491432480538464, lng: -122.90840747708445 },
            { lat: 45.491445299262253, lng: -122.90840027753576 },
            { lat: 45.4915734833783, lng: -122.90838773391611 },
            { lat: 45.491688585143272, lng: -122.9083703615081 },
            { lat: 45.491803153629476, lng: -122.90834692239848 },
            { lat: 45.4919291494352, lng: -122.90831429700248 },
            { lat: 45.491936934767814, lng: -122.9083146394732 },
            { lat: 45.491944464802032, lng: -122.90831747168855 },
            { lat: 45.491951350859019, lng: -122.90832264745862 },
            { lat: 45.49195781608185, lng: -122.90833081826194 },
            { lat: 45.491962238681488, lng: -122.90833993446846 },
            { lat: 45.491965099866349, lng: -122.9083502347659 },
            { lat: 45.492024841369513, lng: -122.90870020330821 },
            { lat: 45.492061095263196, lng: -122.90888322371686 },
            { lat: 45.492323405944063, lng: -122.91001927725853 },
            { lat: 45.492325060671185, lng: -122.91003745309429 },
            { lat: 45.492323175714922, lng: -122.91005070599597 },
            { lat: 45.492318802722217, lng: -122.91006271281587 },
            { lat: 45.492312278162807, lng: -122.91007254971747 },
            { lat: 45.492303300119467, lng: -122.91007992251274 },
            { lat: 45.491896802342644, lng: -122.91027234087628 },
            { lat: 45.491883053204745, lng: -122.91027370612576 },
            { lat: 45.49187078755763, lng: -122.91026788043654 },
            { lat: 45.491860376091751, lng: -122.91025503987618 },
            { lat: 45.491854362540352, lng: -122.91023740733851 },
            { lat: 45.491835756283663, lng: -122.91024413721357 },
            { lat: 45.491817359531844, lng: -122.91026785506848 },
            { lat: 45.491812043458012, lng: -122.91026977788628 },
            { lat: 45.491744112196422, lng: -122.91028553954453 },
            { lat: 45.491719502657126, lng: -122.91027453438589 },
            { lat: 45.49170089639756, lng: -122.91028126423284 },
            { lat: 45.491701513962724, lng: -122.91030107236043 },
            { lat: 45.491696621314475, lng: -122.91031939221934 },
            { lat: 45.491686328183363, lng: -122.91033417627702 },
            { lat: 45.49167349352, lng: -122.91034131821608 },
            { lat: 45.490977189144949, lng: -122.91036056401907 },
            { lat: 45.490980449519668, lng: -122.9106061896282 },
            { lat: 45.490987305046346, lng: -122.91060600569293 },
            { lat: 45.490997650959407, lng: -122.91138577062216 },
            { lat: 45.490990795431358, lng: -122.91138595446328 },
            { lat: 45.490993743023516, lng: -122.91160818750539 },
            { lat: 45.491058185014552, lng: -122.91160645981684 },
            { lat: 45.491061938323675, lng: -122.91188753013134 },
            { lat: 45.491063842660346, lng: -122.91190377205895 },
            { lat: 45.491068287773167, lng: -122.91191897695516 },
            { lat: 45.491075759323344, lng: -122.91193345294826 },
            { lat: 45.491086411734756, lng: -122.91194564509725 },
            { lat: 45.491098967330572, lng: -122.9119533497757 },
            { lat: 45.491112514101545, lng: -122.9119560073307 },
            { lat: 45.492176039515826, lng: -122.91192751578198 },
            { lat: 45.49218601587468, lng: -122.91192583405275 },
            { lat: 45.492200694255253, lng: -122.91191766407097 },
            { lat: 45.49221290085535, lng: -122.91190348351414 },
            { lat: 45.492221019427106, lng: -122.91188602568668 },
            { lat: 45.492225416185, lng: -122.91186450309523 },
            { lat: 45.49222184180627, lng: -122.91155450011973 },
            { lat: 45.49227922757985, lng: -122.91153782782054 },
            { lat: 45.492283607835759, lng: -122.91185777906351 },
            { lat: 45.492285662877052, lng: -122.91187246637942 },
            { lat: 45.492289806325083, lng: -122.91188623403389 },
            { lat: 45.492296560638948, lng: -122.91189961005396 },
            { lat: 45.4923044107194, lng: -122.91190959398655 },
            { lat: 45.492317465593359, lng: -122.91191926283412 },
            { lat: 45.492330869474934, lng: -122.91192311609208 },
            { lat: 45.492443781090628, lng: -122.91192033896311 },
            { lat: 45.492444323983975, lng: -122.91196128294767 },
            { lat: 45.492687787702152, lng: -122.91195474956652 },
            { lat: 45.492678852610233, lng: -122.91186062518139 },
            { lat: 45.492625372107653, lng: -122.91164758088949 },
            { lat: 45.492533348693613, lng: -122.91140941685315 },
            { lat: 45.492612204215504, lng: -122.91134895059024 },
            { lat: 45.492723064936, lng: -122.9112506310052 },
            { lat: 45.492734876661366, lng: -122.91124703710008 },
            { lat: 45.492747651529093, lng: -122.91124989401827 },
            { lat: 45.492758116985065, lng: -122.91125846990312 },
            { lat: 45.492766420072087, lng: -122.9112728503231 },
            { lat: 45.492898265667712, lng: -122.91115340846889 },
            { lat: 45.492852064129991, lng: -122.9110503084965 },
            { lat: 45.493134259306935, lng: -122.91079465885205 },
            { lat: 45.493284215801673, lng: -122.91112932427976 },
            { lat: 45.4933182481831, lng: -122.91121018837511 },
            { lat: 45.49334197264529, lng: -122.91127229957839 },
            { lat: 45.493366482834496, lng: -122.91134267612772 },
            { lat: 45.493389008005259, lng: -122.91141438118157 },
            { lat: 45.493407554028423, lng: -122.91147995813559 },
            { lat: 45.493427964318009, lng: -122.91156132234386 },
            { lat: 45.493445855427595, lng: -122.91164387658593 },
            { lat: 45.493459905173204, lng: -122.91171982599101 },
            { lat: 45.493472896193765, lng: -122.9118042128089 },
            { lat: 45.493483282254893, lng: -122.91188932596015 },
            { lat: 45.493491043528522, lng: -122.91197500295517 },
            { lat: 45.49349616519757, lng: -122.91206108022773 },
            { lat: 45.493498637484258, lng: -122.91214739344721 },
            { lat: 45.494274992365341, lng: -122.9119040649679 },
            { lat: 45.494521676594125, lng: -122.91189149170822 },
            { lat: 45.494522629515608, lng: -122.9119292899679 },
            { lat: 45.494678862853711, lng: -122.91192132695079 },
            { lat: 45.494677152180962, lng: -122.91185295429885 },
            { lat: 45.494678898343281, lng: -122.91183718884892 },
            { lat: 45.494683118345932, lng: -122.91182507136155 },
            { lat: 45.494689517082044, lng: -122.91181506836047 },
            { lat: 45.494697602217094, lng: -122.91180794950202 },
            { lat: 45.494706751660658, lng: -122.91180426253021 },
            { lat: 45.495564628213415, lng: -122.9117603171908 },
            { lat: 45.495581642548387, lng: -122.91176310844949 },
            { lat: 45.495605232491222, lng: -122.91177418735666 },
            { lat: 45.4956190351038, lng: -122.91177857303536 },
            { lat: 45.495634316261281, lng: -122.91178088213452 },
            { lat: 45.495651386481128, lng: -122.91178049043276 },
            { lat: 45.495669949822606, lng: -122.9117764744372 },
            { lat: 45.495686329529796, lng: -122.91176962957474 },
            { lat: 45.495701957770187, lng: -122.91175985806686 },
            { lat: 45.495717974118378, lng: -122.91174592261105 },
            { lat: 45.49573245091301, lng: -122.91172891930954 },
            { lat: 45.49574403225273, lng: -122.91171108360338 },
            { lat: 45.49575391162886, lng: -122.91169128563153 },
            { lat: 45.495762619852634, lng: -122.91166763150207 },
            { lat: 45.4959839551909, lng: -122.91165634903405 },
            { lat: 45.495986148592443, lng: -122.91167450707758 },
            { lat: 45.496057395576685, lng: -122.91167024284518 },
            { lat: 45.496056243359035, lng: -122.91163766718221 },
            { lat: 45.49631527042439, lng: -122.91162446318064 },
            { lat: 45.496368304609867, lng: -122.91213915168062 },
            { lat: 45.4963681374883, lng: -122.91215211584341 },
            { lat: 45.49636536908357, lng: -122.91216447021063 },
            { lat: 45.496360785841773, lng: -122.91217430104793 },
            { lat: 45.496354558626052, lng: -122.91218209289094 },
            { lat: 45.4963471181352, lng: -122.9121873068258 },
            { lat: 45.496338148101565, lng: -122.91218964025683 },
            { lat: 45.494188736421521, lng: -122.91229871052018 },
            { lat: 45.494188839791853, lng: -122.91230650860861 },
            { lat: 45.488594246984889, lng: -122.91245643056742 },
            { lat: 45.488566991163786, lng: -122.90664861360243 }];
        var Section132019shape = new google.maps.Polygon({
            paths: [Section132019coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132019shape.setMap(map);

        var Section132018center = new google.maps.LatLng(45.4933151943181, -122.907918572345);
        var Section132018coords0 = [
            { lat: 45.490977189144949, lng: -122.91036056401907 },
            { lat: 45.491673657256925, lng: -122.91034127751415 },
            { lat: 45.491687186671214, lng: -122.9103333581177 },
            { lat: 45.491696710011375, lng: -122.9103191923458 },
            { lat: 45.491701540130933, lng: -122.91030083897519 },
            { lat: 45.49170089639756, lng: -122.91028126423284 },
            { lat: 45.491719502657126, lng: -122.91027453438589 },
            { lat: 45.491744112196422, lng: -122.91028553954453 },
            { lat: 45.491812043458012, lng: -122.91026977788628 },
            { lat: 45.491817359531844, lng: -122.91026785506848 },
            { lat: 45.491835756283663, lng: -122.91024413721357 },
            { lat: 45.491854362540352, lng: -122.91023740733851 },
            { lat: 45.491860348326171, lng: -122.9102549882919 },
            { lat: 45.491870747747924, lng: -122.91026784856729 },
            { lat: 45.491883007923995, lng: -122.91027369749085 },
            { lat: 45.491896758329268, lng: -122.91027235829284 },
            { lat: 45.492303260526548, lng: -122.91007994443493 },
            { lat: 45.4923108631843, lng: -122.91007407797848 },
            { lat: 45.492317191126233, lng: -122.91006569268009 },
            { lat: 45.492321461336815, lng: -122.91005643070407 },
            { lat: 45.492324345338446, lng: -122.91004483553532 },
            { lat: 45.492325051083661, lng: -122.91003135164745 },
            { lat: 45.492323405944063, lng: -122.91001927725853 },
            { lat: 45.492058888863824, lng: -122.90887296984904 },
            { lat: 45.492024922174004, lng: -122.90870065159689 },
            { lat: 45.491965170888278, lng: -122.90835061706059 },
            { lat: 45.491962368562895, lng: -122.90834028410319 },
            { lat: 45.491957998118643, lng: -122.90833111718963 },
            { lat: 45.491951579724656, lng: -122.90832287209 },
            { lat: 45.491944723423074, lng: -122.90831761707157 },
            { lat: 45.491937209794955, lng: -122.9083146981036 },
            { lat: 45.4919285626867, lng: -122.90831437355517 },
            { lat: 45.491803013068221, lng: -122.90834695495062 },
            { lat: 45.491688443828622, lng: -122.90837038661452 },
            { lat: 45.491573341505259, lng: -122.90838775154219 },
            { lat: 45.491445456726467, lng: -122.90840023876096 },
            { lat: 45.491433348769384, lng: -122.90840669691579 },
            { lat: 45.49142327380217, lng: -122.90842006901305 },
            { lat: 45.4914177168114, lng: -122.90843800167779 },
            { lat: 45.491417421044275, lng: -122.90845638337929 },
            { lat: 45.491414945846465, lng: -122.9084589675645 },
            { lat: 45.491398718225533, lng: -122.90846285365069 },
            { lat: 45.491371030146247, lng: -122.90846391070949 },
            { lat: 45.491303374236807, lng: -122.90843280160712 },
            { lat: 45.491260332605691, lng: -122.90844512309823 },
            { lat: 45.491257395978074, lng: -122.90844381217845 },
            { lat: 45.491253100793877, lng: -122.90842710236613 },
            { lat: 45.491245218097738, lng: -122.90841408938249 },
            { lat: 45.491235467692363, lng: -122.90840618367874 },
            { lat: 45.491224443949406, lng: -122.90840317918867 },
            { lat: 45.491225150536, lng: -122.90837784939386 },
            { lat: 45.491217275715762, lng: -122.90833464547491 },
            { lat: 45.491217427549962, lng: -122.90832684944382 },
            { lat: 45.49119539370303, lng: -122.90818929970912 },
            { lat: 45.491195591188692, lng: -122.90818150570254 },
            { lat: 45.491202144857724, lng: -122.90814671504693 },
            { lat: 45.491202788918585, lng: -122.90812138458304 },
            { lat: 45.491214855312592, lng: -122.90811888426387 },
            { lat: 45.4912254522958, lng: -122.90811064157303 },
            { lat: 45.491233380890861, lng: -122.9080976850844 },
            { lat: 45.491237656873651, lng: -122.90808162316311 },
            { lat: 45.491240537950759, lng: -122.90787076215467 },
            { lat: 45.491244952600468, lng: -122.90778179333073 },
            { lat: 45.491251260025606, lng: -122.90770120794286 },
            { lat: 45.491260710212188, lng: -122.90761303582802 },
            { lat: 45.491272775525815, lng: -122.90752551106246 },
            { lat: 45.491287434363173, lng: -122.90743879036235 },
            { lat: 45.491302989159273, lng: -122.90736078179791 },
            { lat: 45.4913206427082, lng: -122.90728368153799 },
            { lat: 45.491340368885893, lng: -122.90720760367795 },
            { lat: 45.491362138501117, lng: -122.90713266080046 },
            { lat: 45.491383451729774, lng: -122.90706627431986 },
            { lat: 45.491407456792764, lng: -122.90699801142387 },
            { lat: 45.491434846589, lng: -122.90692689222062 },
            { lat: 45.491464140012205, lng: -122.90685732341041 },
            { lat: 45.491495293712973, lng: -122.90678940794567 },
            { lat: 45.491528261589067, lng: -122.90672324633267 },
            { lat: 45.491562994853446, lng: -122.90665893648278 },
            { lat: 45.491603179046159, lng: -122.90659044793638 },
            { lat: 45.491641449295159, lng: -122.90653033313043 },
            { lat: 45.491681317432544, lng: -122.90647235558022 },
            { lat: 45.491722724459585, lng: -122.90641660108815 },
            { lat: 45.491769976407952, lng: -122.90635793715747 },
            { lat: 45.491814413042007, lng: -122.90630711559308 },
            { lat: 45.491883563011534, lng: -122.90623553251585 },
            { lat: 45.491955501640149, lng: -122.90616973902843 },
            { lat: 45.492024949199759, lng: -122.90611374881176 },
            { lat: 45.492106730336758, lng: -122.90605559358637 },
            { lat: 45.492114276479732, lng: -122.90604548470725 },
            { lat: 45.492119647196461, lng: -122.90603147113235 },
            { lat: 45.492121546703416, lng: -122.90601574227615 },
            { lat: 45.492120036483065, lng: -122.9060011582403 },
            { lat: 45.492274678463218, lng: -122.90593363189562 },
            { lat: 45.492267467717248, lng: -122.90591893120832 },
            { lat: 45.49226238914958, lng: -122.90590308194294 },
            { lat: 45.492228154414164, lng: -122.9057518102574 },
            { lat: 45.492194337162218, lng: -122.90561071268374 },
            { lat: 45.492158842423343, lng: -122.90547045058668 },
            { lat: 45.492121680400224, lng: -122.90533106428194 },
            { lat: 45.492056067847081, lng: -122.90510080867544 },
            { lat: 45.49198106836544, lng: -122.9048582137624 },
            { lat: 45.492215984709574, lng: -122.90475041052606 },
            { lat: 45.492030645589622, lng: -122.90393397320391 },
            { lat: 45.492146534195079, lng: -122.90388078985029 },
            { lat: 45.491926646623284, lng: -122.90291220343769 },
            { lat: 45.492098510332447, lng: -122.90283332875981 },
            { lat: 45.491849967814339, lng: -122.90173857239816 },
            { lat: 45.491984485332516, lng: -122.90167683434252 },
            { lat: 45.491653795555663, lng: -122.90022033008928 },
            { lat: 45.4925317725012, lng: -122.90009285106611 },
            { lat: 45.492545425683751, lng: -122.90028294398662 },
            { lat: 45.49261167253826, lng: -122.90027366900912 },
            { lat: 45.49262523556861, lng: -122.90027518806865 },
            { lat: 45.492637176655329, lng: -122.90027978815091 },
            { lat: 45.492652543162741, lng: -122.90029108333214 },
            { lat: 45.492666299963041, lng: -122.90030872793282 },
            { lat: 45.492675779966056, lng: -122.90032930112122 },
            { lat: 45.492681663697688, lng: -122.9003542797541 },
            { lat: 45.492740022029722, lng: -122.90115383428953 },
            { lat: 45.492756162301575, lng: -122.90129387961427 },
            { lat: 45.492794097523358, lng: -122.90152763312821 },
            { lat: 45.492811437246921, lng: -122.90166738844417 },
            { lat: 45.49281870948456, lng: -122.90175023326148 },
            { lat: 45.492867300406, lng: -122.90241487794911 },
            { lat: 45.492885803599506, lng: -122.90259749499589 },
            { lat: 45.492909178054326, lng: -122.90277897945874 },
            { lat: 45.492905241147753, lng: -122.9028654667124 },
            { lat: 45.492926991639642, lng: -122.90299686450828 },
            { lat: 45.492960931138022, lng: -122.90317540518463 },
            { lat: 45.492999610341521, lng: -122.90335198659662 },
            { lat: 45.4930429735571, lng: -122.90352635448635 },
            { lat: 45.493090958347231, lng: -122.90369825778134 },
            { lat: 45.493139852984015, lng: -122.90385625882796 },
            { lat: 45.493196571119057, lng: -122.90402269880556 },
            { lat: 45.493253479925805, lng: -122.90417517909519 },
            { lat: 45.493325727830808, lng: -122.90435345807188 },
            { lat: 45.493327573443686, lng: -122.9043732248914 },
            { lat: 45.493323628543209, lng: -122.9043911532676 },
            { lat: 45.493317435956278, lng: -122.9044022108282 },
            { lat: 45.4932961431255, lng: -122.90442593133827 },
            { lat: 45.493392111277437, lng: -122.90460140257383 },
            { lat: 45.493403853207035, lng: -122.90459019316366 },
            { lat: 45.493415971399585, lng: -122.90458647332733 },
            { lat: 45.493428929909321, lng: -122.90459013524855 },
            { lat: 45.493439696660481, lng: -122.90460102262327 },
            { lat: 45.493527713781383, lng: -122.90477191195718 },
            { lat: 45.493619658937696, lng: -122.90493575219219 },
            { lat: 45.4937164735226, lng: -122.90509382022411 },
            { lat: 45.493817978483641, lng: -122.90524582368653 },
            { lat: 45.493879802983408, lng: -122.90533229076789 },
            { lat: 45.493949562361642, lng: -122.90542480219358 },
            { lat: 45.49402110520078, lng: -122.90551451789955 },
            { lat: 45.494087645181857, lng: -122.90559359308028 },
            { lat: 45.494155570738378, lng: -122.90567024967646 },
            { lat: 45.494200309176314, lng: -122.90571746332951 },
            { lat: 45.494250255456031, lng: -122.90576482451998 },
            { lat: 45.494312264975143, lng: -122.9058179660851 },
            { lat: 45.494319601140688, lng: -122.90583217590321 },
            { lat: 45.494322519099491, lng: -122.90584930809085 },
            { lat: 45.494320847554988, lng: -122.90586560178063 },
            { lat: 45.494314062073755, lng: -122.90588310088785 },
            { lat: 45.494480650241144, lng: -122.90603387529262 },
            { lat: 45.494489198136712, lng: -122.90601669083718 },
            { lat: 45.494498722771908, lng: -122.90600732454268 },
            { lat: 45.494510814193127, lng: -122.90600343251782 },
            { lat: 45.494523026507821, lng: -122.90600646694192 },
            { lat: 45.494627914260548, lng: -122.90609107115937 },
            { lat: 45.494705662688759, lng: -122.90615808821384 },
            { lat: 45.494806690975132, lng: -122.90625334151632 },
            { lat: 45.494904507951439, lng: -122.90635514629206 },
            { lat: 45.494998903649751, lng: -122.90646328404615 },
            { lat: 45.495089675444945, lng: -122.90657752268616 },
            { lat: 45.495155258587864, lng: -122.90666705835213 },
            { lat: 45.49522379100523, lng: -122.90676764713008 },
            { lat: 45.495284647464992, lng: -122.90686369379674 },
            { lat: 45.495343120272416, lng: -122.90696268901668 },
            { lat: 45.495403694106024, lng: -122.90707312247885 },
            { lat: 45.495456977627974, lng: -122.90717787264123 },
            { lat: 45.495511774783317, lng: -122.90729424720227 },
            { lat: 45.495559589847247, lng: -122.90740420351243 },
            { lat: 45.495593672027454, lng: -122.90748818479183 },
            { lat: 45.495626203429346, lng: -122.90757340052286 },
            { lat: 45.495683992722, lng: -122.90773951511865 },
            { lat: 45.4957353133346, lng: -122.90790748348044 },
            { lat: 45.495783924243334, lng: -122.90809012951556 },
            { lat: 45.495841266579689, lng: -122.90832270375321 },
            { lat: 45.495891394782838, lng: -122.9085403009328 },
            { lat: 45.495938177011645, lng: -122.90875785397546 },
            { lat: 45.495982151400639, lng: -122.90897790470986 },
            { lat: 45.495982519516055, lng: -122.908996683602 },
            { lat: 45.4959769637023, lng: -122.90901499323965 },
            { lat: 45.495967103291356, lng: -122.90902749698294 },
            { lat: 45.495953873868423, lng: -122.90903397288781 },
            { lat: 45.495993083525, lng: -122.90924915973608 },
            { lat: 45.496007750561972, lng: -122.90924571747362 },
            { lat: 45.4960205534702, lng: -122.90925035589147 },
            { lat: 45.496031416946721, lng: -122.90926296720548 },
            { lat: 45.496037174656053, lng: -122.90927987564791 },
            { lat: 45.496080459748704, lng: -122.90954500234768 },
            { lat: 45.496120964396269, lng: -122.90982347669937 },
            { lat: 45.496154396165622, lng: -122.91008459585358 },
            { lat: 45.49618550387855, lng: -122.91036533063584 },
            { lat: 45.49618450990333, lng: -122.91038470723517 },
            { lat: 45.496178150929794, lng: -122.91040117438912 },
            { lat: 45.496167606357652, lng: -122.91041249336656 },
            { lat: 45.496153442308071, lng: -122.91041733927729 },
            { lat: 45.496176110690058, lng: -122.91063728273259 },
            { lat: 45.496190290658859, lng: -122.91063607323429 },
            { lat: 45.496202016264569, lng: -122.91064179722079 },
            { lat: 45.496211777116862, lng: -122.91065445796551 },
            { lat: 45.49621703462374, lng: -122.91067169273376 },
            { lat: 45.49631527042439, lng: -122.91162446318064 },
            { lat: 45.496056243359035, lng: -122.91163766718221 },
            { lat: 45.496057395576685, lng: -122.91167024284518 },
            { lat: 45.495986148592443, lng: -122.91167450707758 },
            { lat: 45.4959839551909, lng: -122.91165634903405 },
            { lat: 45.495762619852634, lng: -122.91166763150207 },
            { lat: 45.495754753014, lng: -122.91168932023311 },
            { lat: 45.495743975399265, lng: -122.91171118323297 },
            { lat: 45.49573114013598, lng: -122.91173067059164 },
            { lat: 45.495717900650618, lng: -122.91174599709895 },
            { lat: 45.495703389649705, lng: -122.91175878623744 },
            { lat: 45.495686244759696, lng: -122.91176967353533 },
            { lat: 45.495669861790866, lng: -122.91177650259768 },
            { lat: 45.495651296537787, lng: -122.9117805006876 },
            { lat: 45.495634226134996, lng: -122.91178087592476 },
            { lat: 45.495618946082622, lng: -122.91177855208721 },
            { lat: 45.495605423052787, lng: -122.91177426461398 },
            { lat: 45.495581136416483, lng: -122.91176293516023 },
            { lat: 45.495564107667555, lng: -122.91176032766336 },
            { lat: 45.494706673690409, lng: -122.91180427794697 },
            { lat: 45.494697530224954, lng: -122.91180799478047 },
            { lat: 45.494689456607283, lng: -122.91181514001678 },
            { lat: 45.494683074041617, lng: -122.91182516388231 },
            { lat: 45.4946788736183, lng: -122.91183729511532 },
            { lat: 45.49467715291977, lng: -122.91185306622465 },
            { lat: 45.494678862853711, lng: -122.91192132695079 },
            { lat: 45.494522629515608, lng: -122.9119292899679 },
            { lat: 45.494521676594125, lng: -122.91189149170822 },
            { lat: 45.494274992365341, lng: -122.9119040649679 },
            { lat: 45.493498637484258, lng: -122.91214739344721 },
            { lat: 45.493496479326573, lng: -122.91206843066215 },
            { lat: 45.493491583180067, lng: -122.91198232686232 },
            { lat: 45.493484046398713, lng: -122.9118966093579 },
            { lat: 45.493473883371045, lng: -122.91181144179252 },
            { lat: 45.493461113499315, lng: -122.91172698675967 },
            { lat: 45.493445761162533, lng: -122.91164340549227 },
            { lat: 45.493427855669822, lng: -122.91156085755476 },
            { lat: 45.493407431204531, lng: -122.91147950053841 },
            { lat: 45.493386710343621, lng: -122.91140670380156 },
            { lat: 45.493366336092834, lng: -122.91134223300176 },
            { lat: 45.493341813642466, lng: -122.91127186508812 },
            { lat: 45.493318078359223, lng: -122.9112097622435 },
            { lat: 45.493284031889651, lng: -122.91112891013826 },
            { lat: 45.493134259306935, lng: -122.91079465885205 },
            { lat: 45.492852064129991, lng: -122.9110503084965 },
            { lat: 45.492898265667712, lng: -122.91115340846889 },
            { lat: 45.492766420072087, lng: -122.9112728503231 },
            { lat: 45.492758056878856, lng: -122.91125839809868 },
            { lat: 45.49274757763861, lng: -122.91124985630994 },
            { lat: 45.492734798203259, lng: -122.91124704099188 },
            { lat: 45.492722992296947, lng: -122.91125067334438 },
            { lat: 45.4926137465721, lng: -122.91134765541349 },
            { lat: 45.492573969993863, lng: -122.911379647622 },
            { lat: 45.492533348693613, lng: -122.91140941685315 },
            { lat: 45.492625372107653, lng: -122.91164758088949 },
            { lat: 45.492678852610233, lng: -122.91186062518139 },
            { lat: 45.492687787702152, lng: -122.91195474956652 },
            { lat: 45.492444323983975, lng: -122.91196128294767 },
            { lat: 45.492443781090628, lng: -122.91192033896311 },
            { lat: 45.492331357311137, lng: -122.9119231574207 },
            { lat: 45.49231693163059, lng: -122.91191899406655 },
            { lat: 45.492304808183967, lng: -122.91190999826966 },
            { lat: 45.4922968908364, lng: -122.91190012229937 },
            { lat: 45.492290578106051, lng: -122.91188813503049 },
            { lat: 45.492285809708491, lng: -122.91187312911802 },
            { lat: 45.492283655270526, lng: -122.91185847062513 },
            { lat: 45.49227922757985, lng: -122.91153782782054 },
            { lat: 45.49222184180627, lng: -122.91155450011973 },
            { lat: 45.492225341466074, lng: -122.91186530142259 },
            { lat: 45.492220775997765, lng: -122.91188675288672 },
            { lat: 45.492212520861941, lng: -122.91190408076682 },
            { lat: 45.492201114940514, lng: -122.91191731046263 },
            { lat: 45.492187518163718, lng: -122.91192532855651 },
            { lat: 45.492176039515826, lng: -122.91192751578198 },
            { lat: 45.491104595410668, lng: -122.91195510120167 },
            { lat: 45.4910896061963, lng: -122.91194816543018 },
            { lat: 45.491076837388931, lng: -122.91193502403465 },
            { lat: 45.491068014858513, lng: -122.91191827124803 },
            { lat: 45.491062740632657, lng: -122.91189715137665 },
            { lat: 45.491058185014552, lng: -122.91160645981684 },
            { lat: 45.490993743023516, lng: -122.91160818750539 },
            { lat: 45.490990795431358, lng: -122.91138595446328 },
            { lat: 45.490997650959407, lng: -122.91138577062216 },
            { lat: 45.490987305046346, lng: -122.91060600569293 },
            { lat: 45.490980449519668, lng: -122.9106061896282 },
            { lat: 45.490977189144949, lng: -122.91036056401907 }];
        var Section132018shape = new google.maps.Polygon({
            paths: [Section132018coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132018shape.setMap(map);

        var Tract132433center = new google.maps.LatLng(45.4898681454333, -122.892170456322);
        var Tract132433coords0 = [
            { lat: 45.489570273710484, lng: -122.89212110898214 },
            { lat: 45.490881593356129, lng: -122.89207201754515 },
            { lat: 45.490881306474016, lng: -122.892013515664 },
            { lat: 45.492035397259272, lng: -122.89197074457118 },
            { lat: 45.492035604649921, lng: -122.89214237501353 },
            { lat: 45.49020432844263, lng: -122.89221023558804 },
            { lat: 45.490204685738313, lng: -122.89222972628569 },
            { lat: 45.489585898381804, lng: -122.89225287723562 },
            { lat: 45.489570273710484, lng: -122.89212110898214 }];
        var Tract132433shape = new google.maps.Polygon({
            paths: [Tract132433coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132433shape.setMap(map);

        var Phase132006center = new google.maps.LatLng(45.4909720280811, -122.897580316965);
        var Phase132006coords0 = [
            { lat: 45.488233563478751, lng: -122.90004962971467 },
            { lat: 45.488236605923447, lng: -122.89992091712207 },
            { lat: 45.488240778850532, lng: -122.89985298524161 },
            { lat: 45.488246718898857, lng: -122.8997853197444 },
            { lat: 45.488262729659809, lng: -122.89965856205049 },
            { lat: 45.488273720396535, lng: -122.89959218599429 },
            { lat: 45.488286433037835, lng: -122.8995264343037 },
            { lat: 45.489496763591866, lng: -122.89394532670217 },
            { lat: 45.4895182208181, lng: -122.89384113221992 },
            { lat: 45.489537667379885, lng: -122.89373562618667 },
            { lat: 45.489565830109449, lng: -122.89355459680085 },
            { lat: 45.489587770831136, lng: -122.89337183516889 },
            { lat: 45.489603437679982, lng: -122.89318777331421 },
            { lat: 45.48961279362161, lng: -122.89300284633515 },
            { lat: 45.489615816539796, lng: -122.89281749137584 },
            { lat: 45.489612499288718, lng: -122.89263214659267 },
            { lat: 45.489602849709961, lng: -122.89244725011785 },
            { lat: 45.489585898381804, lng: -122.89225287723562 },
            { lat: 45.490204685738313, lng: -122.89222972628569 },
            { lat: 45.49020432844263, lng: -122.89221023558804 },
            { lat: 45.492035604649921, lng: -122.89214237501353 },
            { lat: 45.492037026904008, lng: -122.89330191466904 },
            { lat: 45.4920402179499, lng: -122.89346811114441 },
            { lat: 45.492049055498036, lng: -122.89364500592349 },
            { lat: 45.49206241926251, lng: -122.89381017505805 },
            { lat: 45.492080673575771, lng: -122.8939743952397 },
            { lat: 45.492103785914829, lng: -122.89413737388337 },
            { lat: 45.49212771460499, lng: -122.89427739326651 },
            { lat: 45.492155229393248, lng: -122.89441607458507 },
            { lat: 45.492186293457124, lng: -122.89455323224307 },
            { lat: 45.492218082348032, lng: -122.89467832816972 },
            { lat: 45.492268161603839, lng: -122.89485277949944 },
            { lat: 45.492450700319942, lng: -122.8954366591628 },
            { lat: 45.492452651054151, lng: -122.89545512538083 },
            { lat: 45.492451458638087, lng: -122.89547372160715 },
            { lat: 45.492447191426656, lng: -122.89549138181897 },
            { lat: 45.49244009403634, lng: -122.89550709365061 },
            { lat: 45.49243230675097, lng: -122.8955180441198 },
            { lat: 45.49242411262977, lng: -122.89552584268698 },
            { lat: 45.492382991724419, lng: -122.89555221646708 },
            { lat: 45.492463490759938, lng: -122.89580860126384 },
            { lat: 45.492506355509953, lng: -122.89578191763198 },
            { lat: 45.49251706954982, lng: -122.89577868539408 },
            { lat: 45.492528021659361, lng: -122.89577854401422 },
            { lat: 45.492541897956031, lng: -122.89578297504197 },
            { lat: 45.492554506684392, lng: -122.89579232926231 },
            { lat: 45.49256500027704, lng: -122.89580597788114 },
            { lat: 45.492572673347063, lng: -122.89582300343041 },
            { lat: 45.49260412386807, lng: -122.8959261577758 },
            { lat: 45.492631244088493, lng: -122.89602464378663 },
            { lat: 45.492657990096916, lng: -122.89613357644062 },
            { lat: 45.492679870589562, lng: -122.8962346633038 },
            { lat: 45.492700830127937, lng: -122.89634612806874 },
            { lat: 45.492717349096921, lng: -122.8964492530976 },
            { lat: 45.492731443196604, lng: -122.89655499380912 },
            { lat: 45.4927417021189, lng: -122.89665844589192 },
            { lat: 45.4927492705537, lng: -122.8967865728239 },
            { lat: 45.492751231410757, lng: -122.89691512063428 },
            { lat: 45.492747577129165, lng: -122.89704359365147 },
            { lat: 45.492738321799557, lng: -122.89717149649248 },
            { lat: 45.492703695424311, lng: -122.89750832261977 },
            { lat: 45.492687001140368, lng: -122.89763973567096 },
            { lat: 45.492662765781986, lng: -122.89778840705705 },
            { lat: 45.492619418817604, lng: -122.89800779528856 },
            { lat: 45.492602109905292, lng: -122.89811824128026 },
            { lat: 45.492589985102278, lng: -122.89823128123291 },
            { lat: 45.492583436940919, lng: -122.89834524850181 },
            { lat: 45.492582497336379, lng: -122.8984595876198 },
            { lat: 45.492586714618845, lng: -122.89856662267435 },
            { lat: 45.492659714314904, lng: -122.89958531619665 },
            { lat: 45.4926594300129, lng: -122.89960878258439 },
            { lat: 45.492656509066151, lng: -122.89963188208068 },
            { lat: 45.492650405682376, lng: -122.8996559645245 },
            { lat: 45.492642292313228, lng: -122.89967640371184 },
            { lat: 45.492631983733787, lng: -122.89969473421739 },
            { lat: 45.492620929816141, lng: -122.89970916993313 },
            { lat: 45.492608515924822, lng: -122.89972116451129 },
            { lat: 45.49259500642102, lng: -122.8997304625219 },
            { lat: 45.492574803676028, lng: -122.89973858416461 },
            { lat: 45.492507331242891, lng: -122.89975256720344 },
            { lat: 45.492516168478723, lng: -122.89987560212597 },
            { lat: 45.490947618995079, lng: -122.90010337218109 },
            { lat: 45.490822304561405, lng: -122.90012561544756 },
            { lat: 45.490739142667692, lng: -122.9001443055638 },
            { lat: 45.490656351539378, lng: -122.90016607018035 },
            { lat: 45.490573987396438, lng: -122.90019089450442 },
            { lat: 45.490492106168659, lng: -122.90021876166561 },
            { lat: 45.490418871918259, lng: -122.90024642812804 },
            { lat: 45.490338061110144, lng: -122.900280022813 },
            { lat: 45.49025789342285, lng: -122.90031659977508 },
            { lat: 45.490178423293727, lng: -122.9003561341644 },
            { lat: 45.490084055860663, lng: -122.90040744127944 },
            { lat: 45.489990862863436, lng: -122.90046291812097 },
            { lat: 45.489906545505526, lng: -122.90051738860707 },
            { lat: 45.489815857155534, lng: -122.90058070230957 },
            { lat: 45.489733986108433, lng: -122.9006422555662 },
            { lat: 45.489646128084686, lng: -122.9007131786877 },
            { lat: 45.489559872692482, lng: -122.90078797250008 },
            { lat: 45.48948228517601, lng: -122.90085987138197 },
            { lat: 45.489413034831195, lng: -122.90092795341057 },
            { lat: 45.489338329519484, lng: -122.90100577802706 },
            { lat: 45.489271802058809, lng: -122.90107914316825 },
            { lat: 45.489206641737184, lng: -122.90115494781074 },
            { lat: 45.489130316203592, lng: -122.90124906092494 },
            { lat: 45.4888096036468, lng: -122.90166139242665 },
            { lat: 45.488563525719869, lng: -122.90127455606921 },
            { lat: 45.488515392357179, lng: -122.90119351880126 },
            { lat: 45.488473705413263, lng: -122.90111485484582 },
            { lat: 45.488437902614265, lng: -122.9010395227362 },
            { lat: 45.4884047600964, lng: -122.90096176895813 },
            { lat: 45.488374358728819, lng: -122.90088178323802 },
            { lat: 45.488342453560278, lng: -122.9007859062977 },
            { lat: 45.488314486042604, lng: -122.900687575693 },
            { lat: 45.488288995681273, lng: -122.90057986980322 },
            { lat: 45.488269464968489, lng: -122.90047750340513 },
            { lat: 45.488253179201259, lng: -122.90036624791735 },
            { lat: 45.488242363340369, lng: -122.90026130306028 },
            { lat: 45.488235817520213, lng: -122.90015564670163 },
            { lat: 45.488233563478751, lng: -122.90004962971467 }];
        var Phase132006shape = new google.maps.Polygon({
            paths: [Phase132006coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Phase132006shape.setMap(map);

        var Phase132005center = new google.maps.LatLng(45.4936354122898, -122.89837880677);
        var Phase132005coords0 = [
            { lat: 45.492254940321111, lng: -122.89207573494069 },
            { lat: 45.493714246558234, lng: -122.89202165241241 },
            { lat: 45.493714334267295, lng: -122.89208016339842 },
            { lat: 45.495708981780304, lng: -122.89200623944427 },
            { lat: 45.495707909774133, lng: -122.89194776185376 },
            { lat: 45.495957998282023, lng: -122.89193849252729 },
            { lat: 45.497001640460454, lng: -122.90201709241593 },
            { lat: 45.496367799486173, lng: -122.90218747517682 },
            { lat: 45.496342335286045, lng: -122.90219235152139 },
            { lat: 45.496225907402192, lng: -122.90222345468761 },
            { lat: 45.496154308521405, lng: -122.90223753941402 },
            { lat: 45.496082200617245, lng: -122.90224464449676 },
            { lat: 45.496019555131149, lng: -122.90224513005808 },
            { lat: 45.495956999124409, lng: -122.90224034608256 },
            { lat: 45.495894751640634, lng: -122.90223030933886 },
            { lat: 45.4958330306424, lng: -122.9022150549884 },
            { lat: 45.4957597280716, lng: -122.90219079432865 },
            { lat: 45.495686867101959, lng: -122.90216126654438 },
            { lat: 45.495615109241143, lng: -122.90212670607097 },
            { lat: 45.495544626313411, lng: -122.90208719568236 },
            { lat: 45.495480842758482, lng: -122.90204641277795 },
            { lat: 45.495418419517634, lng: -122.90200157592415 },
            { lat: 45.495357483954479, lng: -122.90195277661577 },
            { lat: 45.495303039480746, lng: -122.90190464791628 },
            { lat: 45.495250042919928, lng: -122.90185335576435 },
            { lat: 45.49519398652572, lng: -122.90179389626994 },
            { lat: 45.4951443079235, lng: -122.90173628001141 },
            { lat: 45.495092077663173, lng: -122.90167015079857 },
            { lat: 45.49510251548157, lng: -122.90149961969882 },
            { lat: 45.495106667402545, lng: -122.9014945224675 },
            { lat: 45.494997329655973, lng: -122.90131446433843 },
            { lat: 45.494993177742856, lng: -122.9013195615731 },
            { lat: 45.494897686076463, lng: -122.90127832518945 },
            { lat: 45.49473768877904, lng: -122.90093484358805 },
            { lat: 45.494701862109586, lng: -122.90086551975548 },
            { lat: 45.494662181781251, lng: -122.90080057740703 },
            { lat: 45.494568802585064, lng: -122.90066953740821 },
            { lat: 45.494480041024225, lng: -122.90053058090989 },
            { lat: 45.494430735090589, lng: -122.90045762450562 },
            { lat: 45.494301652270657, lng: -122.90021666692084 },
            { lat: 45.494290993001577, lng: -122.90020454773519 },
            { lat: 45.494296113200974, lng: -122.90019535093103 },
            { lat: 45.494270050486527, lng: -122.90016647675226 },
            { lat: 45.494265044097794, lng: -122.90017576115866 },
            { lat: 45.494182812373467, lng: -122.90009086707619 },
            { lat: 45.49409505892428, lng: -122.90000999762373 },
            { lat: 45.493720549418335, lng: -122.89981819080384 },
            { lat: 45.493640793307144, lng: -122.89978054350784 },
            { lat: 45.4935662010302, lng: -122.89975026275177 },
            { lat: 45.493490803472504, lng: -122.89972432551903 },
            { lat: 45.493414725685149, lng: -122.89970277481063 },
            { lat: 45.493344497899017, lng: -122.8996869040766 },
            { lat: 45.49326746981378, lng: -122.8996738544667 },
            { lat: 45.493196585439172, lng: -122.89966581885794 },
            { lat: 45.493119076201069, lng: -122.89966134975961 },
            { lat: 45.493043859914181, lng: -122.89966118026368 },
            { lat: 45.493027441138224, lng: -122.89965875862116 },
            { lat: 45.493008693411895, lng: -122.89965113289394 },
            { lat: 45.4929900307803, lng: -122.89963745922124 },
            { lat: 45.492974782765813, lng: -122.89962017707053 },
            { lat: 45.492961247634412, lng: -122.89959735769449 },
            { lat: 45.492949615570915, lng: -122.89956513682263 },
            { lat: 45.492944073024375, lng: -122.89953196280511 },
            { lat: 45.4928626488608, lng: -122.89839857518129 },
            { lat: 45.492859643389345, lng: -122.89833832016622 },
            { lat: 45.492858812022369, lng: -122.8982839661533 },
            { lat: 45.492861720326069, lng: -122.89818742125523 },
            { lat: 45.492870222553265, lng: -122.8980915469551 },
            { lat: 45.49288220609764, lng: -122.89800872145119 },
            { lat: 45.492919513567912, lng: -122.89780665735672 },
            { lat: 45.4929388933104, lng: -122.89767816992436 },
            { lat: 45.492958739340892, lng: -122.89750866843859 },
            { lat: 45.49297230636413, lng: -122.89733792036476 },
            { lat: 45.49297693344365, lng: -122.89724717994987 },
            { lat: 45.492979786336207, lng: -122.89715629181845 },
            { lat: 45.492980862840874, lng: -122.89706532608824 },
            { lat: 45.492980162127132, lng: -122.89697435293677 },
            { lat: 45.492977684735585, lng: -122.89688344254742 },
            { lat: 45.492973432577465, lng: -122.89679266505507 },
            { lat: 45.492960571135264, lng: -122.89662180662259 },
            { lat: 45.492947706213442, lng: -122.89650189198872 },
            { lat: 45.492931727422416, lng: -122.8963827368763 },
            { lat: 45.492912656676005, lng: -122.89626450469822 },
            { lat: 45.492890520128469, lng: -122.89614735760118 },
            { lat: 45.492865348138551, lng: -122.89603145624318 },
            { lat: 45.492839636673082, lng: -122.89592644346595 },
            { lat: 45.492808746760396, lng: -122.89581337241702 },
            { lat: 45.492772823637566, lng: -122.89569504139345 },
            { lat: 45.492769505958073, lng: -122.89567858003241 },
            { lat: 45.492768794830795, lng: -122.89566148600716 },
            { lat: 45.49277072453588, lng: -122.89564458334142 },
            { lat: 45.492775728899126, lng: -122.89562731863886 },
            { lat: 45.492782735684685, lng: -122.89561339103854 },
            { lat: 45.492797285433831, lng: -122.89559700575646 },
            { lat: 45.4928353528246, lng: -122.89557256998539 },
            { lat: 45.49275485327049, lng: -122.89531618384517 },
            { lat: 45.492715042148085, lng: -122.89534092976793 },
            { lat: 45.492704328121128, lng: -122.89534416209965 },
            { lat: 45.492693376012632, lng: -122.89534430356365 },
            { lat: 45.4926805336271, lng: -122.89534039416412 },
            { lat: 45.492667795812842, lng: -122.89533140042049 },
            { lat: 45.492657112288157, lng: -122.89531805297794 },
            { lat: 45.492649201204678, lng: -122.89530124906005 },
            { lat: 45.4924701411206, lng: -122.89473086122639 },
            { lat: 45.492422104112833, lng: -122.89456345193439 },
            { lat: 45.492391758095643, lng: -122.89444333172017 },
            { lat: 45.492362260131692, lng: -122.89431157698479 },
            { lat: 45.492336315808515, lng: -122.89417831939582 },
            { lat: 45.492315554018241, lng: -122.89405414596038 },
            { lat: 45.492293943907285, lng: -122.89389759484197 },
            { lat: 45.492277196971607, lng: -122.89373984399099 },
            { lat: 45.492265345615188, lng: -122.89358119864272 },
            { lat: 45.49225872161886, lng: -122.89343259339367 },
            { lat: 45.492256417155495, lng: -122.89329436345703 },
            { lat: 45.492254940321111, lng: -122.89207573494069 }];
        var Phase132005shape = new google.maps.Polygon({
            paths: [Phase132005coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Phase132005shape.setMap(map);

        var Tract132428center = new google.maps.LatLng(45.4926065559836, -122.896027672752);
        var Tract132428coords0 = [
            { lat: 45.492035397259272, lng: -122.89197074457118 },
            { lat: 45.492254803593369, lng: -122.89196261308147 },
            { lat: 45.492256404694643, lng: -122.8932899666688 },
            { lat: 45.492258591293819, lng: -122.89342820047587 },
            { lat: 45.492265716812256, lng: -122.89358741616179 },
            { lat: 45.492277760123081, lng: -122.89374603228552 },
            { lat: 45.4922946979235, lng: -122.89390374193815 },
            { lat: 45.492314893681367, lng: -122.89404985054291 },
            { lat: 45.492337409458308, lng: -122.89418436242987 },
            { lat: 45.492361380260583, lng: -122.89430736188164 },
            { lat: 45.4923907658615, lng: -122.89443916736352 },
            { lat: 45.492423663672881, lng: -122.89456928454943 },
            { lat: 45.492471903186463, lng: -122.89473657608866 },
            { lat: 45.492648979057641, lng: -122.89530060389833 },
            { lat: 45.492656073646671, lng: -122.89531631834471 },
            { lat: 45.492666478439439, lng: -122.89533010373729 },
            { lat: 45.492679026076267, lng: -122.8953396225949 },
            { lat: 45.492692873098576, lng: -122.89534423505215 },
            { lat: 45.492703825658893, lng: -122.895344237014 },
            { lat: 45.492714560169446, lng: -122.89534114512161 },
            { lat: 45.49275485327049, lng: -122.89531618384517 },
            { lat: 45.4928353528246, lng: -122.89557256998539 },
            { lat: 45.492796767528311, lng: -122.89559741308976 },
            { lat: 45.49278234296667, lng: -122.895614020625 },
            { lat: 45.492774925844692, lng: -122.89562943110359 },
            { lat: 45.492770569221527, lng: -122.89564539537449 },
            { lat: 45.492768767895583, lng: -122.89566232665979 },
            { lat: 45.492769608700449, lng: -122.89567940878067 },
            { lat: 45.492772634143861, lng: -122.89569437550414 },
            { lat: 45.492803002941443, lng: -122.89579363227541 },
            { lat: 45.4928319059501, lng: -122.89589695360479 },
            { lat: 45.49285602746518, lng: -122.89599204402067 },
            { lat: 45.492878073811838, lng: -122.89608814748476 },
            { lat: 45.4928999029729, lng: -122.89619492209906 },
            { lat: 45.492917525503088, lng: -122.89629285399128 },
            { lat: 45.492934445230873, lng: -122.89640141463121 },
            { lat: 45.492947569947269, lng: -122.89650076373623 },
            { lat: 45.492958532308762, lng: -122.89660064137966 },
            { lat: 45.492967321874559, lng: -122.8967009524364 },
            { lat: 45.492973930273351, lng: -122.89680160136827 },
            { lat: 45.49297800768948, lng: -122.89689239506704 },
            { lat: 45.492980456252894, lng: -122.89699342167479 },
            { lat: 45.492980711139865, lng: -122.89709450760398 },
            { lat: 45.492978772107627, lng: -122.89719555657821 },
            { lat: 45.492975152660883, lng: -122.89728638951298 },
            { lat: 45.492969760401, lng: -122.89737704448211 },
            { lat: 45.492961694881636, lng: -122.89747747844289 },
            { lat: 45.492952575336787, lng: -122.89756752826918 },
            { lat: 45.492941700396514, lng: -122.89765718323945 },
            { lat: 45.492919698014532, lng: -122.89780554303428 },
            { lat: 45.492882203800221, lng: -122.89800873485591 },
            { lat: 45.49287022094282, lng: -122.89809156056074 },
            { lat: 45.492861719510849, lng: -122.89818743500342 },
            { lat: 45.492858812007938, lng: -122.89828397995024 },
            { lat: 45.49285984589546, lng: -122.89834436841332 },
            { lat: 45.492862649796983, lng: -122.89839858891391 },
            { lat: 45.492943909488027, lng: -122.89952983958649 },
            { lat: 45.492659386845517, lng: -122.89957968134837 },
            { lat: 45.492586735129038, lng: -122.89856695022848 },
            { lat: 45.492582502732056, lng: -122.89845991637996 },
            { lat: 45.492583203975379, lng: -122.89835271813934 },
            { lat: 45.492589958258236, lng: -122.89823160786017 },
            { lat: 45.4926020670984, lng: -122.89811856444861 },
            { lat: 45.492618963224629, lng: -122.89801035825226 },
            { lat: 45.492662197915614, lng: -122.89779151119336 },
            { lat: 45.492686548240862, lng: -122.89764287778996 },
            { lat: 45.492704381701131, lng: -122.89750206631068 },
            { lat: 45.492738186138418, lng: -122.89717292810541 },
            { lat: 45.492747504222237, lng: -122.89704503447621 },
            { lat: 45.492751221539159, lng: -122.89691656511506 },
            { lat: 45.492749323755476, lng: -122.89678801539094 },
            { lat: 45.492741818188932, lng: -122.89665988098274 },
            { lat: 45.492732525505929, lng: -122.89656435005996 },
            { lat: 45.492718872814407, lng: -122.89645971014207 },
            { lat: 45.492701009091, lng: -122.89634716070401 },
            { lat: 45.492680077687012, lng: -122.89623568525157 },
            { lat: 45.492658222709515, lng: -122.89613458723031 },
            { lat: 45.492631504196773, lng: -122.89602564093609 },
            { lat: 45.492604408835362, lng: -122.89592714109347 },
            { lat: 45.492572886372159, lng: -122.89582365478088 },
            { lat: 45.492565323914029, lng: -122.89580652947355 },
            { lat: 45.49255491917814, lng: -122.89579274401827 },
            { lat: 45.492542371578431, lng: -122.89578322508137 },
            { lat: 45.492528524573189, lng: -122.89577861252937 },
            { lat: 45.492516481561772, lng: -122.89577878151627 },
            { lat: 45.492505792673725, lng: -122.89578217792888 },
            { lat: 45.492463490759938, lng: -122.89580860126384 },
            { lat: 45.492382991724419, lng: -122.89555221646708 },
            { lat: 45.492424630535204, lng: -122.89552543535562 },
            { lat: 45.492433603611154, lng: -122.8955165058765 },
            { lat: 45.492440468732319, lng: -122.89550644224161 },
            { lat: 45.492447446478465, lng: -122.89549062244421 },
            { lat: 45.49245157942498, lng: -122.89547289779753 },
            { lat: 45.492452630652032, lng: -122.89545428436092 },
            { lat: 45.492450539898378, lng: -122.89543584914384 },
            { lat: 45.49226631653999, lng: -122.89484675368848 },
            { lat: 45.4922391805195, lng: -122.89475475645797 },
            { lat: 45.492213691878369, lng: -122.89466181165473 },
            { lat: 45.492177355469323, lng: -122.89451548804361 },
            { lat: 45.492147268385636, lng: -122.8943778908354 },
            { lat: 45.492120741231624, lng: -122.89423882106767 },
            { lat: 45.49209780950801, lng: -122.89409846485609 },
            { lat: 45.492075857367887, lng: -122.89393516229337 },
            { lat: 45.492058771834387, lng: -122.89377068809266 },
            { lat: 45.492046583348149, lng: -122.8936053352914 },
            { lat: 45.492039313624886, lng: -122.89343939849165 },
            { lat: 45.49203700216831, lng: -122.89329534270544 },
            { lat: 45.492035397259272, lng: -122.89197074457118 }];
        var Tract132428shape = new google.maps.Polygon({
            paths: [Tract132428coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132428shape.setMap(map);

        var Lot132373center = new google.maps.LatLng(45.4892577813585, -122.906789385231);
        var markerLot132373 = new google.maps.Marker({
            position: Lot132373center,
            map: map,
            title: 'Lot132373'
        });
        markers.push(markerLot132373);
        var Lot132373coords0 = [
            { lat: 45.488653978122137, lng: -122.90802201100442 },
            { lat: 45.488657313891792, lng: -122.90784770741516 },
            { lat: 45.488663864797388, lng: -122.90766793965216 },
            { lat: 45.488673568332914, lng: -122.90748846018757 },
            { lat: 45.4886864184579, lng: -122.90730938074829 },
            { lat: 45.488702407173072, lng: -122.90713081281237 },
            { lat: 45.488721524525282, lng: -122.90695286753974 },
            { lat: 45.488743758613836, lng: -122.90677565570306 },
            { lat: 45.488769095597846, lng: -122.90659928761868 },
            { lat: 45.488797519704761, lng: -122.90642387307823 },
            { lat: 45.488826272009696, lng: -122.90626400735265 },
            { lat: 45.488860562012029, lng: -122.90609072509949 },
            { lat: 45.488897882198366, lng: -122.90591871298037 },
            { lat: 45.488938209336418, lng: -122.90574807807735 },
            { lat: 45.488981518321914, lng: -122.90557892661579 },
            { lat: 45.489027782194334, lng: -122.90541136389831 },
            { lat: 45.4890769721536, lng: -122.90524549423931 },
            { lat: 45.489358514424246, lng: -122.90542017602858 },
            { lat: 45.48945191301258, lng: -122.90547029652204 },
            { lat: 45.490091577923451, lng: -122.90576554840652 },
            { lat: 45.490108489989687, lng: -122.90577046229299 },
            { lat: 45.490125731778249, lng: -122.9057716381935 },
            { lat: 45.490144439653889, lng: -122.90576862764719 },
            { lat: 45.4901610603953, lng: -122.90576200244912 },
            { lat: 45.490822224586168, lng: -122.90610041137806 },
            { lat: 45.490614186104558, lng: -122.90755958490806 },
            { lat: 45.49056034395273, lng: -122.90818329284296 },
            { lat: 45.490072932535853, lng: -122.90808938977271 },
            { lat: 45.489928096100037, lng: -122.90806806422302 },
            { lat: 45.489782879895358, lng: -122.90805282876403 },
            { lat: 45.489678991671916, lng: -122.90804568246566 },
            { lat: 45.48958542006077, lng: -122.9080419159577 },
            { lat: 45.488653978122137, lng: -122.90802201100442 }];
        var Lot132373shape = new google.maps.Polygon({
            paths: [Lot132373coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132373shape.setMap(map);

        var Lot132372center = new google.maps.LatLng(45.4882305395259, -122.89385284296);
        var markerLot132372 = new google.maps.Marker({
            position: Lot132372center,
            map: map,
            title: 'Lot132372'
        });
        markers.push(markerLot132372);
        var Lot132372coords0 = [
            { lat: 45.486159254123322, lng: -122.89285212127764 },
            { lat: 45.4888775932995, lng: -122.89230248257898 },
            { lat: 45.488884193523987, lng: -122.89245230745085 },
            { lat: 45.488884193167245, lng: -122.89259839892571 },
            { lat: 45.488877856528454, lng: -122.89274421235116 },
            { lat: 45.488865207725354, lng: -122.89288919274959 },
            { lat: 45.488855971329151, lng: -122.89296542129175 },
            { lat: 45.488844988727031, lng: -122.893041180273 },
            { lat: 45.48881952237295, lng: -122.89318271398761 },
            { lat: 45.488787965878423, lng: -122.89332174571001 },
            { lat: 45.488750439349452, lng: -122.89345774628092 },
            { lat: 45.488723042441983, lng: -122.89354388752086 },
            { lat: 45.488690423264195, lng: -122.89363600364274 },
            { lat: 45.488655013937496, lng: -122.89372601313507 },
            { lat: 45.488620161588464, lng: -122.89380652533806 },
            { lat: 45.48835544326235, lng: -122.89436430895388 },
            { lat: 45.488081614224775, lng: -122.89493251230566 },
            { lat: 45.487991730050275, lng: -122.89486614116655 },
            { lat: 45.48790402352293, lng: -122.89480843022966 },
            { lat: 45.487814598197048, lng: -122.89475632294064 },
            { lat: 45.487717079188812, lng: -122.89470682896689 },
            { lat: 45.487624660083974, lng: -122.89466664444022 },
            { lat: 45.487524350831272, lng: -122.89463012115492 },
            { lat: 45.4874297225135, lng: -122.89460220040407 },
            { lat: 45.487334314293406, lng: -122.89458029139551 },
            { lat: 45.487265792640535, lng: -122.8945683472426 },
            { lat: 45.487203922501571, lng: -122.89456024911932 },
            { lat: 45.487135018720316, lng: -122.89455420577836 },
            { lat: 45.487066014657, lng: -122.89455127832861 },
            { lat: 45.486175356422606, lng: -122.89455715650435 },
            { lat: 45.486159254123322, lng: -122.89285212127764 }];
        var Lot132372shape = new google.maps.Polygon({
            paths: [Lot132372coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132372shape.setMap(map);

        var Lot132371center = new google.maps.LatLng(45.4934289828388, -122.894827277223);
        var markerLot132371 = new google.maps.Marker({
            position: Lot132371center,
            map: map,
            title: 'Lot132371'
        });
        markers.push(markerLot132371);
        var Lot132371coords0 = [
            { lat: 45.492254940321111, lng: -122.89207573494069 },
            { lat: 45.493714246558234, lng: -122.89202165241241 },
            { lat: 45.493714334267295, lng: -122.89208016339842 },
            { lat: 45.494649138805, lng: -122.89204551910773 },
            { lat: 45.494659374659264, lng: -122.89258174932529 },
            { lat: 45.494664271109855, lng: -122.89273469284754 },
            { lat: 45.49467179269022, lng: -122.89290446912317 },
            { lat: 45.494682593620119, lng: -122.89309096139496 },
            { lat: 45.494696037799407, lng: -122.89327710601088 },
            { lat: 45.494710548927664, lng: -122.89344596297957 },
            { lat: 45.494729023219868, lng: -122.89363123375227 },
            { lat: 45.494746090926739, lng: -122.89378240025292 },
            { lat: 45.494764910808939, lng: -122.8939331457206 },
            { lat: 45.494785477741189, lng: -122.89408342910194 },
            { lat: 45.494807786122351, lng: -122.89423320946936 },
            { lat: 45.494837407952332, lng: -122.8944155317711 },
            { lat: 45.494937588391089, lng: -122.8949957437022 },
            { lat: 45.4950175021851, lng: -122.89549254467164 },
            { lat: 45.49487387767978, lng: -122.89553735466937 },
            { lat: 45.494721529796884, lng: -122.89558112574305 },
            { lat: 45.494568678312071, lng: -122.89562119023356 },
            { lat: 45.494415367825809, lng: -122.89565753648046 },
            { lat: 45.494247649101638, lng: -122.89569293389272 },
            { lat: 45.494093523580119, lng: -122.89572147273621 },
            { lat: 45.493939077700048, lng: -122.89574626416879 },
            { lat: 45.493661932490021, lng: -122.8957856991654 },
            { lat: 45.493545486596553, lng: -122.89580560241738 },
            { lat: 45.493429266175525, lng: -122.89582801211544 },
            { lat: 45.493274702463189, lng: -122.89586178162641 },
            { lat: 45.493133466742961, lng: -122.89589663151033 },
            { lat: 45.492992709154336, lng: -122.89593519425314 },
            { lat: 45.492852477974765, lng: -122.89597745660097 },
            { lat: 45.492814103113737, lng: -122.89583211697065 },
            { lat: 45.492772417649576, lng: -122.8956935922978 },
            { lat: 45.492768854565149, lng: -122.89567083918024 },
            { lat: 45.492769347250039, lng: -122.89565372961263 },
            { lat: 45.492772066724527, lng: -122.8956386446436 },
            { lat: 45.492776839793713, lng: -122.89562462855197 },
            { lat: 45.492784232694184, lng: -122.89561111048442 },
            { lat: 45.492798253476209, lng: -122.89559627183166 },
            { lat: 45.4928353528246, lng: -122.89557256998539 },
            { lat: 45.49275485327049, lng: -122.89531618384517 },
            { lat: 45.492715042148085, lng: -122.89534092976793 },
            { lat: 45.492704328121128, lng: -122.89534416209965 },
            { lat: 45.492693376012632, lng: -122.89534430356366 },
            { lat: 45.4926805336271, lng: -122.89534039416412 },
            { lat: 45.492667795812842, lng: -122.89533140042049 },
            { lat: 45.492657112288157, lng: -122.89531805297794 },
            { lat: 45.492649201204678, lng: -122.89530124906005 },
            { lat: 45.4924701411206, lng: -122.89473086122639 },
            { lat: 45.492422104112833, lng: -122.89456345193439 },
            { lat: 45.492391758095643, lng: -122.89444333172017 },
            { lat: 45.492362260131692, lng: -122.89431157698479 },
            { lat: 45.492336315808515, lng: -122.89417831939582 },
            { lat: 45.492315554018241, lng: -122.89405414596038 },
            { lat: 45.492293943907285, lng: -122.89389759484197 },
            { lat: 45.492277196971607, lng: -122.89373984399099 },
            { lat: 45.492265345615188, lng: -122.89358119864272 },
            { lat: 45.49225872161886, lng: -122.89343259339367 },
            { lat: 45.492256417155495, lng: -122.89329436345703 },
            { lat: 45.492254940321111, lng: -122.89207573494069 }];
        var Lot132371shape = new google.maps.Polygon({
            paths: [Lot132371coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132371shape.setMap(map);

        var Tract132440center = new google.maps.LatLng(45.4944382425612, -122.908464005995);
        var Tract132440coords0 = [
            { lat: 45.494335992121293, lng: -122.90824782306896 },
            { lat: 45.494372089040176, lng: -122.90823872090762 },
            { lat: 45.494409174401788, lng: -122.9082268498268 },
            { lat: 45.494445829078941, lng: -122.908212527483 },
            { lat: 45.494481972976637, lng: -122.90819578516761 },
            { lat: 45.494467075625252, lng: -122.90820755131635 },
            { lat: 45.4944558858912, lng: -122.90822537754394 },
            { lat: 45.494449175259184, lng: -122.9082488870518 },
            { lat: 45.494448462432629, lng: -122.90827275933135 },
            { lat: 45.494500010365364, lng: -122.9087706428012 },
            { lat: 45.494506748842987, lng: -122.90881070046612 },
            { lat: 45.494515599412438, lng: -122.90884991845894 },
            { lat: 45.494526511342904, lng: -122.90888807198468 },
            { lat: 45.49454082034525, lng: -122.90892855060521 },
            { lat: 45.494490480142879, lng: -122.90896834354784 },
            { lat: 45.494475079578272, lng: -122.9089250915608 },
            { lat: 45.494463133623775, lng: -122.90888430675392 },
            { lat: 45.494452891023641, lng: -122.90884074216714 },
            { lat: 45.494444531764067, lng: -122.90879362176162 },
            { lat: 45.494392360176128, lng: -122.90829857260884 },
            { lat: 45.494388821217839, lng: -122.90828606405431 },
            { lat: 45.494383707191204, lng: -122.90827471020094 },
            { lat: 45.494370420126138, lng: -122.90825777462194 },
            { lat: 45.494353831207661, lng: -122.90824842687653 },
            { lat: 45.494335992121293, lng: -122.90824782306896 }];
        var Tract132440shape = new google.maps.Polygon({
            paths: [Tract132440coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132440shape.setMap(map);

        var Tract132450center = new google.maps.LatLng(45.4940721422932, -122.907911854628);
        var Tract132450coords0 = [
            { lat: 45.493867130969164, lng: -122.90711622137889 },
            { lat: 45.493953562216987, lng: -122.90700525606111 },
            { lat: 45.494033663888793, lng: -122.9068927997524 },
            { lat: 45.494028259104759, lng: -122.90690318878514 },
            { lat: 45.494024866352255, lng: -122.90691582056955 },
            { lat: 45.494024044595122, lng: -122.90692929157005 },
            { lat: 45.494025857061409, lng: -122.90694256529515 },
            { lat: 45.494079590685196, lng: -122.90708323855225 },
            { lat: 45.494110976740963, lng: -122.90718097277158 },
            { lat: 45.494125210119769, lng: -122.90723405956885 },
            { lat: 45.494138172794472, lng: -122.90728984436254 },
            { lat: 45.494150095207338, lng: -122.90735074151186 },
            { lat: 45.494159007290385, lng: -122.90740620481562 },
            { lat: 45.494166178646736, lng: -122.90746217605772 },
            { lat: 45.494171595131796, lng: -122.90751854484232 },
            { lat: 45.494177068565044, lng: -122.90762897899327 },
            { lat: 45.494171283273545, lng: -122.90840204207763 },
            { lat: 45.494173900427214, lng: -122.90850500036778 },
            { lat: 45.494181363400308, lng: -122.90861447697702 },
            { lat: 45.494190780815785, lng: -122.9087014022619 },
            { lat: 45.494202225684766, lng: -122.90878128135016 },
            { lat: 45.494216242067893, lng: -122.90886023700858 },
            { lat: 45.494232830146927, lng: -122.90893827026035 },
            { lat: 45.494253729590334, lng: -122.90902178481636 },
            { lat: 45.494275536307782, lng: -122.9090971778683 },
            { lat: 45.494301502938377, lng: -122.90917600219061 },
            { lat: 45.494328278645035, lng: -122.90924808597767 },
            { lat: 45.494191768192827, lng: -122.90935641971687 },
            { lat: 45.494160798312706, lng: -122.90927291229895 },
            { lat: 45.494132934085073, lng: -122.90918829468848 },
            { lat: 45.49410787952818, lng: -122.90910181456827 },
            { lat: 45.494087281701766, lng: -122.90902040924593 },
            { lat: 45.494069009246509, lng: -122.90893685662768 },
            { lat: 45.494052226952086, lng: -122.9088455462964 },
            { lat: 45.494038466992727, lng: -122.90875280642713 },
            { lat: 45.494028249525421, lng: -122.90866345964106 },
            { lat: 45.494018830951148, lng: -122.90853834795887 },
            { lat: 45.494015011655144, lng: -122.90841263884468 },
            { lat: 45.4940207702777, lng: -122.9076338727143 },
            { lat: 45.494015962529147, lng: -122.90753998053992 },
            { lat: 45.494005625228546, lng: -122.90744923525536 },
            { lat: 45.493990939399787, lng: -122.90736561737261 },
            { lat: 45.493971519011211, lng: -122.90728397492134 },
            { lat: 45.493947492750408, lng: -122.90720484889661 },
            { lat: 45.493918982690992, lng: -122.90712819775833 },
            { lat: 45.493908988169345, lng: -122.90711300458013 },
            { lat: 45.493895448631555, lng: -122.90710511995654 },
            { lat: 45.4938876735216, lng: -122.90710445757647 },
            { lat: 45.493879993921361, lng: -122.90710630768037 },
            { lat: 45.493867130969164, lng: -122.90711622137889 }];
        var Tract132450shape = new google.maps.Polygon({
            paths: [Tract132450coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132450shape.setMap(map);

        var Tract132455center = new google.maps.LatLng(45.4945006965685, -122.906846003276);
        var Tract132455coords0 = [
            { lat: 45.494114287135737, lng: -122.90719270772794 },
            { lat: 45.494134877535323, lng: -122.90717788845615 },
            { lat: 45.494152589355096, lng: -122.90716216437229 },
            { lat: 45.494169297237889, lng: -122.9071443568768 },
            { lat: 45.494184880286682, lng: -122.90712459482158 },
            { lat: 45.494260503530128, lng: -122.90701034513178 },
            { lat: 45.494332656273535, lng: -122.90689212957055 },
            { lat: 45.494396694394879, lng: -122.90677876589967 },
            { lat: 45.494457766835396, lng: -122.90666214051227 },
            { lat: 45.494515791497818, lng: -122.90654241017329 },
            { lat: 45.494580816847559, lng: -122.9063983797995 },
            { lat: 45.494879984199365, lng: -122.90674655227284 },
            { lat: 45.494860725119864, lng: -122.9068022502495 },
            { lat: 45.49483923724727, lng: -122.90679055296373 },
            { lat: 45.49481636125946, lng: -122.90678456653688 },
            { lat: 45.494793101141234, lng: -122.90678465312756 },
            { lat: 45.494770247512392, lng: -122.90679080978512 },
            { lat: 45.494776086677007, lng: -122.90678712215852 },
            { lat: 45.49478102104861, lng: -122.90678129012097 },
            { lat: 45.494786555910608, lng: -122.90676611679424 },
            { lat: 45.494786038282484, lng: -122.90674903980918 },
            { lat: 45.49478329422444, lng: -122.90674079271534 },
            { lat: 45.494779072894993, lng: -122.90673392166281 },
            { lat: 45.494633954889281, lng: -122.90656622144994 },
            { lat: 45.494622577228185, lng: -122.90655842871732 },
            { lat: 45.494611249806447, lng: -122.90655499991597 },
            { lat: 45.494599670631246, lng: -122.90655531260589 },
            { lat: 45.494587460183588, lng: -122.90655989651221 },
            { lat: 45.494576424104622, lng: -122.90656862606848 },
            { lat: 45.494566583910505, lng: -122.90658212853997 },
            { lat: 45.494523673931681, lng: -122.90667148930959 },
            { lat: 45.494479214924013, lng: -122.90675939221244 },
            { lat: 45.494433118013205, lng: -122.90684557338142 },
            { lat: 45.494383463393973, lng: -122.90693332930293 },
            { lat: 45.4943025707203, lng: -122.90706630104766 },
            { lat: 45.494222382030614, lng: -122.90718692608297 },
            { lat: 45.494202201855309, lng: -122.90721182694161 },
            { lat: 45.494181342715294, lng: -122.907233365944 },
            { lat: 45.494157003967324, lng: -122.90725405215919 },
            { lat: 45.494133784538406, lng: -122.90726997682766 },
            { lat: 45.494114287135737, lng: -122.90719270772794 }];
        var Tract132455shape = new google.maps.Polygon({
            paths: [Tract132455coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132455shape.setMap(map);

        var Tract132439center = new google.maps.LatLng(45.4945876750535, -122.907265332852);
        var Tract132439coords0 = [
            { lat: 45.494173008708785, lng: -122.907537403582 },
            { lat: 45.494175871041726, lng: -122.90755263130652 },
            { lat: 45.494182097108009, lng: -122.90756591063996 },
            { lat: 45.494191005947634, lng: -122.90757561903418 },
            { lat: 45.4942007883085, lng: -122.90758050325147 },
            { lat: 45.494209423158864, lng: -122.90758123361306 },
            { lat: 45.494247322158984, lng: -122.90757621327316 },
            { lat: 45.4942820165337, lng: -122.9075683166696 },
            { lat: 45.494323609760428, lng: -122.90755154179331 },
            { lat: 45.4943633255112, lng: -122.90752725143984 },
            { lat: 45.494400495272977, lng: -122.90749585445994 },
            { lat: 45.494435712258877, lng: -122.90745631817317 },
            { lat: 45.494460480955723, lng: -122.90742088382197 },
            { lat: 45.494483255740633, lng: -122.90738041599178 },
            { lat: 45.494579961695223, lng: -122.90717107190613 },
            { lat: 45.494598428345526, lng: -122.90713419631209 },
            { lat: 45.494622939773429, lng: -122.90709236696013 },
            { lat: 45.494660167983412, lng: -122.90703973759794 },
            { lat: 45.494667774435037, lng: -122.90702608539976 },
            { lat: 45.494673551067457, lng: -122.90701072662785 },
            { lat: 45.494677131778239, lng: -122.90699526208331 },
            { lat: 45.494680704046104, lng: -122.9069329736419 },
            { lat: 45.494684582412454, lng: -122.90690998574797 },
            { lat: 45.49469031729879, lng: -122.90688865140844 },
            { lat: 45.494699105070595, lng: -122.90686585054539 },
            { lat: 45.494710118599833, lng: -122.9068450954 },
            { lat: 45.494722354303924, lng: -122.90682776738394 },
            { lat: 45.494736995377885, lng: -122.90681219087618 },
            { lat: 45.494759199562367, lng: -122.90679611667437 },
            { lat: 45.494782962472506, lng: -122.90678661845624 },
            { lat: 45.494807804755638, lng: -122.90678388785734 },
            { lat: 45.494832539988742, lng: -122.90678815237095 },
            { lat: 45.494856203419296, lng: -122.90679924567638 },
            { lat: 45.494877635126912, lng: -122.90681649756986 },
            { lat: 45.494896501357296, lng: -122.90683963939831 },
            { lat: 45.494911518467411, lng: -122.906866967086 },
            { lat: 45.494920857944095, lng: -122.90689202490221 },
            { lat: 45.494926977020739, lng: -122.90691708228124 },
            { lat: 45.494930568882481, lng: -122.90694497778956 },
            { lat: 45.4949311067678, lng: -122.90697096678579 },
            { lat: 45.49492867481036, lng: -122.90699911435163 },
            { lat: 45.494923728777465, lng: -122.90702414541822 },
            { lat: 45.4949162899027, lng: -122.90704789695651 },
            { lat: 45.494905516643435, lng: -122.90707176309151 },
            { lat: 45.4948922328337, lng: -122.90709291695515 },
            { lat: 45.494876770455456, lng: -122.90711082988336 },
            { lat: 45.494861011995646, lng: -122.90712401905375 },
            { lat: 45.4948234032861, lng: -122.90714846872639 },
            { lat: 45.494800999463742, lng: -122.90716693481667 },
            { lat: 45.494773660206711, lng: -122.90719484874927 },
            { lat: 45.494748643932681, lng: -122.9072268654986 },
            { lat: 45.494731172835387, lng: -122.90725404369293 },
            { lat: 45.494715381508534, lng: -122.90728322612729 },
            { lat: 45.494616563105623, lng: -122.90749720266506 },
            { lat: 45.494586876274646, lng: -122.90755288501515 },
            { lat: 45.494561727941409, lng: -122.90759227694294 },
            { lat: 45.494535568904737, lng: -122.90762753523106 },
            { lat: 45.494505037025526, lng: -122.90766276253788 },
            { lat: 45.494474226015122, lng: -122.90769294662732 },
            { lat: 45.49444309498152, lng: -122.90771877812665 },
            { lat: 45.494412451048674, lng: -122.90774017920658 },
            { lat: 45.494382120611682, lng: -122.90775781614155 },
            { lat: 45.494349711464011, lng: -122.90777307998778 },
            { lat: 45.494317973642559, lng: -122.90778467555607 },
            { lat: 45.494288999843306, lng: -122.90779250945729 },
            { lat: 45.49420612529395, lng: -122.90780493460711 },
            { lat: 45.49419772916999, lng: -122.90780789317341 },
            { lat: 45.494188737917732, lng: -122.90781523358825 },
            { lat: 45.4941817010982, lng: -122.90782606007312 },
            { lat: 45.494177262267051, lng: -122.90783938248559 },
            { lat: 45.494175827120323, lng: -122.90785274923799 },
            { lat: 45.4941773004219, lng: -122.90764467102414 },
            { lat: 45.494173008708785, lng: -122.907537403582 }];
        var Tract132439shape = new google.maps.Polygon({
            paths: [Tract132439coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132439shape.setMap(map);

        var Lot132157center = new google.maps.LatLng(45.4943254494105, -122.908276283939);
        var markerLot132157 = new google.maps.Marker({
            position: Lot132157center,
            map: map,
            title: 'Lot132157'
        });
        markers.push(markerLot132157);
        var Lot132157coords0 = [
            { lat: 45.494171254118378, lng: -122.90839042787046 },
            { lat: 45.49417228264322, lng: -122.90826071529233 },
            { lat: 45.494256196095996, lng: -122.90825962302939 },
            { lat: 45.494294095067687, lng: -122.90825542988762 },
            { lat: 45.494342222018439, lng: -122.90824701232449 },
            { lat: 45.494355820969986, lng: -122.908249061481 },
            { lat: 45.49436761554152, lng: -122.9082554798121 },
            { lat: 45.494378701860668, lng: -122.90826686380787 },
            { lat: 45.494386695684653, lng: -122.90828076520872 },
            { lat: 45.494393378483586, lng: -122.9083042907141 },
            { lat: 45.49440164980205, lng: -122.90838401288596 },
            { lat: 45.494171601972525, lng: -122.90843168446828 },
            { lat: 45.494171254118378, lng: -122.90839042787046 }];
        var Lot132157shape = new google.maps.Polygon({
            paths: [Lot132157coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132157shape.setMap(map);

        var Tract132441center = new google.maps.LatLng(45.4948581731698, -122.907709157217);
        var Tract132441coords0 = [
            { lat: 45.494631043956218, lng: -122.9074659726962 },
            { lat: 45.494670736278422, lng: -122.90737975119593 },
            { lat: 45.49488002746682, lng: -122.90766113894088 },
            { lat: 45.494895124958127, lng: -122.90767163167131 },
            { lat: 45.494911804715763, lng: -122.90767453752984 },
            { lat: 45.49492823720135, lng: -122.90766953777745 },
            { lat: 45.494942619997254, lng: -122.90765718081182 },
            { lat: 45.494885621563689, lng: -122.90772213594822 },
            { lat: 45.494797734868712, lng: -122.90781028366446 },
            { lat: 45.494805169681008, lng: -122.90780127677199 },
            { lat: 45.494811096413109, lng: -122.90779075198824 },
            { lat: 45.494815542387336, lng: -122.9077788430041 },
            { lat: 45.494818558713284, lng: -122.90776449446975 },
            { lat: 45.494819438346369, lng: -122.90775106976626 },
            { lat: 45.494818338083682, lng: -122.90773617590169 },
            { lat: 45.4948150989469, lng: -122.9077219258993 },
            { lat: 45.494810468521038, lng: -122.90771015988065 },
            { lat: 45.494803621419322, lng: -122.90769878051857 },
            { lat: 45.494631043956218, lng: -122.9074659726962 }];
        var Tract132441shape = new google.maps.Polygon({
            paths: [Tract132441coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132441shape.setMap(map);

        var Tract132443center = new google.maps.LatLng(45.4952599927328, -122.907497332476);
        var Tract132443coords0 = [
            { lat: 45.495162494169925, lng: -122.90750244302993 },
            { lat: 45.495279077893066, lng: -122.90734456745767 },
            { lat: 45.4952697242367, lng: -122.90736224794556 },
            { lat: 45.49526474010667, lng: -122.90738194164125 },
            { lat: 45.495263941264184, lng: -122.90740284081174 },
            { lat: 45.495267798814083, lng: -122.9074245725848 },
            { lat: 45.495341821403841, lng: -122.90759309214253 },
            { lat: 45.49540289377817, lng: -122.90774884304977 },
            { lat: 45.495351860779905, lng: -122.90778681056879 },
            { lat: 45.495292529648587, lng: -122.90763546214959 },
            { lat: 45.4952553448838, lng: -122.90754930064307 },
            { lat: 45.495234563451362, lng: -122.90750551913801 },
            { lat: 45.49522747622477, lng: -122.90749656153235 },
            { lat: 45.495218383956619, lng: -122.90748900245133 },
            { lat: 45.4952094179279, lng: -122.90748461378686 },
            { lat: 45.495198979917554, lng: -122.90748261324519 },
            { lat: 45.495189516656112, lng: -122.90748346976363 },
            { lat: 45.495179341288853, lng: -122.90748733601758 },
            { lat: 45.495170838980854, lng: -122.90749330573344 },
            { lat: 45.495162494169925, lng: -122.90750244302993 }];
        var Tract132443shape = new google.maps.Polygon({
            paths: [Tract132443coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132443shape.setMap(map);

        var Tract132444center = new google.maps.LatLng(45.4937637150517, -122.908356642251);
        var Tract132444coords0 = [
            { lat: 45.493610136690961, lng: -122.90739336652031 },
            { lat: 45.493669242427778, lng: -122.90733587535873 },
            { lat: 45.493699752598232, lng: -122.90741413791693 },
            { lat: 45.493712183023369, lng: -122.90745117608081 },
            { lat: 45.493725227417663, lng: -122.90750071464448 },
            { lat: 45.493734866711719, lng: -122.90755226574143 },
            { lat: 45.493739819579432, lng: -122.90759269607244 },
            { lat: 45.493742599121219, lng: -122.90763354440136 },
            { lat: 45.493743190133173, lng: -122.90767450629863 },
            { lat: 45.493741591180829, lng: -122.90771548234558 },
            { lat: 45.493738284660779, lng: -122.90775211877326 },
            { lat: 45.493685938883353, lng: -122.90818968387372 },
            { lat: 45.493682701058823, lng: -122.90825527882733 },
            { lat: 45.493685073106683, lng: -122.90832094858327 },
            { lat: 45.493691725079017, lng: -122.90837771104927 },
            { lat: 45.493702571647695, lng: -122.90843315101955 },
            { lat: 45.493853642690652, lng: -122.90902694117203 },
            { lat: 45.493858756006475, lng: -122.90904135502582 },
            { lat: 45.493865385703046, lng: -122.90905446073504 },
            { lat: 45.49388144748378, lng: -122.90907454678477 },
            { lat: 45.493891435852191, lng: -122.90908222278465 },
            { lat: 45.49390214311056, lng: -122.9090875933354 },
            { lat: 45.493923396319133, lng: -122.90909103069605 },
            { lat: 45.493944432855685, lng: -122.90908552251527 },
            { lat: 45.494085533416808, lng: -122.90901294691642 },
            { lat: 45.4941096596205, lng: -122.90910836081105 },
            { lat: 45.493947738437406, lng: -122.90919170348305 },
            { lat: 45.493935832380672, lng: -122.9092012684977 },
            { lat: 45.493926155255494, lng: -122.90921500702065 },
            { lat: 45.493920234527913, lng: -122.90922915935506 },
            { lat: 45.493916938677991, lng: -122.90924338281766 },
            { lat: 45.49391578337638, lng: -122.90925976756419 },
            { lat: 45.493917027775453, lng: -122.90927463823765 },
            { lat: 45.493966863647785, lng: -122.90947212514646 },
            { lat: 45.493899807929957, lng: -122.90950662275009 },
            { lat: 45.493636975945847, lng: -122.90847371809134 },
            { lat: 45.493627085884029, lng: -122.90842843966335 },
            { lat: 45.493619920014481, lng: -122.90838481869473 },
            { lat: 45.493614905984167, lng: -122.90834059455739 },
            { lat: 45.493611904613026, lng: -122.9082915072096 },
            { lat: 45.4936114960595, lng: -122.90824542920556 },
            { lat: 45.493613626142924, lng: -122.90819624987672 },
            { lat: 45.493617333935333, lng: -122.90815627892114 },
            { lat: 45.493668483500649, lng: -122.90773055684207 },
            { lat: 45.493671277174187, lng: -122.9076937858876 },
            { lat: 45.493671920832625, lng: -122.90766051020356 },
            { lat: 45.493670788161175, lng: -122.90762726091741 },
            { lat: 45.49366788568102, lng: -122.90759422945648 },
            { lat: 45.493663230102676, lng: -122.90756160599395 },
            { lat: 45.49365684822989, lng: -122.90752957835399 },
            { lat: 45.493640221169215, lng: -122.90747135599233 },
            { lat: 45.493610136690961, lng: -122.90739336652031 }];
        var Tract132444shape = new google.maps.Polygon({
            paths: [Tract132444coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132444shape.setMap(map);

        var Tract132400center = new google.maps.LatLng(45.4933771629091, -122.907954500393);
        var Tract132400coords0 = [
            { lat: 45.493282842404277, lng: -122.90819397505834 },
            { lat: 45.493312419639686, lng: -122.90813423144684 },
            { lat: 45.493337373769521, lng: -122.90807001401967 },
            { lat: 45.493357275888016, lng: -122.90800232346076 },
            { lat: 45.493371890617681, lng: -122.90793196032686 },
            { lat: 45.493378260348479, lng: -122.90788699494126 },
            { lat: 45.493382143834332, lng: -122.90784608279785 },
            { lat: 45.493384260108307, lng: -122.90780490952092 },
            { lat: 45.493384601245857, lng: -122.90776362928763 },
            { lat: 45.493382897008566, lng: -122.90771782492594 },
            { lat: 45.493379494530942, lng: -122.90767682628481 },
            { lat: 45.493374334762031, lng: -122.90763620030681 },
            { lat: 45.493367437023061, lng: -122.90759609911947 },
            { lat: 45.493384831093984, lng: -122.90758321920072 },
            { lat: 45.493392061874104, lng: -122.90762364991666 },
            { lat: 45.493397634580383, lng: -122.90766500802206 },
            { lat: 45.493403363241143, lng: -122.90774410070753 },
            { lat: 45.49340277026306, lng: -122.90782347916463 },
            { lat: 45.493395861341519, lng: -122.90790238099378 },
            { lat: 45.493389891708766, lng: -122.90794228297041 },
            { lat: 45.493382030340186, lng: -122.90798288266321 },
            { lat: 45.493362575682994, lng: -122.90805742685478 },
            { lat: 45.493337211274564, lng: -122.90812862289327 },
            { lat: 45.493321586033936, lng: -122.90816439569724 },
            { lat: 45.493304480234286, lng: -122.90819877191204 },
            { lat: 45.49346985846703, lng: -122.90884862603646 },
            { lat: 45.493701973707367, lng: -122.90872920912344 },
            { lat: 45.493720637538495, lng: -122.90880254980034 },
            { lat: 45.493488522223117, lng: -122.90892196645301 },
            { lat: 45.493667691894075, lng: -122.90962603690315 },
            { lat: 45.493649638418795, lng: -122.90963532462969 },
            { lat: 45.493282842404277, lng: -122.90819397505834 }];
        var Tract132400shape = new google.maps.Polygon({
            paths: [Tract132400coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132400shape.setMap(map);

        var Tract132399center = new google.maps.LatLng(45.4939657846836, -122.907556682292);
        var Tract132399coords0 = [
            { lat: 45.493780086545776, lng: -122.90873816122964 },
            { lat: 45.494014793205181, lng: -122.90861740991117 },
            { lat: 45.4939401371324, lng: -122.90832404621717 },
            { lat: 45.493941271125564, lng: -122.90816965226938 },
            { lat: 45.493984274770028, lng: -122.90781217903142 },
            { lat: 45.493990040024713, lng: -122.90774931541982 },
            { lat: 45.493992821385049, lng: -122.90765961070758 },
            { lat: 45.493991776819847, lng: -122.9076132657202 },
            { lat: 45.493988953818217, lng: -122.90756588421247 },
            { lat: 45.493983106527459, lng: -122.9075083672171 },
            { lat: 45.49397464622087, lng: -122.90745151106933 },
            { lat: 45.493963608571505, lng: -122.907395555504 },
            { lat: 45.493951062709527, lng: -122.9073445006463 },
            { lat: 45.4939367339768, lng: -122.9072957536393 },
            { lat: 45.493920407200477, lng: -122.90724829376363 },
            { lat: 45.493867130969164, lng: -122.90711622137889 },
            { lat: 45.493879284084564, lng: -122.9071066116085 },
            { lat: 45.493892996577308, lng: -122.90710463724842 },
            { lat: 45.493906900957064, lng: -122.90711111219319 },
            { lat: 45.493913123395416, lng: -122.90711777379612 },
            { lat: 45.493918127693476, lng: -122.90712626054058 },
            { lat: 45.493944638346896, lng: -122.907196503819 },
            { lat: 45.49396614499026, lng: -122.90726465728397 },
            { lat: 45.493982952170171, lng: -122.90732933926377 },
            { lat: 45.493996762508829, lng: -122.90739543965358 },
            { lat: 45.494007517426169, lng: -122.90746267807256 },
            { lat: 45.494015171302507, lng: -122.90753076931215 },
            { lat: 45.494019558658792, lng: -122.90759638844575 },
            { lat: 45.494021065624239, lng: -122.90766531058269 },
            { lat: 45.49401523956935, lng: -122.90843237492399 },
            { lat: 45.494017192763785, lng: -122.90850310586806 },
            { lat: 45.494020920098578, lng: -122.90857369263982 },
            { lat: 45.494026416824738, lng: -122.90864404530402 },
            { lat: 45.4940336759388, lng: -122.90871407422371 },
            { lat: 45.4938040238809, lng: -122.90883222467222 },
            { lat: 45.493780086545776, lng: -122.90873816122964 }];
        var Tract132399shape = new google.maps.Polygon({
            paths: [Tract132399coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132399shape.setMap(map);

        var Tract132396center = new google.maps.LatLng(45.4950431490425, -122.907001831168);
        var Tract132396coords0 = [
            { lat: 45.494848472146451, lng: -122.90713178678645 },
            { lat: 45.494870092371443, lng: -122.90711695703014 },
            { lat: 45.494888834271464, lng: -122.90709736922391 },
            { lat: 45.494905740061483, lng: -122.90707134371546 },
            { lat: 45.494917986949822, lng: -122.90704322602956 },
            { lat: 45.494926840734053, lng: -122.90701011001356 },
            { lat: 45.494930823080672, lng: -122.90697752511181 },
            { lat: 45.494930530684783, lng: -122.90694445448916 },
            { lat: 45.494925487994308, lng: -122.90690975947595 },
            { lat: 45.494971865284072, lng: -122.9068891656873 },
            { lat: 45.495122366346557, lng: -122.90662137464663 },
            { lat: 45.495192213017866, lng: -122.90672035563843 },
            { lat: 45.495259308448368, lng: -122.90682288440622 },
            { lat: 45.495323642356531, lng: -122.90692893139766 },
            { lat: 45.495385123570294, lng: -122.9070383463376 },
            { lat: 45.495255938170686, lng: -122.90723444961789 },
            { lat: 45.495091085645129, lng: -122.90745907270421 },
            { lat: 45.494848472146451, lng: -122.90713178678645 }];
        var Tract132396shape = new google.maps.Polygon({
            paths: [Tract132396coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132396shape.setMap(map);

        var Tract132395center = new google.maps.LatLng(45.4947549675733, -122.908416870487);
        var Tract132395coords0 = [
            { lat: 45.494478302979381, lng: -122.90856399531363 },
            { lat: 45.494550544502005, lng: -122.90853340761159 },
            { lat: 45.494622709010848, lng: -122.90849462373222 },
            { lat: 45.494694422095783, lng: -122.90844723044144 },
            { lat: 45.494760262691557, lng: -122.90839511710688 },
            { lat: 45.494816901873769, lng: -122.90834288815765 },
            { lat: 45.494871953347669, lng: -122.90828466146421 },
            { lat: 45.494910380908145, lng: -122.90823905437524 },
            { lat: 45.49503055955028, lng: -122.90808807890535 },
            { lat: 45.494903427668135, lng: -122.90782903156131 },
            { lat: 45.494930943088775, lng: -122.90780055599664 },
            { lat: 45.495077462391706, lng: -122.90804399881814 },
            { lat: 45.495332066222538, lng: -122.90773419093959 },
            { lat: 45.495351860779905, lng: -122.90778681056879 },
            { lat: 45.49540289377817, lng: -122.90774884304977 },
            { lat: 45.495409591309127, lng: -122.90776718085409 },
            { lat: 45.495628793937023, lng: -122.90758042059423 },
            { lat: 45.495640158231154, lng: -122.90761165531498 },
            { lat: 45.495426855364713, lng: -122.90779338888827 },
            { lat: 45.49527462467335, lng: -122.90784515069561 },
            { lat: 45.495090695475312, lng: -122.90806895956335 },
            { lat: 45.49504393846567, lng: -122.90811290257639 },
            { lat: 45.4949285310515, lng: -122.90825790410149 },
            { lat: 45.49454082034525, lng: -122.90892855060521 },
            { lat: 45.494529068735943, lng: -122.90889595747512 },
            { lat: 45.494518772554969, lng: -122.90886190019376 },
            { lat: 45.494510131494216, lng: -122.90882692498106 },
            { lat: 45.494503185676621, lng: -122.9087911942371 },
            { lat: 45.494497044920095, lng: -122.90874673952608 },
            { lat: 45.494478302979381, lng: -122.90856399531363 }];
        var Tract132395shape = new google.maps.Polygon({
            paths: [Tract132395coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132395shape.setMap(map);

        var Lot132120center = new google.maps.LatLng(45.493873208725, -122.907533227865);
        var markerLot132120 = new google.maps.Marker({
            position: Lot132120center,
            map: map,
            title: 'Lot132120'
        });
        markers.push(markerLot132120);
        var Lot132120coords0 = [
            { lat: 45.493723528173177, lng: -122.90749333610754 },
            { lat: 45.493960156858279, lng: -122.90738048232217 },
            { lat: 45.4939735448463, lng: -122.90744523661465 },
            { lat: 45.493982960303178, lng: -122.90750720278204 },
            { lat: 45.493989266996749, lng: -122.90756996120285 },
            { lat: 45.49399243328206, lng: -122.90763319697581 },
            { lat: 45.493743006455851, lng: -122.90764584519148 },
            { lat: 45.4937409174114, lng: -122.9076053603097 },
            { lat: 45.493737163113892, lng: -122.90756881122 },
            { lat: 45.493730942435, lng: -122.90752873663014 },
            { lat: 45.493723528173177, lng: -122.90749333610754 }];
        var Lot132120shape = new google.maps.Polygon({
            paths: [Lot132120coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132120shape.setMap(map);

        var Lot132119center = new google.maps.LatLng(45.4938807225498, -122.907717668038);
        var markerLot132119 = new google.maps.Marker({
            position: Lot132119center,
            map: map,
            title: 'Lot132119'
        });
        markers.push(markerLot132119);
        var Lot132119coords0 = [
            { lat: 45.493732257912804, lng: -122.90780230298606 },
            { lat: 45.49374130605915, lng: -122.90771963609514 },
            { lat: 45.49374304407543, lng: -122.90768278200349 },
            { lat: 45.493743006455851, lng: -122.90764584519148 },
            { lat: 45.49399243328206, lng: -122.90763319697581 },
            { lat: 45.493992591224689, lng: -122.90768990927167 },
            { lat: 45.493990465087833, lng: -122.90774265594652 },
            { lat: 45.493986153657843, lng: -122.90779513232683 },
            { lat: 45.493978269529443, lng: -122.90786214188364 },
            { lat: 45.493732257912804, lng: -122.90780230298606 }];
        var Lot132119shape = new google.maps.Polygon({
            paths: [Lot132119coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132119shape.setMap(map);

        var Lot132121center = new google.maps.LatLng(45.493814696502, -122.907312776897);
        var markerLot132121 = new google.maps.Marker({
            position: Lot132121center,
            map: map,
            title: 'Lot132121'
        });
        markers.push(markerLot132121);
        var Lot132121coords0 = [
            { lat: 45.493669242427778, lng: -122.90733587535873 },
            { lat: 45.493768488553243, lng: -122.90723125102595 },
            { lat: 45.493867130969164, lng: -122.90711622137889 },
            { lat: 45.493925906441419, lng: -122.9072635023103 },
            { lat: 45.493944489514668, lng: -122.90732112936321 },
            { lat: 45.493960156858279, lng: -122.90738048232217 },
            { lat: 45.493723528173177, lng: -122.90749333610754 },
            { lat: 45.49370463692761, lng: -122.90742784327053 },
            { lat: 45.493669242427778, lng: -122.90733587535873 }];
        var Lot132121shape = new google.maps.Polygon({
            paths: [Lot132121coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132121shape.setMap(map);

        var Lot132117center = new google.maps.LatLng(45.4938275150585, -122.908062854712);
        var markerLot132117 = new google.maps.Marker({
            position: Lot132117center,
            map: map,
            title: 'Lot132117'
        });
        markers.push(markerLot132117);
        var Lot132117coords0 = [
            { lat: 45.4936952596666, lng: -122.90810981207939 },
            { lat: 45.49371375889266, lng: -122.90795605758277 },
            { lat: 45.493959770430479, lng: -122.90801589712657 },
            { lat: 45.493941271125564, lng: -122.90816965226938 },
            { lat: 45.4936952596666, lng: -122.90810981207939 }];
        var Lot132117shape = new google.maps.Polygon({
            paths: [Lot132117coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132117shape.setMap(map);

        var Lot132116center = new google.maps.LatLng(45.4936957307466, -122.908305227326);
        var markerLot132116 = new google.maps.Marker({
            position: Lot132116center,
            map: map,
            title: 'Lot132116'
        });
        markers.push(markerLot132116);
        var Lot132116coords0 = [
            { lat: 45.4936826855188, lng: -122.90825898889078 },
            { lat: 45.493685260926043, lng: -122.90819744661454 },
            { lat: 45.4936952596666, lng: -122.90810981207939 },
            { lat: 45.493941271125564, lng: -122.90816965226938 },
            { lat: 45.4939401371324, lng: -122.90832404621717 },
            { lat: 45.493705430776551, lng: -122.90844479858873 },
            { lat: 45.493695792410819, lng: -122.90840128153619 },
            { lat: 45.493688306644145, lng: -122.90835311297754 },
            { lat: 45.493683931701618, lng: -122.9083041762658 },
            { lat: 45.4936826855188, lng: -122.90825898889078 }];
        var Lot132116shape = new google.maps.Polygon({
            paths: [Lot132116coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132116shape.setMap(map);

        var Lot132115center = new google.maps.LatLng(45.493841448021, -122.908457763248);
        var markerLot132115 = new google.maps.Marker({
            position: Lot132115center,
            map: map,
            title: 'Lot132115'
        });
        markers.push(markerLot132115);
        var Lot132115coords0 = [
            { lat: 45.493705430776551, lng: -122.90844479858873 },
            { lat: 45.4939401371324, lng: -122.90832404621717 },
            { lat: 45.493977465262631, lng: -122.90847072796782 },
            { lat: 45.493742758755012, lng: -122.90859147981284 },
            { lat: 45.493705430776551, lng: -122.90844479858873 }];
        var Lot132115shape = new google.maps.Polygon({
            paths: [Lot132115coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132115shape.setMap(map);

        var Lot132114center = new google.maps.LatLng(45.4938787759815, -122.908604444832);
        var markerLot132114 = new google.maps.Marker({
            position: Lot132114center,
            map: map,
            title: 'Lot132114'
        });
        markers.push(markerLot132114);
        var Lot132114coords0 = [
            { lat: 45.493742758755012, lng: -122.90859147981284 },
            { lat: 45.493977465262631, lng: -122.90847072796782 },
            { lat: 45.494014793205181, lng: -122.90861740991117 },
            { lat: 45.493780086545776, lng: -122.90873816122964 },
            { lat: 45.493742758755012, lng: -122.90859147981284 }];
        var Lot132114shape = new google.maps.Polygon({
            paths: [Lot132114coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132114shape.setMap(map);

        var Lot132118center = new google.maps.LatLng(45.493846014221, -122.907909099842);
        var markerLot132118 = new google.maps.Marker({
            position: Lot132118center,
            map: map,
            title: 'Lot132118'
        });
        markers.push(markerLot132118);
        var Lot132118coords0 = [
            { lat: 45.49371375889266, lng: -122.90795605758277 },
            { lat: 45.493732257912804, lng: -122.90780230298606 },
            { lat: 45.493978269529443, lng: -122.90786214188364 },
            { lat: 45.493959770430479, lng: -122.90801589712657 },
            { lat: 45.49371375889266, lng: -122.90795605758277 }];
        var Lot132118shape = new google.maps.Polygon({
            paths: [Lot132118coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132118shape.setMap(map);

        var Lot132151center = new google.maps.LatLng(45.4947586788051, -122.907701311752);
        var markerLot132151 = new google.maps.Marker({
            position: Lot132151center,
            map: map,
            title: 'Lot132151'
        });
        markers.push(markerLot132151);
        var Lot132151coords0 = [
            { lat: 45.494567230734361, lng: -122.90758416262504 },
            { lat: 45.494600854034864, lng: -122.90752810763347 },
            { lat: 45.494631043956218, lng: -122.9074659726962 },
            { lat: 45.494808111675923, lng: -122.90770568242309 },
            { lat: 45.494816016580863, lng: -122.90772507350127 },
            { lat: 45.494819283222675, lng: -122.90774548145976 },
            { lat: 45.494818058953683, lng: -122.90776782686515 },
            { lat: 45.494812608972516, lng: -122.90778726930188 },
            { lat: 45.494807111567553, lng: -122.907798255069 },
            { lat: 45.4948002725766, lng: -122.90780759458873 },
            { lat: 45.494761501182026, lng: -122.907846235002 },
            { lat: 45.494567230734361, lng: -122.90758416262504 }];
        var Lot132151shape = new google.maps.Polygon({
            paths: [Lot132151coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132151shape.setMap(map);

        var Lot132152center = new google.maps.LatLng(45.4945481218494, -122.907644300587);
        var markerLot132152 = new google.maps.Marker({
            position: Lot132152center,
            map: map,
            title: 'Lot132152'
        });
        markers.push(markerLot132152);
        var Lot132152coords0 = [
            { lat: 45.494505037025526, lng: -122.90766276253788 },
            { lat: 45.4945365980123, lng: -122.90762624339469 },
            { lat: 45.494567230734361, lng: -122.90758416262504 },
            { lat: 45.494761501182026, lng: -122.907846235002 },
            { lat: 45.494656264477079, lng: -122.90795065133 },
            { lat: 45.494505037025526, lng: -122.90766276253788 }];
        var Lot132152shape = new google.maps.Polygon({
            paths: [Lot132152coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132152shape.setMap(map);

        var Lot132154center = new google.maps.LatLng(45.4944485254733, -122.907931529974);
        var markerLot132154 = new google.maps.Marker({
            position: Lot132154center,
            map: map,
            title: 'Lot132154'
        });
        markers.push(markerLot132154);
        var Lot132154coords0 = [
            { lat: 45.4943573010913, lng: -122.90776982341708 },
            { lat: 45.494395625260005, lng: -122.90775037888245 },
            { lat: 45.494434380092429, lng: -122.90772525117718 },
            { lat: 45.494548959159459, lng: -122.90804490666845 },
            { lat: 45.494492250685525, lng: -122.90808181803854 },
            { lat: 45.4944321529745, lng: -122.9081124511473 },
            { lat: 45.4943573010913, lng: -122.90776982341708 }];
        var Lot132154shape = new google.maps.Polygon({
            paths: [Lot132154coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132154shape.setMap(map);

        var Lot132155center = new google.maps.LatLng(45.4943469538565, -122.907976433561);
        var markerLot132155 = new google.maps.Marker({
            position: Lot132155center,
            map: map,
            title: 'Lot132155'
        });
        markers.push(markerLot132155);
        var Lot132155coords0 = [
            { lat: 45.494276026692262, lng: -122.90779519172241 },
            { lat: 45.4943161132268, lng: -122.90778525625048 },
            { lat: 45.4943573010913, lng: -122.90776982341708 },
            { lat: 45.4944321529745, lng: -122.9081124511473 },
            { lat: 45.494372543082726, lng: -122.9081349618542 },
            { lat: 45.494308989134325, lng: -122.90815089371314 },
            { lat: 45.494276026692262, lng: -122.90779519172241 }];
        var Lot132155shape = new google.maps.Polygon({
            paths: [Lot132155coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132155shape.setMap(map);

        var Lot132156center = new google.maps.LatLng(45.4942135066494, -122.907923223792);
        var markerLot132156 = new google.maps.Marker({
            position: Lot132156center,
            map: map,
            title: 'Lot132156'
        });
        markers.push(markerLot132156);
        var Lot132156coords0 = [
            { lat: 45.494173163631714, lng: -122.90815932990442 },
            { lat: 45.494175827120323, lng: -122.90785274923799 },
            { lat: 45.494178406674443, lng: -122.9078347914553 },
            { lat: 45.494182171248021, lng: -122.90782509592667 },
            { lat: 45.494187377846778, lng: -122.90781685885467 },
            { lat: 45.494193757721391, lng: -122.90781050541322 },
            { lat: 45.494200981561448, lng: -122.90780636354901 },
            { lat: 45.494276026692262, lng: -122.90779519172241 },
            { lat: 45.494308989134325, lng: -122.90815089371314 },
            { lat: 45.494243246028752, lng: -122.9081590013834 },
            { lat: 45.494173163631714, lng: -122.90815932990442 }];
        var Lot132156shape = new google.maps.Polygon({
            paths: [Lot132156coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132156shape.setMap(map);

        var Lot132153center = new google.maps.LatLng(45.494534227838, -122.907853793283);
        var markerLot132153 = new google.maps.Marker({
            position: Lot132153center,
            map: map,
            title: 'Lot132153'
        });
        markers.push(markerLot132153);
        var Lot132153coords0 = [
            { lat: 45.494434380092429, lng: -122.90772525117718 },
            { lat: 45.494469834781967, lng: -122.90769685925814 },
            { lat: 45.494505037025526, lng: -122.90766276253788 },
            { lat: 45.494656264477079, lng: -122.90795065133 },
            { lat: 45.494601699736556, lng: -122.90800274987014 },
            { lat: 45.494548959159459, lng: -122.90804490666845 },
            { lat: 45.494434380092429, lng: -122.90772525117718 }];
        var Lot132153shape = new google.maps.Polygon({
            paths: [Lot132153coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132153shape.setMap(map);

        var Lot132148center = new google.maps.LatLng(45.4948494025694, -122.907376906899);
        var markerLot132148 = new google.maps.Marker({
            position: Lot132148center,
            map: map,
            title: 'Lot132148'
        });
        markers.push(markerLot132148);
        var Lot132148coords0 = [
            { lat: 45.49473889525801, lng: -122.90747169760746 },
            { lat: 45.494910167247077, lng: -122.90721501316919 },
            { lat: 45.494959909801032, lng: -122.90728211581799 },
            { lat: 45.494788637664364, lng: -122.90753880027873 },
            { lat: 45.49473889525801, lng: -122.90747169760746 }];
        var Lot132148shape = new google.maps.Polygon({
            paths: [Lot132148coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132148shape.setMap(map);

        var Lot132147center = new google.maps.LatLng(45.4947730569267, -122.907210267917);
        var markerLot132147 = new google.maps.Marker({
            position: Lot132147center,
            map: map,
            title: 'Lot132147'
        });
        markers.push(markerLot132147);
        var Lot132147coords0 = [
            { lat: 45.494670736278422, lng: -122.90737975119593 },
            { lat: 45.494716412954226, lng: -122.90728115599046 },
            { lat: 45.49473065548051, lng: -122.90725492266115 },
            { lat: 45.494746261780641, lng: -122.90723030784493 },
            { lat: 45.494767055350607, lng: -122.90720262878968 },
            { lat: 45.494787457041909, lng: -122.90717995141516 },
            { lat: 45.494809134915904, lng: -122.90715980956844 },
            { lat: 45.494831933530371, lng: -122.90714234768056 },
            { lat: 45.494848472146451, lng: -122.90713178678645 },
            { lat: 45.494910167247077, lng: -122.90721501316919 },
            { lat: 45.49473889525801, lng: -122.90747169760746 },
            { lat: 45.494670736278422, lng: -122.90737975119593 }];
        var Lot132147shape = new google.maps.Polygon({
            paths: [Lot132147coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132147shape.setMap(map);

        var Lot132149center = new google.maps.LatLng(45.4948991450296, -122.907444009617);
        var markerLot132149 = new google.maps.Marker({
            position: Lot132149center,
            map: map,
            title: 'Lot132149'
        });
        markers.push(markerLot132149);
        var Lot132149coords0 = [
            { lat: 45.494788637664364, lng: -122.90753880027873 },
            { lat: 45.494959909801032, lng: -122.90728211581799 },
            { lat: 45.49500965231509, lng: -122.90734921858427 },
            { lat: 45.494838380030828, lng: -122.90760590306745 },
            { lat: 45.494788637664364, lng: -122.90753880027873 }];
        var Lot132149shape = new google.maps.Polygon({
            paths: [Lot132149coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132149shape.setMap(map);

        var Lot132138center = new google.maps.LatLng(45.4946674599844, -122.906827119984);
        var markerLot132138 = new google.maps.Marker({
            position: Lot132138center,
            map: map,
            title: 'Lot132138'
        });
        markers.push(markerLot132138);
        var Lot132138coords0 = [
            { lat: 45.494505417603158, lng: -122.90670818736622 },
            { lat: 45.494540030391228, lng: -122.90663785952353 },
            { lat: 45.494720624908744, lng: -122.90682994175764 },
            { lat: 45.49470939803841, lng: -122.90684627646985 },
            { lat: 45.494700331024475, lng: -122.90686320539564 },
            { lat: 45.49469273759501, lng: -122.90688154178153 },
            { lat: 45.49468672459259, lng: -122.90690102762676 },
            { lat: 45.494505417603158, lng: -122.90670818736622 }];
        var Lot132138shape = new google.maps.Polygon({
            paths: [Lot132138coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132138shape.setMap(map);

        var Lot132139center = new google.maps.LatLng(45.4946917366362, -122.906683938066);
        var markerLot132139 = new google.maps.Marker({
            position: Lot132139center,
            map: map,
            title: 'Lot132139'
        });
        markers.push(markerLot132139);
        var Lot132139coords0 = [
            { lat: 45.494540030391228, lng: -122.90663785952353 },
            { lat: 45.494566135788993, lng: -122.90658294813755 },
            { lat: 45.494578422162895, lng: -122.90656664700978 },
            { lat: 45.494588747248343, lng: -122.90655918817153 },
            { lat: 45.4946010408591, lng: -122.90655507815147 },
            { lat: 45.494613667538424, lng: -122.9065554122738 },
            { lat: 45.494624866220065, lng: -122.90655960985687 },
            { lat: 45.494637657253271, lng: -122.90656996748019 },
            { lat: 45.494779585542759, lng: -122.90673457330738 },
            { lat: 45.494784027218905, lng: -122.90674249314615 },
            { lat: 45.494786579373191, lng: -122.90675195047552 },
            { lat: 45.494787003676016, lng: -122.90676206213527 },
            { lat: 45.494785529265243, lng: -122.90677094148832 },
            { lat: 45.49478196900904, lng: -122.90677971549979 },
            { lat: 45.494776110078504, lng: -122.90678710148062 },
            { lat: 45.494745037105737, lng: -122.90680544778765 },
            { lat: 45.494732319258858, lng: -122.90681666361006 },
            { lat: 45.494720624908744, lng: -122.90682994175764 },
            { lat: 45.494540030391228, lng: -122.90663785952353 }];
        var Lot132139shape = new google.maps.Polygon({
            paths: [Lot132139coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132139shape.setMap(map);

        var Lot132136center = new google.maps.LatLng(45.4946261990656, -122.906989386888);
        var markerLot132136 = new google.maps.Marker({
            position: Lot132136center,
            map: map,
            title: 'Lot132136'
        });
        markers.push(markerLot132136);
        var Lot132136coords0 = [
            { lat: 45.494433118013205, lng: -122.90684557338142 },
            { lat: 45.494469779916052, lng: -122.90677742507785 },
            { lat: 45.494676728889935, lng: -122.90699753883762 },
            { lat: 45.494671806738125, lng: -122.90701610581323 },
            { lat: 45.494661501145721, lng: -122.9070376826354 },
            { lat: 45.494640555225381, lng: -122.90706620668394 },
            { lat: 45.494433118013205, lng: -122.90684557338142 }];
        var Lot132136shape = new google.maps.Polygon({
            paths: [Lot132136coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132136shape.setMap(map);

        var Lot132135center = new google.maps.LatLng(45.4945587566309, -122.907031574283);
        var markerLot132135 = new google.maps.Marker({
            position: Lot132135center,
            map: map,
            title: 'Lot132135'
        });
        markers.push(markerLot132135);
        var Lot132135coords0 = [
            { lat: 45.494395431196331, lng: -122.90691263153055 },
            { lat: 45.494433118013205, lng: -122.90684557338142 },
            { lat: 45.494640555225381, lng: -122.90706620668394 },
            { lat: 45.49462074976018, lng: -122.90709582867956 },
            { lat: 45.494600372325969, lng: -122.90713061018064 },
            { lat: 45.494395431196331, lng: -122.90691263153055 }];
        var Lot132135shape = new google.maps.Polygon({
            paths: [Lot132135coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132135shape.setMap(map);

        var Lot132137center = new google.maps.LatLng(45.4946498013653, -122.906918988843);
        var markerLot132137 = new google.maps.Marker({
            position: Lot132137center,
            map: map,
            title: 'Lot132137'
        });
        markers.push(markerLot132137);
        var Lot132137coords0 = [
            { lat: 45.494469779916052, lng: -122.90677742507785 },
            { lat: 45.494505417603158, lng: -122.90670818736622 },
            { lat: 45.49468672459259, lng: -122.90690102762676 },
            { lat: 45.494680326847181, lng: -122.90693629437513 },
            { lat: 45.494678790308505, lng: -122.90698037012429 },
            { lat: 45.494676728889935, lng: -122.90699753883762 },
            { lat: 45.494469779916052, lng: -122.90677742507785 }];
        var Lot132137shape = new google.maps.Polygon({
            paths: [Lot132137coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132137shape.setMap(map);

        var Tract132398center = new google.maps.LatLng(45.494397013963, -122.907077541825);
        var Tract132398coords0 = [
            { lat: 45.494329130498244, lng: -122.90702391809077 },
            { lat: 45.494347775225556, lng: -122.90699343682611 },
            { lat: 45.4945585344174, lng: -122.90721760396589 },
            { lat: 45.494531389141613, lng: -122.90727657035926 },
            { lat: 45.494329130498244, lng: -122.90702391809077 }];
        var Tract132398shape = new google.maps.Polygon({
            paths: [Tract132398coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132398shape.setMap(map);

        var Lot132133center = new google.maps.LatLng(45.4943854127162, -122.907208531997);
        var markerLot132133 = new google.maps.Marker({
            position: Lot132133center,
            map: map,
            title: 'Lot132133'
        });
        markers.push(markerLot132133);
        var Lot132133coords0 = [
            { lat: 45.4942704845322, lng: -122.90711594799038 },
            { lat: 45.494329130498244, lng: -122.90702391809077 },
            { lat: 45.494531389141613, lng: -122.90727657035926 },
            { lat: 45.494477667884453, lng: -122.90739121526389 },
            { lat: 45.4942704845322, lng: -122.90711594799038 }];
        var Lot132133shape = new google.maps.Polygon({
            paths: [Lot132133coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132133shape.setMap(map);

        var Lot132132center = new google.maps.LatLng(45.4943681265865, -122.90734371138);
        var markerLot132132 = new google.maps.Marker({
            position: Lot132132center,
            map: map,
            title: 'Lot132132'
        });
        markers.push(markerLot132132);
        var Lot132132coords0 = [
            { lat: 45.494208921635973, lng: -122.90720402163419 },
            { lat: 45.494229285716962, lng: -122.90717731611332 },
            { lat: 45.4942704845322, lng: -122.90711594799038 },
            { lat: 45.494477667884453, lng: -122.90739121526389 },
            { lat: 45.494446306271257, lng: -122.90744206987851 },
            { lat: 45.494428387473278, lng: -122.90746547275481 },
            { lat: 45.494409315487715, lng: -122.90748695422585 },
            { lat: 45.494208921635973, lng: -122.90720402163419 }];
        var Lot132132shape = new google.maps.Polygon({
            paths: [Lot132132coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132132shape.setMap(map);

        var Lot132131center = new google.maps.LatLng(45.4942245088268, -122.907469548332);
        var markerLot132131 = new google.maps.Marker({
            position: Lot132131center,
            map: map,
            title: 'Lot132131'
        });
        markers.push(markerLot132131);
        var Lot132131coords0 = [
            { lat: 45.494133784538406, lng: -122.90726997682766 },
            { lat: 45.494173451763437, lng: -122.90724055913576 },
            { lat: 45.494208921635973, lng: -122.90720402163419 },
            { lat: 45.494409315487715, lng: -122.90748695422585 },
            { lat: 45.494385333593883, lng: -122.90750979048062 },
            { lat: 45.494359269905516, lng: -122.90753013961083 },
            { lat: 45.494332034237836, lng: -122.90754710426543 },
            { lat: 45.4943038434373, lng: -122.90756054937931 },
            { lat: 45.4942642687294, lng: -122.90757302295043 },
            { lat: 45.494210287703531, lng: -122.90758113540343 },
            { lat: 45.494200075694572, lng: -122.90758030154043 },
            { lat: 45.494190368328624, lng: -122.90757512365035 },
            { lat: 45.4941799437559, lng: -122.90756230409262 },
            { lat: 45.494173912192288, lng: -122.9075446832796 },
            { lat: 45.494166667114158, lng: -122.90746658479293 },
            { lat: 45.494158743556831, lng: -122.90740438423879 },
            { lat: 45.494147547233034, lng: -122.90733669879096 },
            { lat: 45.494133784538406, lng: -122.90726997682766 }];
        var Lot132131shape = new google.maps.Polygon({
            paths: [Lot132131coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132131shape.setMap(map);

        var Lot132134center = new google.maps.LatLng(45.4944919361113, -122.907067813218);
        var markerLot132134 = new google.maps.Marker({
            position: Lot132134center,
            map: map,
            title: 'Lot132134'
        });
        markers.push(markerLot132134);
        var Lot132134coords0 = [
            { lat: 45.494347775225556, lng: -122.90699343682611 },
            { lat: 45.494395431196331, lng: -122.90691263153055 },
            { lat: 45.494600372325969, lng: -122.90713061018064 },
            { lat: 45.4945585344174, lng: -122.90721760396589 },
            { lat: 45.494347775225556, lng: -122.90699343682611 }];
        var Lot132134shape = new google.maps.Polygon({
            paths: [Lot132134coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132134shape.setMap(map);

        var Tract132397center = new google.maps.LatLng(45.4945588705224, -122.906045571985);
        var Tract132397coords0 = [
            { lat: 45.494487997355115, lng: -122.9060185116 },
            { lat: 45.494495762164064, lng: -122.90600947982085 },
            { lat: 45.494505038951225, lng: -122.90600439874048 },
            { lat: 45.494515793073973, lng: -122.90600381740539 },
            { lat: 45.494525314407966, lng: -122.90600788231897 },
            { lat: 45.494651921430169, lng: -122.9061112062914 },
            { lat: 45.494741872973883, lng: -122.90619113163126 },
            { lat: 45.4947236630759, lng: -122.90623180797945 },
            { lat: 45.494487997355115, lng: -122.9060185116 }];
        var Tract132397shape = new google.maps.Polygon({
            paths: [Tract132397coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132397shape.setMap(map);

        var Lot132123center = new google.maps.LatLng(45.4945340575385, -122.906298029671);
        var markerLot132123 = new google.maps.Marker({
            position: Lot132123center,
            map: map,
            title: 'Lot132123'
        });
        markers.push(markerLot132123);
        var Lot132123coords0 = [
            { lat: 45.494393405688129, lng: -122.90622875715515 },
            { lat: 45.4944405346402, lng: -122.90612348338065 },
            { lat: 45.494652239992618, lng: -122.90631509399417 },
            { lat: 45.4946032902552, lng: -122.90642443476123 },
            { lat: 45.494580816847559, lng: -122.9063983797995 },
            { lat: 45.494393405688129, lng: -122.90622875715515 }];
        var Lot132123shape = new google.maps.Polygon({
            paths: [Lot132123coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132123shape.setMap(map);

        var Lot132122center = new google.maps.LatLng(45.4945335112954, -122.906132196419);
        var markerLot132122 = new google.maps.Marker({
            position: Lot132122center,
            map: map,
            title: 'Lot132122'
        });
        markers.push(markerLot132122);
        var Lot132122coords0 = [
            { lat: 45.4944405346402, lng: -122.90612348338065 },
            { lat: 45.494487997355115, lng: -122.9060185116 },
            { lat: 45.4947236630759, lng: -122.90623180797945 },
            { lat: 45.494625763656785, lng: -122.90645048974359 },
            { lat: 45.4946032902552, lng: -122.90642443476123 },
            { lat: 45.494652239992618, lng: -122.90631509399417 },
            { lat: 45.4944405346402, lng: -122.90612348338065 }];
        var Lot132122shape = new google.maps.Polygon({
            paths: [Lot132122coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132122shape.setMap(map);

        var Lot132140center = new google.maps.LatLng(45.4947699921088, -122.90626089221);
        var markerLot132140 = new google.maps.Marker({
            position: Lot132140center,
            map: map,
            title: 'Lot132140'
        });
        markers.push(markerLot132140);
        var Lot132140coords0 = [
            { lat: 45.494625763656785, lng: -122.90645048974359 },
            { lat: 45.494741872973883, lng: -122.90619113163126 },
            { lat: 45.494833237242389, lng: -122.9062799990102 },
            { lat: 45.494693369751531, lng: -122.90652887037243 },
            { lat: 45.494625763656785, lng: -122.90645048974359 }];
        var Lot132140shape = new google.maps.Polygon({
            paths: [Lot132140coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132140shape.setMap(map);

        var Lot132142center = new google.maps.LatLng(45.4948799612987, -122.906402815364);
        var markerLot132142 = new google.maps.Marker({
            position: Lot132142center,
            map: map,
            title: 'Lot132142'
        });
        markers.push(markerLot132142);
        var Lot132142coords0 = [
            { lat: 45.494740136121884, lng: -122.90658309014975 },
            { lat: 45.4948819405512, lng: -122.90633077244267 },
            { lat: 45.494929773894683, lng: -122.90638309388783 },
            { lat: 45.494786902466, lng: -122.90663731001635 },
            { lat: 45.494740136121884, lng: -122.90658309014975 }];
        var Lot132142shape = new google.maps.Polygon({
            paths: [Lot132142coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132142shape.setMap(map);

        var Lot132141center = new google.maps.LatLng(45.49483197418, -122.906350793624);
        var markerLot132141 = new google.maps.Marker({
            position: Lot132141center,
            map: map,
            title: 'Lot132141'
        });
        markers.push(markerLot132141);
        var Lot132141coords0 = [
            { lat: 45.494693369751531, lng: -122.90652887037243 },
            { lat: 45.494833237242389, lng: -122.9062799990102 },
            { lat: 45.4948819405512, lng: -122.90633077244267 },
            { lat: 45.494740136121884, lng: -122.90658309014975 },
            { lat: 45.494693369751531, lng: -122.90652887037243 }];
        var Lot132141shape = new google.maps.Polygon({
            paths: [Lot132141coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132141shape.setMap(map);

        var Lot132144center = new google.maps.LatLng(45.4949286342762, -122.906592064202);
        var markerLot132144 = new google.maps.Marker({
            position: Lot132144center,
            map: map,
            title: 'Lot132144'
        });
        markers.push(markerLot132144);
        var Lot132144coords0 = [
            { lat: 45.494833667825404, lng: -122.90669153167779 },
            { lat: 45.49497673838242, lng: -122.90643696136918 },
            { lat: 45.49502283373571, lng: -122.90649237538011 },
            { lat: 45.494879984199365, lng: -122.90674655227284 },
            { lat: 45.494833667825404, lng: -122.90669153167779 }];
        var Lot132144shape = new google.maps.Polygon({
            paths: [Lot132144coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132144shape.setMap(map);

        var Lot132145center = new google.maps.LatLng(45.4949169550718, -122.906756171901);
        var markerLot132145 = new google.maps.Marker({
            position: Lot132145center,
            map: map,
            title: 'Lot132145'
        });
        markers.push(markerLot132145);
        var Lot132145coords0 = [
            { lat: 45.494860725119864, lng: -122.9068022502495 },
            { lat: 45.494879984199365, lng: -122.90674655227284 },
            { lat: 45.49502283373571, lng: -122.90649237538011 },
            { lat: 45.4950680582854, lng: -122.90654933888796 },
            { lat: 45.494900957344051, lng: -122.90684666668892 },
            { lat: 45.494881890337211, lng: -122.906820944619 },
            { lat: 45.494860725119864, lng: -122.9068022502495 }];
        var Lot132145shape = new google.maps.Polygon({
            paths: [Lot132145coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132145shape.setMap(map);

        var Lot132146center = new google.maps.LatLng(45.4949610999022, -122.906804459697);
        var markerLot132146 = new google.maps.Marker({
            position: Lot132146center,
            map: map,
            title: 'Lot132146'
        });
        markers.push(markerLot132146);
        var Lot132146coords0 = [
            { lat: 45.494900957344051, lng: -122.90684666668892 },
            { lat: 45.4950680582854, lng: -122.90654933888796 },
            { lat: 45.495122366346557, lng: -122.90662137464663 },
            { lat: 45.494971865284072, lng: -122.9068891656873 },
            { lat: 45.494925487994308, lng: -122.90690975947595 },
            { lat: 45.494915198884009, lng: -122.90687573729842 },
            { lat: 45.494900957344051, lng: -122.90684666668892 }];
        var Lot132146shape = new google.maps.Polygon({
            paths: [Lot132146coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132146shape.setMap(map);

        var Lot132143center = new google.maps.LatLng(45.4949192589556, -122.906475511216);
        var markerLot132143 = new google.maps.Marker({
            position: Lot132143center,
            map: map,
            title: 'Lot132143'
        });
        markers.push(markerLot132143);
        var Lot132143coords0 = [
            { lat: 45.494786902466, lng: -122.90663731001635 },
            { lat: 45.494929773894683, lng: -122.90638309388783 },
            { lat: 45.49497673838242, lng: -122.90643696136918 },
            { lat: 45.494833667825404, lng: -122.90669153167779 },
            { lat: 45.494786902466, lng: -122.90663731001635 }];
        var Lot132143shape = new google.maps.Polygon({
            paths: [Lot132143coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132143shape.setMap(map);

        var Lot132174center = new google.maps.LatLng(45.4953169740606, -122.907345878905);
        var markerLot132174 = new google.maps.Marker({
            position: Lot132174center,
            map: map,
            title: 'Lot132174'
        });
        markers.push(markerLot132174);
        var Lot132174coords0 = [
            { lat: 45.495263731976706, lng: -122.90739564094524 },
            { lat: 45.495267021548507, lng: -122.90737070342088 },
            { lat: 45.495276179437269, lng: -122.90734892731655 },
            { lat: 45.495338167990617, lng: -122.907259525173 },
            { lat: 45.495428516522374, lng: -122.90712096881821 },
            { lat: 45.495473166751538, lng: -122.90721127901007 },
            { lat: 45.495518978212786, lng: -122.9073102763336 },
            { lat: 45.495300096739243, lng: -122.90749676402001 },
            { lat: 45.4952692234947, lng: -122.9074289158585 },
            { lat: 45.49526495407278, lng: -122.90741201628046 },
            { lat: 45.495263731976706, lng: -122.90739564094524 }];
        var Lot132174shape = new google.maps.Polygon({
            paths: [Lot132174coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132174shape.setMap(map);

        var Lot132176center = new google.maps.LatLng(45.4954625326022, -122.907527574268);
        var markerLot132176 = new google.maps.Marker({
            position: Lot132176center,
            map: map,
            title: 'Lot132176'
        });
        markers.push(markerLot132176);
        var Lot132176coords0 = [
            { lat: 45.49533619389026, lng: -122.90757966738813 },
            { lat: 45.495554992206586, lng: -122.90739325086585 },
            { lat: 45.495589464556083, lng: -122.90747753893912 },
            { lat: 45.495370582815255, lng: -122.90766402621254 },
            { lat: 45.49533619389026, lng: -122.90757966738813 }];
        var Lot132176shape = new google.maps.Polygon({
            paths: [Lot132176coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132176shape.setMap(map);

        var Lot132177center = new google.maps.LatLng(45.4954922660498, -122.907631736172);
        var markerLot132177 = new google.maps.Marker({
            position: Lot132177center,
            map: map,
            title: 'Lot132177'
        });
        markers.push(markerLot132177);
        var Lot132177coords0 = [
            { lat: 45.495370582815255, lng: -122.90766402621254 },
            { lat: 45.495589464556083, lng: -122.90747753893912 },
            { lat: 45.495628793937023, lng: -122.90758042059423 },
            { lat: 45.495409591309127, lng: -122.90776718085409 },
            { lat: 45.495370582815255, lng: -122.90766402621254 }];
        var Lot132177shape = new google.maps.Polygon({
            paths: [Lot132177coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132177shape.setMap(map);

        var Lot132175center = new google.maps.LatLng(45.4954272718712, -122.907443951988);
        var markerLot132175 = new google.maps.Marker({
            position: Lot132175center,
            map: map,
            title: 'Lot132175'
        });
        markers.push(markerLot132175);
        var Lot132175coords0 = [
            { lat: 45.495300096739243, lng: -122.90749676402001 },
            { lat: 45.495518978212786, lng: -122.9073102763336 },
            { lat: 45.495554992206586, lng: -122.90739325086585 },
            { lat: 45.49533619389026, lng: -122.90757966738813 },
            { lat: 45.495300096739243, lng: -122.90749676402001 }];
        var Lot132175shape = new google.maps.Polygon({
            paths: [Lot132175coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132175shape.setMap(map);

        var Lot132172center = new google.maps.LatLng(45.4951737223307, -122.907712107684);
        var markerLot132172 = new google.maps.Marker({
            position: Lot132172center,
            map: map,
            title: 'Lot132172'
        });
        markers.push(markerLot132172);
        var Lot132172coords0 = [
            { lat: 45.495077215588275, lng: -122.90761773846233 },
            { lat: 45.495121003233805, lng: -122.90755853824997 },
            { lat: 45.4952712570336, lng: -122.90780818532549 },
            { lat: 45.495225413184457, lng: -122.90786396930771 },
            { lat: 45.495077215588275, lng: -122.90761773846233 }];
        var Lot132172shape = new google.maps.Polygon({
            paths: [Lot132172coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132172shape.setMap(map);

        var Lot132173center = new google.maps.LatLng(45.4952215806586, -122.907525816629);
        var markerLot132173 = new google.maps.Marker({
            position: Lot132173center,
            map: map,
            title: 'Lot132173'
        });
        markers.push(markerLot132173);
        var Lot132173coords0 = [
            { lat: 45.495121003233805, lng: -122.90755853824997 },
            { lat: 45.49516428471378, lng: -122.90750013515772 },
            { lat: 45.49517670111215, lng: -122.90748889349491 },
            { lat: 45.495187740653328, lng: -122.90748391604617 },
            { lat: 45.495200340396615, lng: -122.90748269730825 },
            { lat: 45.495211752310489, lng: -122.9074855030929 },
            { lat: 45.495223332667116, lng: -122.90749266686201 },
            { lat: 45.495236842925877, lng: -122.90750924184599 },
            { lat: 45.495252437820881, lng: -122.90754280896618 },
            { lat: 45.495293394452638, lng: -122.90763753890683 },
            { lat: 45.495332066222538, lng: -122.90773419093959 },
            { lat: 45.4952712570336, lng: -122.90780818532549 },
            { lat: 45.495121003233805, lng: -122.90755853824997 }];
        var Lot132173shape = new google.maps.Polygon({
            paths: [Lot132173coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132173shape.setMap(map);

        var Lot132170center = new google.maps.LatLng(45.4950292331016, -122.907736413527);
        var markerLot132170 = new google.maps.Marker({
            position: Lot132170center,
            map: map,
            title: 'Lot132170'
        });
        markers.push(markerLot132170);
        var Lot132170coords0 = [
            { lat: 45.494988696410488, lng: -122.90773457050155 },
            { lat: 45.495033427911721, lng: -122.90767693858345 },
            { lat: 45.495179569307659, lng: -122.90791975319993 },
            { lat: 45.4951337254032, lng: -122.90797553700213 },
            { lat: 45.494988696410488, lng: -122.90773457050155 }];
        var Lot132170shape = new google.maps.Polygon({
            paths: [Lot132170coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132170shape.setMap(map);

        var Lot132169center = new google.maps.LatLng(45.4949760193681, -122.907795078626);
        var markerLot132169 = new google.maps.Marker({
            position: Lot132169center,
            map: map,
            title: 'Lot132169'
        });
        markers.push(markerLot132169);
        var Lot132169coords0 = [
            { lat: 45.494930943088775, lng: -122.90780055599664 },
            { lat: 45.494988696410488, lng: -122.90773457050155 },
            { lat: 45.4951337254032, lng: -122.90797553700213 },
            { lat: 45.495077462391706, lng: -122.90804399881814 },
            { lat: 45.494930943088775, lng: -122.90780055599664 }];
        var Lot132169shape = new google.maps.Polygon({
            paths: [Lot132169coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132169shape.setMap(map);

        var Lot132171center = new google.maps.LatLng(45.4951289065668, -122.90776959974);
        var markerLot132171 = new google.maps.Marker({
            position: Lot132171center,
            map: map,
            title: 'Lot132171'
        });
        markers.push(markerLot132171);
        var Lot132171coords0 = [
            { lat: 45.495033427911721, lng: -122.90767693858345 },
            { lat: 45.495077215588275, lng: -122.90761773846233 },
            { lat: 45.495225413184457, lng: -122.90786396930771 },
            { lat: 45.495179569307659, lng: -122.90791975319993 },
            { lat: 45.495033427911721, lng: -122.90767693858345 }];
        var Lot132171shape = new google.maps.Polygon({
            paths: [Lot132171coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132171shape.setMap(map);

        var Lot132168center = new google.maps.LatLng(45.4949213421132, -122.907942579914);
        var markerLot132168 = new google.maps.Marker({
            position: Lot132168center,
            map: map,
            title: 'Lot132168'
        });
        markers.push(markerLot132168);
        var Lot132168coords0 = [
            { lat: 45.494831460643269, lng: -122.90790046124587 },
            { lat: 45.494903427668135, lng: -122.90782903156131 },
            { lat: 45.49503055955028, lng: -122.90808807890535 },
            { lat: 45.494964358019836, lng: -122.90817125673425 },
            { lat: 45.494831460643269, lng: -122.90790046124587 }];
        var Lot132168shape = new google.maps.Polygon({
            paths: [Lot132168coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132168shape.setMap(map);

        var Lot132166center = new google.maps.LatLng(45.4948521727936, -122.90826593379);
        var markerLot132166 = new google.maps.Marker({
            position: Lot132166center,
            map: map,
            title: 'Lot132166'
        });
        markers.push(markerLot132166);
        var Lot132166coords0 = [
            { lat: 45.494687510999277, lng: -122.90804328857723 },
            { lat: 45.49475948584417, lng: -122.90797187500199 },
            { lat: 45.49489803520764, lng: -122.90825418736593 },
            { lat: 45.494863505855051, lng: -122.908294116184 },
            { lat: 45.494828727355959, lng: -122.9083310354863 },
            { lat: 45.494687510999277, lng: -122.90804328857723 }];
        var Lot132166shape = new google.maps.Polygon({
            paths: [Lot132166coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132166shape.setMap(map);

        var Lot132167center = new google.maps.LatLng(45.4948884486886, -122.908167147185);
        var markerLot132167 = new google.maps.Marker({
            position: Lot132167center,
            map: map,
            title: 'Lot132167'
        });
        markers.push(markerLot132167);
        var Lot132167coords0 = [
            { lat: 45.49475948584417, lng: -122.90797187500199 },
            { lat: 45.494831460643269, lng: -122.90790046124587 },
            { lat: 45.494964358019836, lng: -122.90817125673425 },
            { lat: 45.49489803520764, lng: -122.90825418736593 },
            { lat: 45.49475948584417, lng: -122.90797187500199 }];
        var Lot132167shape = new google.maps.Polygon({
            paths: [Lot132167coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132167shape.setMap(map);

        var Lot132164center = new google.maps.LatLng(45.4946353280283, -122.908304823235);
        var markerLot132164 = new google.maps.Marker({
            position: Lot132164center,
            map: map,
            title: 'Lot132164'
        });
        markers.push(markerLot132164);
        var Lot132164coords0 = [
            { lat: 45.494537292360725, lng: -122.90816483555902 },
            { lat: 45.494577426358425, lng: -122.90813806156807 },
            { lat: 45.494614654588382, lng: -122.90810969644453 },
            { lat: 45.494736854125485, lng: -122.90841464983781 },
            { lat: 45.494688395041649, lng: -122.9084515750252 },
            { lat: 45.494636009072522, lng: -122.90848652553527 },
            { lat: 45.494537292360725, lng: -122.90816483555902 }];
        var Lot132164shape = new google.maps.Polygon({
            paths: [Lot132164coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132164shape.setMap(map);

        var Lot132163center = new google.maps.LatLng(45.4944954029783, -122.908313833857);
        var markerLot132163 = new google.maps.Marker({
            position: Lot132163center,
            map: map,
            title: 'Lot132163'
        });
        markers.push(markerLot132163);
        var Lot132163coords0 = [
            { lat: 45.494448074077127, lng: -122.90826343895654 },
            { lat: 45.494449459913753, lng: -122.90824709023839 },
            { lat: 45.49445341690658, lng: -122.90823161419698 },
            { lat: 45.494459074293488, lng: -122.90821898229886 },
            { lat: 45.494467263434572, lng: -122.9082073382713 },
            { lat: 45.494479021675311, lng: -122.90819741038105 },
            { lat: 45.494537292360725, lng: -122.90816483555902 },
            { lat: 45.494636009072522, lng: -122.90848652553527 },
            { lat: 45.494556787601589, lng: -122.90853038595785 },
            { lat: 45.494478302979381, lng: -122.90856399531363 },
            { lat: 45.494448074077127, lng: -122.90826343895654 }];
        var Lot132163shape = new google.maps.Polygon({
            paths: [Lot132163coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132163shape.setMap(map);

        var Lot132165center = new google.maps.LatLng(45.4947220503324, -122.908240300177);
        var markerLot132165 = new google.maps.Marker({
            position: Lot132165center,
            map: map,
            title: 'Lot132165'
        });
        markers.push(markerLot132165);
        var Lot132165coords0 = [
            { lat: 45.494614654588382, lng: -122.90810969644453 },
            { lat: 45.494649331474257, lng: -122.90807995307772 },
            { lat: 45.494687510999277, lng: -122.90804328857723 },
            { lat: 45.494828727355959, lng: -122.9083310354863 },
            { lat: 45.494782271669322, lng: -122.908375683557 },
            { lat: 45.494736854125485, lng: -122.90841464983781 },
            { lat: 45.494614654588382, lng: -122.90810969644453 }];
        var Lot132165shape = new google.maps.Polygon({
            paths: [Lot132165coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132165shape.setMap(map);

        var Lot132158center = new google.maps.LatLng(45.4941971605348, -122.908489679634);
        var markerLot132158 = new google.maps.Marker({
            position: Lot132158center,
            map: map,
            title: 'Lot132158'
        });
        markers.push(markerLot132158);
        var Lot132158coords0 = [
            { lat: 45.494171601972525, lng: -122.90843168446828 },
            { lat: 45.49440164980205, lng: -122.90838401288596 },
            { lat: 45.49441430722824, lng: -122.90850750036941 },
            { lat: 45.494176820604672, lng: -122.90855671293075 },
            { lat: 45.494171601972525, lng: -122.90843168446828 }];
        var Lot132158shape = new google.maps.Polygon({
            paths: [Lot132158coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132158shape.setMap(map);

        var Lot132162center = new google.maps.LatLng(45.4943776688735, -122.908993560915);
        var markerLot132162 = new google.maps.Marker({
            position: Lot132162center,
            map: map,
            title: 'Lot132162'
        });
        markers.push(markerLot132162);
        var Lot132162coords0 = [
            { lat: 45.494242943847581, lng: -122.908980349063 },
            { lat: 45.494459947761236, lng: -122.90887184808157 },
            { lat: 45.494476350019376, lng: -122.90892899567 },
            { lat: 45.494495762210647, lng: -122.90898147656941 },
            { lat: 45.494292925442259, lng: -122.9091510661416 },
            { lat: 45.494265396665604, lng: -122.90906335040005 },
            { lat: 45.494242943847581, lng: -122.908980349063 }];
        var Lot132162shape = new google.maps.Polygon({
            paths: [Lot132162coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132162shape.setMap(map);

        var Lot132161center = new google.maps.LatLng(45.4943419601985, -122.908850086581);
        var markerLot132161 = new google.maps.Marker({
            position: Lot132161center,
            map: map,
            title: 'Lot132161'
        });
        markers.push(markerLot132161);
        var Lot132161coords0 = [
            { lat: 45.494205797337187, lng: -122.90880292814352 },
            { lat: 45.494439621682233, lng: -122.90875447550137 },
            { lat: 45.494447564320623, lng: -122.9088125674882 },
            { lat: 45.494459947761236, lng: -122.90887184808157 },
            { lat: 45.494242943847581, lng: -122.908980349063 },
            { lat: 45.494221997384628, lng: -122.90888882244144 },
            { lat: 45.494205797337187, lng: -122.90880292814352 }];
        var Lot132161shape = new google.maps.Polygon({
            paths: [Lot132161coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132161shape.setMap(map);

        var Lot132160center = new google.maps.LatLng(45.4942202657345, -122.908737305609);
        var markerLot132160 = new google.maps.Marker({
            position: Lot132160center,
            map: map,
            title: 'Lot132160'
        });
        markers.push(markerLot132160);
        var Lot132160coords0 = [
            { lat: 45.494188225408024, lng: -122.90868045949347 },
            { lat: 45.494426964521629, lng: -122.90863098790788 },
            { lat: 45.494439621682233, lng: -122.90875447550137 },
            { lat: 45.494205797337187, lng: -122.90880292814352 },
            { lat: 45.494188225408024, lng: -122.90868045949347 }];
        var Lot132160shape = new google.maps.Polygon({
            paths: [Lot132160coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132160shape.setMap(map);

        var Lot132159center = new google.maps.LatLng(45.4942059447871, -122.908614194779);
        var markerLot132159 = new google.maps.Marker({
            position: Lot132159center,
            map: map,
            title: 'Lot132159'
        });
        markers.push(markerLot132159);
        var Lot132159coords0 = [
            { lat: 45.494176820604672, lng: -122.90855671293075 },
            { lat: 45.49441430722824, lng: -122.90850750036941 },
            { lat: 45.494426964521629, lng: -122.90863098790788 },
            { lat: 45.494188225408024, lng: -122.90868045949347 },
            { lat: 45.494176820604672, lng: -122.90855671293075 }];
        var Lot132159shape = new google.maps.Polygon({
            paths: [Lot132159coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132159shape.setMap(map);

        var Lot132097center = new google.maps.LatLng(45.4935624297868, -122.907584839155);
        var markerLot132097 = new google.maps.Marker({
            position: Lot132097center,
            map: map,
            title: 'Lot132097'
        });
        markers.push(markerLot132097);
        var Lot132097coords0 = [
            { lat: 45.493384831093984, lng: -122.90758321920072 },
            { lat: 45.493443617984667, lng: -122.90753788280146 },
            { lat: 45.493502127905415, lng: -122.9074898997216 },
            { lat: 45.493610136690961, lng: -122.90739336652031 },
            { lat: 45.493645011938511, lng: -122.90748585784011 },
            { lat: 45.493655477772833, lng: -122.90752371929958 },
            { lat: 45.493663432090692, lng: -122.90756279636933 },
            { lat: 45.49366916537695, lng: -122.90760641726243 },
            { lat: 45.493671770114567, lng: -122.90765063851646 },
            { lat: 45.493671219653365, lng: -122.90769500768415 },
            { lat: 45.493667519625347, lng: -122.90773907080475 },
            { lat: 45.493403363241143, lng: -122.90774410070753 },
            { lat: 45.4934011450253, lng: -122.90770250268204 },
            { lat: 45.493397147295795, lng: -122.90766077780118 },
            { lat: 45.493384831093984, lng: -122.90758321920072 }];
        var Lot132097shape = new google.maps.Polygon({
            paths: [Lot132097coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132097shape.setMap(map);

        var Lot132103center = new google.maps.LatLng(45.4935672522622, -122.908715577204);
        var markerLot132103 = new google.maps.Marker({
            position: Lot132103center,
            map: map,
            title: 'Lot132103'
        });
        markers.push(markerLot132103);
        var Lot132103coords0 = [
            { lat: 45.493432530814125, lng: -122.90870194534791 },
            { lat: 45.493664645904367, lng: -122.90858252791415 },
            { lat: 45.493701973707367, lng: -122.90872920912344 },
            { lat: 45.49346985846703, lng: -122.90884862603646 },
            { lat: 45.493432530814125, lng: -122.90870194534791 }];
        var Lot132103shape = new google.maps.Polygon({
            paths: [Lot132103coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132103shape.setMap(map);

        var Lot132102center = new google.maps.LatLng(45.4936058635526, -122.908487575369);
        var markerLot132102 = new google.maps.Marker({
            position: Lot132102center,
            map: map,
            title: 'Lot132102'
        });
        markers.push(markerLot132102);
        var Lot132102coords0 = [
            { lat: 45.493395202973566, lng: -122.9085552648521 },
            { lat: 45.493628416581991, lng: -122.90843528165476 },
            { lat: 45.493664645904367, lng: -122.90858252791415 },
            { lat: 45.493432530814125, lng: -122.90870194534791 },
            { lat: 45.493395202973566, lng: -122.9085552648521 }];
        var Lot132102shape = new google.maps.Polygon({
            paths: [Lot132102coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132102shape.setMap(map);

        var Lot132101center = new google.maps.LatLng(45.4936053238322, -122.908362730038);
        var markerLot132101 = new google.maps.Marker({
            position: Lot132101center,
            map: map,
            title: 'Lot132101'
        });
        markers.push(markerLot132101);
        var Lot132101coords0 = [
            { lat: 45.4933578749453, lng: -122.90840858454898 },
            { lat: 45.493611545692744, lng: -122.9082780759062 },
            { lat: 45.493616454045807, lng: -122.90835650222442 },
            { lat: 45.493621566985034, lng: -122.90839615850116 },
            { lat: 45.493628416581991, lng: -122.90843528165476 },
            { lat: 45.493395202973566, lng: -122.9085552648521 },
            { lat: 45.4933578749453, lng: -122.90840858454898 }];
        var Lot132101shape = new google.maps.Polygon({
            paths: [Lot132101coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132101shape.setMap(map);

        var Lot132100center = new google.maps.LatLng(45.4934617604456, -122.908172626109);
        var markerLot132100 = new google.maps.Marker({
            position: Lot132100center,
            map: map,
            title: 'Lot132100'
        });
        markers.push(markerLot132100);
        var Lot132100coords0 = [
            { lat: 45.493304480234286, lng: -122.90819877191204 },
            { lat: 45.49333565664859, lng: -122.90813240526693 },
            { lat: 45.493361247712265, lng: -122.90806170862813 },
            { lat: 45.4936210965567, lng: -122.90812491405613 },
            { lat: 45.493613240054337, lng: -122.90820199147497 },
            { lat: 45.493611545692744, lng: -122.9082780759062 },
            { lat: 45.4933578749453, lng: -122.90840858454898 },
            { lat: 45.493304480234286, lng: -122.90819877191204 }];
        var Lot132100shape = new google.maps.Polygon({
            paths: [Lot132100coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132100shape.setMap(map);

        var Lot132099center = new google.maps.LatLng(45.4933932647614, -122.907991330565);
        var markerLot132099 = new google.maps.Marker({
            position: Lot132099center,
            map: map,
            title: 'Lot132099'
        });
        markers.push(markerLot132099);
        var Lot132099coords0 = [
            { lat: 45.493361247712265, lng: -122.90806170862813 },
            { lat: 45.493380772384796, lng: -122.90798860535391 },
            { lat: 45.493394636308174, lng: -122.90791157665728 },
            { lat: 45.493639595803344, lng: -122.90797115976513 },
            { lat: 45.4936210965567, lng: -122.90812491405613 },
            { lat: 45.493361247712265, lng: -122.90806170862813 }];
        var Lot132099shape = new google.maps.Polygon({
            paths: [Lot132099coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132099shape.setMap(map);

        var Lot132098center = new google.maps.LatLng(45.4934142228537, -122.907829523538);
        var markerLot132098 = new google.maps.Marker({
            position: Lot132098center,
            map: map,
            title: 'Lot132098'
        });
        markers.push(markerLot132098);
        var Lot132098coords0 = [
            { lat: 45.493394636308174, lng: -122.90791157665728 },
            { lat: 45.493399455695631, lng: -122.90787015760344 },
            { lat: 45.493402531658248, lng: -122.90782827505987 },
            { lat: 45.4934038357379, lng: -122.90778620562503 },
            { lat: 45.493403363241143, lng: -122.90774410070753 },
            { lat: 45.493667519625347, lng: -122.90773907080475 },
            { lat: 45.493639595803344, lng: -122.90797115976513 },
            { lat: 45.493394636308174, lng: -122.90791157665728 }];
        var Lot132098shape = new google.maps.Polygon({
            paths: [Lot132098coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132098shape.setMap(map);

        var Lot132124center = new google.maps.LatLng(45.4944531212959, -122.906389437106);
        var markerLot132124 = new google.maps.Marker({
            position: Lot132124center,
            map: map,
            title: 'Lot132124'
        });
        markers.push(markerLot132124);
        var Lot132124coords0 = [
            { lat: 45.494346347388685, lng: -122.90633370874498 },
            { lat: 45.494393405688129, lng: -122.90622875715515 },
            { lat: 45.494580816847559, lng: -122.9063983797995 },
            { lat: 45.494532925263556, lng: -122.90650517839114 },
            { lat: 45.494346347388685, lng: -122.90633370874498 }];
        var Lot132124shape = new google.maps.Polygon({
            paths: [Lot132124coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132124shape.setMap(map);

        var Lot132125center = new google.maps.LatLng(45.4944185273562, -122.906475270914);
        var markerLot132125 = new google.maps.Marker({
            position: Lot132125center,
            map: map,
            title: 'Lot132125'
        });
        markers.push(markerLot132125);
        var Lot132125coords0 = [
            { lat: 45.494297936343749, lng: -122.90643635116274 },
            { lat: 45.494346347388685, lng: -122.90633370874498 },
            { lat: 45.494532925263556, lng: -122.90650517839114 },
            { lat: 45.494480324632725, lng: -122.90661670352466 },
            { lat: 45.494297936343749, lng: -122.90643635116274 }];
        var Lot132125shape = new google.maps.Polygon({
            paths: [Lot132125coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132125shape.setMap(map);

        var Lot132126center = new google.maps.LatLng(45.4943667043868, -122.906581306526);
        var markerLot132126 = new google.maps.Marker({
            position: Lot132126center,
            map: map,
            title: 'Lot132126'
        });
        markers.push(markerLot132126);
        var Lot132126coords0 = [
            { lat: 45.494247109164604, lng: -122.90653660433831 },
            { lat: 45.494297936343749, lng: -122.90643635116274 },
            { lat: 45.494480324632725, lng: -122.90661670352466 },
            { lat: 45.494425098775061, lng: -122.90672563262147 },
            { lat: 45.494247109164604, lng: -122.90653660433831 }];
        var Lot132126shape = new google.maps.Polygon({
            paths: [Lot132126coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132126shape.setMap(map);

        var Lot132127center = new google.maps.LatLng(45.4943123864482, -122.906684786699);
        var markerLot132127 = new google.maps.Marker({
            position: Lot132127center,
            map: map,
            title: 'Lot132127'
        });
        markers.push(markerLot132127);
        var Lot132127coords0 = [
            { lat: 45.494193924123174, lng: -122.90663435334058 },
            { lat: 45.494247109164604, lng: -122.90653660433831 },
            { lat: 45.494425098775061, lng: -122.90672563262147 },
            { lat: 45.494367311006044, lng: -122.90683184080375 },
            { lat: 45.494193924123174, lng: -122.90663435334058 }];
        var Lot132127shape = new google.maps.Polygon({
            paths: [Lot132127coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132127shape.setMap(map);

        var Lot132128center = new google.maps.LatLng(45.4942556358146, -122.906785592803);
        var markerLot132128 = new google.maps.Marker({
            position: Lot132128center,
            map: map,
            title: 'Lot132128'
        });
        markers.push(markerLot132128);
        var Lot132128coords0 = [
            { lat: 45.494138442194533, lng: -122.90672948611027 },
            { lat: 45.494193924123174, lng: -122.90663435334058 },
            { lat: 45.494367311006044, lng: -122.90683184080375 },
            { lat: 45.494307027578209, lng: -122.90693520631424 },
            { lat: 45.494138442194533, lng: -122.90672948611027 }];
        var Lot132128shape = new google.maps.Polygon({
            paths: [Lot132128coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132128shape.setMap(map);

        var Lot132129center = new google.maps.LatLng(45.4941965175492, -122.906883609273);
        var markerLot132129 = new google.maps.Marker({
            position: Lot132129center,
            map: map,
            title: 'Lot132129'
        });
        markers.push(markerLot132129);
        var Lot132129coords0 = [
            { lat: 45.494080726986788, lng: -122.9068218935885 },
            { lat: 45.494138442194533, lng: -122.90672948611027 },
            { lat: 45.494307027578209, lng: -122.90693520631424 },
            { lat: 45.494244317605052, lng: -122.90703561065583 },
            { lat: 45.494080726986788, lng: -122.9068218935885 }];
        var Lot132129shape = new google.maps.Polygon({
            paths: [Lot132129coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132129shape.setMap(map);

        var Lot132130center = new google.maps.LatLng(45.4940930573802, -122.907034103077);
        var markerLot132130 = new google.maps.Marker({
            position: Lot132130center,
            map: map,
            title: 'Lot132130'
        });
        markers.push(markerLot132130);
        var Lot132130coords0 = [
            { lat: 45.494023999164362, lng: -122.90692619789108 },
            { lat: 45.494025956824771, lng: -122.90691048292943 },
            { lat: 45.494031379296707, lng: -122.90689650923551 },
            { lat: 45.494080726986788, lng: -122.9068218935885 },
            { lat: 45.494244317605052, lng: -122.90703561065583 },
            { lat: 45.494189804933683, lng: -122.90711759745042 },
            { lat: 45.494172953890782, lng: -122.90714001757651 },
            { lat: 45.494144936547606, lng: -122.90716932506245 },
            { lat: 45.494114287135737, lng: -122.90719270772794 },
            { lat: 45.494097584613542, lng: -122.90713658525581 },
            { lat: 45.494080313766496, lng: -122.9070852655649 },
            { lat: 45.494027328682073, lng: -122.90694768913237 },
            { lat: 45.494024799826732, lng: -122.9069372141532 },
            { lat: 45.494023999164362, lng: -122.90692619789108 }];
        var Lot132130shape = new google.maps.Polygon({
            paths: [Lot132130coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132130shape.setMap(map);

        var Lot132108center = new google.maps.LatLng(45.4937389578252, -122.909390311608);
        var markerLot132108 = new google.maps.Marker({
            position: Lot132108center,
            map: map,
            title: 'Lot132108'
        });
        markers.push(markerLot132108);
        var Lot132108coords0 = [
            { lat: 45.493607969150872, lng: -122.90939134625974 },
            { lat: 45.4938400849466, lng: -122.90927193127349 },
            { lat: 45.493869946498329, lng: -122.90938927695012 },
            { lat: 45.493637830582529, lng: -122.90950869151976 },
            { lat: 45.493607969150872, lng: -122.90939134625974 }];
        var Lot132108shape = new google.maps.Polygon({
            paths: [Lot132108coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132108shape.setMap(map);

        var Lot132107center = new google.maps.LatLng(45.4937090962734, -122.909272966202);
        var markerLot132107 = new google.maps.Marker({
            position: Lot132107center,
            map: map,
            title: 'Lot132107'
        });
        markers.push(markerLot132107);
        var Lot132107coords0 = [
            { lat: 45.49357810759912, lng: -122.90927400112304 },
            { lat: 45.493810223274757, lng: -122.90915458572019 },
            { lat: 45.4938400849466, lng: -122.90927193127349 },
            { lat: 45.493607969150872, lng: -122.90939134625974 },
            { lat: 45.49357810759912, lng: -122.90927400112304 }];
        var Lot132107shape = new google.maps.Polygon({
            paths: [Lot132107coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132107shape.setMap(map);

        var Lot132106center = new google.maps.LatLng(45.4936792346015, -122.909155620918);
        var markerLot132106 = new google.maps.Marker({
            position: Lot132106center,
            map: map,
            title: 'Lot132106'
        });
        markers.push(markerLot132106);
        var Lot132106coords0 = [
            { lat: 45.493548245927236, lng: -122.90915665610969 },
            { lat: 45.493780361482777, lng: -122.90903724029022 },
            { lat: 45.493810223274757, lng: -122.90915458572019 },
            { lat: 45.49357810759912, lng: -122.90927400112304 },
            { lat: 45.493548245927236, lng: -122.90915665610969 }];
        var Lot132106shape = new google.maps.Polygon({
            paths: [Lot132106coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132106shape.setMap(map);

        var Lot132105center = new google.maps.LatLng(45.4936493728096, -122.909038275758);
        var markerLot132105 = new google.maps.Marker({
            position: Lot132105center,
            map: map,
            title: 'Lot132105'
        });
        markers.push(markerLot132105);
        var Lot132105coords0 = [
            { lat: 45.493518384135228, lng: -122.90903931121967 },
            { lat: 45.4937504995707, lng: -122.90891989498363 },
            { lat: 45.493780361482777, lng: -122.90903724029022 },
            { lat: 45.493548245927236, lng: -122.90915665610969 },
            { lat: 45.493518384135228, lng: -122.90903931121967 }];
        var Lot132105shape = new google.maps.Polygon({
            paths: [Lot132105coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132105shape.setMap(map);

        var Lot132104center = new google.maps.LatLng(45.4936195108975, -122.908920930722);
        var markerLot132104 = new google.maps.Marker({
            position: Lot132104center,
            map: map,
            title: 'Lot132104'
        });
        markers.push(markerLot132104);
        var Lot132104coords0 = [
            { lat: 45.493488522223117, lng: -122.90892196645301 },
            { lat: 45.493720637538495, lng: -122.90880254980034 },
            { lat: 45.4937504995707, lng: -122.90891989498363 },
            { lat: 45.493518384135228, lng: -122.90903931121967 },
            { lat: 45.493488522223117, lng: -122.90892196645301 }];
        var Lot132104shape = new google.maps.Polygon({
            paths: [Lot132104coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132104shape.setMap(map);

        var Lot132109center = new google.maps.LatLng(45.4937688192568, -122.909507657138);
        var markerLot132109 = new google.maps.Marker({
            position: Lot132109center,
            map: map,
            title: 'Lot132109'
        });
        markers.push(markerLot132109);
        var Lot132109coords0 = [
            { lat: 45.493637830582529, lng: -122.90950869151976 },
            { lat: 45.493869946498329, lng: -122.90938927695012 },
            { lat: 45.493899807929957, lng: -122.90950662275009 },
            { lat: 45.493667691894075, lng: -122.90962603690315 },
            { lat: 45.493637830582529, lng: -122.90950869151976 }];
        var Lot132109shape = new google.maps.Polygon({
            paths: [Lot132109coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132109shape.setMap(map);

        var Lot132110center = new google.maps.LatLng(45.4941481415392, -122.909309278338);
        var markerLot132110 = new google.maps.Marker({
            position: Lot132110center,
            map: map,
            title: 'Lot132110'
        });
        markers.push(markerLot132110);
        var Lot132110coords0 = [
            { lat: 45.493937002181482, lng: -122.90935477922613 },
            { lat: 45.49415110365829, lng: -122.90924463117408 },
            { lat: 45.494191768192827, lng: -122.90935641971687 },
            { lat: 45.493966863647785, lng: -122.90947212514646 },
            { lat: 45.493937002181482, lng: -122.90935477922613 }];
        var Lot132110shape = new google.maps.Polygon({
            paths: [Lot132110coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132110shape.setMap(map);

        var Lot132111center = new google.maps.LatLng(45.4939670791442, -122.909221564878);
        var markerLot132111 = new google.maps.Marker({
            position: Lot132111center,
            map: map,
            title: 'Lot132111'
        });
        markers.push(markerLot132111);
        var Lot132111coords0 = [
            { lat: 45.493915778352779, lng: -122.90925896220693 },
            { lat: 45.493917576614841, lng: -122.90923968703055 },
            { lat: 45.493922929863452, lng: -122.90922179472999 },
            { lat: 45.4939314492516, lng: -122.90920658495907 },
            { lat: 45.493942515951396, lng: -122.90919516252038 },
            { lat: 45.4941096596205, lng: -122.90910836081105 },
            { lat: 45.49413045247254, lng: -122.90918022303472 },
            { lat: 45.49415110365829, lng: -122.90924463117408 },
            { lat: 45.493937002181482, lng: -122.90935477922613 },
            { lat: 45.493918278023123, lng: -122.909281091358 },
            { lat: 45.493915778352779, lng: -122.90925896220693 }];
        var Lot132111shape = new google.maps.Polygon({
            paths: [Lot132111coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132111shape.setMap(map);

        var Lot132113center = new google.maps.LatLng(45.4940192063948, -122.908784650211);
        var markerLot132113 = new google.maps.Marker({
            position: Lot132113center,
            map: map,
            title: 'Lot132113'
        });
        markers.push(markerLot132113);
        var Lot132113coords0 = [
            { lat: 45.4938040238809, lng: -122.90883222467222 },
            { lat: 45.4940336759388, lng: -122.90871407422371 },
            { lat: 45.494050966728906, lng: -122.9088378876538 },
            { lat: 45.49383388588209, lng: -122.90894957004332 },
            { lat: 45.4938040238809, lng: -122.90883222467222 }];
        var Lot132113shape = new google.maps.Polygon({
            paths: [Lot132113coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132113shape.setMap(map);

        var Lot132112center = new google.maps.LatLng(45.4939298855111, -122.909040073805);
        var markerLot132112 = new google.maps.Marker({
            position: Lot132112center,
            map: map,
            title: 'Lot132112'
        });
        markers.push(markerLot132112);
        var Lot132112coords0 = [
            { lat: 45.49383388588209, lng: -122.90894957004332 },
            { lat: 45.494050966728906, lng: -122.9088378876538 },
            { lat: 45.494067388341357, lng: -122.90892875917706 },
            { lat: 45.494085533416808, lng: -122.90901294691642 },
            { lat: 45.493941538692518, lng: -122.90908683569556 },
            { lat: 45.493925407080866, lng: -122.90909089257069 },
            { lat: 45.49390780213718, lng: -122.90908940141023 },
            { lat: 45.493895639887029, lng: -122.90908465266028 },
            { lat: 45.493883153261365, lng: -122.90907606685478 },
            { lat: 45.493872041082867, lng: -122.90906426475675 },
            { lat: 45.493862708028125, lng: -122.90904967616962 },
            { lat: 45.493853450002369, lng: -122.909026265937 },
            { lat: 45.49383388588209, lng: -122.90894957004332 }];
        var Lot132112shape = new google.maps.Polygon({
            paths: [Lot132112coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132112shape.setMap(map);

        var Tract132427center = new google.maps.LatLng(45.4930031107897, -122.906056802036);
        var Tract132427coords0 = [
            { lat: 45.492355111319519, lng: -122.90268417739087 },
            { lat: 45.492360707235783, lng: -122.90264309989195 },
            { lat: 45.492552574398907, lng: -122.90259358277524 },
            { lat: 45.492558339054, lng: -122.90263873794879 },
            { lat: 45.492570204858616, lng: -122.90264262746754 },
            { lat: 45.492581454963876, lng: -122.90265078574386 },
            { lat: 45.492590939575358, lng: -122.90266264160213 },
            { lat: 45.492597578575605, lng: -122.90267613389551 },
            { lat: 45.492412161182159, lng: -122.90273575933307 },
            { lat: 45.492444832916675, lng: -122.90294115095968 },
            { lat: 45.492632092139324, lng: -122.90288093391179 },
            { lat: 45.492641167585354, lng: -122.90293798736172 },
            { lat: 45.49245390833326, lng: -122.90299820423118 },
            { lat: 45.492486579598165, lng: -122.90320359615959 },
            { lat: 45.492673838956243, lng: -122.9031433799324 },
            { lat: 45.492682914271811, lng: -122.90320043346617 },
            { lat: 45.492495654884294, lng: -122.90326064951495 },
            { lat: 45.492528325679537, lng: -122.90346604174516 },
            { lat: 45.492715585173059, lng: -122.90340582633861 },
            { lat: 45.492724660358171, lng: -122.90346287995619 },
            { lat: 45.492537400835225, lng: -122.90352309518434 },
            { lat: 45.492570071160834, lng: -122.90372848771632 },
            { lat: 45.4927596468102, lng: -122.90366752839601 },
            { lat: 45.492773902590031, lng: -122.90372239892157 },
            { lat: 45.492597645668162, lng: -122.90383089387909 },
            { lat: 45.492656487155209, lng: -122.90402414133143 },
            { lat: 45.492832673695332, lng: -122.903915690295 },
            { lat: 45.492849018544867, lng: -122.90396937034916 },
            { lat: 45.49267283195487, lng: -122.90407782125031 },
            { lat: 45.492731673025283, lng: -122.90427106921406 },
            { lat: 45.492908941972466, lng: -122.9041619526714 },
            { lat: 45.492928581075077, lng: -122.90421335223428 },
            { lat: 45.492760375584275, lng: -122.90434495102474 },
            { lat: 45.492831775710073, lng: -122.9045294453822 },
            { lat: 45.492999981408936, lng: -122.9043978469725 },
            { lat: 45.493060139327412, lng: -122.9045503077825 },
            { lat: 45.493073289192417, lng: -122.90457609331732 },
            { lat: 45.493137798765289, lng: -122.90469051263482 },
            { lat: 45.493134116042718, lng: -122.90470453313827 },
            { lat: 45.492842395463924, lng: -122.90468964647306 },
            { lat: 45.492806486806678, lng: -122.90589748169859 },
            { lat: 45.493080580358722, lng: -122.90591147466721 },
            { lat: 45.493065995587, lng: -122.90594946256313 },
            { lat: 45.493058285499778, lng: -122.90598160605447 },
            { lat: 45.493054585161786, lng: -122.90602004472089 },
            { lat: 45.493056197100664, lng: -122.90605635245487 },
            { lat: 45.49306326760999, lng: -122.90609382441215 },
            { lat: 45.493074653830185, lng: -122.90612640371792 },
            { lat: 45.493091389132132, lng: -122.90615704714649 },
            { lat: 45.493112169997232, lng: -122.90618219057238 },
            { lat: 45.492869227091738, lng: -122.9061200499291 },
            { lat: 45.492829409282308, lng: -122.90643475034878 },
            { lat: 45.492845907544869, lng: -122.90695774335343 },
            { lat: 45.492883086518056, lng: -122.9069571733703 },
            { lat: 45.492921097991683, lng: -122.90696031763534 },
            { lat: 45.492957979649958, lng: -122.90696701383521 },
            { lat: 45.492995327110116, lng: -122.90697755167604 },
            { lat: 45.493032067590669, lng: -122.90699176285487 },
            { lat: 45.493067187832246, lng: -122.90700911884798 },
            { lat: 45.493099067681591, lng: -122.90702829570463 },
            { lat: 45.493133070161278, lng: -122.907052658246 },
            { lat: 45.493170849926351, lng: -122.90708500467335 },
            { lat: 45.493204644865664, lng: -122.90711933860909 },
            { lat: 45.493236507426232, lng: -122.90715722414892 },
            { lat: 45.49326749809638, lng: -122.90720030952042 },
            { lat: 45.493299176663214, lng: -122.90725243993579 },
            { lat: 45.493327481790281, lng: -122.90730835650291 },
            { lat: 45.493310539930974, lng: -122.90732140481917 },
            { lat: 45.493289351859609, lng: -122.90727896007724 },
            { lat: 45.493267859797363, lng: -122.90724149790141 },
            { lat: 45.493244713671928, lng: -122.90720608394805 },
            { lat: 45.49321745764631, lng: -122.90716966991401 },
            { lat: 45.49318845412418, lng: -122.90713609569458 },
            { lat: 45.493160693587846, lng: -122.90710818050857 },
            { lat: 45.493131724954388, lng: -122.90708286832471 },
            { lat: 45.493101668774642, lng: -122.90706026447386 },
            { lat: 45.493067500262093, lng: -122.90703864027684 },
            { lat: 45.493035572123063, lng: -122.9070220161604 },
            { lat: 45.493002956569562, lng: -122.90700835359368 },
            { lat: 45.492966447557983, lng: -122.90699681283735 },
            { lat: 45.49293283294611, lng: -122.90698953957536 },
            { lat: 45.492895562136738, lng: -122.906985116435 },
            { lat: 45.492861564622665, lng: -122.90698436577277 },
            { lat: 45.492827603806354, lng: -122.90698673331016 },
            { lat: 45.492810133437374, lng: -122.906432922751 },
            { lat: 45.49286317884139, lng: -122.90601367640068 },
            { lat: 45.492784063581908, lng: -122.90600533893662 },
            { lat: 45.492826651731967, lng: -122.90457282873169 },
            { lat: 45.492714009650605, lng: -122.90428176744012 },
            { lat: 45.492555677987717, lng: -122.90376177220931 },
            { lat: 45.492383118647119, lng: -122.90267694929702 },
            { lat: 45.492355111319519, lng: -122.90268417739087 }];
        var Tract132427shape = new google.maps.Polygon({
            paths: [Tract132427coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132427shape.setMap(map);

        var Tract132426center = new google.maps.LatLng(45.4928050574615, -122.902338000413);
        var Tract132426coords0 = [
            { lat: 45.492502374831872, lng: -122.90220037249846 },
            { lat: 45.492844699843104, lng: -122.90211202197113 },
            { lat: 45.492862284197251, lng: -122.90235461494728 },
            { lat: 45.49287419542064, lng: -122.90248885634379 },
            { lat: 45.492846735692027, lng: -122.90249594327018 },
            { lat: 45.492802649695889, lng: -122.90215061830341 },
            { lat: 45.49250580376858, lng: -122.90222723094884 },
            { lat: 45.492502374831872, lng: -122.90220037249846 }];
        var Tract132426shape = new google.maps.Polygon({
            paths: [Tract132426coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132426shape.setMap(map);

        var Tract132425center = new google.maps.LatLng(45.492716709598, -122.902662733588);
        var Tract132425coords0 = [
            { lat: 45.492681804433516, lng: -122.90272334170362 },
            { lat: 45.492684514987367, lng: -122.90269580160292 },
            { lat: 45.492692583791296, lng: -122.90267046993017 },
            { lat: 45.492705354346711, lng: -122.9026494077366 },
            { lat: 45.492721787607877, lng: -122.90263432870057 },
            { lat: 45.492736920656284, lng: -122.90262734791202 },
            { lat: 45.492884849525822, lng: -122.90258915427709 },
            { lat: 45.4928928303705, lng: -122.90265631504589 },
            { lat: 45.492681804433516, lng: -122.90272334170362 }];
        var Tract132425shape = new google.maps.Polygon({
            paths: [Tract132425coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132425shape.setMap(map);

        var Tract132424center = new google.maps.LatLng(45.4928756566175, -122.902994876707);
        var Tract132424coords0 = [
            { lat: 45.492726325010828, lng: -122.90301371712482 },
            { lat: 45.492919209005876, lng: -122.90295169125643 },
            { lat: 45.492929048279862, lng: -122.90300849936952 },
            { lat: 45.492735400390679, lng: -122.90307077069058 },
            { lat: 45.492726325010828, lng: -122.90301371712482 }];
        var Tract132424shape = new google.maps.Polygon({
            paths: [Tract132424coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132424shape.setMap(map);

        var Tract132423center = new google.maps.LatLng(45.4928740824308, -122.903575493282);
        var Tract132423coords0 = [
            { lat: 45.492808002408459, lng: -122.90352719987271 },
            { lat: 45.493025188826032, lng: -122.90345736098412 },
            { lat: 45.493039286933325, lng: -122.90351231405965 },
            { lat: 45.492828795447089, lng: -122.90364188355761 },
            { lat: 45.492818703959891, lng: -122.90359334733904 },
            { lat: 45.492808002408459, lng: -122.90352719987271 }];
        var Tract132423shape = new google.maps.Polygon({
            paths: [Tract132423coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132423shape.setMap(map);

        var Tract132422center = new google.maps.LatLng(45.4930234257079, -122.90406958805);
        var Tract132422coords0 = [
            { lat: 45.492958049960144, lng: -122.90407225034956 },
            { lat: 45.493168605439038, lng: -122.90394264305452 },
            { lat: 45.493186789419219, lng: -122.90399511403058 },
            { lat: 45.492986253817577, lng: -122.90415200849488 },
            { lat: 45.492969954679978, lng: -122.90410883616305 },
            { lat: 45.492958049960144, lng: -122.90407225034956 }];
        var Tract132422shape = new google.maps.Polygon({
            paths: [Tract132422coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132422shape.setMap(map);

        var Tract132421center = new google.maps.LatLng(45.4932846409555, -122.904426616247);
        var Tract132421coords0 = [
            { lat: 45.49311609741288, lng: -122.904486625327 },
            { lat: 45.493316368209683, lng: -122.90432993918139 },
            { lat: 45.493324766006417, lng: -122.90435018466566 },
            { lat: 45.493327375651752, lng: -122.90436260803803 },
            { lat: 45.493327376629956, lng: -122.90437557368455 },
            { lat: 45.493324768859246, lng: -122.90438799785265 },
            { lat: 45.493319770313938, lng: -122.90439884205026 },
            { lat: 45.49323227921721, lng: -122.90449785905834 },
            { lat: 45.493210299075358, lng: -122.90452808714524 },
            { lat: 45.4931885222463, lng: -122.90456401474032 },
            { lat: 45.49311609741288, lng: -122.904486625327 }];
        var Tract132421shape = new google.maps.Polygon({
            paths: [Tract132421coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132421shape.setMap(map);

        var Tract132420center = new google.maps.LatLng(45.4933853033557, -122.904797351608);
        var Tract132420coords0 = [
            { lat: 45.49326330295213, lng: -122.90509155325573 },
            { lat: 45.493271079628457, lng: -122.90484333999972 },
            { lat: 45.493277358589147, lng: -122.90479705987593 },
            { lat: 45.493289030354632, lng: -122.90475294471504 },
            { lat: 45.493298921708096, lng: -122.90472703594001 },
            { lat: 45.493311955533684, lng: -122.90470042918 },
            { lat: 45.493325618337892, lng: -122.90467825538703 },
            { lat: 45.4933424545542, lng: -122.90465638512202 },
            { lat: 45.493401606534668, lng: -122.90459173626617 },
            { lat: 45.493408568265977, lng: -122.90458788698348 },
            { lat: 45.493415971399585, lng: -122.90458647332733 },
            { lat: 45.493429689362863, lng: -122.90459061796338 },
            { lat: 45.493436048541611, lng: -122.90459618965647 },
            { lat: 45.493441307903474, lng: -122.90460373132753 },
            { lat: 45.493488435786766, lng: -122.9046972788308 },
            { lat: 45.493535310566273, lng: -122.90478600933916 },
            { lat: 45.493589044713879, lng: -122.90488279022733 },
            { lat: 45.493638863956491, lng: -122.90496821588475 },
            { lat: 45.493613828846563, lng: -122.90500062557194 },
            { lat: 45.493445798577184, lng: -122.90473822393537 },
            { lat: 45.493291668930652, lng: -122.90493775526672 },
            { lat: 45.493418181138196, lng: -122.9051353211255 },
            { lat: 45.4934003819154, lng: -122.90513931927144 },
            { lat: 45.49332027437282, lng: -122.90513343903092 },
            { lat: 45.493310097476453, lng: -122.90512839383746 },
            { lat: 45.49326330295213, lng: -122.90509155325573 }];
        var Tract132420shape = new google.maps.Polygon({
            paths: [Tract132420coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132420shape.setMap(map);

        var Tract132418center = new google.maps.LatLng(45.4937223868194, -122.905461463081);
        var Tract132418coords0 = [
            { lat: 45.493661210016889, lng: -122.90548250252284 },
            { lat: 45.493830372671759, lng: -122.90526351137498 },
            { lat: 45.493853773383776, lng: -122.90529641830489 },
            { lat: 45.493701831757122, lng: -122.90554067895613 },
            { lat: 45.49368300232625, lng: -122.90551595557935 },
            { lat: 45.493661210016889, lng: -122.90548250252284 }];
        var Tract132418shape = new google.maps.Polygon({
            paths: [Tract132418coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132418shape.setMap(map);

        var Tract132417center = new google.maps.LatLng(45.4941623359152, -122.905810640731);
        var Tract132417coords0 = [
            { lat: 45.493950531623149, lng: -122.90584722417005 },
            { lat: 45.494099675528311, lng: -122.90560746190968 },
            { lat: 45.494164037225559, lng: -122.90567952658797 },
            { lat: 45.494208510761041, lng: -122.9057256153762 },
            { lat: 45.49425449555126, lng: -122.90576860145119 },
            { lat: 45.494310356942947, lng: -122.90581568011412 },
            { lat: 45.494315670781475, lng: -122.90582314429798 },
            { lat: 45.494319601140994, lng: -122.90583217590383 },
            { lat: 45.494322541403264, lng: -122.90585167332478 },
            { lat: 45.494319606974571, lng: -122.90586998975218 },
            { lat: 45.494305615998563, lng: -122.90590196732524 },
            { lat: 45.494069615777427, lng: -122.90568837171874 },
            { lat: 45.494010931023084, lng: -122.90581944316784 },
            { lat: 45.494003501535971, lng: -122.90583207518915 },
            { lat: 45.493991473593063, lng: -122.90584414029983 },
            { lat: 45.493978552667372, lng: -122.90585050828049 },
            { lat: 45.493964904970269, lng: -122.90585173871435 },
            { lat: 45.493950531623149, lng: -122.90584722417005 }];
        var Tract132417shape = new google.maps.Polygon({
            paths: [Tract132417coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132417shape.setMap(map);

        var Tract132448center = new google.maps.LatLng(45.4927966228609, -122.903338210482);
        var Tract132448coords0 = [
            { lat: 45.492549889538004, lng: -122.90257255417104 },
            { lat: 45.49287419542064, lng: -122.90248885634379 },
            { lat: 45.492884849525822, lng: -122.90258915427709 },
            { lat: 45.492736346884278, lng: -122.90262751474353 },
            { lat: 45.492719054412589, lng: -122.9026362162703 },
            { lat: 45.492709681270846, lng: -122.90264447568319 },
            { lat: 45.492701360545553, lng: -122.90265476463155 },
            { lat: 45.492689250496639, lng: -122.90267875950109 },
            { lat: 45.492685059290594, lng: -122.90269326171176 },
            { lat: 45.4926825573279, lng: -122.90270853164644 },
            { lat: 45.49268180931967, lng: -122.90272417436124 },
            { lat: 45.4926827779765, lng: -122.9027393194737 },
            { lat: 45.492816463723571, lng: -122.90358031418458 },
            { lat: 45.4928258057342, lng: -122.9036288355687 },
            { lat: 45.492836765047805, lng: -122.90367294330588 },
            { lat: 45.492958049960144, lng: -122.90407225034956 },
            { lat: 45.49311609741288, lng: -122.904486625327 },
            { lat: 45.4931885222463, lng: -122.90456401474032 },
            { lat: 45.493172330295337, lng: -122.90459594546824 },
            { lat: 45.493159253789152, lng: -122.9046262781669 },
            { lat: 45.493147723906596, lng: -122.90465785360911 },
            { lat: 45.493137798765289, lng: -122.90469051263482 },
            { lat: 45.49307188373502, lng: -122.90457353431624 },
            { lat: 45.493055278656669, lng: -122.90453956846218 },
            { lat: 45.492912135062731, lng: -122.90417065555118 },
            { lat: 45.492895030715559, lng: -122.90412044571 },
            { lat: 45.492770139514867, lng: -122.90370909811465 },
            { lat: 45.492756809384268, lng: -122.90365481728595 },
            { lat: 45.492746912931629, lng: -122.90360270692523 },
            { lat: 45.492601892845471, lng: -122.90269141519956 },
            { lat: 45.492595665117548, lng: -122.9026715244827 },
            { lat: 45.492586004825014, lng: -122.90265573308601 },
            { lat: 45.492573563084179, lng: -122.90264454870487 },
            { lat: 45.492558339054, lng: -122.90263873794879 },
            { lat: 45.492549889538004, lng: -122.90257255417104 }];
        var Tract132448shape = new google.maps.Polygon({
            paths: [Tract132448coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132448shape.setMap(map);

        var Tract132451center = new google.maps.LatLng(45.4932890875794, -122.905777561767);
        var Tract132451coords0 = [
            { lat: 45.493054511541146, lng: -122.90602617250097 },
            { lat: 45.493055853245167, lng: -122.90599954299279 },
            { lat: 45.493060307013124, lng: -122.90597111965329 },
            { lat: 45.493067776736922, lng: -122.90594400530655 },
            { lat: 45.4930802532519, lng: -122.90591261675485 },
            { lat: 45.493082873006408, lng: -122.90589695279637 },
            { lat: 45.493114096675576, lng: -122.90484750190218 },
            { lat: 45.493116595562519, lng: -122.90480813332185 },
            { lat: 45.493121269107711, lng: -122.90476916727262 },
            { lat: 45.493130546356987, lng: -122.90471951144947 },
            { lat: 45.4931441876491, lng: -122.90466877719165 },
            { lat: 45.493160574036509, lng: -122.90462298563827 },
            { lat: 45.493180171978445, lng: -122.90457982039737 },
            { lat: 45.4932012310153, lng: -122.90454221991708 },
            { lat: 45.493226431611646, lng: -122.90450539828625 },
            { lat: 45.493245370974591, lng: -122.90448214732663 },
            { lat: 45.49329615039025, lng: -122.90442592330589 },
            { lat: 45.493392118752936, lng: -122.90460139430847 },
            { lat: 45.49333609163358, lng: -122.90466405773941 },
            { lat: 45.493322723362084, lng: -122.90468257195005 },
            { lat: 45.493309397268227, lng: -122.90470515620306 },
            { lat: 45.493295729674415, lng: -122.9047347075917 },
            { lat: 45.493285604371749, lng: -122.90476376088455 },
            { lat: 45.493277345991977, lng: -122.90479712334071 },
            { lat: 45.493272441198457, lng: -122.90482878909151 },
            { lat: 45.493270155057758, lng: -122.90486105033757 },
            { lat: 45.493237651828217, lng: -122.90595431128898 },
            { lat: 45.493239808907539, lng: -122.90597350441456 },
            { lat: 45.493245980426011, lng: -122.90598826815553 },
            { lat: 45.493256135097937, lng: -122.90599965327766 },
            { lat: 45.493309926356055, lng: -122.90603174278205 },
            { lat: 45.493361591242582, lng: -122.90606571804597 },
            { lat: 45.493412296963406, lng: -122.90610249882262 },
            { lat: 45.49346196819635, lng: -122.90614203048244 },
            { lat: 45.493534374422126, lng: -122.90620635633981 },
            { lat: 45.493599490528815, lng: -122.90627166873183 },
            { lat: 45.493670748449247, lng: -122.90635229807133 },
            { lat: 45.493740544188412, lng: -122.90644198246345 },
            { lat: 45.493802141439041, lng: -122.90653154022756 },
            { lat: 45.493872762822114, lng: -122.90664545912763 },
            { lat: 45.493763272672965, lng: -122.90680513621156 },
            { lat: 45.493682237007391, lng: -122.90667458905618 },
            { lat: 45.493648574651459, lng: -122.9066250552543 },
            { lat: 45.4936136571905, lng: -122.90657731029472 },
            { lat: 45.493574164995991, lng: -122.90652731101183 },
            { lat: 45.493536776228694, lng: -122.90648351231933 },
            { lat: 45.493494392820281, lng: -122.90643764086245 },
            { lat: 45.493454744630625, lng: -122.90639806264481 },
            { lat: 45.493409527333604, lng: -122.90635654532871 },
            { lat: 45.493358733085692, lng: -122.90631416075915 },
            { lat: 45.493306380956767, lng: -122.90627483991099 },
            { lat: 45.493257755297854, lng: -122.90624202132027 },
            { lat: 45.493212754469674, lng: -122.90621535843435 },
            { lat: 45.493176010039605, lng: -122.90621476155351 },
            { lat: 45.493149211745333, lng: -122.90620745434084 },
            { lat: 45.493127048845054, lng: -122.90619479035605 },
            { lat: 45.493105995540454, lng: -122.90617577541023 },
            { lat: 45.493094418094039, lng: -122.90616140755742 },
            { lat: 45.493084083349039, lng: -122.90614523708233 },
            { lat: 45.493075129232295, lng: -122.90612747979586 },
            { lat: 45.49306767524476, lng: -122.90610837268619 },
            { lat: 45.493061820866792, lng: -122.90608817075572 },
            { lat: 45.493057644230412, lng: -122.906067143618 },
            { lat: 45.493054511541146, lng: -122.90602617250097 }];
        var Tract132451shape = new google.maps.Polygon({
            paths: [Tract132451coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132451shape.setMap(map);

        var Tract132419center = new google.maps.LatLng(45.493551055275, -122.905913668608);
        var Tract132419coords0 = [
            { lat: 45.4932376224214, lng: -122.90595677705663 },
            { lat: 45.4932579748546, lng: -122.90527077817666 },
            { lat: 45.4933076631265, lng: -122.90523918101434 },
            { lat: 45.493321770198165, lng: -122.9052355963979 },
            { lat: 45.493386558631265, lng: -122.905239506415 },
            { lat: 45.493397891855466, lng: -122.9052421862514 },
            { lat: 45.493408662405542, lng: -122.9052478717642 },
            { lat: 45.493417551434248, lng: -122.90525539036294 },
            { lat: 45.4934340229751, lng: -122.9052783197633 },
            { lat: 45.493271780244108, lng: -122.905488351128 },
            { lat: 45.49349335624477, lng: -122.90583437745566 },
            { lat: 45.493658125765471, lng: -122.90562107601167 },
            { lat: 45.493682778868624, lng: -122.90565207910853 },
            { lat: 45.4935192427343, lng: -122.90591497581228 },
            { lat: 45.493745228475312, lng: -122.9061991723479 },
            { lat: 45.4939071240593, lng: -122.90593891375885 },
            { lat: 45.493912533183121, lng: -122.90595744794928 },
            { lat: 45.493914151872779, lng: -122.90597675527584 },
            { lat: 45.493912085431226, lng: -122.90599597602109 },
            { lat: 45.493906483960487, lng: -122.90601371402992 },
            { lat: 45.4938448543434, lng: -122.90613573140567 },
            { lat: 45.493772601741966, lng: -122.90626369483979 },
            { lat: 45.493696548318816, lng: -122.90638412168315 },
            { lat: 45.493654851587451, lng: -122.90633341390654 },
            { lat: 45.493614747590939, lng: -122.90628808551219 },
            { lat: 45.49357356203631, lng: -122.9062447620968 },
            { lat: 45.493526592133072, lng: -122.90619903980317 },
            { lat: 45.493458827064849, lng: -122.90613942365133 },
            { lat: 45.493393961451737, lng: -122.90608879332042 },
            { lat: 45.4933273937301, lng: -122.90604284598453 },
            { lat: 45.493254714988694, lng: -122.90599854601236 },
            { lat: 45.493247837740739, lng: -122.9059910860346 },
            { lat: 45.493242056444423, lng: -122.90598035018267 },
            { lat: 45.493238785229046, lng: -122.90596896449139 },
            { lat: 45.4932376224214, lng: -122.90595677705663 }];
        var Tract132419shape = new google.maps.Polygon({
            paths: [Tract132419coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132419shape.setMap(map);

        var Tract132454center = new google.maps.LatLng(45.4936921721176, -122.90566653334);
        var Tract132454coords0 = [
            { lat: 45.4932579748546, lng: -122.90527077817666 },
            { lat: 45.49326330295213, lng: -122.90509155325573 },
            { lat: 45.493310134355205, lng: -122.90512842120178 },
            { lat: 45.493320315231649, lng: -122.90513345013537 },
            { lat: 45.4934005605174, lng: -122.90513932436927 },
            { lat: 45.493418181138196, lng: -122.9051353211255 },
            { lat: 45.493427167620922, lng: -122.90512941602026 },
            { lat: 45.493434861936393, lng: -122.90512153616439 },
            { lat: 45.493575052684456, lng: -122.90494007121039 },
            { lat: 45.493613828846563, lng: -122.90500062557194 },
            { lat: 45.493503772409724, lng: -122.90514400082999 },
            { lat: 45.493497407068013, lng: -122.90515775736529 },
            { lat: 45.493493162533341, lng: -122.90517466908685 },
            { lat: 45.493491986854792, lng: -122.90519254739772 },
            { lat: 45.493493670733258, lng: -122.90520883917441 },
            { lat: 45.4934979089679, lng: -122.90522416367301 },
            { lat: 45.493504480759796, lng: -122.9052377225341 },
            { lat: 45.493681419411743, lng: -122.90551367677207 },
            { lat: 45.493935224115013, lng: -122.9058341853856 },
            { lat: 45.493942925556148, lng: -122.90584205122433 },
            { lat: 45.493951256540612, lng: -122.90584760668483 },
            { lat: 45.493964623848257, lng: -122.90585170883088 },
            { lat: 45.493979309528278, lng: -122.90585028327953 },
            { lat: 45.493992160705538, lng: -122.90584363607914 },
            { lat: 45.494003296653347, lng: -122.90583235051018 },
            { lat: 45.494010775385327, lng: -122.90581977737456 },
            { lat: 45.494069615777427, lng: -122.90568837171874 },
            { lat: 45.494118204091961, lng: -122.90573234713975 },
            { lat: 45.493987739921558, lng: -122.90602334543958 },
            { lat: 45.493926496450541, lng: -122.906149493047 },
            { lat: 45.49388223140113, lng: -122.90623290615633 },
            { lat: 45.493840386781045, lng: -122.90630662753487 },
            { lat: 45.493795140064591, lng: -122.90638137146266 },
            { lat: 45.493748713261454, lng: -122.90645325832435 },
            { lat: 45.493696548318816, lng: -122.90638412168315 },
            { lat: 45.493750543208975, lng: -122.90630000875585 },
            { lat: 45.493804667889606, lng: -122.90620869515875 },
            { lat: 45.493858386498481, lng: -122.90611006262769 },
            { lat: 45.493905578649454, lng: -122.90601570629576 },
            { lat: 45.493911587191654, lng: -122.90599823969005 },
            { lat: 45.493914138039131, lng: -122.90597762682962 },
            { lat: 45.493912420332784, lng: -122.90595684030248 },
            { lat: 45.4939071240593, lng: -122.90593891375885 },
            { lat: 45.493897034745295, lng: -122.9059215232723 },
            { lat: 45.493635183212092, lng: -122.90559132766283 },
            { lat: 45.493426656190977, lng: -122.90526681967123 },
            { lat: 45.493418085332344, lng: -122.90525594144131 },
            { lat: 45.493405060000477, lng: -122.90524559566437 },
            { lat: 45.493390647469667, lng: -122.90524011040893 },
            { lat: 45.493319025689843, lng: -122.90523567123449 },
            { lat: 45.493307624375554, lng: -122.90523920252137 },
            { lat: 45.4932579748546, lng: -122.90527077817666 }];
        var Tract132454shape = new google.maps.Polygon({
            paths: [Tract132454coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132454shape.setMap(map);

        var Tract132442center = new google.maps.LatLng(45.4932058175282, -122.90666872794);
        var Tract132442coords0 = [
            { lat: 45.492832143575143, lng: -122.90652142187493 },
            { lat: 45.492883030503329, lng: -122.90652033612682 },
            { lat: 45.492930582387928, lng: -122.90652322496298 },
            { lat: 45.492977947067693, lng: -122.90652987829397 },
            { lat: 45.493033088792878, lng: -122.90654145246363 },
            { lat: 45.493047695096983, lng: -122.90653885770885 },
            { lat: 45.493061162940435, lng: -122.90653041104835 },
            { lat: 45.493069451265427, lng: -122.90652117072588 },
            { lat: 45.493075619793473, lng: -122.90651093099935 },
            { lat: 45.493080340601942, lng: -122.90649923817509 },
            { lat: 45.49308344881522, lng: -122.9064865006282 },
            { lat: 45.493121044913913, lng: -122.90619015210187 },
            { lat: 45.493147996272775, lng: -122.90620692542119 },
            { lat: 45.493176445748126, lng: -122.90621481439253 },
            { lat: 45.493137735144316, lng: -122.90652146916922 },
            { lat: 45.49313876264528, lng: -122.90654679852254 },
            { lat: 45.4931458939814, lng: -122.90657005576486 },
            { lat: 45.493154151343717, lng: -122.90658364188455 },
            { lat: 45.493164512719737, lng: -122.90659390773486 },
            { lat: 45.493236701152767, lng: -122.90663766142812 },
            { lat: 45.493271682406267, lng: -122.90666271187239 },
            { lat: 45.493305625536991, lng: -122.90668985525245 },
            { lat: 45.493356783698417, lng: -122.90673655762875 },
            { lat: 45.493405298997885, lng: -122.90678811978805 },
            { lat: 45.493454447247814, lng: -122.90684886106487 },
            { lat: 45.49350295694483, lng: -122.90691906826328 },
            { lat: 45.493546945813179, lng: -122.90699396828161 },
            { lat: 45.493586880891669, lng: -122.90707435636028 },
            { lat: 45.49353989152528, lng: -122.90712185884333 },
            { lat: 45.493509845504455, lng: -122.90706000842479 },
            { lat: 45.49347874254633, lng: -122.90700409545082 },
            { lat: 45.49344232719347, lng: -122.90694679734631 },
            { lat: 45.493405379113682, lng: -122.90689590541196 },
            { lat: 45.493363944708008, lng: -122.90684597399078 },
            { lat: 45.493323652697867, lng: -122.90680354818691 },
            { lat: 45.493280443819394, lng: -122.90676385648987 },
            { lat: 45.493236680909021, lng: -122.9067290693939 },
            { lat: 45.493187636199359, lng: -122.9066958866173 },
            { lat: 45.493139819713939, lng: -122.90666891369901 },
            { lat: 45.4930921312833, lng: -122.90664690487161 },
            { lat: 45.49303948174, lng: -122.90662793154367 },
            { lat: 45.492988887115587, lng: -122.90661470929317 },
            { lat: 45.492939097728751, lng: -122.90660632069212 },
            { lat: 45.492884857723347, lng: -122.90660228261744 },
            { lat: 45.492834724445721, lng: -122.90660323213604 },
            { lat: 45.492832143575143, lng: -122.90652142187493 }];
        var Tract132442shape = new google.maps.Polygon({
            paths: [Tract132442coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132442shape.setMap(map);

        var Tract132452center = new google.maps.LatLng(45.4937302199213, -122.906982205419);
        var Tract132452coords0 = [
            { lat: 45.492837564017357, lng: -122.90760127958676 },
            { lat: 45.493008243405228, lng: -122.90751457685016 },
            { lat: 45.493095559931042, lng: -122.90746611353616 },
            { lat: 45.493201067897985, lng: -122.9073997867924 },
            { lat: 45.4932978108245, lng: -122.90733104277697 },
            { lat: 45.493400374263295, lng: -122.90724926218192 },
            { lat: 45.493498098402767, lng: -122.90716209935579 },
            { lat: 45.493597463814822, lng: -122.9070633158658 },
            { lat: 45.49368858963259, lng: -122.90696273467893 },
            { lat: 45.493763755575387, lng: -122.90687099284084 },
            { lat: 45.493769908833926, lng: -122.90685581557568 },
            { lat: 45.493772052389481, lng: -122.90683730912286 },
            { lat: 45.493769647148333, lng: -122.90682012776416 },
            { lat: 45.493763272672965, lng: -122.90680513621156 },
            { lat: 45.493872762822114, lng: -122.90664545912763 },
            { lat: 45.493882752897967, lng: -122.90665678671229 },
            { lat: 45.493895327278544, lng: -122.90666245441828 },
            { lat: 45.493908490386495, lng: -122.9066612338449 },
            { lat: 45.493920440547591, lng: -122.90665329205116 },
            { lat: 45.493962888078457, lng: -122.90658849984231 },
            { lat: 45.494020715415409, lng: -122.90649224836024 },
            { lat: 45.49408465847835, lng: -122.90637662171996 },
            { lat: 45.494144991254593, lng: -122.90625713690051 },
            { lat: 45.494185505562463, lng: -122.90617023383619 },
            { lat: 45.494314055875968, lng: -122.9058831147326 },
            { lat: 45.494480644200138, lng: -122.90603388878715 },
            { lat: 45.494339345492207, lng: -122.90634902760146 },
            { lat: 45.494275716087827, lng: -122.9064810620327 },
            { lat: 45.494231060917556, lng: -122.90656682620322 },
            { lat: 45.494184661601281, lng: -122.90665069760114 },
            { lat: 45.494141443719592, lng: -122.90672450425838 },
            { lat: 45.494091840990826, lng: -122.90680458328917 },
            { lat: 45.494040613111167, lng: -122.90688256634412 },
            { lat: 45.493982437692992, lng: -122.90696584736254 },
            { lat: 45.493925842442707, lng: -122.90704195486548 },
            { lat: 45.493869805368249, lng: -122.90711293673526 },
            { lat: 45.4938065086117, lng: -122.90718828928706 },
            { lat: 45.493747514037018, lng: -122.90725424853828 },
            { lat: 45.493681084849982, lng: -122.90732393689407 },
            { lat: 45.493619355087787, lng: -122.907384625002 },
            { lat: 45.493537288554947, lng: -122.907459637488 },
            { lat: 45.493459805419967, lng: -122.90752489865174 },
            { lat: 45.493374105415462, lng: -122.90759118970131 },
            { lat: 45.493288236512768, lng: -122.90765176715051 },
            { lat: 45.49320616692188, lng: -122.90770448902565 },
            { lat: 45.493129835781872, lng: -122.90774919477403 },
            { lat: 45.493066656821043, lng: -122.90778316132089 },
            { lat: 45.492903884493188, lng: -122.90786574609319 },
            { lat: 45.492837564017357, lng: -122.90760127958676 }];
        var Tract132452shape = new google.maps.Polygon({
            paths: [Tract132452coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132452shape.setMap(map);

        var Lot132318center = new google.maps.LatLng(45.4939896401183, -122.905560445734);
        var markerLot132318 = new google.maps.Marker({
            position: Lot132318center,
            map: map,
            title: 'Lot132318'
        });
        markers.push(markerLot132318);
        var Lot132318coords0 = [
            { lat: 45.493847695953306, lng: -122.90572411427178 },
            { lat: 45.493996734987341, lng: -122.90548452030663 },
            { lat: 45.494042520943481, lng: -122.90554041342675 },
            { lat: 45.493892893249232, lng: -122.90578095357479 },
            { lat: 45.493847695953306, lng: -122.90572411427178 }];
        var Lot132318shape = new google.maps.Polygon({
            paths: [Lot132318coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132318shape.setMap(map);

        var Lot132281center = new google.maps.LatLng(45.4931084652842, -122.904779064368);
        var markerLot132281 = new google.maps.Marker({
            position: Lot132281center,
            map: map,
            title: 'Lot132281'
        });
        markers.push(markerLot132281);
        var Lot132281coords0 = [
            { lat: 45.492836604604044, lng: -122.90488445870946 },
            { lat: 45.492842395463924, lng: -122.90468964647306 },
            { lat: 45.493134116042718, lng: -122.90470453313827 },
            { lat: 45.493124376155329, lng: -122.90475011729636 },
            { lat: 45.493117747565748, lng: -122.90479660034269 },
            { lat: 45.493114605753632, lng: -122.90483587569986 },
            { lat: 45.493112567261534, lng: -122.90489854218106 },
            { lat: 45.492836604604044, lng: -122.90488445870946 }];
        var Lot132281shape = new google.maps.Polygon({
            paths: [Lot132281coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132281shape.setMap(map);

        var Lot132283center = new google.maps.LatLng(45.4929658990062, -122.905183719417);
        var markerLot132283 = new google.maps.Marker({
            position: Lot132283center,
            map: map,
            title: 'Lot132283'
        });
        markers.push(markerLot132283);
        var Lot132283coords0 = [
            { lat: 45.492825021893104, lng: -122.90527408306313 },
            { lat: 45.492830813413761, lng: -122.90507927090616 },
            { lat: 45.493106776047817, lng: -122.90509335532246 },
            { lat: 45.493100984503691, lng: -122.90528816842415 },
            { lat: 45.492825021893104, lng: -122.90527408306313 }];
        var Lot132283shape = new google.maps.Polygon({
            paths: [Lot132283coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132283shape.setMap(map);

        var Lot132282center = new google.maps.LatLng(45.4929716903734, -122.904988906768);
        var markerLot132282 = new google.maps.Marker({
            position: Lot132282center,
            map: map,
            title: 'Lot132282'
        });
        markers.push(markerLot132282);
        var Lot132282coords0 = [
            { lat: 45.492830813413761, lng: -122.90507927090616 },
            { lat: 45.492836604604044, lng: -122.90488445870946 },
            { lat: 45.493112567261534, lng: -122.90489854218106 },
            { lat: 45.493106776047817, lng: -122.90509335532246 },
            { lat: 45.492830813413761, lng: -122.90507927090616 }];
        var Lot132282shape = new google.maps.Polygon({
            paths: [Lot132282coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132282shape.setMap(map);

        var Lot132285center = new google.maps.LatLng(45.4929540256706, -122.905583085223);
        var markerLot132285 = new google.maps.Marker({
            position: Lot132285center,
            map: map,
            title: 'Lot132285'
        });
        markers.push(markerLot132285);
        var Lot132285coords0 = [
            { lat: 45.492812858624241, lng: -122.90568318846353 },
            { lat: 45.492819230042016, lng: -122.90546889518041 },
            { lat: 45.49309519262917, lng: -122.9054829814861 },
            { lat: 45.4930888211856, lng: -122.90569727580838 },
            { lat: 45.492812858624241, lng: -122.90568318846353 }];
        var Lot132285shape = new google.maps.Polygon({
            paths: [Lot132285coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132285shape.setMap(map);

        var Lot132286center = new google.maps.LatLng(45.4930521921612, -122.905879234501);
        var markerLot132286 = new google.maps.Marker({
            position: Lot132286center,
            map: map,
            title: 'Lot132286'
        });
        markers.push(markerLot132286);
        var Lot132286coords0 = [
            { lat: 45.492806486806678, lng: -122.90589748169859 },
            { lat: 45.492812858624241, lng: -122.90568318846353 },
            { lat: 45.4930888211856, lng: -122.90569727580838 },
            { lat: 45.493082916190872, lng: -122.90589586475454 },
            { lat: 45.493080580358722, lng: -122.90591147466721 },
            { lat: 45.492806486806678, lng: -122.90589748169859 }];
        var Lot132286shape = new google.maps.Polygon({
            paths: [Lot132286coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132286shape.setMap(map);

        var Lot132287center = new google.maps.LatLng(45.493067765389, -122.906205155196);
        var markerLot132287 = new google.maps.Marker({
            position: Lot132287center,
            map: map,
            title: 'Lot132287'
        });
        markers.push(markerLot132287);
        var Lot132287coords0 = [
            { lat: 45.492847374689831, lng: -122.90629276148543 },
            { lat: 45.492869227091738, lng: -122.9061200499291 },
            { lat: 45.493112169997232, lng: -122.90618219057238 },
            { lat: 45.493121044913913, lng: -122.90619015210187 },
            { lat: 45.49309988995293, lng: -122.90635735135248 },
            { lat: 45.492847374689831, lng: -122.90629276148543 }];
        var Lot132287shape = new google.maps.Polygon({
            paths: [Lot132287coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132287shape.setMap(map);

        var Lot132297center = new google.maps.LatLng(45.4933725656944, -122.906541921128);
        var markerLot132297 = new google.maps.Marker({
            position: Lot132297center,
            map: map,
            title: 'Lot132297'
        });
        markers.push(markerLot132297);
        var Lot132297coords0 = [
            { lat: 45.493256124020263, lng: -122.90665121652435 },
            { lat: 45.493386481786857, lng: -122.90633677794567 },
            { lat: 45.493445329619405, lng: -122.9063891095405 },
            { lat: 45.493498282804062, lng: -122.90644169293324 },
            { lat: 45.493349461456923, lng: -122.90672941678508 },
            { lat: 45.493305432560355, lng: -122.90668969263365 },
            { lat: 45.493256124020263, lng: -122.90665121652435 }];
        var Lot132297shape = new google.maps.Polygon({
            paths: [Lot132297coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132297shape.setMap(map);

        var Lot132298center = new google.maps.LatLng(45.4932031933122, -122.906431264268);
        var markerLot132298 = new google.maps.Marker({
            position: Lot132298center,
            map: map,
            title: 'Lot132298'
        });
        markers.push(markerLot132298);
        var Lot132298coords0 = [
            { lat: 45.493137377561567, lng: -122.90653070510611 },
            { lat: 45.493176445748126, lng: -122.90621481439253 },
            { lat: 45.493207263076442, lng: -122.90621423969726 },
            { lat: 45.493218202697868, lng: -122.90621781215519 },
            { lat: 45.493262375468305, lng: -122.90624499225594 },
            { lat: 45.493306101639114, lng: -122.9062746414354 },
            { lat: 45.493386481786857, lng: -122.90633677794567 },
            { lat: 45.493256124020263, lng: -122.90665121652435 },
            { lat: 45.493214362299192, lng: -122.90662312447634 },
            { lat: 45.493167522599471, lng: -122.90659597957497 },
            { lat: 45.493158392241064, lng: -122.9065885141426 },
            { lat: 45.49314984164927, lng: -122.90657740804406 },
            { lat: 45.493142800533882, lng: -122.90656250172658 },
            { lat: 45.493138804576624, lng: -122.9065470462893 },
            { lat: 45.493137377561567, lng: -122.90653070510611 }];
        var Lot132298shape = new google.maps.Polygon({
            paths: [Lot132298coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132298shape.setMap(map);

        var Lot132295center = new google.maps.LatLng(45.4935607336725, -122.90675563001);
        var markerLot132295 = new google.maps.Marker({
            position: Lot132295center,
            map: map,
            title: 'Lot132295'
        });
        markers.push(markerLot132295);
        var Lot132295coords0 = [
            { lat: 45.493435079469627, lng: -122.90682379926331 },
            { lat: 45.493601747198653, lng: -122.90656180400428 },
            { lat: 45.493651622783638, lng: -122.90662939309688 },
            { lat: 45.493696066316978, lng: -122.90669603095785 },
            { lat: 45.493511598457509, lng: -122.90693284320118 },
            { lat: 45.4934760043576, lng: -122.9068786605507 },
            { lat: 45.493435079469627, lng: -122.90682379926331 }];
        var Lot132295shape = new google.maps.Polygon({
            paths: [Lot132295coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132295shape.setMap(map);

        var Lot132294center = new google.maps.LatLng(45.4936940706907, -122.90690289338);
        var markerLot132294 = new google.maps.Marker({
            position: Lot132294center,
            map: map,
            title: 'Lot132294'
        });
        markers.push(markerLot132294);
        var Lot132294coords0 = [
            { lat: 45.493511598457509, lng: -122.90693284320118 },
            { lat: 45.493696066316978, lng: -122.90669603095785 },
            { lat: 45.493763876805218, lng: -122.90680614708951 },
            { lat: 45.493770528219322, lng: -122.90682375864239 },
            { lat: 45.493772053463609, lng: -122.90683737806668 },
            { lat: 45.49377094078357, lng: -122.9068510780273 },
            { lat: 45.493767272519392, lng: -122.90686384470369 },
            { lat: 45.49376132012889, lng: -122.90687473334023 },
            { lat: 45.49367839715611, lng: -122.90697449443807 },
            { lat: 45.493586880891669, lng: -122.90707435636028 },
            { lat: 45.493549932453895, lng: -122.90699952368635 },
            { lat: 45.493511598457509, lng: -122.90693284320118 }];
        var Lot132294shape = new google.maps.Polygon({
            paths: [Lot132294coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132294shape.setMap(map);

        var Lot132306center = new google.maps.LatLng(45.4934230676041, -122.905492910335);
        var markerLot132306 = new google.maps.Marker({
            position: Lot132306center,
            map: map,
            title: 'Lot132306'
        });
        markers.push(markerLot132306);
        var Lot132306coords0 = [
            { lat: 45.493321634936308, lng: -122.90556620681645 },
            { lat: 45.493483877807442, lng: -122.90535617548974 },
            { lat: 45.493524500223891, lng: -122.90541961359008 },
            { lat: 45.493362257238587, lng: -122.90562964488582 },
            { lat: 45.493321634936308, lng: -122.90556620681645 }];
        var Lot132306shape = new google.maps.Polygon({
            paths: [Lot132306coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132306shape.setMap(map);

        var Lot132307center = new google.maps.LatLng(45.4933778290455, -122.905422263433);
        var markerLot132307 = new google.maps.Marker({
            position: Lot132307center,
            map: map,
            title: 'Lot132307'
        });
        markers.push(markerLot132307);
        var Lot132307coords0 = [
            { lat: 45.493271780244108, lng: -122.905488351128 },
            { lat: 45.4934340229751, lng: -122.9052783197633 },
            { lat: 45.493483877807442, lng: -122.90535617548974 },
            { lat: 45.493321634936308, lng: -122.90556620681645 },
            { lat: 45.493271780244108, lng: -122.905488351128 }];
        var Lot132307shape = new google.maps.Polygon({
            paths: [Lot132307coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132307shape.setMap(map);

        var Lot132304center = new google.maps.LatLng(45.4935043122518, -122.905619786686);
        var markerLot132304 = new google.maps.Marker({
            position: Lot132304center,
            map: map,
            title: 'Lot132304'
        });
        markers.push(markerLot132304);
        var Lot132304coords0 = [
            { lat: 45.493402879505368, lng: -122.90569308304586 },
            { lat: 45.493565122604863, lng: -122.90548305178115 },
            { lat: 45.493605744950337, lng: -122.90554649006287 },
            { lat: 45.493443501736678, lng: -122.90575652129665 },
            { lat: 45.493402879505368, lng: -122.90569308304586 }];
        var Lot132304shape = new google.maps.Polygon({
            paths: [Lot132304coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132304shape.setMap(map);

        var Lot132303center = new google.maps.LatLng(45.4936167660759, -122.90561097252);
        var markerLot132303 = new google.maps.Marker({
            position: Lot132303center,
            map: map,
            title: 'Lot132303'
        });
        markers.push(markerLot132303);
        var Lot132303coords0 = [
            { lat: 45.493443501736678, lng: -122.90575652129665 },
            { lat: 45.493605744950337, lng: -122.90554649006287 },
            { lat: 45.493632373724566, lng: -122.9055873586299 },
            { lat: 45.493658125765471, lng: -122.90562107601167 },
            { lat: 45.49349335624477, lng: -122.90583437745566 },
            { lat: 45.493443501736678, lng: -122.90575652129665 }];
        var Lot132303shape = new google.maps.Polygon({
            paths: [Lot132303coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132303shape.setMap(map);

        var Lot132312center = new google.maps.LatLng(45.4936834202889, -122.905137103059);
        var markerLot132312 = new google.maps.Marker({
            position: Lot132312center,
            map: map,
            title: 'Lot132312'
        });
        markers.push(markerLot132312);
        var Lot132312coords0 = [
            { lat: 45.493530110389628, lng: -122.90527777016005 },
            { lat: 45.493696517628663, lng: -122.90506234548536 },
            { lat: 45.493737118715195, lng: -122.90512581143308 },
            { lat: 45.493570732848859, lng: -122.90534120825596 },
            { lat: 45.493530110389628, lng: -122.90527777016005 }];
        var Lot132312shape = new google.maps.Polygon({
            paths: [Lot132312coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132312shape.setMap(map);

        var Lot132311center = new google.maps.LatLng(45.4935210745545, -122.905163341238);
        var markerLot132311 = new google.maps.Marker({
            position: Lot132311center,
            map: map,
            title: 'Lot132311'
        });
        markers.push(markerLot132311);
        var Lot132311coords0 = [
            { lat: 45.4934919616224, lng: -122.90519024214088 },
            { lat: 45.493492851615471, lng: -122.9051768191313 },
            { lat: 45.493495482625633, lng: -122.90516386597437 },
            { lat: 45.493499762764522, lng: -122.90515183506089 },
            { lat: 45.493505542547659, lng: -122.90514114657242 },
            { lat: 45.493638863956491, lng: -122.90496821588475 },
            { lat: 45.493696517628663, lng: -122.90506234548536 },
            { lat: 45.493530110389628, lng: -122.90527777016005 },
            { lat: 45.493499740198715, lng: -122.90522865847255 },
            { lat: 45.493494090686511, lng: -122.90521095142086 },
            { lat: 45.4934919616224, lng: -122.90519024214088 }];
        var Lot132311shape = new google.maps.Polygon({
            paths: [Lot132311coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132311shape.setMap(map);

        var Lot132314center = new google.maps.LatLng(45.4937754245718, -122.905260925873);
        var markerLot132314 = new google.maps.Marker({
            position: Lot132314center,
            map: map,
            title: 'Lot132314'
        });
        markers.push(markerLot132314);
        var Lot132314coords0 = [
            { lat: 45.49361135527262, lng: -122.90540464644258 },
            { lat: 45.493778505318723, lng: -122.90518826052163 },
            { lat: 45.493830372671759, lng: -122.90526351137498 },
            { lat: 45.493661210016889, lng: -122.90548250252284 },
            { lat: 45.49361135527262, lng: -122.90540464644258 }];
        var Lot132314shape = new google.maps.Polygon({
            paths: [Lot132314coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132314shape.setMap(map);

        var Lot132316center = new google.maps.LatLng(45.4938994320061, -122.905446466595);
        var markerLot132316 = new google.maps.Marker({
            position: Lot132316center,
            map: map,
            title: 'Lot132316'
        });
        markers.push(markerLot132316);
        var Lot132316coords0 = [
            { lat: 45.49375730127538, lng: -122.905610435937 },
            { lat: 45.49390727448975, lng: -122.90536933989043 },
            { lat: 45.493951652800909, lng: -122.90542749585178 },
            { lat: 45.493802498628696, lng: -122.90566727505919 },
            { lat: 45.49375730127538, lng: -122.905610435937 }];
        var Lot132316shape = new google.maps.Polygon({
            paths: [Lot132316coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132316shape.setMap(map);

        var Lot132315center = new google.maps.LatLng(45.4938543515146, -122.905372131649);
        var markerLot132315 = new google.maps.Marker({
            position: Lot132315center,
            map: map,
            title: 'Lot132315'
        });
        markers.push(markerLot132315);
        var Lot132315coords0 = [
            { lat: 45.493701831757122, lng: -122.90554067895613 },
            { lat: 45.493853773383776, lng: -122.90529641830489 },
            { lat: 45.49390727448975, lng: -122.90536933989043 },
            { lat: 45.49375730127538, lng: -122.905610435937 },
            { lat: 45.493701831757122, lng: -122.90554067895613 }];
        var Lot132315shape = new google.maps.Polygon({
            paths: [Lot132315coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132315shape.setMap(map);

        var Lot132319center = new google.maps.LatLng(45.4939834247245, -122.905749764825);
        var markerLot132319 = new google.maps.Marker({
            position: Lot132319center,
            map: map,
            title: 'Lot132319'
        });
        markers.push(markerLot132319);
        var Lot132319coords0 = [
            { lat: 45.493892893249232, lng: -122.90578095357479 },
            { lat: 45.494042520943481, lng: -122.90554041342675 },
            { lat: 45.494099675528311, lng: -122.90560746190968 },
            { lat: 45.493950531623149, lng: -122.90584722417005 },
            { lat: 45.493936540779636, lng: -122.90583576075264 },
            { lat: 45.493892893249232, lng: -122.90578095357479 }];
        var Lot132319shape = new google.maps.Polygon({
            paths: [Lot132319coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132319shape.setMap(map);

        var Lot132250center = new google.maps.LatLng(45.4927733791994, -122.902726530102);
        var markerLot132250 = new google.maps.Marker({
            position: Lot132250center,
            map: map,
            title: 'Lot132250'
        });
        markers.push(markerLot132250);
        var Lot132250coords0 = [
            { lat: 45.49268180931967, lng: -122.90272417436124 },
            { lat: 45.4928928303705, lng: -122.90265631504589 },
            { lat: 45.492906480528333, lng: -122.90275987537072 },
            { lat: 45.492696678572379, lng: -122.90282734227037 },
            { lat: 45.492683301499305, lng: -122.90274320927782 },
            { lat: 45.49268180931967, lng: -122.90272417436124 }];
        var Lot132250shape = new google.maps.Polygon({
            paths: [Lot132250coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132250shape.setMap(map);

        var Lot132252center = new google.maps.LatLng(45.4928788426691, -122.902909623652);
        var markerLot132252 = new google.maps.Marker({
            position: Lot132252center,
            map: map,
            title: 'Lot132252'
        });
        markers.push(markerLot132252);
        var Lot132252coords0 = [
            { lat: 45.492709989255658, lng: -122.9029110207524 },
            { lat: 45.492906037283142, lng: -122.90284797706576 },
            { lat: 45.492905241147753, lng: -122.9028654667124 },
            { lat: 45.492919209005876, lng: -122.90295169125643 },
            { lat: 45.492726325010828, lng: -122.90301371712482 },
            { lat: 45.492709989255658, lng: -122.9029110207524 }];
        var Lot132252shape = new google.maps.Polygon({
            paths: [Lot132252coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132252shape.setMap(map);

        var Lot132254center = new google.maps.LatLng(45.4929166080683, -122.903164314822);
        var markerLot132254 = new google.maps.Marker({
            position: Lot132254center,
            map: map,
            title: 'Lot132254'
        });
        markers.push(markerLot132254);
        var Lot132254coords0 = [
            { lat: 45.492751736002923, lng: -122.90317346715487 },
            { lat: 45.492947974126508, lng: -122.90311036324397 },
            { lat: 45.492964552542389, lng: -122.90319299129838 },
            { lat: 45.492765046433853, lng: -122.90325714579906 },
            { lat: 45.492751736002923, lng: -122.90317346715487 }];
        var Lot132254shape = new google.maps.Polygon({
            paths: [Lot132254coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132254shape.setMap(map);

        var Lot132253center = new google.maps.LatLng(45.4929055929524, -122.903068104229);
        var markerLot132253 = new google.maps.Marker({
            position: Lot132253center,
            map: map,
            title: 'Lot132253'
        });
        markers.push(markerLot132253);
        var Lot132253coords0 = [
            { lat: 45.492735400390679, lng: -122.90307077069058 },
            { lat: 45.492929048279862, lng: -122.90300849936952 },
            { lat: 45.492947974126508, lng: -122.90311036324397 },
            { lat: 45.492751736002923, lng: -122.90317346715487 },
            { lat: 45.492735400390679, lng: -122.90307077069058 }];
        var Lot132253shape = new google.maps.Polygon({
            paths: [Lot132253coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132253shape.setMap(map);

        var Lot132256center = new google.maps.LatLng(45.4929501392145, -122.903329522152);
        var markerLot132256 = new google.maps.Marker({
            position: Lot132256center,
            map: map,
            title: 'Lot132256'
        });
        markers.push(markerLot132256);
        var Lot132256coords0 = [
            { lat: 45.492778356803768, lng: -122.90334082448246 },
            { lat: 45.492982173447352, lng: -122.90327528415244 },
            { lat: 45.493000840894695, lng: -122.90335724050725 },
            { lat: 45.492791667112705, lng: -122.90342450320506 },
            { lat: 45.492778356803768, lng: -122.90334082448246 }];
        var Lot132256shape = new google.maps.Polygon({
            paths: [Lot132256coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132256shape.setMap(map);

        var Lot132257center = new google.maps.LatLng(45.4929770080401, -122.903417184034);
        var markerLot132257 = new google.maps.Marker({
            position: Lot132257center,
            map: map,
            title: 'Lot132257'
        });
        markers.push(markerLot132257);
        var Lot132257coords0 = [
            { lat: 45.492791667112705, lng: -122.90342450320506 },
            { lat: 45.493000840894695, lng: -122.90335724050725 },
            { lat: 45.493025188826032, lng: -122.90345736098412 },
            { lat: 45.492808002408459, lng: -122.90352719987271 },
            { lat: 45.492791667112705, lng: -122.90342450320506 }];
        var Lot132257shape = new google.maps.Polygon({
            paths: [Lot132257coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132257shape.setMap(map);

        var Lot132259center = new google.maps.LatLng(45.4930354197136, -122.903676007709);
        var markerLot132259 = new google.maps.Marker({
            position: Lot132259center,
            map: map,
            title: 'Lot132259'
        });
        markers.push(markerLot132259);
        var Lot132259coords0 = [
            { lat: 45.492856711788555, lng: -122.90373943368957 },
            { lat: 45.49306585290681, lng: -122.90361069578546 },
            { lat: 45.493088586545753, lng: -122.90369018941445 },
            { lat: 45.492880684346588, lng: -122.90381816440515 },
            { lat: 45.492856711788555, lng: -122.90373943368957 }];
        var Lot132259shape = new google.maps.Polygon({
            paths: [Lot132259coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132259shape.setMap(map);

        var Lot132258center = new google.maps.LatLng(45.4929231933844, -122.90362829704);
        var markerLot132258 = new google.maps.Marker({
            position: Lot132258center,
            map: map,
            title: 'Lot132258'
        });
        markers.push(markerLot132258);
        var Lot132258coords0 = [
            { lat: 45.492828795447089, lng: -122.90364188355761 },
            { lat: 45.493039286933325, lng: -122.90351231405965 },
            { lat: 45.49306585290681, lng: -122.90361069578546 },
            { lat: 45.492856711788555, lng: -122.90373943368957 },
            { lat: 45.492838881896134, lng: -122.90368046769646 },
            { lat: 45.492828795447089, lng: -122.90364188355761 }];
        var Lot132258shape = new google.maps.Polygon({
            paths: [Lot132258coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132258shape.setMap(map);

        var Lot132261center = new google.maps.LatLng(45.4930829387247, -122.903833730522);
        var markerLot132261 = new google.maps.Marker({
            position: Lot132261center,
            map: map,
            title: 'Lot132261'
        });
        markers.push(markerLot132261);
        var Lot132261coords0 = [
            { lat: 45.4929046568505, lng: -122.90389689518719 },
            { lat: 45.493112295231462, lng: -122.90376908287828 },
            { lat: 45.493136978719633, lng: -122.90384737633141 },
            { lat: 45.49292862930028, lng: -122.90397562603563 },
            { lat: 45.4929046568505, lng: -122.90389689518719 }];
        var Lot132261shape = new google.maps.Polygon({
            paths: [Lot132261coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132261shape.setMap(map);

        var Lot132262center = new google.maps.LatLng(45.4931172346483, -122.90391485917);
        var markerLot132262 = new google.maps.Marker({
            position: Lot132262center,
            map: map,
            title: 'Lot132262'
        });
        markers.push(markerLot132262);
        var Lot132262coords0 = [
            { lat: 45.49292862930028, lng: -122.90397562603563 },
            { lat: 45.493136978719633, lng: -122.90384737633141 },
            { lat: 45.493168605439038, lng: -122.90394264305452 },
            { lat: 45.492958049960144, lng: -122.90407225034956 },
            { lat: 45.49292862930028, lng: -122.90397562603563 }];
        var Lot132262shape = new google.maps.Polygon({
            paths: [Lot132262coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132262shape.setMap(map);

        var Lot132263center = new google.maps.LatLng(45.4931697664326, -122.904066372648);
        var markerLot132263 = new google.maps.Marker({
            position: Lot132263center,
            map: map,
            title: 'Lot132263'
        });
        markers.push(markerLot132263);
        var Lot132263coords0 = [
            { lat: 45.492986253817577, lng: -122.90415200849488 },
            { lat: 45.493186789419219, lng: -122.90399511403058 },
            { lat: 45.493220646007366, lng: -122.90408880416506 },
            { lat: 45.493022027157707, lng: -122.90424419871188 },
            { lat: 45.492986253817577, lng: -122.90415200849488 }];
        var Lot132263shape = new google.maps.Polygon({
            paths: [Lot132263coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132263shape.setMap(map);

        var Lot132265center = new google.maps.LatLng(45.4932242814889, -122.904232668841);
        var markerLot132265 = new google.maps.Marker({
            position: Lot132265center,
            map: map,
            title: 'Lot132265'
        });
        markers.push(markerLot132265);
        var Lot132265coords0 = [
            { lat: 45.493051175742458, lng: -122.90431931673213 },
            { lat: 45.493249269810342, lng: -122.90416433302386 },
            { lat: 45.493278824237962, lng: -122.90423913382121 },
            { lat: 45.49308032427782, lng: -122.90439443482947 },
            { lat: 45.493051175742458, lng: -122.90431931673213 }];
        var Lot132265shape = new google.maps.Polygon({
            paths: [Lot132265coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132265shape.setMap(map);

        var Lot132266center = new google.maps.LatLng(45.4932522662387, -122.904322647734);
        var markerLot132266 = new google.maps.Marker({
            position: Lot132266center,
            map: map,
            title: 'Lot132266'
        });
        markers.push(markerLot132266);
        var Lot132266coords0 = [
            { lat: 45.49308032427782, lng: -122.90439443482947 },
            { lat: 45.493278824237962, lng: -122.90423913382121 },
            { lat: 45.493316368209683, lng: -122.90432993918139 },
            { lat: 45.49311609741288, lng: -122.904486625327 },
            { lat: 45.49308032427782, lng: -122.90439443482947 }];
        var Lot132266shape = new google.maps.Polygon({
            paths: [Lot132266coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132266shape.setMap(map);

        var Lot132248center = new google.maps.LatLng(45.4927100023171, -122.902352880817);
        var markerLot132248 = new google.maps.Marker({
            position: Lot132248center,
            map: map,
            title: 'Lot132248'
        });
        markers.push(markerLot132248);
        var Lot132248coords0 = [
            { lat: 45.492654226741649, lng: -122.90218892472619 },
            { lat: 45.492721691723183, lng: -122.90217151274065 },
            { lat: 45.492765777657482, lng: -122.90251683723162 },
            { lat: 45.492698312624427, lng: -122.90253424882069 },
            { lat: 45.492654226741649, lng: -122.90218892472619 }];
        var Lot132248shape = new google.maps.Polygon({
            paths: [Lot132248coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132248shape.setMap(map);

        var Lot132249center = new google.maps.LatLng(45.4927842138227, -122.902333727826);
        var markerLot132249 = new google.maps.Marker({
            position: Lot132249center,
            map: map,
            title: 'Lot132249'
        });
        markers.push(markerLot132249);
        var Lot132249coords0 = [
            { lat: 45.492721691723183, lng: -122.90217151274065 },
            { lat: 45.492802649695889, lng: -122.90215061830341 },
            { lat: 45.492846735692027, lng: -122.90249594327018 },
            { lat: 45.492765777657482, lng: -122.90251683723162 },
            { lat: 45.492721691723183, lng: -122.90217151274065 }];
        var Lot132249shape = new google.maps.Polygon({
            paths: [Lot132249coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132249shape.setMap(map);

        var Lot132246center = new google.maps.LatLng(45.4925683257931, -122.90238944548);
        var markerLot132246 = new google.maps.Marker({
            position: Lot132246center,
            map: map,
            title: 'Lot132246'
        });
        markers.push(markerLot132246);
        var Lot132246coords0 = [
            { lat: 45.49250580376858, lng: -122.90222723094884 },
            { lat: 45.492586761756222, lng: -122.9022063366704 },
            { lat: 45.492630847587471, lng: -122.90255166036836 },
            { lat: 45.492549889538004, lng: -122.90257255417104 },
            { lat: 45.49250580376858, lng: -122.90222723094884 }];
        var Lot132246shape = new google.maps.Polygon({
            paths: [Lot132246coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132246shape.setMap(map);

        var Lot132267center = new google.maps.LatLng(45.4925810253834, -122.902701274164);
        var markerLot132267 = new google.maps.Marker({
            position: Lot132267center,
            map: map,
            title: 'Lot132267'
        });
        markers.push(markerLot132267);
        var Lot132267coords0 = [
            { lat: 45.492412161182159, lng: -122.90273575933307 },
            { lat: 45.492597578575605, lng: -122.90267613389551 },
            { lat: 45.492602201982535, lng: -122.90269309936959 },
            { lat: 45.49261575626501, lng: -122.90277823774784 },
            { lat: 45.492428497095368, lng: -122.90283845511685 },
            { lat: 45.492412161182159, lng: -122.90273575933307 }];
        var Lot132267shape = new google.maps.Polygon({
            paths: [Lot132267coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132267shape.setMap(map);

        var Lot132269center = new google.maps.LatLng(45.4925557058272, -122.903019443887);
        var markerLot132269 = new google.maps.Marker({
            position: Lot132269center,
            map: map,
            title: 'Lot132269'
        });
        markers.push(markerLot132269);
        var Lot132269coords0 = [
            { lat: 45.49245390833326, lng: -122.90299820423118 },
            { lat: 45.492641167585354, lng: -122.90293798736172 },
            { lat: 45.492657503316742, lng: -122.90304068361753 },
            { lat: 45.492470244011663, lng: -122.90310090016588 },
            { lat: 45.49245390833326, lng: -122.90299820423118 }];
        var Lot132269shape = new google.maps.Polygon({
            paths: [Lot132269coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132269shape.setMap(map);

        var Lot132271center = new google.maps.LatLng(45.4925974523286, -122.903281889656);
        var markerLot132271 = new google.maps.Marker({
            position: Lot132271center,
            map: map,
            title: 'Lot132271'
        });
        markers.push(markerLot132271);
        var Lot132271coords0 = [
            { lat: 45.492495654884294, lng: -122.90326064951495 },
            { lat: 45.492682914271811, lng: -122.90320043346617 },
            { lat: 45.492699249768378, lng: -122.90330312987285 },
            { lat: 45.492511990327877, lng: -122.90336334560052 },
            { lat: 45.492495654884294, lng: -122.90326064951495 }];
        var Lot132271shape = new google.maps.Polygon({
            paths: [Lot132271coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132271shape.setMap(map);

        var Lot132273center = new google.maps.LatLng(45.4926391982298, -122.903544335811);
        var markerLot132273 = new google.maps.Marker({
            position: Lot132273center,
            map: map,
            title: 'Lot132273'
        });
        markers.push(markerLot132273);
        var Lot132273coords0 = [
            { lat: 45.492537400835225, lng: -122.90352309518434 },
            { lat: 45.492724660358171, lng: -122.90346287995619 },
            { lat: 45.492740995619911, lng: -122.9035655765138 },
            { lat: 45.492553736043959, lng: -122.90362579142081 },
            { lat: 45.492537400835225, lng: -122.90352309518434 }];
        var Lot132273shape = new google.maps.Polygon({
            paths: [Lot132273coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132273shape.setMap(map);

        var Lot132275center = new google.maps.LatLng(45.4927328845196, -122.903784204517);
        var markerLot132275 = new google.maps.Marker({
            position: Lot132275center,
            map: map,
            title: 'Lot132275'
        });
        markers.push(markerLot132275);
        var Lot132275coords0 = [
            { lat: 45.492597645668162, lng: -122.90383089387909 },
            { lat: 45.492773902590031, lng: -122.90372239892157 },
            { lat: 45.492803252902782, lng: -122.90381906627536 },
            { lat: 45.492627066452414, lng: -122.90392751755525 },
            { lat: 45.492597645668162, lng: -122.90383089387909 }];
        var Lot132275shape = new google.maps.Polygon({
            paths: [Lot132275coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132275shape.setMap(map);

        var Lot132277center = new google.maps.LatLng(45.4927756355833, -122.904071907899);
        var markerLot132277 = new google.maps.Marker({
            position: Lot132277center,
            map: map,
            title: 'Lot132277'
        });
        markers.push(markerLot132277);
        var Lot132277coords0 = [
            { lat: 45.49267283195487, lng: -122.90407782125031 },
            { lat: 45.492849018544867, lng: -122.90396937034916 },
            { lat: 45.492878439210642, lng: -122.90406599452444 },
            { lat: 45.492702252530826, lng: -122.90417444518216 },
            { lat: 45.49267283195487, lng: -122.90407782125031 }];
        var Lot132277shape = new google.maps.Polygon({
            paths: [Lot132277coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132277shape.setMap(map);

        var Lot132279center = new google.maps.LatLng(45.4928623284339, -122.904325275321);
        var markerLot132279 = new google.maps.Marker({
            position: Lot132279center,
            map: map,
            title: 'Lot132279'
        });
        markers.push(markerLot132279);
        var Lot132279coords0 = [
            { lat: 45.492760375584275, lng: -122.90434495102474 },
            { lat: 45.492928581075077, lng: -122.90421335223428 },
            { lat: 45.492964281279207, lng: -122.90430559954544 },
            { lat: 45.492796075684389, lng: -122.9044371981455 },
            { lat: 45.492760375584275, lng: -122.90434495102474 }];
        var Lot132279shape = new google.maps.Polygon({
            paths: [Lot132279coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132279shape.setMap(map);

        var Lot132308center = new google.maps.LatLng(45.4934204560722, -122.905107155023);
        var markerLot132308 = new google.maps.Marker({
            position: Lot132308center,
            map: map,
            title: 'Lot132308'
        });
        markers.push(markerLot132308);
        var Lot132308coords0 = [
            { lat: 45.493291668930652, lng: -122.90493775526672 },
            { lat: 45.493346425556034, lng: -122.90486686925983 },
            { lat: 45.493475679440778, lng: -122.90506871647447 },
            { lat: 45.493433737381579, lng: -122.90512289184441 },
            { lat: 45.493418181138196, lng: -122.9051353211255 },
            { lat: 45.493291668930652, lng: -122.90493775526672 }];
        var Lot132308shape = new google.maps.Polygon({
            paths: [Lot132308coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132308shape.setMap(map);

        var Lot132310center = new google.maps.LatLng(45.4934830473778, -122.904874590593);
        var markerLot132310 = new google.maps.Marker({
            position: Lot132310center,
            map: map,
            title: 'Lot132310'
        });
        markers.push(markerLot132310);
        var Lot132310coords0 = [
            { lat: 45.49339104203267, lng: -122.90480911019024 },
            { lat: 45.493445798577184, lng: -122.90473822393537 },
            { lat: 45.493575052684456, lng: -122.90494007121039 },
            { lat: 45.493520296017316, lng: -122.90501095743197 },
            { lat: 45.49339104203267, lng: -122.90480911019024 }];
        var Lot132310shape = new google.maps.Polygon({
            paths: [Lot132310coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132310shape.setMap(map);

        var Lot132301center = new google.maps.LatLng(45.4936883237581, -122.905893330546);
        var markerLot132301 = new google.maps.Marker({
            position: Lot132301center,
            map: map,
            title: 'Lot132301'
        });
        markers.push(markerLot132301);
        var Lot132301coords0 = [
            { lat: 45.493580875280244, lng: -122.90599248373417 },
            { lat: 45.493744411589184, lng: -122.90572958696833 },
            { lat: 45.4937957721489, lng: -122.90579417697992 },
            { lat: 45.493632235694442, lng: -122.90605707379751 },
            { lat: 45.493580875280244, lng: -122.90599248373417 }];
        var Lot132301shape = new google.maps.Polygon({
            paths: [Lot132301coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132301shape.setMap(map);

        var Lot132302center = new google.maps.LatLng(45.4936318272, -122.905822281575);
        var markerLot132302 = new google.maps.Marker({
            position: Lot132302center,
            map: map,
            title: 'Lot132302'
        });
        markers.push(markerLot132302);
        var Lot132302coords0 = [
            { lat: 45.4935192427343, lng: -122.90591497581228 },
            { lat: 45.493682778868624, lng: -122.90565207910853 },
            { lat: 45.493744411589184, lng: -122.90572958696833 },
            { lat: 45.493580875280244, lng: -122.90599248373417 },
            { lat: 45.4935192427343, lng: -122.90591497581228 }];
        var Lot132302shape = new google.maps.Polygon({
            paths: [Lot132302coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132302shape.setMap(map);

        var Lot132299center = new google.maps.LatLng(45.4938805776517, -122.905948989458);
        var markerLot132299 = new google.maps.Marker({
            position: Lot132299center,
            map: map,
            title: 'Lot132299'
        });
        markers.push(markerLot132299);
        var Lot132299coords0 = [
            { lat: 45.493683596071619, lng: -122.90612166397766 },
            { lat: 45.493847132671561, lng: -122.90585876710831 },
            { lat: 45.493897886317633, lng: -122.90592261886991 },
            { lat: 45.4939071240593, lng: -122.90593891375885 },
            { lat: 45.493745228475312, lng: -122.9061991723479 },
            { lat: 45.493683596071619, lng: -122.90612166397766 }];
        var Lot132299shape = new google.maps.Polygon({
            paths: [Lot132299coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132299shape.setMap(map);

        var Lot132326center = new google.maps.LatLng(45.4941883457516, -122.905869793916);
        var markerLot132326 = new google.maps.Marker({
            position: Lot132326center,
            map: map,
            title: 'Lot132326'
        });
        markers.push(markerLot132326);
        var Lot132326coords0 = [
            { lat: 45.494071075494332, lng: -122.90583762064161 },
            { lat: 45.494118204091961, lng: -122.90573234713975 },
            { lat: 45.494305615998563, lng: -122.90590196732524 },
            { lat: 45.494258487247748, lng: -122.90600724103351 },
            { lat: 45.494071075494332, lng: -122.90583762064161 }];
        var Lot132326shape = new google.maps.Polygon({
            paths: [Lot132326coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132326shape.setMap(map);

        var Lot132324center = new google.maps.LatLng(45.494086934178, -122.906095903654);
        var markerLot132324 = new google.maps.Marker({
            position: Lot132324center,
            map: map,
            title: 'Lot132324'
        });
        markers.push(markerLot132324);
        var Lot132324coords0 = [
            { lat: 45.493976387685287, lng: -122.90604777514245 },
            { lat: 45.494023946799587, lng: -122.90594289396886 },
            { lat: 45.494211358399852, lng: -122.90611251456714 },
            { lat: 45.494161152126729, lng: -122.90622316864653 },
            { lat: 45.493976387685287, lng: -122.90604777514245 }];
        var Lot132324shape = new google.maps.Polygon({
            paths: [Lot132324coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132324shape.setMap(map);

        var Lot132325center = new google.maps.LatLng(45.4941412170289, -122.905975067434);
        var markerLot132325 = new google.maps.Marker({
            position: Lot132325center,
            map: map,
            title: 'Lot132325'
        });
        markers.push(markerLot132325);
        var Lot132325coords0 = [
            { lat: 45.494023946799587, lng: -122.90594289396886 },
            { lat: 45.494071075494332, lng: -122.90583762064161 },
            { lat: 45.494258487247748, lng: -122.90600724103351 },
            { lat: 45.494211358399852, lng: -122.90611251456714 },
            { lat: 45.494023946799587, lng: -122.90594289396886 }];
        var Lot132325shape = new google.maps.Polygon({
            paths: [Lot132325coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132325shape.setMap(map);

        var Lot132322center = new google.maps.LatLng(45.493992213297, -122.906297193093);
        var markerLot132322 = new google.maps.Marker({
            position: Lot132322center,
            map: map,
            title: 'Lot132322'
        });
        markers.push(markerLot132322);
        var Lot132322coords0 = [
            { lat: 45.493873741466089, lng: -122.90624824646208 },
            { lat: 45.493926496450541, lng: -122.906149493047 },
            { lat: 45.494106099555957, lng: -122.90633540927777 },
            { lat: 45.494047886980951, lng: -122.90644437870689 },
            { lat: 45.493873741466089, lng: -122.90624824646208 }];
        var Lot132322shape = new google.maps.Polygon({
            paths: [Lot132322coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132322shape.setMap(map);

        var Lot132321center = new google.maps.LatLng(45.493935186041, -122.906399618757);
        var markerLot132321 = new google.maps.Marker({
            position: Lot132321center,
            map: map,
            title: 'Lot132321'
        });
        markers.push(markerLot132321);
        var Lot132321coords0 = [
            { lat: 45.493818209754686, lng: -122.90634387249582 },
            { lat: 45.493873741466089, lng: -122.90624824646208 },
            { lat: 45.494047886980951, lng: -122.90644437870689 },
            { lat: 45.493986610427953, lng: -122.90654989719019 },
            { lat: 45.493818209754686, lng: -122.90634387249582 }];
        var Lot132321shape = new google.maps.Polygon({
            paths: [Lot132321coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132321shape.setMap(map);

        var Lot132320center = new google.maps.LatLng(45.4938704456754, -122.906589416386);
        var markerLot132320 = new google.maps.Marker({
            position: Lot132320center,
            map: map,
            title: 'Lot132320'
        });
        markers.push(markerLot132320);
        var Lot132320coords0 = [
            { lat: 45.493748713261454, lng: -122.90645325832435 },
            { lat: 45.493818209754686, lng: -122.90634387249582 },
            { lat: 45.493986610427953, lng: -122.90654989719019 },
            { lat: 45.493922177879448, lng: -122.90665139858824 },
            { lat: 45.49391470617141, lng: -122.90665806874301 },
            { lat: 45.493906311345896, lng: -122.90666192622635 },
            { lat: 45.493898390864828, lng: -122.90666279410766 },
            { lat: 45.49388967948147, lng: -122.90666081102682 },
            { lat: 45.493880820088641, lng: -122.90665519728969 },
            { lat: 45.493873958448752, lng: -122.90664731255575 },
            { lat: 45.4938041515064, lng: -122.90653464892345 },
            { lat: 45.493748713261454, lng: -122.90645325832435 }];
        var Lot132320shape = new google.maps.Polygon({
            paths: [Lot132320coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132320shape.setMap(map);

        var Lot132289center = new google.maps.LatLng(45.4929078265555, -122.906765748654);
        var markerLot132289 = new google.maps.Marker({
            position: Lot132289center,
            map: map,
            title: 'Lot132289'
        });
        markers.push(markerLot132289);
        var Lot132289coords0 = [
            { lat: 45.492834724445721, lng: -122.90660323213604 },
            { lat: 45.49287362710691, lng: -122.90660210492084 },
            { lat: 45.4929153914455, lng: -122.90660390622631 },
            { lat: 45.4929528765647, lng: -122.90660819020599 },
            { lat: 45.492994307065274, lng: -122.90661589681312 },
            { lat: 45.492955444919566, lng: -122.90696643705658 },
            { lat: 45.492901276979751, lng: -122.9069582063667 },
            { lat: 45.492845907544869, lng: -122.90695774335343 },
            { lat: 45.492834724445721, lng: -122.90660323213604 }];
        var Lot132289shape = new google.maps.Polygon({
            paths: [Lot132289coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132289shape.setMap(map);

        var Lot132290center = new google.maps.LatLng(45.4930430964601, -122.906795904637);
        var markerLot132290 = new google.maps.Marker({
            position: Lot132290center,
            map: map,
            title: 'Lot132290'
        });
        markers.push(markerLot132290);
        var Lot132290coords0 = [
            { lat: 45.492955444919566, lng: -122.90696643705658 },
            { lat: 45.492994307065274, lng: -122.90661589681312 },
            { lat: 45.493032583642524, lng: -122.90662584446615 },
            { lat: 45.49307325264148, lng: -122.90663947460421 },
            { lat: 45.493109379820694, lng: -122.90665432165689 },
            { lat: 45.493148891834778, lng: -122.90667364321791 },
            { lat: 45.493061551683667, lng: -122.90700607474302 },
            { lat: 45.4930096327344, lng: -122.90698262103001 },
            { lat: 45.492955444919566, lng: -122.90696643705658 }];
        var Lot132290shape = new google.maps.Polygon({
            paths: [Lot132290coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132290shape.setMap(map);

        var Lot132292center = new google.maps.LatLng(45.4932875646638, -122.906966940925);
        var markerLot132292 = new google.maps.Marker({
            position: Lot132292center,
            map: map,
            title: 'Lot132292'
        });
        markers.push(markerLot132292);
        var Lot132292coords0 = [
            { lat: 45.493159948429522, lng: -122.90707505794572 },
            { lat: 45.493292244152762, lng: -122.90677414271727 },
            { lat: 45.493324724846012, lng: -122.90680460627235 },
            { lat: 45.493358392789304, lng: -122.90683979027182 },
            { lat: 45.49338754644036, lng: -122.90687356541824 },
            { lat: 45.4934185823927, lng: -122.90691334230979 },
            { lat: 45.493246666682531, lng: -122.90717060462102 },
            { lat: 45.4932053524294, lng: -122.90712011820686 },
            { lat: 45.493159948429522, lng: -122.90707505794572 }];
        var Lot132292shape = new google.maps.Polygon({
            paths: [Lot132292coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132292shape.setMap(map);

        var Lot132293center = new google.maps.LatLng(45.4934071974121, -122.907143346392);
        var markerLot132293 = new google.maps.Marker({
            position: Lot132293center,
            map: map,
            title: 'Lot132293'
        });
        markers.push(markerLot132293);
        var Lot132293coords0 = [
            { lat: 45.493246666682531, lng: -122.90717060462102 },
            { lat: 45.4934185823927, lng: -122.90691334230979 },
            { lat: 45.493452838535383, lng: -122.90696254210698 },
            { lat: 45.493483175100167, lng: -122.90701163356142 },
            { lat: 45.493513935434962, lng: -122.90706792842327 },
            { lat: 45.49353989152528, lng: -122.90712185884333 },
            { lat: 45.493433459712918, lng: -122.90722080276484 },
            { lat: 45.493327481790281, lng: -122.90730835650291 },
            { lat: 45.493308607121975, lng: -122.90726993143504 },
            { lat: 45.493289300438853, lng: -122.90723516508795 },
            { lat: 45.493268631216395, lng: -122.90720202021529 },
            { lat: 45.493246666682531, lng: -122.90717060462102 }];
        var Lot132293shape = new google.maps.Polygon({
            paths: [Lot132293coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132293shape.setMap(map);

        var Lot132264center = new google.maps.LatLng(45.4931951816541, -122.904157510725);
        var markerLot132264 = new google.maps.Marker({
            position: Lot132264center,
            map: map,
            title: 'Lot132264'
        });
        markers.push(markerLot132264);
        var Lot132264coords0 = [
            { lat: 45.493022027157707, lng: -122.90424419871188 },
            { lat: 45.493220646007366, lng: -122.90408880416506 },
            { lat: 45.493249269810342, lng: -122.90416433302386 },
            { lat: 45.493051175742458, lng: -122.90431931673213 },
            { lat: 45.493022027157707, lng: -122.90424419871188 }];
        var Lot132264shape = new google.maps.Polygon({
            paths: [Lot132264coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132264shape.setMap(map);

        var Lot132260center = new google.maps.LatLng(45.4930587881845, -122.90375510543);
        var markerLot132260 = new google.maps.Marker({
            position: Lot132260center,
            map: map,
            title: 'Lot132260'
        });
        markers.push(markerLot132260);
        var Lot132260coords0 = [
            { lat: 45.492880684346588, lng: -122.90381816440515 },
            { lat: 45.493088586545753, lng: -122.90369018941445 },
            { lat: 45.493112295231462, lng: -122.90376908287828 },
            { lat: 45.4929046568505, lng: -122.90389689518719 },
            { lat: 45.492880684346588, lng: -122.90381816440515 }];
        var Lot132260shape = new google.maps.Polygon({
            paths: [Lot132260coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132260shape.setMap(map);

        var Lot132255center = new google.maps.LatLng(45.4929329546198, -122.90324704906);
        var markerLot132255 = new google.maps.Marker({
            position: Lot132255center,
            map: map,
            title: 'Lot132255'
        });
        markers.push(markerLot132255);
        var Lot132255coords0 = [
            { lat: 45.492765046433853, lng: -122.90325714579906 },
            { lat: 45.492964552542389, lng: -122.90319299129838 },
            { lat: 45.492982173447352, lng: -122.90327528415244 },
            { lat: 45.492778356803768, lng: -122.90334082448246 },
            { lat: 45.492765046433853, lng: -122.90325714579906 }];
        var Lot132255shape = new google.maps.Polygon({
            paths: [Lot132255coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132255shape.setMap(map);

        var Lot132251center = new google.maps.LatLng(45.492839305436, -122.902815352717);
        var markerLot132251 = new google.maps.Marker({
            position: Lot132251center,
            map: map,
            title: 'Lot132251'
        });
        markers.push(markerLot132251);
        var Lot132251coords0 = [
            { lat: 45.492696678572379, lng: -122.90282734227037 },
            { lat: 45.492906480528333, lng: -122.90275987537072 },
            { lat: 45.492909178054326, lng: -122.90277897945865 },
            { lat: 45.492906037283142, lng: -122.90284797706576 },
            { lat: 45.492709989255658, lng: -122.9029110207524 },
            { lat: 45.492696678572379, lng: -122.90282734227037 }];
        var Lot132251shape = new google.maps.Polygon({
            paths: [Lot132251coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132251shape.setMap(map);

        var Lot132280center = new google.maps.LatLng(45.4928980285488, -122.904417522595);
        var markerLot132280 = new google.maps.Marker({
            position: Lot132280center,
            map: map,
            title: 'Lot132280'
        });
        markers.push(markerLot132280);
        var Lot132280coords0 = [
            { lat: 45.492796075684389, lng: -122.9044371981455 },
            { lat: 45.492964281279207, lng: -122.90430559954544 },
            { lat: 45.492999981408936, lng: -122.9043978469725 },
            { lat: 45.492831775710073, lng: -122.9045294453822 },
            { lat: 45.492796075684389, lng: -122.9044371981455 }];
        var Lot132280shape = new google.maps.Polygon({
            paths: [Lot132280coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132280shape.setMap(map);

        var Lot132278center = new google.maps.LatLng(45.4928747616927, -122.904144410863);
        var markerLot132278 = new google.maps.Marker({
            position: Lot132278center,
            map: map,
            title: 'Lot132278'
        });
        markers.push(markerLot132278);
        var Lot132278coords0 = [
            { lat: 45.492702252530826, lng: -122.90417444518216 },
            { lat: 45.492878439210642, lng: -122.90406599452444 },
            { lat: 45.492908941972466, lng: -122.9041619526714 },
            { lat: 45.492731673025283, lng: -122.90427106921406 },
            { lat: 45.492702252530826, lng: -122.90417444518216 }];
        var Lot132278shape = new google.maps.Polygon({
            paths: [Lot132278coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132278shape.setMap(map);

        var Lot132276center = new google.maps.LatLng(45.4927298700744, -122.903921603936);
        var markerLot132276 = new google.maps.Marker({
            position: Lot132276center,
            map: map,
            title: 'Lot132276'
        });
        markers.push(markerLot132276);
        var Lot132276coords0 = [
            { lat: 45.492627066452414, lng: -122.90392751755525 },
            { lat: 45.492803252902782, lng: -122.90381906627536 },
            { lat: 45.492832673695332, lng: -122.903915690295 },
            { lat: 45.492656487155209, lng: -122.90402414133143 },
            { lat: 45.492627066452414, lng: -122.90392751755525 }];
        var Lot132276shape = new google.maps.Polygon({
            paths: [Lot132276coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132276shape.setMap(map);

        var Lot132274center = new google.maps.LatLng(45.4927317726378, -122.903633489872);
        var markerLot132274 = new google.maps.Marker({
            position: Lot132274center,
            map: map,
            title: 'Lot132274'
        });
        markers.push(markerLot132274);
        var Lot132274coords0 = [
            { lat: 45.492553736043959, lng: -122.90362579142081 },
            { lat: 45.492740995619911, lng: -122.9035655765138 },
            { lat: 45.4927499702611, lng: -122.90362042515258 },
            { lat: 45.4927596468102, lng: -122.90366752839601 },
            { lat: 45.492570071160834, lng: -122.90372848771632 },
            { lat: 45.492553736043959, lng: -122.90362579142081 }];
        var Lot132274shape = new google.maps.Polygon({
            paths: [Lot132274coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132274shape.setMap(map);

        var Lot132272center = new google.maps.LatLng(45.4926137877527, -122.903384585932);
        var markerLot132272 = new google.maps.Marker({
            position: Lot132272center,
            map: map,
            title: 'Lot132272'
        });
        markers.push(markerLot132272);
        var Lot132272coords0 = [
            { lat: 45.492511990327877, lng: -122.90336334560052 },
            { lat: 45.492699249768378, lng: -122.90330312987285 },
            { lat: 45.492715585173059, lng: -122.90340582633861 },
            { lat: 45.492528325679537, lng: -122.90346604174516 },
            { lat: 45.492511990327877, lng: -122.90336334560052 }];
        var Lot132272shape = new google.maps.Polygon({
            paths: [Lot132272coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132272shape.setMap(map);

        var Lot132270center = new google.maps.LatLng(45.4925720414862, -122.903122140011);
        var markerLot132270 = new google.maps.Marker({
            position: Lot132270center,
            map: map,
            title: 'Lot132270'
        });
        markers.push(markerLot132270);
        var Lot132270coords0 = [
            { lat: 45.492470244011663, lng: -122.90310090016588 },
            { lat: 45.492657503316742, lng: -122.90304068361753 },
            { lat: 45.492673838956243, lng: -122.9031433799324 },
            { lat: 45.492486579598165, lng: -122.90320359615959 },
            { lat: 45.492470244011663, lng: -122.90310090016588 }];
        var Lot132270shape = new google.maps.Polygon({
            paths: [Lot132270coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132270shape.setMap(map);

        var Lot132291center = new google.maps.LatLng(45.4931714007244, -122.906863882527);
        var markerLot132291 = new google.maps.Marker({
            position: Lot132291center,
            map: map,
            title: 'Lot132291'
        });
        markers.push(markerLot132291);
        var Lot132291coords0 = [
            { lat: 45.493061551683667, lng: -122.90700607474302 },
            { lat: 45.493148891834778, lng: -122.90667364321791 },
            { lat: 45.493184998589392, lng: -122.90669426462823 },
            { lat: 45.493222932017581, lng: -122.90671917397246 },
            { lat: 45.493256244199934, lng: -122.90674398537931 },
            { lat: 45.493292244152762, lng: -122.90677414271727 },
            { lat: 45.493159948429522, lng: -122.90707505794572 },
            { lat: 45.493112372424577, lng: -122.90703732704557 },
            { lat: 45.493061551683667, lng: -122.90700607474302 }];
        var Lot132291shape = new google.maps.Polygon({
            paths: [Lot132291coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132291shape.setMap(map);

        var Lot132323center = new google.maps.LatLng(45.4940462684059, -122.906191559288);
        var markerLot132323 = new google.maps.Marker({
            position: Lot132323center,
            map: map,
            title: 'Lot132323'
        });
        markers.push(markerLot132323);
        var Lot132323coords0 = [
            { lat: 45.493926496450541, lng: -122.906149493047 },
            { lat: 45.493976387685287, lng: -122.90604777514245 },
            { lat: 45.494161152126729, lng: -122.90622316864653 },
            { lat: 45.494106099555957, lng: -122.90633540927777 },
            { lat: 45.493926496450541, lng: -122.906149493047 }];
        var Lot132323shape = new google.maps.Polygon({
            paths: [Lot132323coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132323shape.setMap(map);

        var Lot132300center = new google.maps.LatLng(45.4937396842266, -122.905957920642);
        var markerLot132300 = new google.maps.Marker({
            position: Lot132300center,
            map: map,
            title: 'Lot132300'
        });
        markers.push(markerLot132300);
        var Lot132300coords0 = [
            { lat: 45.493632235694442, lng: -122.90605707379751 },
            { lat: 45.4937957721489, lng: -122.90579417697992 },
            { lat: 45.493847132671561, lng: -122.90585876710831 },
            { lat: 45.493683596071619, lng: -122.90612166397766 },
            { lat: 45.493632235694442, lng: -122.90605707379751 }];
        var Lot132300shape = new google.maps.Polygon({
            paths: [Lot132300coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132300shape.setMap(map);

        var Lot132296center = new google.maps.LatLng(45.493470918091, -122.906641232215);
        var markerLot132296 = new google.maps.Marker({
            position: Lot132296center,
            map: map,
            title: 'Lot132296'
        });
        markers.push(markerLot132296);
        var Lot132296coords0 = [
            { lat: 45.493349461456923, lng: -122.90672941678508 },
            { lat: 45.493498282804062, lng: -122.90644169293324 },
            { lat: 45.4935528006614, lng: -122.90650188394014 },
            { lat: 45.493601747198653, lng: -122.90656180400428 },
            { lat: 45.493435079469627, lng: -122.90682379926331 },
            { lat: 45.493394944615673, lng: -122.90677646451473 },
            { lat: 45.493349461456923, lng: -122.90672941678508 }];
        var Lot132296shape = new google.maps.Polygon({
            paths: [Lot132296coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132296shape.setMap(map);

        var Lot132309center = new google.maps.LatLng(45.4934333608098, -122.904938913235);
        var markerLot132309 = new google.maps.Marker({
            position: Lot132309center,
            map: map,
            title: 'Lot132309'
        });
        markers.push(markerLot132309);
        var Lot132309coords0 = [
            { lat: 45.493346425556034, lng: -122.90486686925983 },
            { lat: 45.49339104203267, lng: -122.90480911019024 },
            { lat: 45.493520296017316, lng: -122.90501095743197 },
            { lat: 45.493475679440778, lng: -122.90506871647447 },
            { lat: 45.493346425556034, lng: -122.90486686925983 }];
        var Lot132309shape = new google.maps.Polygon({
            paths: [Lot132309coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132309shape.setMap(map);

        var Lot132305center = new google.maps.LatLng(45.4934636899457, -122.905556348466);
        var markerLot132305 = new google.maps.Marker({
            position: Lot132305center,
            map: map,
            title: 'Lot132305'
        });
        markers.push(markerLot132305);
        var Lot132305coords0 = [
            { lat: 45.493362257238587, lng: -122.90562964488582 },
            { lat: 45.493524500223891, lng: -122.90541961359008 },
            { lat: 45.493565122604863, lng: -122.90548305178115 },
            { lat: 45.493402879505368, lng: -122.90569308304586 },
            { lat: 45.493362257238587, lng: -122.90562964488582 }];
        var Lot132305shape = new google.maps.Polygon({
            paths: [Lot132305coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132305shape.setMap(map);

        var Lot132313center = new google.maps.LatLng(45.4937243409598, -122.905200162447);
        var markerLot132313 = new google.maps.Marker({
            position: Lot132313center,
            map: map,
            title: 'Lot132313'
        });
        markers.push(markerLot132313);
        var Lot132313coords0 = [
            { lat: 45.493570732848859, lng: -122.90534120825596 },
            { lat: 45.493737118715195, lng: -122.90512581143308 },
            { lat: 45.493778505318723, lng: -122.90518826052163 },
            { lat: 45.49361135527262, lng: -122.90540464644258 },
            { lat: 45.493570732848859, lng: -122.90534120825596 }];
        var Lot132313shape = new google.maps.Polygon({
            paths: [Lot132313coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132313shape.setMap(map);

        var Lot132317center = new google.maps.LatLng(45.4939442524483, -122.905503906022);
        var markerLot132317 = new google.maps.Marker({
            position: Lot132317center,
            map: map,
            title: 'Lot132317'
        });
        markers.push(markerLot132317);
        var Lot132317coords0 = [
            { lat: 45.493802498628696, lng: -122.90566727505919 },
            { lat: 45.493951652800909, lng: -122.90542749585178 },
            { lat: 45.493996734987341, lng: -122.90548452030663 },
            { lat: 45.493847695953306, lng: -122.90572411427178 },
            { lat: 45.493802498628696, lng: -122.90566727505919 }];
        var Lot132317shape = new google.maps.Polygon({
            paths: [Lot132317coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132317shape.setMap(map);

        var Lot132288center = new google.maps.LatLng(45.4930090499688, -122.906519677352);
        var markerLot132288 = new google.maps.Marker({
            position: Lot132288center,
            map: map,
            title: 'Lot132288'
        });
        markers.push(markerLot132288);
        var Lot132288coords0 = [
            { lat: 45.492829409282308, lng: -122.90643475034878 },
            { lat: 45.492847374689831, lng: -122.90629276148543 },
            { lat: 45.49309988995293, lng: -122.90635735135248 },
            { lat: 45.493083962736215, lng: -122.90648318381395 },
            { lat: 45.493080877618183, lng: -122.90649750231083 },
            { lat: 45.493074536697812, lng: -122.9065130309985 },
            { lat: 45.493065694991138, lng: -122.90652585217265 },
            { lat: 45.49305490022838, lng: -122.90653517158245 },
            { lat: 45.493043858866628, lng: -122.90654014070303 },
            { lat: 45.493029154984391, lng: -122.90654111583562 },
            { lat: 45.492974673814835, lng: -122.90652929618591 },
            { lat: 45.492922972914968, lng: -122.90652250853157 },
            { lat: 45.492879732019823, lng: -122.90652027570913 },
            { lat: 45.492832143575143, lng: -122.90652142187493 },
            { lat: 45.492829409282308, lng: -122.90643475034878 }];
        var Lot132288shape = new google.maps.Polygon({
            paths: [Lot132288coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132288shape.setMap(map);

        var Lot132284center = new google.maps.LatLng(45.4929601073086, -122.905378532026);
        var markerLot132284 = new google.maps.Marker({
            position: Lot132284center,
            map: map,
            title: 'Lot132284'
        });
        markers.push(markerLot132284);
        var Lot132284coords0 = [
            { lat: 45.492819230042016, lng: -122.90546889518041 },
            { lat: 45.492825021893104, lng: -122.90527408306313 },
            { lat: 45.493100984503691, lng: -122.90528816842415 },
            { lat: 45.49309519262917, lng: -122.9054829814861 },
            { lat: 45.492819230042016, lng: -122.90546889518041 }];
        var Lot132284shape = new google.maps.Polygon({
            paths: [Lot132284coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132284shape.setMap(map);

        var Lot132268center = new google.maps.LatLng(45.4925302946196, -122.902859694477);
        var markerLot132268 = new google.maps.Marker({
            position: Lot132268center,
            map: map,
            title: 'Lot132268'
        });
        markers.push(markerLot132268);
        var Lot132268coords0 = [
            { lat: 45.492428497095368, lng: -122.90283845511685 },
            { lat: 45.49261575626501, lng: -122.90277823774784 },
            { lat: 45.492632092139324, lng: -122.90288093391179 },
            { lat: 45.492444832916675, lng: -122.90294115095968 },
            { lat: 45.492428497095368, lng: -122.90283845511685 }];
        var Lot132268shape = new google.maps.Polygon({
            paths: [Lot132268coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132268shape.setMap(map);

        var Lot132247center = new google.maps.LatLng(45.4926425373078, -122.902370292584);
        var markerLot132247 = new google.maps.Marker({
            position: Lot132247center,
            map: map,
            title: 'Lot132247'
        });
        markers.push(markerLot132247);
        var Lot132247coords0 = [
            { lat: 45.492586761756222, lng: -122.9022063366704 },
            { lat: 45.492654226741649, lng: -122.90218892472619 },
            { lat: 45.492698312624427, lng: -122.90253424882069 },
            { lat: 45.492630847587471, lng: -122.90255166036836 },
            { lat: 45.492586761756222, lng: -122.9022063366704 }];
        var Lot132247shape = new google.maps.Polygon({
            paths: [Lot132247coords0],
            strokeColor: 'red',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.8
        });
        Lot132247shape.setMap(map);

        var Block132022center = new google.maps.LatLng(45.4942897743355, -122.907110526503);
        var Block132022coords0 = [
            { lat: 45.493282842404263, lng: -122.90819397505834 },
            { lat: 45.493299986924953, lng: -122.90816103869126 },
            { lat: 45.493315805656863, lng: -122.90812642060966 },
            { lat: 45.493341498169841, lng: -122.9080575629628 },
            { lat: 45.493361433101953, lng: -122.90798495119033 },
            { lat: 45.493375344329763, lng: -122.90790955462745 },
            { lat: 45.493383046143755, lng: -122.90783237978793 },
            { lat: 45.493384435727627, lng: -122.90775445692661 },
            { lat: 45.493379494530942, lng: -122.90767682628481 },
            { lat: 45.493374334762031, lng: -122.90763620030681 },
            { lat: 45.493367437023061, lng: -122.90759609911947 },
            { lat: 45.493449796216751, lng: -122.90753295307032 },
            { lat: 45.493533885233084, lng: -122.90746261467301 },
            { lat: 45.493616033786545, lng: -122.90738778391201 },
            { lat: 45.493696123223849, lng: -122.90730856885183 },
            { lat: 45.493774037865336, lng: -122.90722508389105 },
            { lat: 45.493849665172142, lng: -122.90713744959709 },
            { lat: 45.493922895908732, lng: -122.90704579253213 },
            { lat: 45.493988274843559, lng: -122.9069577298889 },
            { lat: 45.494051441099664, lng: -122.90686646066482 },
            { lat: 45.494107333276951, lng: -122.90678007617821 },
            { lat: 45.494166043670127, lng: -122.90668297821409 },
            { lat: 45.494222322593131, lng: -122.9065830117956 },
            { lat: 45.494276100779487, lng: -122.90648029995039 },
            { lat: 45.494323144036805, lng: -122.90638384354762 },
            { lat: 45.49448550207925, lng: -122.90602307411963 },
            { lat: 45.494494345910105, lng: -122.90601072088425 },
            { lat: 45.494505854867462, lng: -122.90600416809164 },
            { lat: 45.494515793075195, lng: -122.90600381740373 },
            { lat: 45.494526058658124, lng: -122.90600841075177 },
            { lat: 45.494647504189921, lng: -122.90610746462276 },
            { lat: 45.49474391100113, lng: -122.90619302716298 },
            { lat: 45.494837613753909, lng: -122.9062844617311 },
            { lat: 45.494922473962433, lng: -122.90637494654113 },
            { lat: 45.494998903649751, lng: -122.90646328404615 },
            { lat: 45.495078533889661, lng: -122.90656291747146 },
            { lat: 45.495155258587864, lng: -122.90666705835213 },
            { lat: 45.495228951644613, lng: -122.90677553554659 },
            { lat: 45.495294560407281, lng: -122.90687999142422 },
            { lat: 45.495357357689628, lng: -122.90698788460155 },
            { lat: 45.495421739344053, lng: -122.90710774586088 },
            { lat: 45.495482651382567, lng: -122.90723121919683 },
            { lat: 45.49553999369239, lng: -122.90735810168398 },
            { lat: 45.495589961285788, lng: -122.90747879152725 },
            { lat: 45.495640158231154, lng: -122.90761165531498 },
            { lat: 45.495426855364713, lng: -122.90779338888827 },
            { lat: 45.49527462467335, lng: -122.90784515069561 },
            { lat: 45.495090695475312, lng: -122.90806895956335 },
            { lat: 45.49504393846567, lng: -122.90811290257639 },
            { lat: 45.4949285310515, lng: -122.90825790410152 },
            { lat: 45.49454082034525, lng: -122.90892855060521 },
            { lat: 45.494490480142879, lng: -122.90896834354784 },
            { lat: 45.494495762210647, lng: -122.90898147656941 },
            { lat: 45.494292925442252, lng: -122.90915106614159 },
            { lat: 45.494328278645035, lng: -122.90924808597767 },
            { lat: 45.494191768192827, lng: -122.90935641971687 },
            { lat: 45.493649638418809, lng: -122.90963532462969 },
            { lat: 45.493282842404263, lng: -122.90819397505834 }];
        var Block132022shape = new google.maps.Polygon({
            paths: [Block132022coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Block132022shape.setMap(map);

        var Tract132447center = new google.maps.LatLng(45.4951009555227, -122.908883105603);
        var Tract132447coords0 = [
            { lat: 45.494292925442252, lng: -122.90915106614159 },
            { lat: 45.494495762210647, lng: -122.90898147656941 },
            { lat: 45.494490480142879, lng: -122.90896834354784 },
            { lat: 45.49454082034525, lng: -122.90892855060521 },
            { lat: 45.4949285310515, lng: -122.90825790410152 },
            { lat: 45.49504393846567, lng: -122.90811290257639 },
            { lat: 45.495090695475312, lng: -122.90806895956335 },
            { lat: 45.49527462467335, lng: -122.90784515069561 },
            { lat: 45.495426855364713, lng: -122.90779338888827 },
            { lat: 45.495640158231154, lng: -122.90761165531498 },
            { lat: 45.495696590396705, lng: -122.9077787106263 },
            { lat: 45.495723762107751, lng: -122.90786764151692 },
            { lat: 45.49574929467159, lng: -122.90795754910513 },
            { lat: 45.495815235808216, lng: -122.90821514515555 },
            { lat: 45.495878908968365, lng: -122.90848471395196 },
            { lat: 45.495636967419806, lng: -122.90858693301398 },
            { lat: 45.495569109086723, lng: -122.9086180973863 },
            { lat: 45.495586755116157, lng: -122.90869678436226 },
            { lat: 45.495344597405413, lng: -122.90879786713609 },
            { lat: 45.495355575835838, lng: -122.90885123277172 },
            { lat: 45.4953088569956, lng: -122.90887470473022 },
            { lat: 45.495266116835893, lng: -122.90889895983609 },
            { lat: 45.495224067136711, lng: -122.9089255431373 },
            { lat: 45.495182770600387, lng: -122.90895441498913 },
            { lat: 45.495142288805972, lng: -122.9089855323346 },
            { lat: 45.495102682117526, lng: -122.9090188487686 },
            { lat: 45.49506400959406, lng: -122.90905431460725 },
            { lat: 45.495022205837522, lng: -122.90909617756793 },
            { lat: 45.494961963727121, lng: -122.90916365505744 },
            { lat: 45.494908599360578, lng: -122.90923148450705 },
            { lat: 45.494858195202454, lng: -122.90930374692974 },
            { lat: 45.494810933085958, lng: -122.90938018162728 },
            { lat: 45.494776114282217, lng: -122.90944298531097 },
            { lat: 45.494743418252767, lng: -122.90950805489207 },
            { lat: 45.494590122238122, lng: -122.90984057574613 },
            { lat: 45.494544201876543, lng: -122.90974507027023 },
            { lat: 45.494354633136396, lng: -122.90931202452647 },
            { lat: 45.49432137660984, lng: -122.90923026165156 },
            { lat: 45.494292925442252, lng: -122.90915106614159 }];
        var Tract132447shape = new google.maps.Polygon({
            paths: [Tract132447coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132447shape.setMap(map);

        var Tract132445center = new google.maps.LatLng(45.4925594260254, -122.905558072721);
        var Tract132445coords0 = [
            { lat: 45.491653795555663, lng: -122.90022033008928 },
            { lat: 45.4925317725012, lng: -122.90009285106611 },
            { lat: 45.492545425683751, lng: -122.90028294398662 },
            { lat: 45.492610434247723, lng: -122.90027371772814 },
            { lat: 45.492621561089514, lng: -122.90027440135857 },
            { lat: 45.49263365715781, lng: -122.9002780932052 },
            { lat: 45.492648360854922, lng: -122.90028730778913 },
            { lat: 45.492662087194837, lng: -122.90030227593051 },
            { lat: 45.492672809823667, lng: -122.90032157633443 },
            { lat: 45.492679500236925, lng: -122.90034234850212 },
            { lat: 45.4926825647883, lng: -122.90036298979365 },
            { lat: 45.492740022029722, lng: -122.90115383428953 },
            { lat: 45.492747787545206, lng: -122.90122815821184 },
            { lat: 45.492757306184622, lng: -122.90130206890402 },
            { lat: 45.49279288350553, lng: -122.90151946427021 },
            { lat: 45.492808831569079, lng: -122.90164261635327 },
            { lat: 45.4928180802967, lng: -122.90174193208686 },
            { lat: 45.492844699843104, lng: -122.90211202197113 },
            { lat: 45.492502374831872, lng: -122.90220037249846 },
            { lat: 45.492552574132667, lng: -122.90259358284393 },
            { lat: 45.492360707235783, lng: -122.90264309989195 },
            { lat: 45.492355111319519, lng: -122.90268417739087 },
            { lat: 45.492383122217952, lng: -122.90267694837546 },
            { lat: 45.492555685771045, lng: -122.90376179777118 },
            { lat: 45.492714009650605, lng: -122.90428176744012 },
            { lat: 45.492826651731967, lng: -122.90457282873174 },
            { lat: 45.492784063581908, lng: -122.90600533893659 },
            { lat: 45.492863178841326, lng: -122.90601367640123 },
            { lat: 45.492810133437374, lng: -122.906432922751 },
            { lat: 45.492827603806354, lng: -122.90698673331016 },
            { lat: 45.49286417125154, lng: -122.90698431292272 },
            { lat: 45.492898165738609, lng: -122.90698530265135 },
            { lat: 45.492932044612623, lng: -122.90698940668693 },
            { lat: 45.492969009606746, lng: -122.90699749738896 },
            { lat: 45.493005478027122, lng: -122.90700929474242 },
            { lat: 45.49303804565632, lng: -122.90702318650119 },
            { lat: 45.493069915577657, lng: -122.90704003493983 },
            { lat: 45.4931009551674, lng: -122.90705976994998 },
            { lat: 45.493131035256937, lng: -122.90708230941075 },
            { lat: 45.493160030670317, lng: -122.90710755953025 },
            { lat: 45.493190528960646, lng: -122.90713833974249 },
            { lat: 45.493216859799084, lng: -122.90716892730688 },
            { lat: 45.493241748808181, lng: -122.90720186508672 },
            { lat: 45.493267337979134, lng: -122.90724064727729 },
            { lat: 45.493288869700052, lng: -122.90727806338559 },
            { lat: 45.493310539930974, lng: -122.90732140481917 },
            { lat: 45.493244878268527, lng: -122.90736962692101 },
            { lat: 45.493173269192091, lng: -122.90741811383496 },
            { lat: 45.493100558973381, lng: -122.90746316611484 },
            { lat: 45.493026829071169, lng: -122.90750473330081 },
            { lat: 45.4922760106756, lng: -122.90788595026987 },
            { lat: 45.492154420856615, lng: -122.90794291374243 },
            { lat: 45.492153492197239, lng: -122.90787524452159 },
            { lat: 45.492155919670154, lng: -122.90781275249842 },
            { lat: 45.492161492260912, lng: -122.9077506687718 },
            { lat: 45.49217104475526, lng: -122.9076842427113 },
            { lat: 45.492184196755545, lng: -122.90761907207055 },
            { lat: 45.492199463540942, lng: -122.90756036944278 },
            { lat: 45.492217651306859, lng: -122.90750337422766 },
            { lat: 45.492238666433572, lng: -122.90744837980392 },
            { lat: 45.492262400747748, lng: -122.90739566925237 },
            { lat: 45.492291039427592, lng: -122.90734145781803 },
            { lat: 45.492320030840531, lng: -122.90729436149317 },
            { lat: 45.492351322624295, lng: -122.90725034184831 },
            { lat: 45.492387630876635, lng: -122.90720638824895 },
            { lat: 45.492423185015546, lng: -122.90716948638189 },
            { lat: 45.492460508545072, lng: -122.90713630400059 },
            { lat: 45.492502716050154, lng: -122.90710475138845 },
            { lat: 45.492356700614664, lng: -122.9065734945335 },
            { lat: 45.492229795158863, lng: -122.90626120764367 },
            { lat: 45.492252787047853, lng: -122.90624744459524 },
            { lat: 45.492274066295622, lng: -122.9062272430827 },
            { lat: 45.492292231585765, lng: -122.90620162265819 },
            { lat: 45.4923057814784, lng: -122.90617365487539 },
            { lat: 45.492315595092379, lng: -122.90614269257459 },
            { lat: 45.492321606685842, lng: -122.90610733132004 },
            { lat: 45.492322745378104, lng: -122.90607098775293 },
            { lat: 45.492318969038728, lng: -122.90603500654811 },
            { lat: 45.492312497024628, lng: -122.90600737881424 },
            { lat: 45.492303118828886, lng: -122.90598149114687 },
            { lat: 45.492292157867595, lng: -122.90595981445499 },
            { lat: 45.492272910167252, lng: -122.9059305262269 },
            { lat: 45.492263702088565, lng: -122.90590796887113 },
            { lat: 45.492201997424907, lng: -122.90564199692261 },
            { lat: 45.492134252345515, lng: -122.90537742659485 },
            { lat: 45.492060584143559, lng: -122.90511607620751 },
            { lat: 45.49198106836544, lng: -122.9048582137624 },
            { lat: 45.492215984709574, lng: -122.90475041052606 },
            { lat: 45.492030645589622, lng: -122.90393397320391 },
            { lat: 45.492146534195079, lng: -122.90388078985029 },
            { lat: 45.491926646623284, lng: -122.90291220343769 },
            { lat: 45.492098510332447, lng: -122.90283332875981 },
            { lat: 45.491849967814339, lng: -122.90173857239816 },
            { lat: 45.491984485332516, lng: -122.90167683434252 },
            { lat: 45.491653795555663, lng: -122.90022033008928 }];
        var Tract132445shape = new google.maps.Polygon({
            paths: [Tract132445coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132445shape.setMap(map);

        var Block132024center = new google.maps.LatLng(45.4934707468612, -122.905738936035);
        var Block132024coords0 = [
            { lat: 45.492355111319519, lng: -122.90268417739087 },
            { lat: 45.492360707235783, lng: -122.90264309989195 },
            { lat: 45.492552574132667, lng: -122.90259358284393 },
            { lat: 45.492502374831872, lng: -122.90220037249846 },
            { lat: 45.492844699843104, lng: -122.90211202197113 },
            { lat: 45.4928612693161, lng: -122.9023415731441 },
            { lat: 45.49287292508793, lng: -122.90247585986083 },
            { lat: 45.4928886394094, lng: -122.90262176411203 },
            { lat: 45.492909178054326, lng: -122.90277897945874 },
            { lat: 45.492905241147753, lng: -122.9028654667124 },
            { lat: 45.492926991639642, lng: -122.90299686450825 },
            { lat: 45.492949088783583, lng: -122.90311609668115 },
            { lat: 45.492983573307875, lng: -122.90328160548347 },
            { lat: 45.493019267251853, lng: -122.90343364909262 },
            { lat: 45.493061616605324, lng: -122.90359542550044 },
            { lat: 45.4931079685418, lng: -122.90375496830072 },
            { lat: 45.493158264921419, lng: -122.90391207737159 },
            { lat: 45.4932084455212, lng: -122.90405561287682 },
            { lat: 45.493261918575563, lng: -122.90419672470927 },
            { lat: 45.493325727830808, lng: -122.90435345807188 },
            { lat: 45.493327573443686, lng: -122.9043732248914 },
            { lat: 45.493323628543209, lng: -122.9043911532676 },
            { lat: 45.493317435956278, lng: -122.9044022108282 },
            { lat: 45.4932961431255, lng: -122.90442593133827 },
            { lat: 45.493392111277437, lng: -122.90460140257383 },
            { lat: 45.493403853207035, lng: -122.90459019316366 },
            { lat: 45.493415971399585, lng: -122.90458647332733 },
            { lat: 45.493428929909321, lng: -122.90459013524855 },
            { lat: 45.493439696660481, lng: -122.90460102262327 },
            { lat: 45.493496457268691, lng: -122.90471276428774 },
            { lat: 45.493543577933252, lng: -122.90480123112314 },
            { lat: 45.49359758025436, lng: -122.90489770979168 },
            { lat: 45.493653281799205, lng: -122.90499221530649 },
            { lat: 45.493710646918473, lng: -122.90508468717763 },
            { lat: 45.493763667559293, lng: -122.90516612414922 },
            { lat: 45.493824091461263, lng: -122.90525457013784 },
            { lat: 45.49388606961768, lng: -122.90534081455424 },
            { lat: 45.493949562361642, lng: -122.90542480219358 },
            { lat: 45.494007967237181, lng: -122.90549841706077 },
            { lat: 45.494074224963882, lng: -122.9055779699332 },
            { lat: 45.49413505015584, lng: -122.90564750959894 },
            { lat: 45.4941800279562, lng: -122.90569663852413 },
            { lat: 45.49421676231367, lng: -122.90573366483433 },
            { lat: 45.494254495551118, lng: -122.90576860145106 },
            { lat: 45.494312264975143, lng: -122.9058179660851 },
            { lat: 45.494319601140688, lng: -122.90583217590321 },
            { lat: 45.494322519099491, lng: -122.90584930809085 },
            { lat: 45.494320847554988, lng: -122.90586560178063 },
            { lat: 45.494314062073755, lng: -122.90588310088785 },
            { lat: 45.494480650241144, lng: -122.90603387529262 },
            { lat: 45.494350037909719, lng: -122.90632556649024 },
            { lat: 45.494304298639051, lng: -122.90642328264374 },
            { lat: 45.494238413419851, lng: -122.9065530609453 },
            { lat: 45.494168590082836, lng: -122.90667860735638 },
            { lat: 45.494084866059822, lng: -122.90681547295853 },
            { lat: 45.493996463209818, lng: -122.90694625511274 },
            { lat: 45.493903599871459, lng: -122.90707063084 },
            { lat: 45.493812329715929, lng: -122.90718156281379 },
            { lat: 45.493711471878882, lng: -122.9072926405624 },
            { lat: 45.493606857422485, lng: -122.907396456486 },
            { lat: 45.493498744719936, lng: -122.90749275422404 },
            { lat: 45.493394034982543, lng: -122.90757630635578 },
            { lat: 45.493281447602854, lng: -122.90765631666137 },
            { lat: 45.493171596451013, lng: -122.90772524242796 },
            { lat: 45.493080750562228, lng: -122.90777581765646 },
            { lat: 45.492903884493188, lng: -122.90786574609319 },
            { lat: 45.492837564017357, lng: -122.90760127958676 },
            { lat: 45.493015007247074, lng: -122.90751102364754 },
            { lat: 45.493102219649671, lng: -122.90746218277179 },
            { lat: 45.49320758517861, lng: -122.90739539983902 },
            { lat: 45.493310539930974, lng: -122.90732140481917 },
            { lat: 45.493289351859595, lng: -122.90727896007721 },
            { lat: 45.493267859797342, lng: -122.90724149790141 },
            { lat: 45.493244713671913, lng: -122.90720608394803 },
            { lat: 45.49321745764631, lng: -122.90716966991401 },
            { lat: 45.493191159238641, lng: -122.90713902599732 },
            { lat: 45.493160693587846, lng: -122.90710818050854 },
            { lat: 45.493131724954381, lng: -122.90708286832471 },
            { lat: 45.493101668774642, lng: -122.90706026447386 },
            { lat: 45.493067500262093, lng: -122.90703864027684 },
            { lat: 45.493035572123055, lng: -122.9070220161604 },
            { lat: 45.493002956569548, lng: -122.90700835359368 },
            { lat: 45.492966447557983, lng: -122.90699681283735 },
            { lat: 45.49293283294611, lng: -122.90698953957536 },
            { lat: 45.492895562136738, lng: -122.906985116435 },
            { lat: 45.492861564622665, lng: -122.90698436577277 },
            { lat: 45.492827603806354, lng: -122.90698673331016 },
            { lat: 45.492810133437374, lng: -122.906432922751 },
            { lat: 45.492863178841326, lng: -122.90601367640123 },
            { lat: 45.492784063581908, lng: -122.90600533893659 },
            { lat: 45.492826651731967, lng: -122.90457282873174 },
            { lat: 45.492714009650605, lng: -122.90428176744012 },
            { lat: 45.492555685771045, lng: -122.90376179777118 },
            { lat: 45.492383122217952, lng: -122.90267694837546 },
            { lat: 45.492355111319519, lng: -122.90268417739087 }];
        var Block132024shape = new google.maps.Polygon({
            paths: [Block132024coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Block132024shape.setMap(map);

        var Acquisition_Land131999center = new google.maps.LatLng(45.4897880564131, -122.894888066568);
        var Acquisition_Land131999coords0 = [
            { lat: 45.486128620563285, lng: -122.89280317801196 },
            { lat: 45.489373288140193, lng: -122.89214700778524 },
            { lat: 45.489446884493155, lng: -122.89213416938688 },
            { lat: 45.489520756918246, lng: -122.89212508472265 },
            { lat: 45.489608287130757, lng: -122.89211920346894 },
            { lat: 45.490881593356114, lng: -122.89207201754515 },
            { lat: 45.490881306474016, lng: -122.892013515664 },
            { lat: 45.495946322784938, lng: -122.89182579099072 },
            { lat: 45.498055101279661, lng: -122.91219956237029 },
            { lat: 45.494216912700587, lng: -122.91239546619514 },
            { lat: 45.490979862372917, lng: -122.91248220653269 },
            { lat: 45.490979456892312, lng: -122.91239641279907 },
            { lat: 45.4872359549674, lng: -122.91249672711234 },
            { lat: 45.487212787534908, lng: -122.90755586282944 },
            { lat: 45.486266871060671, lng: -122.90756078055009 },
            { lat: 45.486128620563285, lng: -122.89280317801196 }];
        var Acquisition_Land131999shape = new google.maps.Polygon({
            paths: [Acquisition_Land131999coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Acquisition_Land131999shape.setMap(map);

        var Tract132429center = new google.maps.LatLng(45.4946121270995, -122.906072175059);
        var Tract132429coords0 = [
            { lat: 45.4926825647883, lng: -122.90036298979365 },
            { lat: 45.492979230179508, lng: -122.90044382938275 },
            { lat: 45.493050055916541, lng: -122.90144248361089 },
            { lat: 45.493057598592088, lng: -122.9016310462016 },
            { lat: 45.493060399471389, lng: -122.90185770386627 },
            { lat: 45.493063427853876, lng: -122.90197353934919 },
            { lat: 45.493069953859795, lng: -122.90211232626058 },
            { lat: 45.493079821120361, lng: -122.90225656011044 },
            { lat: 45.493083450178275, lng: -122.90227722867283 },
            { lat: 45.493090036450219, lng: -122.90229636290438 },
            { lat: 45.493098425535294, lng: -122.9023118316057 },
            { lat: 45.493109766286011, lng: -122.90232575315389 },
            { lat: 45.493122902539405, lng: -122.90233599827897 },
            { lat: 45.493137254401695, lng: -122.90234211471196 },
            { lat: 45.4931509376209, lng: -122.90234386046252 },
            { lat: 45.493166682519544, lng: -122.9023415461095 },
            { lat: 45.493192044792814, lng: -122.90258456421282 },
            { lat: 45.493172043099342, lng: -122.90259135640024 },
            { lat: 45.493163358948138, lng: -122.90259799708198 },
            { lat: 45.493155651261759, lng: -122.90260674103799 },
            { lat: 45.493149169097343, lng: -122.90261730572553 },
            { lat: 45.493144121911854, lng: -122.90262934976928 },
            { lat: 45.493140672794027, lng: -122.90264248399208 },
            { lat: 45.493138933194516, lng: -122.90265628399031 },
            { lat: 45.493139361926033, lng: -122.902674947614 },
            { lat: 45.493145677968073, lng: -122.90272023671862 },
            { lat: 45.493173216917974, lng: -122.90289376800725 },
            { lat: 45.493192043755876, lng: -122.90299709785354 },
            { lat: 45.493212585498391, lng: -122.90309976517105 },
            { lat: 45.493234830635629, lng: -122.90320171243295 },
            { lat: 45.493258766703207, lng: -122.90330288251552 },
            { lat: 45.493284380289332, lng: -122.90340321873047 },
            { lat: 45.493311657042184, lng: -122.90350266485635 },
            { lat: 45.493340581678076, lng: -122.90360116517033 },
            { lat: 45.493371137989904, lng: -122.90369866447922 },
            { lat: 45.49340330885628, lng: -122.90379510815055 },
            { lat: 45.493440925921746, lng: -122.90390096398342 },
            { lat: 45.493480487966828, lng: -122.90400537662887 },
            { lat: 45.493516392491642, lng: -122.90409410277091 },
            { lat: 45.493523651250754, lng: -122.90410576441127 },
            { lat: 45.493533337795412, lng: -122.90411594019936 },
            { lat: 45.493543310050093, lng: -122.90412237986749 },
            { lat: 45.493553983316851, lng: -122.90412587422587 },
            { lat: 45.493564932082961, lng: -122.90412628396271 },
            { lat: 45.493575719852068, lng: -122.90412359274123 },
            { lat: 45.49358591654611, lng: -122.90411790785113 },
            { lat: 45.493596233926972, lng: -122.90410889240545 },
            { lat: 45.493690012679892, lng: -122.90431524124928 },
            { lat: 45.493679305750192, lng: -122.90432570394773 },
            { lat: 45.493671595416529, lng: -122.90433676418661 },
            { lat: 45.493665086382727, lng: -122.90435117199011 },
            { lat: 45.493661218051756, lng: -122.90436574122674 },
            { lat: 45.493659406637377, lng: -122.90438267060129 },
            { lat: 45.493660052714418, lng: -122.90439821636477 },
            { lat: 45.49366285806795, lng: -122.90441326974346 },
            { lat: 45.493668301967055, lng: -122.90442854467204 },
            { lat: 45.493726868921492, lng: -122.90454192151175 },
            { lat: 45.493788658018666, lng: -122.90465388808337 },
            { lat: 45.4938529014377, lng: -122.90476302648281 },
            { lat: 45.493913892679387, lng: -122.90486049263532 },
            { lat: 45.493976841435789, lng: -122.90495540935666 },
            { lat: 45.494047683387308, lng: -122.90505595394755 },
            { lat: 45.49412072164008, lng: -122.90515326981939 },
            { lat: 45.494195883438536, lng: -122.9052472600205 },
            { lat: 45.494253603401994, lng: -122.90531551374244 },
            { lat: 45.494312443443505, lng: -122.90538180578062 },
            { lat: 45.494379094816622, lng: -122.90545311771024 },
            { lat: 45.494426272378192, lng: -122.90550037007914 },
            { lat: 45.494437518032804, lng: -122.9055064995281 },
            { lat: 45.494449433393136, lng: -122.90550899177047 },
            { lat: 45.4944614440735, lng: -122.90550772666418 },
            { lat: 45.494471958061553, lng: -122.90550336393012 },
            { lat: 45.494482562065926, lng: -122.90549524516837 },
            { lat: 45.494490911123407, lng: -122.90548516575555 },
            { lat: 45.494506610583393, lng: -122.90545299186826 },
            { lat: 45.494673549399423, lng: -122.90560298349084 },
            { lat: 45.494667087899174, lng: -122.90561814647474 },
            { lat: 45.494663461708505, lng: -122.90563118427066 },
            { lat: 45.494661429910423, lng: -122.90564648711643 },
            { lat: 45.494661463541512, lng: -122.9056605073168 },
            { lat: 45.494663568707175, lng: -122.90567579009979 },
            { lat: 45.494667257361833, lng: -122.9056887924214 },
            { lat: 45.494672523561235, lng: -122.90570064569499 },
            { lat: 45.494680016556181, lng: -122.90571200410432 },
            { lat: 45.4946879992276, lng: -122.90572023440134 },
            { lat: 45.49481034957298, lng: -122.90582131333217 },
            { lat: 45.494917199352031, lng: -122.90591898012083 },
            { lat: 45.495020908399177, lng: -122.90602326739678 },
            { lat: 45.495121273965147, lng: -122.9061339713157 },
            { lat: 45.495224029564753, lng: -122.9062583827108 },
            { lat: 45.495276734094048, lng: -122.90632698810981 },
            { lat: 45.49532822234238, lng: -122.90639743613212 },
            { lat: 45.495416655269253, lng: -122.9065270905789 },
            { lat: 45.495518311588093, lng: -122.9066894430799 },
            { lat: 45.495534418536664, lng: -122.90670255739738 },
            { lat: 45.495543947444759, lng: -122.90670616234807 },
            { lat: 45.495553776297143, lng: -122.90670728335266 },
            { lat: 45.495563587495361, lng: -122.90670588418693 },
            { lat: 45.495573064011168, lng: -122.90670201006071 },
            { lat: 45.495589821518621, lng: -122.90668771324236 },
            { lat: 45.495694386329369, lng: -122.90688330848613 },
            { lat: 45.495680131601979, lng: -122.9069025999332 },
            { lat: 45.495671753752568, lng: -122.90692614993475 },
            { lat: 45.495669378845044, lng: -122.90695232446313 },
            { lat: 45.495673278785652, lng: -122.90697812676235 },
            { lat: 45.495677759344041, lng: -122.906990616233 },
            { lat: 45.495721386588954, lng: -122.90708362537966 },
            { lat: 45.49575950294247, lng: -122.90716956426209 },
            { lat: 45.495823510206549, lng: -122.9073255726823 },
            { lat: 45.49585736306787, lng: -122.90741504832397 },
            { lat: 45.495889640438349, lng: -122.90750569349832 },
            { lat: 45.495946240392676, lng: -122.90767990423144 },
            { lat: 45.495997023738667, lng: -122.90785770265548 },
            { lat: 45.496064998209526, lng: -122.9081262122769 },
            { lat: 45.496129168973106, lng: -122.90840025428629 },
            { lat: 45.4961848191921, lng: -122.90865795813858 },
            { lat: 45.49618080791786, lng: -122.9086592980177 },
            { lat: 45.496214564813016, lng: -122.90882667928287 },
            { lat: 45.496246437139355, lng: -122.90899390762019 },
            { lat: 45.496276590516352, lng: -122.90916177933958 },
            { lat: 45.496305018526634, lng: -122.90933025871475 },
            { lat: 45.496348548129809, lng: -122.90961231057784 },
            { lat: 45.49638964980533, lng: -122.90991472865952 },
            { lat: 45.496410341448353, lng: -122.91008547328816 },
            { lat: 45.496429279259168, lng: -122.91025662898998 },
            { lat: 45.496623291497542, lng: -122.91213794014888 },
            { lat: 45.496626169400372, lng: -122.91215189075723 },
            { lat: 45.496630698779995, lng: -122.91216492479228 },
            { lat: 45.496636743464876, lng: -122.91217665039773 },
            { lat: 45.496644121727165, lng: -122.91218671505368 },
            { lat: 45.496653612899379, lng: -122.91219558389651 },
            { lat: 45.496663037644822, lng: -122.91220122048604 },
            { lat: 45.496673005456962, lng: -122.91220445744585 },
            { lat: 45.496683216662227, lng: -122.91220519745825 },
            { lat: 45.496689817225239, lng: -122.91226925048026 },
            { lat: 45.496348148954837, lng: -122.9122866897044 },
            { lat: 45.496338148101565, lng: -122.91218964025683 },
            { lat: 45.4963507434841, lng: -122.91218519905833 },
            { lat: 45.496361170509971, lng: -122.91217366197982 },
            { lat: 45.496367359434991, lng: -122.9121570642986 },
            { lat: 45.496368224335377, lng: -122.91213831828294 },
            { lat: 45.496217105357175, lng: -122.91067220902185 },
            { lat: 45.496211990365076, lng: -122.91065488776356 },
            { lat: 45.496202334610523, lng: -122.9106420651154 },
            { lat: 45.496189832315082, lng: -122.91063599096695 },
            { lat: 45.496176110690058, lng: -122.91063728273259 },
            { lat: 45.496153442308071, lng: -122.91041733927729 },
            { lat: 45.496167270079226, lng: -122.91041271253253 },
            { lat: 45.496177907285833, lng: -122.91040157017714 },
            { lat: 45.496184401644129, lng: -122.91038521019935 },
            { lat: 45.49618550387855, lng: -122.91036533063584 },
            { lat: 45.4961580421048, lng: -122.91011531135379 },
            { lat: 45.496127599894848, lng: -122.9098726886168 },
            { lat: 45.496093514007768, lng: -122.90963104765662 },
            { lat: 45.496055800049973, lng: -122.90939049910894 },
            { lat: 45.4960371606171, lng: -122.90927979437529 },
            { lat: 45.496033288968363, lng: -122.90926677485263 },
            { lat: 45.496025455367665, lng: -122.90925464722052 },
            { lat: 45.496015869251927, lng: -122.90924769227082 },
            { lat: 45.496005196689076, lng: -122.90924572478617 },
            { lat: 45.495993083525, lng: -122.90924915973608 },
            { lat: 45.495953873868423, lng: -122.90903397288781 },
            { lat: 45.495967154420427, lng: -122.90902745553055 },
            { lat: 45.495976998405062, lng: -122.90901492564623 },
            { lat: 45.495982530180683, lng: -122.90899660129912 },
            { lat: 45.495982137421656, lng: -122.90897782341641 },
            { lat: 45.495937882732541, lng: -122.90875643586841 },
            { lat: 45.495891080864588, lng: -122.90853889136736 },
            { lat: 45.495838815623934, lng: -122.90831242750338 },
            { lat: 45.495785866103269, lng: -122.90809775195159 },
            { lat: 45.495756891576391, lng: -122.90798567437666 },
            { lat: 45.495731871910024, lng: -122.90789547571687 },
            { lat: 45.495705207587577, lng: -122.90780623484748 },
            { lat: 45.495676916721841, lng: -122.90771801238785 },
            { lat: 45.495643598163475, lng: -122.90762125472762 },
            { lat: 45.4956107462213, lng: -122.90753224926742 },
            { lat: 45.4955774658523, lng: -122.90744762030762 },
            { lat: 45.495538682779262, lng: -122.90735507072833 },
            { lat: 45.495489679775091, lng: -122.90724617698679 },
            { lat: 45.495438045530562, lng: -122.90713976995728 },
            { lat: 45.495383842397175, lng: -122.907035978126 },
            { lat: 45.495327135828326, lng: -122.90693492682017 },
            { lat: 45.495267994300264, lng: -122.90683673805654 },
            { lat: 45.495206489229382, lng: -122.90674153039403 },
            { lat: 45.495142694885928, lng: -122.90664941879071 },
            { lat: 45.495082271420273, lng: -122.90656779801296 },
            { lat: 45.49499119079023, lng: -122.90645405744414 },
            { lat: 45.494896502813155, lng: -122.9063464375642 },
            { lat: 45.494798410741446, lng: -122.90624516935357 },
            { lat: 45.49469712513347, lng: -122.90615047015525 },
            { lat: 45.494625751492109, lng: -122.90608928119637 },
            { lat: 45.494522931195313, lng: -122.90600641450273 },
            { lat: 45.494510712029815, lng: -122.90600343635832 },
            { lat: 45.494498629541319, lng: -122.90600738406951 },
            { lat: 45.494489126300252, lng: -122.90601679419603 },
            { lat: 45.494480650241144, lng: -122.90603387529262 },
            { lat: 45.494314062073755, lng: -122.90588310088785 },
            { lat: 45.494320822226186, lng: -122.90586570668106 },
            { lat: 45.494322522105534, lng: -122.90584941891896 },
            { lat: 45.494319633954071, lng: -122.9058322765231 },
            { lat: 45.494312322526433, lng: -122.90581804095164 },
            { lat: 45.494248549906978, lng: -122.90576329486731 },
            { lat: 45.494202751992233, lng: -122.90571990733147 },
            { lat: 45.494157628183565, lng: -122.90567251008906 },
            { lat: 45.49408966175244, lng: -122.90559592677091 },
            { lat: 45.494023079606087, lng: -122.90551692337435 },
            { lat: 45.493951488926704, lng: -122.90542728485077 },
            { lat: 45.493887951395934, lng: -122.90534336571015 },
            { lat: 45.493819809606507, lng: -122.90524844830328 },
            { lat: 45.493718223585041, lng: -122.90509655435304 },
            { lat: 45.493621324703028, lng: -122.90493859077613 },
            { lat: 45.493529292168922, lng: -122.90477484974591 },
            { lat: 45.493439976859072, lng: -122.90460146337345 },
            { lat: 45.49342931249312, lng: -122.9045903741504 },
            { lat: 45.4934163892396, lng: -122.90458646846268 },
            { lat: 45.493404237451834, lng: -122.90458995971321 },
            { lat: 45.493392111277437, lng: -122.90460140257383 },
            { lat: 45.4932961431255, lng: -122.90442593133827 },
            { lat: 45.493316939427316, lng: -122.90440284201543 },
            { lat: 45.493323294847009, lng: -122.90439197283891 },
            { lat: 45.493327588280692, lng: -122.90437299001701 },
            { lat: 45.493325953469764, lng: -122.904354349074 },
            { lat: 45.493249507639035, lng: -122.90416494745662 },
            { lat: 45.493185074784677, lng: -122.90399023350848 },
            { lat: 45.493125667372666, lng: -122.90381195547987 },
            { lat: 45.493071382726647, lng: -122.90363040544302 },
            { lat: 45.493019417644248, lng: -122.90343425615038 },
            { lat: 45.492975970012822, lng: -122.90324690238005 },
            { lat: 45.492937890386344, lng: -122.90305720230914 },
            { lat: 45.492905241147753, lng: -122.9028654667124 },
            { lat: 45.492909178054326, lng: -122.90277897945874 },
            { lat: 45.492886083206322, lng: -122.90259992214881 },
            { lat: 45.492867514888971, lng: -122.9024173184648 },
            { lat: 45.492814804092014, lng: -122.90170266289935 },
            { lat: 45.492807234259082, lng: -122.90162829808918 },
            { lat: 45.492797910131358, lng: -122.90155433722491 },
            { lat: 45.492759974963924, lng: -122.90132058367747 },
            { lat: 45.492750017002805, lng: -122.90124679009253 },
            { lat: 45.492741809644748, lng: -122.9011725622105 },
            { lat: 45.492735362169746, lng: -122.90109798396037 },
            { lat: 45.4926825647883, lng: -122.90036298979365 }];
        var Tract132429shape = new google.maps.Polygon({
            paths: [Tract132429coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132429shape.setMap(map);

        var Phase132003center = new google.maps.LatLng(45.4938882391417, -122.905442817123);
        var Phase132003coords0 = [
            { lat: 45.488566991163786, lng: -122.90664861360243 },
            { lat: 45.489273705313657, lng: -122.90432865740198 },
            { lat: 45.488855677641205, lng: -122.90189657971236 },
            { lat: 45.489228512463924, lng: -122.90141717335075 },
            { lat: 45.489302907021525, lng: -122.90132516972909 },
            { lat: 45.489366460258459, lng: -122.90125112052353 },
            { lat: 45.489437946949927, lng: -122.90117248503329 },
            { lat: 45.489504319247807, lng: -122.90110361592406 },
            { lat: 45.489571961148407, lng: -122.90103729065127 },
            { lat: 45.489654739346037, lng: -122.90096112464657 },
            { lat: 45.489739191308658, lng: -122.90088876797579 },
            { lat: 45.489825230340784, lng: -122.90082029493482 },
            { lat: 45.489912768117314, lng: -122.90075577583377 },
            { lat: 45.490001714774174, lng: -122.90069527692468 },
            { lat: 45.490091979000553, lng: -122.90063886033339 },
            { lat: 45.490191144582354, lng: -122.90058241623451 },
            { lat: 45.49028385467043, lng: -122.90053468562088 },
            { lat: 45.49035406705957, lng: -122.90050167239522 },
            { lat: 45.4904248171332, lng: -122.90047106740552 },
            { lat: 45.490496064034218, lng: -122.90044288833471 },
            { lat: 45.490567766618369, lng: -122.90041715146499 },
            { lat: 45.490639883478174, lng: -122.90039387166846 },
            { lat: 45.4907123729667, lng: -122.9003730623983 },
            { lat: 45.490785193221718, lng: -122.90035473568126 },
            { lat: 45.490866441397749, lng: -122.90033729713436 },
            { lat: 45.490972501605626, lng: -122.90031924871518 },
            { lat: 45.4925317725012, lng: -122.90009285106611 },
            { lat: 45.492545425683751, lng: -122.90028294398662 },
            { lat: 45.49261167253826, lng: -122.90027366900912 },
            { lat: 45.492624014073279, lng: -122.90027489499825 },
            { lat: 45.492637176655322, lng: -122.90027978815091 },
            { lat: 45.4926535585273, lng: -122.90029209229817 },
            { lat: 45.492666299963041, lng: -122.90030872793282 },
            { lat: 45.492675779966035, lng: -122.90032930112122 },
            { lat: 45.492681663697688, lng: -122.9003542797541 },
            { lat: 45.492740022029722, lng: -122.90115383428953 },
            { lat: 45.492756162301575, lng: -122.90129387961427 },
            { lat: 45.492794097523358, lng: -122.90152763312821 },
            { lat: 45.492811437246921, lng: -122.90166738844417 },
            { lat: 45.49281870948456, lng: -122.90175023326148 },
            { lat: 45.492867300406012, lng: -122.90241487794927 },
            { lat: 45.492885803599542, lng: -122.90259749499596 },
            { lat: 45.492909178054326, lng: -122.90277897945874 },
            { lat: 45.492905241147753, lng: -122.9028654667124 },
            { lat: 45.492926991639628, lng: -122.9029968645082 },
            { lat: 45.492960931138008, lng: -122.90317540518457 },
            { lat: 45.492999610341521, lng: -122.90335198659658 },
            { lat: 45.4930429735571, lng: -122.90352635448629 },
            { lat: 45.493090958347217, lng: -122.90369825778129 },
            { lat: 45.493139852984015, lng: -122.90385625882794 },
            { lat: 45.493196571119057, lng: -122.90402269880556 },
            { lat: 45.493253479925805, lng: -122.90417517909516 },
            { lat: 45.493325727830765, lng: -122.90435345807175 },
            { lat: 45.493327639109829, lng: -122.90437204577704 },
            { lat: 45.4933236285432, lng: -122.90439115326753 },
            { lat: 45.493317435956278, lng: -122.9044022108282 },
            { lat: 45.4932961431255, lng: -122.90442593133827 },
            { lat: 45.493392111277437, lng: -122.90460140257383 },
            { lat: 45.493403853207035, lng: -122.90459019316366 },
            { lat: 45.493415971399585, lng: -122.90458647332733 },
            { lat: 45.493428929909321, lng: -122.90459013524855 },
            { lat: 45.493439696660481, lng: -122.90460102262327 },
            { lat: 45.4935277137814, lng: -122.90477191195724 },
            { lat: 45.493619658937718, lng: -122.90493575219222 },
            { lat: 45.493716473522618, lng: -122.90509382022414 },
            { lat: 45.493817978483655, lng: -122.90524582368656 },
            { lat: 45.493879802983408, lng: -122.90533229076789 },
            { lat: 45.493949562361642, lng: -122.90542480219358 },
            { lat: 45.49402110520078, lng: -122.90551451789955 },
            { lat: 45.494087645181878, lng: -122.90559359308028 },
            { lat: 45.494155570738378, lng: -122.90567024967646 },
            { lat: 45.494200309176286, lng: -122.90571746332951 },
            { lat: 45.494250255456031, lng: -122.90576482451995 },
            { lat: 45.494312264975314, lng: -122.90581796608528 },
            { lat: 45.494319601140823, lng: -122.90583217590337 },
            { lat: 45.494322519099569, lng: -122.90584930809095 },
            { lat: 45.494320847555024, lng: -122.90586560178069 },
            { lat: 45.494314062073755, lng: -122.90588310088785 },
            { lat: 45.494480650241144, lng: -122.90603387529262 },
            { lat: 45.494489198136712, lng: -122.90601669083718 },
            { lat: 45.494498722771908, lng: -122.90600732454268 },
            { lat: 45.494510814193127, lng: -122.90600343251782 },
            { lat: 45.494523797805492, lng: -122.90600691007549 },
            { lat: 45.494647504189949, lng: -122.90610746462279 },
            { lat: 45.494737566021243, lng: -122.90618713846308 },
            { lat: 45.494843760099371, lng: -122.90629076198984 },
            { lat: 45.494946239167874, lng: -122.90640169068274 },
            { lat: 45.494998903649758, lng: -122.90646328404618 },
            { lat: 45.495050421365811, lng: -122.90652680800422 },
            { lat: 45.495144480639304, lng: -122.9066519115247 },
            { lat: 45.495228951644613, lng: -122.90677553554661 },
            { lat: 45.495309304933173, lng: -122.90690459025437 },
            { lat: 45.495385368019818, lng: -122.90703879864301 },
            { lat: 45.495456977627974, lng: -122.90717787264126 },
            { lat: 45.4955239800403, lng: -122.90732151372984 },
            { lat: 45.495586231428767, lng: -122.90746941358246 },
            { lat: 45.495644295911177, lng: -122.90762321026691 },
            { lat: 45.495696590396705, lng: -122.90777871062633 },
            { lat: 45.495743763328967, lng: -122.90793748835272 },
            { lat: 45.495792973736791, lng: -122.90812579579759 },
            { lat: 45.495854001522027, lng: -122.90837661882622 },
            { lat: 45.495911254559566, lng: -122.90863078806015 },
            { lat: 45.495949399694865, lng: -122.90881244422927 },
            { lat: 45.495982502255416, lng: -122.90898021701963 },
            { lat: 45.495982173510463, lng: -122.90899899738864 },
            { lat: 45.495976463770354, lng: -122.90901593867099 },
            { lat: 45.495967103291356, lng: -122.90902749698294 },
            { lat: 45.495953873868423, lng: -122.90903397288781 },
            { lat: 45.495993083525, lng: -122.90924915973608 },
            { lat: 45.496006087063435, lng: -122.90924568883503 },
            { lat: 45.496018276193318, lng: -122.90924890625625 },
            { lat: 45.496029237122258, lng: -122.90925939507184 },
            { lat: 45.496035923084484, lng: -122.90927423975056 },
            { lat: 45.496059905685144, lng: -122.90941555302621 },
            { lat: 45.496086139556461, lng: -122.90958204889674 },
            { lat: 45.496113250474664, lng: -122.90976766941866 },
            { lat: 45.496140586465287, lng: -122.90997255390192 },
            { lat: 45.496163170043232, lng: -122.91015939587139 },
            { lat: 45.496185567517294, lng: -122.91036598126955 },
            { lat: 45.496184260629072, lng: -122.9103858357453 },
            { lat: 45.496177598449314, lng: -122.91040205871538 },
            { lat: 45.496166847610432, lng: -122.91041297834306 },
            { lat: 45.496153442308071, lng: -122.91041733927729 },
            { lat: 45.496176110690058, lng: -122.91063728273259 },
            { lat: 45.496190290658859, lng: -122.91063607323427 },
            { lat: 45.496202729045642, lng: -122.91064240710668 },
            { lat: 45.496212251683005, lng: -122.91065542947234 },
            { lat: 45.496217187706428, lng: -122.91067285539867 },
            { lat: 45.496368224335377, lng: -122.91213831828294 },
            { lat: 45.4963681374883, lng: -122.91215211584341 },
            { lat: 45.49636536908357, lng: -122.91216447021063 },
            { lat: 45.496360785841773, lng: -122.91217430104793 },
            { lat: 45.496354558626052, lng: -122.91218209289094 },
            { lat: 45.4963471181352, lng: -122.9121873068258 },
            { lat: 45.496338148101565, lng: -122.91218964025683 },
            { lat: 45.494188736421521, lng: -122.91229871052018 },
            { lat: 45.494188839791853, lng: -122.91230650860861 },
            { lat: 45.488594246984889, lng: -122.91245643056742 },
            { lat: 45.488566991163786, lng: -122.90664861360243 }];
        var Phase132003shape = new google.maps.Polygon({
            paths: [Phase132003coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Phase132003shape.setMap(map);

        var Section132016center = new google.maps.LatLng(45.4939326217742, -122.902829934423);
        var Section132016coords0 = [
            { lat: 45.492978636577433, lng: -122.90042823809141 },
            { lat: 45.492979630537377, lng: -122.90040569569874 },
            { lat: 45.49298323028156, lng: -122.90038138751893 },
            { lat: 45.49298937414197, lng: -122.90035813296222 },
            { lat: 45.492997049323137, lng: -122.90033835753829 },
            { lat: 45.493007611089425, lng: -122.90031856935279 },
            { lat: 45.49301894100708, lng: -122.90030273743604 },
            { lat: 45.493031695076617, lng: -122.90028927229467 },
            { lat: 45.493047079268941, lng: -122.90027749842332 },
            { lat: 45.493069717380465, lng: -122.90026703247395 },
            { lat: 45.493091795389141, lng: -122.90026343026375 },
            { lat: 45.493158837393949, lng: -122.90026627338261 },
            { lat: 45.493221424672022, lng: -122.90027288620568 },
            { lat: 45.493306341977807, lng: -122.90028795527454 },
            { lat: 45.493457161899123, lng: -122.90032737889392 },
            { lat: 45.493568019724776, lng: -122.90034887755561 },
            { lat: 45.49359763515379, lng: -122.90035719222311 },
            { lat: 45.493626855244784, lng: -122.90036796984643 },
            { lat: 45.493680613440084, lng: -122.90039490884971 },
            { lat: 45.493749845989342, lng: -122.90044025995431 },
            { lat: 45.493821278112407, lng: -122.90049370165583 },
            { lat: 45.493890607496873, lng: -122.90055247584185 },
            { lat: 45.493952929923353, lng: -122.90061168109811 },
            { lat: 45.494013117107521, lng: -122.9006751957865 },
            { lat: 45.494071021790838, lng: -122.90074286452058 },
            { lat: 45.494126502298968, lng: -122.90081452174867 },
            { lat: 45.49417942288828, lng: -122.90088999215907 },
            { lat: 45.494225888460491, lng: -122.90096288210178 },
            { lat: 45.494266385945835, lng: -122.90103228433082 },
            { lat: 45.494333549175174, lng: -122.90115583310939 },
            { lat: 45.494324100857007, lng: -122.9013004689228 },
            { lat: 45.494283657979409, lng: -122.90135763988518 },
            { lat: 45.494406484782068, lng: -122.90153044148741 },
            { lat: 45.494408414666026, lng: -122.90152767051136 },
            { lat: 45.494507097956458, lng: -122.90155282083668 },
            { lat: 45.494619695566861, lng: -122.90176049754582 },
            { lat: 45.49466919801251, lng: -122.9018467494016 },
            { lat: 45.494734450738036, lng: -122.90195045672823 },
            { lat: 45.494799881615847, lng: -122.90204372921504 },
            { lat: 45.494846198866711, lng: -122.90209907904318 },
            { lat: 45.494895534012812, lng: -122.90214887858677 },
            { lat: 45.494926447969469, lng: -122.90217595479092 },
            { lat: 45.495019271842189, lng: -122.90225151090925 },
            { lat: 45.49512346920406, lng: -122.90234784642475 },
            { lat: 45.495184207512828, lng: -122.902400565051 },
            { lat: 45.495251993467129, lng: -122.90245435840035 },
            { lat: 45.495315436269827, lng: -122.90250018699074 },
            { lat: 45.495385964186035, lng: -122.9025463061388 },
            { lat: 45.495451725656842, lng: -122.90258496593896 },
            { lat: 45.495506047261777, lng: -122.9027153938293 },
            { lat: 45.495501329754084, lng: -122.90273864978407 },
            { lat: 45.49559619931771, lng: -122.90277755804438 },
            { lat: 45.495429724627058, lng: -122.90359816055856 },
            { lat: 45.495398829459489, lng: -122.90373790838512 },
            { lat: 45.495366491589593, lng: -122.90386592886536 },
            { lat: 45.495330689106567, lng: -122.90399207133598 },
            { lat: 45.495291475793394, lng: -122.90411614630747 },
            { lat: 45.495248910556654, lng: -122.90423796739734 },
            { lat: 45.495206699704191, lng: -122.90434825883008 },
            { lat: 45.4951578724518, lng: -122.90446523435796 },
            { lat: 45.495105893975257, lng: -122.90457943161972 },
            { lat: 45.495055184347756, lng: -122.90468223013757 },
            { lat: 45.495006455547006, lng: -122.90477414164695 },
            { lat: 45.494960338609587, lng: -122.90485568561009 },
            { lat: 45.494917387956761, lng: -122.9049273748258 },
            { lat: 45.494820588201115, lng: -122.90508271510831 },
            { lat: 45.494747044189239, lng: -122.90521091718139 },
            { lat: 45.494704776902786, lng: -122.90528992689477 },
            { lat: 45.49466393761201, lng: -122.9053704405957 },
            { lat: 45.494590080016856, lng: -122.90552798756939 },
            { lat: 45.494506610583393, lng: -122.90545299186826 },
            { lat: 45.494490138372065, lng: -122.90548628335267 },
            { lat: 45.494480727230091, lng: -122.90549696901432 },
            { lat: 45.494469902872005, lng: -122.90550447688508 },
            { lat: 45.494457097129612, lng: -122.90550862225561 },
            { lat: 45.494445053765865, lng: -122.90550851693972 },
            { lat: 45.4944322848514, lng: -122.90550414792867 },
            { lat: 45.494420612320127, lng: -122.90549558846678 },
            { lat: 45.494354960655869, lng: -122.90542774563863 },
            { lat: 45.494288786931293, lng: -122.90535554001947 },
            { lat: 45.494230390775343, lng: -122.90528845918145 },
            { lat: 45.494166836484773, lng: -122.90521164362976 },
            { lat: 45.494110870002473, lng: -122.90514049888665 },
            { lat: 45.494050093837387, lng: -122.905059265235 },
            { lat: 45.493996696773479, lng: -122.90498423425518 },
            { lat: 45.493938850487638, lng: -122.90489878536413 },
            { lat: 45.4938660489627, lng: -122.90478452126517 },
            { lat: 45.4937960373428, lng: -122.90466678531124 },
            { lat: 45.493728897474085, lng: -122.90454571515224 },
            { lat: 45.493668418485242, lng: -122.90442879701158 },
            { lat: 45.493663332722143, lng: -122.90441500481757 },
            { lat: 45.493660086739212, lng: -122.90439851432744 },
            { lat: 45.493659398350658, lng: -122.90438297223578 },
            { lat: 45.49366116366884, lng: -122.90436603301973 },
            { lat: 45.493665486328005, lng: -122.90435004984531 },
            { lat: 45.493671462078922, lng: -122.90433699908958 },
            { lat: 45.493679142248332, lng: -122.90432589650322 },
            { lat: 45.493690012679892, lng: -122.90431524124928 },
            { lat: 45.493596233926972, lng: -122.90410889240545 },
            { lat: 45.493586105286141, lng: -122.90411776962974 },
            { lat: 45.493575924143087, lng: -122.90412351059015 },
            { lat: 45.493565143780444, lng: -122.90412626115705 },
            { lat: 45.493554193981005, lng: -122.90412591167474 },
            { lat: 45.493543511282354, lng: -122.90412247607792 },
            { lat: 45.493533521573205, lng: -122.90411609133569 },
            { lat: 45.493524623114631, lng: -122.90410701199083 },
            { lat: 45.493516516953619, lng: -122.90409434732132 },
            { lat: 45.493477938917657, lng: -122.90399884325728 },
            { lat: 45.4934346611964, lng: -122.9038838066628 },
            { lat: 45.493393742115622, lng: -122.90376703819406 },
            { lat: 45.493358618563676, lng: -122.90365946439317 },
            { lat: 45.493322295763356, lng: -122.90353966217984 },
            { lat: 45.493291402643727, lng: -122.90342949551955 },
            { lat: 45.493262557936177, lng: -122.90331821181871 },
            { lat: 45.493233218445361, lng: -122.903194601465 },
            { lat: 45.493208738642792, lng: -122.90308122341018 },
            { lat: 45.493184243430093, lng: -122.90295549866735 },
            { lat: 45.49316420319559, lng: -122.90284037206459 },
            { lat: 45.493146299362564, lng: -122.90272453594865 },
            { lat: 45.493138760634054, lng: -122.90266593579294 },
            { lat: 45.493139855738804, lng: -122.90264732724614 },
            { lat: 45.493144030444071, lng: -122.90262962217879 },
            { lat: 45.493152464698831, lng: -122.9026114565812 },
            { lat: 45.4931631819919, lng: -122.90259816386506 },
            { lat: 45.493175942523131, lng: -122.90258923538633 },
            { lat: 45.493192044792814, lng: -122.90258456421282 },
            { lat: 45.493166682519544, lng: -122.9023415461095 },
            { lat: 45.493150753778551, lng: -122.90234386195141 },
            { lat: 45.493137073770292, lng: -122.90234206604883 },
            { lat: 45.493122733046157, lng: -122.9023358970274 },
            { lat: 45.493110647243931, lng: -122.90232660912429 },
            { lat: 45.493099161260758, lng: -122.90231293040036 },
            { lat: 45.493090610331457, lng: -122.90229764190195 },
            { lat: 45.493083823439626, lng: -122.90227864993015 },
            { lat: 45.493080180439591, lng: -122.90225981577504 },
            { lat: 45.493070406864916, lng: -122.90211999457807 },
            { lat: 45.493063706483788, lng: -122.90198122446432 },
            { lat: 45.493060532558978, lng: -122.90186539685837 },
            { lat: 45.493057597284206, lng: -122.90163099410033 },
            { lat: 45.49305005306082, lng: -122.90144243163478 },
            { lat: 45.492978636577433, lng: -122.90042823809141 }];
        var Section132016shape = new google.maps.Polygon({
            paths: [Section132016coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132016shape.setMap(map);

        var Section132014center = new google.maps.LatLng(45.4953907436751, -122.905427672871);
        var Section132014coords0 = [
            { lat: 45.494590080016856, lng: -122.90552798756939 },
            { lat: 45.494664722242184, lng: -122.90536885231208 },
            { lat: 45.494705589709639, lng: -122.9052883675201 },
            { lat: 45.4947478846462, lng: -122.90520938772603 },
            { lat: 45.494821473522784, lng: -122.90508123771079 },
            { lat: 45.494917214965383, lng: -122.90492765581003 },
            { lat: 45.494960170982594, lng: -122.90485597309295 },
            { lat: 45.495010811839862, lng: -122.90476617566041 },
            { lat: 45.495059354589351, lng: -122.9046740653163 },
            { lat: 45.495109856143308, lng: -122.90457105991013 },
            { lat: 45.495161603492214, lng: -122.9044566506192 },
            { lat: 45.495206570047323, lng: -122.9043485835894 },
            { lat: 45.495248789152825, lng: -122.90423829854366 },
            { lat: 45.495291363505373, lng: -122.90411648389453 },
            { lat: 45.495330586103044, lng: -122.90399241485665 },
            { lat: 45.495366398025318, lng: -122.90386627780363 },
            { lat: 45.495398745474972, lng: -122.90373826221679 },
            { lat: 45.495429651099911, lng: -122.90359851906544 },
            { lat: 45.49559619931771, lng: -122.90277755804438 },
            { lat: 45.495691068865689, lng: -122.90281646643463 },
            { lat: 45.495693891320045, lng: -122.9028025525536 },
            { lat: 45.495774742607765, lng: -122.90276411565723 },
            { lat: 45.495865152550117, lng: -122.90278263629105 },
            { lat: 45.495953617581563, lng: -122.90279356942587 },
            { lat: 45.496049146370829, lng: -122.90279750779983 },
            { lat: 45.496110958814462, lng: -122.90279284524473 },
            { lat: 45.496150644344233, lng: -122.90278504691095 },
            { lat: 45.496189879678582, lng: -122.9027735295561 },
            { lat: 45.496290400872006, lng: -122.90273121324634 },
            { lat: 45.496376729161632, lng: -122.90270196640967 },
            { lat: 45.497057819029827, lng: -122.90255986969471 },
            { lat: 45.497506415519375, lng: -122.90689497683775 },
            { lat: 45.496943773602062, lng: -122.9070126725403 },
            { lat: 45.496825088616696, lng: -122.90737525911675 },
            { lat: 45.4960026105087, lng: -122.90787883785123 },
            { lat: 45.495968986762925, lng: -122.90775659930321 },
            { lat: 45.495934648866211, lng: -122.90764242217942 },
            { lat: 45.495897886094127, lng: -122.90752978196775 },
            { lat: 45.495858732421318, lng: -122.90741878276279 },
            { lat: 45.49581722403191, lng: -122.90730952714196 },
            { lat: 45.495773399286144, lng: -122.90720211607075 },
            { lat: 45.495731582586757, lng: -122.90710615384324 },
            { lat: 45.495674080011455, lng: -122.90698081812623 },
            { lat: 45.495669502979766, lng: -122.90695524168848 },
            { lat: 45.495669609791584, lng: -122.9069412219803 },
            { lat: 45.495671480086564, lng: -122.9069274559704 },
            { lat: 45.49567505343024, lng: -122.90691438847699 },
            { lat: 45.495680214357883, lng: -122.90690244174758 },
            { lat: 45.495694386329369, lng: -122.90688330848613 },
            { lat: 45.495589821518621, lng: -122.90668771324236 },
            { lat: 45.495572934674854, lng: -122.90670208111457 },
            { lat: 45.495563451302296, lng: -122.90670592116859 },
            { lat: 45.49555363764815, lng: -122.90670728506716 },
            { lat: 45.495535321670232, lng: -122.90670301353937 },
            { lat: 45.495526328588682, lng: -122.90669726366417 },
            { lat: 45.49551820476696, lng: -122.90668931738684 },
            { lat: 45.495419587561109, lng: -122.90653159114615 },
            { lat: 45.495331291682483, lng: -122.90640174798871 },
            { lat: 45.495233153052432, lng: -122.9062700153344 },
            { lat: 45.495130771608885, lng: -122.90614498183007 },
            { lat: 45.495024373304467, lng: -122.90602692338423 },
            { lat: 45.494920774528573, lng: -122.90592241475018 },
            { lat: 45.4948140280314, lng: -122.90582451989002 },
            { lat: 45.494687987078294, lng: -122.90572022410467 },
            { lat: 45.49468000589961, lng: -122.90571199088127 },
            { lat: 45.494672514964662, lng: -122.90570062972523 },
            { lat: 45.494667250914929, lng: -122.90568877452134 },
            { lat: 45.494663258114585, lng: -122.90567427307576 },
            { lat: 45.494661462224059, lng: -122.90566048729352 },
            { lat: 45.494661537217326, lng: -122.90564491450284 },
            { lat: 45.494663465708477, lng: -122.90563116498093 },
            { lat: 45.494667094263306, lng: -122.9056181285149 },
            { lat: 45.494673549399423, lng: -122.90560298349084 },
            { lat: 45.494590080016856, lng: -122.90552798756939 }];
        var Section132014shape = new google.maps.Polygon({
            paths: [Section132014coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132014shape.setMap(map);

        var Phase132000center = new google.maps.LatLng(45.4969911971779, -122.910992406179);
        var Phase132000coords0 = [
            { lat: 45.4960026105087, lng: -122.90787883785123 },
            { lat: 45.496825088616696, lng: -122.90737525911675 },
            { lat: 45.496943773602062, lng: -122.9070126725403 },
            { lat: 45.497506415519375, lng: -122.90689497683775 },
            { lat: 45.498023618761053, lng: -122.91189512875651 },
            { lat: 45.497850161883058, lng: -122.91193152317732 },
            { lat: 45.497828282591819, lng: -122.91193942323625 },
            { lat: 45.497809084468692, lng: -122.9119504122805 },
            { lat: 45.497781774789, lng: -122.91197400052836 },
            { lat: 45.497758264545581, lng: -122.91200477092949 },
            { lat: 45.497741413558387, lng: -122.91203693088207 },
            { lat: 45.497720905167412, lng: -122.91209089364104 },
            { lat: 45.497703621241, lng: -122.9121185373771 },
            { lat: 45.497691428970448, lng: -122.91213174303795 },
            { lat: 45.4976780373289, lng: -122.91214234241626 },
            { lat: 45.49766371984915, lng: -122.91215011901487 },
            { lat: 45.497647250728754, lng: -122.91215522519182 },
            { lat: 45.496681227458545, lng: -122.91220525123703 },
            { lat: 45.496667695946542, lng: -122.91220305606009 },
            { lat: 45.496654879513372, lng: -122.91219650529005 },
            { lat: 45.496642593267644, lng: -122.91218490402547 },
            { lat: 45.496633375038449, lng: -122.91217064860903 },
            { lat: 45.496626273778766, lng: -122.91215226830752 },
            { lat: 45.496622756314132, lng: -122.91213355972916 },
            { lat: 45.496418879719144, lng: -122.91016063728567 },
            { lat: 45.496384704001358, lng: -122.90987599182199 },
            { lat: 45.49634567183697, lng: -122.90959261202897 },
            { lat: 45.496313974959158, lng: -122.90938570162194 },
            { lat: 45.49628291245444, lng: -122.90919832544738 },
            { lat: 45.49623584556867, lng: -122.90893725398023 },
            { lat: 45.49618080791786, lng: -122.9086592980177 },
            { lat: 45.4961848191921, lng: -122.90865795813858 },
            { lat: 45.496143731300705, lng: -122.90846571179046 },
            { lat: 45.496097948712915, lng: -122.90826415000885 },
            { lat: 45.496054141574071, lng: -122.90808194516427 },
            { lat: 45.4960026105087, lng: -122.90787883785123 }];
        var Phase132000shape = new google.maps.Polygon({
            paths: [Phase132000coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Phase132000shape.setMap(map);

        var Tract132431center = new google.maps.LatLng(45.4887504417969, -122.897496158912);
        var Tract132431coords0 = [
            { lat: 45.488079971201493, lng: -122.9000482592258 },
            { lat: 45.488080830002538, lng: -122.89997614703584 },
            { lat: 45.488083464793313, lng: -122.89990412185108 },
            { lat: 45.488087872340756, lng: -122.89983227205033 },
            { lat: 45.488094047236594, lng: -122.89976068579723 },
            { lat: 45.488101981903888, lng: -122.89968945093213 },
            { lat: 45.488111666606308, lng: -122.89961865486428 },
            { lat: 45.488123089460231, lng: -122.89954838446467 },
            { lat: 45.488137802973313, lng: -122.89947102761745 },
            { lat: 45.489351044015791, lng: -122.89387611682824 },
            { lat: 45.489373800196873, lng: -122.89376421150739 },
            { lat: 45.489392265007567, lng: -122.89366161765233 },
            { lat: 45.489407059706075, lng: -122.89356865756174 },
            { lat: 45.489420115935118, lng: -122.89347517252419 },
            { lat: 45.48943142451791, lng: -122.89338122824729 },
            { lat: 45.489440977505971, lng: -122.89328689076152 },
            { lat: 45.489454209308505, lng: -122.89310785960018 },
            { lat: 45.4894586572451, lng: -122.89301275941895 },
            { lat: 45.489461330445906, lng: -122.89291752501492 },
            { lat: 45.48946153198083, lng: -122.89273750837808 },
            { lat: 45.489459072029504, lng: -122.89264226235734 },
            { lat: 45.489454837050864, lng: -122.89254714252603 },
            { lat: 45.489442935424641, lng: -122.89237855997928 },
            { lat: 45.489419322687425, lng: -122.8921385316891 },
            { lat: 45.489496275347548, lng: -122.89212767511522 },
            { lat: 45.489570273710484, lng: -122.89212110898214 },
            { lat: 45.489583569244594, lng: -122.89223131143511 },
            { lat: 45.489593196105218, lng: -122.8923275600239 },
            { lat: 45.489601262502248, lng: -122.8924250501955 },
            { lat: 45.489607561288771, lng: -122.89252280326431 },
            { lat: 45.489612088291054, lng: -122.89262075445596 },
            { lat: 45.489614840509311, lng: -122.89271883886465 },
            { lat: 45.489615816119851, lng: -122.89281699149643 },
            { lat: 45.489614815709338, lng: -122.89292605088465 },
            { lat: 45.489612040012972, lng: -122.89302413395599 },
            { lat: 45.489606874526245, lng: -122.89313295507644 },
            { lat: 45.489600355718615, lng: -122.89323067898175 },
            { lat: 45.489592069901377, lng: -122.89332813194767 },
            { lat: 45.489582022564946, lng: -122.89342524939872 },
            { lat: 45.489570220367007, lng: -122.89352196698187 },
            { lat: 45.489556671128092, lng: -122.89361822060917 },
            { lat: 45.489539578378341, lng: -122.89372454737507 },
            { lat: 45.489518314777342, lng: -122.89384065052114 },
            { lat: 45.489496763591866, lng: -122.89394532670217 },
            { lat: 45.488289080247391, lng: -122.89951383844317 },
            { lat: 45.488274694206723, lng: -122.89958679185675 },
            { lat: 45.488262432266929, lng: -122.89966052521217 },
            { lat: 45.4882523152067, lng: -122.89973491356304 },
            { lat: 45.488244360169993, lng: -122.89980983085334 },
            { lat: 45.488236161387448, lng: -122.8999304815777 },
            { lat: 45.488233566226974, lng: -122.9000516378855 },
            { lat: 45.488236585944129, lng: -122.90017277430726 },
            { lat: 45.488245931558247, lng: -122.90030087234298 },
            { lat: 45.488260463424929, lng: -122.90042031116707 },
            { lat: 45.48828192609465, lng: -122.90054542940871 },
            { lat: 45.488307702316945, lng: -122.90066096960869 },
            { lat: 45.488340886526814, lng: -122.90078080236259 },
            { lat: 45.488372587499718, lng: -122.90087681610956 },
            { lat: 45.488410808323891, lng: -122.9009766218972 },
            { lat: 45.488450327271131, lng: -122.90106658425549 },
            { lat: 45.488496637340248, lng: -122.90115920763756 },
            { lat: 45.4885297068579, lng: -122.90121862232056 },
            { lat: 45.488560917708277, lng: -122.90127040088174 },
            { lat: 45.4888096036468, lng: -122.90166139242665 },
            { lat: 45.4886956942941, lng: -122.90180787090721 },
            { lat: 45.488447523320104, lng: -122.90141770974103 },
            { lat: 45.488386140125961, lng: -122.90131312296242 },
            { lat: 45.488342559353178, lng: -122.9012293806322 },
            { lat: 45.488302013631561, lng: -122.90114261166046 },
            { lat: 45.488264606754143, lng: -122.90105303817315 },
            { lat: 45.4882304344786, lng: -122.90096088947405 },
            { lat: 45.488195138106072, lng: -122.90085167254635 },
            { lat: 45.488164384593446, lng: -122.90073971356786 },
            { lat: 45.488138278745183, lng: -122.90062539408565 },
            { lat: 45.488118185232366, lng: -122.90051690978578 },
            { lat: 45.488101302899224, lng: -122.90039913730975 },
            { lat: 45.488089283205042, lng: -122.90028016497649 },
            { lat: 45.488082488385317, lng: -122.90016839922039 },
            { lat: 45.488079971201493, lng: -122.9000482592258 }];
        var Tract132431shape = new google.maps.Polygon({
            paths: [Tract132431coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132431shape.setMap(map);

        var Tract132430center = new google.maps.LatLng(45.4919532722095, -122.901376133598);
        var Tract132430coords0 = [
            { lat: 45.486228171323788, lng: -122.90340930992188 },
            { lat: 45.486368958780794, lng: -122.90340389901445 },
            { lat: 45.486451039406226, lng: -122.90339848708527 },
            { lat: 45.486541174654327, lng: -122.90338893791903 },
            { lat: 45.486631073756421, lng: -122.9033756295111 },
            { lat: 45.486720659156809, lng: -122.90335857332478 },
            { lat: 45.486817940102895, lng: -122.9033357096059 },
            { lat: 45.486914655872155, lng: -122.90330842672293 },
            { lat: 45.48701070716826, lng: -122.90327675266428 },
            { lat: 45.487105995376538, lng: -122.90324071992715 },
            { lat: 45.4872004226653, lng: -122.9032003654843 },
            { lat: 45.487293892086285, lng: -122.90315573074609 },
            { lat: 45.487386307674207, lng: -122.9031068615182 },
            { lat: 45.487477574545267, lng: -122.90305380795449 },
            { lat: 45.487567598994673, lng: -122.9029966245058 },
            { lat: 45.487656288592746, lng: -122.9029353698639 },
            { lat: 45.487743552279944, lng: -122.90287010690146 },
            { lat: 45.487864560596016, lng: -122.90277092099512 },
            { lat: 45.487927307207386, lng: -122.90271527785129 },
            { lat: 45.487989095184865, lng: -122.90265750702747 },
            { lat: 45.488049888841971, lng: -122.9025976418831 },
            { lat: 45.488109653066459, lng: -122.90253571698764 },
            { lat: 45.488219610746668, lng: -122.90241325531927 },
            { lat: 45.488325546262814, lng: -122.90228382542708 },
            { lat: 45.489149885037811, lng: -122.90122436105479 },
            { lat: 45.489252814930282, lng: -122.90110081769357 },
            { lat: 45.489359277391365, lng: -122.90098348122574 },
            { lat: 45.489441331392044, lng: -122.90089967527018 },
            { lat: 45.4895251882664, lng: -122.9008195576159 },
            { lat: 45.489610766022764, lng: -122.90074320661493 },
            { lat: 45.48969798098647, lng: -122.90067069693744 },
            { lat: 45.489786747881659, lng: -122.9006020994987 },
            { lat: 45.489876979914669, lng: -122.90053748138965 },
            { lat: 45.489968588858822, lng: -122.90047690581135 },
            { lat: 45.490069281767958, lng: -122.90041591277352 },
            { lat: 45.490155577927894, lng: -122.90036811523396 },
            { lat: 45.490242802188654, lng: -122.900323853793 },
            { lat: 45.490330882884209, lng: -122.90028316483354 },
            { lat: 45.490419747644587, lng: -122.90024608180356 },
            { lat: 45.490509323455214, lng: -122.90021263518884 },
            { lat: 45.49060776697381, lng: -122.90018032752114 },
            { lat: 45.490698591083095, lng: -122.90015456964085 },
            { lat: 45.490789897132423, lng: -122.90013252342027 },
            { lat: 45.490864908141283, lng: -122.90011725910877 },
            { lat: 45.490948523007646, lng: -122.90010323735549 },
            { lat: 45.492516168478723, lng: -122.89987560212597 },
            { lat: 45.492507331242891, lng: -122.89975256720344 },
            { lat: 45.492584540945629, lng: -122.89973546130166 },
            { lat: 45.492604094823093, lng: -122.89972459340019 },
            { lat: 45.492621689182791, lng: -122.89970830636956 },
            { lat: 45.492639371731713, lng: -122.89968223704015 },
            { lat: 45.492652005964558, lng: -122.89965078850106 },
            { lat: 45.4926588169256, lng: -122.89961588973279 },
            { lat: 45.492659386845517, lng: -122.89957968134837 },
            { lat: 45.492943909488027, lng: -122.89952983958649 },
            { lat: 45.492946422593675, lng: -122.89955030393367 },
            { lat: 45.492951100919193, lng: -122.8995705811068 },
            { lat: 45.492957805032013, lng: -122.89958967427046 },
            { lat: 45.492966392165165, lng: -122.89960717682715 },
            { lat: 45.492976679451907, lng: -122.8996227160515 },
            { lat: 45.492987211252974, lng: -122.8996347482219 },
            { lat: 45.493000099111448, lng: -122.89964568569228 },
            { lat: 45.493013969318589, lng: -122.89965383976219 },
            { lat: 45.493027048619453, lng: -122.89965865381025 },
            { lat: 45.493041959310169, lng: -122.8996610930128 },
            { lat: 45.493125597877757, lng: -122.89966155266723 },
            { lat: 45.493209546670521, lng: -122.89966700552645 },
            { lat: 45.49326752791449, lng: -122.89967386260876 },
            { lat: 45.493331744702594, lng: -122.89968443047923 },
            { lat: 45.493395672295712, lng: -122.89969809060189 },
            { lat: 45.493465570759291, lng: -122.89971666941619 },
            { lat: 45.493534932794624, lng: -122.89973894487608 },
            { lat: 45.493603661733438, lng: -122.89976488595015 },
            { lat: 45.49370841157635, lng: -122.89981210113608 },
            { lat: 45.49409505892428, lng: -122.90000999762373 },
            { lat: 45.494180377275, lng: -122.90008849245434 },
            { lat: 45.494265044097794, lng: -122.90017576115866 },
            { lat: 45.494270050486527, lng: -122.90016647675226 },
            { lat: 45.494296113200974, lng: -122.90019535093103 },
            { lat: 45.494290993001577, lng: -122.90020454773519 },
            { lat: 45.494301652270657, lng: -122.90021666692084 },
            { lat: 45.494430735090589, lng: -122.90045762450562 },
            { lat: 45.494479395114979, lng: -122.90052958927876 },
            { lat: 45.494566409084818, lng: -122.90066599422185 },
            { lat: 45.494660726297354, lng: -122.90079838911898 },
            { lat: 45.494700536871832, lng: -122.90086317010919 },
            { lat: 45.494736502601391, lng: -122.90093234821039 },
            { lat: 45.494897686076463, lng: -122.90127832518945 },
            { lat: 45.494993177742856, lng: -122.9013195615731 },
            { lat: 45.494997329655973, lng: -122.90131446433843 },
            { lat: 45.495106667402545, lng: -122.9014945224675 },
            { lat: 45.49510251548157, lng: -122.90149961969882 },
            { lat: 45.495092077663173, lng: -122.90167015079857 },
            { lat: 45.495132199225544, lng: -122.9017214789456 },
            { lat: 45.495172375558525, lng: -122.90176942956374 },
            { lat: 45.495213671171449, lng: -122.90181541761028 },
            { lat: 45.495256038667208, lng: -122.90185939029807 },
            { lat: 45.495299429418296, lng: -122.9019012971527 },
            { lat: 45.495343793622666, lng: -122.90194109007062 },
            { lat: 45.495389080360887, lng: -122.90197872337403 },
            { lat: 45.495435237654519, lng: -122.90201415386375 },
            { lat: 45.495508643141775, lng: -122.90206479455682 },
            { lat: 45.495589255236581, lng: -122.90211286960825 },
            { lat: 45.495666104114115, lng: -122.90215183686333 },
            { lat: 45.495749920100266, lng: -122.90218713725073 },
            { lat: 45.495829932120522, lng: -122.90221414728272 },
            { lat: 45.495901164488096, lng: -122.9022315891895 },
            { lat: 45.49597306783749, lng: -122.90224207928196 },
            { lat: 45.496045307000138, lng: -122.90224556863545 },
            { lat: 45.496088671624413, lng: -122.90224429375448 },
            { lat: 45.49613196312815, lng: -122.90224049424816 },
            { lat: 45.496179890665807, lng: -122.90223331948688 },
            { lat: 45.496222789473947, lng: -122.90222421628128 },
            { lat: 45.496342179802447, lng: -122.90219239055793 },
            { lat: 45.496367799486173, lng: -122.90218747517682 },
            { lat: 45.497001640460454, lng: -122.90201709241593 },
            { lat: 45.497057819029827, lng: -122.90255986969471 },
            { lat: 45.496376729161632, lng: -122.90270196640967 },
            { lat: 45.496289427353119, lng: -122.90273158476241 },
            { lat: 45.496217214936145, lng: -122.90276318550643 },
            { lat: 45.496185505879239, lng: -122.90277500540104 },
            { lat: 45.496139015609494, lng: -122.90278772746495 },
            { lat: 45.496095600208257, lng: -122.90279484788745 },
            { lat: 45.496027986484364, lng: -122.90279733688395 },
            { lat: 45.495939259368768, lng: -122.9027922731705 },
            { lat: 45.495856744076846, lng: -122.90278122928527 },
            { lat: 45.495774742607765, lng: -122.90276411565723 },
            { lat: 45.495693891320045, lng: -122.9028025525536 },
            { lat: 45.495691068865689, lng: -122.90281646643463 },
            { lat: 45.495501329754084, lng: -122.90273864978407 },
            { lat: 45.495506047261777, lng: -122.9027153938293 },
            { lat: 45.495451725656842, lng: -122.90258496593896 },
            { lat: 45.495394595871154, lng: -122.90255161475771 },
            { lat: 45.4953355984752, lng: -122.9025138780806 },
            { lat: 45.495277534925208, lng: -122.90247331864204 },
            { lat: 45.495220471999588, lng: -122.90242998309765 },
            { lat: 45.495136897008415, lng: -122.90235988448386 },
            { lat: 45.495017348293871, lng: -122.90224983720421 },
            { lat: 45.494918066107687, lng: -122.90216890471912 },
            { lat: 45.494870793060912, lng: -122.90212498051925 },
            { lat: 45.494832242451032, lng: -122.9020833528496 },
            { lat: 45.494792731307193, lng: -122.90203432833876 },
            { lat: 45.49475094004783, lng: -122.90197506420864 },
            { lat: 45.494706437279085, lng: -122.90190721864573 },
            { lat: 45.494667776459806, lng: -122.90184436936187 },
            { lat: 45.494630470817583, lng: -122.90177988556634 },
            { lat: 45.494507097956458, lng: -122.90155282083668 },
            { lat: 45.494408414666026, lng: -122.90152767051136 },
            { lat: 45.494406484782068, lng: -122.90153044148741 },
            { lat: 45.494283657979409, lng: -122.90135763988518 },
            { lat: 45.494324100857007, lng: -122.9013004689228 },
            { lat: 45.494333549175174, lng: -122.90115583310939 },
            { lat: 45.494268263987259, lng: -122.90103565033755 },
            { lat: 45.494227863919704, lng: -122.90096613341564 },
            { lat: 45.494177532059211, lng: -122.90088716395114 },
            { lat: 45.494124515425554, lng: -122.90081182994535 },
            { lat: 45.494068943734334, lng: -122.90074031570744 },
            { lat: 45.494010952952252, lng: -122.9006727961993 },
            { lat: 45.493950684964354, lng: -122.90060943660737 },
            { lat: 45.493883403531157, lng: -122.90054603297911 },
            { lat: 45.493818883091834, lng: -122.90049179638282 },
            { lat: 45.493747383014004, lng: -122.90043853871695 },
            { lat: 45.493678640229184, lng: -122.9003937478432 },
            { lat: 45.493628025393, lng: -122.90036845627618 },
            { lat: 45.493598823402387, lng: -122.90035757992626 },
            { lat: 45.49356922195738, lng: -122.90034916518917 },
            { lat: 45.493466487555551, lng: -122.90032949063979 },
            { lat: 45.493322124847992, lng: -122.90029153973053 },
            { lat: 45.493237326628709, lng: -122.9002751709925 },
            { lat: 45.493163401876373, lng: -122.90026662785671 },
            { lat: 45.493091938263007, lng: -122.90026342680538 },
            { lat: 45.493068304440705, lng: -122.90026747569281 },
            { lat: 45.49304576057154, lng: -122.90027834510974 },
            { lat: 45.4930304816036, lng: -122.90029039279776 },
            { lat: 45.493015486830757, lng: -122.90030711311046 },
            { lat: 45.493003615946513, lng: -122.90032533957128 },
            { lat: 45.492993820239747, lng: -122.90034590894803 },
            { lat: 45.492986325044676, lng: -122.90036834807476 },
            { lat: 45.492981302775917, lng: -122.90039214077564 },
            { lat: 45.492978778470878, lng: -122.90041899651456 },
            { lat: 45.492979230179508, lng: -122.90044382938275 },
            { lat: 45.4926825647883, lng: -122.90036298979365 },
            { lat: 45.492677948926065, lng: -122.90033624804117 },
            { lat: 45.492668865585358, lng: -122.90031328892871 },
            { lat: 45.492655861052008, lng: -122.90029452647198 },
            { lat: 45.492639847914191, lng: -122.90028127731603 },
            { lat: 45.49262683756583, lng: -122.90027562066217 },
            { lat: 45.492612064377035, lng: -122.90027366009075 },
            { lat: 45.492545425683751, lng: -122.90028294398662 },
            { lat: 45.4925317725012, lng: -122.90009285106611 },
            { lat: 45.490970383289209, lng: -122.90031955732758 },
            { lat: 45.490848058099211, lng: -122.90034096694387 },
            { lat: 45.490766885389689, lng: -122.90035910200454 },
            { lat: 45.490686082164608, lng: -122.90038031187292 },
            { lat: 45.490605706032596, lng: -122.90040458141434 },
            { lat: 45.490525814297513, lng: -122.90043189331297 },
            { lat: 45.490454372979151, lng: -122.90045905917771 },
            { lat: 45.490375558200036, lng: -122.90049209609361 },
            { lat: 45.490297391899638, lng: -122.90052811293744 },
            { lat: 45.490219929805448, lng: -122.90056708401929 },
            { lat: 45.490120372623032, lng: -122.90062211704372 },
            { lat: 45.49002221877366, lng: -122.90068202922336 },
            { lat: 45.489932963081209, lng: -122.90074160103588 },
            { lat: 45.489837838739739, lng: -122.90081068824891 },
            { lat: 45.489744458124882, lng: -122.90088442735788 },
            { lat: 45.489652933739421, lng: -122.90096272950098 },
            { lat: 45.4895633758493, lng: -122.90104550032041 },
            { lat: 45.48948254578918, lng: -122.90112578426563 },
            { lat: 45.489423133188431, lng: -122.90118839079936 },
            { lat: 45.489364795859039, lng: -122.90125300890128 },
            { lat: 45.489257655532938, lng: -122.90138042077838 },
            { lat: 45.488419881572376, lng: -122.90245685452062 },
            { lat: 45.488349936784644, lng: -122.90254315825862 },
            { lat: 45.488284864131849, lng: -122.90261911376723 },
            { lat: 45.488211703530091, lng: -122.90269984860591 },
            { lat: 45.488143805916295, lng: -122.90277062963915 },
            { lat: 45.4880746340472, lng: -122.90283887117934 },
            { lat: 45.488004234900494, lng: -122.90290452688994 },
            { lat: 45.487932656287093, lng: -122.90296755219107 },
            { lat: 45.487859946818858, lng: -122.90302790428979 },
            { lat: 45.487786155875405, lng: -122.90308554220906 },
            { lat: 45.487711333570658, lng: -122.9031404268156 },
            { lat: 45.487589599733965, lng: -122.90322242299632 },
            { lat: 45.487457744119084, lng: -122.90330155789829 },
            { lat: 45.487331506262095, lng: -122.90336838527992 },
            { lat: 45.487203418718366, lng: -122.90342767328215 },
            { lat: 45.487073704152515, lng: -122.90347931889121 },
            { lat: 45.48694258805606, lng: -122.90352323238061 },
            { lat: 45.486810298355358, lng: -122.90355933746682 },
            { lat: 45.486677065015286, lng: -122.90358757144148 },
            { lat: 45.486568277932982, lng: -122.9036046815381 },
            { lat: 45.4864675498207, lng: -122.90361581748468 },
            { lat: 45.486383456072083, lng: -122.90362167330885 },
            { lat: 45.486230210681491, lng: -122.90362767849791 },
            { lat: 45.486228171323788, lng: -122.90340930992188 }];
        var Tract132430shape = new google.maps.Polygon({
            paths: [Tract132430coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132430shape.setMap(map);

        var Tract132437center = new google.maps.LatLng(45.4928761325442, -122.912352527361);
        var Tract132437coords0 = [
            { lat: 45.488594246984889, lng: -122.91245643056742 },
            { lat: 45.494188839791853, lng: -122.91230650860861 },
            { lat: 45.494188736421521, lng: -122.91229871052018 },
            { lat: 45.496338148101565, lng: -122.91218964025683 },
            { lat: 45.496348148954837, lng: -122.9122866897044 },
            { lat: 45.494216912700587, lng: -122.91239546619514 },
            { lat: 45.490979862372917, lng: -122.91248220653269 },
            { lat: 45.490979456892312, lng: -122.91239641279907 },
            { lat: 45.48859426518667, lng: -122.912460330125 },
            { lat: 45.488594246984889, lng: -122.91245643056742 }];
        var Tract132437shape = new google.maps.Polygon({
            paths: [Tract132437coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132437shape.setMap(map);

        var Phase132007center = new google.maps.LatLng(45.488162466676, -122.899724126797);
        var Phase132007coords0 = [
            { lat: 45.486159254123322, lng: -122.89285212127764 },
            { lat: 45.4894247309791, lng: -122.89219259428189 },
            { lat: 45.489441515806618, lng: -122.89236260588362 },
            { lat: 45.489449940534158, lng: -122.89246782580823 },
            { lat: 45.489457167559038, lng: -122.89259448710317 },
            { lat: 45.489461241503122, lng: -122.89272143241955 },
            { lat: 45.489462090969887, lng: -122.89285909305048 },
            { lat: 45.48945923279323, lng: -122.89299669898953 },
            { lat: 45.4894526711644, lng: -122.89313404845223 },
            { lat: 45.489443335419509, lng: -122.89326043073878 },
            { lat: 45.489429683495715, lng: -122.89339672146538 },
            { lat: 45.489413832546433, lng: -122.89352178453571 },
            { lat: 45.489394882663042, lng: -122.89364597297666 },
            { lat: 45.4893708841164, lng: -122.89377934351903 },
            { lat: 45.489349989720459, lng: -122.89388099093236 },
            { lat: 45.488141399915932, lng: -122.89945376072556 },
            { lat: 45.488124808629657, lng: -122.89953869369099 },
            { lat: 45.488110789621871, lng: -122.89962455843701 },
            { lat: 45.488099368588273, lng: -122.89971119758005 },
            { lat: 45.488090566462709, lng: -122.8997984523174 },
            { lat: 45.488082150391556, lng: -122.89993413934309 },
            { lat: 45.488080063433266, lng: -122.90007032057494 },
            { lat: 45.488084314722222, lng: -122.9002063999671 },
            { lat: 45.48809408959162, lng: -122.90033384821656 },
            { lat: 45.488110566644835, lng: -122.90046803237591 },
            { lat: 45.488133248436789, lng: -122.90060037396468 },
            { lat: 45.488162035692156, lng: -122.90073029373873 },
            { lat: 45.488196802412659, lng: -122.90085722305166 },
            { lat: 45.488232323765146, lng: -122.90096629245235 },
            { lat: 45.488272261252824, lng: -122.90107222918476 },
            { lat: 45.488319575177144, lng: -122.90118136891252 },
            { lat: 45.488368191624332, lng: -122.90127970084039 },
            { lat: 45.488406365992645, lng: -122.9013491594949 },
            { lat: 45.48844285618442, lng: -122.90141023589656 },
            { lat: 45.4886956942941, lng: -122.90180787090721 },
            { lat: 45.488289509565455, lng: -122.90232919667315 },
            { lat: 45.488195001083469, lng: -122.90244166808624 },
            { lat: 45.488097400519251, lng: -122.90254866863171 },
            { lat: 45.488030692776327, lng: -122.90261687783546 },
            { lat: 45.487969579525142, lng: -122.90267608158503 },
            { lat: 45.487900524506749, lng: -122.9027393932034 },
            { lat: 45.487837378017531, lng: -122.90279411434979 },
            { lat: 45.487766153446863, lng: -122.90285236547534 },
            { lat: 45.487701136235778, lng: -122.90290246321798 },
            { lat: 45.487635291017831, lng: -122.90295032519599 },
            { lat: 45.48756120481503, lng: -122.90300084941057 },
            { lat: 45.487478646621376, lng: -122.90305315572031 },
            { lat: 45.48740268508012, lng: -122.90309769711263 },
            { lat: 45.4873259141207, lng: -122.90313933917201 },
            { lat: 45.487248388481653, lng: -122.90317805221905 },
            { lat: 45.487170163439373, lng: -122.90321380866304 },
            { lat: 45.4870912947687, lng: -122.90324658302168 },
            { lat: 45.487011838703189, lng: -122.90327635193923 },
            { lat: 45.486931851894916, lng: -122.90330309420314 },
            { lat: 45.486851391374245, lng: -122.90332679075904 },
            { lat: 45.486770514508954, lng: -122.90334742472439 },
            { lat: 45.48668927896346, lng: -122.90336498140051 },
            { lat: 45.486607742657704, lng: -122.90337944828292 },
            { lat: 45.486525963725782, lng: -122.90339081507027 },
            { lat: 45.486452203429387, lng: -122.90339838786468 },
            { lat: 45.486258338391423, lng: -122.90340874044995 },
            { lat: 45.486159254123322, lng: -122.89285212127764 }];
        var Phase132007shape = new google.maps.Polygon({
            paths: [Phase132007coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Phase132007shape.setMap(map);

        var Tract132432center = new google.maps.LatLng(45.4944074421966, -122.89198230736);
        var Tract132432coords0 = [
            { lat: 45.492254803593369, lng: -122.89196261308147 },
            { lat: 45.495946322784938, lng: -122.89182579099072 },
            { lat: 45.495957998282023, lng: -122.89193849252729 },
            { lat: 45.495707909774133, lng: -122.89194776185376 },
            { lat: 45.495708981780304, lng: -122.89200623944427 },
            { lat: 45.493714334267295, lng: -122.89208016339842 },
            { lat: 45.493714246558234, lng: -122.89202165241241 },
            { lat: 45.492254940321111, lng: -122.89207573494069 },
            { lat: 45.492254803593369, lng: -122.89196261308147 }];
        var Tract132432shape = new google.maps.Polygon({
            paths: [Tract132432coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132432shape.setMap(map);

        var Tract132438center = new google.maps.LatLng(45.4977307158854, -122.912052133854);
        var Tract132438coords0 = [
            { lat: 45.496683216662227, lng: -122.91220519745825 },
            { lat: 45.497649418299169, lng: -122.91215477125829 },
            { lat: 45.497664348232746, lng: -122.91214984611672 },
            { lat: 45.497678631936481, lng: -122.91214194492977 },
            { lat: 45.49769197765675, lng: -122.91213122908194 },
            { lat: 45.497704112798743, lng: -122.91211791744938 },
            { lat: 45.497721277291213, lng: -122.91209012365377 },
            { lat: 45.497741225320233, lng: -122.91203736568175 },
            { lat: 45.497758025993342, lng: -122.91200515254759 },
            { lat: 45.497781488078395, lng: -122.9119743079135 },
            { lat: 45.497808760817485, lng: -122.91195063340585 },
            { lat: 45.497829731745611, lng: -122.91193875432444 },
            { lat: 45.497849808602936, lng: -122.91193161451521 },
            { lat: 45.498023618761053, lng: -122.91189512875651 },
            { lat: 45.498055101279661, lng: -122.91219956237029 },
            { lat: 45.496689817225239, lng: -122.91226925048026 },
            { lat: 45.496683216662227, lng: -122.91220519745825 }];
        var Tract132438shape = new google.maps.Polygon({
            paths: [Tract132438coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132438shape.setMap(map);

        var Tract132436center = new google.maps.LatLng(45.4879151009779, -122.912476579083);
        var Tract132436coords0 = [
            { lat: 45.487235936766858, lng: -122.91249282764795 },
            { lat: 45.488594246984889, lng: -122.91245643056742 },
            { lat: 45.48859426518667, lng: -122.912460330125 },
            { lat: 45.4872359549674, lng: -122.91249672711234 },
            { lat: 45.487235936766858, lng: -122.91249282764795 }];
        var Tract132436shape = new google.maps.Polygon({
            paths: [Tract132436coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132436shape.setMap(map);

        var Tract132435center = new google.maps.LatLng(45.4862629916847, -122.905200659682);
        var Tract132435coords0 = [
            { lat: 45.486230210681491, lng: -122.90362767849791 },
            { lat: 45.48626037775017, lng: -122.90362710914188 },
            { lat: 45.486297041966978, lng: -122.90756062369724 },
            { lat: 45.486266871060671, lng: -122.90756078055009 },
            { lat: 45.486230210681491, lng: -122.90362767849791 }];
        var Tract132435shape = new google.maps.Polygon({
            paths: [Tract132435coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132435shape.setMap(map);

        var Tract132434center = new google.maps.LatLng(45.4884980193121, -122.893621953025);
        var Tract132434coords0 = [
            { lat: 45.486128620041953, lng: -122.89280317801311 },
            { lat: 45.489392567907245, lng: -122.89214327628399 },
            { lat: 45.489419322687425, lng: -122.8921385316891 },
            { lat: 45.4894247309791, lng: -122.89219259428189 },
            { lat: 45.486159254123322, lng: -122.89285212127764 },
            { lat: 45.486258338391423, lng: -122.90340874044995 },
            { lat: 45.486228171323788, lng: -122.90340930992188 },
            { lat: 45.486128620041953, lng: -122.89280317801311 }];
        var Tract132434shape = new google.maps.Polygon({
            paths: [Tract132434coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Tract132434shape.setMap(map);

        var Phase132004center = new google.maps.LatLng(45.4874569765815, -122.903315090863);
        var Phase132004coords0 = [
            { lat: 45.48626037775017, lng: -122.90362710914188 },
            { lat: 45.486453788172248, lng: -122.90361698958787 },
            { lat: 45.4865377721929, lng: -122.90360852993662 },
            { lat: 45.486621572642562, lng: -122.9035969619991 },
            { lat: 45.48670513261321, lng: -122.90358229361729 },
            { lat: 45.486796703108325, lng: -122.90356258931915 },
            { lat: 45.486887838723582, lng: -122.9035391617373 },
            { lat: 45.486970248885392, lng: -122.90351464911235 },
            { lat: 45.4870603466781, lng: -122.90348416941133 },
            { lat: 45.487141690333338, lng: -122.90345328480048 },
            { lat: 45.487222440297408, lng: -122.90341939723285 },
            { lat: 45.487310514108124, lng: -122.90337868000518 },
            { lat: 45.487389839348836, lng: -122.90333856351074 },
            { lat: 45.487476214699193, lng: -122.90329105799952 },
            { lat: 45.487553877690765, lng: -122.90324483264611 },
            { lat: 45.48763829594354, lng: -122.90319068104073 },
            { lat: 45.487714064135524, lng: -122.9031384851916 },
            { lat: 45.487781417007859, lng: -122.90308912306308 },
            { lat: 45.487855275192267, lng: -122.90303165948953 },
            { lat: 45.487928055074114, lng: -122.9029714791869 },
            { lat: 45.487999707225981, lng: -122.90290862301551 },
            { lat: 45.488063189718218, lng: -122.9028497998298 },
            { lat: 45.488132565779495, lng: -122.90278197856495 },
            { lat: 45.488200675219119, lng: -122.90271161010097 },
            { lat: 45.488300363520473, lng: -122.90260138639377 },
            { lat: 45.488396945734259, lng: -122.90248570778522 },
            { lat: 45.488855677641205, lng: -122.90189657971236 },
            { lat: 45.489273705313657, lng: -122.90432865740198 },
            { lat: 45.488566991163786, lng: -122.90664861360243 },
            { lat: 45.488594246984889, lng: -122.91245643056742 },
            { lat: 45.487235936766858, lng: -122.91249282764795 },
            { lat: 45.487212787534908, lng: -122.90755586282944 },
            { lat: 45.486297041966978, lng: -122.90756062369724 },
            { lat: 45.48626037775017, lng: -122.90362710914188 }];
        var Phase132004shape = new google.maps.Polygon({
            paths: [Phase132004coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Phase132004shape.setMap(map);

        var Section132013center = new google.maps.LatLng(45.4969911971779, -122.910992406179);
        var Section132013coords0 = [
            { lat: 45.4960026105087, lng: -122.90787883785123 },
            { lat: 45.496825088616696, lng: -122.90737525911675 },
            { lat: 45.496943773602062, lng: -122.9070126725403 },
            { lat: 45.497506415519375, lng: -122.90689497683775 },
            { lat: 45.498023618761053, lng: -122.91189512875651 },
            { lat: 45.497850161883058, lng: -122.91193152317732 },
            { lat: 45.497828282591819, lng: -122.91193942323625 },
            { lat: 45.497809084468692, lng: -122.9119504122805 },
            { lat: 45.497781774789, lng: -122.91197400052836 },
            { lat: 45.497758264545581, lng: -122.91200477092949 },
            { lat: 45.497741413558387, lng: -122.91203693088207 },
            { lat: 45.497720905167412, lng: -122.91209089364104 },
            { lat: 45.497703621241, lng: -122.9121185373771 },
            { lat: 45.497691428970448, lng: -122.91213174303795 },
            { lat: 45.4976780373289, lng: -122.91214234241626 },
            { lat: 45.49766371984915, lng: -122.91215011901487 },
            { lat: 45.497647250728754, lng: -122.91215522519182 },
            { lat: 45.496681227458545, lng: -122.91220525123703 },
            { lat: 45.496667695946542, lng: -122.91220305606009 },
            { lat: 45.496654879513372, lng: -122.91219650529005 },
            { lat: 45.496642593267644, lng: -122.91218490402547 },
            { lat: 45.496633375038449, lng: -122.91217064860903 },
            { lat: 45.496626273778766, lng: -122.91215226830752 },
            { lat: 45.496622756314132, lng: -122.91213355972916 },
            { lat: 45.496418879719144, lng: -122.91016063728567 },
            { lat: 45.496384704001358, lng: -122.90987599182199 },
            { lat: 45.49634567183697, lng: -122.90959261202897 },
            { lat: 45.496313974959158, lng: -122.90938570162194 },
            { lat: 45.49628291245444, lng: -122.90919832544738 },
            { lat: 45.49623584556867, lng: -122.90893725398023 },
            { lat: 45.49618080791786, lng: -122.9086592980177 },
            { lat: 45.4961848191921, lng: -122.90865795813858 },
            { lat: 45.496143731300705, lng: -122.90846571179046 },
            { lat: 45.496097948712915, lng: -122.90826415000885 },
            { lat: 45.496054141574071, lng: -122.90808194516427 },
            { lat: 45.4960026105087, lng: -122.90787883785123 }];
        var Section132013shape = new google.maps.Polygon({
            paths: [Section132013coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132013shape.setMap(map);

       

        var Phase132002center = new google.maps.LatLng(45.494483515017, -122.903790034143);
        var Phase132002coords0 = [
            { lat: 45.496002610508818, lng: -122.90787883785127 },
            { lat: 45.4959689867629, lng: -122.90775659930331 },
            { lat: 45.495934648866189, lng: -122.90764242217928 },
            { lat: 45.495897886094227, lng: -122.90752978196788 },
            { lat: 45.49585873242124, lng: -122.90741878276258 },
            { lat: 45.495817224031924, lng: -122.90730952714196 },
            { lat: 45.495773399286008, lng: -122.90720211607082 },
            { lat: 45.495731582586657, lng: -122.90710615384322 },
            { lat: 45.495674080011433, lng: -122.9069808181264 },
            { lat: 45.495669502979709, lng: -122.90695524168839 },
            { lat: 45.495669609791484, lng: -122.90694122198038 },
            { lat: 45.495671480086529, lng: -122.9069274559706 },
            { lat: 45.495675053430183, lng: -122.90691438847705 },
            { lat: 45.495680214357968, lng: -122.90690244174749 },
            { lat: 45.49569438632944, lng: -122.90688330848617 },
            { lat: 45.495589821518685, lng: -122.90668771324236 },
            { lat: 45.495572934674776, lng: -122.90670208111447 },
            { lat: 45.49555473454604, lng: -122.90670725787507 },
            { lat: 45.4955363621529, lng: -122.90670350803754 },
            { lat: 45.495519920979518, lng: -122.90669126093447 },
            { lat: 45.495512656482362, lng: -122.90668178050475 },
            { lat: 45.49541958756101, lng: -122.90653159114602 },
            { lat: 45.495331291682319, lng: -122.90640174798877 },
            { lat: 45.49523315305234, lng: -122.90627001533437 },
            { lat: 45.495130771608757, lng: -122.9061449818302 },
            { lat: 45.495024373304481, lng: -122.90602692338426 },
            { lat: 45.494920774528538, lng: -122.90592241475002 },
            { lat: 45.494814028031328, lng: -122.90582451988995 },
            { lat: 45.4946808395565, lng: -122.90571300487565 },
            { lat: 45.49467319032459, lng: -122.90570185900143 },
            { lat: 45.49466725091505, lng: -122.90568877452138 },
            { lat: 45.494663258114521, lng: -122.90567427307585 },
            { lat: 45.494661462223966, lng: -122.90566048729363 },
            { lat: 45.494661537217269, lng: -122.90564491450264 },
            { lat: 45.494663465708541, lng: -122.90563116498078 },
            { lat: 45.494667094263313, lng: -122.90561812851473 },
            { lat: 45.49467354939928, lng: -122.90560298349089 },
            { lat: 45.494506610583336, lng: -122.90545299186826 },
            { lat: 45.494490138372136, lng: -122.90548628335254 },
            { lat: 45.494480727230247, lng: -122.90549696901429 },
            { lat: 45.494469902872076, lng: -122.90550447688496 },
            { lat: 45.494457097129661, lng: -122.90550862225582 },
            { lat: 45.4944450537659, lng: -122.90550851693976 },
            { lat: 45.494433316844166, lng: -122.90550467716554 },
            { lat: 45.494421526257632, lng: -122.90549645133024 },
            { lat: 45.494308498475533, lng: -122.90537746120883 },
            { lat: 45.494198436002364, lng: -122.90525034850842 },
            { lat: 45.494092479658384, lng: -122.90511636783951 },
            { lat: 45.493990841252831, lng: -122.90497578706959 },
            { lat: 45.493904908457765, lng: -122.90484648811073 },
            { lat: 45.493822629433915, lng: -122.9047124705571 },
            { lat: 45.49374413223741, lng: -122.90457394300714 },
            { lat: 45.493668418485157, lng: -122.90442879701163 },
            { lat: 45.493663332722093, lng: -122.90441500481774 },
            { lat: 45.493660086739233, lng: -122.90439851432743 },
            { lat: 45.493659398350616, lng: -122.90438297223565 },
            { lat: 45.493661163668904, lng: -122.90436603301966 },
            { lat: 45.493665486327949, lng: -122.90435004984541 },
            { lat: 45.493671462079035, lng: -122.90433699908951 },
            { lat: 45.493679142248318, lng: -122.90432589650304 },
            { lat: 45.4936900126799, lng: -122.90431524124917 },
            { lat: 45.493596233926993, lng: -122.90410889240555 },
            { lat: 45.493585125967577, lng: -122.90411847267077 },
            { lat: 45.493574866112183, lng: -122.90412392298033 },
            { lat: 45.493562953393216, lng: -122.90412644060962 },
            { lat: 45.4935509413878, lng: -122.90412520115569 },
            { lat: 45.493539409141221, lng: -122.90412026436991 },
            { lat: 45.493529810237462, lng: -122.90411276494983 },
            { lat: 45.493520696066092, lng: -122.90410157112885 },
            { lat: 45.493513519642207, lng: -122.90408781907666 },
            { lat: 45.493469896412016, lng: -122.90397806069048 },
            { lat: 45.493427044897388, lng: -122.90386270200398 },
            { lat: 45.49338655839837, lng: -122.90374562910874 },
            { lat: 45.493348470802118, lng: -122.90362693999923 },
            { lat: 45.493312813988474, lng: -122.90350673402081 },
            { lat: 45.493279617802031, lng: -122.90338511178969 },
            { lat: 45.493248910028079, lng: -122.90326217510601 },
            { lat: 45.493220716369137, lng: -122.90313802686964 },
            { lat: 45.493195060423389, lng: -122.90301277099374 },
            { lat: 45.493173957094456, lng: -122.90289802904482 },
            { lat: 45.493154983420133, lng: -122.90278253769867 },
            { lat: 45.493138979375551, lng: -122.90267060435977 },
            { lat: 45.493139017486882, lng: -122.90265503171561 },
            { lat: 45.493141569073408, lng: -122.90263829642555 },
            { lat: 45.493146069879543, lng: -122.90262409931957 },
            { lat: 45.493152464698788, lng: -122.902611456581 },
            { lat: 45.493160498588821, lng: -122.90260087224031 },
            { lat: 45.4931698512614, lng: -122.90259276826411 },
            { lat: 45.493180149852464, lng: -122.90258746773709 },
            { lat: 45.493192044792977, lng: -122.90258456421275 },
            { lat: 45.493166682519629, lng: -122.90234154610972 },
            { lat: 45.493150753778572, lng: -122.90234386195158 },
            { lat: 45.493137073770306, lng: -122.90234206604876 },
            { lat: 45.493122733046235, lng: -122.9023358970275 },
            { lat: 45.493109615413026, lng: -122.90232560378372 },
            { lat: 45.493098299942936, lng: -122.90231164071049 },
            { lat: 45.493089286151729, lng: -122.90229462420358 },
            { lat: 45.493082971948674, lng: -122.90227530544836 },
            { lat: 45.49307963607076, lng: -122.90225453726217 },
            { lat: 45.493069728152392, lng: -122.90210844291983 },
            { lat: 45.493063706483611, lng: -122.90198122446442 },
            { lat: 45.493060532559, lng: -122.90186539685833 },
            { lat: 45.493057597284384, lng: -122.90163099410024 },
            { lat: 45.493050053060763, lng: -122.90144243163495 },
            { lat: 45.492978852713968, lng: -122.90043727355291 },
            { lat: 45.492978859933075, lng: -122.90041694250462 },
            { lat: 45.492980638661848, lng: -122.90039676936598 },
            { lat: 45.492984161492224, lng: -122.90037706497858 },
            { lat: 45.492989374142041, lng: -122.90035813296215 },
            { lat: 45.492997049323087, lng: -122.90033835753825 },
            { lat: 45.493006564978877, lng: -122.90032027148602 },
            { lat: 45.493017740146691, lng: -122.90030421875544 },
            { lat: 45.493030362303436, lng: -122.9002905046293 },
            { lat: 45.493044191408515, lng: -122.90027938991666 },
            { lat: 45.493058964468432, lng: -122.90027108599202 },
            { lat: 45.493075969386673, lng: -122.90026538494286 },
            { lat: 45.493091795389155, lng: -122.90026343026395 },
            { lat: 45.493181618578625, lng: -122.90026824243695 },
            { lat: 45.4932667903746, lng: -122.90028005636427 },
            { lat: 45.493334494471654, lng: -122.90029452267012 },
            { lat: 45.493457161899151, lng: -122.90032737889405 },
            { lat: 45.493568019724925, lng: -122.90034887755559 },
            { lat: 45.493604166260212, lng: -122.90035937558405 },
            { lat: 45.493639688519522, lng: -122.90037354102216 },
            { lat: 45.493674402700456, lng: -122.90039130058075 },
            { lat: 45.493713404522389, lng: -122.9004155867688 },
            { lat: 45.493770458020258, lng: -122.90045497575224 },
            { lat: 45.493821278112343, lng: -122.90049370165558 },
            { lat: 45.493871025254457, lng: -122.90053514853014 },
            { lat: 45.493919627420205, lng: -122.90057925637359 },
            { lat: 45.4939763396939, lng: -122.900635608091 },
            { lat: 45.494035666123068, lng: -122.90070073944207 },
            { lat: 45.494088357334405, lng: -122.90076449603973 },
            { lat: 45.494138946772324, lng: -122.90083160612527 },
            { lat: 45.494187328967527, lng: -122.90090192979558 },
            { lat: 45.494233403051624, lng: -122.90097532044544 },
            { lat: 45.494269965531593, lng: -122.90103871195541 },
            { lat: 45.494333549175067, lng: -122.90115583310946 },
            { lat: 45.494324100856979, lng: -122.90130046892286 },
            { lat: 45.494283657979381, lng: -122.90135763988495 },
            { lat: 45.494406484782139, lng: -122.90153044148761 },
            { lat: 45.494408414665905, lng: -122.9015276705114 },
            { lat: 45.494507097956607, lng: -122.90155282083668 },
            { lat: 45.494631841070415, lng: -122.90178232567497 },
            { lat: 45.494669198012367, lng: -122.90184674940164 },
            { lat: 45.494707908829753, lng: -122.90190953643692 },
            { lat: 45.494752465569171, lng: -122.90197731034742 },
            { lat: 45.49479395080003, lng: -122.90203594924908 },
            { lat: 45.494830408816632, lng: -122.90208122835706 },
            { lat: 45.494872155810476, lng: -122.90212635145633 },
            { lat: 45.494919498246112, lng: -122.90217012430332 },
            { lat: 45.495019271842139, lng: -122.90225151090917 },
            { lat: 45.495134408982715, lng: -122.9023576706943 },
            { lat: 45.495217908022177, lng: -122.90242795206171 },
            { lat: 45.49527492398736, lng: -122.90247141239119 },
            { lat: 45.495332943579577, lng: -122.9025120988079 },
            { lat: 45.495391900071326, lng: -122.90254996450997 },
            { lat: 45.495451725656814, lng: -122.90258496593914 },
            { lat: 45.495506047261784, lng: -122.90271539382952 },
            { lat: 45.495501329754113, lng: -122.9027386497843 },
            { lat: 45.495691068865611, lng: -122.90281646643471 },
            { lat: 45.495693891319874, lng: -122.90280255255367 },
            { lat: 45.495774742607743, lng: -122.90276411565743 },
            { lat: 45.495859271914348, lng: -122.90278165902713 },
            { lat: 45.495941799478445, lng: -122.902792515933 },
            { lat: 45.496030532155906, lng: -122.90279737859906 },
            { lat: 45.496096450068755, lng: -122.90279475173682 },
            { lat: 45.496143457197995, lng: -122.90278674263216 },
            { lat: 45.496186335978088, lng: -122.90277472905414 },
            { lat: 45.496218033284975, lng: -122.90276284561058 },
            { lat: 45.496290400871928, lng: -122.90273121324608 },
            { lat: 45.496376729161568, lng: -122.90270196640941 },
            { lat: 45.497057819029791, lng: -122.90255986969474 },
            { lat: 45.497506415519446, lng: -122.90689497683771 },
            { lat: 45.496943773602183, lng: -122.90701267254018 },
            { lat: 45.4968250886167, lng: -122.90737525911655 },
            { lat: 45.496002610508818, lng: -122.90787883785127 }];
        var Phase132002shape = new google.maps.Polygon({
            paths: [Phase132002coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Phase132002shape.setMap(map);

        var Section132010center = new google.maps.LatLng(45.4909720280811, -122.897580316965);
        var Section132010coords0 = [
            { lat: 45.488233563478751, lng: -122.90004962971467 },
            { lat: 45.488236605923447, lng: -122.89992091712207 },
            { lat: 45.488240778850532, lng: -122.89985298524161 },
            { lat: 45.488246718898857, lng: -122.8997853197444 },
            { lat: 45.488262729659809, lng: -122.89965856205049 },
            { lat: 45.488273720396535, lng: -122.89959218599429 },
            { lat: 45.488286433037835, lng: -122.8995264343037 },
            { lat: 45.489496763591866, lng: -122.89394532670217 },
            { lat: 45.4895182208181, lng: -122.89384113221992 },
            { lat: 45.489537667379885, lng: -122.89373562618667 },
            { lat: 45.489565830109449, lng: -122.89355459680085 },
            { lat: 45.489587770831136, lng: -122.89337183516889 },
            { lat: 45.489603437679982, lng: -122.89318777331421 },
            { lat: 45.48961279362161, lng: -122.89300284633515 },
            { lat: 45.489615816539796, lng: -122.89281749137584 },
            { lat: 45.489612499288718, lng: -122.89263214659267 },
            { lat: 45.489602849709961, lng: -122.89244725011785 },
            { lat: 45.489585898381804, lng: -122.89225287723562 },
            { lat: 45.490204685738313, lng: -122.89222972628569 },
            { lat: 45.49020432844263, lng: -122.89221023558804 },
            { lat: 45.492035604649921, lng: -122.89214237501353 },
            { lat: 45.492037026904008, lng: -122.89330191466904 },
            { lat: 45.4920402179499, lng: -122.89346811114441 },
            { lat: 45.492049055498036, lng: -122.89364500592349 },
            { lat: 45.49206241926251, lng: -122.89381017505805 },
            { lat: 45.492080673575771, lng: -122.8939743952397 },
            { lat: 45.492103785914829, lng: -122.89413737388337 },
            { lat: 45.49212771460499, lng: -122.89427739326651 },
            { lat: 45.492155229393248, lng: -122.89441607458507 },
            { lat: 45.492186293457124, lng: -122.89455323224307 },
            { lat: 45.492218082348032, lng: -122.89467832816972 },
            { lat: 45.492268161603839, lng: -122.89485277949944 },
            { lat: 45.492450700319942, lng: -122.8954366591628 },
            { lat: 45.492452651054151, lng: -122.89545512538083 },
            { lat: 45.492451458638087, lng: -122.89547372160715 },
            { lat: 45.492447191426656, lng: -122.89549138181897 },
            { lat: 45.49244009403634, lng: -122.89550709365061 },
            { lat: 45.49243230675097, lng: -122.8955180441198 },
            { lat: 45.49242411262977, lng: -122.89552584268698 },
            { lat: 45.492382991724419, lng: -122.89555221646708 },
            { lat: 45.492463490759938, lng: -122.89580860126384 },
            { lat: 45.492506355509953, lng: -122.89578191763198 },
            { lat: 45.49251706954982, lng: -122.89577868539408 },
            { lat: 45.492528021659361, lng: -122.89577854401422 },
            { lat: 45.492541897956031, lng: -122.89578297504197 },
            { lat: 45.492554506684392, lng: -122.89579232926231 },
            { lat: 45.49256500027704, lng: -122.89580597788114 },
            { lat: 45.492572673347063, lng: -122.89582300343041 },
            { lat: 45.49260412386807, lng: -122.8959261577758 },
            { lat: 45.492631244088493, lng: -122.89602464378663 },
            { lat: 45.492657990096916, lng: -122.89613357644062 },
            { lat: 45.492679870589562, lng: -122.8962346633038 },
            { lat: 45.492700830127937, lng: -122.89634612806874 },
            { lat: 45.492717349096921, lng: -122.8964492530976 },
            { lat: 45.492731443196604, lng: -122.89655499380912 },
            { lat: 45.4927417021189, lng: -122.89665844589192 },
            { lat: 45.4927492705537, lng: -122.8967865728239 },
            { lat: 45.492751231410757, lng: -122.89691512063428 },
            { lat: 45.492747577129165, lng: -122.89704359365147 },
            { lat: 45.492738321799557, lng: -122.89717149649248 },
            { lat: 45.492703695424311, lng: -122.89750832261977 },
            { lat: 45.492687001140368, lng: -122.89763973567096 },
            { lat: 45.492662765781986, lng: -122.89778840705705 },
            { lat: 45.492619418817604, lng: -122.89800779528856 },
            { lat: 45.492602109905292, lng: -122.89811824128026 },
            { lat: 45.492589985102278, lng: -122.89823128123291 },
            { lat: 45.492583436940919, lng: -122.89834524850181 },
            { lat: 45.492582497336379, lng: -122.8984595876198 },
            { lat: 45.492586714618845, lng: -122.89856662267435 },
            { lat: 45.492659714314904, lng: -122.89958531619665 },
            { lat: 45.4926594300129, lng: -122.89960878258439 },
            { lat: 45.492656509066151, lng: -122.89963188208068 },
            { lat: 45.492650405682376, lng: -122.8996559645245 },
            { lat: 45.492642292313228, lng: -122.89967640371184 },
            { lat: 45.492631983733787, lng: -122.89969473421739 },
            { lat: 45.492620929816141, lng: -122.89970916993313 },
            { lat: 45.492608515924822, lng: -122.89972116451129 },
            { lat: 45.49259500642102, lng: -122.8997304625219 },
            { lat: 45.492574803676028, lng: -122.89973858416461 },
            { lat: 45.492507331242891, lng: -122.89975256720344 },
            { lat: 45.492516168478723, lng: -122.89987560212597 },
            { lat: 45.490947618995079, lng: -122.90010337218109 },
            { lat: 45.490822304561405, lng: -122.90012561544756 },
            { lat: 45.490739142667692, lng: -122.9001443055638 },
            { lat: 45.490656351539378, lng: -122.90016607018035 },
            { lat: 45.490573987396438, lng: -122.90019089450442 },
            { lat: 45.490492106168659, lng: -122.90021876166561 },
            { lat: 45.490418871918259, lng: -122.90024642812804 },
            { lat: 45.490338061110144, lng: -122.900280022813 },
            { lat: 45.49025789342285, lng: -122.90031659977508 },
            { lat: 45.490178423293727, lng: -122.9003561341644 },
            { lat: 45.490084055860663, lng: -122.90040744127944 },
            { lat: 45.489990862863436, lng: -122.90046291812097 },
            { lat: 45.489906545505526, lng: -122.90051738860707 },
            { lat: 45.489815857155534, lng: -122.90058070230957 },
            { lat: 45.489733986108433, lng: -122.9006422555662 },
            { lat: 45.489646128084686, lng: -122.9007131786877 },
            { lat: 45.489559872692482, lng: -122.90078797250008 },
            { lat: 45.48948228517601, lng: -122.90085987138197 },
            { lat: 45.489413034831195, lng: -122.90092795341057 },
            { lat: 45.489338329519484, lng: -122.90100577802706 },
            { lat: 45.489271802058809, lng: -122.90107914316825 },
            { lat: 45.489206641737184, lng: -122.90115494781074 },
            { lat: 45.489130316203592, lng: -122.90124906092494 },
            { lat: 45.4888096036468, lng: -122.90166139242665 },
            { lat: 45.488563525719869, lng: -122.90127455606921 },
            { lat: 45.488515392357179, lng: -122.90119351880126 },
            { lat: 45.488473705413263, lng: -122.90111485484582 },
            { lat: 45.488437902614265, lng: -122.9010395227362 },
            { lat: 45.4884047600964, lng: -122.90096176895813 },
            { lat: 45.488374358728819, lng: -122.90088178323802 },
            { lat: 45.488342453560278, lng: -122.9007859062977 },
            { lat: 45.488314486042604, lng: -122.900687575693 },
            { lat: 45.488288995681273, lng: -122.90057986980322 },
            { lat: 45.488269464968489, lng: -122.90047750340513 },
            { lat: 45.488253179201259, lng: -122.90036624791735 },
            { lat: 45.488242363340369, lng: -122.90026130306028 },
            { lat: 45.488235817520213, lng: -122.90015564670163 },
            { lat: 45.488233563478751, lng: -122.90004962971467 }];
        var Section132010shape = new google.maps.Polygon({
            paths: [Section132010coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132010shape.setMap(map);

        var Section132009center = new google.maps.LatLng(45.4936354122898, -122.89837880677);
        var Section132009coords0 = [
            { lat: 45.492254940321111, lng: -122.89207573494069 },
            { lat: 45.493714246558234, lng: -122.89202165241241 },
            { lat: 45.493714334267295, lng: -122.89208016339842 },
            { lat: 45.495708981780304, lng: -122.89200623944427 },
            { lat: 45.495707909774133, lng: -122.89194776185376 },
            { lat: 45.495957998282023, lng: -122.89193849252729 },
            { lat: 45.497001640460454, lng: -122.90201709241593 },
            { lat: 45.496367799486173, lng: -122.90218747517682 },
            { lat: 45.496342335286045, lng: -122.90219235152139 },
            { lat: 45.496225907402192, lng: -122.90222345468761 },
            { lat: 45.496154308521405, lng: -122.90223753941402 },
            { lat: 45.496082200617245, lng: -122.90224464449676 },
            { lat: 45.496019555131149, lng: -122.90224513005808 },
            { lat: 45.495956999124409, lng: -122.90224034608256 },
            { lat: 45.495894751640634, lng: -122.90223030933886 },
            { lat: 45.4958330306424, lng: -122.9022150549884 },
            { lat: 45.4957597280716, lng: -122.90219079432865 },
            { lat: 45.495686867101959, lng: -122.90216126654438 },
            { lat: 45.495615109241143, lng: -122.90212670607097 },
            { lat: 45.495544626313411, lng: -122.90208719568236 },
            { lat: 45.495480842758482, lng: -122.90204641277795 },
            { lat: 45.495418419517634, lng: -122.90200157592415 },
            { lat: 45.495357483954479, lng: -122.90195277661577 },
            { lat: 45.495303039480746, lng: -122.90190464791628 },
            { lat: 45.495250042919928, lng: -122.90185335576435 },
            { lat: 45.49519398652572, lng: -122.90179389626994 },
            { lat: 45.4951443079235, lng: -122.90173628001141 },
            { lat: 45.495092077663173, lng: -122.90167015079857 },
            { lat: 45.49510251548157, lng: -122.90149961969882 },
            { lat: 45.495106667402545, lng: -122.9014945224675 },
            { lat: 45.494997329655973, lng: -122.90131446433843 },
            { lat: 45.494993177742856, lng: -122.9013195615731 },
            { lat: 45.494897686076463, lng: -122.90127832518945 },
            { lat: 45.49473768877904, lng: -122.90093484358805 },
            { lat: 45.494701862109586, lng: -122.90086551975548 },
            { lat: 45.494662181781251, lng: -122.90080057740703 },
            { lat: 45.494568802585064, lng: -122.90066953740821 },
            { lat: 45.494480041024225, lng: -122.90053058090989 },
            { lat: 45.494430735090589, lng: -122.90045762450562 },
            { lat: 45.494301652270657, lng: -122.90021666692084 },
            { lat: 45.494290993001577, lng: -122.90020454773519 },
            { lat: 45.494296113200974, lng: -122.90019535093103 },
            { lat: 45.494270050486527, lng: -122.90016647675226 },
            { lat: 45.494265044097794, lng: -122.90017576115866 },
            { lat: 45.494182812373467, lng: -122.90009086707619 },
            { lat: 45.49409505892428, lng: -122.90000999762373 },
            { lat: 45.493720549418335, lng: -122.89981819080384 },
            { lat: 45.493640793307144, lng: -122.89978054350784 },
            { lat: 45.4935662010302, lng: -122.89975026275177 },
            { lat: 45.493490803472504, lng: -122.89972432551903 },
            { lat: 45.493414725685149, lng: -122.89970277481063 },
            { lat: 45.493344497899017, lng: -122.8996869040766 },
            { lat: 45.49326746981378, lng: -122.8996738544667 },
            { lat: 45.493196585439172, lng: -122.89966581885794 },
            { lat: 45.493119076201069, lng: -122.89966134975961 },
            { lat: 45.493043859914181, lng: -122.89966118026368 },
            { lat: 45.493027441138224, lng: -122.89965875862116 },
            { lat: 45.493008693411895, lng: -122.89965113289394 },
            { lat: 45.4929900307803, lng: -122.89963745922124 },
            { lat: 45.492974782765813, lng: -122.89962017707053 },
            { lat: 45.492961247634412, lng: -122.89959735769449 },
            { lat: 45.492949615570915, lng: -122.89956513682263 },
            { lat: 45.492944073024375, lng: -122.89953196280511 },
            { lat: 45.4928626488608, lng: -122.89839857518129 },
            { lat: 45.492859643389345, lng: -122.89833832016622 },
            { lat: 45.492858812022369, lng: -122.8982839661533 },
            { lat: 45.492861720326069, lng: -122.89818742125523 },
            { lat: 45.492870222553265, lng: -122.8980915469551 },
            { lat: 45.49288220609764, lng: -122.89800872145119 },
            { lat: 45.492919513567912, lng: -122.89780665735672 },
            { lat: 45.4929388933104, lng: -122.89767816992436 },
            { lat: 45.492958739340892, lng: -122.89750866843859 },
            { lat: 45.49297230636413, lng: -122.89733792036476 },
            { lat: 45.49297693344365, lng: -122.89724717994987 },
            { lat: 45.492979786336207, lng: -122.89715629181845 },
            { lat: 45.492980862840874, lng: -122.89706532608824 },
            { lat: 45.492980162127132, lng: -122.89697435293677 },
            { lat: 45.492977684735585, lng: -122.89688344254742 },
            { lat: 45.492973432577465, lng: -122.89679266505507 },
            { lat: 45.492960571135264, lng: -122.89662180662259 },
            { lat: 45.492947706213442, lng: -122.89650189198872 },
            { lat: 45.492931727422416, lng: -122.8963827368763 },
            { lat: 45.492912656676005, lng: -122.89626450469822 },
            { lat: 45.492890520128469, lng: -122.89614735760118 },
            { lat: 45.492865348138551, lng: -122.89603145624318 },
            { lat: 45.492839636673082, lng: -122.89592644346595 },
            { lat: 45.492808746760396, lng: -122.89581337241702 },
            { lat: 45.492772823637566, lng: -122.89569504139345 },
            { lat: 45.492769505958073, lng: -122.89567858003241 },
            { lat: 45.492768794830795, lng: -122.89566148600716 },
            { lat: 45.49277072453588, lng: -122.89564458334142 },
            { lat: 45.492775728899126, lng: -122.89562731863886 },
            { lat: 45.492782735684685, lng: -122.89561339103854 },
            { lat: 45.492797285433831, lng: -122.89559700575646 },
            { lat: 45.4928353528246, lng: -122.89557256998539 },
            { lat: 45.49275485327049, lng: -122.89531618384517 },
            { lat: 45.492715042148085, lng: -122.89534092976793 },
            { lat: 45.492704328121128, lng: -122.89534416209965 },
            { lat: 45.492693376012632, lng: -122.89534430356365 },
            { lat: 45.4926805336271, lng: -122.89534039416412 },
            { lat: 45.492667795812842, lng: -122.89533140042049 },
            { lat: 45.492657112288157, lng: -122.89531805297794 },
            { lat: 45.492649201204678, lng: -122.89530124906005 },
            { lat: 45.4924701411206, lng: -122.89473086122639 },
            { lat: 45.492422104112833, lng: -122.89456345193439 },
            { lat: 45.492391758095643, lng: -122.89444333172017 },
            { lat: 45.492362260131692, lng: -122.89431157698479 },
            { lat: 45.492336315808515, lng: -122.89417831939582 },
            { lat: 45.492315554018241, lng: -122.89405414596038 },
            { lat: 45.492293943907285, lng: -122.89389759484197 },
            { lat: 45.492277196971607, lng: -122.89373984399099 },
            { lat: 45.492265345615188, lng: -122.89358119864272 },
            { lat: 45.49225872161886, lng: -122.89343259339367 },
            { lat: 45.492256417155495, lng: -122.89329436345703 },
            { lat: 45.492254940321111, lng: -122.89207573494069 }];
        var Section132009shape = new google.maps.Polygon({
            paths: [Section132009coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132009shape.setMap(map);

        var Section132011center = new google.maps.LatLng(45.488162466676, -122.899724126797);
        var Section132011coords0 = [
            { lat: 45.486159254123322, lng: -122.89285212127764 },
            { lat: 45.4894247309791, lng: -122.89219259428189 },
            { lat: 45.489441515806618, lng: -122.89236260588362 },
            { lat: 45.489449940534158, lng: -122.89246782580823 },
            { lat: 45.489457167559038, lng: -122.89259448710317 },
            { lat: 45.489461241503122, lng: -122.89272143241955 },
            { lat: 45.489462090969887, lng: -122.89285909305048 },
            { lat: 45.48945923279323, lng: -122.89299669898953 },
            { lat: 45.4894526711644, lng: -122.89313404845223 },
            { lat: 45.489443335419509, lng: -122.89326043073878 },
            { lat: 45.489429683495715, lng: -122.89339672146538 },
            { lat: 45.489413832546433, lng: -122.89352178453571 },
            { lat: 45.489394882663042, lng: -122.89364597297666 },
            { lat: 45.4893708841164, lng: -122.89377934351903 },
            { lat: 45.489349989720459, lng: -122.89388099093236 },
            { lat: 45.488141399915932, lng: -122.89945376072556 },
            { lat: 45.488124808629657, lng: -122.89953869369099 },
            { lat: 45.488110789621871, lng: -122.89962455843701 },
            { lat: 45.488099368588273, lng: -122.89971119758005 },
            { lat: 45.488090566462709, lng: -122.8997984523174 },
            { lat: 45.488082150391556, lng: -122.89993413934309 },
            { lat: 45.488080063433266, lng: -122.90007032057494 },
            { lat: 45.488084314722222, lng: -122.9002063999671 },
            { lat: 45.48809408959162, lng: -122.90033384821656 },
            { lat: 45.488110566644835, lng: -122.90046803237591 },
            { lat: 45.488133248436789, lng: -122.90060037396468 },
            { lat: 45.488162035692156, lng: -122.90073029373873 },
            { lat: 45.488196802412659, lng: -122.90085722305166 },
            { lat: 45.488232323765146, lng: -122.90096629245235 },
            { lat: 45.488272261252824, lng: -122.90107222918476 },
            { lat: 45.488319575177144, lng: -122.90118136891252 },
            { lat: 45.488368191624332, lng: -122.90127970084039 },
            { lat: 45.488406365992645, lng: -122.9013491594949 },
            { lat: 45.48844285618442, lng: -122.90141023589656 },
            { lat: 45.4886956942941, lng: -122.90180787090721 },
            { lat: 45.488289509565455, lng: -122.90232919667315 },
            { lat: 45.488195001083469, lng: -122.90244166808624 },
            { lat: 45.488097400519251, lng: -122.90254866863171 },
            { lat: 45.488030692776327, lng: -122.90261687783546 },
            { lat: 45.487969579525142, lng: -122.90267608158503 },
            { lat: 45.487900524506749, lng: -122.9027393932034 },
            { lat: 45.487837378017531, lng: -122.90279411434979 },
            { lat: 45.487766153446863, lng: -122.90285236547534 },
            { lat: 45.487701136235778, lng: -122.90290246321798 },
            { lat: 45.487635291017831, lng: -122.90295032519599 },
            { lat: 45.48756120481503, lng: -122.90300084941057 },
            { lat: 45.487478646621376, lng: -122.90305315572031 },
            { lat: 45.48740268508012, lng: -122.90309769711263 },
            { lat: 45.4873259141207, lng: -122.90313933917201 },
            { lat: 45.487248388481653, lng: -122.90317805221905 },
            { lat: 45.487170163439373, lng: -122.90321380866304 },
            { lat: 45.4870912947687, lng: -122.90324658302168 },
            { lat: 45.487011838703189, lng: -122.90327635193923 },
            { lat: 45.486931851894916, lng: -122.90330309420314 },
            { lat: 45.486851391374245, lng: -122.90332679075904 },
            { lat: 45.486770514508954, lng: -122.90334742472439 },
            { lat: 45.48668927896346, lng: -122.90336498140051 },
            { lat: 45.486607742657704, lng: -122.90337944828292 },
            { lat: 45.486525963725782, lng: -122.90339081507027 },
            { lat: 45.486452203429387, lng: -122.90339838786468 },
            { lat: 45.486258338391423, lng: -122.90340874044995 },
            { lat: 45.486159254123322, lng: -122.89285212127764 }];
        var Section132011shape = new google.maps.Polygon({
            paths: [Section132011coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132011shape.setMap(map);

        var Section132008center = new google.maps.LatLng(45.4874569765815, -122.903315090863);
        var Section132008coords0 = [
            { lat: 45.48626037775017, lng: -122.90362710914188 },
            { lat: 45.486453788172248, lng: -122.90361698958787 },
            { lat: 45.4865377721929, lng: -122.90360852993662 },
            { lat: 45.486621572642562, lng: -122.9035969619991 },
            { lat: 45.48670513261321, lng: -122.90358229361729 },
            { lat: 45.486796703108325, lng: -122.90356258931915 },
            { lat: 45.486887838723582, lng: -122.9035391617373 },
            { lat: 45.486970248885392, lng: -122.90351464911235 },
            { lat: 45.4870603466781, lng: -122.90348416941133 },
            { lat: 45.487141690333338, lng: -122.90345328480048 },
            { lat: 45.487222440297408, lng: -122.90341939723285 },
            { lat: 45.487310514108124, lng: -122.90337868000518 },
            { lat: 45.487389839348836, lng: -122.90333856351074 },
            { lat: 45.487476214699193, lng: -122.90329105799952 },
            { lat: 45.487553877690765, lng: -122.90324483264611 },
            { lat: 45.48763829594354, lng: -122.90319068104073 },
            { lat: 45.487714064135524, lng: -122.9031384851916 },
            { lat: 45.487781417007859, lng: -122.90308912306308 },
            { lat: 45.487855275192267, lng: -122.90303165948953 },
            { lat: 45.487928055074114, lng: -122.9029714791869 },
            { lat: 45.487999707225981, lng: -122.90290862301551 },
            { lat: 45.488063189718218, lng: -122.9028497998298 },
            { lat: 45.488132565779495, lng: -122.90278197856495 },
            { lat: 45.488200675219119, lng: -122.90271161010097 },
            { lat: 45.488300363520473, lng: -122.90260138639377 },
            { lat: 45.488396945734259, lng: -122.90248570778522 },
            { lat: 45.488855677641205, lng: -122.90189657971236 },
            { lat: 45.489273705313657, lng: -122.90432865740198 },
            { lat: 45.488566991163786, lng: -122.90664861360243 },
            { lat: 45.488594246984889, lng: -122.91245643056742 },
            { lat: 45.487235936766858, lng: -122.91249282764795 },
            { lat: 45.487212787534908, lng: -122.90755586282944 },
            { lat: 45.486297041966978, lng: -122.90756062369724 },
            { lat: 45.48626037775017, lng: -122.90362710914188 }];
        var Section132008shape = new google.maps.Polygon({
            paths: [Section132008coords0],
            strokeColor: 'green',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: 'transparent',
            fillOpacity: 0.0
        });
        Section132008shape.setMap(map);
        var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }


    $('button#starteditor').click(function () {
        initialize();
    });

});