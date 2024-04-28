function(instance, properties, context) {

var div =  document.getElementById(instance.data.id);


div.style.width = "100%";
div.style.height = "100%";
const data = [{
  x:properties.xArray.get(0, properties.xArray.length()),
  y:properties.yArray.get(0, properties.yArray.length()),
  mode:properties.mode,
  type:"scatter"
}];
    
const layout = {
  xaxis: {range: [properties.xaxis_range_start, properties.xaxis_range_end], title: properties.xaxisTitle},
  yaxis: {range: [properties.yaxis_range_start,  properties.yaxis_range_end], title: properties.yaxiTitle},
  title: properties.title
};

Plotly.newPlot(instance.data.id, data, layout);
    

}