google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

         var gfg=new Array(32);
              for(var i=0;i<32;i++){
              gfg[i]=new Array(4);
               }
          fetch("https://covid19.mathdro.id/api/countries/IND/deaths").then(response=>{
                 return response.json();
                  }).then(data1=>{
                      gfg[0][0]='ID';
                     gfg[0][1]='Confirmed';
                     gfg[0][2]='Recovered';
                     gfg[0][3]='Active';
                    // gfg[0][4]='deaths';

                   for(var i=0;i<31 ;i++){
                    //var s=data[i].provinceState;
                     gfg[i+1][0]=data1[i].provinceState;
                     gfg[i+1][1]=data1[i].confirmed;
                     gfg[i+1][2]=data1[i].recovered;
                     gfg[i+1][3]=data1[i].active;
                     //gfg[i][4]=data[i].deaths;
                 }
        
                  console.log(gfg);
                 var data = google.visualization.arrayToDataTable(
                                  gfg);
       
                 console.log("DONE");
             var options = {
              title: 'Corona Cases In States of India' ,
                  
                  colorAxis: {colors: ['yellow', 'red']},
                  hAxis: {title: 'confirmed'},
                  vAxis: {title: 'recovered'},
                  bubble: {textStyle: {fontSize: 10,bold: true}},
                  sizeAxis: { minValue: 0, maxValue: 10 }
                  };

        var chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
        chart.draw(data, options);
                 });
                
         
      }