import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export * from './renders/map';

/*
<!-- UPDATE CART -->

<script>
  var lastCartValue = {{LastCartValue}} (200)
  var minCartValueForFreeShipping = {{minCartValueForFreeShipping}} (100)
  var cartValue = {{CartValue}} (150)
  // DEFINE A VARIABLE IN GTM
  datalayer({
    lastCartValue: updateCart.cartValue
  })
  
  if (cartValue <= minCartValueForFreeShipping) {
    // render snackbar
  } else if (cartValue < lastValue) {
    // render snackbar
  }
  
  qué pasa si aún no llego al mínimo
  qué pasa si acabo de llegar al mínimo
  qué pasa si hago operaciones por encima del mínimo sin haber bajado del mínimo
  
  agregar parámetro para mostrar desde cierto monto
  
</script>
*/
