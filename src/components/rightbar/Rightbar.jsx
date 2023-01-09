import './Rightbar.css'

const vid=[{id:1,img:"img/vid/vid1.jpg",name:"Mega Hits 2022 🌱 The Best Of Vocal Deep House Music Mix",chanel:"Helios Deep",vue:"209 k",dat:"1 mois"},
           {id:2,img:"img/vid/vid2.jpg",name:"Worakls - Stephan Bodzin - Ben Böhmer - Colyn - Sainte Vie",chanel:"West Cartel",vue:"90 k",dat:"4 mois"},
           {id:3,img:"img/vid/vid3.jpg",name:"Eelke Kleijn at Beograđanka Tower by TIME:CODE",chanel:"TIME : CODE",vue:"2,3 M",dat:"2 ans"},
           {id:4,img:"img/vid/vid4.jpg",name:"Game Changers by Microsoft Surface // Nora En Pure",chanel:"beatport",vue:"4,8 M",dat:"1 an"},
           {id:5,img:"img/vid/vid5.jpg",name:"Be Svendsen live at Mount Nemrut, in Türkiye for Cercle",chanel:"Cercle",vue:"5 M",dat:"1 an"},
           {id:6,img:"img/vid/vid6.jpg",name:"HERNAN CATTANEO b2b NICK WARREN at Loveland Festival",chanel:"Loveland",vue:"968 k",dat:"4 mois"},
           {id:7,img:"img/vid/vid7.jpg",name:"CHILL OUT VIBES",chanel:"Dj Mac Valdés",vue:"16 k",dat:"1 mois"},
           {id:8,img:"img/vid/vid8.jpg",name:"New Year Music Mix 2023 🔊 Best Music 2022 Party Mix 🎵",chanel:"Future House Cloud",vue:"589 k",dat:"3 semaines"},
           {id:9,img:"img/vid/vid9.jpg",name:"Avicii, Kygo, Calvin Harris, Alok, Martin Garrix, Robin Schulz",chanel:"Rammor",vue:"11 M",dat:"7 mois"},
           {id:10,img:"img/vid/vid10.jpg",name:"mazee ‣ In Love ‣ DNDM ‣ Show me the way ‣ Asadov ‣ Moon",chanel:"Dane",vue:"12 k",dat:"2 jours"}
          ]
function Rightbar() {
  return (
    <div className='contr'>
      



{vid.map((el) => (

<div className="vid" key={el.id}>
    <div className="refvid">
      
    <div className="containerr">
          <img src={el.img} alt="Avatar" className="image imgvid"  />
          <div className="middle">
            <div className="text"><i class="fa-brands fa-youtube"></i></div>
          </div>
      </div>


      
    </div>
    <div className="descvid">
      <h5 className='namev'>{el.name}</h5>
      <h5 className='namec'>{el.chanel}</h5>
      <h5 className='vue'>{el.vue} vues &bull; il y a {el.dat}</h5>
    </div>
</div>
  ))} 
  
  </div>

  )
}

export default Rightbar