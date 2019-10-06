import React from 'react'
import { Section, HexagoneCard, Header, Page } from '../components'

const Activite = () => (
  <Page>
    <Header image='activite' />
    <Section background='beige' title='Activités annuelles'>
      <HexagoneCard
        image='activite1'
        title='Journée des comités'
        subTitle='Mois de septembre'
        description="Kiosque pour partager l'islam et recruter des membres"
      />
      <HexagoneCard
        image='activite1'
        title='Semaine interculturelle'
        subTitle='Mois de février'
        description="kiosque pour partager l'islam et recruter des membres"
      />
      <HexagoneCard
        image='activite1'
        title='Conférence annuelle'
        subTitle='Mois de mars ou avril'
        description='Séminaire ou souper avec invités internationaux sur différentes thématiques'
      />
      <HexagoneCard
        image='activite1'
        title='Souper des membres'
        subTitle='Mois de mai'
        description="Célébration de l'effort des membres pour leur contribution"
      />
      <HexagoneCard
        image='activite1'
        title='BBQ'
        subTitle='Mois de septembre et mai'
        description="Nourriture succulente entre ami(e)s et une foule d'activités"
      />
      <HexagoneCard
        image='activite1'
        title='Soirée iftar'
        subTitle='Mois de ramadan'
        description='Haute gastronomie offerte à petit prix pour les jeûneurs'
      />
    </Section>
    <Section background='green' title='Activités récurrentes'>
      <HexagoneCard
        image='activite1'
        title='Prière du vendredi'
        description="Discours suivi de la prière offerte à Polytechnique et le pavillon de l'aménagement"
      />
      <HexagoneCard
        image='activite1'
        title='Exégèse du coran'
        description='Explication détaillée des versets du noble coran par le frère Bilal chaque vendredi dès 17h30'
      />
      <HexagoneCard
        image='activite1'
        title='Halaqa'
        description='Conférences sur différents thèmes islamiques chaque vendredi dès 18h30'
      />
      <HexagoneCard
        image='activite1'
        title='5@7'
        description='Nourriture gratuite et discussions enrichissantes entre frères et entre soeurs un mercredi sur 2'
      />
      <HexagoneCard
        image='activite1'
        title='Séances de foot'
        description="Séances de foot à chaque semaine et possibilité d'inscription à chaque début de session"
      />
      <HexagoneCard
        image='activite1'
        title='Bibliothèque'
        description='Se présente au 5@7 et à la halaqa pour offrir un service de prêt de livres islamiques'
      />
    </Section>
    <Section background='beige' title='Activités ponctuelles'>
      <HexagoneCard
        image='activite1'
        title='Sports'
        description='Rafting, ski, patin, randonnée en forêt, parties de foot et plus encore!'
      />
      <HexagoneCard
        image='activite1'
        title='Forum de discussion'
        description='Forum de discussion et de débats sur différents thèmes en islam en petits groupes'
      />
      <HexagoneCard
        image='activite1'
        title='Cabane à sucre'
        description='Moment idéal pour échanger des discussions autour des bon mets traditionnels québécois'
      />
      <HexagoneCard
        image='activite1'
        title='Chalet des membres'
        description="Retraite au chalet en été comme en hiver avec un lot d'activités (priorité aux membres) "
      />
      <HexagoneCard
        image='activite1'
        title='Aide humanitaire'
        description='charité aux plus démunis et collectes de fonds pour différentes causes humanitaires'
      />
      <HexagoneCard
        image='activite1'
        title='Ateliers'
        description='Ateliers préparés par les membres ou conférenciers sur différents thèmes'
      />
    </Section>
  </Page>
)

export default Activite
