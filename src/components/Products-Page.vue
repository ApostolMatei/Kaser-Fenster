<template>
    <div class="grid-section" >
    <div class="image-box"></div> 
<div class="text-section">
    <div class="text-box">
    <h3>Fenster</h3>
    <p>Entdecken Sie unsere Fenster aus Kunststoff, Kunststoff-Alu, Aluminium, Holz und Holz-Alu</p>
    <span>Qualitativ hochwertige Fenster in verschiedenen Materialien und Ausführungen - für mehr Energieeffizienz und Stil</span>
</div>
   </div>
<div class="text-section">
   <div class="text-box"> 
  <h3>Turen</h3>
  <p>Entdecken Sie unsere Turen aus Kunststoff, Kunststoff-Alu, Aluminium, Holz und Holz-Alu.</p>
    <span>Unsere maßgefertigten Türen bieten höchste Sicherheit, Energieeffizienz und Stilvielfalt - perfekt für Ihr Zuhause oder Büro  </span>

   </div>
</div>
    <div class="image-box"></div>
    <div class="image-box"></div> 
<div class="text-section">
    <div class="text-box">
    <h3>Sonnenschutz</h3>
    <p>Entdecken Sie unsere Innen - und Außen - Sonnenschutzprodukte aus allen Materialien</p>
    <span>Schützen Sie Ihr Zuhause vor Sonnenstrahlen mit unseren maßgefertigten Innen- und Außen-Sonnenschutzlösungen in verschiedenen Materialien und Designs  </span>
</div>
   </div>
<div class="text-section">
   <div class="text-box"> 
  <h3>Einbruchsschutz</h3>
  <p>Mehr Einbruchschutz mit wenig Aufwand - entdecken Sie jetzt!</p>
    <span>Unser maßgeschneidertes Einbruchschutzsystem bietet maximale Sicherheit für Ihr Zuhause oder Büro - mit wenig Aufwand installiert. </span>

   </div>
</div>
    <div class="image-box"></div>
   </div>
</template>


<script></script>


<style scoped lang="scss">

.grid-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.image-box {
    background-color: aliceblue;
    padding: 300px 0;
 
}
.text-section {
    display: grid;
    place-items: center;
   
    background-color: black; 
    color: white;
      width: 100%;
      .text-box {
        display: grid;
        gap: 20px;
      }
      
      
    // padding: 250px 0;
    h3 {
        color: rgb(236, 198, 7);

    }
    p {
        font-size: 30px;
        max-width: 350px;
    }
    span {
        color: gray;
        display: block;
        max-width: 350px;
        line-height: 20px;
        
    }
}
</style>