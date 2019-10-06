# Instruction pour permettre à n'importe qui ne connaissant rien de la programmation de pouvoir modifier le site web

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
        image={images.membre}
        title='Membres'
        description="Chaque membre actif est lié à un comité respectif et a..."
      />
      <ScrollCard
        image={images.benevole}
        title='Bénévoles'
        description="Le bénévole actif n'est affilié à aucun comité en..."
      />
    </Section>
</Page>
```
Et voici le résultat:

![Example d'une section](./src/images/md1.png?raw=true)

De plus il est à noter que vous pouvez utiliser une image en la déposant dans le dossier 'images' et utiliser l'élément :
images.nomDeLimage
pour l'utiliser où 'nomDeLimage' correspond au nom que vous avez donné au fichier d'image

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
        background='beige'
        title='My title'
    >
    </Section>
```


## Balise \<Card /\>
| Nom du paramètre (tous non-obligatoires) | Valeurs possibles | Description |
|------------------|-------------------|-------------|
| title | texte | titre de la carte |
| subTitle | texte | sous-titre de la carte |
| description | texte | description de la carte |
| image | image.nomDunFichierDimage | une seule image |
| imageList | \[images.img1, images.img2, ...\] | Liste d'image |
| fullSizeImage | image.nomDunFichierDimage | Image qui prend toute la largeur
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
        image={images.monImage}
        imageList={[images.img1, images.img2]}
        fullSizeImage={images.fullSizeImage}
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
| image | image.nomDunFichierDimage | une seule image | Oui |
| imageHeight | pixel | hauteur de l'image en pixel | Non |
| link | url | lien url lorsqu'on clique sur la carte | Non |
| file | url | lien vers un fichier dans le dossier publique | Non |

### Exemple avec tous les paramètres
```
    <ScrollCard
        title="Mon titre"
        description="Ma description"
        image={images.monImage}
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
| image | image.nomDunFichierDimage | une seule image | Oui |

### Exemple avec tous les paramètres
```
    <HexagoneCard
        title="Mon titre"
        subTitle="Mon sous-titre"
        description="Ma description"
        image={images.monImage}
    />
```

## Balise \<Header /\>
| Nom du paramètre | Valeurs possibles | Description |
|------------------|-------------------|-------------|
| image | image.nomDunFichierDimage | image d'arrière-plan |

### Exemple avec tous les paramètres
```
    <Header
        image={images.monImage}
    />
```


## Balise \<Carousel /\>
| Nom du paramètre | Valeurs possibles | Description |
|------------------|-------------------|-------------|
| imageList | \[images.img1, images.img2, ...\] | Liste d'images |
| speed | temps en secondes | Temps de défilement entre les images |

### Exemple avec tous les paramètres
```
    <Carousel
        imageList={[images.img1, images.img2]}
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
