// ===================================
//================= Time =============
// =====================================
setInterval(myTimer, 1000);
        
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
// ===================================
//================= Time End=============
// =====================================