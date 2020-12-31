var input=document.getElementById("country");
var button=document.getElementById("event");

     function spot(event) {
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
       // body...
     }
      
      function drawChart() {
             
          fetch("https://covid19.mathdro.id/api/countries/"+input.value+"/deaths").then(response=>{
                 return response.json();
                  }).then(data1=>{


                      console.log(data1.length);
                    var gfg=new Array(data1.length+1);
                      for(var i=0;i<=data1.length;i++){
                            gfg[i]=new Array(5);
                      }
                     gfg[0][0]='States';
                     gfg[0][1]='Confirmed';
                     gfg[0][2]='Recovered';
                     gfg[0][3]='Active';
                     gfg[0][4]='Deaths';
                     var s=data1[0].countryRegion;
                     console.log(data1[0].countryRegion);
                      

                      if(data1[0].provinceState===null){
                     gfg[1][0]=data1[0].countryRegion;
                     gfg[1][1]=data1[0].confirmed;
                     gfg[1][2]=data1[0].recovered;
                     gfg[1][3]=data1[0].active;
                     gfg[1][4]=data1[0].deaths;
                      }else{

                   for(var i=0;i<=data1.length-1;i++){
                    //var s=data[i].provinceState;
                     gfg[i+1][0]=data1[i].provinceState;
                     gfg[i+1][1]=data1[i].confirmed;
                     gfg[i+1][2]=data1[i].recovered;
                     gfg[i+1][3]=data1[i].active;
                     gfg[i+1][4]=data1[i].deaths;
                 }
               }
               
        var data = google.visualization.arrayToDataTable(
          gfg
        );

        var options = {
          chart: {
            title: 'Corona Cases in '+data1[0].countryRegion+' Statewise',
            subtitle: 'Its a live tracker of corona cases',
          },
          bars: 'vertical' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

      });
                 input.value="";
      }
button.addEventListener("click",spot);