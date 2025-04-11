var wms_layers = [];

var format_srmbuildings_0 = new ol.format.GeoJSON();
var features_srmbuildings_0 = format_srmbuildings_0.readFeatures(json_srmbuildings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmbuildings_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmbuildings_0.addFeatures(features_srmbuildings_0);
var lyr_srmbuildings_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srmbuildings_0, 
                style: style_srmbuildings_0,
                popuplayertitle: 'srm buildings',
                interactive: true,
                title: '<img src="styles/legend/srmbuildings_0.png" /> srm buildings'
            });
var format_buildingsshapefilesrm_buildings_1 = new ol.format.GeoJSON();
var features_buildingsshapefilesrm_buildings_1 = format_buildingsshapefilesrm_buildings_1.readFeatures(json_buildingsshapefilesrm_buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildingsshapefilesrm_buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildingsshapefilesrm_buildings_1.addFeatures(features_buildingsshapefilesrm_buildings_1);
var lyr_buildingsshapefilesrm_buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildingsshapefilesrm_buildings_1, 
                style: style_buildingsshapefilesrm_buildings_1,
                popuplayertitle: 'buildings shapefile — srm_buildings',
                interactive: true,
                title: '<img src="styles/legend/buildingsshapefilesrm_buildings_1.png" /> buildings shapefile — srm_buildings'
            });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_2.png" /> roads'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });

lyr_srmbuildings_0.setVisible(true);lyr_buildingsshapefilesrm_buildings_1.setVisible(true);lyr_roads_2.setVisible(true);lyr_roads_3.setVisible(true);
var layersList = [lyr_srmbuildings_0,lyr_buildingsshapefilesrm_buildings_1,lyr_roads_2,lyr_roads_3];
lyr_srmbuildings_0.set('fieldAliases', {'id': 'id', 'Buildings': 'Buildings', });
lyr_buildingsshapefilesrm_buildings_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Buildings': 'Buildings', });
lyr_roads_2.set('fieldAliases', {'id': 'id', 'roads': 'roads', });
lyr_roads_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'roads': 'roads', });
lyr_srmbuildings_0.set('fieldImages', {'id': '', 'Buildings': '', });
lyr_buildingsshapefilesrm_buildings_1.set('fieldImages', {'fid': '', 'id': '', 'Buildings': '', });
lyr_roads_2.set('fieldImages', {'id': '', 'roads': '', });
lyr_roads_3.set('fieldImages', {'fid': '', 'id': '', 'roads': '', });
lyr_srmbuildings_0.set('fieldLabels', {'id': 'no label', 'Buildings': 'no label', });
lyr_buildingsshapefilesrm_buildings_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Buildings': 'no label', });
lyr_roads_2.set('fieldLabels', {'id': 'no label', 'roads': 'no label', });
lyr_roads_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'roads': 'no label', });
lyr_roads_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});