 google.charts.load('current', {
        'packages':['geochart'],
        
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
          var gfg=new Array(150);
              for(var i=0;i<150;i++){
              gfg[i]=new Array(2);
               }
          fetch("https://covid19.mathdro.id/api/countries").then(response=>{
                 return response.json();
                  }).then(data1=>{
                      gfg[0][0]='Country';
                     gfg[0][1]='Iso3';
                     
                   for(var i=1;i<150;i++){
                    
                     gfg[i][0]=data1.countries[i-1].name;
                     gfg[i][1]=data1.countries[i-1].name;
                    
                 }
                 
                 
          var data = google.visualization.arrayToDataTable(
                    gfg);
      
        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);

 });
    
}