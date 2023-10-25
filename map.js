fetch('https://api.maptiler.com/maps/basic-v2/style.json?key=e1HKzdDDhrSjMJxXHcCq')
  .then(response => response.json())
  .then(data => console.log(data));

maptilersdk.config.apiKey = 'e1HKzdDDhrSjMJxXHcCq';
      const map = new maptilersdk.Map({
        container: 'map',
        style: maptilersdk.MapStyle.STREETS,
        center: [-64.22149216065363, -31.37304022433388], // longitud y latitud - centro del mapa
        zoom: 11.5, // zoom del mapa
      });

// Marcador de la Casa central
const marcador = new maptilersdk.Marker({
  color: '#ffbd59', // color del marcador
  draggable: false,
})
  .setLngLat([-64.18545399999998, -31.40224772972425]) // Casa Central
  .setPopup(new maptilersdk.Popup().setHTML("<h1>Casa Central</h1><p>Juan B. Justo 495 esq. Jujuy Bº Cofico</p><p>Horario de atención:</p><p>de 9 a 18 hs.</p><p>Contacto: 0351-5696867</p>"))
  .addTo(map);

// Marcador del Sucursal Centro
const marcador1 = new maptilersdk.Marker({
  color: '#ffbd59',
  draggable: false,
})
  .setLngLat([-64.18524645767008, -31.411317843498402]) // Sucursal centro
  .setPopup(new maptilersdk.Popup().setHTML("<h1>Sucursal Centro</h1><p>Avenida Gral Paz 539 Bº Centro</p><p>Horario de atención:</p><p>de 8 a 20 hs.</p><p>Contacto: 0351-3658558</p>"))
  .addTo(map);

// Marcador de la Sucursal Villa Allende
const marcador2 = new maptilersdk.Marker({
  color: '#ffbd59',
  draggable: false,
})
  .setLngLat([-64.29123900000002, -31.294633839363737]) // Sucursal Villa Allende
  .setPopup(new maptilersdk.Popup().setHTML("<h1>Sucursal Villa Allende</h1><p>Hipólito Yrigoyen 301, Villa Allende</p><p>Horario de atención:</p><p>de 7 a 22 hs.</p><p>Contacto: 03543-6587566</p>"))
  .addTo(map);
  