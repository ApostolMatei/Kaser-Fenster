<template>
  <AboutSection></AboutSection>
  <ServicesSection></ServicesSection>
  <WhyusSection></WhyusSection>
  <TestimonialSection></TestimonialSection>
</template>

<script>
import AboutSection from './About-Section.vue'
import ServicesSection from './Services-Section.vue'
import WhyusSection from './Whyus-Section.vue'
import TestimonialSection from './Testimonials-Section.vue'
//
export default {
  components: {
    AboutSection,
    ServicesSection,
    WhyusSection,
    TestimonialSection
  },
  name: 'Main-Content'
}
</script>

<style lang="scss" scoped></style>
