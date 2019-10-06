import React from 'react'
import { Section, ScrollCard, Card, Header, GetInvolved, Page } from '../components'
import images from '../images'

const Simpliquer = () => (
  <Page>
    <Header image='simpliquer' />
    <Section background='beige'>
      <Card
        title="Structure de l'association"
        description="L'AEMUDM comprend 6 différents comités gérés par les différents membres de l'exécutif. Ces comités sont également alimentés par l'effort des membres actifs et bénévoles qui travaillent fort pour offrir différents biens et services aux participants aux activités et pour soutenir la communauté dans différentes causes."
      />
    </Section>
    <Section background='green' title='Les différents comités'>
      <ScrollCard
        image='freres'
        title='Comité Frères'
        description='Que ça soit une conférence, une fin de semaine au chalet ou des séances de foot ou que ça soit des rencontres hebdomadaires telles que la joumou’a et les 5@7, le comité frère donne son meilleur pour offrir des activités de qualité aux souvenirs mémorables.'
      />
      <ScrollCard
        image='soeurs'
        title='Comité Soeurs'
        description='Que ça soit une rendonnée pédestre, un tour de cheval ou un tournoi de foot ou que ça soit des rencontres bimensuelles telle que les 5@7, le comité soeur donne son meilleur pour offrir des activités de qualité aux souvenirs mémorables.'
      />
      <ScrollCard
        image='financement'
        title='Comité Financement'
        description="Puisque notre association ne reçoit aucune subvention de l'université et ne survit qu'avec ses propres moyens, le comité financement prépare selon le besoin, des projets de financement et de levée de fonds pour l’association. Grâce à des stratégies de financement créatives et efficaces, l'AEMUDM peut offrir de multiples services et activités à des tarifs raisonnables."
      />
      <ScrollCard
        image='dawah'
        title="Comité Da'wah"
        description="Se donne la vocation de créer un support à la communauté étudiante sur le campus dans sa quête de spiritualité et se donne comme mandat de sensibiliser les gens au message de l'islam. Ainsi, le comité da'wah offre du matériel (livres, corans, pamphlets), des conférences et ateliers sur divers thèmes islamiques."
      />
      <ScrollCard
        image='comcom'
        title='Comité Comcom'
        description='Site web, Facebook, youtube, affiches, dépliants, logos… Le comité communication comme son nom le suggère, s’occupe principalement de la publicité et de la promotion de nos biens et services.'
      />

    </Section>
    <Section background='beige' title='Les postes de lexécutif'>
      <ScrollCard
        image='president'
        title='Président'
        description="Administre l'ensemble de l'association, oriente sa vision et s'assure du bon fonctionnement de ses activités."
      />
      <ScrollCard
        image='vicepresident'
        title='Vice-présidents'
        description='Chaque comité est géré par un VP qui facilite la réalisation des projets de ses membres et veille au respect de la mission du comité.'
      />
      <ScrollCard
        image='secretaire'
        title='Secrétaire'
        description="Structure les rencontres de l'exécutif en produisant des compte-rendus, répond aux messages facebook et gère les réservations de salle."
      />
      <ScrollCard
        image='tresorier'
        title='Trésorier'
        description="Veille à une gestion intelligente du budget de l'association et travaille activement à trouver des nouvelles sources de financement avec les membres du comité financement."
      />
      <ScrollCard
        image='admin'
        title='VP Administration'
        description="Connait les règlements qui régissent les associations et groupes d'intérêt afin de subvenir aux besoins des musulmans du campus tout en respectant les politiques en place. "
      />
      <ScrollCard
        image='externe'
        title='VP Externe'
        description="Se charge de maintenir une communication régulière avec le milieu associatif et spécifiquement lorsque vient le temps d'organiser une activité ou un projet avec une autre association."
      />

    </Section>
    <Section background='green' title='Les postes actifs'>
      <ScrollCard
        image='membre'
        title='Membres'
        description="Chaque membre actif est lié à un comité respectif et a comme responsabilité de participer aux divers rencontres de son comité, contribuer à l'avancement de ses projets et activités. "
      />
      <ScrollCard
        image='benevole'
        title='Bénévoles'
        description="Le bénévole actif n'est affilié à aucun comité en particulier et est sollicité lorsque un Vp a besoin de soutien. Il a donc des responsabilités seulement lorsqu'il est sollicité."
      />
    </Section>
    <GetInvolved />
  </Page>
)

export default Simpliquer
