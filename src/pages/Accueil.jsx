import React from 'react'
import { Section, Card, Carousel, Page } from '../components'

const Accueil = (props) => (
  <Page>
    <Carousel imageList={['accueil', 'campus', 'community']} speed={5} />
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
        fullSizeImage='activite1'
      />
      <Card
        cardLink='/activites#reccurent'
        subTitle='Activités récurrentes'
        fullSizeImage='activite2'
      />
      <Card
        cardLink='/activites#ponctual'
        subTitle='Activités ponctuelles'
        fullSizeImage='activite3'
      />
    </Section>
    <Section background='beige' title='En apprendre plus sur lislam'>
      <Card
        cardLink='/references#textes'
        subTitle='Les textes religieux'
        imageList={['texte1', 'texte2']}
      />
      <Card
        cardLink='/references#bref'
        subTitle='Islam en bref et détaillé'
        imageList={['bref1', 'bref2', 'bref3']}
      />
      <Card
        cardLink='/references#priere'
        subTitle='La prière en islam'
        imageList={['priere1', 'priere2']}
      />
      <Card
        cardLink='/references#series'
        subTitle='Séries youtoube'
        imageList={['youtube1', 'youtube2']}
      />
      <Card
        cardLink='/references#apps'
        subTitle='Applications mobiles'
        imageList={['apps1', 'apps2', 'apps3']}
      />
    </Section>
  </Page>
)

export default Accueil
