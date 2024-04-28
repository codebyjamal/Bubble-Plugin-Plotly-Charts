function(instance, properties, context) {

var div =  document.getElementById(instance.data.id);


div.style.width = "100%";
div.style.height = "100%";
    const layout = {title:properties.title};
const data = [{
  labels:properties.xArray.get(0, properties.xArray.length()),
  values:properties.yArray.get(0, properties.yArray.length()),
    hole: properties.hole,
  type:"pie",
}];

Plotly.newPlot(instance.data.id, data, layout);
    

}