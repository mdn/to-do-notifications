function install(ev) {
  ev.preventDefault();
  // define the manifest URL
  const manifest_url = "http://people.opera.com/~cmills/to-do-list/manifest.webapp";
  // install the app
  const installLocFind = navigator.mozApps.install(manifest_url);
  installLocFind.onsuccess = data => {
    // App is installed, do something 
  };
  installLocFind.onerror = () => {
    // App wasn't installed, info is in
    // installapp.error.name
    alert(installapp.error.name);
  };
};

// get a reference to the button and call install() on click
const button = document.getElementById('install');

const installCheck = navigator.mozApps.checkInstalled("http://people.opera.com/~cmills/to-do-list/manifest.webapp");
installCheck.onsuccess = () => {
  if(installCheck.result) {
    button.style.display = "none";
  } else {
    button.addEventListener('click', install, false);
  };
};
