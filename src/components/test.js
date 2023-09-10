<div className="valve" id={valve.id}>
<div className="valve-number">{`Valve ${index + 1}`}</div>
<img 
  src={`${process.env.PUBLIC_URL}/valve-icon-${valve.status}.png`} 
  alt={valve.status} 
  onClick={() => toggleValve(valve.id)} 
/>
{valve.status}
</div>