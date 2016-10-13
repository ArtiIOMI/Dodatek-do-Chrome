window.addEventListener('load', function() {
  // Initialize the option controls.
  options.isMusic.checked = JSON.parse(localStorage.isMusic);
  options.frequency.value = localStorage.frequency;
  options.glosnosc.value = localStorage.glosnosc;

  options.isMusic.onchange = function() {
    localStorage.isMusic = options.isMusic.checked;
  };
  
  options.frequency.onchange = function() {
    localStorage.frequency = options.frequency.value;
  };  
  options.glosnosc.onchange = function() {
    localStorage.glosnosc = options.glosnosc.value;
  };
});