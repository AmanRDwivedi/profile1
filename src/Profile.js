 function ProfC({title, time, img} ){
// const title= props.title;
// const time = props.time;
// const {title, time} = props;
    return(
       // <img src={img}></img>
<div className="card">
<div className="card-image">
<figure className="image is-1by1">
   <img src={img} alt="someImg"></img>  
</figure>
</div>

<div className="card-content">
<div className="media-content">
<p className="title is-4">Teechnology is {title}</p>
<p className="subtitle is-6">Time Spent is {time}</p>     
</div>
</div>
           </div>
    );
}
export default ProfC;