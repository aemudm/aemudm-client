# Instructions pour permettre à n'importe qui ne connaissant rien de la programmation de pouvoir modifier le site web

Après la lecture de ce document nous avons pour but que vous soyez en mesure de modifier les pages existantes du site web vous-même :)

pour commencer, voici la structure des dossiers les plus utilisés du projet:
```
    ├── public                  # public: Contient les fichiers à télécharger pour les utilisateurs
    ├── src                     # src: Dossier contenant tout le code source
        ├── images              # images: Dossier contenant toutes les images
        └── pages               # pages: Dossier contenant le contenu pour chaque page
            ├── accueil.jsx     # Accueil.jsx: Page d'accueil
            ├── activites.jsx   # activites.jsx: Page des activités
            └── ...             # etc.
```

#### c'est dans le dossier pages que vous pourrez modifier l'essentiel du contenu d'une page très facilement après quelques explications



Essentiellement, chaque page contient la balise parente Page, et la page est divisée en Section qui contient des Card représentés de façon vulgarisée comme suis :

```
<Page>
    <Section>
        <Card />
        <Card />
     </Section>
     <Section>
        <Card />
        <Card />
     </Section>
</Page>
```

Plus concrêtement voici à quoi ressemble le contenu d'une vraie Section

```
<Page>
    <Section background='green' title='Les postes actifs'>
      <ScrollCard
        image="membre"
        title="Membres"
        description="Chaque membre actif est lié à un comité respectif et a..."
      />
      <ScrollCard
        image="benevole"
        title="Bénévoles"
        description="Le bénévole actif n'est affilié à aucun comité en..."
      />
    </Section>
</Page>
```
Et voici le résultat:

![Example d'une section](./src/images/md1.png?raw=true)


# Informations pour chaques types de balises

Maintenant, passons aux choses sérieuses!

Nous allons voir rapidement ce que chaque balise peut prendre en paramètre


## Balise \<Section /\>
| Nom du paramètre | Valeurs possibles | Description |
|------------------|-------------------|-------------|
| background | texte parmis : beige, green, books |
| title | texte |

### Exemple avec tous les paramètres
```
    <Section
        background="beige"
        title="My title"
    >
    </Section>
```


## Balise \<Card /\>
| Nom du paramètre (tous non-obligatoires) | Valeurs possibles | Description |
|------------------|-------------------|-------------|
| title | texte | titre de la carte |
| subTitle | texte | sous-titre de la carte |
| description | texte | description de la carte |
| image | nom du fichier d'image sans extension | une seule image |
| imageList | \["img1", "img2", ...\] | Liste d'images |
| fullSizeImage | nom du fichier d'image sans extension | Image qui prend toute la largeur
| cardLink | url | lien url lorsqu'on clique sur la carte |
| buttonLink | url | lien url d'un boutton |
| buttonTitle | texte | titre du boutton |
| file | url | lien vers un fichier dans le dossier publique |
| thinPadding | boolean | Carte avec une plus petite bordure |

### Exemple avec tous les paramètres
```
    <Card
        title="Mon titre"
        subTitle="Mon sous-titre"
        description="Ma description"
        image="monImage"
        imageList={["img1", "img2"]}
        fullSizeImage="fullSizeImage"
        cardLink="www.exemple.com"
        buttonLink="www.exemple.com"
        buttonTitle="Exemple"
        file="./monFichier.pdf"
        thinPadding
    />
```


## Balise \<ScrollCard /\>
| Nom du paramètre | Valeurs possibles | Description | Obligatoire |
|------------------|-------------------|-------------|-------------|
| title | texte | titre de la carte | Oui |
| description | texte | description de la carte | Oui |
| image | nom du fichier d'image sans extension | une seule image | Oui |
| imageHeight | pixel | hauteur de l'image en pixel | Non |
| link | url | lien url lorsqu'on clique sur la carte | Non |
| file | url | lien vers un fichier dans le dossier publique | Non |

### Exemple avec tous les paramètres
```
    <ScrollCard
        title="Mon titre"
        description="Ma description"
        image="monImage"
        imageHeight="40px"
        link="www.exemple.com"
        file="./monFichier.pdf"
    />
```


## Balise \<HexagoneCard /\>
| Nom du paramètre | Valeurs possibles | Description | Obligatoire |
|------------------|-------------------|-------------|-------------|
| title | texte | titre de la carte | Oui |
| subTitle | texte | sous-titre de la carte | Non |
| description | texte | description de la carte | Oui |
| image | nom du fichier d'image sans extension | une seule image | Oui |

### Exemple avec tous les paramètres
```
    <HexagoneCard
        title="Mon titre"
        subTitle="Mon sous-titre"
        description="Ma description"
        image="monImage"
    />
```

## Balise \<Header /\>
| Nom du paramètre | Valeurs possibles | Description |
|------------------|-------------------|-------------|
| image | nom du fichier d'image sans extension | image d'arrière-plan |

### Exemple avec tous les paramètres
```
    <Header
        image="monImage"
    />
```


## Balise \<Carousel /\>
| Nom du paramètre | Valeurs possibles | Description |
|------------------|-------------------|-------------|
| imageList | \["img1", "img2", ...\] | Liste d'images |
| speed | temps en secondes | Temps de défilement entre les images |

### Exemple avec tous les paramètres
```
    <Carousel
        imageList={["img1, "img2"}
        speed={5}
    />
```

## Exercice : Modification d'une vraie page

Donc Maintenant que nous avons vu un peu tout ce qui se cache sous le capot, modifions quelques informations dans la page S'impliquer :

Considérant que vous êtes connectés au compte de l'AEMUDM sur github,

1. Remmontons au début de la page, dans le gestionnaire de fichiers comme suit

![Example d'une section](./src/images/md2.png?raw=true)

2. Cliquer sur le dossier src
3. Cliquer sur le dossier pages 
4. Cliquer sur le dossier Simpliquer.jsx
5. Cliquer sur le boutton de modification au dessus du contenu de fichier comme suit

![Boutton d'édition](./src/images/md3.png?raw=true)

6. Défiller complètement vers le bas de la page et changer les 2 dernières ScrollCard pour que leurs titles respectifs soient:
    Membres actifs
    Membres ponctuels

###### Note: pour retrouver le contenu que vous voulez chercher rapidement: un simple ```ctrl + f``` sur windows ou ```cmd + f``` sur mac vous permettera de chercher plus rapidement

7. Sauvegarder vos changements afin qu'ils soient automatiquement changés sur le site en ligne! (cela peut prendre quelques minutes)

Comme illustré sur la photo ci-dessous vous devez donner un titre à vos modifications et s'assurer que le boutton:
```Commit directly to the master branch.```
soit séletionné

Et finalement cliquez sur commit changes

![Boutton d'édition](./src/images/md4.png?raw=true)


## Exercice 2 : Ajout ou modification d'une image
supposons que nous avons une image appelée quran.jpg


1. Aller dans le répertoire des images (cliquer sur src puis sur images)
2. faire un drag & drop de l'image dans le répertoire
3. faites un commit des changements comme dans l'exercice 1 au point #7
4. aller dans une page et ajoutez cette carte 
```
    <Card
        title="Al-Quran al-karim"
        image="quran"
    />
```
5. Faites un autre commit

## Exercice 3 (plus avancé): Créer une page

1. Aller dans src/pages
2. Cliquez sur Create new file

![Boutton d'édition](./src/images/md5.png?raw=true)

4. Nommez le Fichier ```MyPage```

3. Ajoutez ce contenu au fichier

```
import React from 'react'
import { Section, Card, ScrollCard, Page } from '../components'

const MyPage = () => (
  <Page>
    <Section background='beige' title='Titre 1'>
      <Card
        title="Mon titre 1"
        image="img1"
        description="Ma description 1"
      />
      <Card
        title="Mon titre 2"
        image="img2"
        description="Ma description 1"
      />
    </Section>
</Page>
)

export default MyPage
```

4. Faites un commit

#### Permettre que la page soit accessible depuis un url

5. Allez dans le répertoire src/Routes.jsx et cliquez sur modifier le fichier
6. ajoutez un cette ligne où il y a les autres ```import```` <bold>(pas ailleurs)</bold>
```
import MyPage from './pages/MyPage'
```
7. ajouter cet Route <bold>au dessus</bold> du Redirect
```
<Route path='/mypage' component={MyPage} />
```
8. Faire un commit (vérifier après si le site fonctionne toujours)

#### Ajouter la page dans la barre de navigation

9. Aller dans le répertoire src/components/Nav.jsx
10. Ajouter ceci dans les NavLink
```
    <NavLink to='/mypage'>My Page</NavLink>
```

##### Tadam!! vous avez ajouté une page!

## Exercice 4 (très avancé!) téléchargez le projet, faites le fonctionner en locale et publiez votre nouvelle version

1. Ouvrez le terminal
2. Allez dans le bureau
```
    cd desktop
```
3. clonez le répertoire 
```
    git clone https://github.com/aemudm/aemudm-client
```
4. Accédez au répertoire
```
    cd aemudm-client
```
5. installez les dépendances
```
    npm i
```
6. Démarrez le projet 
```
    npm start
```
7. Utilisez votre éditeur de texte préféré et modifiez des fichiers
8. stagez vos fichiers dans l'invite de commandes
```
    git add .
```
9. faites un commit
```
    git commit -m"My first commit"
```
10. Publiez vos résultats sur le web
```
    git push origin master
```