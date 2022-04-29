const tabs = document.querySelectorAll('[data-tab-value]')
        const tabInfos = document.querySelectorAll('[data-tab-info]')
  
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document
                    .querySelector(tab.dataset.tabValue);
  
                tabInfos.forEach(tabInfo => {
                    tabInfo.classList.remove('active')
                })
                target.classList.add('active');
            })
        })

function getBrowserSize(){
            var w, h;
     
              if(typeof window.innerWidth != 'undefined')
              {
               w = window.innerWidth; //other browsers
               h = window.innerHeight;
              } 
              else if(typeof document.documentElement != 'undefined' && typeof      document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) 
              {
               w =  document.documentElement.clientWidth; //IE
               h = document.documentElement.clientHeight;
              }
              else{
               w = document.body.clientWidth; //IE
               h = document.body.clientHeight;
              }
            return {'width':w, 'height': h};
     }
     
if(parseInt(getBrowserSize().width) < 800){ // if small media screen

      var tempS = document.getElementById("profileDiv").innerHTML;
      document.getElementById("profileDivHome").innerHTML = tempS;
      document.getElementById("profileDiv").innerHTML = "";
      document.getElementById("tabgroup1").style.display = "none";
      document.getElementById("tabgroup2").style.display     = "";
      //document.getElementById("separateMenu").innerHTML = "<br/>";      
/*}else{
    var tempS = document.getElementById("tabgroup2").innerHTML;
    document.getElementById("tabgroup1").innerHTML =  document.getElementById("tabgroup1").innerHTML + tempS;
    document.getElementById("tabgroup2").innerHTML = "";
    */
}