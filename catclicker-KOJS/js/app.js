var Cat = function(){
				this.catname = ko.observable("Kitty"),
         		this.imgURL = ko.observable('images/22252709_010df3379e_z.jpg'),
         		this.clickcount = ko.observable(0), 
         		this.nicknames = ko.observableArray([
         				{ name: "Misty"},
         				{ name: "Pussy"},
         				{ name: "Tiger"},
         				{ name: "Sweety"},
         				]),      
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
				this.currentCat = ko.observable(new Cat());
         		this.incrementCounter = function(){
         			this.clickcount(this.clickcount() + 1);
         		}

   			};

ko.applyBindings(new ViewModel());