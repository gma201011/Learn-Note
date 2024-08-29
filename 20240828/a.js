var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:9000/data", true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Response is: " + xhr.responseText);
  } else {
    console.error("Error: " + xhr.responseText);
  }
};
xhr.onerror = function () {
  console.error("Network error or cross-origin request denied");
};
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Response is: " + xhr.responseText);
    } else {
      console.error("Error: " + xhr.responseText);
    }
  }
};
xhr.send();
