// Below cat clicker adds the cat div in displayarea <div> for each cat
// as and when it is clicked but hide all cat <div> but the one which is clicked
// it preserves the click count of each cat in the respective sections
var selectCat = function (e){
	var countClick = function (){
		// console.log(count);
		// console.log(output)
		if (output.textContent){
			output.textContent= parseInt(output.textContent)+count;
		}
		else
		{
			output.textContent= count;
		}			
	};

	if (e.target.tagName == "A")
	{
		var divReq = true;
		var catDiv;
		// console.log(e.target.id);
		for (var i=0 ; i<catarea.children.length ; i++)
		{	
			if ( catarea.children[i].className.indexOf(e.target.id)  != -1 ){
				divReq = false;	
				catDiv = catarea.children[i];
			}
			if("open" == catarea.children[i].classList[1]){
				catarea.children[i].classList.toggle("open");	
			}
			// console.log(catarea.children[i].classList)			
		}
		// console.log(divReq);
		if(divReq){
			var newDiv = document.createElement('div');
			var namepara = document.createElement('p');
			var countpara = document.createElement('p');
			var br = document.createElement('br');
			var newbtn = document.createElement('button');
			var newimg = document.createElement('img');
			catarea.appendChild(newDiv);
			newDiv.className = 	e.target.id;
			newDiv.appendChild(namepara);
			namepara.className = "catname";
			newDiv.appendChild(newbtn);
			newbtn.appendChild(newimg);
			newDiv.appendChild(countpara);
			countpara.id=e.target.id;
			countpara.className = "clickCount";
			// console.log(newDiv);
			catDiv = newDiv;

			if (catDiv.children[1].addEventListener){
				catDiv.children[1].addEventListener('click', countClick, false);
			}
		}
		
		var catname = e.target.textContent;
		var catbtn = catDiv.children[1];
		var output = catDiv.children[2];
		catDiv.children[0].textContent = catname;
		catbtn.firstChild.src = "images/" + catname.toLowerCase() +".jpg";		
		if (catDiv.className.indexOf("open") == -1){
			catDiv.className+= " open";
		}
		// console.log(catDiv);

		var count = 1;

	}
}		

var selCat = document.getElementById('catlist');
var catarea = document.getElementsByClassName('catdisplayarea')[0];
if (selCat.addEventListener){
	selCat.addEventListener('click', selectCat,false);
};

//Below code will run with one div for cat already present in the HTML
// and each time user selects a cat, we just override the <img> src attr
// and resets the count.
/*
var countClick = function (){
	if (output.textContent){
		output.textContent= parseInt(output.textContent)+count;
	}
	else
	{
		output.textContent= count;
	}			
};

var selectCat = function (e){
	if (e.target.tagName == "A")
	{
		var catname = e.target.textContent;
		cat.src = "images/" + catname.toLowerCase() +".jpg";
		catarea.children[0].textContent = catname;
		catarea.children[3].textContent = '';
		if (catarea.className.indexOf("open") == -1){
			catarea.className+= " open";
		}

	}
}		

var selCat = document.getElementById('catlist');
var catarea = document.getElementsByClassName('catdisplayarea')[0];
var cat = document.getElementById('cat');
var output = document.getElementById('clickCount');
var count = 1;

if (cat.addEventListener){
	cat.addEventListener('click', countClick, false);
}
if (selCat.addEventListener){
	selCat.addEventListener('click', selectCat,false);
}
*/