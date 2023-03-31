<template style="color:white;">
  <div class="aboutbox">About us</div>
  <div class="aboutinfo" style="background-color: #fed991;">
    <div class="titles">OUR MISSION</div>
    <div class="paragraphs"><p>Seit über 15 Jahren sind wir auf Fenster-, Tür-, Sonnenschutzsysteme und Einbruchschutz spezialisiert. Wir bieten individuelle Lösungen und setzen Ihre Wünsche mit qualitativ hochwertigen Produkten um. Unser Ziel ist es, dass Sie sich in Ihrem Zuhause sicher und wohl fühlen. Dank unserer langjährigen Erfahrung und dem Kontakt zu namhaften Herstellern können wir Ihre Anforderungen schnell und unkompliziert umsetzen. "Unser Wissen ist Ihr Vorteil" ist unser Motto und wir setzen es jeden Tag für unsere Kunden um.</p></div>
    </div>
    <div class="aboutinfo vision"><div class="titles" style=" color: white;" >OUR VISION</div>
    <div class="paragraphs"><p style="color: white; color: white;" >Unser Ziel ist es, Ihr Zuhause noch sicherer, schöner und komfortabler zu gestalten. Wir möchten, dass Sie sich in Ihren eigenen vier Wänden rundum wohl fühlen und jederzeit entspannen können. Dafür setzen wir auf qualitativ hochwertige Produkte und individuelle Lösungen, die perfekt auf Ihre Bedürfnisse abgestimmt sind. Wir möchten uns ständig verbessern und unser Know-how erweitern, um Ihnen immer die neuesten und innovativsten Produkte anbieten zu können. Unser Fokus liegt dabei immer auf Ihrer Zufriedenheit und Ihrem Wohl. Wir möchten, dass Sie uns als zuverlässigen Partner für Ihr Zuhause betrachten und uns bei jeder Gelegenheit weiterempfehlen.</p></div>
    </div>
    <div class="aboutinfo">
      <div class="titles" style="color:deepskyblue;"> OUR VALUES</div>
      <div class="values">
      <p>-  Unsere Produkte und Dienstleistungen - langlebig & hochwertig.</p>
      <p>- Maßgeschneiderte Lösungen für Ihre Zufriedenheit.</p>
      <p>- Transparent, ehrlich und verlässlich als Partner.</p>
      <p>- Verantwortung für Natur und Zukunftssicherheit.</p>
     </div>
      </div>
      <div class="team"></div>
</template>
<script></script>
<style scoped lang="scss">


.titles {
  display: flex;
  font-size: 26px;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  height: 50px;
  
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}
p {
  font-size: 28px;
  
 
  margin: 0;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
h2 , p {
  color: rgb(20, 19, 19);
  // padding: 25px;
 
  
  font-family: 'Roboto', sans-serif;
  // white-space: nowrap
}
.aboutbox {
  padding: 100px;
  text-align: center;
  font-size: 55px;
   
    
  
}

.aboutinfo {
  display: grid;
  grid-template-columns: 40% 50%;
  padding: 130px;
  // background-color: #fed991;
  justify-content: space-around;
  // align-items: center;
  // gap: 180px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;

    padding:  130px 30px;
    gap: 50px;
  
    
  }
  p {
    max-width: 600px;
    // line-height: 25px;
    
   
  }
  .paragraphs {
    display: grid;
    gap: 20px;
    font-size: 40px;
      
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(14, 14, 14, 0.22) 0px 10px 10px;
       font-size: 40px;
       backdrop-filter: blur(50px) ;
    
    p {
      padding: 25px;
    }
  }
}
.vision {
  // background-image: url(/robot.jpg);
  background-color: rgb(202, 202, 202);
  background-size: cover;
  background-position: left;
 
}
.values {
  display: flex;
  flex-direction: column;
  gap: 30px;
 p {padding: 10px;
  

}
}


</style>
