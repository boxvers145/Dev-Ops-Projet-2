# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 61
- Membres du groupe : NOUACH Tarik, AVRAM Florin
- lien du repos : https://github.com/boxvers145/Dev-Ops-Projet-2.git


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests 


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
<a chaque push ou pull request, il éxecute les commandes qu on lui a donner, par exemple il fait le prettier:fix, ensuite il build notre application>
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
<le ON permet de dire au fichier d exectuer ces commandes sous certaine condition, dans notre exemple, lorsque on va push ou faire un pull request. ON PUSH s ignifie que les commandes vont s exectuer a chaque fois qu il y a un push et ON PULL REQUEST, lorsque une pull request sera créer. Pour le groupe de dév junior ça dépend, si ils font souvent des push c est mieux d utiliser le ON PUSH mais ils risquent de surcharger la pipeline, donc je conseille quand même de le faire en ON PULL REQUEST, surtout qu ils vont travailler avec des branches, mais ils sont obliger de créer une pull request>
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<RUNS-ON c est pour préciser sur quelle machine virtuelle on doit lancer les commandes. RUN c est pour executer les commandes>
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<RUN : permet d executer des actions dans notre pipeline comme des script ou commande shell. USE : permet d executer des actions dans notre pipeline venant de source externe>
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<Non, si on fait d abord le build puis on fait les commandes pour verifier nos test, ou faire lint:fix ou prettier:fix et qu il y aura des problemes, ça ne servira a rien car on aura déjà build notre application, il y a un ordre a suivre>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<installer le programme, créer la commande dans le fichier package.json/script, l integrer a la pipeline. Savoir a quel moment appeler le programme dans la pipeline>
```

PS :