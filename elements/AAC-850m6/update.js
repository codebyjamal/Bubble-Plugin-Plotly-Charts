function(instance, properties, context) {

var div =  document.getElementById(instance.data.id);


div.style.width = "100%";
div.style.height = "100%";
    const layout = {title:properties.title};
const data = [{
  x:properties.xArray.get(0, properties.xArray.length()),
  y:properties.yArray.get(0, properties.yArray.length()),
  type:"bar",
  orientation:properties.orientation,
  marker: {color:properties.markercolor}
}];
Plotly.newPlot(instance.data.id, data, layout);
    

}