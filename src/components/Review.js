import React, {useState} from 'react'

const Review = () => {
      const list = [
        {
          id: 1,
          name: "susan smith",
          job: "web developer",
          image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
          text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: "anna johnson",
          job: "web designer",
          image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
          text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        },
        {
          id: 3,
          name: "peter jones",
          job: "intern",
          image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
          text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        },
        {
          id: 4,
          name: "bill anderson",
          job: "the boss",
          image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
          text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        },
      ];
      const [index, setIndex] = useState(0);
    
      const ans = list[index];
      
       const nextReview = () => {
        setIndex((prev) => (prev + 1) % list.length);
      };
    
      const prevReview = () => {
        setIndex((prev) => (prev - 1 + list.length) % list.length);
      };
    
       const randomReview = () => {
        let newIndex = Math.floor(Math.random() * list.length);
        if (newIndex === index) {
          newIndex = (index + 1) % list.length;
        }
        setIndex(newIndex);
      };
  return (
    <div>
      <div style={{ border: "1px solid black", display: "flex" , height:'200px', padding:'10px'}}>
        <img className="person-img" src={ans.image} style={{height:'200px', width:'400px'}}></img>
        <div style={{ padding:'10px'}}>
          <h1 className="author" id={`author-${ans.id}`}>{ans.name}</h1>
          <h3 className="job">{ans.job}</h3>
          <h3 className="info">{ans.text}</h3>
        </div>
      </div>
      <div style={{padding:'10px', display:'flex', gap:'10px'}}> 
         <button className="prev-btn" onClick={prevReview}>Prev</button>
    <button className="next-btn" onClick={nextReview}>Next</button>
    <button className="random-btn" onClick={randomReview}>surprise me</button>
      </div>
    </div>
  )
}

export default Review