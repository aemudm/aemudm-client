import React from 'react'
import { Section, Card, ScrollCard, Page } from '../components'
import images from '../images'

const References = () => (
  <Page>
    <Section background='books' title=' '>
      <Card
        cardLink='http://www.quran.com'
        image={images.texte1}
        description='Le Noble coran en plus de 40 essais de traduction'
      />
      <Card
        cardLink='http://www.sunnah.com'
        image={images.texte2}
        description='Répertoire complet des hadiths les plus authentiques'
      />
      <Card
        cardLink='http://corpus.quran.com'
        image={images.texte3}
        description='Tout sur la sémantique du noble coran mot-à-mot'
      />
      <Card
        cardLink='http://www.assabile.com'
        image={images.texte4}
        description='Récitations coraniques célèbles et anashids'
      />
    </Section>
    <Section background='beige' title='Islam en bref et détaillé'>
      <ScrollCard
        link='http://tellmeaboutislam.com'
        image={images.detail1}
        title='Tell me about Islam'
        description="Articles détaillés sur l'islam, comparaison des différentes religions monothéistes, pourquoi le coran est-il exceptionnel e.t.c"
      />
      <ScrollCard
        link='http://newmuslimguide.com/fr'
        image={images.detail2}
        imageHeight='25px'
        title='New muslim guide'
        description='Documentation pratique pour convertis: jeûne, prière, purification, foi, nourriture, argent, pelerinage, zakat, morale, vêtements e.t.c'
      />
      <ScrollCard
        link='http://www.onereason.org'
        image={images.detail3}
        imageHeight='30px'
        title='One reason'
        description='Articles détaillés prensantant une approche rationnelle sur le fondement du sens à la vie dans un référenciel musulman.'
      />
      <ScrollCard
        link='http://www.islamreligion.com'
        image={images.detail4}
        title='Islam religion'
        description="Articles détaillés sur tous les aspects de l'islam: jurisprudence, économie, famille, histoire islamique, histoire des prophètes e.t.c"
      />
      <ScrollCard
        link='http://www.thedailyreminder.or'
        image={images.detail5}
        title='The daily reminder'
        description='Vidéos de bref rappels, podcasts et cartes de rappels sur une panoplie de sujets en islam.'
      />
      <ScrollCard
        link='http://www.maison-islam.com'
        image={images.detail6}
        imageHeight='30px'
        title='Maison islam'
        description="Articles détaillés sur multiples sujets en islam en commançant par les plus fondamentaux suivi d'aspects plus complexes."
      />
    </Section>
    <Section background='green' title='La prière rituelle'>
      <ScrollCard
        file='./prayerbooklet.pdf'
        image={images.prayer1}
        imageHeight='60px'
        title='My prayer booklet'
        description='La prière expliquée en documentation complète'
      />
      <ScrollCard
        link='https://salah.com/'
        image={images.prayer2}
        imageHeight='30px'
        title='Salah.com'
        description='Heures de prière en temps réel partout sur le globe'
      />
      <ScrollCard
        file='./prayermat.png'
        image={images.prayer3}
        imageHeight='60px'
        title='My prayer mat'
        description='La prière en brève description sur une seule page'
      />
    </Section>
    <Section background='beige' title='Nos playlist youtube préférés'>
      <Card
        thinPadding
        cardLink='https://www.youtube.com/playlist?list=PLf8YUOHXD3-nfs7-QtzZ00wKufkJIHeu-'
        image={images.video1}
        description='Le coran à travers les cultures et les peuples'
      />
      <Card
        thinPadding
        cardLink='https://www.youtube.com/playlist?list=PLutdSTmJ7bAJ8h4r5CVkUxAf-_rG0u7Ui'
        image={images.video2}
        description="Épisodes sur différents thèmes de l'islam"
      />
      <Card
        thinPadding
        cardLink='https://www.youtube.com/playlist?list=PLYZxc42QNctURgkeFzyGxuomB3k2zdCL0'
        image={images.video3}
        description="Les magnifiques noms d'Allah"
      />
      <Card
        thinPadding
        cardLink='https://www.youtube.com/playlist?list=PLAEA99D24CA2F9A8F'
        image={images.video4}
        description='Tous les aspects de la vie du prophète sws'
      />
      <Card
        thinPadding
        cardLink='https://www.youtube.com/playlist?list=PLHPW7nn9Wmb4NhafhzF_qBQR1uQ_p9p_H'
        image={images.video7}
        description='Survol de sujets islamiques à savoir'
      />
      <Card
        thinPadding
        cardLink='https://www.youtube.com/playlist?list=PL1pw3kCpenHcEZ6HfgArprRR7pUTrkc_r'
        image={images.video8}
        description='Brefs rappels inspirants de Muslim Mastery'
      />
    </Section>
    <Section background='green' title='La prière rituelle'>
      <ScrollCard
        link='https://itunes.apple.com/ca/app/muslim-pro-horaires-des-prieres/id388389451?l=fr&mt=8'
        image={images.app1}
        imageHeight='60px'
        title='Muslim pro'
        description='Heures de prière, direction de prière, le noble coran, localisation des mosquées, la citadelle du musulman et plus encore'
      />
      <ScrollCard
        link='https://itunes.apple.com/app/guidance/id289679295?mt=8'
        image={images.app2}
        imageHeight='60px'
        title='Guidance'
        description="Appel à la prière automatique en fonction de la localisation et ajustable pour tous les endroits sur terre avec plusieurs voix pour l'adhan"
      />
      <ScrollCard
        link='https://itunes.apple.com/ca/app/le-saint-coran-avec-tafsir/id537070378?l=fr&mt=8'
        image={images.app3}
        imageHeight='60px'
        title='Coran pro'
        description='Lecture, écoute et récitation du noble coran, plus de 50 récitateurs, traduction en plus de 20 langues et plus encore'
      />
    </Section>
  </Page>
)

export default References
