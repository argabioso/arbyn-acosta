/* GMapTile v0.0.1
 * ====================================================================== */

GMapTile = {};
GMapTile.getURL = (styles = []) => {
  const styleTypes = {
    'all': '0',
    'administrative': '1',
    'administrative.country': '17',
    'administrative.land_parcel': '21',
    'administrative.locality': '19',
    'administrative.neighborhood': '20',
    'administrative.province': '18',
    'landscape': '5',
    'landscape.man_made': '81',
    'landscape.natural': '82',
    'poi': '2',
    'poi.attraction': '37',
    'poi.business': '33',
    'poi.government': '34',
    'poi.medical': '36',
    'poi.park': '40',
    'poi.place_of_worship': '38',
    'poi.school': '35',
    'poi.sports_complex': '39',
    'road': '3',
    'road.arterial': '50',
    'road.highway': '49',
    'road.local': '51',
    'transit': '4',
    'transit.line': '65',
    'transit.station': '66',
    'water': '6',
  };

  const styleElements = {
    'all': 'a',
    'geometry': 'g',
    'geometry.fill': 'g.f',
    'geometry.stroke': 'g.s',
    'labels': 'l',
    'labels.icon': 'l.i',
    'labels.text': 'l.t',
    'labels.text.fill': 'l.t.f',
    'labels.text.stroke': 'l.t.s',
  };

  const stylers = {
    'color': 'p.c',
    'gamma': 'p.g',
    'hue': 'p.h',
    'invert_lightness': 'p.il',
    'lightness': 'p.l',
    'saturation': 'p.s',
    'visibility': 'p.v',
    'weight': 'p.w',
  };

  let ret = '';
  for (i = 0; i < styles.length; i++) {
    if (styles[i].featureType) {
      ret += 's.t:' + styleTypes[styles[i].featureType] + '|';
    }
    if (styles[i].elementType) {
      if (!styleElements[styles[i].elementType]) {
        console.log('Style Element unknown:' + styles[i].elementType);
      }
      ret += 's.e:' + styleElements[styles[i].elementType] + '|';
    }
    if (styles[i].stylers) {
      for (let u = 0; u < styles[i].stylers.length; u++) {
        const cstyler = styles[i].stylers[u];
        for (const k in cstyler) {
          // Make sure the key is in the dictionary
          if (! {}.hasOwnProperty.call(cstyler, k)) {
            continue;
          }

          if (k == 'color') {
            if (cstyler[k].length == 7) {
              cstyler[k] = '#ff' + cstyler[k].slice(1);
            } else if (cstyler[k].length != 9) {
              console.log('malformed color:' + cstyler[k]);
            }
          }
          ret += stylers[k] + ':' + cstyler[k] + '|';
        }
      }
    }
    ret = ret.slice(0, ret.length - 1);
    ret += ',';
  }
  encodedStyles = encodeURIComponent(ret.slice(0, ret.length-1));

  if (encodedStyles) {
    return 'https://mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&apistyle=' +
      encodedStyles;
  }
  return 'https://mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
};
