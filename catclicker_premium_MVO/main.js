$(function(){

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

        init: function(){
            model.currentCat = model.cats[0];
            catView.init();
            catListView.init();
        },

    };

//************************
// *******Views
//************************

    var catListView = {
        init: function(){
            this.catList = $('#cat-list');
            this.render();
        },

        render: function(){
            cats = octopus.getAllCats();
            for(var i=0; i < cats.length; i++)
            {
                cat = cats[i];
                var elem    = $("<li></li>");
                this.catList.append(elem);
                $('li:last').append("<a></a>")
                $('a:last').attr("href","#");
                $('a:last').text(cat.name);

//  Below code is good example of Closure functionality

                $('a:last').on('click',function(cat){
                    return function(){
                        octopus.setCurrentCat(cat);
                    };
                }(cat));    

            };      

        }
    };

    var catView = {
        init: function(){
            this.catname = $('#cat-name');
            this.catimg = $('#cat-img');
            this.catclick = $('#click-count');
            this.catimg.on('click', function(){
                 octopus.countClick();
            });
            this.render();
        },

        render: function(){
            var currentCat = octopus.getCurrentCat();
                this.catname.text(currentCat.name);
                this.catclick.text(currentCat.clickcount);
                this.catimg.attr({src:currentCat.imgURL,id:currentCat.name});
            } 
    };

    octopus.init();
}());