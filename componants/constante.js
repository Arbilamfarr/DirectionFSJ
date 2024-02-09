export const btiment={
    batiment:{
        amphi:[
            {name:"ibn younes",
             description:"amphi de cours",
             size:400,
             location:{
                latitude:33.225721, 
                longtitude:-8.486090
             }
            },
             {name:"ibno haitam",
            description:"amphi de cours",
            size:400,
            location:{
               latitude:33.225567, 
               longtitude:-8.487069
            }
           },
            {name:"ibn nafiss",
           description:"amphi de cours",
           size:400,
           location:{
              latitude:33.225109, 
              longtitude:-8.486190
           }
          }, {name:" al farabi",
          description:"amphi de cours",
          size:400,
          location:{
             latitude:33.226098, 
             longtitude:-8.486656
          }
         },
          {name:"nouvel amphi",
         description:"amphi de cours",
         size:400,
         location:{
            latitude:33.224832, 
            longtitude:-8.487301
         }
        },
        {name:"al bayrouni",
         description:"amphi de cours",
         size:400,
         location:{
            latitude:33.225829,
            longtitude: -8.487050
         }
        }
        ],
        departements:[
            {
                name:'Departement informatique',
                size:10,
                description:"departement informatique",
                location:{
                    latitude:33.224953,
                    longtitude:  -8.487587
                 }
            },
            {
                name:' Departement mathematique',
                size:10,
                description:"departement mathematique",
                location:{
                    latitude:33.225209,
                    longtitude:  -8.488017
                 }
            },
            {
                name:'Departement physique',
                size:10,
                description:"departement physique",
                location:{
                    latitude:33.225755, 
                    longtitude: -8.487666
                 }
            },
            {
                name:' Departement biologie',
                size:10,
                description:"departement biologie",
                location:{
                    latitude:33.225394, 
                    longtitude: -8.487715
                 }
            },
        ],
        bibliotheques:[
            {
                name:'bibliotheque 1',
                size : 100,
                description:'bibliotheque grand',
                location:{
                    latitude:33.226234, 
                    longtitude:-8.487283
                }
            },
            {
                name:'bibliotheque 2',
                size : 100,
                description:'bibliotheque nouvelle',
                location:{
                    latitude:33.225062, 
                    longtitude:-8.488461
                }
            },
            {
                name:'hall',
                size : 100,
                description:'hall fsj',
                location:{
                    latitude: 33.226061957557356,
                    longtitude: -8.486190036623457
                }
            }
        ],
        buffets:[
            {
                name:'cafétéria des etudiants',
                description:'cafétéria des etudiants',
                location:{
                    latitude:33.225095,
                    longtitude:-8.485776
                }
            },
            {
                name:'cafétéria des enseignants',
                description:'cafétéria des enseignants',
                location:{
                    latitude:33.226198,
                    longtitude: -8.487536
                }
            }
        ],
        toilettes:[
            {
                name:'toilette 1',
                description:'toilette 1',
                location:{
                    latitude:33.225163, 
                    longtitude:-8.485556
                }
            },
            {
                name:'toilette 2',
                description:'toilette 2',
                location:{
                    latitude:33.22517205627705, 
                    longtitude: -8.487219621709238
                }
            }
        ],
        parking:[
            {
                name:'parking 1',
                description:'parking des voitures 1',
                location:{
                    latitude:33.226656, 
                    longtitude:-8.487453
                }
            },
            {
                name:'parking 2',
                description:'parking des voitures 2',
                location:{
                    latitude: 33.225724, 
                    longtitude: -8.488781
                }
            }
        ],
        administration: {
            name: 'administration',
            description: 'administration faculté sciences chouaib doukalli',
            location: {
                latitude: 33.226440,
                longtitude: -8.486913
            }
        },
        mosquée:{
            name:'salle de prière',
            location:{
                latitude:33.224678,
                longtitude: -8.488083
            }
        },
        ucd:{
            name:"CED",
            description:"Centres d'Etudes Doctorales",
            location:{
                latitude:33.225468, 
                longtitude:-8.488460
            }
        },
        anapec:{
            name:"anapec",
            description:"anapec faculte sciences chouaib doukkali",
            location:{
                latitude:33.22541206115847, 
                longtitude:-8.488564178309101
            }
        },
        laboratoires:[
            {
                name:"laboratoire de technologie",
            description:"laboratoire technologie faculte sciences chouaib doukkali",
            location:{
                latitude:33.22551622544227,
                longtitude: -8.488125950516896
            }
            }, {
                name:"laboratoire de biologie",
            description:"laboratoire biologie faculte sciences chouaib doukkali",
            location:{
                latitude:33.224458,
                longtitude:-8.485962
            }
            }
  
        ],
        terrain:{
            name:"terrain de sports",
            description:"Terrain de sport de la faculté des Sciences Chouaib Dou",
            location:{
                latitude:33.2245115545651,
                longtitude: -8.48754245735959
            }
        },
        affichage:{
  
            name:"bloc d'affichage",
            description:"bloc d'affichage des notes",
            location:{
                latitude:33.225664,
                longtitude: -8.485759
            }
        },
        blocs:[
            {
                name:'bloc A',
                description:'salle 1 --> salle 16',
                location:{
                    latitude:33.225416,
                    longtitude: -8.486133
                }
            },
            {
                name:'bloc B',
                description:'salle 17 --> salle 31',
                location:{
                    latitude:33.225358, 
                    longtitude:-8.485680
                }
            },
            {
                name:'bloc C',
                description:'salle 32 --> salle 39',
                location:{
                    latitude:33.226169,
                    longtitude: -8.487994
                }
            },
            {
                name:'bloc D',
                description:'salle 40 --> salle 56',
                location:{
                    latitude:33.225817, 
                    longtitude:-8.488257
                }
            }
        ]
    }
  }

export const amphis=btiment.batiment.amphi.map((item)=>item.name.toUpperCase())
export const blocs=btiment.batiment.blocs.map((item)=>item.name.toUpperCase())
export const laboratoires=btiment.batiment.laboratoires.map((item)=>item.name.toUpperCase())
export const parking=btiment.batiment.parking.map((item)=>item.name.toUpperCase())
export const toilettes=btiment.batiment.toilettes.map((item)=>item.name.toUpperCase())
export const buffets=btiment.batiment.buffets.map((item)=>item.name.toUpperCase())
export const bibliotheques=btiment.batiment.bibliotheques.map((item)=>item.name.toUpperCase())
export const departements=btiment.batiment.departements.map((item)=>item.name.toUpperCase())
export const affichage=btiment.batiment.affichage.name.toUpperCase()
export const terrain=btiment.batiment.terrain.name.toUpperCase()
export const anapec=btiment.batiment.anapec.name.toUpperCase()
export const ucd=btiment.batiment.ucd.name.toUpperCase()
export const mosquée=btiment.batiment.mosquée.name.toUpperCase()
export const administration=btiment.batiment.administration.name.toUpperCase()

export const places=[...amphis,ucd,administration,...blocs]

const API_GOOGLE_MAP="AIzaSyCVP376eiw8yMgkhk1F03hjtHUomRr_ti4"
const API_GOOGLE_MAP2="AIzaSyDcJRXt4uwyMcsqP1CBepyj1MiOOrmgLZU"