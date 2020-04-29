window.onload = function () {
  Particles.init({
    selector: '.particle',
    color: '#ffffff',
    connectParticles: true,
    speed: 0.3,
    sizeVariations: 6,
    responsive: [
      {
        breakpoint:
          768
        ,
        options: {
          maxParticles:
            50
          ,
          connectParticles:
            true
        }
      }, {
        breakpoint:
          425
        ,
        options: {
          maxParticles:
            40
          ,
          connectParticles:
            true
        }
      }, {
        breakpoint:
          320
        ,
        options: {
          maxParticles:
            25

          // disables particles.js
        }
      }
    ]
  });
};




