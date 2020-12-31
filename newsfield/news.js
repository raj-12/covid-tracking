var input=document.getElementById("input");



fetch('https://gnews.io/api/v3/search?q=corona updates&token=3f3a9c81b860b79d3441271721b260a0')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    	var d=document.getElementsByClassName("row")[0];
        console.log(data);
        console.log(data.articles[0].title);




        for(var i=0;i<data.articleCount;i++){



        div1=document.createElement("div");
        div1.className="ct-blog col-sm-6 col-md-4";
        div2=document.createElement("div");
        div2.className="inner";
        div3=document.createElement("div");
        div3.className="fauxcrop";
        img=document.createElement("img");
        div4=document.createElement("div");
        div4.className="ct-blog-content";
        div5=document.createElement("div");
        div5.className="ct-blog-date";


        if(img.src==null){
        img.src=data.articles[i].image;
    	}else{
    	img.alt=data.articles[i].source.name;
    	}
       // img.alt="Image is disable of this News";
        d.appendChild(div1);
        div1.appendChild(div2);
        div2.appendChild(div3);
        div3.appendChild(img)
        div2.appendChild(div4);
        div4.appendChild(div5);
        span=document.createElement("span");
        strong=document.createElement("strong");
        div5.appendChild(span);
        div5.appendChild(strong);
        span.appendChild(document.createTextNode(data.articles[i].publishedAt));
        strong.appendChild(document.createTextNode("1"));

        h3=document.createElement("h3");
        h3.className="ct-blog-header";
       
        a=document.createElement("a");
        a.appendChild(document.createTextNode(data.articles[i].title));
        a.href=data.articles[i].url;
        h3.appendChild(a);
        div4.appendChild(h3);

        }
    

    });

