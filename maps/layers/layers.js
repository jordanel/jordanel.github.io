var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PrivateUniversitiesPrefecture0 = new ol.format.GeoJSON();
var features_PrivateUniversitiesPrefecture0 = format_PrivateUniversitiesPrefecture0.readFeatures(geojson_PrivateUniversitiesPrefecture0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateUniversitiesPrefecture0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PrivateUniversitiesPrefecture0.addFeatures(features_PrivateUniversitiesPrefecture0);var lyr_PrivateUniversitiesPrefecture0 = new ol.layer.Vector({
                source:jsonSource_PrivateUniversitiesPrefecture0, 
                style: style_PrivateUniversitiesPrefecture0,
                title: "Private Universities (Prefecture)"
            });var format_PublicUniversitiesPrefecture1 = new ol.format.GeoJSON();
var features_PublicUniversitiesPrefecture1 = format_PublicUniversitiesPrefecture1.readFeatures(geojson_PublicUniversitiesPrefecture1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicUniversitiesPrefecture1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PublicUniversitiesPrefecture1.addFeatures(features_PublicUniversitiesPrefecture1);var lyr_PublicUniversitiesPrefecture1 = new ol.layer.Vector({
                source:jsonSource_PublicUniversitiesPrefecture1, 
                style: style_PublicUniversitiesPrefecture1,
                title: "Public Universities (Prefecture)"
            });var format_QingExamTakersPrefecture2 = new ol.format.GeoJSON();
var features_QingExamTakersPrefecture2 = format_QingExamTakersPrefecture2.readFeatures(geojson_QingExamTakersPrefecture2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QingExamTakersPrefecture2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_QingExamTakersPrefecture2.addFeatures(features_QingExamTakersPrefecture2);var lyr_QingExamTakersPrefecture2 = new ol.layer.Vector({
                source:jsonSource_QingExamTakersPrefecture2, 
                style: style_QingExamTakersPrefecture2,
                title: "Qing Exam Takers (Prefecture)"
            });var format_MingExamTakersPrefecture3 = new ol.format.GeoJSON();
var features_MingExamTakersPrefecture3 = format_MingExamTakersPrefecture3.readFeatures(geojson_MingExamTakersPrefecture3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MingExamTakersPrefecture3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MingExamTakersPrefecture3.addFeatures(features_MingExamTakersPrefecture3);var lyr_MingExamTakersPrefecture3 = new ol.layer.Vector({
                source:jsonSource_MingExamTakersPrefecture3, 
                style: style_MingExamTakersPrefecture3,
                title: "Ming Exam Takers (Prefecture)"
            });var format_NorthernSongExamTakersPrefecture4 = new ol.format.GeoJSON();
var features_NorthernSongExamTakersPrefecture4 = format_NorthernSongExamTakersPrefecture4.readFeatures(geojson_NorthernSongExamTakersPrefecture4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernSongExamTakersPrefecture4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthernSongExamTakersPrefecture4.addFeatures(features_NorthernSongExamTakersPrefecture4);var lyr_NorthernSongExamTakersPrefecture4 = new ol.layer.Vector({
                source:jsonSource_NorthernSongExamTakersPrefecture4, 
                style: style_NorthernSongExamTakersPrefecture4,
                title: "Northern Song Exam Takers (Prefecture)"
            });var format_PrivateUniversitiesCity5 = new ol.format.GeoJSON();
var features_PrivateUniversitiesCity5 = format_PrivateUniversitiesCity5.readFeatures(geojson_PrivateUniversitiesCity5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateUniversitiesCity5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PrivateUniversitiesCity5.addFeatures(features_PrivateUniversitiesCity5);var lyr_PrivateUniversitiesCity5 = new ol.layer.Vector({
                source:jsonSource_PrivateUniversitiesCity5, 
                style: style_PrivateUniversitiesCity5,
                title: "Private Universities (City)"
            });var format_PublicUniversitiesCity6 = new ol.format.GeoJSON();
var features_PublicUniversitiesCity6 = format_PublicUniversitiesCity6.readFeatures(geojson_PublicUniversitiesCity6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicUniversitiesCity6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PublicUniversitiesCity6.addFeatures(features_PublicUniversitiesCity6);var lyr_PublicUniversitiesCity6 = new ol.layer.Vector({
                source:jsonSource_PublicUniversitiesCity6, 
                style: style_PublicUniversitiesCity6,
                title: "Public Universities (City)"
            });var format_QingExamTakersCity7 = new ol.format.GeoJSON();
var features_QingExamTakersCity7 = format_QingExamTakersCity7.readFeatures(geojson_QingExamTakersCity7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QingExamTakersCity7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_QingExamTakersCity7.addFeatures(features_QingExamTakersCity7);var lyr_QingExamTakersCity7 = new ol.layer.Vector({
                source:jsonSource_QingExamTakersCity7, 
                style: style_QingExamTakersCity7,
                title: "Qing Exam Takers (City)"
            });var format_MingExamTakersCity8 = new ol.format.GeoJSON();
var features_MingExamTakersCity8 = format_MingExamTakersCity8.readFeatures(geojson_MingExamTakersCity8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MingExamTakersCity8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MingExamTakersCity8.addFeatures(features_MingExamTakersCity8);var lyr_MingExamTakersCity8 = new ol.layer.Vector({
                source:jsonSource_MingExamTakersCity8, 
                style: style_MingExamTakersCity8,
                title: "Ming Exam Takers (City)"
            });var format_NorthernSongExamTakersCity9 = new ol.format.GeoJSON();
var features_NorthernSongExamTakersCity9 = format_NorthernSongExamTakersCity9.readFeatures(geojson_NorthernSongExamTakersCity9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernSongExamTakersCity9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthernSongExamTakersCity9.addFeatures(features_NorthernSongExamTakersCity9);var lyr_NorthernSongExamTakersCity9 = new ol.layer.Vector({
                source:jsonSource_NorthernSongExamTakersCity9, 
                style: style_NorthernSongExamTakersCity9,
                title: "Northern Song Exam Takers (City)"
            });

lyr_PrivateUniversitiesPrefecture0.setVisible(true);lyr_PublicUniversitiesPrefecture1.setVisible(true);lyr_QingExamTakersPrefecture2.setVisible(true);lyr_MingExamTakersPrefecture3.setVisible(true);lyr_NorthernSongExamTakersPrefecture4.setVisible(true);lyr_PrivateUniversitiesCity5.setVisible(true);lyr_PublicUniversitiesCity6.setVisible(true);lyr_QingExamTakersCity7.setVisible(true);lyr_MingExamTakersCity8.setVisible(true);lyr_NorthernSongExamTakersCity9.setVisible(true);
var layersList = [baseLayer,lyr_PrivateUniversitiesPrefecture0,lyr_PublicUniversitiesPrefecture1,lyr_QingExamTakersPrefecture2,lyr_MingExamTakersPrefecture3,lyr_NorthernSongExamTakersPrefecture4,lyr_PrivateUniversitiesCity5,lyr_PublicUniversitiesCity6,lyr_QingExamTakersCity7,lyr_MingExamTakersCity8,lyr_NorthernSongExamTakersCity9];
lyr_PrivateUniversitiesPrefecture0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'NUMPOINTS': 'NUMPOINTS', });
lyr_PublicUniversitiesPrefecture1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'NUMPOINTS': 'NUMPOINTS', });
lyr_QingExamTakersPrefecture2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'NUMPOINTS': 'NUMPOINTS', });
lyr_MingExamTakersPrefecture3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'NUMPOINTS': 'NUMPOINTS', });
lyr_NorthernSongExamTakersPrefecture4.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'NUMPOINTS': 'NUMPOINTS', });
lyr_PrivateUniversitiesCity5.set('fieldAliases', {'id': 'id', 'Name_Inst': 'Name_Inst', 'city': 'city', 'prov': 'prov', 'Location': 'Location', 'Level': 'Level', 'category': 'category', 'type': 'type', 'Affiliatio': 'Affiliatio', 'long': 'long', 'lat': 'lat', 'count': 'count', });
lyr_PublicUniversitiesCity6.set('fieldAliases', {'id': 'id', 'Name_of_In': 'Name_of_In', 'city': 'city', 'PROV': 'PROV', 'Affiliatio': 'Affiliatio', 'Level_of_L': 'Level_of_L', 'category': 'category', 'places_ID': 'places_ID', 'long_': 'long_', 'lat': 'lat', 'count': 'count', });
lyr_QingExamTakersCity7.set('fieldAliases', {'id': 'id', 'AddrName': 'AddrName', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'xy_count': 'xy_count', });
lyr_MingExamTakersCity8.set('fieldAliases', {'id': 'id', 'AddrName': 'AddrName', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'xy_count': 'xy_count', });
lyr_NorthernSongExamTakersCity9.set('fieldAliases', {'id': 'id', 'AddrName': 'AddrName', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'xy_count': 'xy_count', });
lyr_PrivateUniversitiesPrefecture0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_PublicUniversitiesPrefecture1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_QingExamTakersPrefecture2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_MingExamTakersPrefecture3.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_NorthernSongExamTakersPrefecture4.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_PrivateUniversitiesCity5.set('fieldImages', {'id': 'TextEdit', 'Name_Inst': 'TextEdit', 'city': 'TextEdit', 'prov': 'TextEdit', 'Location': 'TextEdit', 'Level': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'Affiliatio': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'count': 'TextEdit', });
lyr_PublicUniversitiesCity6.set('fieldImages', {'id': 'TextEdit', 'Name_of_In': 'TextEdit', 'city': 'TextEdit', 'PROV': 'TextEdit', 'Affiliatio': 'TextEdit', 'Level_of_L': 'TextEdit', 'category': 'TextEdit', 'places_ID': 'TextEdit', 'long_': 'TextEdit', 'lat': 'TextEdit', 'count': 'TextEdit', });
lyr_QingExamTakersCity7.set('fieldImages', {'id': 'TextEdit', 'AddrName': 'TextEdit', 'x_coord': 'TextEdit', 'y_coord': 'TextEdit', 'xy_count': 'TextEdit', });
lyr_MingExamTakersCity8.set('fieldImages', {'id': 'TextEdit', 'AddrName': 'TextEdit', 'x_coord': 'TextEdit', 'y_coord': 'TextEdit', 'xy_count': 'TextEdit', });
lyr_NorthernSongExamTakersCity9.set('fieldImages', {'id': 'TextEdit', 'AddrName': 'TextEdit', 'x_coord': 'TextEdit', 'y_coord': 'TextEdit', 'xy_count': 'TextEdit', });
lyr_PrivateUniversitiesPrefecture0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'NUMPOINTS': 'no label', });
lyr_PublicUniversitiesPrefecture1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'NUMPOINTS': 'no label', });
lyr_QingExamTakersPrefecture2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'NUMPOINTS': 'no label', });
lyr_MingExamTakersPrefecture3.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'NUMPOINTS': 'no label', });
lyr_NorthernSongExamTakersPrefecture4.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'NUMPOINTS': 'no label', });
lyr_PrivateUniversitiesCity5.set('fieldLabels', {'id': 'no label', 'Name_Inst': 'no label', 'city': 'no label', 'prov': 'no label', 'Location': 'no label', 'Level': 'no label', 'category': 'no label', 'type': 'no label', 'Affiliatio': 'no label', 'long': 'no label', 'lat': 'no label', 'count': 'no label', });
lyr_PublicUniversitiesCity6.set('fieldLabels', {'id': 'no label', 'Name_of_In': 'no label', 'city': 'no label', 'PROV': 'no label', 'Affiliatio': 'no label', 'Level_of_L': 'no label', 'category': 'no label', 'places_ID': 'no label', 'long_': 'no label', 'lat': 'no label', 'count': 'no label', });
lyr_QingExamTakersCity7.set('fieldLabels', {'id': 'no label', 'AddrName': 'no label', 'x_coord': 'no label', 'y_coord': 'no label', 'xy_count': 'no label', });
lyr_MingExamTakersCity8.set('fieldLabels', {'id': 'no label', 'AddrName': 'no label', 'x_coord': 'no label', 'y_coord': 'no label', 'xy_count': 'no label', });
lyr_NorthernSongExamTakersCity9.set('fieldLabels', {'id': 'no label', 'AddrName': 'no label', 'x_coord': 'no label', 'y_coord': 'no label', 'xy_count': 'no label', });
lyr_NorthernSongExamTakersCity9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});