var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Bruitferroviaireindicateurlden2016_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.environnement.brussels/be_wms?%26_ga%3D2.188237928.1167063981.1639838874-1491317975.1639838874",
    attributions: ' ',
                              params: {
                                "LAYERS": "bruenvi_noise_rail_lden_16",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: " Bruit ferroviaire indicateur lden 2016",
                            opacity: 0.787000,
                            
                            
                          });
              wms_layers.push([lyr_Bruitferroviaireindicateurlden2016_2, 0]);

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Bruitferroviaireindicateurlden2016_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Bruitferroviaireindicateurlden2016_2];
