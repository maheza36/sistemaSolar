//clase constructor Planet
var Planet = function () {
  return{
    clockwise_translation : Math.round(Math.random()),
    size:Math.random() * (100 - 10) + 10,
    speed: Math.random() * (100 - 10) + 10, //deg/sec
    color:"#AAA",
    orbit_size: Math.random() * (400 - 200) + 200,
    orbit_position: Math.random() * 360,
    getSize: function(){
      return this.size + "px";
    },
    getSpedd: function(){
      return this.speed + "deg";
    },
    getOrbitSize: function(){
      return this.orbit_size + "px";
    },
    pushDOMElement: function(dom_parent){
      var planet_li = document.createElement("li");
      var planet_span = document.createElement("span");
      planet_span.setAttribute("class","planet");
      planet_li.appendChild(planet_span);
      planet_span.style.width = this.getSize();
      planet_span.style.height = this.getSize();
      planet_li.style.position= "relative";
      planet_li.style.width = this.getOrbitSize();
      planet_li.style.height = this.getOrbitSize();
      planet_span.style.position = "absolute";
      planet_span.style.bottom = 0;
      planet_span.style.right = 0;
      dom_parent.appendChild(planet_li);
    },
  };
};
var number_of_planets = 8;
var planets=[];
while(number_of_planets-- > 0){
  planets.push(Planet());
}
console.log(planets);
document.addEventListener("DOMContentLoaded",function(){
  var planetary_system = document.querySelector(".planets");
  for(var planet_pos in planets){
    planets[planet_pos].pushDOMElement(planetary_system);
  }
});
