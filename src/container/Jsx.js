let name='Mohan'
function CheckEvenOrOdd(num){
  if (num % 2 == 0){
    return<div>Even</div>
  }
  else{
    return <div>Odd</div>
  }
}

let vov ='m';
function VowelCheck(vov){
  switch(vov){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    return <div>vowel</div>
    default: return <div>consonant</div>  
  }
} 

let num = 4;
const users=[
  {name: 'Mohan', age:25},
  {name: 'ram', age:24},
  {name: 'rohit', age:21}
]
function Jsx() {
  return (
    <div>
      <h2>hello {name}</h2>
      <div>
        {
          CheckEvenOrOdd(4)
        }
        {
          num % 2 === 0 
          ?<div> Even Number </div>
          :<div> Odd Number </div>
        }
        {
          <h3>If Statement</h3>
        }
      </div>
          <h3>Loop</h3>
          {users.map((item,index)=>{
              return <div key={index}>
                {item.name} - {item.age}</div>
            })
          }
        <h3>Switch Statement</h3>
        {
          VowelCheck(vov)
        }
        
    </div>
  );
}

export default Jsx;

