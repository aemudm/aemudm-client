import React from 'react'
import { Section, Card, Carousel, Page } from '../components'
import images from '../images'

const Accueil = (props) => (
  <Page>
    <Carousel imageList={[images.accueil, images.campus, images.community]} speed={5} />
    <Section background='beige'>
      <Card
        title='Qui Sommes-nous?'
        description="Nous sommes des étudiant(e)s musulman(e)s d'ici et d'ailleurs, unis dans la fraternité et la volonté de vivre l'Islam comme mode de vie à part entière, dans l'équilibre et l'harmonie qu'il inspire à l'être humain, conformément au Coran et à la tradition prophétique."
        buttonLink='/getInvolved'
        buttonTitle='En savoir plus'
      />
      <Card
        title='Notre mission'
        description="Offrir une large gamme de services à la communauté étudiante; permettre un épanouissement physique, social, spirituel et intellectuel; promouvoir le vivre ensemble harmonieux et synergique des communautés culturelles et religieuses; faciliter la compréhension de l'islam."
        buttonLink='/getInvolved'
        buttonTitle='En savoir plus'
      />
    </Section>
    <Section background='green' title='Découvrez nos activités!'>
      <Card
        cardLink='/activites#year'
        subTitle='Activités Anuelles'
        fullSizeImage={images.activite1}
      />
      <Card
        cardLink='/activites#reccurent'
        subTitle='Activités récurrentes'
        fullSizeImage={images.activite2}
      />
      <Card
        cardLink='/activites#ponctual'
        subTitle='Activités ponctuelles'
        fullSizeImage={images.activite3}
      />
    </Section>
    <Section background='beige' title='En apprendre plus sur lislam'>
      <Card
        cardLink='/references#textes'
        subTitle='Les textes religieux'
        imageList={[images.texte1, images.texte2]}
      />
      <Card
        cardLink='/references#bref'
        subTitle='Islam en bref et détaillé'
        imageList={[images.bref1, images.bref2, images.bref3]}
      />
      <Card
        cardLink='/references#priere'
        subTitle='La prière en islam'
        imageList={[images.priere1, images.priere2]}
      />
      <Card
        cardLink='/references#series'
        subTitle='Séries youtoube'
        imageList={[images.youtube1, images.youtube2]}
      />
      <Card
        cardLink='/references#apps'
        subTitle='Applications mobiles'
        imageList={[images.apps1, images.apps2, images.apps3]}
      />
    </Section>
  </Page>
)

export default Accueil
