//************************
// *******Model
//************************
    var model = {
        currentCat: null,
        cats:[
        {name:"Kitty",
         imgURL:"images/kitty.jpg",
         clickcount:0       
        }
        ,
        {name:"Catty",
         imgURL:"images/catty.jpg",
         clickcount:0            
        }
        ,
        {name:"Oscar",
         imgURL:"images/oscar.jpg",
         clickcount:0
        }
        ,
        {name:"Pussy",
         imgURL:"images/pussy.jpg",
         clickcount:0
        }
        ,
        {name:"Tiger",
         imgURL:"images/tiger.jpg",
         clickcount:0
        }
        ]        
    };

//************************
// *******Octopus
//************************

    var octopus = {
        getAllCats: function(){
            return model.cats;
        },
        
        getCurrentCat: function(){
            return model.currentCat;
        },

        setCurrentCat: function(cat){
            model.currentCat = cat;
            catView.render()
        },
        
        countClick: function(){
            model.currentCat.clickcount++;
            catView.render();
        },

        updateCat: function(cat){
            model.currentCat.name = cat.catname;
            model.currentCat.imgURL = cat.imgurl;
            model.currentCat.clickcount = cat.clickcount;
            catListView.render();
            catView.render();
        },

        init: function(){
            model.currentCat = model.cats[0];
            catView.init();
            catListView.init();
        },

    };

//************************
// *******View
//************************

    var catListView = {
        init: function(){
            this.catList = document.getElementById('cat-list');
            this.render();
        },

        render: function(){
            this.catList.textContent='';
            cats = octopus.getAllCats();
            for(var i=0; i < cats.length; i++)
            {
                cat = cats[i];
                var elem    = document.createElement('li');
                var link = document.createElement('a');
                link.href="#";
                elem.appendChild(link);                
                elem.children[0].textContent = cat.name;
                this.catList.appendChild(elem);

//  Below code is good example of Closure functionality

                elem.children[0].addEventListener('click',function(cat){
                    return function(){
                        octopus.setCurrentCat(cat);
                    };
                }(cat),false);    

            };      

        }
    };

    var catView = {
        init: function(){
        //  Get All elements rlated to selected cat
            this.catname = document.getElementById('cat-name');
            this.catimg = document.getElementById('cat-img');
            this.catclick = document.getElementById('click-count');
            this.adminbutton = document.getElementById('admin-btn');
            console.log(this.catimg);
            this.catimg.addEventListener('click', function(){
                 octopus.countClick();
            },false);

        //  Get form elements rlated to selected cat
            this.formcatname = document.getElementById('form-cat-name');
            this.formcatimg = document.getElementById('form-img-url');
            this.formcatclick = document.getElementById('form-click-count');            
            var cancelbutton = document.getElementById('form-cancel');
            var submitbutton = document.getElementById('form-submit');
            var adminform = document.getElementsByTagName('form')[0];
            

            this.adminbutton.addEventListener('click', function(e){
                adminform.classList.toggle('open');
            },false);
            
            cancelbutton.addEventListener('click', function(){
                 adminform.classList.toggle('open');
            },false);

            submitbutton.addEventListener('click', function(){
                var formcatname = document.getElementById('form-cat-name');
                var formcatimg = document.getElementById('form-img-url');
                var formcatclick = document.getElementById('form-click-count');                    
                // var path = document.URL.split('?')[1];
                // var keyvalue = path.split('&') ;
                // var cat = {catname: keyvalue[0].split('=')[1] ,imgurl: keyvalue[1].split('=')[1] ,clickcount: keyvalue[2].split('=')[1]};
                var cat = {catname: formcatname.value  ,imgurl: formcatimg.value ,clickcount: formcatclick.value };
                adminform.classList.toggle('open');
                octopus.updateCat(cat);
            },false);            

            this.render();
        },

        render: function(){
            var currentCat = octopus.getCurrentCat();
                this.catname.textContent = currentCat.name;
                this.catclick.textContent = currentCat.clickcount;
                this.catimg.src = currentCat.imgURL;

                this.formcatname.value = currentCat.name;
                this.formcatclick.value = currentCat.clickcount;
                this.formcatimg.value = currentCat.imgURL;                
        } 
    };

octopus.init();