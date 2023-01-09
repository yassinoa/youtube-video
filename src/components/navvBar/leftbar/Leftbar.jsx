import './Leftbar.css'
import Menue from './Menue'

const comm=[{id:1,name:"TheBeautiful World",img:"img/pers1.jpg",dat:"6 mois",com:"Really really PROUD of you! I am so glad to see such a thing in Algeria. Keep going and God bless you!"},
            {id:2,name:"Skill MindSet",img:"img/pers2.jpg",dat:"1 an",com:"Nice work"},
            {id:3,name:"Oussama Mokni",img:"img/pers3.jpg",dat:"9 mois",com:"Comment on peut rejoindre ?"}  ]
function Leftbar() {
  return (
    <div className='contL'>
      <div className="conten">
      <iframe width="100%" height="480" src="https://www.youtube.com/embed/olJOZp57FWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h5>Le futur est là. Nous sommes prêts...et vous?</h5>
      <div className="chanel">
        <div className="chanell">
          <img src='img/gomycode.jpg' className='imgc'/>
          <div className="name">
            <h5>Go My Code</h5>
            <h6>96,4 k abonnés</h6>
          </div>
          <button className='abon'>S'abonner</button>
        </div>

        <div className="chanelr">
          <div className="like">
            <div className="liker">
              <i class="fa-solid fa-thumbs-up"></i>
              <h6>64</h6>
            </div>
            <div className="dislake"><i class="fa-solid fa-thumbs-down"></i></div>
          </div>
          <div className="share">
            <i class="fa-solid fa-share"></i>
            <h5>Partager</h5>
          </div>
          <div className="share">
            <i class="fa-solid fa-plus"></i>
            <h5>Enregistrer</h5>
          </div>
          <Menue/>
        </div>
      </div>


      <div className="desc">
          <h5>173 170 vues  15 oct. 2020 <span className="descb">#Dev #développement #future</span> </h5> 
          <p>
          Le futur est là. Nous sommes prêts...et vous? <br/>
            Rejoignez la communauté tech. Rejoignez GOMYCODE !<br/>
            Learn by making !<br/>
            👉<span className="descb"> https://gomycode.com <br/>
            #GOMYCODE #Tech #Dev #Community #LearnByMakin #développement #future #éducation</span>
          </p>
        </div>
        <div className="commentme">
          <div className="commentnbr">
          <h5>3 commentaires</h5>
          </div>
          <div className="commentadd">
            <img src="img/avatar.png" alt="" className='imgp' />
            <input type="text" className='commentt' placeholder='ajouter un commentaire ...' />
          </div>
        </div>

        




        {comm.map((el) => (

<div className="commentall" key={el.id}>
<img src={el.img} alt="" className='imgp' />
<div className="commentname">
   <div className="comname">
     <h6>{el.name}</h6>
     <span>il y a {el.dat}</span>
   </div>
   <div className="com">{el.com}</div>

   <div className="reply">
     <div className="comlike">
       <i class="fa-solid fa-thumbs-up"></i>
     </div>
     <div className="comlike">
       <i class="fa-solid fa-thumbs-down"></i>
     </div>
     <div className="rep">
       Répondre
     </div>
   </div>
</div>
</div>
))} 


        
      
      </div>
    </div>
  )
}

export default Leftbar