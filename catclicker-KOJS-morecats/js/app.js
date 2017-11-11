var intialCatsFromServer =  [{
               catname : "Kitty",
               imgURL : 'images/22252709_010df3379e_z.jpg',
               clickcount:0,
               nicknames : ['Catty','Kitti']
               },
               {
               catname : "Casper",
               imgURL : 'images/434164568_fea0ad4013_z.jpg',
               clickcount:0,
               nicknames : ['Casu']
               },
               {
               catname : "Scaredy",
               imgURL : 'images/1413379559_412a540d29_z.jpg',
               clickcount:0,
               nicknames : ['Woooo']
               },
               {
               catname : "Tabby",
               imgURL : 'images/4154543904_6e2428c421_z.jpg',
               clickcount:0,
               nicknames : ['Tab']
               },
               {
               catname : "Sleepy",
               imgURL : 'images/9648464288_2516b35537_z.jpg',
               clickcount:0,
               nicknames : ['Mmmmmm']
               },
               {
               catname : "Oscar",
               imgURL : 'images/oscar.jpg',
               clickcount:0,
               nicknames : ['Osiii']
               },
               {
               catname : "Tiger",
               imgURL : 'images/tiger.jpg',
               clickcount:0,
               nicknames : ['Tigeress']
               },               
               {
               catname : "Misty",
               imgURL : 'images/misty.jpg',
               clickcount:0,
               nicknames : ['Missuu']
               }
            ];

var Cat = function(data){
				this.catname = data.catname,
         		this.imgURL = data.imgURL,
         		this.clickcount = ko.observable(data.clickcount), 
         		this.nicknames = ko.observableArray(data.nicknames),      
         		this.catlevel = ko.computed(function(){
         				if (this.clickcount() == 0){
         					return 'Newborn';
         				}
         				else if(this.clickcount() < 11 ){
         					return 'Infant';
         				}
         				else if(this.clickcount() < 20 ){
         					return 'Teen';
         				}
         				else if(this.clickcount() < 25 ){
         					return 'Young';
         				}         		
         				else if(this.clickcount() < 40 ){
         					return 'Adult';
         				}         		         						
         				else{
         					return 'Senior';
         				};         		         						
         		},this)

};
var ViewModel = function(){
            var self = this;
            this.catList = ko.observableArray([]);
            
            intialCatsFromServer.forEach(function(cat){
               self.catList.push(new Cat(cat));
            });
				
            this.currentCat = ko.observable(this.catList()[0]);

         	this.incrementCounter = function(){
            	this.clickcount(this.clickcount() + 1);
         	};

            this.selectThisCat = function(){
               self.currentCat(this);
            };
};


ko.applyBindings(new ViewModel());