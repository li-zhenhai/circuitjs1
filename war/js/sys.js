//System commands for calling:

function close_app() {
  if(confirm("Are you sure you want to close this window?")){
     nw.Window.get().close(true);
     }
}

nw.Window.get().on('close', function () {
  close_app();
});


// Manipulations with nw.js:

/*Optimizing application size:*/

nw.Screen.Init();
let dwidth =  nw.Screen.screens[0].bounds.width;
let dheight =  nw.Screen.screens[0].bounds.height; // for new window

/*
Scale: nw.Window.get().zoomLevel
*/

  if (dwidth >= 1960)
    nw.Window.get().zoomLevel = 1.6; // 2-0.4 and etc.
  else if (dwidth >= 1752 && dwidth < 1960)
    nw.Window.get().zoomLevel = 1.1; // -0.4
  else if (dwidth >= 1600 && dwidth < 1752)
    nw.Window.get().zoomLevel = 0.7; // -0.3
  else if (dwidth >= 1460 && dwidth < 1600)
    nw.Window.get().zoomLevel = 0.3; // -0.2
  else if (dwidth >= 1200 && dwidth < 1460)
    nw.Window.get().zoomLevel = -0.1; // -0.1
  else if (dwidth < 1200)
    nw.Window.get().zoomLevel = -0.3;

//use dwidth and dheight variables for size new window
////nw.Window.get().resizeTo(dwidth*0.75, dheight*0.75);
//nw.Window.get().width = dwidth*0.7;
//nw.Window.get().height = dheight*0.7;
//nw.Window.get().setPosition('center'); // do not work! why?

nw.Window.get().setMinimumSize(640, 480); // for new windows


// For Run/Stop and Reset buttons:

function SetBtnsStyle() {
  let RunStopBtn = document.getElementsByClassName("run-stop-btn")[0];
  let ResetBtn = document.getElementsByClassName("reset-btn")[0];

  if (document.getElementById("trigger").checked == true){
    RunStopBtn.style.display = "none";
    ResetBtn.style.display = "none";
  } else {
    setTimeout(() => {
      RunStopBtn.style.display = "block";
      ResetBtn.style.display = "block";
    }, 1100);
  }

  if (CircuitJS1.isRunning() == false) {
    RunStopBtn.innerHTML = "&#9654;"
    RunStopBtn.style.color = "green";
    RunStopBtn.style.borderColor = "green";
    RunStopBtn.style.paddingLeft = "3px";
  } else {
    RunStopBtn.innerHTML = "&#9724;"
    RunStopBtn.style.color = "red";
    RunStopBtn.style.borderColor = "red";
    RunStopBtn.style.paddingLeft = "0px";
  }
}

function setRunning() {
  if (CircuitJS1.isRunning() == false) {
    CircuitJS1.setSimRunning(true);
    SetBtnsStyle();
  } else {
    CircuitJS1.setSimRunning(false);
    SetBtnsStyle();
  }
}

